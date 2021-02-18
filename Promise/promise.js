
const PENDING = 'PNEDING',
      FULFILLED = 'FULEILLED',
      REJECTED = 'REJECTED'
class MyPromise {
  constructor(excutor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined

    const resolve = (value) => {
      if(this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
      }
    }

    const reject = (reason) => {
      if(this.status === PENDING) {
        this.status = REJECTED
        this.value = reason
      }
    }

    excutor(reslove, reject);
  }


  then(onFulfilled, onRejected) {
    if(this.status === FULFILLED) {
      onFulfilled(this.value)
    }

    if(this.status === REJECTED) {
      onRejected(this.reason)
    }
  }
}

