const { Observable } = require("rxjs");
const { map, toArray } = require("rxjs/operators");

const observableCreated$ = Observable.create(function (observer) {
  observer.next(1);
  observer.next(2);
  observer.complete();
});

observableCreated$
  .pipe(
    map(function (value) {
      return value * 2;
    })
  )
  .subscribe(function next(item) {
    console.log(item);
  });

console.log(
  [1, 2]
    .map(function (value) {
      return value * 2;
    })
    .map(function (value) {
      return value + 1;
    })
    .map(function (value) {
      return value * 3;
    })
);

const observableCreated2$ = Observable.create(function (observer) {
  console.log("observer begin");
  const arr = [1, 2];
  for (let i = 0; i < arr.length; i++) {
    console.log(`current array: arr[${i}]`);
    observer.next(arr[i]);
  }
  console.log("before complete");
  observer.complete();
  console.log("observable end");
});

function logAndGet(original, value) {
  console.log(`original: ${original}, map value: ${value}`);
  return value;
}

observableCreated2$
  .pipe(
    map(function (value) {
      return logAndGet(value, value * 2);
    }),
    map(function (value) {
      return logAndGet(value, value + 1);
    }),
    map(function (value) {
      return logAndGet(value, value * 3);
    }),
    toArray()
  )
  .subscribe(function (arr) {
    console.log("arr is ", arr);
  });
