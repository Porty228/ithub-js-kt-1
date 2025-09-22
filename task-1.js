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

if (!Number.isFinite(price) || (price <= 0)) {
    throw new Error('Доход введен не керректно')
}
if (range !== "month" && range !== "week" && range !== "day" && range !== "день" && range !== "месяц" && range !== "неделя") {
    throw new Error('Период задан не керректно')
}

const formattedPrice = price.toLocaleString('ru', {style:"currency", currency: "RUB"})

let formattedRange 
if (range === "month" || range === "месяц") {
  formattedRange = "месяц";
} else if (range === "week" || range === "неделя") {
  formattedRange = "неделя";
} else if (range === "day" || range === "день") {
  formattedRange = "день";
} else {
  throw new Error("Период задан некорректно");
}
const result = `${formattedPrice} в ${formattedRange}`
console.log(result)