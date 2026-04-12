package arrays.e414_third_maximum_number;

class Solution {
    void main(String[] args) {
        int[] nums = { 2, 2, 3, 1 };
        System.out.println(thirdMax(nums));
    }

    int thirdMax(int[] nums) {
        Integer num1 = null;
        Integer num2 = null;
        Integer num3 = null;
        for (Integer num : nums) {
            if (num.equals(num1) || num.equals(num2) || num.equals(num3)) {
                continue;
            }
            if (num1 == null || num1 < num) {
                num3 = num2;
                num2 = num1;
                num1 = num;
            } else if (num2 == null || num2 < num) {
                num3 = num2;
                num2 = num;
            } else if (num3 == null || num3 < num) {
                num3 = num;
            }
        }
        return num3 == null ? num1 : num3;
    }
}