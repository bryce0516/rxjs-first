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

let object1 = [];
let object2 = [];
let final = [];
for (let i = 0; i < cloth1.length; i++) {
  object1.push(cloth1[i][0]);
  object2.push(cloth1[i][1]);
}

for (let i = 0; i < object1.length; i++) {
  final[object1[i]] = object2[i];
}
