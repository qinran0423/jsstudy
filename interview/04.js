function f1() {
  var sum = 0
  function f2( ) {
    sum++
    return f2
  }

  f2.valueOf = function() {
    return sum
  }

  f2.toString = function () {
    return sum + ''
  }

  return f2

}


console.log(+f1());
console.log(+f1()());
console.log(+f1()()());