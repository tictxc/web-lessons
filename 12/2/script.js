alert('Завдання 2. Вводити в діалогове вікно числа до тих пір, поки не буде введений будь-який символ, після цього вивести у вікно всі числа через кому, порахувати їх суму та кількість парних та непарних чисел.');

let arr = [];
let number;
let sum = 0, count1 = 0, count2 = 0;

while(1)
{
    number = +prompt('Введіть число:');
    if(isNaN(number))
    {
        break;
    }
    else
    {
        arr.push(number);
        sum += number;
        if(number % 2 == 0)
        {
            count1++;
        }
        else
        {
            count2++;
        }
    }
}

let str = arr.join(', ');
document.write(`${str}<br>`);
document.write(`Сума чисел = ${sum}<br>`);
document.write(`Кількість парних чисел = ${count1}<br>`);
document.write(`Кількість непарних чисел = ${count2}`);