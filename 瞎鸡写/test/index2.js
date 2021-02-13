//! 打印 _+_+_+···+_ = 'abcde···z'

Object.defineProperty(globalThis, '_' , {
  get() {
    this._c = this._c || 'a'.charCodeAt(0)
    var _ch = String.fromCharCode(this._c)

    if(this._c >= 'a'.charCodeAt(0) + 26) return;
    this._c ++

    return _ch
  }
})

console.log(_ + _ + _ + _);





/**
 * {
 *  a: 1,
 *  b: 2,
 *  c: 3
 * }
 */

let _obj = {
  a: 1,
  b: 2,
  c: 3
}

let obj = {}

for(var k in _obj) {
  Object.defineProperty(obj, k, {
    enumerable: true,
    writable:  k === 'b' ? false : true,
    value: ++_obj[k]
  })

}


for(var k in obj) {
  obj[k] += 1
}


console.log(obj);
/**
 * {
 *  a: 3,
 *   b: 3，
 *   c:5
 * }
*/





