
/**
 * deepClone
 */
function deepClone(origin, target) {
  var tar = target || {}
  var toStr = Object.prototype.toString
  var arrayType = '[object Array]'
  for(var k in origin) {
    if(origin.hasOwnProperty(k)) {
      if(typeof origin[k] === 'object' && origin[k] !== null) {
        tar[k] = toStr.call(origin[k]) === arrayType ? [] : {}
        deepClone(origin[k],tar[k] )
      } else {
        tar[k] = origin[k]
      }
    }
  }
  

  return tar
}


/**
 * forEach
 */
Array.prototype.myForEach = function (cb) {
  var _arr = this;
  var _len = _arr.length
  var _arg2 = arguments[1] || window

  for(var i=0; i < _len; i++) {
    cb.call(_arg2,_arr[i], i, _arr)
  }

}


/**
 * map
 */

Array.prototype.myMap = function(cb) {
  var _arr = this;
  var _len = _arr.length;
  var _arg2 = arguments[1] || window
  var _newArr = []
  var _item
  var _res

  for(var i = 0; i<_len ; i ++) {
    _item = deepClone(_arr[i])
    _res = cb.call(_arg2, _item, i, _arr)
    _res &&  _newArr.push(_res)
  }

  return _newArr
}


/**
 * filter
 */
Array.prototype.myFilter = function(cb) {
  var _arr = this
  var _len = _arr.length;
  var _arg2 = arguments[1] || window
  var _newArr = []
  var _item
  for(var i = 0; i<_len; i++) {
    _item = deepClone(_arr[i])
    cb.call(_arg2, _item, i, _arr) ? _newArr.push(_item) :''
  }
  return _newArr
}

/**
 * every
 */
Array.prototype.myEvery = function(cb) {
  var _arr = this
  var _len = _arr.length;
  var _arg2 = arguments[1] || window
  var _res = true
  for(var i = 0; i<_len; i++) {
    if(!cb.call(_arg2, _arr[i], i, _arr) ) {
      _res = false
      break
    }
  }
  return _res
}

/**
 * some
 */
Array.prototype.mySome = function(cb) {
  var _arr = this
  var _len = _arr.length;
  var _arg2 = arguments[1] || window
  var _res = false
  for(var i = 0; i<_len; i++) {
    if(cb.call(_arg2, _arr[i], i, _arr) ) {
      _res = true
      break
    }
  }
  return _res
}



Array.prototype.myReduce = function(cb, initialValue) {
  var _arr = this
  var _len = _arr.length
  var _args3 = arguments[2] || window
  var _item
  for(var i = 0; i<_len; i++) {
    _item = deepClone(_arr[i])
    initialValue = cb.call(_args3, initialValue, _item, i, _arr )
  }
  return initialValue
}


Array.prototype.myReduceRight = function(cb, initialValue) {
  var _arr = this
  var _len = _arr.length
  var _args3 = arguments[2] || window
  var _item
  for(var i = _len; i >= 0; i--) {
    _item = deepClone(_arr[i])
    initialValue = cb.call(_args3, initialValue, _item, i, _arr )
  }
  return initialValue
}



