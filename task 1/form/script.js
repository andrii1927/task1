/* 1)Створити форму, в якій є поля:
username
email
position
framework
message
agree
Поле position має тип radio, а поле framework тип checkbox, при цьому, на полі
типу checkbox код має обробляти кілька значень.
(Дизайн форми може бути будь-який)

2) При натисканні на кнопку submit cформувати об'єкт на основі даних форми та
вивести в консоль JSON.
3) Реалізувати лічильник введення символів Characters для текстових полів.
4) Реалізувати валідацію полів, щоб усі поля були заповнені, інакше не
виводити в консоль JSON*/


document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

 
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const position = document.querySelector('input[name="position"]:checked').value;
  const frameworks = Array.from(document.querySelectorAll('input[name="framework"]')).filter(framework => framework.checked).map(framework => framework.value);
  const message = document.getElementById('message').value.trim();
  const agree = document.getElementById('agree').checked;

  const formData = {
    username,
    email,
    position,
    frameworks,
    message,
    agree
  };

  const formDataJson = JSON.stringify(formData);
  console.log(formDataJson);

  document.getElementById('myForm').reset();
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm');
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const charCountUsername = document.getElementById('charCountUsername');
  const charCountEmail = document.getElementById('charCountEmail');
  const charCountMessage = document.getElementById('charCountMessage');

  function updateCharCount(inputElement, charCountElement) {
    inputElement.addEventListener('input', function() {
      charCountElement.textContent = this.value.length;
    });
  }

  function clearCharCount(charCountElement) {
    charCountElement.textContent = '0';
  }

  updateCharCount(usernameInput, charCountUsername);
  updateCharCount(emailInput, charCountEmail);
  updateCharCount(messageInput, charCountMessage);

  form.addEventListener('reset', function() {
    clearCharCount(charCountUsername);
    clearCharCount(charCountEmail);
    clearCharCount(charCountMessage);
  });
});