
function getStr(string) {
    if (typeof string !== 'string') {
        console.log('Вы ввели не строку');
    } else {
        string = string.trim();
        if(string.length > 30) {
            string = string.substr(0, 30) + '...';
        }
    }
    return string;
}

console.log(getStr('  Привет как дела что делаешь в этом бренном мире'));