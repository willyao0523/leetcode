void selection_sort(vector<int>& nums) {
    int mid;
    for (int i = 0; i < nums.size(); i++) {
        mid = i;
        for (int j = i + 1; j < nums.size(); j++) {
            if (nums[j] < nums[mid]) {
                mid = j;
            }
        }
        swap(nums[i], nums[mid]);
    }
}