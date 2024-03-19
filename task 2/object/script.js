/* 1) Створити об'єкт basket. Додати в цей об'єкт фруктів та овочів apples, oranges,
bananas та інші, на вибір. Як значення ввести числа, також на вибір, 5, 8, 4 та інші.
Всього в кошику має бути 7 властивостей. (Всі властивості повинні бути додані під
час ініціалізації об'єкта) */

let basket = {
  apples: 5,
  oranges: 4,
  bananas: 9,
  apricots: 15,
  potatoes: 2,
  cucambers: 3,
  tomatoes: 8
}

/* 2) Додати в об'єкт ще пару властивостей (у задачу 1, необхідно додати
  характеристики при ініціалізації об'єкта, а в другому завданні, - необхідно доповнити
  об'єкт) */

basket.carrots = 10;
basket['grape'] = 7;
Object.assign(basket, { avocados: 2 });

Object.defineProperty(basket, 'onions', {
  value: 5,
  writable: true,
  enumerable: true,
  configurable: true
});

/* 3) Додати та реалізувати властивість showCountFood, яка рахує загальну кількість
всіх продуктів, які є в кошику та виводить на екран. */

basket.showCountFood = function(){
  let result = Object.values(this)
  .filter((value) => Number.isInteger(value))
  .reduce(function(sum, current) {
    return sum + current;
  }, 0);
  //console.log(result);
}

basket.showCountFood();

/* 4) Викликати alert (basket) і передати туди basket. Чому виводиться [object Object] і
як це виправити? Виправити цей момент, щоб об'єкт basket видавав правильні дані. */

/* Коли викликаємо alert(basket), і отримуємо [object Object], це тому, що метод alert() спробував конвертувати об'єкт JavaScript в рядок. Оскільки об'єкти не можуть бути просто конвертовані в рядок, ми бачимо рядок [object Object] як загальне представлення об'єкта. */
alert(JSON.stringify(basket, null, 2));
