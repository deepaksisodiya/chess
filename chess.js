class Chessboard {
    displayBoard() {
        const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        const rows = ['1', '2', '3', '4', '5', '6', '7', '8'];
    
        for (let i = 7; i >= 0; i--) {
          let row = '';
          for (let j = 0; j < columns.length; j++) {
            row += `${rows[i]}${columns[j]}` + ' ';            
          }
          console.log(row);
        }
    }

    // pawns can only move one step forward
    getPawnPossibleMoves(row, column) {
      const possibleMoves = [];
      if (row < 8) {
        const newRow = row + 1;
        possibleMoves.push(`${column}${newRow}`);
      }
      return possibleMoves;
    }

    /*

    column.charCodeAt(0) + colOffset: This expression calculates the new Unicode value
    String.fromCharCode(...): This method converts a Unicode value into a character

    Suppose the current column is 'D' (Unicode value 68).
    If colOffset is 1, it means we want to move the King one column to the right.
    So, column.charCodeAt(0) + colOffset becomes 68 + 1 = 69.
    String.fromCharCode(69) returns 'E', indicating that the new column is 'E'.
    */
    getKingPossibleMoves(row, column) {
      const possibleMoves = [];
      const directions = [-1, 0, 1];
      // Iterate over each possible row offset (-1, 0, 1)
      [-1, 0, 1].forEach(rowOffset => {
        // Iterate over each possible column offset (-1, 0, 1)
        [-1, 0, 1].forEach(colOffset => {
          // Skip the current position (0, 0)
          if (!(rowOffset === 0 && colOffset === 0)) {
            // Calculate new row and column positions
            const newRow = row + rowOffset;
            const newColumn = String.fromCharCode(column.charCodeAt(0) + colOffset);
            console.log('newColumn ', newColumn);
            
            // Check if the new position is within the chessboard bounds
            if (newRow >= 1 && newRow <= 8 && newColumn >= 'A' && newColumn <= 'H') {
              // Add the new position to the possibleMoves array
              possibleMoves.push(`${newColumn}${newRow}`);
            }
          }
        });
      });

      return possibleMoves;
    }

    getQueenPossibleMoves(row, column) {
      const possibleMoves = [];
      const directions = [-1, 0, 1];

      // Iterate over each possible row offset (-1, 0, 1)
      directions.forEach(rowOffset => {
        // Iterate over each possible column offset (-1, 0, 1)
        directions.forEach(colOffset => {
          // Skip the current position (0, 0)
          if (!(rowOffset === 0 && colOffset === 0)) {
            let newRow = row + rowOffset;
            let newColumn = String.fromCharCode(column.charCodeAt(0) + colOffset);

            // Move in the current direction until we reach the edge of the board
            while (newRow >= 1 && newRow <= 8 && newColumn >= 'A' && newColumn <= 'H') {
                // Add the new position to the possibleMoves array
                possibleMoves.push(`${newColumn}${newRow}`);
                newRow += rowOffset; // Move to the next row in the same direction
                newColumn = String.fromCharCode(newColumn.charCodeAt(0) + colOffset); // Move to the next column in the same direction
            }
          }
        });
      });

      return possibleMoves;
    }

    getPossibleMoves(pieceType, position) {
        const column = position[0];
        const row = parseInt(position[1]);
        let possibleMoves;

        switch (pieceType) {
          case "Pawn":
            possibleMoves = this.getPawnPossibleMoves(row, column);
            break;
          case "King":
            possibleMoves = this.getKingPossibleMoves(row, column);
            break;
          case "Queen":
            possibleMoves = this.getQueenPossibleMoves(row, column);
            break;
          default:
            console.log("Invalid piece");
        }

        return possibleMoves;
    }
}

const chessboard = new Chessboard();
chessboard.displayBoard();

const pawnPossibleMoves = chessboard.getPossibleMoves('Pawn', 'G1');
console.log('pawnPossibleMoves ', pawnPossibleMoves);

const kingPossibleMoves = chessboard.getPossibleMoves('King', 'D5');
console.log('kingPossibleMoves ', kingPossibleMoves);

const queenPossibleMoves = chessboard.getPossibleMoves('Queen', 'E4');
console.log('queenPossibleMoves ', queenPossibleMoves);