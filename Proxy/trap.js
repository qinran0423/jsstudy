const target = {
  foo: 'bar'
}


// const handler = {
//   get() {
//     return 'handler override'
//   }
// }

// const proxy = new Proxy(target, handler)

// console.log(target.foo); // bar
// console.log(proxy.foo); // handler override


// const handler = {
//   //  参数： 接收到的目标对象、要查询的属性、代理对象
//   get(trapTarget, property, receiver) {
//     console.log(trapTarget === target); // true
//     console.log(property); // foo
//     console.log(receiver === proxy); // true

//     return trapTarget[property]
//   }
// }

// const proxy = new Proxy(target, handler)

// console.log(proxy.foo); // bar
// console.log(target.foo); // bar


const handler = {
  get(trapTarget, property, receiver) {
    let decoration = '';
    if(property === 'foo') {
      decoration = '!!!!'
    }

    return Reflect.get(...arguments) + decoration
  }
}


const proxy = new Proxy(target, handler)

console.log(proxy.foo); // bar!!!!
console.log(target.foo); //bar



const target1 = {
  foo: 'bar'
}


const firstProxy = new Proxy(target1, {
  get() {
    console.log('first proxy');
    return Reflect.get(...arguments)
  }
})

const secondProxy = new Proxy(firstProxy, {
  get() {
    console.log('second proxy');
    return Reflect.get(...arguments)
  }
})


console.log(secondProxy.foo);