let cloth1 = [
  // ["crow_mask", "face"],
  // ["blue_sunglasses", "face"],
  // ["smoky_makeup", "face"],
  // ["yellow_hat", "headgear"],
  // ["blue_sunglasses", "eyewear"],
  // ["green_turban", "headgear"],
  ["blue_sunglasses", "face"],
  ["sd", "eyewear"],
  ["yellow_hat", "headgear"],
  ["green_sunglasses", "eyewear"],
  // ["green_turban", "headgear"],
  // ["blue_turban", "headgear"],
];

function solution(clothes) {
  let object2 = [];
  let object1 = [];

  for (let i = 0; i < clothes.length; i++) {
    let chk = true;
    let temp = [];
    for (let j = 0; j < clothes.length; j++) {
      console.log(
        clothes[j] + " ^^^^^^^^ " + clothes[i],
        JSON.stringify(clothes[j][1]) === JSON.stringify(clothes[i][1])
      );
      if (JSON.stringify(clothes[j][1]) !== JSON.stringify(clothes[i][1])) {
        chk = false;
        object1.push([clothes[i], clothes[j]]);
      }
    }
    // if (chk) {
    //   object1.push(clothes[i]);
    // }
  }
  console.log("this is object1", object1);
  for (let i = 0; i < clothes.length; i++) {
    object2.push(clothes[i][1]);
  }

  let only = [];
  for (let i = 0; i < object2.length; i++) {
    let chk = true;

    for (let j = 0; j < only.length; j++) {
      if (only[j] === object2[i]) {
        chk = false;
      }
    }
    if (chk) {
      only.push(object2[i]);
    }
  }

  let mock = [];
  for (let i = 0; i < clothes.length; i++) {
    for (let j = 0; j < clothes.length; j++) {
      mock.push([clothes[i], clothes[j]]);
    }
  }

  let mock2 = [];
  for (let i = 0; i < mock.length; i++) {
    let chk = true;
    if (JSON.stringify(mock[i][0]) === JSON.stringify(mock[i][1])) {
      chk = false;
    }
    if (mock[i][0][1] === mock[i][1][1]) {
      chk = false;
    }

    // if (JSON.stringify(mock[i][1]) === JSON.stringify(mock[i][1])) {
    //   chk = false;
    // }
    if (chk) {
      mock2.push(mock[i].flat().sort());
    }
  }

  let mock3 = [];
  let mock4 = [];
  for (let i = 0; i < mock2.length; i++) {
    let chk2 = true;
    for (let j = 0; j < mock3.length; j++) {
      if (JSON.stringify(mock2[i]) === JSON.stringify(mock3[j])) {
        chk2 = false;
      }
    }

    if (chk2) {
      mock3.push(mock2[i]);
    }
  }
  // console.log(object2);
  // let justone = clothes.length - mock3.length;
  return mock3.length + clothes.length;
}

const sol = solution(cloth1);
console.log(sol);
