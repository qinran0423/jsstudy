// let person = {}
// Object.defineProperty(person, 'name', {
//   writable:true,
//   value: 'Randy'
// })
// console.log(person.name); // Randy
// person.name = 'Mack'
// console.log(person.name); // Mack


// let book = {
//   year_: 2017,
//   edition: 1,
// }

// Object.defineProperty(book, 'year', {
//   get() {
//     return this.year_
//   },
//   set(newValue) {
//     if(newValue > 2017) {
//       this.year_ = newValue
//       this.edition += newValue - 2017
//     } 
//   }
// })

// book.year = 2018
// console.log(book.edition);




let book = {}

Object.defineProperties(book, {
  year_: {
    value: 2017
  },
  edition: {
    writable: true, // 默认false
    value: 1
  },
  year: {
    get() {
      return this.year_
    },
    set(newValue) {
      if(newValue > 2017) {
        this.year_ = newValue;
        this.edition += newValue - 2017
      }
    }
  }
})


book.year = 2018
console.log(book.edition);


let descriptor = Object.getOwnPropertyDescriptor(book, 'year_')

console.log(descriptor);
// {
//   value: 2017,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

console.log(Object.getOwnPropertyDescriptors(book));
// {
//   year_: {
//     value: 2017,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   },
//   edition: { value: 2, writable: true, enumerable: false, configurable: false },
//   year: {
//     get: [Function: get],
//     set: [Function: set],
//     enumerable: false,
//     configurable: false
//   }
// }



