let s1 = 'some text'
s1.color = 'red'


console.log(s1.coolor);



let obj = new Object('some text')
console.log(obj);
console.log(obj instanceof String); // true

let num = new Object(123)
console.log(num);




let stringObject = new String('hello world')
console.log(stringObject.valueOf()); // hello world
console.log(stringObject.toLocaleString());// hello world
console.log(stringObject.toString());// hello world

let stringValue = 'hello world'
console.log(stringValue.length); // 11

console.log('`````````````````````````````````````````');


let message = 'abcde'
console.log(message.length); // 5

console.log(message.charAt(2)); // c
console.log(message.charCodeAt(2)); // 99


// slice substr substring 都返回调用它们的字符串的一个子字符串，都接收一或两个参数
// 参数一：字符串开始位置
// 参数二：字符串结束的位置


// slice   substring 第二个参数是提取结束的位置
//  substr 第二个参数是返回子字符串的数量


console.log(stringValue.slice(3)); // lo world
console.log(stringValue.substring(3)); // lo world
console.log(stringValue.substr(3)); // lo world

console.log(stringValue.slice(3, 7)); // lo w
console.log(stringValue.substring(3, 7)); // lo w
console.log(stringValue.substr(3, 7)); // lo worl


console.log(stringValue.slice(-3)); // rld
console.log(stringValue.substring(-3)); // hello world
console.log(stringValue.substr(-3)); // rld


console.log(stringValue.slice(3, -4)); // lo w
console.log(stringValue.substring(3, -4)); // hel
console.log(stringValue.substr(3, -4)); // ' '

// slice 方法将所有负值参数当成 字符串长度 + 负参数值
// substr 方法将第一个负参数值 当成 字符串长度 + 负参数值 ， 将第二个负参数值转换为0
// substring 方法会将所有负参数值转换为0

let stringValue1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
let positions = new Array();
let pos = stringValue.indexOf("e");

while(pos > -1) {
  positions.push(pos)
  pos = stringValue1.indexOf('e', pos + 1)
}


console.log(positions); // [1, 3, 24, 32, 35, 52]



let text = "c, bat, sat, fat";
let pos1 = text.search(/at/);
console.log(pos1); // 4