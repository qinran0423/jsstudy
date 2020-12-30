var anotherObject = {
  a: 2
}

var myObject = Object.create(anotherObject)

console.log(anotherObject.a);
console.log(myObject.a);

console.log(anotherObject.hasOwnProperty('a')); // true
console.log(myObject.hasOwnProperty('a')); // false

myObject.a++

console.log(myObject);

/**
 * myObject {
 *   a: 3
 *   __proto__: {
 *      a: 2
 *   }
 * }
 */

console.log(myObject.hasOwnProperty('a')); // true



function Foo() {

}


var a = new Foo()

console.log(Object.getPrototypeOf(a) === Foo.prototype); // true


console.log(Foo.prototype.constructor === Foo); // true
console.log(a);



function Bar() {}


Bar.prototype = {} // 创建一个新原型对象

var a1 = new Bar()
console.log(a1.constructor === Bar); // false
console.log(a1.constructor === Object); // true


