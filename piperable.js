const { range } = require("rxjs");
const { filter, map, scan } = require("rxjs/operators");

range(1, 10)
  .pipe(
    filter((value) => value % 2 === 0),
    map((value) => value + 1)
  )
  .subscribe((value) => console.log(value));

// range(0, 10)
//   .pipe(
//     filter(
//       (x) => x % 2 === 0,
//       map((x) => x + x),
//       scan((acc, x) => acc + x, 0)
//     )
//   )
//   .subscribe((x) => console.log(x));
