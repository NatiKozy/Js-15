//Задание 1
// Выведите числа от 1 до 10 в консоль
for(let i = 1; i <= 10; i++) {
    console.log('Задание 1',i)
}

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
for(let i = 1; i <= 20; i++) {
    if(i % 2 == 0){
        console.log('Задание 2', i)
    }
}

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for(let i = 10; i > 0; i--) {
    console.log('Задание 3',i)
}

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
for(let i = 1; i < 11; i++) {
    console.log('Задание 4',`5 * ${i} = ${i * 5}`)
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let result = 0;
for (let i = 1; i <= 100; i++) {
	result += i;
}
console.log('задание 5', result);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let i = 1; i <= array.length; i++) {
    console.log('задание 6', i);
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 1; i <= 5; i++){
    sum +=i;
}
console.log('задание 7', sum);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
for(let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    const newAnimal = animal + " - прекрасное животное";
    animals[i] = newAnimal;
    console.log('задание 8', newAnimal);
}

//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
for(let symbol of str) {
    console.log('задание 9', symbol);
}

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for(let el of array) {
    console.log('задание 10', el);
}

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
for (let i = 0; i < sentences.length; i++){
    const sentence = sentences[i].split(' ');
    sentence.forEach((item)=>{
        console.log('задание 11', item);
    })
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
let sum1 = 0;
for (let num of numbers){
    sum1 +=num;
}
console.log('задание 12', sum1);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
for (let i = 0; i < list.length; i++){
    const el = list[i].split(' ');
    el.forEach((item)=>{
        console.log('задание 13', item.length);
    })
}

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words = ['Hello', 'world', '!'];
for (let i = 0; i < words.length; i++){
    const word = words[i].split(' ');
    word.forEach((item)=>{
        console.log('задание 14', item.toUpperCase());
    })
}

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

const countVowels = (str) => {
    for (let el of str.toLowerCase()) {
        if(vowels.includes(el)) {
            vowelCount +=1;
        }
    }
    return vowelCount;
}

console.log('задание 15', countVowels(greeting));


//Задание 16
// Объедините все строки массива words в одну строку с пробелами между ними
let string = words.join(' ');
console.log('задание 16', string);


//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let num = 1;
while (num <= 10) {
    console.log('задание 17', num);
    num += 1;
}

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let number = 10;
while (number >= 1) {
    console.log('задание 18', number);
    number -= 1;
}
//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;

const isPositive = (arr) => {
    let i = 0;
    while(i < arr.length-1) {
        if(arr[i] < 0) {
            allPositive = false;
            console.log('задание 19', 'в массиве есть отрицательное число')
            break
        }
        i++;
    }
}
isPositive(allNumbers);

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
let i = 0;
do
{
    console.log('задание 20', random[i]);
    i++;
}
while (random[i] > 0);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while

let j = 1;
do
{
    if(j % 3 !== 0)
    console.log('задание 21', j);
    j++;
}
while (j <= 100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
// let res = 0;
// while (res <= 100) {
//     let newResult = prompt('Введите число: ');

//      if(isNaN(+newResult)) {
//          newResult = prompt('Нужно ввести число');
//     }
//      res = res + Number(newResult);
// }
// console.log('задание 22', res);


//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
const colors = document.getElementsByTagName('h4');
const changeColor = (collection) => {
    for (let element of collection) {
        element.style.backgroundColor = 'lightblue';
    }
}
changeColor(colors);

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';

while (randomString.length < 6) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)]
}
console.log(randomString)

// Вам необходимо выполнить следующие операции над массивом чисел:

// 1. Создайте пустой массив с именем `numbers`
// 2. Заполните массив `numbers` целыми числами от -10 до 10 (включительно) с помощью цикла.
// 3. Используя **циклы**, выполните следующие операции над массивом `numbers`:
//     - Удалите все отрицательные числа из массива
//     - Возведите каждое число в квадрат
//     - Отсортируйте числа в порядке убывания
// 4. Выведите полученный массив `numbers` в консоль

let numberss = [];
for (let i= -10; i <= 10; i++) {
    console.log(i);
    numberss.push(i);
}
console.log(numberss);

for(let i = numberss.length-1; i>=0; i--) {
    if (numberss[i] < 0) {
        numberss.splice(i,1);
    }
}
console.log(numberss)

for (let i = 0; i<numberss.length; i++) {
    numberss[i] = i ** 2;
}
console.log(numberss);

for(let num of numberss) {
    num = numberss.sort((a, b)  =>{
            return b - a;
            })
}
console.log(numberss)