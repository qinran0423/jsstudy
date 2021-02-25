// 1.
// function sort(k, arr) {
//   if(typeof k !== 'number' && k < 1) return 
//   for(let i = 1; i < arr.length; i++) {
//     for(let j = i; j>0 && arr[j] > arr[j - 1]; j--) {
//       [arr[j], arr[j-1]] = [arr[j-1],  arr[j]]
//     }
//   }

//   let arr1 = []
//   for(let i = 0; i < arr.length; i++) {
//     if(!arr1.includes(arr[i])) {
//       arr1.push(arr[i])
//     }
//   }
//   return arr1[k-1]
// }

// let arr = [3,1,3,2,5,4,5] 

// function sort1(k, arr) {
//   return Array.from(new Set([...arr])).sort((a, b) => b-a)[k-1]
// }

// console.log(sort1(1,arr));

// 3. 
// Function.prototype.myBind = function (ctx) {
//   const originFn = this
//   const args = [].slice.call(arguments, 1)
//   const newFn =  function () {
//     const newargs = [].slice.call(arguments)
//     originFn.apply(this instanceof newFn ? this : ctx, args.concat(newargs))
//   }

//   newFn.prototype = Object.create(this.prototype)

//   return newFn
// }


// function doblance(fn, delay= 500) {
//   let timer = null
//   return (...args) => {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       fn.apply(this, args)
//     }, delay);
//   }
// }



// function throttle(fn, delay = 500) {
//   let last = 0
//   return (...args) => {

//     let now = +Date.now()

//     if (now - last > delay) {
//       last = now
//       fn.apply(this, args)
//     }
//   }
// }

// console.log(Number.isNaN(1));
// console.log(Number.isNaN('aaa'));
// console.log(Number(undefined));
// console.log(Number(null));
// console.log(Number('111'));
// console.log(Number('sss'));


// let obj = {
//   toString() {
//     return '1'
//   }
// }
// console.log(Number(obj));

// var val = 'smtg';
// console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');


// function sidEffecting(ary) {
//   ary[0] = ary[2];
// }

// function bar(a, b, c) {
//   c = 10
//   sidEffecting(arguments);
//   return a + b + c;
// }
// console.log(bar(1, 1, 1));



// var name = 'World!';
// (function () {
//   if (typeof name === 'undefined') {
//     var name = 'Jack';
//     console.log('Goodbye ' + name);
//   } else {
//     console.log('Hello ' + name);
//   }
// })();

// var ary = Array(3);
// ary[0]=2
// console.log(ary.map(function(elem) { return '1'; }));



// (function(){
// var x = y = 1;
// })();
// console.log(y);
// console.log(x);


// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };
// a[b] = 123;
// a[c] = 456;
// console.log(a);
// console.log(a[b]);



// var a = 10;
// (function () {
//   console.log(a);
//   a = 5;
//   console.log(window.a);
//   var a = 20;
//   console.log(a);
// })();

// 将数组扁平化并去重，最终得到一个升序且不重复的数组
// var array = [[1, 2, 2] ,[3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

// console.log([...new Set(array.flat(Infinity))].sort((a,b) => a -b));

// function red() {
//   console.log('red');
// }

// function green() {
//   console.log('green');
// }

// function yellow() {
//   console.log('yellow');
// }


// function light(timmer, cb) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       cb()
//       resolve()
//     }, timmer);
//   })
// }


// var step = function() {
//   Promise.resolve().then(() => {
//     return light(3000, red)
//   }).then(() => {
//     return light(2000, green)
//   }).then(() => {
//     return light(1000,  yellow)
//   }).then(() => {
//     step()
//   })
// }

// step()



// const obj= {
//   a: 1
// }
// obj.a = 2
// console.log(obj);



// const obj2 = Object.freeze(obj)
// obj.a = 4
// console.log(obj2);


let xhr = new XMLHttpRequest()
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    if ((xhr.status === 200)) {
      
    }
  }
}

xhr.open('get', '...',true)
xhr.send(null)