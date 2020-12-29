// let p = new Promise((resolve, reject) => {
//   resolve('suucess')
// })




// 通过return传递结果
// p.then((value) => {
//   return value
// })
// .then((value) => {
//   console.log(value); // First resolve
// })


// 通过新的promise resolve 结果
// p.then((value) =>{
//   return value
// })
// .then(value => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value)
//     }, 2000);
//   })
// })
// .then((value) => {
//   console.log(value); // First resolve
// })

// 通过新的promise reject 原因
// p.then((value) =>{
//   return value
// })
// .then(value => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('error')
//     }, 2000);
//   })
// })
// .then((value) => {
//   console.log(value); 
// }, (reason) => {
//   console.log(reason);  // error
// })

// then 走失败的回调函数后再走then 
// p.then((value) =>{
//   return value
// })
// .then(value => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('error')
//     }, 2000);
//   })
// })
// .then((value) => {
//   console.log(value); 
// }, (reason) => {
//   console.log(reason);  // error
// })
// .then((value) => {
//   console.log(value); // undefined
//   console.log('Fulfilled:' + value); // Fulfilled:undefined
// }, (reason) => {
//   console.log(reason);
// })



// let p1 = Promise.resolve('foo')

// let p2 = p1.then(() => Promise.reject())

// setTimeout(() => {
//   console.log(p2);
// }, 0);


// let p3 = p1.then(() => { throw 'baz' })
     
// setTimeout(() => {
//   console.log(p3);
// }, 0);

// let p4 = p1.then(() => Error('qux'))
// setTimeout(() => {
//   console.log(p4);
// }, 0);



let p = Promise.reject('foo')

let p1 = p.then(null, (err) => {
  return err
}).then((value) => {
  console.log(value);
},  (err) => {
  console.log(err);
})
