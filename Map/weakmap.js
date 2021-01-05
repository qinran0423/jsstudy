
const key1 = {id: 1},
      key2 = {id: 2},
      key3 = {id: 3}


const wm = new WeakMap([
  [key1, 'val1'],
  [key2, 'val2'],
  [key3, 'val3']
])


console.log(wm);


/*
  WeakMap {
    {Object => "val1"},
    {Object => "val2"},
    {Object => "val3"}
    
  }
*/


console.log(wm.get(key1)); // val1
console.log(wm.get(key2)); // val2
console.log(wm.get(key3)); // val3



const stringKey = new String('key1')

wm.set(stringKey, 'val4')

console.log(wm);