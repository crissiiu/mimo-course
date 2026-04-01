package dynamic_programming.m1143_longest_common_subsequence;

public class M1143LongestCommonSubsequence {
    public static void main(String[] args) {
        String text1 = "abcde";
        String text2 = "ace";
        System.out.println(longestCommonSubsequence(text1, text2));
    }
    public static int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length();
        int n = text2.length();
        int[][]dp = new int[m+1][n+1];
        for(int i = m; i > 0; i--) {
            for(int j = n; j > 0; j--) {
                if(text1.charAt(i-1) == text2.charAt(j-1)) {
                    dp[i-1][j-1] = 1 + dp[i][j];
                }else {
                    dp[i-1][j-1] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        return dp[0][0];
    }
}
