function myNew() {
  const constructor = Array.prototype.shift.call(arguments)
  console.log(constructor);
  const _this = {}
  _this.__proto__ = constructor.prototype
  let res =  constructor.apply(_this, arguments)
  return typeof res === 'object' ? res : _this
}




// es5
Function.prototype.myCall  = function(ctx) {
  
  ctx = ctx ? ctx : window

  ctx.originFn = this

  let arr = []

  for(let i = 1 ; i < arguments.length; i++) {
    arr.push('arguments['+ i +']')
  }

  var res = eval('ctx.originFn('+ arr +')')
  
  delete ctx.originFn


  return res
}