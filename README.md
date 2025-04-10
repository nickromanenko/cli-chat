# CLI Chat Application

A command-line interface chat application that connects to a bot API, featuring interactive chat, loading animations, and colorized output.

## Features

- Interactive chat interface with readline
- Loading animations during API requests
- Colorized console output
- Thread tracking with UUID
- Simple exit command

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Configuration

Create a `.env` file with the following variable:

```env
MESSAGES_URL=your_bot_api_endpoint_url
```

## Usage

1. Start the application:

```bash
npm start
```

2. Type your message and press Enter to send
3. The bot will respond with its message
4. Type `exit` to quit the chat

## Dependencies

- axios
- colors
- dotenv
- uuid
- @types/node (dev dependency)

## Scripts

- `start`: Runs the TypeScript compiled version
- `dev`: Runs the app in development mode with ts-node
- `build`: Compiles TypeScript to JavaScript
- `lint`: Runs ESLint

## Example

```bash
$ npm start
Bot: Hello! How can I assist you today?
You: Hi there!
Bot: Hello! What can I do for you?
You: exit
Goodbye!
```
