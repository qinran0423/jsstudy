var arr = [
  {
    name: '张三',
    age: 34
  },
  {
    name: '李四',
    age: 25 
  },
  {
    name: '王五',
    age: 12 
  },
  {
    name: '赵六',
    age: 18
  }
]


var obj1 = {
  name: 'randy'
}

// arr.myForEach(function(item, index, array) {
//   console.log(this);
//   console.log(item, index, array);
// }, obj1)


// var newArr =  arr.myMap(function(item, index, array) {
//   item.age += 100
//   return item
// })


// console.log(arr, newArr);


// var newArr = arr.myFilter(function(item, index, array) {
//   return item.age > 20
// })


// var everyval = arr.myEvery(function(item, index, array) {
//   return item.age < 60
// })

// console.log(everyval);



// var res = arr.mySome(function(item, index, array) {

//   return item.age < 30
// })


// console.log(res);
var initialValue  = []

var newArr = arr.myReduce(function(prev, item, index, array) {
  item.age > 10 && prev.push(item)
  return prev
}, initialValue)

var initialValue1  = []

var newArr1 = arr.myReduceRight(function(prev, item, index, array) {
  item.age > 10 && prev.push(item)
  return prev
}, initialValue1)

console.log(newArr);
console.log(newArr1);