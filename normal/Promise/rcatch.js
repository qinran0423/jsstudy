// Promise.prototype.catch()方法用于给期约添加拒绝处理程序

let p = Promise.reject()
let onRejected = function (e) {
  setTimeout(() => {
    console.log('rejected');
  }, 0);
}

p.then(null, onRejected) // rejected
p.catch(onRejected) // rejected


// catch 返回一个promise实例

let p1 = new Promise(() => {})
let p2 = p1.catch()
setTimeout(() => {
  console.log(p1); // pending
}, 0);


setTimeout(() => {
  console.log(p2); // pending
}, 0);

setTimeout(() => {
  console.log(p1 === p2);
}, 0);

