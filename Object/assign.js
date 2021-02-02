// Object.assign()
// 接收一个目标对象和一个或多个源对象作为参数，然后将每个源对象重可枚举和自有属性复制到目标对象

let dest, src, result;
/**
 * 简单复制
 */

dest = {}
src = {id: 'src'}

result = Object.assign(dest, src)
console.log(dest === result); // true
console.log(dest !== src); // true
console.log(result); //{id: src}
console.log(dest); //{id: src}

/**
 * 多个源对象
 */

dest = {}

result = Object.assign(dest, {a: 'foo'}, {b: 'bar'})
console.log(result); // { a: 'foo', b: 'bar' }


/**
 * 获取函数与设置函数
 */
dest = {
  set a(val) {
    console.log(`ssss---------${val}`);
  }
}

src = {
  get a() {
    console.log('getter');
    return 'foo'
  }
}

Object.assign(dest, src)

console.log(dest);

const v1 = 123
const v2 = '123'
const v3 = true
const v4 = function() {}

const v5 = Object.assign({}, v1,v2,v3,v4)

console.log(v5); //{ '0': '1', '1': '2', '2': '3' }



const target = Object.defineProperty({}, 'a',  {
  value: 1,
  writable: true
})


console.log(target);

const res = Object.assign(target, {b: 2}, {b:3, a:100}, {c: 4})

console.log(res);





const source = {
  a: 1,
  get b() {
    return 2
  }
}

Object.myAssign = function(target, ...source) {
  source.forEach((source) => {
    const descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key)
      return descriptors
    }, {})
    Object.defineProperties(target, descriptors)
  })
}