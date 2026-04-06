package arrays.e14_longest_common_prefix;

class Solution2 {
    void main(String[] args) {
        String[] strs = {"flower","flow","flight"};
        // String[] strs = {"dog","racecar","car"};
        System.out.println(longestCommonPrefix(strs));
    }

    String longestCommonPrefix(String[] strs) {
        int length = strs.length;
        if(length == 0) return "";
        for(int i = 0; i<strs[0].length(); i++){
            char c = strs[0].charAt(i);
            for(int j = 1; j < length; j++){
                if(strs[j].length() == i || strs[j].charAt(i) != c)
                    return strs[0].substring(0, i);
            }
        } 
        return strs[0];
    }
}
