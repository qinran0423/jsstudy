// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// // [ 'Dec', 'Feb', 'Jan', 'March' ]
// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// //[ 1, 100000, 21, 30, 4 ]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort((a,b) => b - a);
// console.log(array1);    // [100000, 30, 21, 4, 1]
// const array1 = [1, 30, 4, 21, 100000];
// array1.sort((a,b) => a - b);
// console.log(array1);    // [1, 4, 21, 30, 100000]


let arr = [2,3,1,5,4]

// for(let i =0 ; i< arr.length-1; i++) {
//   for(let j = 0; j < arr.length - 1 - i; j++) {
//     if(arr[j] > arr[j + 1]) {
//       let _temp = arr[j]
//       arr[j] = arr[j+1]
//       arr[j+1] = _temp 
//     }
//   }
// }


// function quickSort(arr) {
//   console.log(arr);
//   if(arr.length < 2) return arr
//   let midindex = Math.floor(arr.length / 2)
//   let midNum = arr.splice(midindex, 1)[0]
//   let leftarr = []
//   let rightarr = []
//   for(let i = 0; i< arr.length; i++) {
//     if(arr[i] <= midNum) {
//       leftarr.push(arr[i])
//     } else {
//       rightarr.push(arr[i])
//     }
//   }

//   return quickSort(leftarr).concat(midNum, quickSort(rightarr))

// }



// let selectIndex 
// for (let i = 0; i < arr.length - 1; i++) {
//   selectIndex = i
//   for (let j = i + 1; j < arr.length; j++) {
//     if(arr[selectIndex] > arr[j]) {
//       selectIndex = j
//     }
//   }

//   if(selectIndex !== i) {
//     [arr[selectIndex], arr[i]] = [arr[i], arr[selectIndex]]
//   }
  
// }

for (let i = 1; i < arr.length; i++) {
  for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
    [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
  }
}


console.log(arr);