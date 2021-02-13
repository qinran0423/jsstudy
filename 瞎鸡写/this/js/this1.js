// 全局作用域下的this -> 全局对象
// window 和 this 的关系

/**
 * 获取全局对象
 * web: window, self, frames, this
 * node: global
 * worker: self,
 * 通用： globalThis
 */
// console.log(this === window);


// var a = 'global -> a'
// var obj = {
//   a: 'obj -> a',
//   test: function() {
//     console.log(this.a);
//     console.log(globalThis.a);
//     console.log(window.a);
//     console.log(self.a);
//     console.log(frames.a);
//   }
// }


// obj.test()



function test() {
  'use strict';
  return this  
}



console.log(test());
console.log(window.test());