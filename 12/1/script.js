alert('Завдання 1. Ввести речення в діалогове вікно. Підрахувати кількість слів.');
let str = prompt('Напишіть будь-яке речення:');
let arr = str.split(' ');
arr = arr.filter(Boolean);
let count = 0;
for(word of arr)
{
    document.write(`${word}<br>`);
    count++;
}
document.write(`Кількість слів = ${count}`);