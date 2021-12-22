## C++ cheatsheet

### vector
```cpp
vetcor<int>& nums;
nums.empty();
nums.size();
nums.push_back(1);
nums.pop_back();
sort(nums.begin(), nums.end());

auto it = find(v.begin(), v.end(), headB);
if(it != v.end()) {
  return headB;
}

nth_element(nums.begin(), nums.begin()+nums.size()/2, nums.end());

count(nums.begin()+l, nums.begin()+r+1, ml)

can_reach_a(m, vector<bool>(n, false)); 
vector<int> chars(128, 0);
swap(nums[i], nums[j]);

reverse(s.begin() + index, s.begin() + i);

vector<vector<int>> buckets(max_count + 1);
for(const auto & p : counts) {
  buckets[p.second].push_back(p.first);
}

sort(intervals.begin(), intervals.end(), [](vector<int>& a, vector<int>& b) {
  return a[1] < b[1];
});

// 处理char的情况
int map[26];
for(int i = 0; i < m; i++) {
  map[s[i] - 'a'] = i;
}

accumulate(dp.begin(), dp.end(), 0);

// vector<string> wordlist
for(const string& word: wordlist)

// 从dp中找到nums[i]从小到大排序该放入的位置，比如[2, 5]中我们放入4结果是1这个位置，*itr即把5替换掉
auto itr = lower_bound(dp.begin(), dp.end(), nums[i]);                
*itr = nums[i];
```

### map
```cpp
unordered_map<int, int> counts;

```



### hashtable
```cpp
unordered_set<ListNode*> seen;
seen.count(head)
seen.insert(head);
```

### string
```cpp
string s = "hello";
s[i] = 'Q';
str.compare(res) < 0;
s.substr(start, len);
to_string(node->val)
string('a', 10);

reverse(s.begin() + index, s.begin() + i);

s.find(str);
s.replace(start, len, str);
s.erase(start, len);
s.insert(start, str);
s.clear();
s.size();
s.empty();
```

### stack
```cpp
stack<int> s;
s.empty();
s.size();
s.top();
s.pop();
s.push(1);

int t = s.top();

stack<pair<int, int>> island;
island.push({i, j});

auto [r, c] = island.top();
island.pop();
```


### queue
```cpp
queue<pair<int, int>> points;

priority_queue<int, vector<int>, greater<int>> q;
priority_queue<int> q(nums.begin(), nums.end());
points.empty();
points.size();
points.push(make_pair(1, 2));
points.push({x, y});
points.pop();
points.front();
auto [r, c] = points.front();
```

### listnode
```cpp
ListNode dummy(0);
ListNode* tail = &dummy;


ListNode* head = new ListNode(1);
head->next = new ListNode(2);
head != nullptr;
node->val;
node->left;
node->right;

auto it = find(v.begin(), v.end(), headB);
if(it != v.end()) {
  return headB;
}
```

### 数学方法
```cpp
srand(time(nullptr));
const int index = rand()%n;

int l = INT_MAX;
*max_element(f.begin(), f.end());

```