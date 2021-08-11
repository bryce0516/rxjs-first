const { Observable } = require("rxjs");

const observable1to10$ = Observable.create(function (observer) {
  try {
    console.log("begin");
    for (let value = 1; value <= 10; value++) {
      observer.next(value);
      console.log(`observer.next(${value})`);
    }
  } catch (error) {
    observer.error(error);
  }
  console.log("end");

  return () => console.log(`unsubscribed`);
});

observable1to10$.subscribe(
  (value) => console.log(`next value: ${value}`),
  (error) => console.error(`error`, error.message),
  () => console.log("complete")
);
