/* 1) Створити масив із 11 користувачів.
У кожному об'єкті користувача мають бути властивості:
name, yearOfBirth,
role (або "admin" або "moderator" або "client" або "guest"),
permission (
для admin - "write, read, update, delete",
для moderator - "write, read, update",
для client - "write, read",
для guest - "read"
)
При цьому admin повинен бути один, решта користувачів може мати будь-яку role.
P.S. Для створення масиву користувачів можна взяти за основу функцію створення
користувачів з теми про об'єкти. */

const generateUser = (name, yearOfBirth, role, permission) => {
  return {
    name,
    yearOfBirth,
    role,
    permission
  }
};

let users = [
  generateUser("Alex", 1990, 'admin', 'write, read, update, delete'),
  generateUser("Alex", 1999, 'moderator', 'write, read, update'),
  generateUser("Alex", 1992, 'moderator', 'write, read, update'),
  generateUser("Alex", 2002, 'client', 'write, read'),
  generateUser("Alex", 1994, 'client', 'write, read'),
  generateUser("Alex", 1995, 'client', 'write, read'),
  generateUser("Alex", 2003, 'client', 'write, read'),
  generateUser("Alex", 1997, 'guest', 'read'),
  generateUser("Alex", 2005, 'guest', 'read'),
  generateUser("Alex", 1994, 'guest', 'read'),
  generateUser("Alex", 2007, 'guest', 'read')
];

/* 2) Властивість yearOfBirth зберігає рік народження користувача. Наприклад 1992, 1999,
2003, 2000, 1986. Потрібно отримати масив всіх 11 користувачів, де буде пораховано
скільки років кожному користувачеві по поточному році. (Тобто на виході, враховуючи
дати описані вище, має бути масив [29, 22, 18, 21, 35]) */

let getAgesArr = (arr) => {
  return arr.map((obj) => new Date().getFullYear() - obj.yearOfBirth) 
}
//console.log(getAgesArr(users))

/* 3) Відсортувати користувачів за зростанням, від молодшого до старшого. (Завдання 3 не
відноситься до другого завдання, необхідно повернути масив об'єктів користувачів, а не
просто цифри) */

let getSortedAgesArr = (arr) => {
  return arr.sort((a, b) => a.yearOfBirth - b.yearOfBirth) 
}
//console.log(getSortedAgesArr(users))

/*   4) Відфільтрувати користувачів молодше 21 року (тобто отримати всіх користувачів кому 21
  і більше років) */

let getFilteredAgesArr = (arr) => {
  return arr.filter((obj) => new Date().getFullYear() - obj.yearOfBirth >= 21) 
}
//console.log(getFilteredAgesArr(users))

/* 5) Відфільтрувати та отримати окремі масиви для кожної категорії користувачів (тобто
отримати окремо масив користувачів з role - moderator, окремий масив з client, окремий
масив для guest та один admin. На виході має бути 4 змінні, що містять масиви для
кожної role) */

let getFilteredRoleArr = (arr, role) => arr.filter((user) => user.role === role);
/*  console.log(getFilteredRoleArr(users, 'admin'));
 console.log(getFilteredRoleArr(users, 'moderator'));
 console.log(getFilteredRoleArr(users, 'client'));
 console.log(getFilteredRoleArr(users, 'guest')); */

/* 6*) Отримати всіх користувачів, хто може робити і write і update. (тобто відфільтрувати
користувачів по полю permission при цьому взяти тільки тих, хто і write та update.
При цьому, якщо додати додаткову permission для певного client, тобто замість
"read, write" користувач матиме "read, write, update", - то код повинен працювати
коректно і видавати результат включаючи і цього клієнта) */

let getFilteredPermissionArr = (arr) => arr.filter((user) => user.permission.includes('write') && user.permission.includes('update'));
console.log(getFilteredPermissionArr(users));

/* 7*) Створити свою функцію reduce, яка точно поводить себе як і метод масиву reduce.
(Ця функція повинна приймати 3 аргументи. Сам Масив, Функція зворотного виклику,
Дані для ініціалізації).
Тобто ця функція має бути повністю ідентична методу масив. reduce та повертати
результат.
const reduce = (array, callback, initialValue) => {
// код функції
} */

const reduce = (array, callback, initialValue) => {
  let accumulator = initialValue !== undefined ? initialValue : array[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
};
