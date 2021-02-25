const myTarget = {
  a: 1
}

const proxy = new Proxy(myTarget, {
  get(target, property, receiver) {
    console.log('get');
    return Reflect.get(...arguments)
  },
  set(target, property, value, receiver) {
    console.log('set');
    return Reflect.set(...arguments)
  },
  has(target, property) {
    console.log('has');
    return Reflect.has(...arguments)
  },
  deleteProperty(target, property) {
    console.log('deleteProperty');
    return Reflect.deleteProperty(...arguments)
  }
})


// proxy.foo // get
// proxy.foo = 'bar' // set
// 'foo' in proxy // has
// delete proxy.foo  // deleteProperty

proxy.a = 2
console.log(myTarget);