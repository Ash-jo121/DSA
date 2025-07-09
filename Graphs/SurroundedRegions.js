var solve = function (board) {
  if (!board || board.length === 0) return;

  const m = board.length;
  const n = board[0].length;

  const queue = [];

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // Step 1: Find border 'O's and mark connected 'O's
  const markEscape = (i, j) => {
    queue.push([i, j]);
    board[i][j] = "E";

    while (queue.length) {
      const [x, y] = queue.shift();

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx >= 0 && ny >= 0 && nx < m && ny < n && board[nx][ny] === "O") {
          board[nx][ny] = "E";
          queue.push([nx, ny]);
        }
      }
    }
  };

  // Check border rows
  for (let i = 0; i < m; i++) {
    if (board[i][0] === "O") markEscape(i, 0);
    if (board[i][n - 1] === "O") markEscape(i, n - 1);
  }

  // Check border cols
  for (let j = 0; j < n; j++) {
    if (board[0][j] === "O") markEscape(0, j);
    if (board[m - 1][j] === "O") markEscape(m - 1, j);
  }

  // Step 2 & 3: Flip and restore
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "O") board[i][j] = "X"; // flip surrounded
      else if (board[i][j] === "E") board[i][j] = "O"; // restore escapees
    }
  }
};

// solve([
//   ["X", "X", "X", "X"],
//   ["X", "O", "O", "X"],
//   ["X", "X", "O", "X"],
//   ["X", "O", "X", "X"],
// ]);

solve([
  ["O", "O", "O", "O", "X", "X"],
  ["O", "O", "O", "O", "O", "O"],
  ["O", "X", "O", "X", "O", "O"],
  ["O", "X", "O", "O", "X", "O"],
  ["O", "X", "O", "X", "O", "O"],
  ["O", "X", "O", "O", "O", "O"],
]);
