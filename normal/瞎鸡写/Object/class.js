// class Person {}
// let p1 = new Person()

// console.log(p1.constructor === Person); // true
// console.log(p1 instanceof Person); // true
// console.log(p1 instanceof Person.constructor); // false

// let p2 = new Person.constructor()

// console.log(p2.constructor === Person); // false
// console.log(p2 instanceof Person); // false
// console.log(p2 instanceof Person.constructor); // true



class Person {
  constructor() {
    this.name = new String('Jack')
    this.sayName = () => console.log(this.name)
    this.nicknames = ['jake', 'j-dog']
  }
}

let p1 = new Person(),
    p2 = new Person()

p1.sayName()
p2.sayName()


console.log(p1.name === p2.name); // false
console.log(p1.sayName === p2.sayName); // false