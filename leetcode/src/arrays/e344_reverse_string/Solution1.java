package arrays.e344_reverse_string;

public class Solution1 {
    void main(String[] args){
        char[] s = {'h','e','l','l','o'};
        System.out.println(new String(rerverseString(s)));
    }
    char[] rerverseString(char[] s){
        int left = 0;
        int right = s.length - 1;
        while(left < right){
            char t = s[left];
            s[left] = s[right];
            s[right] = t;
            left++;
            right--;
        }
        return s;
    }
}
