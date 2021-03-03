## java lang&api cheetsheet

### Stack
```java
Stack<Integer> stack = new Stack<>();
stack.push(1);
stack.push(2);
stack.peek();
stack.pop();
stack.search(1) // 返回的是栈中距离栈顶最近的目标数与栈顶的距离 top:[1, 2, 3] 此时search(3)则返回3
```
官方建议栈尽量使用ArrayDeque;LinkedList 是一个继承AbstractSequentialList的双向链表。它也可以被当作堆栈、队列或双端队列进行操作;LinkedList 实现 List 接口，能对它进行队列操作;实现Deque接口，即能将LinkedList当作双端队列使用。
当LinkedList被当做栈来使用时，栈方法中的push(e)等效于addFirst(e);pop(e)等效于removeFirst();peek()等效于peekFirst();
```java
Deque<Integer> stack = new ArrayDeque<Integer>();
```
### queue
```java
Queue<E> queue = new LinkedList<E>();
queue.offer(1); //入队
queue.peek();
queue.poll(); //出队
// 双向队列
Deque<Integer> deque = new LinkedList<>();
deque.offer(1);
deque.offer(2);
deque.offerFirst(3); // [3, 1, 2]
deque.pollLast(); // [3, 1, 2]
```