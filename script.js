'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота','Воскресенье'];
const div = document.querySelector('div');
const dataTime = new Date();


week.forEach((item,index)=>{
    
    if(index === dataTime.getDay()-1) {
        div.innerHTML += `<b>${item}</b><br>`;
    } else if(index === 5 || index === 6) {
        div.innerHTML += `<i>${item}</i><br>`;
    } else {
        div.innerHTML += item + '<br>';
    }
});


