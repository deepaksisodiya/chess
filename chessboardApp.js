import readline from 'readline';
import Chessboard from './chess.js';

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Create a new Chessboard instance
const chessboard = new Chessboard();

// Function to handle user input
function getUserInput() {
  rl.question('Enter piece type (Pawn/King/Queen): ', (pieceType) => {
    rl.question('Enter position (e.g., G1): ', (position) => {
      const possibleMoves = chessboard.getPossibleMoves(pieceType, position);
      console.log('Possible moves:', possibleMoves);
      rl.close();
    });
  });
}

// Call the getUserInput function to start the interaction
getUserInput();
