const PENDING = 'PENDING',
      FULFILLED = 'FULFILLED',
      REJECTED = 'REJECTED';

function resolvePromise(promise2, x, resolve, reject ) {
  console.log(promise2);
  if(promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<MyPromise>'))
  } 

  let called = false

  if((typeof x === 'object' && x !== null) || typeof x === 'function') {
    try{ 
      let then = x.then

      if(typeof then === 'function') {
        then.call(x, (y) => {
          if(called) return
          called = true
          resolvePromise(promise2, y, resolve, reject)
        }, (r) => {
          if(called) return
          called = true
          reject(r)
        })
      } else { 
        resolve(x)
      }
    } catch(err) {
      if(called) return
      called = true
      reject(err)
    }
  } else {
    resolve(x)
  }
}

class MyPromise{
  constructor(executor) {
    this.status = PENDING
    this.value  = undefined
    this.reason = undefined

    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (value) => {
      if(this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        // 发布
        this.onFulfilledCallbacks.forEach(fn => fn())
      }
    }

    const reject = (reason) => {
      if(this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        // 发布
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
    
  }

  then( onFulfilled , onRejected ) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}
    let promise2 = new MyPromise ((reolve, reject) => {
      if(this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, reolve, reject)
          } catch (error) { 
            reject(error)
          }
        }, 0);
      }
  
      if(this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, reolve, reject)
          } catch (error) { 
            reject(error)
          }
        }, 0);
      }
  
      if(this.status === PENDING) {
        // 订阅
        this.onFulfilledCallbacks.push(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, reolve, reject)
          } catch (error) { 
            reject(error)
          }
        })
  
        this.onRejectedCallbacks.push(() =>{
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, reolve, reject)
          } catch (error) { 
            reject(error)
          }
        })
      }
    })

    return promise2
  }
  catch(errorCallback) {
    return this.then(null, errorCallback)
  }
}


module.exports = MyPromise