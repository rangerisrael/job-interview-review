// //@ts-nocheck

import Monitoring from "./basic/namespace";

// import fs from "fs";
// import path from "path";
// import textToSpeech from "@google-cloud/text-to-speech";

// const client = new textToSpeech.TextToSpeechClient();

// async function speak() {
//   const text = "Sabi ni Juan, magandang gabi sa inyong lahat";

//   const request = {
//     input: { text },
//     voice: {
//       languageCode: "fil-PH",
//       name: "fil-PH-Neural2-A", // ⭐ Natural Tagalog
//     },
//     audioConfig: {
//       audioEncoding: "MP3",
//       speakingRate: 0.95,
//       pitch: 0,
//     },
//   };

//   const [response] = await client.synthesizeSpeech(request);

//   const outputFile = path.resolve("output.mp3");
//   fs.writeFileSync(outputFile, response.audioContent, "binary");

//   console.log("🔊 Speech saved as output.mp3");
// }

// speak();

const { Log, History } = Monitoring;

console.log(Log(), History());

console.log(Monitoring.Log());
