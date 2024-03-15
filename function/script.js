/*  1) Реалізувати функцію multiply, яка яка приймає 3 числові аргументи, множить ці
числа і виводить результат. Вивести можна за допомогою console.log чи alert */

/* function multiply(a, b, c){
  let result = a*b*c;
  console.log(`Result: ${result}`);
} */

/* 2) Реалізувати першу задачу у 4 варіантах:
·функції function declaration
function expression
·arrow function
·class Function */

//function declaration
// function multiply1(a, b, c){
//   let result = a*b*c;
//   console.log(`Result: ${result}`);
// }

//function expression
const multiply2 = function (a, b, c){
  let result = a*b*c;
  console.log(`Result: ${result}`);
};

//arrow function
const multiply3 = (...numbers) => {
  let result = numbers.reduce((sum, number)=> sum + number, 0);
  console.log(`Result: ${result}`);
};

//class Function
const multiply4 = new Function('a', 'b', 'c', 'let result = a*b*c; console.log(`Result: ${result}`);');

         
/* 3) Є код (на скріні), що створює таблицю множення. Зараз таблиця множення
створюється лише на 10. Щоб створити наприклад на 15 чи 20, потрібно буде
повторити багато разів одну й ту саму реалізацію. Реалізувати функцію
generateMultiplicationTables, яка прийматиме на вхід один аргумент, який
міститиме в собі число, яка буде таблиця, на 10, 15, 20 і виводити результат на
екран.
generateMultiplicationTables(10);
generateMultiplicationTables(15);
generateMultiplicationTables(20); 

document.write("<table>");
  for (let x=1; x<=10; x++){
    document.write("<tr>");
    for(let y=1; y<=10; y++){
      document.write(`<td>${ x*y }</td>`);
    }
    document.write("</tr>");
  }
document.write("</table>");
*/

function generateMultiplicationTables(num){
  document.write("<table>");
  for (let x=1; x<=num; x++){
    document.write("<tr>");
    for(let y=1; y<=num; y++){
      document.write(`<td>${ x*y }</td>`);
    }
    document.write("</tr>");
  }
document.write("</table>");
}
//generateMultiplicationTables(20);

/* 4) Зараз наша функція може виводити лише таблицю множення. Потрібно
модифікувати функцію generateMultiplicationTables так, щоб вона могла
генерувати таблиці і на додавання і віднімання, навіть, щоб можна було зводити
числа в ступінь, при цьому не можна дублювати код.
P.S. Потрібно додати другий аргумент функції. */

function generateMathTables(num, callback) {
  document.write(`<h3>Таблиця для ${callback.name} (${num}):</h3>`);
  document.write("<table>");
  
  for (let x = 1; x <= num; x++) {
    document.write("<tr>");
    for (let y = 1; y <= num; y++) {
      let result = callback(x, y);
      document.write(`<td>${result}</td>`);
    }
    document.write("</tr>");
  }

  document.write("</table>");
}

// callback ф-ї
/* function multiply(x, y) {
  return x * y;
} */

/* function add(x, y) {
  return x + y;
} */

function subtract(x, y) {
  return x - y;
}

/* function power(x, y) {
  return Math.pow(x, y);
} */


/* generateMathTables(4, multiply);
generateMathTables(4, add);
generateMathTables(4, subtract);
generateMathTables(4, power); */

/* 5) Реалізувати функцію compose, яка на вхід приймає функції, при цьому кожна
функція повертає результат іншої функції та інша функція повертає результат
третьої функції, і так далі. Важливо, щоб аргументів можна було передавати будь-
яку кількість. Результат даного прикладу повинен повертати у консолі 4.*/

/* const add = n => n+1;
const multiply = n => n*2;

const compose = () => {
  //код реалізації
}

const combinedFunc = compose(add, multiply);
//Результат має бути 4
console.log(combinedFunc(1)); */

const add = n => n+1;
const multiply = n => n*2;

const compose = (...funcs) => {
  return arg => {
    return funcs.reduce((acc, func) => {
      return func(acc);
    }, arg);
  };
}

const combinedFunc = compose(add, multiply);
console.log(combinedFunc(1));