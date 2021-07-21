// 函数是程序执行中的主要模块单元
// var ninja = {}
// function hide(ninja) {
//   ninja.visibility = false
// }


// hide(ninja)

// console.log(ninja);


// javascript 函数拥有对象的所有能力
// function ninjaFunction() {}

// var ninjaFunction = function() {}

// 回调函数
// var text = 'hello world';

// function useless(nijiaCallback) {
//   return nijiaCallback()
// }

// function getText() {
//   return text;
// }

// console.log(useless(getText)=== text); // true


// 使用比较器排序
// var values = [0, 3, 2, 5, 7, 4, 8, 1]

// values.sort(function(value1, value2) {
//   return value2 - value1
// })



// 存储函数
// var store = {
//   nextId: 1,
//   cache: {},
//   add: function(fn) {
//     if(!fn.id) {
//       fn.id = this.nextId++;
//       this.cache[fn.id] = fn;
//       return true;
//     }
//   }
// }

// function ninja () {}


// 自记忆函数
function isPrime(value) {
  // 创建缓存
  if (!isPrime.answers) {
    isPrime.answers = {}
  }
  if (isPrime.answers[value] !== undefined) {
    return isPrime.answers[value]
  }

  var prime = value !== 0 && value !== 1;
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      prime = false;
      break;
    }
  }
  return isPrime.answers[value] = primeß
}