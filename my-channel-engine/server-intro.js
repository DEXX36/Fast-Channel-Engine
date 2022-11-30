const { ChannelEngine } = require('eyevinn-channel-engine');

class MyAssetManager {
    async getNextVod(vodRequest) {
        return {};
    } 
}

class MyChannelManager {
    getChannels() {
        return [];
    }
}

const myAssetManager = new MyAssetManager();
const myChannelManager = new MyChannelManager();
const engine = new ChannelEngine(myAssetManager, { channelManager: myChannelManager });
engine.start();
engine.listen(process.env.PORT || 8080);const { ChannelEngine } = require('eyevinn-channel-engine');

class MyAssetManager {
    async getNextVod(vodRequest) {
        return {};
    } 
}

class MyChannelManager {
    getChannels() {
        return [];
    }
}

const myAssetManager = new MyAssetManager();
const myChannelManager = new MyChannelManager();
const engine = new ChannelEngine(myAssetManager, { channelManager: myChannelManager });
engine.start();
engine.listen(process.env.PORT || 8080);