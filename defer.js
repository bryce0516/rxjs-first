const { defer } = require("rxjs");

const source1 = defer(
  () =>
    new Promise((resolve, reject) => {
      console.log(`promise1 start`);
      setTimeout(() => {
        resolve(`promise1 resolve`);
      }, 700);
      console.log(`promise1 end`);
    })
);
console.log(`source1 created`);

const source2 = defer(
  () =>
    new Promise((resolve, reject) => {
      console.log(`promise2 start`);
      setTimeout(() => {
        resolve(`promise2 resolve`);
      }, 1700);
      console.log(`promise2 end`);
    })
);
console.log(`source2 created`);
console.log(`before source1.subscribe()`);

source1.subscribe(
  (x) => console.log(`1 next ${x}`),
  (err) => console.error(`error.message is ${err}`),
  () => console.log(`1 complteed`)
);

console.log(`after source1.subscribe()`);
console.log(`before source2.subscribe()`);
source2.subscribe(
  (x) => console.log(`2 next ${x}`),
  (err) => console.error(`error.message is ${err}`),
  () => console.log(`2 complteed`)
);

console.log(`after source2.subscribe()`);
