//Task 1

let diff = (a, b) => {
  if (a > b) {
    console.log(`1: b is fewer and it's ${b}`);
  } else if (a < b) {
    console.log(`Task 1: a is fewer and it's ${a}`);
  } else {
    console.log(`Task 1: a and b are equal and they are ${a}`);
  }
};

diff(4, 8);
diff(9, 5);
diff(6, 6);

//Task 2

let evenOddCheck = (a) => {
  if (a % 2 === 0) {
    console.log(`Task 2: a is an even number`);
  } else {
    console.log(`Task 2: a is an odd number`);
  }
};

evenOddCheck(1);
evenOddCheck(6);

//Task 3.1
let squareNumber1 = (a) => {
  console.log(`Task 3.1: a ** 2 = ${a ** 2}`);
};

squareNumber1(4);

//Task 3.2

let squareNumber2 = (a) => {
  return a ** 2;
};

console.log(`Task 3.2: a ** 2 = ${squareNumber2(5)}`);

//Task 4

let ageCheck3 = () => {
  let question = prompt("4.3: How old are you?");
  let age3 = Number(
    question === "" ? "You haven't given any data, try again" : question
  );
  if (age3 < 0 || isNaN(age3)) {
    console.log(`Task 4: Error in input, try again`);
  } else if (age3 >= 0 && age3 <= 12) {
    console.log(`Task 4: Hello, friend!`);
  } else {
    console.log(`Task 4: Welcome!`);
  }
};

ageCheck3();

//Task 5

let numberCheck = (a, b) => {
  if (a === "" || isNaN(a) || b === "" || isNaN(b)) {
    return "One or both of numbers are not a numbers";
  } else {
    return a * b;
  }
};

console.log(`Task 5: ${numberCheck(3, 2)}`);

console.log(`Task 5: ${numberCheck(0, 10)}`);

console.log(`Task 5: ${numberCheck("", "")}`);

console.log(`Task 5: ${numberCheck("a", "b")}`);

//Task 6.1

let n = prompt(`Enter some number which you want to find out **3`);
console.log(n);
let cubeNumber1 = (n) => {
  if (n === "" || isNaN(n)) {
    return `Task 6.1: This param is not a number`;
  } else {
    return `Task 6.1: n ** 3 is ${n ** 3}`;
  }
};

console.log(cubeNumber1(n));

//Task 6.2

let cubeNumber2 = (n2) => {
  if (n2 === "" || isNaN(n2)) {
    return `Task 6.2: This param is not a number`;
  } else {
    return `Task 6.2: n ** 3 is ${n2 ** 3}`;
  }
};

console.log(cubeNumber2(10));

console.log(cubeNumber2(9));

console.log(cubeNumber2(8));

console.log(cubeNumber2(7));

console.log(cubeNumber2(6));

console.log(cubeNumber2(5));

console.log(cubeNumber2(4));

console.log(cubeNumber2(3));

console.log(cubeNumber2(2));

console.log(cubeNumber2(1));

console.log(cubeNumber2(0));

console.log(cubeNumber2("n"));
