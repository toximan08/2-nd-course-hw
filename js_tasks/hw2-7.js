//Task 1

let str1 = `"small or not?"`;
console.log(
  `Task 1: Let's transform ${str1} to upper case: ${str1.toUpperCase()}`
);

//Task 2

const products = [
  "Хлеб Бородинский",
  "Молоко Молочник",
  "Коровка Молоко",
  "Груша Конференция",
];

const searchWord = "молоко";

const searchStart = (arr, str) => {
  arr.forEach((el) => {
    if (el.toLowerCase().startsWith(str.toLowerCase())) {
      console.log(`Task 2: ${el}`);
    }
  });
};

searchStart(products, searchWord);
searchStart(["Кошка", "Кит", "Комар", "Носорог"], "ко");
searchStart(["яблоко", "груша", "гриб", "огурец"], "гру");
searchStart(["Дом", "Банк", "Больница", "Театр"], "Кино");

//Task 3

const numberStart = 32.58884;

console.log(`Task 3: ceil (to higher): ${Math.ceil(numberStart)}`);
console.log(`Task 3: floor (to lower): ${Math.floor(numberStart)}`);
console.log(`Task 3: ceil (to closest): ${Math.round(numberStart)}`);

//Task 4

let numbers4 = [52, 53, 49, 77, 21, 32];

// or we can use just solo numbers each, not an array form

let num1 = 52;
let num2 = 53;
let num3 = 49;
let num4 = 77;
let num5 = 21;
let num6 = 32;

let max1 = Math.max(...numbers4);
let min1 = Math.min(...numbers4);
let max2 = Math.max(num1, num2, num3, num4, num5, num6);
let min2 = Math.min(num1, num2, num3, num4, num5, num6);

console.log(`Task 4: max number out of array is ${max1}`);
console.log(`Task 4: min number out of array is ${min1}`);
console.log(`Task 4: max number out of numbers is ${max2}`);
console.log(`Task 4: max number out of numbers is ${min2}`);

//Task 5

const randomNumber = (min, max) => {
  let a = Math.round(Math.random() * (max - min) + min);
  console.log(
    `Task 5: Random number between ${min} and ${max} (included): ${a}`
  );
};

randomNumber(1, 10);

//Task 6

const getRandomArrNumbers = (param) => {
  let arr = [];
  for (let i = 0; i < Math.floor(param / 2); i++) {
    arr[i] = Math.round(Math.random() * param);
  }
  return arr;
};

console.log(getRandomArrNumbers(10));

//Task 7

const getRandomNumberBetween = (min, max) => {
  let randomNumber = Math.round(Math.random() * (max - min) + min);
  return randomNumber;
};

console.log(`Task 7: Random number: ${getRandomNumberBetween(3, 6)}`);

//Task 8

let date = new Date();
console.log(date);

//Task 9

const addToDate = (dateToAdd) => {
  let date = new Date();
  console.log(date);

  date.setDate(date.getDate() + dateToAdd);
  console.log(`Task 9: The date after ${dateToAdd} would be: ${date}`);
};

addToDate(73);

//Task 10

let newDate = new Date();

const formatData = (date) => {
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  let fullDate =
    `Task 10: Дата: ` +
    date.getDate() +
    " " +
    months[date.getMonth()] +
    " " +
    date.getFullYear() +
    " - это " +
    days[date.getDay()] +
    ".\n" +
    `Время: ` +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();

  console.log(fullDate);
};

formatData(newDate);
