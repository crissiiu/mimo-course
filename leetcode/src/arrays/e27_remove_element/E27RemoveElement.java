package arrays.e27_remove_element;

public class E27RemoveElement {
    public static void main(String[] args) {
        int[] nums = {0,1,2,2,3,0,4,2};
        int val = 2;
        int result = removeElement(nums, val);
        System.out.println(result);

    }
    public static int removeElement(int[]nums, int val) {
        int i = 0;
        int j = nums.length - 1;
        while(i <= j) {
            if(nums[i] != val) {
                i++;
            } else {
                int temp =nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                j--;
            }
        }
        return i;
    }
}
