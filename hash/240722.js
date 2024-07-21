// 완주하지 못한 선수

function solution(participant, completion) {
  const obj = {};

  for (const p of participant) {
    if (obj[p]) {
      obj[p]++;
    } else {
      obj[p] = 1;
    }
  }

  for (const c of completion) {
    obj[c]--;
  }

  for (const key in obj) {
    if (obj[key] > 0) {
      return key;
    }
  }
}
