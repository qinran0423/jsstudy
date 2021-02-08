function myInstanceOf(left, right) {

  if(typeof left !== 'object' || left === null) return false;

  let proto = Object.getPrototypeOf(left)

  while(true) {
    if(proto === null) return false
    if(proto === right.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}



console.log(myInstanceOf(new Number(123), Number));
console.log(myInstanceOf(123, Number));



var obj = {

  value: 1,

  valueOf() {

    return 2;

  },

  toString() {

    return '3'

  },

  [Symbol.toPrimitive]() {

    return 4

  }

}

console.log(obj + 1); // 输出5

// 因为有Symbol.toPrimitive，就优先执行这个；如果Symbol.toPrimitive这段代码删掉，则执行valueOf打印结果为3；如果valueOf也去掉，则调用toString返回'31'(字符串拼接)

// 再看两个特殊的case：

10 + {}

// "10[object Object]"，注意：{}会默认调用valueOf是{}，不是基础类型继续转换，调用toString，返回结果"[object Object]"，于是和10进行'+'运算，按照字符串拼接规则来，参考'+'的规则C

[1,2,undefined,4,5] + 10

// "1,2,,4,510"，注意[1,2,undefined,4,5]会默认先调用valueOf结果还是这个数组，不是基础数据类型继续转换，也还是调用toString，返回"1,2,,4,5"，然后再和10进行运算，还是按照字符串拼接规则，参考'+'的第3条规则
