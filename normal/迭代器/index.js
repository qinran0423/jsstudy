var obj = {
  a: '1',
  b: '2',
  c: '3'
}


// Object.prototype[Symbol.iterator] =  function () {
//   var keys = Object.keys(this)
//   var iIndex = 0
//   return {
//     next() {
//       if(iIndex <  keys.length) {
//         return { value: obj[keys[iIndex++]], done: false }
//       } else {
//         return {value: undefined, done: true}
//       }
//     }
//   }
// }


Object.prototype[Symbol.iterator] = function *() {
  var keys = Object.keys(this)
  for(var k of keys) {  
    yield [k, this[k]]
  }
}


for (const [k ,v] of obj) {
  console.log(k,v);
}
