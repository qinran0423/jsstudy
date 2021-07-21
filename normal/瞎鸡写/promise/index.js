
const MyPromise = require( './MyPromise')

let promise1 = new MyPromise((resolve, reject) => {
  resolve('success')

  // reject('Error')
  // throw new Error('Exception: Error')

  // setTimeout(() => {
  //   resolve('success')
  // }, 2000);
})


let promise2 = promise1.then(() => {
  return promise2
}, (reason) => {
  return reason
})


promise2.then((value) => {
  console.log(value);
}, (reason) => {
  console.log(reason);
})