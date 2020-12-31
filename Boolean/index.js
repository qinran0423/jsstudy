let falseObj = new Boolean(false)
let result = falseObj && true

console.log(result); // true
// 所有对象在布尔比表达式中都会自动转换为true



let falseValue = false
result = falseValue && true
console.log(result); // false