function Foo() {}

Foo.prototype.name = 'randy'

var a = new Foo()

console.log(a instanceof Foo); // true
// 在a的整条__proto__链中是否有指向Foo.prototype的对象

