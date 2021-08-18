const data = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

let initialValue = [];

let reducer = function (acc, val, index, array) {
  console.log(acc[val[1]]);
  acc[val[1]] = acc[val[1]] ? acc[val[1]] + 1 : 1;
  return acc;
};

let result = data.reduce(reducer, initialValue);

console.log(result);
