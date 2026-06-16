// Test: 807. Max Increase To Keep City Skyline
// 69 test cases from LeetCodeDataset
// Run: node test.js

const { maxIncreaseKeepingSkyline } = require("./solution");

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

console.log("\n807. Max Increase To Keep City Skyline\n");

test(maxIncreaseKeepingSkyline([[1,1,1],[1,1,1],[1,1,1]]), 0, 'Test 1');
test(maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]), 35, 'Test 2');
test(maxIncreaseKeepingSkyline([[10,0,0,0],[0,10,0,0],[0,0,10,0],[0,0,0,10]]), 120, 'Test 3');
test(maxIncreaseKeepingSkyline([[5,3,3,2],[4,4,4,4],[3,4,5,4],[2,3,4,5]]), 14, 'Test 4');
test(maxIncreaseKeepingSkyline([[5,5,5],[5,5,5],[5,5,5]]), 0, 'Test 5');
test(maxIncreaseKeepingSkyline([[5,3,7,8],[4,4,6,6],[1,2,3,4],[8,7,5,3]]), 24, 'Test 6');
test(maxIncreaseKeepingSkyline([[1,2],[3,4]]), 1, 'Test 7');
test(maxIncreaseKeepingSkyline([[1,2,3],[4,5,6],[7,8,9]]), 6, 'Test 8');
test(maxIncreaseKeepingSkyline([[50,0,0],[0,0,0],[0,0,50]]), 100, 'Test 9');
test(maxIncreaseKeepingSkyline([[0,0,0],[0,0,0],[0,0,0]]), 0, 'Test 10');
test(maxIncreaseKeepingSkyline([[50,50],[50,50]]), 0, 'Test 11');
test(maxIncreaseKeepingSkyline([[1,0,1],[0,1,0],[1,0,1]]), 4, 'Test 12');
test(maxIncreaseKeepingSkyline([[1,0,1,0,1,0],[0,1,0,1,0,1],[1,0,1,0,1,0],[0,1,0,1,0,1],[1,0,1,0,1,0],[0,1,0,1,0,1]]), 18, 'Test 13');
test(maxIncreaseKeepingSkyline([[1,2,3,4,5,6],[6,5,4,3,2,1],[1,6,2,5,3,4],[4,3,5,2,6,1],[2,4,6,1,5,3],[3,1,4,6,1,2]]), 94, 'Test 14');
test(maxIncreaseKeepingSkyline([[9,9,9,9,9],[9,0,0,0,9],[9,0,1,0,9],[9,0,0,0,9],[9,9,9,9,9]]), 80, 'Test 15');
test(maxIncreaseKeepingSkyline([[10, 20, 30], [30, 20, 10], [10, 30, 20], [20, 10, 30]]), 120, 'Test 16');
test(maxIncreaseKeepingSkyline([[1,2,3,4,5,6],[2,3,4,5,6,7],[3,4,5,6,7,8],[4,5,6,7,8,9],[5,6,7,8,9,10],[6,7,8,9,10,11]]), 55, 'Test 17');
test(maxIncreaseKeepingSkyline([[1,2,3,4,5,6],[6,5,4,3,2,1],[2,3,4,5,6,1],[1,6,5,4,3,2],[3,2,1,6,5,4],[4,5,6,1,2,3]]), 90, 'Test 18');
test(maxIncreaseKeepingSkyline([[2,0,8,6,8],[5,9,3,6,4],[6,4,1,3,9],[7,8,9,1,6],[3,5,2,4,8]]), 67, 'Test 19');
test(maxIncreaseKeepingSkyline([[2,3,4,5,1],[1,2,3,4,5],[5,1,2,3,4],[4,5,1,2,3],[3,4,5,1,2]]), 50, 'Test 20');
test(maxIncreaseKeepingSkyline([[8, 2, 3, 4, 5], [4, 5, 6, 7, 8], [5, 6, 7, 8, 9], [6, 7, 8, 9, 10], [7, 8, 9, 10, 11]]), 42, 'Test 21');
test(maxIncreaseKeepingSkyline([[10,5,2,0,4],[8,3,10,10,10],[9,5,3,10,6],[2,6,6,9,4],[3,2,3,4,2]]), 64, 'Test 22');
test(maxIncreaseKeepingSkyline([[10,15,7,12,8],[3,18,6,9,5],[14,1,17,11,10],[13,16,4,2,19],[1,20,16,2,0]]), 151, 'Test 23');
test(maxIncreaseKeepingSkyline([[10,10,10,10],[10,0,0,10],[10,0,0,10],[10,10,10,10]]), 40, 'Test 24');
test(maxIncreaseKeepingSkyline([[1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 1]]), 2, 'Test 25');
test(maxIncreaseKeepingSkyline([[9,6,3,8,7,2],[5,4,1,10,6,1],[3,9,3,2,7,2],[8,1,9,1,1,1],[2,3,1,1,1,1],[2,2,2,2,2,2]]), 80, 'Test 26');
test(maxIncreaseKeepingSkyline([[20,10,30,50,40],[30,20,40,60,50],[10,30,50,70,60],[40,50,70,90,80],[50,60,80,100,90]]), 330, 'Test 27');
test(maxIncreaseKeepingSkyline([[10,15,20,25,30,35],[35,30,25,20,15,10],[10,35,15,30,20,25],[25,20,30,15,35,10],[30,10,20,35,15,25],[15,25,35,10,20,30]]), 450, 'Test 28');
test(maxIncreaseKeepingSkyline([[3,8,8,8,3],[8,4,4,4,8],[8,4,4,4,8],[8,4,4,4,8],[3,8,8,8,3]]), 56, 'Test 29');
test(maxIncreaseKeepingSkyline([[1,2,3,4,5,6],[6,5,4,3,2,1],[1,2,3,4,5,6],[6,5,4,3,2,1],[1,2,3,4,5,6],[6,5,4,3,2,1]]), 54, 'Test 30');
test(maxIncreaseKeepingSkyline([[5,1,9,1,5],[1,1,1,1,1],[9,1,9,1,9],[1,1,1,1,1],[5,1,9,1,5]]), 16, 'Test 31');
test(maxIncreaseKeepingSkyline([[2,8,4,6,2],[6,3,1,7,3],[7,1,4,2,8],[2,8,3,7,4],[1,6,2,5,9]]), 58, 'Test 32');
test(maxIncreaseKeepingSkyline([[40,10,50,20,30],[10,20,30,40,50],[50,30,20,10,40],[20,40,10,30,50],[30,50,40,20,10]]), 450, 'Test 33');
test(maxIncreaseKeepingSkyline([[5,5,5,5,5,5,5],[5,0,0,0,0,0,5],[5,0,5,5,5,0,5],[5,0,5,0,5,0,5],[5,0,5,5,5,0,5],[5,0,0,0,0,0,5],[5,5,5,5,5,5,5]]), 85, 'Test 34');
test(maxIncreaseKeepingSkyline([[2,0,0,2,2],[0,1,1,0,0],[0,1,1,0,0],[2,0,0,2,2],[2,2,2,2,2]]), 14, 'Test 35');
test(maxIncreaseKeepingSkyline([[5,0,10,15,20],[15,20,5,0,10],[0,10,15,20,5],[20,5,0,10,15],[10,15,20,5,0]]), 250, 'Test 36');
test(maxIncreaseKeepingSkyline([[1,0,0,0,0,0,1],[0,2,0,0,0,2,0],[0,0,3,0,3,0,0],[0,0,0,4,0,0,0],[0,0,3,0,3,0,0],[0,2,0,0,0,2,0],[1,0,0,0,0,0,1]]), 56, 'Test 37');
test(maxIncreaseKeepingSkyline([[2,8,4,0,0,0],[4,4,4,4,4,4],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]), 14, 'Test 38');
test(maxIncreaseKeepingSkyline([[0,1,2,3,4,5],[1,2,3,4,5,0],[2,3,4,5,0,1],[3,4,5,0,1,2],[4,5,0,1,2,3],[5,0,1,2,3,4]]), 90, 'Test 39');
test(maxIncreaseKeepingSkyline([[9,5,7,2,8],[1,3,6,4,5],[8,4,1,9,2],[3,8,6,7,1],[2,6,5,4,3]]), 62, 'Test 40');
test(maxIncreaseKeepingSkyline([[30, 0, 9, 20, 40], [15, 25, 10, 35, 20], [20, 15, 5, 45, 30], [30, 40, 25, 10, 5], [5, 30, 35, 20, 45]]), 366, 'Test 41');
test(maxIncreaseKeepingSkyline([[1,0,0,0,1,0,0,1],[0,3,0,0,0,0,3,0],[0,0,5,0,0,5,0,0],[0,0,0,7,7,0,0,0],[0,0,0,7,7,0,0,0],[0,0,5,0,0,5,0,0],[0,3,0,0,0,0,3,0],[1,0,0,1,0,0,0,1]]), 110, 'Test 42');
test(maxIncreaseKeepingSkyline([[10,2,3,4,5],[1,6,7,8,9],[5,4,3,2,1],[1,2,3,4,5],[9,8,7,6,10]]), 52, 'Test 43');
test(maxIncreaseKeepingSkyline([[1,2,3,4,5],[5,4,3,2,1],[1,3,5,3,1],[2,4,6,4,2],[1,1,1,1,1]]), 32, 'Test 44');
test(maxIncreaseKeepingSkyline([[15,0,0,0,10],[5,0,0,0,5],[10,0,0,0,5],[5,0,0,0,10],[10,0,0,0,15]]), 20, 'Test 45');
test(maxIncreaseKeepingSkyline([[10,20,30,40,50],[40,30,20,10,0],[50,40,30,20,10],[0,10,20,30,40],[5,15,25,35,45]]), 375, 'Test 46');
test(maxIncreaseKeepingSkyline([[10, 20, 30, 40, 50], [9, 19, 29, 39, 49], [8, 18, 28, 38, 48], [7, 17, 27, 37, 47], [6, 16, 26, 36, 46]]), 40, 'Test 47');
test(maxIncreaseKeepingSkyline([[0,0,0,0,0,0,0],[0,100,0,0,0,0,0],[0,0,100,0,0,0,0],[0,0,0,100,0,0,0],[0,0,0,0,100,0,0],[0,0,0,0,0,100,0],[0,0,0,0,0,0,100]]), 3000, 'Test 48');
test(maxIncreaseKeepingSkyline([[1,1,1,1,1,1],[1,2,2,2,2,1],[1,2,3,3,2,1],[1,2,3,3,2,1],[1,2,2,2,2,1],[1,1,1,1,1,1]]), 0, 'Test 49');
test(maxIncreaseKeepingSkyline([[3,0,8,4,10],[2,4,5,7,1],[9,2,6,3,8],[0,3,1,0,9],[5,5,5,5,5]]), 63, 'Test 50');
test(maxIncreaseKeepingSkyline([[8,2,5,9],[7,5,8,8],[9,8,7,6],[2,8,5,9]]), 28, 'Test 51');
test(maxIncreaseKeepingSkyline([[1,2,3,4,5,6,7,8,9],[9,8,7,6,5,4,3,2,1],[1,2,3,4,5,6,7,8,9],[9,8,7,6,5,4,3,2,1],[1,2,3,4,5,6,7,8,9],[9,8,7,6,5,4,3,2,1],[1,2,3,4,5,6,7,8,9],[9,8,7,6,5,4,3,2,1],[1,2,3,4,5,6,7,8,9]]), 180, 'Test 52');
test(maxIncreaseKeepingSkyline([[3,3,3,3,3,3,3],[3,3,3,3,3,3,3],[3,3,3,3,3,3,3],[3,3,3,3,3,3,3],[3,3,3,3,3,3,3],[3,3,3,3,3,3,3],[3,3,3,3,3,3,3]]), 0, 'Test 53');
test(maxIncreaseKeepingSkyline([[10,9,8,7,6,5,4,3,2,1],[1,2,3,4,5,6,7,8,9,10],[1,1,1,1,1,1,1,1,1,1],[10,10,10,10,10,10,10,10,10,10],[1,1,1,1,1,1,1,1,1,1],[10,10,10,10,10,10,10,10,10,10],[1,1,1,1,1,1,1,1,1,1],[10,10,10,10,10,10,10,10,10,10],[1,1,1,1,1,1,1,1,1,1],[10,10,10,10,10,10,10,10,10,10]]), 90, 'Test 54');
test(maxIncreaseKeepingSkyline([[20,10,0,10,20],[10,20,30,20,10],[0,30,40,30,0],[10,20,30,20,10],[20,10,0,10,20]]), 200, 'Test 55');
test(maxIncreaseKeepingSkyline([[1,2,3,4,5],[5,4,3,2,1],[2,3,4,5,6],[6,5,4,3,2],[3,4,5,6,7]]), 40, 'Test 56');
test(maxIncreaseKeepingSkyline([[7,0,1,2,5],[4,0,0,0,0],[6,0,0,0,0],[0,0,1,0,0],[5,0,5,0,5]]), 31, 'Test 57');
test(maxIncreaseKeepingSkyline([[5, 2, 7, 4], [4, 0, 9, 6], [3, 6, 1, 8], [9, 5, 4, 2]]), 46, 'Test 58');
test(maxIncreaseKeepingSkyline([[3,1,4,1,5,9],[2,6,5,3,5,9],[5,0,5,0,5,0],[2,6,5,3,5,9],[5,0,5,0,5,0],[3,1,4,1,5,9]]), 52, 'Test 59');
test(maxIncreaseKeepingSkyline([[9,8,7,6,5,4],[8,9,6,7,5,4],[7,6,9,8,4,5],[6,7,8,9,5,4],[5,4,7,6,9,8],[4,5,6,7,8,9]]), 90, 'Test 60');
test(maxIncreaseKeepingSkyline([[9, 8, 7, 6], [6, 5, 4, 3], [3, 4, 5, 6], [7, 8, 9, 10]]), 19, 'Test 61');
test(maxIncreaseKeepingSkyline([[9,4,8,7,10],[3,5,6,4,9],[7,1,2,8,3],[6,5,4,2,1],[8,6,7,3,5]]), 54, 'Test 62');
test(maxIncreaseKeepingSkyline([[1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1], [1, 3, 5, 7, 9, 11], [11, 9, 7, 5, 3, 1], [2, 4, 6, 8, 10, 12], [12, 10, 8, 6, 4, 2]]), 110, 'Test 63');
test(maxIncreaseKeepingSkyline([[5,3,3,3,3],[3,3,3,3,5],[3,3,3,3,3],[3,3,3,3,3],[3,5,3,3,3]]), 12, 'Test 64');
test(maxIncreaseKeepingSkyline([[0,10,0,10],[10,0,10,0],[0,10,0,10],[10,0,10,0]]), 80, 'Test 65');
test(maxIncreaseKeepingSkyline([[1,10,10,1],[1,1,1,10],[10,1,1,1],[1,10,1,10]]), 90, 'Test 66');
test(maxIncreaseKeepingSkyline([[30,10,20,40,50],[25,35,15,45,55],[60,50,40,30,20],[10,20,30,40,50],[5,15,25,35,45]]), 385, 'Test 67');
test(maxIncreaseKeepingSkyline([[9,9,9,9],[9,0,0,9],[9,0,0,9],[9,9,9,9]]), 36, 'Test 68');
test(maxIncreaseKeepingSkyline([[20,0,15,10,25],[5,10,8,12,18],[0,5,0,5,0],[15,12,8,6,14],[25,18,14,10,9]]), 104, 'Test 69');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

