const { of } = require("rxjs");

let cloth1 = [
  // ["crow_mask", "face"],
  // ["blue_sunglasses", "face"],
  // ["smoky_makeup", "face"],
  // ["yellow_hat", "headgear"],
  // ["blue_sunglasses", "eyewear"],
  // ["green_turban", "headgear"],
  ["sd", "eyewear"],
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

const answer = cloth1.length;
const mock = [];
let num = 0;
let overlap = 0;
let nooverlap = 0;
let total = cloth1.length;
let nooverlapmulti = total - 1;
let copy = [];
const check = (arr, arr2) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr[i] !== arr2[j]) {
        copy.push([arr[i], arr2[j]]);
      }
    }
  }

  // for (let i = 0; i < arr.length; i++) {
  //   let chk = true;

  //   for (let j = 0; j < mock.length; j++) {
  //     if (mock[j] === arr[i]) {
  //       num += 1;
  //       chk = false;
  //     }
  //   }
  //   if (chk) {
  //     mock.push(arr[i]);
  //   }
  // }

  let mkSet = [...new Set(object2)];
  console.log(num, mock, mkSet.length);
  if (mkSet.length > 1) return { length: mkSet.length, multi: num };
  if (mkSet.length <= 1) return { length: 0, multi: 0 };

  // overlap = total - num + 1;
  // nooverlap = total - overlap;
  // console.log(copy);
  // // console.log(total - 1, nooverlap, mock.length, overlap);
  // const result = (total - 1) * nooverlap + mock.length * overlap;
  return copy.length;
};

const value = check(object2, object2);
console.log(value);

// console.log(value.length, value.multi);
// console.log(answer + value.length * value.multi);

// const getCombinations = function (arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) return arr.map((el) => [el]);
//   // n???????????? 1??? ????????? ???(nC1), ?????? ?????? ????????? ?????? return

//   arr.forEach((fixed, index, origin) => {
//     const rest = origin.slice(index + 1);
//     // ???????????? fixed??? ????????? ????????? ???
//     const combinations = getCombinations(rest, selectNumber - 1);
//     // ???????????? ????????? ????????? ?????????.
//     const attached = combinations.map((el) => [fixed, ...el]);
//     //  ????????? ????????? ??? ??????(fixed) ??? ?????????
//     results.push(...attached);
//     // ?????? spread syntax ??? ????????? push
//   });
//   return results; // ?????? ?????? results return
// };

// console.log(getCombinations(object2, 1));
