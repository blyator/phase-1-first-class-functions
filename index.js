function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function namedFunction() {
    console.log("am function!");
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("I a function!");
  };
}
