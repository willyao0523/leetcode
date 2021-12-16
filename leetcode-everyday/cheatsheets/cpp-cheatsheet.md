## C++ cheatsheet

### vector
```cpp
vetcor<int>& nums;
nums.empty();
nums.size();
nums.push_back(1);
nums.pop_back();
sort(nums.begin(), nums.end());

can_reach_a(m, vector<bool>(n, false)); 
vector<int> chars(128, 0);
swap(nums[i], nums[j]);

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
```

### hashmap
```cpp
unordered_map<int, int> counts;

```

### string
```cpp
string s = "hello";
s[i] = 'Q';
str.compare(res) < 0;
s.substr(start, len);
to_string(node->val)
string('a', 10);

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

stack<pair<int, int>> island;
island.push({i, j});

auto [r, c] = island.top();
island.pop();
```


### queue
```cpp
queue<pair<int, int>> points;
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
ListNode* head = new ListNode(1);
head->next = new ListNode(2);
head != nullptr;
node->val;
node->left;
node->right;
```