/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [];
  let n = asteroids.length;

  for (let i = 0; i < n; i++) {
    if (stack.length === 0) {
      stack.push(asteroids[i]);
    } else {
      if (
        (asteroids[i] > 0 && stack[stack.length - 1] < 0) ||
        (asteroids[i] > 0 && stack[stack.length - 1] > 0) ||
        (asteroids[i] < 0 && stack[stack.length - 1] < 0)
      ) {
        stack.push(asteroids[i]);
      } else {
        let flag = false;
        if (Math.abs(asteroids[i]) > Math.abs(stack[stack.length - 1])) {
          while (stack.length > 0) {
            if (asteroids[i] < 0 && stack[stack.length - 1] > 0) {
              if (Math.abs(asteroids[i]) > Math.abs(stack[stack.length - 1])) {
                stack.pop();
              } else if (
                Math.abs(asteroids[i]) === Math.abs(stack[stack.length - 1])
              ) {
                flag = true;
                stack.pop();
                break;
              } else {
                break;
              }
            } else {
              stack.push(asteroids[i]);
              break;
            }
          }
          if (stack.length === 0 && !flag) {
            stack.push(asteroids[i]);
          }
        } else if (
          Math.abs(asteroids[i]) === Math.abs(stack[stack.length - 1])
        ) {
          stack.pop();
        }
      }
    }
  }

  return stack;
};

// console.log(asteroidCollision([10, 2, -5]));
// console.log(asteroidCollision([5, 10, -5]));
// console.log(asteroidCollision([8, -8]));

console.log(asteroidCollision([2, -1, 1, -2]));
