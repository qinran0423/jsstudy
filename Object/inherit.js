// 继承
// 1、原型链
// function SuperType(){
//   this.property = true
// }


// SuperType.prototype.getSuperValue = function () {
//   return this.property
// }


// function SubType() {
//   this.subproperty = false
// }

// // 继承SuperType
// SubType.prototype = new SuperType()

// SubType.prototype.getSubValue = function() {
//   return this.subproperty
// }

// let instance = new SubType()
// console.log(instance.getSuperValue());

// console.log(instance);


// 2.构造函数继承

// function SuperType() {
//   this.colors = ['red','blue', 'green']
// }

// function SubType() {
//   // 继承SuperType
//   SuperType.call(this)
// }

// let instance1 = new SubType()
// instance1.color.push('black')
// console.log(instance1.colors);


// let instance2 = new SubType()
// console.log(instance1.colors);


// 原型式继承
// function object(o) {
//   function F() {}
//   F.prototype = o
//   return new F()
// }


// let person = {
//   name: 'randy',
//   colors: ['red', 'black','yellow']
// }


// let anotherPerson = object(person)
// anotherPerson.name = 'Mack'
// anotherPerson.colors.push('blue')
// console.log(anotherPerson);

// let yetAnotherPerson = object(person)
// yetAnotherPerson.name = 'Linda'
// console.log(yetAnotherPerson);


// 寄生式继承
// function createAnother(original) {
//   let clone = object(original)
//   clone.sayHi = function() {
//     console.log('hi');
//   }

//   return clone
// }


// let person = {
//   name: "Nicholas",
//   friends: ["Shelby", "Court", "Van"]
// };

// let anotherPerson = createAnother(person);
// anotherPerson.sayHi()

// 寄生式组合继承

// 组合继承的例子
// function SuperType(name) {
//   this.name = name;
//   this.colors = ["red", "blue", "green"];
// }

// SuperType.prototype.sayName = function() {
//   console.log(this.name);
// };

// function SubType(name, age) {
//   SuperType.call(this, name) // 第二次调用SuperType
//   this.age = age
// }

// SubType.prototype = new SuperType() // 第一次调用SuperType
// SubType.prototype.constructor = SubType
// SubType.prototype.sayAge = function() {
//   console.log(this.age);
// }


// 优化

function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}


function inheritPrototype(subType, superType) {
  let prototype =  object(superType.prototype)
  console.log(prototype);
  prototype.constructor = subType; // 增强对象
  subType.prototype = prototype;
}

function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}


SuperType.prototype.sayName = function() {
  console.log(this.name);
};

function SubType(name, age) {
  SuperType.call(this, name) // 第二次调用SuperType
  this.age = age
}

// SubType.prototype = new SuperType() 
// 改变上面的方式
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function() {
  console.log(this.age);
};