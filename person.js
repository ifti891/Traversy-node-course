



class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and i am ${this.age}`)
  }
}

// const person = {
//   name: 'Jhone Doe',
//   age: 30
// }

module.exports = Person