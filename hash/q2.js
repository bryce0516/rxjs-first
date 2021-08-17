let cloth1 = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

let cloth2 = [
  ["crow_mask", "face"],
  ["blue_sunglasses", "face"],
  ["smoky_makeup", "face"],
];

let ob = new Object();
let object1 = [];
let object2 = [];
let final = [];
let temp = {};
for (let i = 0; i < cloth1.length; i++) {
  object1.push(cloth1[i][0]);
  object2.push(cloth1[i][1]);
}

for (let i = 0; i < object1.length; i++) {
  temp[object1[i]] = object2[i];
}

let objv = { a: 5, b: 7, c: 4, d: 0, e: 1 };
let result_map = Object.keys(objv).map(function (key) {
  return [String(key), objv[key]];
});
for (let i = 0; i < result_map.length; i++) {
  for (let j = 0; j < result_map[i].length; j++) {
    console.log("this is ", result_map[i][j]);
    console.log(i, j);
  }
}

const vi = Object.fromEntries(cloth1);
console.log(vi);

// console.log(result_map);
// const vi = Object.fromEntries(cloth1);
// Object.entries(vi).map(([key, val]) => final.push({ key: val }));
// console.log(final);

// const redduc = cloth1.map((obj, v) => {
//   console.log("this is obj", obj, "this is v", v);
// });
