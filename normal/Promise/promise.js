
const PENDING = 'PNEDING',
      FULFILLED = 'FULEILLED',
      REJECTED = 'REJECTED'
class MyPromise {
  constructor(excutor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined

    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
    const resolve = (value) => {
      if(this.status === PENDING) {
        this.status = FULFILLED
        this.value = value

        this.onFulfilledCallbacks.forEach(fn => fn())
      }
    }

    const reject = (reason) => {
      if(this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason

        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    try { 
      excutor(resolve, reject);
    } catch (error) {
      reject(error)
    }
  }


  then(onFulfilled, onRejected) {

    let promise2 = new MyPromise((resolve, reject) => {
      if(this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            console.log('jajah ', x);
            resolvePromise(promise2,x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0);
      }
  
      if(this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2,x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0);
      }
  
      if(this.status === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2,x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0);
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2,x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0);
        })
      }
    })

    return promise2
  }
}


function resolvePromise(promise2, x , resolve, reject) {
  console.log(x);
  if(promise2 === x) {
    return reject(new TypeError('xxxxxxx'))
  }

  let called = false
  if((typeof x === 'object' && x !== null) || typeof x === 'function') {
    try {
      let then = x.then
      if(typeof then === 'function') {
        then.call(x, (y) => {
          if(called) return
          called = true
          // resolvePromise(promise2,y, resolve, reject)
          resolve(y)
        }, (r) => {
          if(called) return
          called = true
          reject(r)
        })
      } else {
        
        resolve(x)
      }
    } catch (error) {
      if(called) return
      called = true
      reject(error)
    } 
  } else {
    resolve(x)
  }
}

module.exports = MyPromise