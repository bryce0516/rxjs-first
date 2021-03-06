const { interval } = require("rxjs");
const { filter } = require("rxjs/operators");

let divisor = 2;
setInterval(() => {
  divisor = (divisor + 1) % 10;
}, 500);

interval(700)
  .pipe(
    filter(function (value) {
      return value % divisor == 0;
    })
  )
  .subscribe((value) => console.log(value));

// interval(700)
//   .pipe(
//     filter(function (value) {
//       return value;
//     })
//   )
//   .subscribe((value) => console.log(value));
