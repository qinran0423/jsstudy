// 测试lazygit;



const data = {
  a: 1,
  b: 2,
  c: {
    d: 1
  }
}


const observe = new Proxy(data, {
  get(target, key) {
    return Reflect.get(target, key)
  },
  set(target, key, value) {
    console.log(key, value);
    return Reflect.set(target, key, value)
  }
})



observe.a = 4
observe.c.d = 9