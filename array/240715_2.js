// n ^ 2 배열 자르기
// 2차원 배열의 좌표는 Math.max(x, y) + 1로 표현할 수 있음

function solution(n, left, right) {
  const ans = [];

  while (left <= right) {
    ans.push(Math.max(Math.floor(left / n), left % n) + 1);
    left++;
  }

  return ans;
}
