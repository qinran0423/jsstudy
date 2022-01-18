Function.prototype.myCall = function (ctx) {
  console.log(ctx);
  ctx = ctx ? Object(ctx) : window
  ctx.originFn = this
  const args = [...arguments].slice(1)
  const result = ctx.originFn(...args)
  delete ctx.originFn
  return result

}


/**
 * 1. test函数 -> call()  -> test就执行
 * 2. test函数this -> call的第一个参数
 * 3. call -> 从第二个参数开始到结束 是 test的参数列表
 */

// ES6模块中自动使用严格模式
function test() {
  console.log(this, arguments);

}

// test()
// // this -> window
//   // use strict ->  undefined


function test1() {

}


test.myCall({
  a: 1,
  b: 2
}, 'randy', 'mick')



var obj = {
  a: 1,
  b: 2,
  test() {
    console.log(this);
  }
}

// 对于一个方法来说，谁调用他，默认函数内部的this指向就指向谁
// obj.test()


