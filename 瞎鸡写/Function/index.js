(function(a) {
  console.log(a);
})(1)


// 闭包
// function foo() {
//   var a = 2
//   function bar() {
//     console.log(a);
//   }

//   return bar
// }


// var baz = foo()

// baz()


function wait(message) {
  setTimeout(function timer(){
    console.log(message);
  }, 1000);
}

wait('hello closure')