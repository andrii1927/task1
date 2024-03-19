/* 1)Є текст, в якому вписано 3 рази слово Vue
Lorem ipsum dolor sit amet, consectetur vue adipisicing elit. Nihil ipsa Vue sunt,
voluptas odit itaque deleniti vUe voluptatum cumque accusamus. Impedit, doloremque.
Потрібно написати регулярний вираз, який знайде у тексті всі збіги та виведе на
екран. */

const paragraph = 'Lorem ipsum dolor sit amet, consectetur vue adipisicing elit. Nihil ipsa Vue sunt, voluptas odit itaque deleniti vUe voluptatum cumque accusamus. Impedit, doloremque.';
const found = paragraph.match(/vue/gi);
/* alert(found); */

/* 2) Реалізувати валідацію Email і якщо Email написано вірно - повертати true або
false. Важливо, щоб Email відповідав структурі: перший символ обов'язково літера,
далі можуть бути і літери та числа, потім собачка @, потім доменне ім'я, потім
точка та сам домен.
example@text.com // true
4554example@text.com // false
example@com // false
example-test.com // false */

function validateEmail(str){
  const regex = /^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z]+\.[a-zA-Z]+$/;
  return regex.test(str);
}
/* console.log(validateEmail('e5xample@text.com'));
console.log(validateEmail('4554example@text.com'));
console.log(validateEmail('example@com'));
console.log(validateEmail('example-test.com'));
console.log(validateEmail('ASDFF@textCOM')); */

/* 3) Реалізувати підстановку телефону 380632298388 під маску. Тобто щоб замість
маски підставилися цифри. При цьому плюс і дужки повинні залишитися на місці,
щоб цифри стали замість решіток. 

const mask = "+##(###)###-##-##";
const number = "380632438388";

const inputPhoneNumber = (mask, number) => {
  // Реалізація функції
};

const phoneNumber = inputPhoneNumber(mask, number);

alert(phoneNumber); // +38(063)2438388 */


const mask = "+##(###)###-##-##";
const number = "380632438388";

const inputPhoneNumber = (mask, number) => {
  let numberIndex = 0;

  return mask.replace(/#/g, () => {
    const digit = number[numberIndex];
    numberIndex++;
    return digit;
  });

};

const phoneNumber = inputPhoneNumber(mask, number);

alert(phoneNumber); // +38(063)243-83-88

