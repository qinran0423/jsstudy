// var a = {
//   _default: 0,
//   toString( ) {
//     return ++this._default
//   }
// }


// if(a== 1 && a == 2 && a == 3) {
//   console.log('You\'re win !!');
// }


// ============================
var _default = 0
Object.defineProperty(window, 'a', {
  get() {
    return ++_default
  }
})



if (a === 1 && a === 2 && a === 3) {
  console.log('You\'re win !!');
}



