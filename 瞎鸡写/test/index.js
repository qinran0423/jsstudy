
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



