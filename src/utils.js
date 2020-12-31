console.log('utils.js is running');

// export const square = (x) => x * x;
const square = (x) => x * x;

// export const add = (a, b) => a + b;
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;
// export { square, add };

export { square, add, subtract as default };