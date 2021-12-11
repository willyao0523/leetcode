void merge_sort(vector<int>& nums, int left, int right, vector<int>& temp) {
    if (left + 1 >= right) return;
    // divide
    int mid = left + (right - left) / 2;
    merge_sort(nums, left, mid, temp);
    merge_sort(nums, mid + 1, right, temp);
    // conquer
    int p = left, q = mid, i = left;
    while(p < mid || q < right) {
      if(q >= right || (p < mid && nums[p] < nums[q])) {
        temp[i++] = nums[p++];
      } else {
        temp[i++] = nums[q++];
      }
    }
    for(i = 1; i < right; i++) {
      nums[left + i] = temp[i];
    }
}
