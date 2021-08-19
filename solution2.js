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
  let push1 = [];
  let push2 = [];
  let clo = clothes;

  const recursive = (length, arr, _push1, _push2) => {
    if (length === 0) {
      return false;
    }
    const eliminated = arr.shift();
    _push1.push(eliminated);

    const recursive2 = (a1, arr, a3) => {
      let chk = true;
      let mock = [];
      console.log(a1, arr, a3);
      for (let i = 0; i < arr.length; i++) {
        if (JSON.stringify(a1) === JSON.stringify(arr[i])) {
          chk = false;
        }

        if (a1[1] === arr[i][1]) {
          chk = false;
        }
        mock = [arr[i]].concat([a1]);
      }

      a3.push(a1);

      // console.log("this is a3", mock);
    };

    const value2 = recursive2(eliminated, arr, _push2);

    // console.log("eliminated ==> ", eliminated, "\n");
    // console.log("arr ==> ", arr, "\n");
    // console.log("push1 ==> ", _push1, "\n");
    // console.log("length ==> " + arr.length, "\n");

    return recursive(arr.length, arr, _push1, _push2);
  };

  const value = recursive(clo.length, clo, push1, push2);
}

const sol = solution(cloth1);
console.log(sol);
