alert('Варіант 10. Назва дня тижня, температура повітря. Вивести під таблицею  назву найхолоднішого дня.');
function creatObject(name, temperature){
    return{
        name,
        temperature
    }
}
let objectList = [];
let count = +prompt('Введіть кількість днів:');
for(let i = 0; i < count; i++){
    let str = prompt('Введіть назву дня тижня та температуру:');
    let arr = str.split(' ');
    arr = arr.filter(Boolean);
    let day = creatObject(arr[0], arr[1]);
    objectList.push(day);
}

let heading = ['№', 'День тижня', 'Температура'];

function createTableHead(table, data){
    let thead = table.createTHead();
    let row = thead.insertRow();
    for(el of data){
        let th = document.createElement('th');
        let text = document.createTextNode(el);
        th.appendChild(text);
        row.appendChild(th);
    }
}
function createTable(table, data){
    let x = 0;
    let tbody = table.createTBody();
    for(el of objectList){
        let row = tbody.insertRow();
        let cell = row.insertCell();
        let text = document.createTextNode(x + 1);
        cell.appendChild(text);
        for(key in el){
            cell = row.insertCell();
            text = document.createTextNode(el[key]);
            cell.appendChild(text);
        }
        x++;
    }
}

let table = document.createElement('table');
createTable(table, objectList);
createTableHead(table, heading);
document.getElementById('body').appendChild(table);

let min = objectList[0].temperature;
let index = 0;
for(let i = 1; i < objectList.length; i++){
    if(objectList[i].temperature < min){
        min = objectList[i].temperature;
        index = i;
    }
}
document.write(`Найхолодніший день - ${objectList[index].name}`);