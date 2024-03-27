/* **6) Наразі усі наші класи мають повторюваний код, тобто в усіх класах повторюється реалізація
методу read, в 3-х класах повторюється реалізація методу write, в двух класах повторюється
реалізація update.
Покращити вже існуючий паттерн Фабрика та позбутися цього повторення. */

class User {
  constructor(name, surname, email, yearOfBirth) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.yearOfBirth = yearOfBirth;
  }

  getAge() {
    return new Date().getFullYear() - this.yearOfBirth;
  }

  getFullname() {
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

function read(target) {
  target.prototype.read = function() {
    alert(`I'm ${this.name}. I can read.`);
  };
}

function write(target) {
  target.prototype.write = function() {
    alert(`I'm ${this.name}. I can write.`);
  };
}

function update(target) {
  target.prototype.update = function() {
    alert(`I'm ${this.name}. I can update.`);
  };
}

function remove(target) {
  target.prototype.remove = function() {
    alert(`I'm ${this.name}. I can remove.`);
  };
}

class Admin extends User {
  constructor(name, surname, email, yearOfBirth) {
    super(name, surname, email, yearOfBirth);
    this.permission = "read, write, update, remove";
  }
}
read(Admin);
write(Admin);
update(Admin);
remove(Admin);

class Moderator extends User {
  constructor(name, surname, email, yearOfBirth) {
    super(name, surname, email, yearOfBirth);
    this.permission = "read, write, update";
  }
}

read(Moderator);
write(Moderator);
update(Moderator)

class Client extends User {
  constructor(name, surname, email, yearOfBirth) {
    super(name, surname, email, yearOfBirth);
    this.permission = "read, write";
  }
}

read(Client);
write(Client);

class Guest extends User {
  constructor(name, surname, email, yearOfBirth) {
    super(name, surname, email, yearOfBirth);
    this.permission = "read";
  }
}

read(Guest);

const factory = new UserFactory();

const user1 = factory.createUser("John", "Doe", "email1", 1990, "read, write, update, remove");
const user2 = factory.createUser("Alex", "Merlo", "email2", 2000, "read, write, update");
const user3 = factory.createUser("Smith", "Scott", "email3", 1998, "read, write");
const user4 = factory.createUser("John", "JohnDoe", "email4", 1980, "read");

console.log(user1.read());
console.log(user2);
console.log(user3);
console.log(user4.read());
