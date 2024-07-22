// 오픈채팅방

function solution(record) {
  answer = [];
  uid = {};

  for (line in record) {
    cmd = record[line].split(" ");
    if (cmd[0] != "Leave") uid[cmd[1]] = cmd[2];
  }

  for (line in record) {
    cmd = record[line].split(" ");

    if (cmd[0] == "Enter") answer.push(uid[cmd[1]] + "님이 들어왔습니다.");
    else if (cmd[0] == "Leave") answer.push(uid[cmd[1]] + "님이 나갔습니다.");
  }

  return answer;
}

const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

solution(record); // ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
