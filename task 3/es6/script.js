/* 1) Реалізувати клас User, який в конструктор приймає name, surname, email, yearOfBirth.
Створити 2 методи, getAge та getFullname. getAge повинен вертати через ключове слово return
скільки років користувачу, а getFullname повне його ім’я на базі name та surname. */

export class User {
  constructor(name, surname, email, yearOfBirth) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.yearOfBirth = yearOfBirth;
  }

  getAge(){
    return new Date().getFullYear() - this.yearOfBirth;
  } 

  getFullname(){
    return `${this.name} ${this.surname}`;
  } 
}

const user = new User("Alex", "Merlo", "amerlo@gmail.com", 2005);
//console.log(user.getAge())
//console.log(user.getFullname())

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

export class Admin extends User {
  read(){
    alert(`I'm ${this.name}. I can read.`)
  }
  write(){
    alert(`I'm ${this.name}. I can write.`)
  }
  update(){
    alert(`I'm ${this.name}. I can update.`)
  }
  remove(){
    alert(`I'm ${this.name}. I can remove.`)
  }
}

export class Moderator extends User {
  read(){
    alert(`I'm ${this.name}. I can read.`)
  }
  write(){
    alert(`I'm ${this.name}. I can write.`)
  }
  update(){
    alert(`I'm ${this.name}. I can update.`)
  }
}

export class Client extends User {
  read(){
    alert(`I'm ${this.name}. I can read.`)
  }
  write(){
    alert(`I'm ${this.name}. I can write.`)
  }
}

export class Guest extends User {
  read(){
    alert(`I'm ${this.name}. I can read.`)
  }
}

/* 3) Створити інстанси кожного з 4-х класів.
У кожного класу викликати усі його методи, включаючи унаслідовані, тобто вік, повне ім’я, та що
може робити кожен з користувачів, читати, писати, оновлювати і тд. */


const admin = new Admin("Ted", "Berlo", "tberlo@gmail.com", 1990)
const moderator = new Moderator("Alex", "Pith", "trtlo@gmail.com", 2000)
const client = new Client("Sem", "Smith", "jklrlo@gmail.com", 1995)
const guest = new Guest("Oleh", "Ivanov", "jkgtrlo@gmail.com", 1993)

admin.getAge()
admin.getFullname()
admin.read()
admin.write()
admin.update()
admin.remove()

moderator.getAge()
moderator.getFullname()
moderator.read()
moderator.write()
moderator.update()

client.getAge()
client.getFullname()
client.read()
client.write()

guest.getAge()
guest.getFullname()
guest.read()