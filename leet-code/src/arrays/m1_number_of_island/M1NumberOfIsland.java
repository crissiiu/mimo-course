package arrays.m1_number_of_island;

class M1NumberOfIsland {

    public static void main(String[] args) {
        char[][] input = new char[][]{
            {'1', '1', '0', '0', '0'},
            {'1', '1', '0', '0', '0'},
            {'0', '0', '1', '0', '0'},
            {'0', '0', '0', '1', '1'}
        };
        int output = NumIslands(input);
        System.out.println(output);
    }

    static int NumIslands(char[][] grid) {
        int count = 0;
        int rows = grid.length;
        int cols = grid[0].length;

        boolean[][] copyGrid = new boolean[rows][cols];
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == '1' && !copyGrid[i][j]) {
                    count++;
                    dfs(grid, copyGrid, i, j);
                }
            }
        }
        return count;
    }

    static void dfs(char[][] grid, boolean[][] copyGrid, int r, int c) {
        int rows = grid.length;
        int cols = grid[0].length;
        if (r < 0 || c < 0 || r >= rows || c >= cols) {
            return;
        }
        if (grid[r][c] == '0' || copyGrid[r][c]) {
            return;
        }
        copyGrid[r][c] = true;
        dfs(grid, copyGrid, r + 1, c);
        dfs(grid, copyGrid, r - 1, c);
        dfs(grid, copyGrid, r, c + 1);
        dfs(grid, copyGrid, r, c - 1);
    }
}
