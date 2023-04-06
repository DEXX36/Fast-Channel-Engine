const express = require("express");
const MyChannelManager = require("./MyChannelManager");
const MyAssetManager = require("./MyAssetManager");

const app = express();
const port = 8080;

const channelManager = new MyChannelManager();
const assetManager = new MyAssetManager();

// Serve the HLS playlist and segments
app.get("/channels/:channelId/:playlist.m3u8", async (req, res) => {
  const channelId = req.params.channelId;
  const playlist = req.params.playlist;
  const vodRequest = {
    playlistId: channelId,
    playlist: playlist,
  };
  const asset = await assetManager.getNextVod(vodRequest);
  const playlistContent = asset.uri;
  res.type("application/vnd.apple.mpegurl");
  res.send(playlistContent);
});

// Serve the MPEG-TS segments
app.get("/channels/:channelId/:segment.ts", async (req, res) => {
  const segmentPath = req.params.segment + ".ts";
  const asset = await assetManager.getNextVod();
  const segmentContent = await assetManager.getSegment(asset, segmentPath);
  res.type("video/MP2T");
  res.send(segmentContent);
});

// Serve the available channels
app.get("/channels", (req, res) => {
  const channels = channelManager.getChannels();
  res.json(channels);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
