// function countNegative(grid){
// let negativeCount = 0
// for(let i=0;i<grid.length;i++){
//     for(let j=0;j<grid[i].length;j++){
//         if(grid[i][j]<0){
//             negativeCount =negativeCount+1
//         }
//     }
// }
// return negativeCount
// }

let grid =  [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]

function countNegative(grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    let row = rows - 1;
    let col = 0;
    let count = 0;

    while (row >= 0 && col < cols) {
        if (grid[row][col] < 0) {
            count += (cols - col); // all right-side elements are negative
            row--;                // move up
        } else {
            col++;                // move right
        }
    }

    return count;
}
console.log(countNegative(grid));
