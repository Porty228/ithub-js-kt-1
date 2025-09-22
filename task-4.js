/*
Задача 4

Задана переменная word со строковым значением. Создайте переменную result с условием: если из длины переменной word вычисляется квадратный корень (без дробной части) - переменная result должна содержать ответ 1, в противном случае - 0  

Пример: 
let word = 'меню' 

Результат: 
1
*/

const word = prompt('Введите слово');


if (word === null || word.length === 0) {
    throw new Error('Слово введено некорректно');
}


const sqrtLength = Math.sqrt(word.length);

const result = (sqrtLength % 1 === 0) ? 1 : 0;

console.log(result);
