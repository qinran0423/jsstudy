function Student(name, age) {
  this.name = name
  this.age = age  
}

// 通过new函数实现
let hanson1 = new Student('randy',18)

// 创建一个新的myNew函数。自己实现new函数的功能
let hanson2 = myNew(Student, 'mack', 19)



function myNew() {
  let obj = {}
  let fn = Array.prototype.shift.call(arguments)
  obj.__proto__ = fn.prototype
  let ret = fn.apply(obj, arguments)
  return typeof ret === 'object' ? ret: obj
}










