## JavaScript Cheetsheet

### 类的声明
从ES6开始，JavaScript正式支持Class，包括类的声明、继承、setter/getter方法、静态方法，而以往版本都需要用原型链(Prototype chain)实现（例如到目前为止，Leetcode中给出的JavaScript大部分解题模版仍旧使用原型链的方式进行声明）。若在特定情况下需要仿照Java的编写模式，则可以试着采用声明全局变量、函数闭包等方式。
```javascript
class Shape {
    constructor(name) {
        this._name = name;
    }
}

class Square extends Shape {
    constructor(name, value) {
        super(name);
        this._width = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    calcArea() {
        return this._width * this._width;
    }

    static check() {
        console.log('Square is ready');
    }
}

let temp = new Square('temp', 6);
temp.width = 10;
console.log(temp.width); // Output: 10
console.log(temp._name); // Output: 'temp'
console.log(temp.calcArea()); // Output: 100
Square.check(); // Output: 'Square is ready'
```

### 字符串
```javascript
// 创建
const example = 'string'
// 根据ascii数值(65,66)创建
const example = String.fromCharCode(65,66)
// 重复已有字符串3次以创建新字符串
const newExample = example.repeat(3)
// 获取长度
example.length
// 获取第3位字符
example[3]
// 第3位字符的ascii码
example.charCodeAt(3)
// 字符'a'第一次出现的位置
example.indexOf('a')
// 字符'a'最后一次出现的位置
example.lastIndexOf('a')
// 将字符串中的第一次出现的'a'替换为'b'
example.replace('a', 'b')
// 将字符串中所有的'a'替换为'b'
example.replaceAll(/a/g, 'b')
// 以空格为分界转换为数组
const converted = example.split(' ')
// 提取前5位字符组成的子字符串
example.substring(0, 5)
// 将字符串全部化为小写
example.toLowerCase()
// 将字符串全部化为大写
example.toUpperCase()
// 判断字符串是不是纯数字
isNaN(example)
```

### 数组 Array
存储一般序列，映射类型且键为从0开始的有序整数，自行模拟Stack、Queue数据结构
- Stack: 使用push, pop操作(shift, unshift开销很大)
- Queue: 使用push, shift操作

```javascript
// 创建
const example = []
// 创建长度为5的数组并都初始化为false
const example = new Array(5).fill(false)
// 转换为字符串并用','隔开
example.join(',')
// 从头推入元素
example.unshift('a')
// 从头弹出元素
example.shift()
// 从尾推入元素
example.push('a')
// 从尾弹出元素
example.pop()
// 反转整个数组
example.reverse()
// 获取长度
example.length
// 获取第三位的元素
example[3]
// 修改第三位的元素
example[3] = 'a'
// 从第二位插入元素
exmaple.splice(2, 0, 'c') // 原位操作
// 删除第三位元素
exmaple.splice(3, 1)
// 合并两个数组
const newExample = example.concat(anotherExample)
// 提取前三位元素作为子数组
example.slice(0, 3)
// 从小到大排序
example.sort((a,b)=>a-b) //从大到小则改为b-a，无参数则按字符顺序排列.
(该方法为原位操作)
// 找出最大值
Math.max(...example)
```
- 二维数组的声明
通常在处理类似动态规划问题时会使用二维数组存储中间值。除了普通的迭代方法外，js中可以用如下但数组方法初始化二维数组并赋以默认值的方式，但要留意使用方法，错误使用会导致严重后果。
```javascript
let list1 = new Array(3).fill(new Array(3).fill(0)); // 错误！
list1[0] === list1[1] //true，说明存进去的数组其实都是共享一个内存空间
let list2 = Array(3).fill().map(() => Array(3).fill(0)); // 正确！
list2[0] === list2[1] //false，说明存进去的数组都是隔离不同的
```

### 对象 Object
```javascript
// 创建
const example = {}
// 插入/修改键值对
example['name'] = 'jack'
// 根据键获得值
example['name']    // 不存在则返回undefined
// 检查是否有指定键
'key' in example   // 如果不用涵盖原型，则用.hasOwnProperty()
// 获取所有键值对
const entries = Object.entries(example)  // 每个键值对都放置于数组中：[<key>, <value>]
// 获取所有键
const keys = Object.keys(example)
// 获取所有值
const vals = Object.values(example)
```

### 集合 Set
当需要存储非重复元素时，优先考虑该类型。
```javascript
// 创建
const example = new Set()
// 根据数组创建
const example = new Set([true, false])
// 取出数组的重复值
[...new Set(arr)]
// 取出字符串的重复字符
[...new Set(str)].join('')
// 获取长度
example.size
// 添加值
example.add('new')
// 检查是否含有指定值
example.has('new')
// 删除指定键值对
example.delete('new')
// 全部清空
example.clear()
```

### 哈希表 Map
当需要存储键值对且键为对象时，优先考虑该类型。
```javascript
// 创建
const example = new Map()
// 根据数组创建
const example = new Map([['name', 'mike']])
// 插入/修改键值对
example.set('name', 'jake')
// 检查是否有指定键
example.has('name')
// 根据键获得值
example.get('name')  // 不存在则返回undefined
// 删除指定键值对
example.delete('name')
// 全部清空
example.clear()
// 现有的键值对个数
example.size()
// 获取所有键
const keys = example.keys()
// 获取所有值
const vals = example.values()
// 获取所有键值对
const entries = example.entries()  // 每个键值对都放置于数组中：[<key>, <value>]

// 转换为数组
const converted = [...example] // 每个键值对都放置于数组中：[<key>, <value>]

```

### 数字和数学
```javascript
// 四舍五入求整
Math.round(x)
// 退1求整
Math.floor(x)
// 进1求整
Math.ceil(x)
// 求x的y次方
Math.pow(x, y)
// 求绝对值
Math.abs(x)
// 数字转字符串
x.toString(10)    //参数为进制，可以为2，8，16
// 字符串转数字
parseInt(x, 10)   // 第二参数为进制，可以为2，8，16
// 最大安全整数
Number.MAX_SAFE_INTEGER
// 最小安全整数
Number.MIN_SAFE_INTEGER
```

### 奇技淫巧
```javascript
// 替换元素
[a, b] = [b, a]
```

### 传值、传引用和拷贝
在JavaScript中，函数间的变量传递规则可以通俗地理解为：基本数据类型为按值传递，对象与函数为通过引用传递（准确的说：传递对象的指针的拷贝，指针地址本身也是个值）。
关于拷贝的方法和实现，我们在这里主要考虑数组和对象：
- 浅拷贝
```javascript
// 复制指向对象的指针，复制后共享内存。
const testArray = [1,2,3];
const copyArray = testArray;

const testObject = {id: 1, name: 'jack'};
const copyObject = testObject;
```
- 深拷贝
```javascript
// 复制对象的所有内容并存进新创建的对象，复制后不共享内存。
/**
 * 如果对象或数组只有一层，则可以使用自带方法或spread表达式
 */
const testArray = [1,2,3];
const copyArray1 = Array.from(testArray);
const copyArray2 = [...testArray];

const testObject = {id: 1, name: 'jack'};
const copyObject1 = Object.assign({}, testObject);
const copyObject2 = { ...testObject };

/**
 * 如果对象或数组有多层（夹带数组/对象），上面的方法对于内部数组/对象只会拷贝其指针。
 * 可以选择以下两种方法：
 *     1. 利用递归对内部元素依次实现深拷贝
 *     2. 使用JSON方法进行深拷贝（问题是其不支持function和undefined的转译）
 * 下面是利用JSON方法实现深拷贝的语法
 */
const copyArray3 = JSON.parse(JSON.stringify(testArray)); 
const copyObject3 = JSON.parse(JSON.stringify(testObject));
```