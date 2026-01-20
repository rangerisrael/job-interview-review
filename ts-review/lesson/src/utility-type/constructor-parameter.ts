import LiveStreamSpeakRecognizer from "../tiktok-live/stream-class";

type ILiveParams = ConstructorParameters<typeof LiveStreamSpeakRecognizer>;
type ILiveStream = InstanceType<typeof LiveStreamSpeakRecognizer>;
//curl "https://www.tiktok.com/@techdev_01/live"

const username: ILiveParams = ["techdev_01"];

const setupListener: ILiveStream = new LiveStreamSpeakRecognizer(username[0]);
setupListener.connect();
