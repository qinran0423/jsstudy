let a = [1,4,3,2,5] 


// 冒泡 O(n^2)

// function bubbleSort(arr) {

//   if(arr.length < 2)  return arr
//   for(let i = 0; i < arr.length -1; i++) {
//     for(let j = 0; j<arr.length -1 -i; j ++ ) {
//       if(arr[j] > arr[j + 1]) {
//         let _temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = _temp
//       }
//     }
//   }

//   return arr

// }
// console.log(bubbleSort(a));


// // 快速排序 O(nlogn)
// function quickSort(arr) {
//   if(arr.length < 2) return arr
//   // 取随机数
//   let midIndex = Math.floor(arr.length / 2) 
//   let midNum = arr.splice(midIndex, 1)[0]
//   let leftarr = []
//   let rightarr = []

//   for(let i = 0 ; i < arr.length; i++) {
//     if(arr[i] <= midNum) {
//       leftarr.push(arr[i])
//     } else {
//       rightarr.push(arr[i])
//     }
//   }

//   return quickSort(leftarr).concat(midNum, quickSort(rightarr))
// }
// console.log(quickSort(a));


// console.log('xxx',a);
// // 选择排序
// function selectSort(arr) {
//   let minindex
//   for(let i = 0; i < arr.length - 1; i++) {
//     minindex = i
//     for(let j = i + 1; j < arr.length; j++) {
//       if(arr[minindex] > arr[j]) {
//         minindex = j
//         console.log(minindex);
//       }
//     }
   
//     if(minindex !== i) {
//       [a[minindex], a[i]] = [a[i], a[minindex]]
//     }
//   }
//   return arr
// }

// console.log(selectSort(a));


//  插入排序
function insertSort(arr) {
  for(let i = 1; i< arr.length; i++) {
    for(let j = i; j > 0 && a[j] < a[j -1]; j--) {
      // [a[j], a[j-1]] = [a[j-1], a[j]]
      let _temp = a[j -1]
      a[j-1] = a[j]
      a[j] = _temp
    }
  }
  return arr
}

console.log(insertSort(a));