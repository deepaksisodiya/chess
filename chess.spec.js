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

  test('getKingPossibleMoves method should return possible moves for a king', () => {
    const possibleMoves = chessboard.getKingPossibleMoves(5, 'D');
    expect(possibleMoves).toEqual(['C4', 'D4', 'E4', 'C5', 'E5', 'C6', 'D6', 'E6']);
  });

  test('getQueenPossibleMoves method should return possible moves for a queen', () => {
    const possibleMoves = chessboard.getQueenPossibleMoves(4, 'E');
    expect(possibleMoves).toEqual([
      'D3', 'C2', 'B1', 'E3', 'E2',
      'E1', 'F3', 'G2', 'H1', 'D4',
      'C4', 'B4', 'A4', 'F4', 'G4',
      'H4', 'D5', 'C6', 'B7', 'A8',
      'E5', 'E6', 'E7', 'E8', 'F5',
      'G6', 'H7'
    ]);
  });

  test('getPossibleMoves method should return possible moves for a given chess piece', () => {
    const pawnPossibleMoves = chessboard.getPossibleMoves('Pawn', 'D2');
    expect(pawnPossibleMoves).toEqual(['D3']);

    const kingPossibleMoves = chessboard.getPossibleMoves('King', 'D5');
    expect(kingPossibleMoves).toEqual(['C4', 'D4', 'E4', 'C5', 'E5', 'C6', 'D6', 'E6']);

    const queenPossibleMoves = chessboard.getPossibleMoves('Queen', 'E4');
    expect(queenPossibleMoves).toEqual([
      'D3', 'C2', 'B1', 'E3', 'E2',
      'E1', 'F3', 'G2', 'H1', 'D4',
      'C4', 'B4', 'A4', 'F4', 'G4',
      'H4', 'D5', 'C6', 'B7', 'A8',
      'E5', 'E6', 'E7', 'E8', 'F5',
      'G6', 'H7'
    ]);
  });

  test('getPossibleMoves method should return error for invalid piece type', () => {
    const invalidPieceType = 'InvalidPiece';
    const position = 'A1';
    const possibleMoves = chessboard.getPossibleMoves(invalidPieceType, position);
    expect(possibleMoves).toBe('Invalid piece type');
  });

  test('getPossibleMoves method should return error for invalid position', () => {
    const pieceType = 'Pawn';
    const invalidPosition = 'Z9';
    const possibleMoves = chessboard.getPossibleMoves(pieceType, invalidPosition);
    expect(possibleMoves).toBe('Invalid position');
  });

  test('should return true for valid position', () => {
    expect(chessboard.isValidPosition(1, 'A')).toBe(true);
    expect(chessboard.isValidPosition(8, 'H')).toBe(true);
  });

  test('should return false for invalid position', () => {
    expect(chessboard.isValidPosition(0, 'A')).toBe(false);
    expect(chessboard.isValidPosition(8, 'I')).toBe(false);
  });

  test('should return true for valid piece type', () => {
    expect(chessboard.isValidPieceType('Pawn')).toBe(true);
    expect(chessboard.isValidPieceType('Queen')).toBe(true);
  });

  test('should return false for invalid piece type', () => {
    expect(chessboard.isValidPieceType('Kingg')).toBe(false);
    expect(chessboard.isValidPieceType('random')).toBe(false);
  });
});
