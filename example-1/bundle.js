(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // add.js
  var require_add = __commonJS({
    "add.js"(exports, module) {
      var Add2 = (a, b) => {
        return a + b;
      };
      module.exports = Add2;
    }
  });

  // multiply.js
  var require_multiply = __commonJS({
    "multiply.js"(exports, module) {
      var Multiply2 = (a, b) => {
        return a * b;
      };
      module.exports = Multiply2;
    }
  });

  // index.js
  var Add = require_add();
  var Multiply = require_multiply();
  console.log("Hello from the developer console!");
  console.log(new Date());
  console.log(Multiply(Add(2, 2), 4));
})();
