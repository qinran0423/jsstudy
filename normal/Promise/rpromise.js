
// 传入执行器（executor）
// let  p = new Promise(() => {})
// setTimeout(() => {
//   console.log(p);  // Promise <pending>
// }, 0);
/**
 * 状态
 * 1 pending
 * 2 fulfilled
 * 3 rejected
 * 
 * 
 * 无论落定为哪种状态都是不可逆的
 * 只要从pending 转化为 fulfilled 或者 rejected  promise 的状态就不在改变
 */



// let p1 = new Promise((resolve, reject) => resolve())
// setTimeout(() => {
//   console.log(p1); // Promise fulfilled:undefined
// }, 0);


// let p2 = new Promise((resolve, reject) => reject())
// setTimeout(() => {
//   console.log(p2); // Promise rejected: undefined
// }, 0);

// 执行器函数是同步执行的

// new Promise(() => setTimeout(() => {
//   console.log('executor');
// }, 0) )

// setTimeout(() => {
//   console.log('promise initialized');
// }, 0);

// executor
// promise initialized


// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve()
//   }, 1000);
// })

// setTimeout(() => {
//   console.log(p);
// }, 0);

// function onResolved(id) {
//   setTimeout(() => {
//     console.log('resolved', id);
//   }, 0);
// }

// function onRejected(id) {
//   setTimeout(() => {
//     console.log('rejected', id);
//   }, 0);
// }



// let p1 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve()
//   }, 3000);
// })

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject()
//   }, 3000);
// })

// p1.then((res) => {
//   console.log(res);
//   onResolved('p1')
// }, () => {
//   onRejected('p1')
// })

// p2.then(() => {
//   onResolved('p2')
// }, () => {
//   onRejected('p2')
// })


// Promise.prototype.then()方法返回一个新的Promise 实例

// let p1 = new Promise(() => {})
// let p2 = p1.then()

// setTimeout(() => {
//   console.log(p1); // promise <pending>
// }, 0);
// setTimeout(() => {
//   console.log(p2);// promise <pending>
// }, 0);
// setTimeout(() => {
//   console.log(p1===p2); // false
// }, 0);

let p1 = Promise.resolve('foo')

let p2 = p1.then()

setTimeout(() => {
  console.log(p2); // promise <fulfilled>: 'foo'
}, 0);

// 这些都一样
let p3 = p1.then(() => undefined); 
let p4 = p1.then(() => {}); 
let p5 = p1.then(() => Promise.resolve()); 
setTimeout(console.log, 0, p3); // Promise <resolved>: undefined 
setTimeout(console.log, 0, p4); // Promise <resolved>: undefined 
setTimeout(console.log, 0, p5); // Promise <resolved>: undefined


// p4.then((res) => {
//   console.log('res', res);
// })

let p6 = p1.then(() => 'bar')
let p7 = p1.then(() => Promise.resolve('bar'))

setTimeout(() => {
  console.log(p6);
}, 0);
setTimeout(() => {
  console.log(p7);
}, 0);

let p8 = p1.then(() => new Promise(() => {}))
let p9 = p1.then(() => Promise.reject())

setTimeout(() => {
  console.log(p8);
}, 0);
setTimeout(() => {
  console.log(p9);
}, 0);


let p10 = p1.then(() => {throw 'baz'})

setTimeout(() => {
  console.log(p10);
}, 0);



// 返回错误值不会触发上面的拒绝行为， 而是会把错误对象包装在一个解决的promise中
let p11 = p1.then(() => Error('qux'))

setTimeout(() => {
  console.log(p11);
}, 0);