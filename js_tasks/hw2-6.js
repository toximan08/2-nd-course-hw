//Task 1

const arr1 = [1, 5, 4, 10, 0, 3];

for (i = 0; i < arr1.length; i++) {
  if (arr1[i] === 10) {
    console.log(arr1[i]);
    break;
  }
  console.log(arr1[i]);
}

//Task 2

const arr2 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === 4) {
    console.log(i);
    break;
  }
}

//Task 3

const arr3 = [1, 3, 5, 10, 20];

console.log(arr3.join(" "));

//Task 4

let arr4 = [];
let even = [];
for (i = 0; i < 10; i++) {
  arr4[i] = Math.round(Math.random() * 10);
  if (arr4[i] % 2 === 0) even.push(arr4[i]);
}

console.log(arr4);
console.log(even);

//Task 5

const arr5 = [];

for (i = 0; i < 3; i++) {
  arr5.push([]);
  for (j = 0; j < 3; j++) {
    arr5[i].push(1);
  }
}
console.log(arr5);

//Task 6

const arr6 = [1, 1, 1];

for (let i = 0; i < 3; i++) {
  arr6.push(2);
}

console.log(arr6);

//Task 7

let arr7 = [9, 8, 7, "a", 6, 5];

arr7.sort().pop();

console.log(arr7);

//Task 8

const arr8 = [9, 8, 7, 6, 5];

let question = prompt(
  "Enter from 1 to 10 a number that possibly can be inside an array"
);

if (isNaN(question) || question === "") {
  alert(`Sorry, you've inputted the wrong data, please try again`);
} else {
  for (i = 0; i < arr8.length; i++) {
    if (arr8.includes(Number(question))) {
      alert(`Yes, there is ${question} inside array`);
      break;
    } else {
      alert(`Sorry, there is no ${question} inside array`);
      break;
    }
  }
}

//Task 9

let str9 = "abcdef";
console.log(str9.split("").reverse().join(""));

//Task 10

let arr10 = [];
let mean = 0;
for (i = 0; i < 6; i++) {
  let min = 1;
  let max = 10;
  arr10[i] = Math.round(Math.random() * (max - min) + min);
  mean += arr10[i];
}
if ((i = arr10.length)) {
  mean /= arr10.length;
}

console.log(arr10);
console.log(mean);

//Task 11

let arr11 = [
  [1, 2, 3],
  [4, 5, 6],
];

let newArr = [].concat(arr11[0], arr11[1]);
console.log(newArr);

//Task 12

let arr12 = [];
for (let i = 0; i < 10; i++) {
  let min = 1;
  let max = 10;
  arr12[i] = Math.round(Math.random() * (max - min) + min);
}
console.log(arr12);

let sum = 0;
const arrSum = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log((sum = arr[i] + arr[i + 1]));
  }
};

arrSum(arr12);
