alert('Завдання. Створити об’єкт, який містить інформацію про назву товару, ціну та кількість. Створити метод, який підраховує вартість. Реалізувати фабричну функцію для створення об’єкта.');
function creatObject(name, price, count){
    return{
        name,
        price,
        count,
        cost(){
            return this.count * this.price;
        },
        info(){
            return `Назва: ${this.name}; Ціна: ${this.price}; 
            К-ість: ${this.count}; Вартість: ${this.cost()} грн.;`
        }
    }
}
let goodsList = [];
let cost = 0;
while(1){
    let name = prompt('Введіть назву товару:');
    if(name == null)
        break;
    let price = prompt('Введіть ціну товару:');
    if(price == null){
        break;
    }
    else{
        price = parseFloat(price);
    }
    let count = prompt('Введіть кількість товару:');
    if(count == null){
        break;
    }
    else{
        count = parseFloat(count);
    }
    let goods = creatObject(name, price, count);
    goodsList.push(goods);
    cost += goods.cost();
}
for(i of goodsList){
    document.write(`${i.info()}<br>`);
}
document.write(`Загальна вартість = ${cost} грн.`);