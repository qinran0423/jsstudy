## sort排序方法的实现

### 问题

+ sort 方法到底是用了哪种排序思路？
+ sort 方法里面的参数对比函数是什么意思？

### sort基本使用

sort 方法是对数组元素进行排序，默认排序顺序是先将元素转换为字符串，然后再进行排序，先来看一下它的语法：

arr.sort([compareFunction])

其中 compareFunction 用来指定按某种顺序进行排列的函数，如果省略不写，元素按照转换为字符串的各个字符的 Unicode 位点进行排序。

```js
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// [ 'Dec', 'Feb', 'Jan', 'March' ]
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
//[ 1, 100000, 21, 30, 4 ]
```

如果不加参数，在第二段代码中，21 会排到 4 的前面。这样按照从小到大的逻辑是行不通的，如果想要按照从小到大排序或者从大到小排序，那么上面的代码就需要调整为下面这样。

```js
const array1 = [1, 30, 4, 21, 100000];
array1.sort((a,b) => b - a);
console.log(array1);    // [100000, 30, 21, 4, 1]
const array1 = [1, 30, 4, 21, 100000];
array1.sort((a,b) => a - b);
console.log(array1);    // [1, 4, 21, 30, 100000]
```

如果指明了 compareFunction 参数 ，那么数组会按照调用该函数的返回值排序，即 a 和 b 是两个将要被比较的元素：

+ 如果 compareFunction（a, b）小于 0，那么 a 会被排列到 b 之前；
+ 如果 compareFunction（a, b）等于 0，a 和 b 的相对位置不变；
+ 如果 compareFunction（a, b）大于 0，b 会被排列到 a 之前。

### sort 方法的底层实现



结论：

1. 当 n<=10 时，采用插入排序；
2. 10<n <=1000，采用中位数作为哨兵元素；
3. n>1000，每隔 200~215 个元素挑出一个元素，放到一个新数组中，然后对它排序，找到中间位置的数，以此作为中位数。

