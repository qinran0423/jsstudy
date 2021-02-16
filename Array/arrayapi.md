## 数组 API

### 问题

1. 数组的构造器有哪几种？
2. 哪些是改变自身的方法？
3. 哪些是不改变自身的方法？
4. 遍历的方法有哪些？

### Array的构造器

Array 构造器用于创建一个新的数组。通常，我们推荐使用对象字面量的方式创建一个数组，例如 var a = [] 就是一个比较好的写法。但是，总有对象字面量表述乏力的时候，比如，我想创建一个长度为 6 的空数组，用对象字面量的方式是无法创建的，因此只能写成下述代码这样。

```js
// 使用 Array 构造器，可以自定义长度
var a = Array(6); // [empty × 6]
// 使用对象字面量
var b = [];
b.length = 6; // [undefined × 6]
```

Array 构造器根据参数长度的不同，有如下两种不同的处理方式：

+ new Array(arg1, arg2,…)，参数长度为 0 或长度大于等于 2 时，传入的参数将按照顺序依次成为新数组的第 0 至第 N 项（参数长度为 0 时，返回空数组）；
+ new Array(len)，当 len 不是数值时，处理同上，返回一个只包含 len 元素一项的数组；当 len 为数值时，len 最大不能超过 32 位无符号整型，即需要小于 2 的 32 次方（len 最大为 Math.pow(2,32)），否则将抛出 RangeError。



#### ES6新增的构造方法和： Array.of 和 Array.from

##### Array.of

Array.of 用于将参数依次转化为数组中的一项，然后返回这个新数组，而不管这个参数是数字还是其他。它基本上与 Array 构造器功能一致，唯一的区别就在单个数字参数的处理上。

在下面的这几行代码中，你可以看到区别：当参数为两个时，返回的结果是一致的；当参数是一个时，Array.of 会把参数变成数组里的一项，而构造器则会生成长度和第一个参数相同的空数组。

```js
Array.of(8.0); // [8]
Array(8.0); // [empty × 8]
Array.of(8.0, 5); // [8, 5]
Array(8.0, 5); // [8, 5]
Array.of('8'); // ["8"]
Array('8'); // ["8"]
```

##### Array.from

Array.from 的设计初衷是快速便捷地基于其他对象创建新数组，准确来说就是从一个类似数组的可迭代对象中创建一个新的数组实例。其实就是，只要一个对象有迭代器，Array.from 就能把它变成一个数组（注意：是返回新的数组，不改变原对象）。

Array.from 3个参数：

+ 类似数组的对象，必选；
+ 加工函数，新生成的数组会经过该函数的加工再返回；
+ this 作用域，表示加工函数执行时 this 的值。

```js
var obj = {0: 'a', 1: 'b', 2:'c', length: 3};
Array.from(obj, function(value, index){
  console.log(value, index, this, arguments.length);
  return value.repeat(3);   //必须指定返回值，否则返回 undefined
}, obj);
```

#### Array的判断

在 ES5 提供该方法之前，我们至少有如下 5 种方式去判断一个变量是否为数组

```js
// 判断数组
var a = []

// instanceof
console.log(a instanceof Array); // true
// constructor
console.log(a.constructor ===Array); // true
// Object.prototype.isPrototypeOf()
console.log(Array.prototype.isPrototypeOf(a)); // true
// getPrototypeOf
console.log(Object.getPrototypeOf(a) === Array.prototype ); // true
// Object.prototype.toString
console.log(Object.prototype.toString.call(a) === '[object Array]'); // true
```

ES6 之后新增了一个 Array.isArray 方法，能直接判断数据类型是否为数组，但是如果 isArray 不存在，那么 Array.isArray 的 polyfill 通常可以这样写：

```js
if (!Array.isArray){
  Array.isArray = function(arg){
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
```



#### 改变自身的方法

基于 ES6，会改变自身值的方法一共有 9 个，分别为 pop、push、reverse、shift、sort、splice、unshift，以及两个 ES6 新增的方法 copyWithin 和 fill。

#### 不改变自身的方法

基于 ES7，不会改变自身的方法也有 9 个，分别为 concat、join、slice、toString、toLocaleString、indexOf、lastIndexOf、未形成标准的 toSource，以及 ES7 新增的方法 includes。

#### 数组遍历的方法

基于 ES6，不会改变自身的遍历方法一共有 12 个，分别为 forEach、every、some、filter、map、reduce、reduceRight，以及 ES6 新增的方法 entries、find、findIndex、keys、values。

![image-20210216205146455](C:\Users\11561\AppData\Roaming\Typora\typora-user-images\image-20210216205146455.png)



+ 所有插入元素的方法，比如 push、unshift 一律返回数组新的长度；
+ 所有删除元素的方法，比如 pop、shift、splice 一律返回删除的元素，或者返回删除的多个元素组成的数组
+ 部分遍历方法，比如 forEach、every、some、filter、map、find、findIndex，它们都包含 function(value,index,array){} 和 thisArg 这样两个形参。