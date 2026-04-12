package hashtable.e242_valid_anagram;

import java.util.HashMap;

public class Solution2 {
    void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram"));
        System.out.println(isAnagram("rat", "car"));
    }

    boolean isAnagram(String s, String t) {
        if (s.length() != t.length())
            return false;
        HashMap<Character, Integer> maps = new HashMap<Character, Integer>();
        for (int i = 0; i < s.length(); i++) {
            char charS = s.charAt(i);
            char charT = t.charAt(i);
            maps.put(charS, maps.getOrDefault(charS, 0) + 1);
            maps.put(charT, maps.getOrDefault(charT, 0) - 1);
        }

        for (var map : maps.values()) {
            if (map != 0) {
                return false;
            }
        }

        return true;
    }
}