function solution(N, stages) {
  // 각 스테이지에 머물러있는 참가자 구하기.
  // array idx를 stage num으로 활용하기 위해 N + 2
  const challenger = new Array(N + 2).fill(0);
  for (stage of stages) {
    challenger[stage] += 1;
  }

  // 실패율 구하기
  const fails = {};
  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      fails[i] += 0;
    }
    fails[i] = challenger[i] / total;
    total -= challenger[i];
  }

  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);
  return result.map((v) => Number(v[0]));
}
