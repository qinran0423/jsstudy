// 默认绑定

function foo() {
  console.log(this.a);
}

var a = 2
foo() // 2



// 隐式绑定

function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
}

obj.foo() // 2




var obj2 = {
  a: 1,
  b: 2,
  test3:  function() {
    function t() {
      console.log(this);
    }
    t()
  }
}

obj2.test3()

console.log(window);