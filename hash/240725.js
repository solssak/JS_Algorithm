function solution(genres, plays) {
  let answer = [];
  const genresObj = {};
  const playObj = {};

  for (let i = 0; i < genres.length; i++) {
    genre = genres[i];
    play = plays[i];

    if (!(genre in genresObj)) {
      genresObj[genre] = [];
      playObj[genre] = 0;
    }

    genresObj[genre].push([i, play]);
    playObj[genre] += play;
  }

  sortedSongs = Object.keys(playObj).sort((a, b) => playObj[b] - playObj[a]);

  for (const genre of sortedSongs) {
    sortedGernes = genresObj[genre].sort((a, b) => {
      return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1];
    });

    answer.push(...sortedGernes.slice(0, 2).map((song) => song[0]));
  }

  return answer;
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

console.log(solution(genres, plays)); // [4, 1, 3, 0]
