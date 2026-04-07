package arrays.e344_reverse_string;

public class Solution3 {
    void main(String[] args) {
        char[] s = { 'h', 'e', 'l', 'l', 'o' };
        System.out.println(new String(rerverseString(s, 0, s.length - 1)));
    }

    char[] rerverseString(char[] s, int l, int r) {
        if (l >= r)
            return s;
        char t = s[l];
        s[l] = s[r];
        s[r] = t;
        return rerverseString(s, l + 1, r - 1);
    }
}
