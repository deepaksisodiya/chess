# Chessboard Console Application

This is a simple console application that simulates an empty chessboard and calculates the possible moves of three types of chess pieces: Pawn, King, and Queen.

## Table of Contents

- [Introduction](#introduction)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Input and Output](#input-and-output)
- [Assumptions](#assumptions)
- [Testing](#testing)
- [Code Organization](#code-organization)
- [License](#license)

## Introduction

This console application was developed as part of an assignment to demonstrate proficiency in writing production-ready code with a focus on simple and modular design, clean code practices, unit test case coverage, handling boundary conditions, and code organization.

## Setup Instructions

To run the application, follow these steps:

1. Clone the repository to your local machine.
2. Ensure you have Node.js installed.
3. Install dependencies by running `npm install`.

## Usage

To use the application, run the following command:

```
npm start
```

Follow the prompts to enter the piece type and position, and the application will display the possible moves.

## Input and Output

The input to the program consists of the type of chess piece and its position on the chessboard. For example:

```
Enter piece type (Pawn/King/Queen): Pawn
Enter position (e.g., G1): G1
```

The output will be a list of possible moves for the given piece at its current position.

## Assumptions

- The chessboard is represented as an 8x8 grid with rows labeled from 1 to 8 and columns labeled from A to H.
- The input is assumed to be valid within the constraints defined in the problem statement.
- The application assumes a single player scenario and does not handle scenarios involving multiple players or complex chess rules.

## Testing

The application includes unit tests for each method to ensure its correctness. To run the tests, use the following command:

```
npm run test:unit
```

## Code Organization

The code is organized into multiple modules for improved maintainability and readability. The main module is `chessboard.js`, which contains the implementation of the chessboard and methods for calculating possible moves. Unit tests are located in the `chessboard.test.js` file.

## License

This project is licensed under the [MIT License](LICENSE).
