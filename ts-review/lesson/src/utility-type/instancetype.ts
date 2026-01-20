import LiveStreamSpeakRecognizer from "../tiktok-live/stream-class";

type ILiveStream = InstanceType<
  ReturnType<() => typeof LiveStreamSpeakRecognizer>
>;

const getLiveCount: ILiveStream = new LiveStreamSpeakRecognizer("techdev_01");

getLiveCount.connect();

//curl "https://www.tiktok.com/@techdev_01/live"
