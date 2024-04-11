import Chessboard from './chess';

describe('Chessboard', () => {
  let chessboard;

  beforeEach(() => {
    chessboard = new Chessboard();
  });

  test('getPawnPossibleMoves method should return possible moves for a pawn', () => {
    const possibleMoves = chessboard.getPawnPossibleMoves(2, 'D');
    expect(possibleMoves).toEqual(['D3']);
  });
});
