问题：

+ 用什么样的思路可以 new 关键词？
+ apply、call、bind 这三个方法之间有什么区别?
+ 怎样实现一个 apply 或者 call 的方法？



##  方法的基本介绍

### new 原理

new 关键词的主要作用就是执行一个构造函数、返回一个实例对象，在 new 的过程中，根据构造函数的情况，来确定是否可以接受参数的传递。下面我们通过一段代码来看一个简单的 new 的例子。

```js
function Person(){
   this.name = 'Jack';
}
var p = new Person(); 
console.log(p.name)  // Jack
```

步骤：

+ 创建一个新对象；
+ 将构造函数的作用域赋给新对象（this 指向新对象）；
+ 执行构造函数中的代码（为这个新对象添加属性）；
+ 返回新对象。

new 关键词执行之后总是会返回一个对象，要么是实例对象，要么是 return 语句指定的对象。



### apply&call&bind 原理

```js
func.call(thisArg, param1, param2, ...)
func.apply(thisArg, [param1,param2,...])
func.bind(thisArg, param1, param2, ...)
```

其中 func 是要调用的函数，thisArg 一般为 this 所指向的对象，后面的 param1、2 为函数 func 的多个参数，如果 func 不需要参数，则后面的 param1、2 可以不写。

这三个方法共有的、比较明显的作用就是，都可以改变函数 func 的 this 指向。call 和 apply 的区别在于，传参的写法不同：apply 的第 2 个参数为数组； call 则是从第 2 个至第 N 个都是给 func 的传参；而 bind 和这两个（call、apply）又不同，bind 虽然改变了 func 的 this 指向，但不是马上执行，而这两个（call、apply）是在改变了函数的 this 指向之后立马执行。

```js
let a = {
  name: 'jack',
  getName: function(msg) {
    return msg + this.name;
  } 
}
let b = {
  name: 'lily'
}
console.log(a.getName('hello~'));  // hello~jack
console.log(a.getName.call(b, 'hi~'));  // hi~lily
console.log(a.getName.apply(b, ['hi~']))  // hi~lily
let name = a.getName.bind(b, 'hello~');
console.log(name());  // hello~lily
```

从上面的代码执行的结果中可以发现，使用这三种方式都可以达成我们想要的目标，即通过改变 this 的指向，让 b 对象可以直接使用 a 对象中的 getName 方法。从结果中可以看到，最后三个方法输出的都是和 lily 相关的打印结果，满足了我们的预期。

## 方法的应用场景

### 判断数据类型

用 Object.prototype.toString 来判断类型是最合适的，借用它我们几乎可以判断所有类型的数据

```js
function getType(obj){
  let type  = typeof obj;
  if (type !== "object") {
    return type;
  }
  return Object.prototype.toString.call(obj).replace(/^$/, '$1');
}
```

### 类数组借用方法

类数组因为不是真正的数组，所有没有数组类型上自带的种种方法，所以我们就可以利用一些方法去借用数组的方法，比如借用数组的 push 方法，看下面的一段代码。

```js
var arrayLike = { 
  0: 'java',
  1: 'script',
  length: 2
} 
Array.prototype.push.call(arrayLike, 'jack', 'lily'); 
console.log(typeof arrayLike); // 'object'
console.log(arrayLike);
// {0: "java", 1: "script", 2: "jack", 3: "lily", length: 4}
```

从上面的代码可以看到，arrayLike 是一个对象，模拟数组的一个类数组。从数据类型上看，它是一个对象。从上面的代码中可以看出，用 typeof 来判断输出的是 'object'，它自身是不会有数组的 push 方法的，这里我们就用 call 的方法来借用 Array 原型链上的 push 方法，可以实现一个类数组的 push 方法，给 arrayLike 添加新的元素。

### 获取数据的最大/最小值

我们可以用 apply 来实现数组中判断最大 / 最小值，apply 直接传递数组作为调用方法的参数，也可以减少一步展开数组，可以直接使用 Math.max、Math.min 来获取数组的最大值 / 最小值，请看下面这段代码。

```js
let arr = [13, 6, 10, 11, 16];
const max = Math.max.apply(Math, arr); 
const min = Math.min.apply(Math, arr);
 
console.log(max);  // 16
console.log(min);  // 6
```

### 继承

```js
  function Parent3 () {
    this.name = 'parent3';
    this.play = [1, 2, 3];
  }

  Parent3.prototype.getName = function () {
    return this.name;
  }
  function Child3() {
    Parent3.call(this);
    this.type = 'child3';
  }

  Child3.prototype = new Parent3();
  Child3.prototype.constructor = Child3;
  var s3 = new Child3();
  console.log(s3.getName());  // 'parent3'
```

## 自己实现new call apply bind

### new

new 被调用后大致做了哪几件事情。

+ 让实例可以访问到私有属性；
+ 让实例可以访问构造函数原型（constructor.prototype）所在原型链上的属性；
+ 构造函数返回的最后结果是引用数据类型。

```js
function _new(ctor, ...args) {
    if(typeof ctor !== 'function') {
      throw 'ctor must be a function';
    }
    let obj = new Object();
    obj.__proto__ = Object.create(ctor.prototype);
    let res = ctor.apply(obj,  [...args]);

    let isObject = typeof res === 'object' && typeof res !== null;
    let isFunction = typeof res === 'function';
    return isObject || isFunction ? res : obj;
};
```

### apply和call

```js
Function.prototype.call = function (context, ...args) {
  var context = context || window;
  context.fn = this;
  var result = eval('context.fn(...args)');
  delete context.fn
  return result;
}
Function.prototype.apply = function (context, args) {
  let context = context || window;
  context.fn = this;
  let result = eval('context.fn(...args)');
  delete context.fn
  return result;
}
```

从上面的代码可以看出，实现 call 和 apply 的关键就在 eval 这行代码。其中显示了用 context 这个临时变量来指定上下文，然后还是通过执行 eval 来执行 context.fn 这个函数，最后返回 result。

要注意这两个方法和 bind 的区别就在于，这两个方法是直接返回执行结果，而 bind 方法是返回一个函数，因此这里直接用 eval 执行得到结果。

###  bind

bind 的实现思路基本和 apply 一样，但是在最后实现返回结果这里，bind 和 apply 有着比较大的差异，bind 不需要直接执行，因此不再需要用 eval ，而是需要通过返回一个函数的方式将结果返回，之后再通过执行这个结果，得到想要的执行效果。

```js
Function.prototype.bind = function (context, ...args) {
    if (typeof this !== "function") {
      throw new Error("this must be a function");
    }
    var self = this;
    var fbound = function () {
        self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)));
    }
    if(this.prototype) {
      fbound.prototype = Object.create(this.prototype);
    }
    return fbound;
}
```

从上面的代码中可以看到，实现 bind 的核心在于返回的时候需要返回一个函数，故这里的 fbound 需要返回，但是在返回的过程中原型链对象上的属性不能丢失。因此这里需要用Object.create 方法，将 this.prototype 上面的属性挂到 fbound 的原型上面，最后再返回 fbound。这样调用 bind 方法接收到函数的对象，再通过执行接收的函数，即可得到想要的结果。

![image-20210214105031444](C:\Users\11561\AppData\Roaming\Typora\typora-user-images\image-20210214105031444.png)