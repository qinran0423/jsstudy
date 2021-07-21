// 工厂模式
function createPerson(name, age, job) {
  let o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function() {
    console.log(this.name);
  }
  return o
}

let person1 = createPerson('Randy', 19, 'software Engieer')

// 构造函数模式
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function() {
    console.log(this.name);
  }
}

let person2 = new Person('Greg', 27, 'Doctor')

person1.sayName()
person2.sayName()





