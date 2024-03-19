/* 1) Взяти один об'єкт користувача із завдання про Масиви. Перетворити його на рядок. */

/* const generateUser = (name, yearOfBirth, role, permission) => {
  return {
    name,
    yearOfBirth,
    role,
    permission,
    toJSON: function(){
      return JSON.stringify({
        name: this.name,
        yearOfBirth: this.yearOfBirth,
      });
    }
  }
}; */

//const user = generateUser("Alex", 1990, 'admin', 'write, read, update, delete');
//const stringifiedUser = JSON.stringify(user);

/* 2) Отримані дані перетворити назад на об'єкт. */

//const parsedUser = JSON.parse(stringifiedUser);

/* 3) Додати метод toJSON в об'єкт користувача і зробити вивід тільки name і yearOfBirth під час
перетворення методом JSON.stringify і виконати перетворення і перевірити. */

//console.log(user.toJSON());


/* *4) Створити форму з полями Username, Email та Message. При натисканні на кнопку Submit
зібрати дані з полів форми та вивести у консоль дані у форматі JSON.
(Форма може мати будь-який вигляд. Скрін просто для прикладу) */

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const formData = {
    username,
    email,
    message,
  };

  const formDataJson = JSON.stringify(formData);
  console.log(formDataJson);

  document.getElementById('myForm').reset();
});