//@ts-nocheck
import * as googleTTS from "google-tts-api"; // ES6 or TypeScript

// Username of someone who is currently live
import { TikTokLiveConnection, WebcastEvent } from "tiktok-live-connector";
import say from "say";

const tiktokUsername = "techdev_01";

// Create a new wrapper object and pass the username
const connection = new TikTokLiveConnection(tiktokUsername);

// Connect to the chat (await can be used as well)
connection
  .connect()
  .then((state) => {
    console.info(`Connected to roomId ${state.roomId}`);
  })
  .catch((err) => {
    console.error("Failed to connect", err);
  });

// Define the events that you want to handle
// In this case we listen to chat messages (comments)
connection.on(WebcastEvent.CHAT, (data) => {
  console.log(`${data.user.nickname}  says ${data.comment}`);
  say.speak(`${data.user.nickname}  says ${data.comment}`, "Rosa", 1);
});

// And here we receive gifts sent to the streamer
connection.on(WebcastEvent.GIFT, (data) => {
  console.log(
    `${data.user.uniqueId} (userId:${data.user.userId}) sends ${data.giftId}`,
  );

  say.speak(`${data.user.nickname}  says ${data.giftId}`, "Rosa", 1);
});

connection.on(WebcastEvent.FOLLOW, (data) => {
  console.log(
    `${data.user.uniqueId} (userId:${data.user.userId}) sends ${data.followCount}`,
  );

  say.speak(`${data.user.nickname}  says ${data.followCount}`, "Rosa", 1);
});
connection.on(WebcastEvent.MEMBER, (data) => {
  console.log(
    `${data.user.uniqueId} (userId:${data.user.userId}) sends ${data.followCount}`,
  );

  say.speak(`${data.user.nickname} visit on your livestream`, "Rosa", 1);
});
