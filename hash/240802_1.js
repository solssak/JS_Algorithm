function solution(id_list, report, k) {
  const reportedUser = {};
  const count = {};

  for (const r of report) {
    const [userId, reportedId] = r.split(" ");
    if (reportedUser[reportedId] === undefined) {
      reportedUser[reportedId] = new Set();
    }
    reportedUser[reportedId].add(userId);
  }

  for (const reportedId of Object.keys(reportedUser)) {
    if (reportedUser[reportedId].size >= k) {
      for (const uid of reportedUser[reportedId]) {
        count[uid] = (count[uid] || 0) + 1;
      }
    }
  }
  console.log(count);
  const answer = [];
  for (let i = 0; i < id_list.length; i++) {
    answer.push(count[id_list[i]] || 0);
  }

  return answer;
}

const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
const k = 2;

console.log(solution(id_list, report, k)); // [2, 1, 1, 0]
