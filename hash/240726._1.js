function solution(id_list, report, k) {
  const reportedUser = {};
  const count = {};

  for (const r of report) {
    const [userId, reportedId] = r.split(" ");
    if (reportedUser[userId] === undefined) reportedUser[userId] = new Set();
    reportedUser[reportedId].add(userId);
  }

  for (const reportedId of Object.keys(reportedUser)) {
    if (reportedUser[reportedId].size >= k) {
      for (const uid of reportedUser[reportedId]) {
        count[uid] = (count[uid] || 0) + 1;
      }
    }
  }

  for (let i = 0; i < id_list.length; i++) {
    answer.push(count[id_list[i]] || 0);
  }
}
