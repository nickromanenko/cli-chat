import axios from 'axios';
import colors from 'colors';
import readline from 'readline';
import { v4 as uuidv4 } from 'uuid';

// Configure colors
colors.enable();

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Generate thread_id
const threadId = uuidv4();

// Loading animation frames
const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
let frameIndex = 0;

// Function to show loading animation
function showLoading() {
    process.stdout.write('\r' + frames[frameIndex]);
    frameIndex = (frameIndex + 1) % frames.length;
}

// Function to clear loading animation
function clearLoading() {
    process.stdout.write('\r');
}

// Function to send message to the bot
async function sendMessage(content: string) {
    const loadingInterval = setInterval(showLoading, 100);

    try {
        const response = await axios.post('http://localhost:3000/bots/fd955737-6453-48bf-b7fa-ac60eac23778/messages', {
            thread_id: threadId,
            content: content,
        });
        clearInterval(loadingInterval);
        clearLoading();
        console.log(colors.yellow('\nBot: ' + response.data.message));
    } catch (error) {
        clearInterval(loadingInterval);
        clearLoading();
        console.error(colors.red('\nError: ' + (error as Error).message));
    }
}

// Main chat loop
async function chat() {
    console.log(colors.yellow('Bot: Hello! How can I assist you today?'));

    const askQuestion = () => {
        rl.question('You: ', async input => {
            if (input.toLowerCase() === 'exit') {
                rl.close();
                return;
            }

            await sendMessage(input);
            askQuestion(); // Continue the chat loop
        });
    };

    askQuestion();
}

// Start the chat
chat();

// Handle readline close
rl.on('close', () => {
    console.log('\nGoodbye!');
    process.exit(0);
});
