const m1 = new Map([
  ['key1', 'val1'],
  ['key2', 'val2'],
  ['key3', 'val3']
])

m1.set('key4', 'val4')
console.log(m1);
// Map {
//   'key1' => 'val1',val
//   'key2' => 'val2',
//   'key3' => 'val3',
//   'key4' => 'val4'
// }

console.log(m1.get('key1')); // val1



for(let pair of m1.entries()){
  console.log(pair);
}
// [ 'key1', 'val1' ]
// [ 'key2', 'val2' ]
// [ 'key3', 'val3' ]
// [ 'key4', 'val4' ]



for(let key of m1.keys()) {
  console.log(key);
}

// key1
// key2
// key3
// key4



for(let key of m1.values()) {
  console.log(key);
}
// val1
// val2
// val3
// val4



