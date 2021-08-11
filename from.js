const { from } = require("rxjs");

from(
  new Promise((resolve, reject) => {
    console.log(`promise1 begin`);
    setTimeout(() => {
      resolve("promise1 resolve");
    }, 1700);
    console.log(`promise1 end`);
  })
).subscribe(
  (x) => console.log(`[1] next ${x}`),
  (err) => console.error(`[1] error message: ${err}`),
  () => console.log(`[1] completed`)
);

from(
  new Promise((resolve, reject) => {
    console.log(`promise2 begin`);
    setTimeout(() => {
      reject(`promise2 resolve`);
    }, 700);
    console.log(`promise2 end`);
  })
).subscribe(
  (x) => console.log(`[2] next ${x}`),
  (err) => console.error(`[2] error message: ${err}`),
  () => console.log(`[2] completed`)
);
