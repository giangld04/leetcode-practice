// Test: 2768. Number Of Black Blocks
// 86 test cases from LeetCodeDataset
// Run: node test.js

const { countBlackBlocks } = require("./solution");

let passed = 0, failed = 0;
function test(actual, expected, label) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    passed++;
  } else {
    console.log(`  ✗ ${label}`);
    console.log(`    Expected: ${e}`);
    console.log(`    Actual:   ${a}`);
    failed++;
  }
}

console.log("\n2768. Number Of Black Blocks\n");

test(countBlackBlocks(5, 5, [[0,0],[0,1],[1,0],[1,1],[2,2]]), [9, 3, 3, 0, 1], 'Test 1');
test(countBlackBlocks(5, 5, [[2,2],[3,3],[1,1]]), [6, 8, 2, 0, 0], 'Test 2');
test(countBlackBlocks(3, 3, [[0,0],[1,1],[0,2]]), [0, 2, 2, 0, 0], 'Test 3');
test(countBlackBlocks(5, 5, [[1,1],[1,2],[2,1],[2,2]]), [7, 4, 4, 0, 1], 'Test 4');
test(countBlackBlocks(10, 10, [[5,5],[4,4],[6,6]]), [71, 8, 2, 0, 0], 'Test 5');
test(countBlackBlocks(3, 3, [[0,0]]), [3, 1, 0, 0, 0], 'Test 6');
test(countBlackBlocks(4, 4, [[0,0],[1,1],[2,2],[3,3]]), [2, 4, 3, 0, 0], 'Test 7');
test(countBlackBlocks(10, 10, [[0,0],[0,1],[1,0],[1,1],[2,2],[3,3]]), [71, 5, 4, 0, 1], 'Test 8');
test(countBlackBlocks(10, 10, [[3,3],[4,4],[5,5]]), [71, 8, 2, 0, 0], 'Test 9');
test(countBlackBlocks(4, 5, [[0,0],[0,1],[1,0],[1,1]]), [8, 1, 2, 0, 1], 'Test 10');
test(countBlackBlocks(5, 5, [[0,0],[0,1],[1,0],[1,1]]), [12, 1, 2, 0, 1], 'Test 11');
test(countBlackBlocks(4, 5, [[0,0],[1,1],[2,2],[3,3]]), [4, 5, 3, 0, 0], 'Test 12');
test(countBlackBlocks(10, 10, [[0,0],[9,9],[4,4]]), [75, 6, 0, 0, 0], 'Test 13');
test(countBlackBlocks(4, 4, [[0,1],[1,0],[1,2],[2,1]]), [1, 4, 4, 0, 0], 'Test 14');
test(countBlackBlocks(5, 5, [[0,0],[1,1],[2,2],[3,3]]), [6, 7, 3, 0, 0], 'Test 15');
test(countBlackBlocks(2, 2, []), [1, 0, 0, 0, 0], 'Test 16');
test(countBlackBlocks(10, 10, [[0,0],[1,1],[2,2],[3,3],[4,4]]), [68, 9, 4, 0, 0], 'Test 17');
test(countBlackBlocks(7, 8, [[0,0],[0,1],[1,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6]]), [25, 9, 7, 0, 1], 'Test 18');
test(countBlackBlocks(100, 100, [[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15],[16,16],[17,17],[18,18],[19,19]]), [9743, 39, 19, 0, 0], 'Test 19');
test(countBlackBlocks(8, 7, [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[0,0],[7,6]]), [25, 10, 7, 0, 0], 'Test 20');
test(countBlackBlocks(20, 10, [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2],[3,0],[3,1],[3,2],[4,0],[4,1],[4,2],[5,0],[5,1],[5,2],[6,0],[6,1],[6,2]]), [150, 1, 8, 0, 12], 'Test 21');
test(countBlackBlocks(10, 5, [[0,0],[0,1],[0,2],[0,3],[0,4],[1,0],[1,4],[2,0],[2,4],[3,0],[3,4],[4,0],[4,4],[5,0],[5,4],[6,0],[6,4],[7,0],[7,4],[8,0],[8,4],[9,0],[9,4]]), [16, 0, 18, 2, 0], 'Test 22');
test(countBlackBlocks(10, 9, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0],[0,2],[2,4],[4,6],[6,8],[8,1],[1,3],[3,5],[5,7],[7,0],[0,4],[4,8],[8,2],[2,6],[6,0],[1,5],[5,9],[9,3],[3,7],[7,1],[1,6],[6,2],[2,8],[8,4],[4,9],[9,5],[5,0],[0,6],[6,4],[4,2],[2,9],[9,6],[6,1],[1,8],[8,5],[5,3],[3,9],[9,7],[7,2],[2,0],[0,8],[8,6],[6,3],[3,1],[1,9],[9,8],[8,7],[7,6],[6,5],[5,4],[4,3],[3,2],[2,1],[1,0],[0,7],[7,5],[5,1],[1,7],[7,0],[0,9],[9,1],[1,4],[4,0],[0,5],[5,2],[2,6],[6,3],[3,7],[7,4],[4,8],[8,5],[5,9],[9,6],[6,0],[0,4],[4,2],[2,8],[8,1],[1,5],[5,3],[3,9],[9,7]]), Error: list index out of range, 'Test 23');
test(countBlackBlocks(9, 9, [[i,j] for i in range[9] for j in range[9] if [i+j] %, = 0]), Error: Solution.countBlackBlocks[] missing 1 required positional argument: 'coordinates', 'Test 24');
test(countBlackBlocks(100, 100, [[i,i] for i in range[50]]), Error: Solution.countBlackBlocks[] missing 1 required positional argument: 'coordinates', 'Test 25');
test(countBlackBlocks(60, 70, [[i,i] for i in range[59]]), Error: Solution.countBlackBlocks[] missing 1 required positional argument: 'coordinates', 'Test 26');
test(countBlackBlocks(50, 50, [[25,25],[24,24],[26,26],[24,25],[25,24],[25,26],[26,25]]), [2387, 6, 4, 2, 2], 'Test 27');
test(countBlackBlocks(50, 50, [[i,i] for i in range[49]]), Error: Solution.countBlackBlocks[] missing 1 required positional argument: 'coordinates', 'Test 28');
test(countBlackBlocks(9, 9, [[0,4],[1,3],[1,5],[2,2],[2,4],[2,6],[3,1],[3,3],[3,5],[3,7],[4,0],[4,2],[4,4],[4,6],[4,8],[5,1],[5,3],[5,5],[5,7],[6,2],[6,4],[6,6],[7,3],[7,5],[8,4]]), [12, 12, 40, 0, 0], 'Test 29');
test(countBlackBlocks(8, 8, [[0,0],[0,7],[7,0],[7,7],[1,1],[1,6],[6,1],[6,6],[2,2],[2,5],[5,2],[5,5],[3,3],[3,4],[4,3],[4,4]]), [16, 16, 16, 0, 1], 'Test 30');
test(countBlackBlocks(7, 8, [[0,1],[1,0],[2,1],[3,0],[4,1],[5,0],[6,1]]), [30, 6, 6, 0, 0], 'Test 31');
test(countBlackBlocks(6, 6, [[0,0],[0,1],[1,0],[1,1],[2,2],[3,3],[4,4],[5,5]]), [12, 6, 6, 0, 1], 'Test 32');
test(countBlackBlocks(10, 10, [[0,0],[0,1],[1,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]]), [56, 14, 10, 0, 1], 'Test 33');
test(countBlackBlocks(20, 20, [[i,j] for i in range[20] for j in range[20] if [i * j] %, = 0]), Error: Solution.countBlackBlocks[] missing 1 required positional argument: 'coordinates', 'Test 34');
test(countBlackBlocks(15, 10, [[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14]]), [100, 17, 9, 0, 0], 'Test 35');
test(countBlackBlocks(7, 5, [[i,j] for i in range[3] for j in range[5]] + [[i,j] for i in range[4,7] for j in range[5]]), Error: Solution.countBlackBlocks[] missing 1 required positional argument: 'coordinates', 'Test 36');
test(countBlackBlocks(7, 7, [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2],[3,3],[3,4],[3,5],[4,3],[4,4],[4,5],[5,3],[5,4],[5,5],[6,6]]), [12, 2, 14, 0, 8], 'Test 37');
test(countBlackBlocks(10, 10, [[0,0],[0,1],[0,2],[0,3],[1,0],[1,1],[1,2],[1,3],[2,0],[2,1],[2,2],[2,3],[3,0],[3,1],[3,2],[3,3]]), [65, 1, 6, 0, 9], 'Test 38');
test(countBlackBlocks(100, 100, [[0,0],[0,1],[0,2],[0,3],[1,0],[1,1],[1,2],[1,3],[2,0],[2,1],[2,2],[2,3],[3,0],[3,1],[3,2],[3,3],[50,50],[50,51],[50,52],[50,53],[51,50],[51,51],[51,52],[51,53],[52,50],[52,51],[52,52],[52,53],[53,50],[53,51],[53,52],[53,53]]), [9760, 5, 18, 0, 18], 'Test 39');
test(countBlackBlocks(15, 15, [[i,j] for i in range[15] for j in range[15] if [i + j] %, = 0]), Error: Solution.countBlackBlocks[] missing 1 required positional argument: 'coordinates', 'Test 40');
test(countBlackBlocks(8, 8, [[0,1],[0,2],[1,0],[1,3],[2,1],[2,2],[3,0],[3,3],[4,1],[4,2],[5,0],[5,3],[6,1],[6,2],[7,0],[7,3]]), [21, 7, 21, 0, 0], 'Test 41');
test(countBlackBlocks(9, 9, [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2],[4,4],[5,5],[6,6],[7,7],[8,8]]), [42, 10, 8, 0, 4], 'Test 42');
test(countBlackBlocks(10, 20, [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2],[3,0],[3,1],[3,2],[4,0],[4,1],[4,2]]), [156, 1, 6, 0, 8], 'Test 43');
test(countBlackBlocks(10, 10, [[i,j] for i in range[10] for j in range[10] if [i * j] %, = 0]), Error: Solution.countBlackBlocks[] missing 1 required positional argument: 'coordinates', 'Test 44');
test(countBlackBlocks(7, 6, [[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,0],[0,5],[6,5],[5,0],[4,1],[1,4],[2,3],[3,2]]), [7, 8, 14, 0, 1], 'Test 45');
test(countBlackBlocks(9, 9, [[4,4],[3,3],[3,5],[5,3],[5,5],[2,2],[2,6],[6,2],[6,6],[1,1],[1,7],[7,1],[7,7],[0,0],[0,8],[8,0],[8,8]]), [24, 24, 16, 0, 0], 'Test 46');
test(countBlackBlocks(10, 10, [[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]]), [56, 16, 9, 0, 0], 'Test 47');
test(countBlackBlocks(10, 5, [[0,0],[0,1],[0,2],[0,3],[0,4],[1,0],[1,1],[1,2],[1,3],[1,4]]), [28, 0, 4, 0, 4], 'Test 48');
test(countBlackBlocks(6, 6, [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2],[3,3],[3,4],[4,3],[4,4],[5,5]]), [8, 2, 10, 0, 5], 'Test 49');
test(countBlackBlocks(8, 8, [[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7]]), [30, 12, 7, 0, 0], 'Test 50');
test(countBlackBlocks(9, 9, [[0,0],[0,8],[8,0],[8,8],[4,4],[3,3],[5,5],[2,2],[6,6]]), [44, 16, 4, 0, 0], 'Test 51');
test(countBlackBlocks(9, 9, [[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[0,1],[1,0],[2,3],[3,2],[4,5],[5,4],[6,7],[7,6],[8,7],[7,8]]), [36, 6, 15, 2, 5], 'Test 52');
test(countBlackBlocks(100, 100, [[10,10],[10,11],[11,10],[11,11],[20,20],[21,20],[20,21],[21,21]]), [9783, 8, 8, 0, 2], 'Test 53');
test(countBlackBlocks(9, 7, [[0,3],[1,2],[2,1],[3,0],[3,6],[4,5],[5,4],[6,3],[7,2],[8,1]]), [24, 16, 8, 0, 0], 'Test 54');
test(countBlackBlocks(12, 12, [[i,j] for i in range[12] for j in range[12] if [i+j] %, = 0]), Error: Solution.countBlackBlocks[] missing 1 required positional argument: 'coordinates', 'Test 55');
test(countBlackBlocks(6, 6, [[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2],[3,3],[3,4],[4,3],[4,4]]), [8, 3, 9, 1, 4], 'Test 56');
test(countBlackBlocks(6, 7, [[0,0],[0,1],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2],[2,3],[3,0],[3,1],[3,2],[3,3],[3,4],[4,0],[4,1],[4,2],[4,3],[4,4],[5,0],[5,1],[5,2],[5,3],[5,4]]), [8, 3, 2, 3, 14], 'Test 57');
test(countBlackBlocks(7, 8, [[0,0],[0,7],[6,0],[6,7],[3,3],[3,4],[4,3],[4,4],[2,2],[2,5],[5,2],[5,5]]), [17, 16, 8, 0, 1], 'Test 58');
test(countBlackBlocks(8, 8, [[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3],[4,4],[4,5],[4,6],[5,4],[5,5],[5,6],[6,5],[6,6]]), [19, 7, 15, 1, 7], 'Test 59');
test(countBlackBlocks(8, 7, [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2],[3,3],[3,4],[4,3],[4,4],[5,5],[6,6]]), [21, 5, 11, 0, 5], 'Test 60');
test(countBlackBlocks(10, 10, [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]), [72, 1, 4, 0, 4], 'Test 61');
test(countBlackBlocks(5, 6, [[0,0],[0,5],[1,1],[1,4],[2,2],[2,3],[3,3],[3,4],[4,1],[4,5]]), [2, 9, 7, 2, 0], 'Test 62');
test(countBlackBlocks(10000, 10000, [[i,i] for i in range[100]]), Error: Solution.countBlackBlocks[] missing 1 required positional argument: 'coordinates', 'Test 63');
test(countBlackBlocks(7, 6, [[0,0],[0,1],[1,0],[1,1],[1,2],[2,1],[2,2],[3,3],[4,4],[5,5]]), [14, 7, 5, 2, 2], 'Test 64');
test(countBlackBlocks(8, 8, [[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[0,7],[7,0]]), [28, 14, 7, 0, 0], 'Test 65');
test(countBlackBlocks(6, 10, [[i,j] for i in range[6] for j in range[10] if i * j %, = 1]), Error: Solution.countBlackBlocks[] missing 1 required positional argument: 'coordinates', 'Test 66');
test(countBlackBlocks(6, 6, [[0,0],[0,5],[5,0],[5,5],[2,2],[3,3],[1,1],[4,4]]), [10, 10, 5, 0, 0], 'Test 67');
test(countBlackBlocks(8, 6, [[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3],[4,4],[4,5],[5,4],[5,5]]), [14, 4, 12, 0, 5], 'Test 68');
test(countBlackBlocks(15, 20, [[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]]), [238, 19, 9, 0, 0], 'Test 69');
test(countBlackBlocks(5, 10, [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9]]), [27, 0, 9, 0, 0], 'Test 70');
test(countBlackBlocks(12, 11, [[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]]), [81, 19, 10, 0, 0], 'Test 71');
test(countBlackBlocks(10, 10, [[0,0],[0,1],[1,0],[1,1],[2,2],[2,3],[3,2],[3,3]]), [69, 3, 7, 0, 2], 'Test 72');
test(countBlackBlocks(5, 4, [[0,1],[1,2],[2,0],[3,1],[3,2],[4,0],[4,1]]), [0, 7, 3, 2, 0], 'Test 73');
test(countBlackBlocks(15, 15, [[i,i] for i in range[15]]), Error: Solution.countBlackBlocks[] missing 1 required positional argument: 'coordinates', 'Test 74');
test(countBlackBlocks(7, 8, [[1,2],[2,1],[3,4],[4,3],[5,6],[6,5]]), [23, 16, 3, 0, 0], 'Test 75');
test(countBlackBlocks(12, 10, [[0,0],[1,0],[2,0],[0,1],[1,1],[2,1],[0,2],[1,2],[2,2],[5,5],[6,5],[7,5],[5,6],[6,6],[7,6]]), [78, 5, 10, 0, 6], 'Test 76');
test(countBlackBlocks(6, 5, [[0,0],[0,1],[0,2],[1,1],[1,2],[2,0],[2,1],[2,2],[3,0],[3,2],[4,0],[4,1],[4,2],[5,0],[5,1]]), [5, 1, 4, 7, 3], 'Test 77');
test(countBlackBlocks(7, 8, [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2],[3,3],[3,4],[3,5],[4,4],[4,5],[4,6],[5,5],[5,6],[5,7]]), [18, 5, 9, 4, 6], 'Test 78');
test(countBlackBlocks(6, 7, [[0,0],[0,1],[1,0],[1,1],[2,2],[2,3],[3,2],[3,3],[4,4],[4,5],[5,4],[5,5]]), [13, 3, 11, 0, 3], 'Test 79');
test(countBlackBlocks(9, 9, [[i,j] for i in range[9] for j in range[9] if [, = j or i +, = 8]]), Error: Solution.countBlackBlocks[] missing 1 required positional argument: 'coordinates', 'Test 80');
test(countBlackBlocks(7, 8, [[0,1],[0,3],[1,2],[1,4],[2,1],[2,3],[2,5],[3,2],[3,4],[3,6],[4,1],[4,3],[4,5],[5,2],[5,4],[6,3]]), [7, 12, 23, 0, 0], 'Test 81');
test(countBlackBlocks(10, 10, [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2],[3,3],[3,4],[4,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]]), [52, 10, 14, 0, 5], 'Test 82');
test(countBlackBlocks(5, 6, [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2],[3,3],[3,4],[4,3],[4,4]]), [6, 1, 8, 0, 5], 'Test 83');
test(countBlackBlocks(6, 7, [[0,0],[0,6],[1,1],[1,5],[2,2],[2,4],[3,3],[4,2],[4,4],[5,1],[5,5]]), [6, 14, 10, 0, 0], 'Test 84');
test(countBlackBlocks(8, 8, [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2],[3,3],[4,4]]), [34, 5, 6, 0, 4], 'Test 85');
test(countBlackBlocks(9, 9, [[0,1],[0,2],[1,0],[1,3],[2,1],[2,2],[3,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8]]), [37, 13, 12, 2, 0], 'Test 86');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

