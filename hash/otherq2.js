let cloth1 = [
  // ["crow_mask", "face"],
  // ["blue_sunglasses", "face"],
  // ["smoky_makeup", "face"],
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
  // ["sd", "eyewear"],
];

function solution(clothes) {
  console.log(clothes);
  let count = clothes.reduce((a, c) => {
    console.log(a[c[1]]);
    a[c[1]] = a[c[1]] ? a[c[1]] + 1 : 1;
    return a;
  }, {});
  //count = {headgear:2, eyewear:1}
  let number = Object.values(count);

  //number = {2,1}
  let result = 1;
  number.forEach((e) => (result *= e + 1));

  return result - 1;
}

const sol = solution(cloth1);
