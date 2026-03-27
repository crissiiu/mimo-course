Title: Number of Islands (Medium)

Problem Description (English):
Given an m x n 2D grid representing a map of land and water, where:
- '1' represents land
- '0' represents water

An island is formed by connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are surrounded by water.

Your task is to return the total number of islands in the grid.

Problem Description (Tiếng Việt):
Bạn được cung cấp một ma trận 2 chiều kích thước m x n, biểu diễn bản đồ đất liền và nước, trong đó:
- '1' đại diện cho đất liền
- '0' đại diện cho nước

Một hòn đảo được hình thành khi các ô đất liền kề nhau theo chiều ngang hoặc dọc.
Có thể giả sử rằng bốn cạnh của ma trận đều được bao quanh bởi nước.

Nhiệm vụ của bạn là trả về tổng số hòn đảo có trong ma trận.

Function Signature:
int NumIslands(char[][] grid)

Input:
- grid: mảng 2 chiều gồm các ký tự '0' và '1'

Output:
- Trả về số nguyên biểu thị số lượng hòn đảo

Constraints:
- m == grid.length
- n == grid[i].length
- 1 ≤ m, n ≤ 300
- grid[i][j] ∈ { '0', '1' }
- Ma trận không rỗng

Example 1:
Input:
[
  ['1','1','1','1','0'],
  ['1','1','0','1','0'],
  ['1','1','0','0','0'],
  ['0','0','0','0','0']
]
Output:
1

Example 2:
Input:
[
  ['1','1','0','0','0'],
  ['1','1','0','0','0'],
  ['0','0','1','0','0'],
  ['0','0','0','1','1']
]
Output:
3