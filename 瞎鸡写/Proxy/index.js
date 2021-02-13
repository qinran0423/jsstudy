// 给目标对象定义一个关联的代理对象
// 对目标对象的各种操作影响目标对象之前，可以在代理对象中对这些操作加以控制


// 创建空代理
const target = {
  id: 'target'
}

const handler = {}

const proxy = new Proxy(target, handler)
 
console.log(target.id); // target
console.log(proxy.id); // target


// 给目标对象赋值
target.id = 'foo'
console.log(target.id); // foo
console.log(proxy.id); // foo

// 给代理属性赋值 赋值会转移到目标对象
proxy.id = 'bar'
console.log(target.id); // bar
console.log(proxy.id); // bar

console.log(target.hasOwnProperty('id')); // true
console.log(proxy.hasOwnProperty('id')); // true

console.log(proxy.prototype); // undefined




