package arrays.e26_remove_duplicates_from_sorted_array;

public class Solution {
    void main(String[] args) {
        int[] nums = { 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 };
        System.out.println(removeDuplicate(nums));
    }

    int removeDuplicate(int[] nums) {
        int n = nums.length;
        if (n == 0 || n == 1)
            return n;
        int i = 1, j = 1;
        while (j < n) {
            if (nums[j] != nums[j - 1]) {
                nums[i++] = nums[j];
            }
            j++;
        }
        return i;
    }
}
