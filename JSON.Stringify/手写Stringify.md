+ 由于 function 返回 'null'， 并且 typeof function 能直接返回精确的判断，故在整体逻辑处理基础数据类型的时候，会随着 undefined，symbol 直接处理了；
+  typeof null 的时候返回'object'，故 null 的判断逻辑整体在处理引用数据类型的逻辑里面；
+ 关于引用数据类型中的数组，由于数组的每一项的数据类型又有很多的可能性，故在处理数组过程中又将 undefined，symbol，function 作为数组其中一项的情况做了特殊处理；
+ 同样在最后处理普通对象的时候，key （键值）也存在和数组一样的问题，故又需要再针对上面这几种情况（undefined，symbol，function）做特殊处理；
+ 最后在处理普通对象过程中，对于循环引用的问题暂未做检测，如果是有循环引用的情况，需要抛出 Error；

```js
function jsonStringify(data) {
  let type = typeof data

  if(type !== 'object') {
    let result = data
    
    if(Number.isNaN(data) || data === Infinity) {
      result = "null"
    } else if ( type === 'function' ||  type === 'undefined' || type === 'symbol' ) {
      return undefined
    } else if (type === 'string') {
      result = '"'+ data +'"'
    }

    return String(result)
  } else if(type === 'object') {
    if(data === null) {
      return "null"
    } else if(data.toJSON && typeof data.toJSON === 'function') {
      return jsonStringify(data.toJSON())
    } else if(data instanceof Array) {
      let result = []
      data.forEach((item, index) => {
        if(typeof item === 'undefined' || typeof item === 'function' || typeof item === 'symbol') {
          result[index] = "null"
        } else {
          result[index] = jsonStringify(item)
        }
      })

      result = "[" + result + "]"

      return result
    } else {
      let result = []

      Object.keys(data).forEach((item, index) => {
        if(data[item] !== undefined && typeof data[item] !== 'function' && typeof data[item] !== 'symbol') {
          result.push('"'+ item +'"' + ":" + jsonStringify(data[item]))
        }
      })

      return "{" +result + "}"
    }
  }
}

```

