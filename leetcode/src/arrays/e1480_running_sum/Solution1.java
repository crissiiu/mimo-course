package arrays.e1480_running_sum;

import java.util.Arrays;

class Solution1 {
    void main(String[] args){
        int[] nums = {1,2,3,4};
        System.out.println(Arrays.toString(runningSum(nums)));
    }
    int[] runningSum(int[] nums){
        int lenght = nums.length;
        for(int i = 1; i< lenght; i++){
            nums[i] += nums[i-1];
        }
        return nums;
    }
}
