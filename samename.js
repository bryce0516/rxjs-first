const data = ["tom", "mike", "jerry", "tom", "mike"];
const mock = [];
const set1 = [...new Set(data)];

for (let i = 0; i < set1.length; i++) {
  let num = 0;
  for (let j = 0; j < data.length; j++) {
    if (set1[i] === data[j]) {
      num += 1;
    }
  }
  if (num === 2) {
    mock.push(set1[i]);
  }
}
console.log(mock);
