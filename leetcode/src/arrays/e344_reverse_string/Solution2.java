package arrays.e344_reverse_string;

import java.util.Stack;

public class Solution2 {
    void main(String[] args){
        char[] s = {'h','e','l','l','o'};
        System.out.println(new String(rerverseString(s)));
    }
    char[] rerverseString(char[] s){
        Stack<Character> st = new Stack<>();
        for(char c: s){
            st.push(c);
        }
        int i = 0;
        while (!st.isEmpty()) {
            s[i++] = st.pop();
        }
        return s;
    }
}
