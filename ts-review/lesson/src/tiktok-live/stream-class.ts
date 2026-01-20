// instance type use to get the type inside class constructor
import { TikTokLiveConnection, WebcastEvent } from "tiktok-live-connector";
import say from "say";

class LiveStreamSpeakRecognizer {
  public streamer: string;
  private connection: TikTokLiveConnection;

  constructor(username: string) {
    this.streamer = username;
    this.connection = new TikTokLiveConnection(username);
  }

  connect() {
    return this.connection
      .connect()
      .then((state) => {
        console.info(`Connected to roomId ${state.roomId}`);
        this.setupListener();
      })
      .catch((err) => {
        console.error("Failed to connect", err);
      });
  }

  setupListener() {
    this.getComments();
    this.getJoinedUsername();
    this.getFollowers();
    this.getGift();
  }

  protected getComments() {
    return this.connection.on(WebcastEvent.CHAT, (data) => {
      console.log(
        `${data?.user?.nickname ?? "Anonymous"}  says ${data.comment}`,
      );
      say.speak(
        `${data?.user?.nickname ?? "Anonymous"}  says ${data.comment}`,
        "Rosa",
        1,
      );
    });
  }

  protected getJoinedUsername() {
    return this.connection.on(WebcastEvent.MEMBER, (data) => {
      say.speak(
        `${data?.user?.nickname ?? "Anonymous"} visit on your livestream`,
        "Rosa",
        1,
      );
    });
  }

  protected getFollowers() {
    return this.connection.on(WebcastEvent.FOLLOW, (data) => {
      say.speak(
        `${data?.user?.nickname ?? "Anonymous"} followed you`,
        "Rosa",
        1,
      );
    });
  }

  protected getGift() {
    return this.connection.on(WebcastEvent.GIFT, (data) => {
      say.speak(
        `${data?.user?.nickname ?? "Anonymous"} send ${data.giftDetails?.giftName}`,
        "Rosa",
        1,
      );
    });
  }
}

type ILiveStream = InstanceType<
  ReturnType<() => typeof LiveStreamSpeakRecognizer>
>;

const getLiveCount: ILiveStream = new LiveStreamSpeakRecognizer("techdev_01");

getLiveCount.connect();

//curl "https://www.tiktok.com/@techdev_01/live"

export default LiveStreamSpeakRecognizer;
