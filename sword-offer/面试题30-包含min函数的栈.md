## 面试题30-包含min函数的栈
定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

示例:
```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.
``` 

提示：
```
各函数的调用总次数不超过 20000 次
```

### Java
```java
class MinStack {

    Stack<Integer> _min;
    Stack<Integer> _data;
    /** initialize your data structure here. */
    public MinStack() {
        _min = new Stack<>();
        _data = new Stack<>();
    }
    
    public void push(int x) {
        _data.push(x);
        if(_min.isEmpty()) {
            _min.push(x);
        } else {
            if(x > _min.peek()) {
                x = _min.peek();
            }
            _min.push(x);
        }        
    }
    
    public void pop() {
        _data.pop();
        _min.pop();
    }
    
    public int top() {
        return _data.peek();
    }
    
    public int min() {
        return _min.peek();
    }
}
```

### JavaScript
```javascript
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this._min = [];
    this._data = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this._data.push(x);
    const len = this._min.length;
    if(!len) {
        this._min.push(x);
    } else if(x <= this._min[len-1]) {
        this._min.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const {_min, _data} = this;
    if(_min[_min.length-1] === _data[_data.length-1]) {
        _min.pop();
    }
    _data.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const len = this._data.length;
    if(len) {
        return this._data[len-1];
    }
    return null;
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    const len = this._min.length;
    if(!len) return null;
    return this._min[len-1];
};
```