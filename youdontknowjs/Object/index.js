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



