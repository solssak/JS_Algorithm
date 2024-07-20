// stack

const stack = []; // 스택 생성

function push(stack, item) {
  // 스택에 데이터를 추가하는 함수
  stack.push(item);
}

function pop(stack) {
  // 스택에서 데이터를 꺼내는 함수
  if (stack.length !== 0) return stack.pop();
}
