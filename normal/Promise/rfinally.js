
// finally 用于给Promise 添加onFinally处理程序   在promise转换为解决或者拒绝状态时都会执行

// let p1 = Promise.resolve()
// let p2 = Promise.reject()

// let onFinally = function () {
//   setTimeout(() => {
//     console.log('finally');
//   }, 0);
// }

// p1.finally(onFinally) //finally
// p2.finally(onFinally) //finally

// Promise.prototype.finally()方法返回一个新的期约实例：
// let  p1= new Promise(() => {})
// let  p2 = p1.finally()

// setTimeout(() => {
//   console.log(p1); // pending
// }, 0);


// setTimeout(() => {
//   console.log(p2); // pending
// }, 0);


// setTimeout(() => {
//   console.log(p1 === p2);  // false
// }, 0);

// 这个新的期约实例不同于then catch方式返回的实例   
//  onFinally被设计为一个状态无关的方法， 所以大多数情况下它将表现为父期约的传递 对于已解决状态和被拒绝状态都是如此

// let p1 = Promise.resolve('foo')

// let p2 = p1.finally(); 
// let p3 = p1.finally(() => undefined); 
// let p4 = p1.finally(() => {}); 
// let p5 = p1.finally(() => Promise.resolve()); 
// let p6 = p1.finally(() => 'bar'); 
// let p7 = p1.finally(() => Promise.resolve('bar')); 
// let p8 = p1.finally(() => Error('qux')); 
// setTimeout(console.log, 0, p2); // Promise <resolved>: foo 
// setTimeout(console.log, 0, p3); // Promise <resolved>: foo 
// setTimeout(console.log, 0, p4); // Promise <resolved>: foo 
// setTimeout(console.log, 0, p5); // Promise <resolved>: foo 
// setTimeout(console.log, 0, p6); // Promise <resolved>: foo 
// setTimeout(console.log, 0, p7); // Promise <resolved>: foo 
// setTimeout(console.log, 0, p8); // Promise <resolved>: foo


// // 如果返回的是一个待定的期约，或者 onFinally 处理程序抛出了错误（显式抛出或返回了一个拒绝期约），则会返回相应的期约（待定或拒绝）
// let p9 = p1.finally(() => new Promise(() => {}))
// let p10 = p1.finally(() => Promise.reject())

// setTimeout(() => {
//   console.log(p9); // pending
// }, 0);

// setTimeout(() => {
//   console.log(p10); // reject: undefined
// }, 0);


// let p11 = p1.finally(() => {throw 'baz'})

// setTimeout(() => {
//   console.log(p11); // reject: baz
// }, 0);

// let p12 = p1.finally(() => { Error('baz') })

// setTimeout(() => {
//   console.log(p12); // fulfilled : foo
// }, 0);


// let p1 = Promise.resolve('foo')

// let p2 = p1.finally(
//   () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//       return resolve('baz')
//     }, 100);
//   })
// ) 

// setTimeout(() => {
//   console.log(p2);
// }, 0);

// setTimeout(() => {
//   console.log(p2);
// }, 200);

// let p = Promise.resolve()
// let p1 = Promise.resolve()

// p.then(() => {
//   console.log('aa');
// })

// p.then(() => {
//   console.log('ccc');
// })


// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }
