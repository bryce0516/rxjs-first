const { from, Subject } = require("rxjs");
const { multicast } = require("rxjs/operators");

const source = from([1, 2, 3]);
const subject = new Subject();
const multicasted = source.pipe(multicast(subject));

multicasted.subscribe({
  next: (v) => console.log("A" + v),
});

multicasted.subscribe({
  next: (v) => console.log("B" + v),
});

multicasted.connect();
