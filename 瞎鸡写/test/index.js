
// let a = {
//   _default: 0,
//   toString: function() {
//     return ++ this._default
//   }
// }

// if(a==1&&a==2&&a==3) {
//   console.log('success');
// }



// let _default = 0
// Object.defineProperty(globalThis, 'b', {
//   get() {
//     return ++_default
//   }
// })


// if(b===1&&b===2&&b===3) {
//   console.log('success!!!');
// }





// console.log(({} + {}).length); // 30
// console.log({}.toString());
// /*
//   {}.toString =>  [object Object]
//   [object Object] + [object Object] => [object Object][object Object]
// */




// console.log(([] + []).length); // 0
// console.log([1,2,3].toString()); // 1,2,3
// /*
//   [].toString = ''
//  */



 
// console.log((function(...args){}).length); // 0


// function test1(...args){}


// test1(1,2,3)

// console.log(test1.length); // 0



// Promise.resolve(1)
// .then(2)
// .then(Promise.resolve(3))
// .then(console.log)




var arr = [1,2,3]


// function * generator(arr) {
//   for(let v of arr) {
//     yield v
//   }
// }

// const iterator = generator(arr)
// console.log(iterator.next());


// function  generator(arr) {
//   let nextIndex = 0
//   return {
//     next() {
//       return nextIndex < arr.length
//       ? 
//       {value: arr[nextIndex++], dnoe: false}
//       :
//       {value: undefined, done: true}
//     }
//   }
// }

// const iterator = generator(arr)
// console.log(iterator.next());
// console.log(iterator.next());

// console.log(iterator.next());

// console.log(iterator.next());


const o = {
  'a': 1,
  'b': 2,
  'v': 3,
  length: 3
}


Object.prototype[Symbol.iterator] = iterator


function iterator() {
  var index = 0;
  var _this = this;

  return {
    next() {
      return index <  _this.length
      ?
      {value: _this[index++], done: false}
      :
      {value: undefined, done: true}
    }
  }
}


for(let v of o){
  console.log(v);
}