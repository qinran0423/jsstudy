
let a = {
  _default: 0,
  toString: function() {
    return ++ this._default
  }
}

if(a==1&&a==2&&a==3) {
  console.log('success');
}

let _default = 0
Object.defineProperty(globalThis, 'b', {
  get() {
    return ++_default
  }
})


if(b===1&&b===2&&b===3) {
  console.log('success!!!');
}
