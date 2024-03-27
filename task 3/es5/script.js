/* 4) Задачі пунктів 1 та 2 зробити в прототипній реалізації (ES5)

1) Реалізувати клас User, який в конструктор приймає name, surname, email, yearOfBirth.
Створити 2 методи, getAge та getFullname. getAge повинен вертати через ключове слово return
скільки років користувачу, а getFullname повне його ім’я на базі name та surname.*/

export const User = function(name, surname, email, yearOfBirth){
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.yearOfBirth = yearOfBirth;
  this.getAge = function(){
    return new Date().getFullYear() - this.yearOfBirth;
  }
  this.getFullname = function(){
    return this.name + ' ' + this.surname;
  }
};


/* User.prototype.getFullname = function() {
  return this.name + ' ' + this.surname;
}; */

//const user1 = new User('John', 'Doe', 'johndoe@gmail.com', 1990);
//console.log(user1.__proto__);
//console.log(user1.getAge());
//console.log(user1.getFullname());


/* 2) Реалізувати наслідування. Створити 4 класи Admin, Moderator, Client, Guest котрі
наслідуються від User. В кожному з 4-х класів реалізувати такі методи:
- для Admin - read, write, update та remove.
- для Moderator - read, write та update
- для Client - read, write
- для Guest - read
Кожен з цих методів повинен виводити повідомлення:
- для read - "I'm (Ім’я користувача). I can read."
- для write - "I'm (Ім’я користувача). I can write."
- для update - "I'm (Ім’я користувача). I can update."
- для remove - "I'm (Ім’я користувача). I can remove." */ 

export const Admin = function(name, surname, email, yearOfBirth){
  User.call(this, name, surname, email, yearOfBirth)
};

Admin.prototype.read = function() {
  alert(`I'm ${this.name}. I can read.`)
}; 
Admin.prototype.write = function() {
  alert(`I'm ${this.name}. I can write.`)
}; 
Admin.prototype.update = function() {
  alert(`I'm ${this.name}. I can update.`)
}; 
Admin.prototype.remove = function() {
  alert(`I'm ${this.name}. I can remove.`)
}; 

const admin1 = new Admin('John', 'Doe', 'johndoe@gmail.com', 1990);

export const Moderator = function(name, surname, email, yearOfBirth){
  User.call(this, name, surname, email, yearOfBirth)
  this.read = function(){
    alert(`I'm ${this.name}. I can read.`)
  }
  this.write = function(){
    alert(`I'm ${this.name}. I can write.`)
  }
  this.update = function(){
    alert(`I'm ${this.name}. I can update.`)
  }

};

//const moderator1 = new Moderator('Alex', 'Merlo', 'alexmerlo@gmail.com', 2000);
//console.log(moderator1.read());
//console.log(moderator1.write());
//console.log(moderator1.update());
//console.log(moderator1.getAge());
//console.log(moderator1.getFullname());
//console.log(moderator1.__proto__  );

export const Client = function(name, surname, email, yearOfBirth){
  User.call(this, name, surname, email, yearOfBirth)
  this.read = function(){
    alert(`I'm ${this.name}. I can read.`)
  }
  this.write = function(){
    alert(`I'm ${this.name}. I can write.`)
  }
};

export const Guest = function(name, surname, email, yearOfBirth){
  User.call(this, name, surname, email, yearOfBirth)
  this.read = function(){
    alert(`I'm ${this.name}. I can read.`)
  }
};