/*Задача №2

В программе объявлены две переменные — temp и weather. Объявите переменную activity и присвойте ей значение по следующему правилу: если значение переменной temp больше либо равно 25 a переменная weather имеет значение "clear", тогда значение переменной activity должно быть "golf"; если значение переменной temp от 10 до 24 включительно или weather имеет значение "cloudy", тогда значение переменной activity должно быть "bowling"; в ином случае значение переменной activity должно быть "hiking".  

Пример значений переменных: 

let temp = 25 

let weather = "clear"  

Пример результата: 

"golf"
*/

const temp = Number(prompt('Температура'));
const weatherRaw = prompt('Погода (солнечно/облачно)');
const weather = weatherRaw.trim().toLowerCase();

if (!Number.isFinite(temp)) {
    throw new Error('Температура введена некорректно');
}

if (weather !== 'clear' && weather !== 'cloudy' && 
    weather !== 'солнечно' && weather !== 'облачно') {
    throw new Error('Погода задана некорректно')
}


let result

if (temp >= 25 && (weather === 'clear' || weather === 'солнечно')) {
    result = 'гольф';
} else if (((temp >= 10 && temp <= 24) || 
            (weather === 'cloudy' || weather === 'облачно'))) {
    result = 'боулинг';
} else {
    result = 'поход';
}

console.log(result)

