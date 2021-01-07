let person = {}
Object.defineProperty(person, 'name', {
  writable:true,
  value: 'Randy'
})
console.log(person.name); // Randy
person.name = 'Mack'
console.log(person.name); // Mack

