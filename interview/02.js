// class Person {
//   constructor(name) {
//     this.name = name
//   }

//   say() {
//     console.log(`My name is ${this.name}`);
//   }
// }

// TODO: 2.构造函数被执行
function Person(name) {
  // TODO: 3.将构造函数的this指向新对象
  this.name = name
}

// TODO: 4.修改新的实例的原型链
Person.prototype.say = function () {
  console.log(`My name is ${this.name}`);
}


/**
 * 
 * @param {*} fn 构造函数
 * @param  {...any} args 执行构造函数的传入的参数
 */
function myNew(fn, ...args) {
  // 创建一个对实例
  const obj = {}
  // 修改原型
  obj.__proto__ = fn.prototype
  const res = fn.apply(obj, args)

  return typeof res === 'object' ? res : obj
}




// TODO： 1.产生一个实例
// const p = new Person('Randy')
const p = myNew(Person, 'Randy')


p.say()