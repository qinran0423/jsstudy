function Person() {
  this.dosomething = function() {}
}

Person.prototype.name = "randy"
Person.prototype.age = 18
Person.prototype.sayName = function() {
  console.log(this.name);
}

let person1 = new Person()
person1.sayName() // randy


let person2 = new Person()
person2.sayName() // randy


console.log(person1.sayName === person2.sayName); // true
console.log(person1.dosomething === person2.dosomething); // false

console.log(person1);


let person = {
  name: 'matt'
}

let biped = {
  num: 12
}

Object.setPrototypeOf(person, biped)
console.log(person);
console.log(Object.getPrototypeOf(person) === biped); // true