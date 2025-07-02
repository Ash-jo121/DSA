function sumSubarrayMins(arr) {
  const MOD = 1e9 + 7;
  const n = arr.length;
  const stack = [];

  const prevLess = Array(n).fill(-1);
  const nextLess = Array(n).fill(n);

  // Find previous less
  for (let i = 0; i < n; i++) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }
    prevLess[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(i);
  }

  stack.length = 0;

  // Find next less
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    nextLess[i] = stack.length ? stack[stack.length - 1] : n;
    stack.push(i);
  }

  // Compute result
  let result = 0;
  for (let i = 0; i < n; i++) {
    const left = i - prevLess[i];
    const right = nextLess[i] - i;
    result = (result + arr[i] * left * right) % MOD;
  }

  return result;
}
