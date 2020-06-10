// alert('Привет, меня зовут Сергей Степаненко и я изучаю JS на курсе glo academy');

let money = 120000;
console.log('money: ', money);
let income = 'фриланс';
console.log('income: ', income);
let addExpenses = '750 Руб За Интернет, 600 Руб За Сотовую Связь';
console.log(addExpenses.length); // длина строки
// console.log(addExpenses.toUpperCase()); // приводит строку к верхнему регистру
console.log(addExpenses.toLowerCase()); // приводит строку к нижнему регистру 
// console.log(addExpenses[0]); // показывает индекс символа addExpenses (7)
// console.log(addExpenses.substring(7)); // возвращает подстраку от 7 символа включительно ( за интернет, 600 руб за сотовую связь) отступ тоже символ
// console.log(addExpenses.substring(8, 19)); // возвращает подстраку от 8 (включительно) символа до 19 (не включительно) (за интернет) отступ тоже символ
// console.log(addExpenses.slice(8)); // возвращает подстраку от 8 символа включительно (за интернет, 600 руб за сотовую связь)
// console.log(addExpenses.slice(-8)); // возвращает подстраку до -8 символа включительно (ую связь) отсчёт начинается с символа 7 (он является нулевым)
// console.log(addExpenses.substr(4, 15)); // '4' - указывает символ с которого начнется отсчёт, '15' - указывает сколько будет взяно символов (руб за интернет)
// console.log(addExpenses.replace('600', '590')); // получаем '750 руб за интернет, 590 руб за сотовую связь'
console.log(addExpenses.split(', ')); // разбивает строку на масивы


/* Поиск подстраки*/
// console.log(addExpenses.indexOf('интернет')); // получаем индекс 11 так как 'интернет' начинается с 11 символа



let deposit = true;
console.log('deposit: ', deposit);
let mission = 10000000;
let period = 12;
console.log('period: ', period);
let budgetDay = money / 30;
console.log('budgetDay: ', budgetDay);
console.log("Период равен", period, "месяцев");
console.log("Цель заработать", mission, "руб");