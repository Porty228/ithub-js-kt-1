/*
В программе объявлены две переменные — price и range. Переменная range может принимать одно из трех строковых значений — month/day/week. Переменная price хранит в себе числовое значение. Необходимо написать программу, которая формирует строку с использованием данных переменных по следующему шаблону: 

<значение price> Р в <эквивалент значения range на русском языке> 

Пример значений переменных: 

let price = 10000 

let range = "day" 

Пример результата:

10000 Р в день
*/
let price = Number(prompt('Введите сумму в руб.'))
let range = prompt('Введите период (month, week или day)')

//дописать логику преобразования range в RU_range

const formattedPrice = price.toLocaleString('ru-RU', {style:"currency", currency: "RUB"})
const output = `${formattedPrice} в ${range}`
console.log(output)