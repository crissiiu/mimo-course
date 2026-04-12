package hashtable.e242_valid_anagram;

public class Solution3 {

    void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram"));
        System.out.println(isAnagram("rat", "car"));
    }

    boolean isAnagram(String s, String t) {
        if (s.length() != t.length())
            return false;
        int[] unicode = new int[26];
        for (int i = 0; i < s.length(); i++) {
            unicode[s.charAt(i) - 'a']++;
        }
        for (int i = 0; i < t.length(); i++) {
            if (unicode[t.charAt(i) - 'a'] == 0) {
                return false;
            }
            unicode[t.charAt(i) - 'a']--;
        }
        return true;
    }
}