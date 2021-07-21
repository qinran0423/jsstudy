function Foo(name) {
  this.name = name
}


Foo.prototype.myName = function() {
  return this.name
}

function Bar(name, label) {
  Foo.call(this, name)
  this.label = label
}


Bar.prototype = Object.create(Foo.prototype)
// Bar.prototype = Foo.prototype

Bar.prototype.myLable = function() {
  return this.label
}

var a = new Bar('a', 'Obj a')

a.myName() // a
a.myLable() //  Obj a


console.log(Foo.prototype);



// if(!Object.create) {
//   Object.create = function(o) {
//     function F() {}
//     F.prototype = o
//     return new F()
//   }
// }
