function myNew() {
  const constructor = [].shift.call(arguments)
  const _this = {}
  _this.__proto__ =  constructor.prototype
  const res = constructor.apply(_this, arguments)
  return res instanceof Object ? res : _this

}

// function Test(a, b) {
//   this.a = a
//   this.b = b
// }

// const test = new Test(1, 2)
// const test2 = myNew(Test, 1,2)

// console.log(test);
// console.log(test2);



Function.prototype.myCall = function(ctx) {
  ctx = ctx ? ctx : window
  ctx.originFn = this
  
  var arr = []
  for(var i = 1; i <  arguments.length; i++) {
    arr.push('arguments['+ i +']')
  }

  var res = eval('ctx.originFn('+ arr +')')
  delete ctx.originFn

  return res
}

Function.prototype.myApply = function(ctx, args) {
  ctx = ctx ? Object(ctx) : window
  ctx.originFn = this

  if(typeof args !== 'object' && typeof args !== 'function') {
    throw new TypeError('xxxxx')
  }

  if(!args || !(args instanceof Array)) {
    return ctx.originFn()
  }

  var res = eval('ctx.originFn('+ args +')')
  delete ctx.originFn
  return res
}


Function.prototype.myBind = function(ctx) {
  var originFN = this

  var args = [].slice.call(arguments, 1)

  var newFn = function() {
    var newargs = [].slice.call(arguments)
    return originFN.apply(this instanceof newFn ? this : ctx, args.concat(newargs))
  }
   return newFn
}



function Test(c) {
  console.log(c);
  return {
    a: 1,
    b: 2
  }
}


// const fn = Test.myBind({
//   a: 1,
//   b: 2
// })
// const newVal = new fn()
// console.log(newVal);
const res = Test.bind({
  a: 3,
  b: 4
})


new res(1,2)