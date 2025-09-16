/*Задача №2

В программе объявлены две переменные — temp и weather. Объявите переменную activity и присвойте ей значение по следующему правилу: если значение переменной temp больше либо равно 25 a переменная weather имеет значение "clear", тогда значение переменной activity должно быть "golf"; если значение переменной temp от 10 до 24 включительно или weather имеет значение "cloudy", тогда значение переменной activity должно быть "bowling"; в ином случае значение переменной activity должно быть "hiking".  

Пример значений переменных: 

let temp = 25 

let weather = "clear"  

Пример результата: 

"golf"
*/

const temp = Number(prompt('Температура'))
const weather = prompt('Погода (clear, cloudy)')


if (false) {
    throw new Error('Температура введена не керректно')
}
if ((weather !== 'clear') && (weather !== "cloudy") ) {
    throw new Error('Погода задана не керректно')
}

let result
console.log(result)