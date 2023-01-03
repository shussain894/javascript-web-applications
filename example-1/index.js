// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.

const Add = require("./add")
const Multiply = require("./multiply")

console.log('Hello from the developer console!');
console.log(new Date());
console.log(Multiply(Add(2,2), 4));