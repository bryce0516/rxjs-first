const { interval } = require("rxjs");
const { take, debounce, tap } = require("rxjs/operators");
const sourceInterval = 1000;

interval(sourceInterval)
  .pipe(
    take(4),
    debounce((srcVal) =>
      interval(
        srcVal % 2 === 0 ? sourceInterval * 1.2 : sourceInterval * 0.8
      ).pipe(
        tap((innerVal) =>
          console.log(`sourceInterval : ${srcVal}
                      innerInterval : ${innerVal}`)
        )
      )
    )
  )
  .subscribe((x) => console.log(`result ${x}`));
