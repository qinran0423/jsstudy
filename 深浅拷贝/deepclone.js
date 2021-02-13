
/**
 * 1. Date
 * 2. RegExp
 * 3. 对象的不可枚举属性以及 Symbol 类型
 * 4. 继承传入原对象的原型链
 */


const deepClone = (obj) => {
  // date
  if(obj.constructor === Date) {
    return new Date(obj)
  }
  // RegExp
  if(obj.constructor === RegExp) {
    return new RegExp(obj)
  }


  // 繼承原型鏈
  
}


