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
}

const chessboard = new Chessboard();
chessboard.displayBoard();