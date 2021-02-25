// const MyPromise = require('./promise')




// let promise = new MyPromise((resolve, reject) => {
//   resolve('First resolve')
// })


// promise.then((res) => {
//   // console.log(res);
//   return new MyPromise((resolve, reject) => {
//     resolve('hjahjahj')
//   })
// }).then((res) => {
//   // console.log(res);
//   return res
// })


// let promise2 = promise.then((res) => {
// }).then((res) => {
//   console.log(res);
// })

              


// let promise3 = promise.then((res) => {
// })
// promise3.then(() => {
  
// }) 

// promise.then((value) => {
//   return value
// })
// .then((value) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('Error')
//     }, 2000);
//   })
// })
// .then((value) => {
//   console.log(value);
// }, (reason) => {
//   console.log('reject:' + reason);
//   throw new Error('jajajaaj')
// })
// .then((value) => {
//   console.log('resolve1:' + value);
// },(reason) => {
//   console.log('reject1:' + reason);
// })
// .then((value) => {
//   throw new Error('Throw Error')
// })
// .then((value) => { 
//   console.log(value);
// }, (reason) => {
//   console.log('exeption'+reason);
// })



async function async1() {
  console.log(1);
  await new Promise(resolve => {
    console.log(2);
  }).then(res => {
    console.log(3);
  }).finally(res => {
    console.log(4);
  })
  console.log(5);
}

async1()
console.log(6);