let lang = 'ru';
const daysRu = "'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'";
const daysEng = "'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'";

if (lang === 'ru') {
    console.log(daysRu);
} else if (lang === 'eng') {
    console.log(daysEng);
}

switch (lang) {
    case 'ru':
        console.log(daysRu);
        break;
    case 'eng':
        console.log(daysEng);
        break;
}

let lang2 = new Map ([['ru', daysRu],['eng', daysEng]]);
console.log(lang2.get('ru'));

let namePerson = prompt('Введите имя');
let result = (namePerson =='Артем') ? console.log('Директор'): (namePerson =='Александр') ? console.log('Преподаватель') : console.log('Студент');
