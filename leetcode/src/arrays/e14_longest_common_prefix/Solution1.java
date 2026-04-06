package arrays.e14_longest_common_prefix;

class Solution1 {
    void main(String[] args){
        // String[] strs = {"flower","flow","flight"};
        String[] strs = {"dog","racecar","car"};
        System.out.println(longestCommonPrefix(strs));
    }

    /*
    Time Limit Exceeded
    Last Executed Input
    */
    private String longestCommonPrefix(String[] strs){
        if(strs.length == 0)
            return "";
        String prefix = strs[0];
        int length = strs.length;
        for(int i = 1; i < length; i++){
            while (!strs[i].startsWith(prefix)) {
                prefix = prefix.substring(0, length - 1);
                if(prefix.isEmpty())
                    return "";
            }
        }
        return prefix;
    }
    
}