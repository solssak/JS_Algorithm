function solution(arr1, arr2) {
  const r1 = arr1.length; // 2
  const c1 = arr1[0].length; // 3
  const c2 = arr2[0].length; // 2

  // 결과를 저장할 2차원 배열 초기화
  // 행렬의 크기는 r1 * c2임
  const ret = [];
  for (let i = 0; i < r1; i++) {
    ret.push(new Array(c2).fill(0));
  }

  // 첫 번째 행렬 arr1의 각 행과 두 번째 행렬 arr2의 각 열에 대해
  for (let i = 0; i < r1; i++) {
    for (let j = 0; j < c2; j++) {
      // 두 행렬의 데이터를 곱해 결과 배열에 더해줌
      for (let k = 0; k < c1; k++) {
        ret[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return ret;
}

// 시간 복잡도 n^3
