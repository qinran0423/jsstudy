/**
 * 类的本质就是函数
 */

  // class Test {
  //   constructor() {

  //   }
  //   say() {

  //   }
  //   static do() {

  //   }
  // }


  // const test1 = new Test1()


var obj = {
  a: 1
}
var a = 2


var obj2 = {
  a: 100
}

function test(b, c) {
  console.log(this.a, b, c);
}


test()

test.call(obj)
test.apply(obj)
test.call(obj, 3, 4)
test.apply(obj,[3, 4])

// 只会生效一次
var test1 = test.bind(obj,3,4) 
test1()

var test2 = test1.bind(obj2, 3, 4)
test2()
