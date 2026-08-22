class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (!grid || grid.length === 0) return 0;
        let island = 0;
        const rowLen = grid.length;
        const colLen = grid[0].length;

        function dfs(row, col) {
            grid[row][col] = '0';
            const direction = [[-1,0], [1,0], [0,-1], [0,1]];

            for (let dir of direction) {
                const newRow = row + dir[0];
                const newCol = col + dir[1];
                if (
                    newRow >= 0 && newRow < rowLen &&
                    newCol >= 0 && newCol < colLen &&
                    grid[newRow][newCol] === '1' //land
                ) {
                    dfs(newRow, newCol);
                }
            }
        }

        for (let r = 0; r < rowLen; r++) {
            for (let c = 0; c < colLen; c++) {
                if (grid[r][c] === '1') {
                    dfs(r, c);
                    island++;
                }
            }
        }

        return island;
    }
}
