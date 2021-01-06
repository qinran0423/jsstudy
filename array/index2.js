// let colors = new Array()
// let count = colors.push('red', 'green')
// // push 接收任意数量的参数，添加到数组末尾，返回数组长度
// alert(count) // 2


// count = colors.push('black')
// alert(count) // 3

// // pop 删除数组最后一项，返回被删除的项
// let item = colors.pop()
// alert(item)



// shift 删除数组的第一项并返回，数组长度减1
// let count = colors.push('red', 'green')

// count = colors.push('black')

// let item = colors.shift()
// alert(item)


// unshift在数组开头添加任意多个值， 返回新的数组长度
// let count = colors.unshift('red', 'green')
// alert(count) // 2

// count = colors.unshift('black')
// alert(count) // 3



// let values = [0,1,5,10,15]
// // values.sort()
// // // sort()会在每一项上调用String()转型函数，然后比较字符串来决定顺序
// // alert(values) // 0,1,10,15,5


// function compare(value1, value2) {
//   if(value1 < value2) {
//     return -1
//   } else if(value1 > value2) {
//     return 1
//   } else {
//     return 0
//   }
// }


// values.sort(compare)
// alert(values) // 0,1,5,10,15



// let colors = ['red', 'green', 'blue']
// let newColors = ['black', 'brown']
// let moreNewColors = {
//   [Symbol.isConcatSpreadable]: true,
//   length: 2,
//   0: 'pink',
//   1: 'cyan'
// }
// // Symbol.isConcat-Spreadable阻止concat()打平参数数组 设置为true 可以强制打平类数组对象

// newColors[Symbol.isConcatSpreadable] = false;
// let colors2 = colors.concat("yellow", newColors);
// console.log(colors2); //["red", "green", "blue", "yellow", ["black", "brown"]]
// let colors3 = colors.concat(moreNewColors);
// console.log(colors3); // ["red", "green", "blue", "pink", "cyan"]

// let colors = ["red", "green", "blue", "yellow", "purple"];
// let colors2 = colors.slice(1)
// let colors3 = colors.slice(1, 4)

// console.log(colors2); // green,blue,yellow,purple
// console.log(colors3); // green,blue,yellow



// splice 在数组中间插入元素
/*
  删除：2个参数
  参数一： 删除第一个元素的位置
  参数二： 删除的元素数量
*/ 
// let colors = ['red', 'green', 'blue']
// let removed = colors.splice(0, 1)
// console.log(colors); // [ 'green', 'blue' ]
// console.log(removed); // [ 'red' ]


/**
 * 插入： 三个参数
 * 参数一： 开始位置
 * 参数二： 0（要删除的元素数量）
 * 参数三： 要插入的元素
 */

// let colors = ['red', 'green', 'blue']
// let removed = colors.splice(1, 0, 'yellow', 'orange')

// console.log(colors); // [ 'red', 'yellow', 'orange', 'green', 'blue' ]


/**
 * 替换：三个参数
 * 参数一： 开始位置
 * 参数二： 删除元素的数量
 * 参数三： 插入的任意多个元素
 */

let colors = ['red', 'green', 'blue']
let removed = colors.splice(1, 1, 'yellow', 'orange')
console.log(colors); // [ 'red', 'yellow', 'orange', 'blue' ]

 