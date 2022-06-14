"use strict";
let pow = (a, n) => {
    if (n == 0) {
        return 1;
    }
    else {
        return a * pow(a, n - 1);
    }
};
console.log(pow(2, 3));
