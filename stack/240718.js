// 주식 가격
function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);

  const stack = [0];
  for (let i = 1; i < n; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const top = stack.pop();
      answer[top] = i - top;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const top = stack.pop();
    answer[top] = n - top - 1;
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
