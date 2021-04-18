## 59-螺旋矩阵II

给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

示例 1：
![image](https://assets.leetcode.com/uploads/2020/11/13/spiraln.jpg)
```
输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
示例 2：

输入：n = 1
输出：[[1]]
```

提示：
```
1 <= n <= 20
```

### java
```java
class Solution {
    public int[][] generateMatrix(int n) {        
        int ans[][] = new int[n][n];
        int col = 0, cols = n-1, row = 0, rows = n-1;
        int num = 1, target = n*n;
        while(num <= target) {
            for(int i = col; i <= cols; i++) ans[row][i] = num++;
            row++;
            for(int i = row; i <= rows; i++) ans[i][cols] = num++;
            cols--;
            for(int i = cols; i >= col; i--) ans[rows][i] = num++;
            rows--;
            for(int i = rows; i >= row; i--) ans[i][col] = num++;
            col++;
        }
        return ans;
    }
}
```