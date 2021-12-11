### JavaScript

#### 输入输出
```javascript
// V8
while(line = readline()){
  var lines = line.split(' ');
  var a = parseInt(lines[0]);
  var b = parseInt(lines[1]);
  console.log(a + b);
}
// Node
var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function(line){
  var lines = line.split(' ');
  var a = parseInt(lines[0]);
  var b = parseInt(lines[1]);
  console.log(a + b);
});
```

#### 字符串
```javascript
const example = 'hello world';
const example = String.fromCharCode(97, 98, 99);
const example = example.repeat(3);
example.length;
example[3];
example.charCodeAt(3);
example.indexOf('l');
example.lastIndexOf('l');
example.replace('l', 'L');
example.replaceAll(/l/g, 'L');
const converted = example.split('a');
example.substring(0, 3);
example.toUpperCase();
example.toLowerCase();
isNaN(example);
```

#### 对象
```javascript
const example = {};
example.a = 1;
example['b'] = 2;
'key' in example;
const entries = Object.entries(example);
const values = Object.values(example);

const copyObj = Object.assign({}, example);
const copyObj = {...example};
```

#### 数组
```javascript
const example = [];
const example = new Array(3).fill(false);
example.join(',');
example.push(1);
example.pop();
example.unshift(1);
example.shift();
example.slice(0, 2);
example.splice(0, 2);
example.reverse();
example.sort();
example.sort((a, b) => a - b);
example.sort((a, b) => b - a);
example.sort((a, b) => {
  if(a[0] !== b[0]) return a[0] - b[0];
  return a[1] - b[1];
})
example.length;
example[0] = 1;
const exampel = example.concat(2, 3);

const copyArr = [...example];
const copyArr = Array.from(example);

const arr = new Array(3).fill().map(() => new Array(3).fill()0); // 3x3 array

const [a, b, c] = example;
[a, b] = [b, a];
```

#### 集合
```javascript
const example = new Set();
example.add(1);
const example = new Set([1, 2, 3]);
example.has(1);
example.delete(1);
[...new Set([1, 2, 3, 1, 2, 3])];
[...new Set([1, 2, 3])].join('')
example.size;
example.clear();
```

#### 哈希表
```javascript
const example = new Map();
example.set('a', 1);
const example = new Map([['a', 1], ['b', 2]]);
example.get('a');
example.delete('a');
example.has('a');
example.size;
example.clear();
const keys = [...example.keys()];
const values = [...example.values()];
const entries = [...example.entries()];
```

#### 数学
```javascript
Math.random();
Math.round(x);
Math.ceil(x);
Math.floor(x);
Math.abs(x);
Math.pow(x, y);
Math.sqrt(x);
Math.min(...numbers);
Math.max(...numbers);
X.toFixed(n);
X.toString(radix);
parseInt(string, radix);
parseFloat(string);
Number.isNaN(x);
Number.isFinite(x);
Number.isInteger(x);
Number.isSafeInteger(x);
Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER;
Number.EPSILON;
Number.MAX_VALUE;
Number.MIN_VALUE;
```