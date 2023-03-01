// //Task 1

let arr1 = [3, 4, 10, 9];

function sum(...arr) {
  let sum = 0;
  for (let items of arr) {
    sum += items;
  }
  return sum;
}

function mult(...arr) {
  let mult = 1;
  for (let items of arr) {
    mult *= items;
  }
  return mult;
}

function getResult(arr, callback) {
  return Math.round(callback(...arr));
}

console.log(getResult(arr1, mult));
console.log(getResult(arr1, sum));

//Task 2

const users = [
  { name: "Jon", age: 22 },
  { name: "Richard", age: 18 },
  { name: "Anton", age: 32 },
  { name: "Lida", age: 23 },
  { name: "Bob", age: 44 },
];

console.log(users);

function getSortedArrayObj(arr) {
  const res = [...arr];
  return res.sort(function (a, b) {
    return a.age - b.age;
  });
}

console.log(getSortedArrayObj(users));

//Task 3

const arr3 = [5, "4", false, 9, "two"];

const reversArr = (arr) => {
  return [...arr.reverse()];
};

const toNumberArr = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      newArr.push(Number(arr[i]));
    }
  }
  return newArr;
};

const each = (arr, callback) => {
  return callback(arr);
};

console.log(arr3);
console.log(each(arr3, toNumberArr));
console.log(each(arr3, reversArr));

//Task 4

const timer = () => {
  const interval = setInterval(() => {
    console.log(new Date());
  }, 3000);

  setTimeout(() => {
    clearInterval(interval);
    console.log("30 seconds are past");
  }, 30000);
};

timer();

//Task 5

function calling() {
  console.log("Calling!");
}

function beeps(callback) {
  setTimeout(() => {
    console.log("Beeps...");
    callback();
  }, 1000);
}

function talk() {
  console.log("Conversation");
}

calling();
beeps(talk);
