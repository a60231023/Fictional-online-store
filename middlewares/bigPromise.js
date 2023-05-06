//try catch and async await || use promise

// This code exports a higher-order function that takes a function (func) as its argument. When this higher-order function is called, it returns another function that will be used as middleware for an Express route.

module.exports = (func) => (req, res, next) => {
    Promise.resolve(func(req, res, next)).catch(next);
  };
  