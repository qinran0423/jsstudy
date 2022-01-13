// onRejected 处理程序返回的值也会被Promise.resolve()包装
// onRejected处理程序的任务不就是捕获异步错误的吗？
// 所以，拒绝处理程序在捕获错误后不抛出异常是符合Promise的行为，应该返回一个解决的Promise
let p1 = Promise.reject('foo')

let p2 = p1.then()

setTimeout(() => {
  console.log(p2); // Promise <reject> : foo
}, 0);


let p3 = p1.then(null, () => undefined); 
let p4 = p1.then(null, () => {}); 
let p5 = p1.then(null, () => Promise.resolve()); 
setTimeout(console.log, 0, p3); // Promise <resolved>: undefined 
setTimeout(console.log, 0, p4); // Promise <resolved>: undefined 
setTimeout(console.log, 0, p5); // Promise <resolved>: undefined

let p6 = p1.then(null, () => 'bar'); 
let p7 = p1.then(null, () => Promise.resolve('bar'));