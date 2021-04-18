## 216-组合总数III

找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

说明：
```
所有数字都是正整数。
解集不能包含重复的组合。 
```

示例 1:
```
输入: k = 3, n = 7
输出: [[1,2,4]]
```

示例 2:
```
输入: k = 3, n = 9
输出: [[1,2,6], [1,3,5], [2,3,4]]
```

### java
```java
class Solution {
    public List<List<Integer>> combinationSum3(int k, int n) {
        List<List<Integer>> ans = new ArrayList<>();
        // 本身不重复 有序 所以我们就省去了很多部分
        dfs(ans, k, n, 9, new ArrayList(), 1);
        return ans;
    }

    private void dfs(List<List<Integer>> ans, int k, int n, int len, List<Integer> path, int begin) {
        if(k == 0 && n == 0) {
            //System.out.println("添加=> " + path + " n: " + n);
            ans.add(new ArrayList(path));
            return;            
        }
        for(int i = begin; i <= len; i++) {
            if(n - i < 0) break;
            path.add(i);
            //System.out.println("递归前=> " + path + " n: " + (n-i));
            dfs(ans, k-1, n-i, len, path, i+1);
            path.remove(path.size()-1); 
            //System.out.println("递归后=> " + path + " n: " + n);
        }
    }
}
```

```
递归前=> [1] n: 7
递归前=> [1, 2] n: 5
递归前=> [1, 2, 3] n: 2
递归后=> [1, 2] n: 5
递归前=> [1, 2, 4] n: 1
递归后=> [1, 2] n: 5
递归前=> [1, 2, 5] n: 0
添加=> [1, 2, 5] n: 0
递归后=> [1, 2] n: 5
递归后=> [1] n: 7
递归前=> [1, 3] n: 4
递归前=> [1, 3, 4] n: 0
添加=> [1, 3, 4] n: 0
递归后=> [1, 3] n: 4
递归后=> [1] n: 7
递归前=> [1, 4] n: 3
递归后=> [1] n: 7
递归前=> [1, 5] n: 2
递归后=> [1] n: 7
递归前=> [1, 6] n: 1
递归后=> [1] n: 7
递归前=> [1, 7] n: 0
递归后=> [1] n: 7
递归后=> [] n: 8
递归前=> [2] n: 6
递归前=> [2, 3] n: 3
递归后=> [2] n: 6
递归前=> [2, 4] n: 2
递归后=> [2] n: 6
递归前=> [2, 5] n: 1
递归后=> [2] n: 6
递归前=> [2, 6] n: 0
递归后=> [2] n: 6
递归后=> [] n: 8
递归前=> [3] n: 5
递归前=> [3, 4] n: 1
递归后=> [3] n: 5
递归前=> [3, 5] n: 0
递归后=> [3] n: 5
递归后=> [] n: 8
递归前=> [4] n: 4
递归后=> [] n: 8
递归前=> [5] n: 3
递归后=> [] n: 8
递归前=> [6] n: 2
递归后=> [] n: 8
递归前=> [7] n: 1
递归后=> [] n: 8
递归前=> [8] n: 0
递归后=> [] n: 8
```