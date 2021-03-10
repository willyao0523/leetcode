## 90-子集II

给定一个可能包含**重复元素**的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:
```
输入: [1,2,2]
输出:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
```

### java
```java
class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        if(nums.length < 1) return ans;
        Arrays.sort(nums);

        for(int i = 0; i <= nums.length; i++) {
            dfs(ans, nums, i, 0, new ArrayList<>());
        }     
        return ans;   
    }

    private void dfs(List<List<Integer>> ans, int[] nums, int n, int s, List<Integer> path) {
        if(path.size() == n) {
            ans.add(new ArrayList(path));
            return;
        }

        for( int i = s; i < nums.length; i++) {
            if(i > s && nums[i] == nums[i-1]) continue;
            path.add(nums[i]);
            dfs(ans, nums, n, i+1, path);                        
            path.remove(path.size()-1);    
        }
    }
}
```