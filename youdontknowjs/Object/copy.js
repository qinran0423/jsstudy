// function anotherFunction() {
//   console.log('mick');
// }


// var anotherObject = {
//   c: true
// }


// var anotherArray = []

// var myObject = {
//   a: 2,
//   b: anotherObject,
//   c: anotherArray,
//   d: anotherFunction
// }

// anotherArray.push(anotherObject, myObject)


var myObject = {
  a: 2
}

console.log(Object.getOwnPropertyDescriptor(myObject, "a"));

// { 
  // value: 2,  
//   writable: true,  // 可写
//   enumerable: true, // 可枚举
//   configurable: true // 可配置
// }