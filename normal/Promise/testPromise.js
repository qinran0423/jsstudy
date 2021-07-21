

let PANDING = 'PANDING',
    FULFILLED = 'FULFILLED',
    REJECTED = 'REJECTED'

class MyPromise {

  constructor(excutor) {


    this.status = PANDING
    this.value = undefined
    this.reason = undefined

    this.fulfilledCallbacks = []
    this.rejectedCallbacks = []

    const resolve = (value) => {
      if(this.status === PANDING) {
        this.status = FULFILLED
        this.value = value

        this.fulfilledCallbacks.forEach(fn => fn())
      }
    }


    const reject = (reason) => {
      if(this.status === PANDING) {
        this.status = REJECTED
        this.reason = reason
        this.rejectedCallbacks.forEach(fn => fn())
      }
    }
    
    try {
      excutor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }


  then(onfulfilled, onrejected) {

    if(this.status === FULFILLED) {
      onfulfilled(this.value)
    }

    if(this.status === REJECTED) {
      onfulfilled(this.reason)
    }


    if(this.status === PANDING) {
      this.fulfilledCallbacks.push(() => {
        onfulfilled(this.value)
      })
    }
    if(this.status === PANDING) {
      this.rejectedCallbacks.push(() => {
        onrejected(this.reason)
      })
    }
  }

}


let promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('aaa')
  }, 2000);
})

promise.then((res) => {
  console.log(res);
}, (reason) =>{

})