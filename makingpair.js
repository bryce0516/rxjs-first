const data = ["tom", "mike", "jerry"];
let mock = [];
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    if (data[i] !== data[j]) {
      mock.push([data[i], data[j]].sort());
    }
    // console.log(data[i] + "  ~~~~~~~  " + data[j]);
  }
}

let set1 = [...new Set(mock)];
let mock2 = [];
for (let i = 0; i < mock.length; i++) {
  let chk = true;
  for (let j = 0; j < mock2.length; j++) {
    if (JSON.stringify(mock[i]) === JSON.stringify(mock2[j])) {
      chk = false;
    }
  }

  if (chk) {
    mock2.push(mock[i]);
  }
}

console.log(mock2);
