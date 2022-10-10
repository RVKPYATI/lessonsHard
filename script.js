'use strict';

const arr = ['56', '78', '123', '456', '99', '744', '204'];


for (let i = 0; i < arr.length; i++) {
    
    if(arr[i].startsWith('2') || arr[i].startsWith('4')) {
        console.log(arr[i]);
    }
}

