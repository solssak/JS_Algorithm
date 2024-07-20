// 괄호 회전하기

function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    let isCorrect = true;
    for (let j = 0; j < s.length; j++) {
      // 인덱스로 사용한 부분
      const c = s[(i + j) % s.length];

      if (c === "[" || c === "(" || c === "{") {
        stack.push(c);
      } else {
        if (stack.length === 0) {
          isCorrect = false;
          break;
        }

        const top = stack[stack.length - 1];
        if (c === "]" && top === "[") {
          stack.pop();
        } else if (c === ")" && top === "(") {
          stack.pop();
        } else if (c === "}" && top === "{") {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }
      }
    }
    if (isCorrect && stack.length === 0) answer += 1;
  }

  return answer;
}
