// 10진수 2진수로 변환하기

function solution(n) {
  const stack = [];

  while (n > 0) {
    const remainder = n % 2;
    stack.push(remainder);
    n = Math.floor(n / 2);
  }

  return stack.reverse().join("");
}

console.log(solution(12345));
