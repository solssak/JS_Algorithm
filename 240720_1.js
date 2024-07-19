// 기능 개발
function solution(progresses, speeds) {
  const answer = [];
  const n = progresses.length;
  // 각 작업의 배포 가능일 계산
  const daysLeft = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));

  let count = 0; // 배포될 작업의 수
  let maxDay = daysLeft[0]; // 현재 배포될 작업 중 가장 늦게 배포될 작업의 가능일

  for (let i = 0; i < n; i++) {
    if (daysLeft[i] <= maxDay) {
      count++;
      console.log(count);
    } else {
      answer.push(count);
      count = 1;
      maxDay = daysLeft[i];
    }
  }

  answer.push(count);
  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1]));
