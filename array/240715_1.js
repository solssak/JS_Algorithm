// 좌표 평면 벗어나는지 체크하는 함수
function isValidMove(nx, ny) {
  return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5;
}

function updateLocation(x, y, dir) {
  switch (dir) {
    case "U":
      return [x, y + 1];
    case "D":
      return [x, y - 1];
    case "R":
      return [x + 1, y];
    case "L":
      return [x - 1, y];
  }
}

function solution(dirs) {
  let x = 0;
  let y = 0;

  const visited = new Set();
  for (const dir of dirs) {
    const [nx, ny] = updateLocation(x, y, dir);

    if (!isValidMove(nx, ny)) {
      continue;
    }

    // 방문한 길은 양방향으로 체크함
    // 단방향으로 저장하면 두 경로가 같은 경로인지 확인할 방법이 없음
    visited.add(`${x}${y}${nx}${ny}`);
    visited.add(`${nx}${ny}${x}${y}`);

    [x, y] = [nx, ny];
  }

  return visited.size / 2;
}
