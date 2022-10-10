'use strict';

const arr = ['56', '78', '123', '456', '99', '744', '204'];


for (let i = 0; i < arr.length; i++) {
    
    if(arr[i].startsWith('2') || arr[i].startsWith('4')) {
        console.log(arr[i]);
    }
}

for (let i = 2; i <= 100; i++) {
    if(isPrime(i)) {
        console.log(i, `Делители этого числа 1 и ${i}`);
    }
}
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return num > 1;
}