package sliding_window.m3_longest_substring_without_repeating_characters;

import java.util.HashSet;
import java.util.Set;

class Solution2 {
    void main(String[] args) {
        String s = "abcabcbb";
        // String s = "abcabcbb";
        System.out.println(lengthOfLongestSubstring(s));
    }

    public int lengthOfLongestSubstring(String s) {
        int max = 0;
        int length = s.length();
        for (int i = 0; i < length; i++) {
            Set<Character> set = new HashSet<>();
            for (int j = i; j < length; j++) {
                char c = s.charAt(j);
                if (set.contains(c)) {
                    break;
                }
                set.add(c);
                max = Math.max(max, j - i + 1);
            }
        }
        return max;
    }
}
