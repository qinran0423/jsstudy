let colors = new Array(3)
console.log(colors); //长度为3的数组

let names = new Array('greg')
console.log(names); // [ 'greg' ]



console.log(Array.from('matt')); // [ 'm', 'a', 't', 't' ]

const m = new Map().set(1,2)
                   .set(3,4)
const s = new Set().add(1)
                   .add(2)
                   .add(3)
                   .add(4)

console.log(Array.from(m)); // [ [ 1, 2 ], [ 3, 4 ] ]
console.log(Array.from(s)); // [1, 2, 3, 4 ]

// Array.from 是对现有数组执行浅复制
const a1 = [1,2,3,4]
const a2 = Array.from(a1)

console.log(a2); // [ 1, 2, 3, 4 ]
console.log(a1 === a2); // false





let arr1 = [1,2,3]
let arr2 = arr1
console.log(arr2 === arr1);



let colors1 = ['red', 'blue', 'green']
console.log(colors1.toString()); // red,blue,green  
console.log(colors1.valueOf());
console.log(colors1);




let person1 = {
  toLocaleString() {
    return 'Randy'
  },
  toString() {
    return 'Mack'
  }
}


let person2 = {
  toLocaleString() {
    return 'Nikolaos'
  },
  toString() {
    return 'Greg'
  }
}



let people = [person1, person2]
// alert(people) // Mack,Greg
// alert(people.toString()) // Mack,Greg
// alert(people.toLocaleString()) // Randy,Nikolaos


