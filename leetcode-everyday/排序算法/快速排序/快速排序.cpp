// 左闭右开
void quick_sort(vector<int>& nums, int left, int right) {
    if (left + 1 >= right) return;
    int first = 1, last = right - 1, key = nums[left];
    while(first < last) {
      while(first < last && nums[last] >= key) last--;
      nums[first] = nums[last];
      while(first < last && nums[first] <= key) first++;
      nums[last] = nums[first];      
    }
    nums[first] = key;
    quick_sort(nums, left, first);
    quick_sort(nums, first + 1, right);
}
