const { Observable } = require("rxjs");
const { map, toArray } = require("rxjs/operators");

const observableCreated$ = Observable.create(function (observer) {
  try {
    observer.next(1);
    observer.next(2);
    throw "throw err text";
  } catch (error) {
    observer.error(error);
  } finally {
    observer.complete();
  }
});

observableCreated$.subscribe(
  function next(item) {
    console.log(item);
  },
  function error(error) {
    console.log("error is " + error);
  },
  function complete() {
    console.log("complete");
  }
);
