const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input");
require("dotenv").config();

const apiId = parseInt(process.env.API_ID, 10);
const apiHash = process.env.API_HASH;
const stringSession = new StringSession("");

async function generateStringSession() {
  console.log("Generating StringSession...");
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });

  await client.start({
    phoneNumber: async () => await input.text("Enter your phone number:"),
    password: async () => await input.text("Enter your password (if any):"),
    phoneCode: async () => await input.text("Enter the code you received:"),
    onError: (err) => console.log(err),
  });

  console.log("Connected successfully!");
  console.log("Your StringSession:", client.session.save()); // Save this session string securely

  await client.disconnect();
}

generateStringSession();
