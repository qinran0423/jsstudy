var a = 2
var obj = {
  a: 4,
  fn1: (function () {
    this.a *= 2
    var a = 3
    return function () {
      this.a *= 2
      a *= 3
      console.log(a);
    }
  })()
}
// window:  a  : 2   4   8 
// obj  a : 4  8 
// 3  9 
var fn1 = obj.fn1
// fn1： function () {
//   this.a*= 2     
//   a*=3
//   console.log(a);
// }
console.log(a);  //4
fn1() // 9
obj.fn1() // 27
console.log(a);  // 8
console.log(obj.a); // 8



