// 今天看解构
let person = {
  name: 'Matt',
  age: 27
}

// let personName = person.name,
//     personAge = person.age;


// let { name: personName, age: personAge   } = person
// console.log(personName);
// console.log(personAge);

// let {name, age} = person;
// console.log(name, age);

// let {name, job} = person
// console.log(name, job);

// let {name, job = 'Software engineer'} = person
// console.log(name, job);



// console.log(...[1,2,3]);


// console.log(1,...[2,3,4], 5);


// function add(x, y) {
//   return x + y 
// }

// var numbers = [4,38]
// console.log(add(...numbers));

// function f(v,w,x,y,z) {
//   console.log(...arguments);
// }

// var args = [0,1]

// f(-1, ...args, 2, ...[3])

// let x = 1

// const arr = [
//   ...(x>0 ? ['a'] : []),
//   'b'
// ]

// console.log(...arr);

