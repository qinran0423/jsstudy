let a = {
  name: 'randy',
  age: 20
}

function change(o) {
  o.age = 24
  o = {
    name: 'Mick',
    age: 25
  }
  return o
}


let b = change(a)
console.log(b.age); // 25
console.log(a.age); // 24


// 数据类型检测
// 1. typeof
console.log(typeof 1); // number
console.log(typeof '1'); // string
console.log(typeof undefined); // undefined
console.log(typeof true); // boolean
console.log(typeof Symbol()); // symbol
console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof console); // object
console.log(typeof console.log); // function

// null  -》 object 不代表null就是引用数据类型， 判断是否为null 则用 === null
// type 判断引用类型 除了function Ok 其他的都是返回 object


// 2. instanceof
// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
let Car = function() {}
let benz = new Car()

console.log(benz instanceof Car); // true
let car = new String('Mercedes Benz')
console.log(car instanceof String); // true

let str = 'xxxxx'
console.log(str instanceof String); // false




