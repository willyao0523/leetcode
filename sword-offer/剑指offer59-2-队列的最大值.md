## 剑指offer59-2-队列的最大值

请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value 需要返回 -1

示例 1：
```
输入: 
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]
```

示例 2：
```
输入: 
["MaxQueue","pop_front","max_value"]
[[],[],[]]
输出: [null,-1,-1]
``` 

限制：
```
1 <= push_back,pop_front,max_value的总操作数 <= 10000
1 <= value <= 10^5
```

### Java
```java
class MaxQueue {

    Queue<Integer> q;
    Deque<Integer> _max;
    public MaxQueue() {
        q = new LinkedList<>();
        _max = new LinkedList<>();
    }
    
    public int max_value() {
        if(_max.isEmpty()) return -1;
        return _max.peekFirst();
    }
    
    public void push_back(int value) {
        while(!_max.isEmpty() && _max.peekLast() < value) {
            _max.pollLast();
        }
        q.offer(value);
        _max.offerLast(value);        
    }
    
    public int pop_front() {
        if(q.isEmpty()) return -1;
        if(q.peek().equals(_max.peekFirst())) {
            _max.pollFirst();
        }
        return q.poll();
    }
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * MaxQueue obj = new MaxQueue();
 * int param_1 = obj.max_value();
 * obj.push_back(value);
 * int param_3 = obj.pop_front();
 */
```

### JavaScript
```javascript
var MaxQueue = function() {
    this._data = [];
    this._max = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if(!this._max.length) return -1;
    return this._max[0];
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this._data.push(value);
    while(this._max.length && this._max[this._max.length-1] < value) {
        this._max.pop();
    }
    this._max.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(!this._data.length) return -1;
    const res = this._data.shift();
    if(this._max[0] === res) this._max.shift();
    return res;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
```