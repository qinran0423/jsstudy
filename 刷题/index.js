
1.
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

let arr = [3,1,3,2,5,4,5] 

function sort1(k, arr) {
  return Array.from(new Set([...arr])).sort((a, b) => b-a)[k-1]
}

console.log(sort1(1,arr));

3. 
Function.prototype.myBind = function (ctx) {
  const originFn = this
  const args = [].slice.call(arguments, 1)
  const newFn =  function () {
    const newargs = [].slice.call(arguments)
    originFn.apply(this instanceof newFn ? this : ctx, args.concat(newargs))
  }
  
  newFn.prototype = Object.create(this.prototype)

  return newFn
}
