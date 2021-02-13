
/*==========================*/
const mySet = new Set([{a: 1}, {a: 1}])
const result = [...mySet]
console.log(result); //[ { a: 1 }, { a: 1 } ]


/*==========================*/
const arr1 = ['a', 'b', 'c']
const arr2 = ['b', 'c', 'a']


console.log(arr1.sort() === arr1); // true
console.log(arr1.sort()); // [ 'a', 'b', 'c' ]
console.log(arr2.sort() === arr2); // true
console.log(arr2.sort()); // [ 'a', 'b', 'c' ]
console.log(arr1.sort() === arr2.sort()); // false