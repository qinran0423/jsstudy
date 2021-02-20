
/**
 * 1. Date
 * 2. RegExp
 * 3. 对象的不可枚举属性以及 Symbol 类型
 * 4. 继承传入原对象的原型链
 */


const deepClone = (origin, hasmap = new WeakMap()) => {
  if(origin == undefined || typeof origin !== 'object') {
    return origin
  }
  // date
  if(origin.constructor === Date) {
    return new Date(origin)
  }
  // RegExp
  if(origin.constructor === RegExp) {
    return new RegExp(origin)
  }

  const hashKey = hasmap.get(origin)
  if(hashKey) {
    return hashKey
  }
  const cloneContext = new origin.constructor()

  hasmap.set(origin, cloneContext)
  for (const key in origin) {
    if(origin.hasOwnProperty(key)) {
      cloneContext[key] = deepClone(origin[key], hasmap)
    }
  }
  console.log(hasmap);
  return cloneContext
}


let test1 = {}
let test2 = {}

test2.test1 = test1
test1.test2 = test2

console.log(deepClone(test2));

