/* *5) Реалізувати паттерн Фабрика. В залежності від permission, щоб створювався інстанс класу.
- для permission "read, write, update, remove" створювався інстанс клас Admin
- для permission "read, write, update" створювався інстанс клас Moderator
- для permission "read, write" створювався інстанс клас Client
- для permission "read" створювався інстанс клас Guest */


class User {
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

class UserFactory {
  createUser(name, surname, email, yearOfBirth, permission) {
    switch (permission) {
      case "read, write, update, remove":
        return new Admin(name, surname, email, yearOfBirth);
      case "read, write, update":
        return new Moderator(name, surname, email, yearOfBirth);
      case "read, write":
        return new Client(name, surname, email, yearOfBirth);
      case "read":
        return new Guest(name, surname, email, yearOfBirth);
      default:
        throw new Error("Unsupported permission");
    }
  }
}

class Admin extends User {
  constructor(name, surname, email, yearOfBirth) {
    super(name, surname, email, yearOfBirth);
    this.permission = "read, write, update, remove";
  }

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

class Moderator extends User {
  constructor(name, surname, email, yearOfBirth) {
    super(name, surname, email, yearOfBirth);
    this.permission = "read, write, update";
  }
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

class Client extends User {
  constructor(name, surname, email, yearOfBirth) {
    super(name, surname, email, yearOfBirth);
    this.permission = "read, write";
  }
  read(){
    alert(`I'm ${this.name}. I can read.`)
  }
  write(){
    alert(`I'm ${this.name}. I can write.`)
  }
}

class Guest extends User {
  constructor(name, surname, email, yearOfBirth) {
    super(name, surname, email, yearOfBirth);
    this.permission = "read";
  }
  read(){
    alert(`I'm ${this.name}. I can read.`)
  }
}

const factory = new UserFactory();

const user1 = factory.createUser("John", "Doe", "email1", 1990, "read, write, update, remove");
const user2 = factory.createUser("Alex", "Merlo", "email2", 2000, "read, write, update");
const user3 = factory.createUser("Smith", "Scott", "email3", 1998, "read, write");
const user4 = factory.createUser("John", "JohnDoe", "email4", 1980, "read");

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
