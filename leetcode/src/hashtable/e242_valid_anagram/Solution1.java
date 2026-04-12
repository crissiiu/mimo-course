package hashtable.e242_valid_anagram;

import java.util.Arrays;

public class Solution1 {
    void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram"));
        System.out.println(isAnagram("rat", "car"));
    }

    boolean isAnagram(String s, String t) {
        if (s.length() != t.length())
            return false;
        char[] str1Split = s.toCharArray();
        char[] str2Split = t.toCharArray();
        Arrays.sort(str1Split);
        Arrays.sort(str2Split);
        for (int i = 0; i < str2Split.length; i++) {
            if (str1Split[i] != str2Split[i]) {
                return false;
            }
        }
        return true;
    }
}