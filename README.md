# Telegram StringSession Generator

Generate a `StringSession` for Telegram API to securely authenticate your Telegram account for API access. This tool enables easy session management for Telegram bots or clients.

## Features

- Generates a `StringSession` for Telegram API authentication
- Enables session reuse, reducing the need for re-authentication
- Secure handling and storage of session data
- Works in Node.js environments with `telegram (gramjs)`

## Prerequisites

1. **Telegram API Credentials**: Obtain `API_ID` and `API_HASH` from [Telegram Developer Portal](https://my.telegram.org/auth).
2. **Node.js**: Ensure [Node.js](https://nodejs.org) is installed.

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/jemsgit/telegram-session-generator.git
cd telegram-session-generator
yarn
```

## Configuration

Create a `.env` file in the project root to store your `API_ID` and `API_HASH`:

```plaintext
API_ID=YOUR_API_ID
API_HASH=YOUR_API_HASH
```

## Usage

Run the session generator to create a `StringSession`. Enter your phone number and verification code as prompted:

```bash
node index.js
```

### Example Output

Once logged in, the generated `StringSession` will display:

```plaintext
Your StringSession: 1A2B3C4D5E... (keep this private)
```

Copy and store this `StringSession` securely in your project’s environment file or vault.

## Troubleshooting

- **Invalid Session**: If the session expires, regenerate it by running `generateSession.js` again.
- **Login Issues**: Double-check that `API_ID` and `API_HASH` are accurate.

## License

MIT License. See the `LICENSE` file for more details.

## Contributing

Feel free to open issues or submit PRs to improve this project.
