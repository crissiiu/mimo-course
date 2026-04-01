package sliding_window.m3_longest_substring_without_repeating_characters;

import java.util.HashSet;
import java.util.Set;

public class Solution1 {
    //O(n^3)
    public void main(String[] args) {
        String s = " ";
        System.out.println(lengthOfLongestSubstring(s));
    }

    public int lengthOfLongestSubstring(String s) {
        int max = 0;
        for (int i = 0; i < s.length(); i++) {
            for(int j = i + 1;  j <= s.length(); j++) {
                if(isUnique(s, i, j)) {
                    max = Math.max(max, j - i);
                }
            }
        }
        return max;
    }

    public boolean isUnique(String s, int start, int end) {
        Set<Character> set = new HashSet<>();
        for(int i = start; i < end; i++) {
            if(!set.add(s.charAt(i))) {
                return false;
            }
        }
        return true;
    } 
}
