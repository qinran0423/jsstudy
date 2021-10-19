var strPrimitive = "I am a string"

console.log(strPrimitive.length);

console.log(strPrimitive.charAt(3));

// 可以直接在字符串字面量上访问属性或方法，因为引擎自动吧字面量转换成String对象


var myObject = {
  a: 2
}


console.log(myObject.a);
console.log(myObject['a']);


var idx;
idx = 'a'

console.log(myObject[idx]);



var myArray = ["foo", 42, "bar"]

myArray.baz = 'baz'
console.log(myArray.length); // 3
console.log(myArray.baz);



var myObject = {
  get a() {
    return 2
  }
}


Object.defineProperty(myObject, 'b', {
  get: function () {
    return this.a * 2
  },
  enumerable: true
})


console.log(myObject.a);

console.log(myObject.b);


// 存在性
// 在不访问属性值的情况下判断对象中是否存在这个属性
var myObject = {
  a: 2
}


console.log('a' in myObject); // true
console.log('b' in myObject); // false


console.log(myObject.hasOwnProperty('a')); // true
console.log(myObject.hasOwnProperty('b')); // false


// in 检查属性是否在对象及其prototype原型链中
// hasOwnProperty 检查属性是否在myObject对象中， 不会检查prototype

var myObject = {
  a: 2,
  b: 3
}

Object.defineProperty(myObject, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function () {
    var o = this
    console.log('this', this);
    var idx = 0
    var ks = Object.keys(o)
    return {
      next: function () {
        return {
          value: o[ks[idx++]],
          done: (idx > ks.length)
        }
      }
    }
  }
})

var it = myObject[Symbol.iterator]()
console.log(it.next());
console.log(it.next());
console.log(it.next());