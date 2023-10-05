function GamesSeasons() {
    let month = Number(prompt("Введите месяц"));
    if (month===1 || month===2 || month===12) {
        console.log("Зима");
    } else if(month >= 3 && month < 6) {
        console.log("Весна");
    } else if(month >=7 && month < 9) {
        console.log("лето");
    } else if (month >=9 && month < 12) {
        console.log("Зима");
    } else {
        alert("такого месяца не существует");
    }
}

function RememberWords() {
    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    list = list.sort(() => Math.random() - 0.5);
    alert(list); 
    
    const question = ('Чему равнялся первый элемент массива?');
    const questionTwo = ('Чему равнялся последний элемент массива?')
    
    if (question.list[0] === 'Яблоко') {
        console.log('Угадал');
    } else {
        console.log('Не угадал');
    }
    
    if (questionTwo.list[list.length - 1] === 'Мандарин') {
        console.log('Угадал');
    } else {
        console.log('Не угадал');
    } 
}