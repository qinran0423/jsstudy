function getType(value) {
  if(value === null) return 'null'

  return typeof(value) === 'object' ? {
    '[object Object]' : 'Object',
    '[objecy Array]': 'Array',
    '[objecy Number]': 'Number',
    '[objecy String]': 'String',
    '[objecy Boolean]': 'Array',
  }[Object.prototype.toString.call(value)] : typeof(value)

}



function myNew() {
  const constructor = Array.prototype.shift.call(arguments)
  console.log(constructor);
  const _this = {}
  _this.__proto__ = constructor.prototype
  let res = constructor.apply(_this, arguments)
  return typeof res === 'object' ? res : _this
}




// es5
Function.prototype.myCall  = function(ctx) {
  
  ctx = ctx ? ctx : window

  ctx.originFn = this

  var arr = []

  for(var i = 1 ; i < arguments.length; i++) {
    arr.push('arguments['+ i +']')
  }

  var res = eval('ctx.originFn('+ arr +')')
  
  delete ctx.originFn


  return res
}



Function.prototype.myApply = function(ctx, args) {

  ctx = ctx ? Object(ctx) : window

  ctx.originFn = this

  if(typeof args !== 'object' && typeof args !== 'function' ) {
    throw new TypeError('xxxxx')
  }

  if(!args || getType(args) !== 'Array') {
    return ctx.originFn()
  }

  var ret = eval('ctx.originFn('+ args + ')')

  delete ctx.originFn

  return ret

}




Function.prototype.myBind = function(ctx) {
  var originFn = this
  var args = Array.prototype.slice.call(arguments, 1)
  var test = function() {
    var newargs = Array.prototype.slice.call(arguments)
    return originFn.apply(this instanceof test ? this : ctx, args.concat(newargs))
  }
  test.prototype = Object.create(this.prototype)

  return test
}


