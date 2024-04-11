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

    getPawnPossibleMoves(row, column) {
      const possibleMoves = [];
      if (row < 8) {
        const newRow = row + 1;
        possibleMoves.push(`${column}${newRow}`);
      }
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
          default:
            console.log("Invalid piece");
        }

        return possibleMoves;
    }
}

const chessboard = new Chessboard();
chessboard.displayBoard();
const possibleMoves = chessboard.getPossibleMoves('Pawn', 'G1');
console.log('possibleMoves ', possibleMoves);