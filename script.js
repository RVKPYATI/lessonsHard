let num = 266219;


let numString = num.toString();
let result = 1;
for (let i=0; i < numString.length; i++) {
    
    result *= numString[i];
}


result **= 3;

console.log(result.toString().slice(0,2));
