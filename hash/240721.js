// p.240 두 개의 수로 특정 값 만들기

function countSort(arr, k) {
  const hashtable = new Array(k + 1).fill(0);

  for (const num of arr) {
    if (num <= k) {
      hashtable[num] = 1;
    }
  }
  return hashtable;
}

function solution(arr, target) {
  const hashtable = countSort(arr, target);
  console.log(hashtable[5]);
  for (const num of arr) {
    const complement = target - num;
    console.log(complement);

    if (
      complement !== num && // 같은 숫자를 두번 사용하지 않도록
      complement >= 0 &&
      complement <= target &&
      hashtable[complement] === 1
    ) {
      return true;
    }
  }

  return false;
}

console.log(solution([1, 2, 3], 6));
