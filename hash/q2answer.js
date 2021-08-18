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
  let object1 = [];
  let object2 = [];

  for (let i = 0; i < clothes.length; i++) {
    object1.push(clothes[i][0]);
    object2.push(clothes[i][1]);
  }

  let copy = [];
  const check = (arr, arr2) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr[i][1] !== arr2[j][1]) {
          const concated = arr[i].concat(arr2[j]).sort();
          copy.push(concated);
        }
      }
    }
  };
  // function compare(a, b) {
  //   console.log("this is a ,b", a, b);
  //   if (a < b) {
  //     return -1;
  //   }
  //   if (a > b) {
  //     return 1;
  //   }
  //   return 0;
  // }

  const value = check(clothes, clothes);
  // const change = copy.sort(compare);
  console.log("this is cahnge sort", copy);
  let mock = [];
  let num = 0;
  for (let i = 0; i < copy.length; i++) {
    let chk = true;

    for (let j = 0; j < mock.length; j++) {
      if (JSON.stringify(mock[j]) === JSON.stringify(copy[i])) {
        num += 1;
        chk = false;
      }
    }
    if (chk) {
      mock.push(copy[i]);
    }
  }

  console.log("this is mock", mock);
  let mkSet = [...new Set(object2)];
  var answer = mock.length + clothes.length;
  // console.log("this is mkSet", mkSet);
  // var answer = mkSet.length > 1 ? copy.length : mkSet.length * clothes.length;
  console.log("this is sol", answer);

  return answer;
}
const sol = solution(cloth1);
