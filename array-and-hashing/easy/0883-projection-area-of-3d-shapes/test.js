// Test: 883. Projection Area Of 3D Shapes
// 72 test cases from LeetCodeDataset
// Run: node test.js

const { projectionArea } = require("./solution");

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

console.log("\n883. Projection Area Of 3D Shapes\n");

test(projectionArea([[2,2,2],[2,1,2],[2,2,2]]), 21, 'Test 1');
test(projectionArea([[1,1,1],[1,0,1],[1,1,1]]), 14, 'Test 2');
test(projectionArea([[2]]), 5, 'Test 3');
test(projectionArea([[1,2],[3,4]]), 17, 'Test 4');
test(projectionArea([[1,0],[0,2]]), 8, 'Test 5');
test(projectionArea([[0,0,0],[0,0,0],[0,0,0]]), 0, 'Test 6');
test(projectionArea([[1, 0, 2, 1], [2, 1, 0, 2], [1, 0, 2, 1], [2, 1, 0, 2]]), 27, 'Test 7');
test(projectionArea([[5,0,0,1],[0,5,0,2],[0,0,5,3],[1,2,3,4]]), 48, 'Test 8');
test(projectionArea([[1,0,2,0,1],[0,0,0,0,0],[2,0,1,0,2],[0,0,0,0,0],[1,0,2,0,1]]), 21, 'Test 9');
test(projectionArea([[1,2,3,4,5],[5,4,3,2,1],[1,3,5,3,1],[5,3,1,3,5],[1,5,3,5,1]]), 75, 'Test 10');
test(projectionArea([[5,5,5,5],[5,5,5,5],[5,5,5,5],[5,5,5,5]]), 56, 'Test 11');
test(projectionArea([[0,1,2,3,4],[1,0,3,2,4],[2,3,0,4,1],[3,2,4,0,2],[4,4,1,2,0]]), 60, 'Test 12');
test(projectionArea([[4,3,2],[3,2,1],[2,1,0]]), 26, 'Test 13');
test(projectionArea([[4,1,1,1],[1,4,1,1],[1,1,4,1],[1,1,1,4]]), 48, 'Test 14');
test(projectionArea([[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,0,0,1]]), 15, 'Test 15');
test(projectionArea([[3,0,1],[1,2,3],[4,5,6]]), 35, 'Test 16');
test(projectionArea([[3,0,0,0],[0,2,0,0],[0,0,4,0],[0,0,0,1]]), 24, 'Test 17');
test(projectionArea([[9,0,0,0],[0,9,0,0],[0,0,9,0],[0,0,0,9]]), 76, 'Test 18');
test(projectionArea([[10,5,5,3],[4,7,6,2],[1,3,4,0],[3,1,2,5]]), 69, 'Test 19');
test(projectionArea([[1,2,3,4,5],[5,4,3,2,1],[1,3,5,3,1],[2,4,6,4,2],[3,5,7,5,3]]), 80, 'Test 20');
test(projectionArea([[1,0,0],[0,1,0],[0,0,1]]), 9, 'Test 21');
test(projectionArea([[0,0,5,0,0],[0,0,5,0,0],[5,5,5,5,5],[0,0,5,0,0],[0,0,5,0,0]]), 59, 'Test 22');
test(projectionArea([[1,0,1],[0,1,0],[1,0,1]]), 11, 'Test 23');
test(projectionArea([[3,3,3,3],[3,3,3,3],[3,3,3,3],[3,3,3,3]]), 40, 'Test 24');
test(projectionArea([[10,10,10],[10,1,10],[10,10,10]]), 69, 'Test 25');
test(projectionArea([[1,1,1],[1,1,1],[1,1,1]]), 15, 'Test 26');
test(projectionArea([[0,1,2,3],[1,2,3,4],[2,3,4,5],[3,4,5,6]]), 51, 'Test 27');
test(projectionArea([[3,0,0,0],[0,3,0,0],[0,0,3,0],[0,0,0,3]]), 28, 'Test 28');
test(projectionArea([[3, 3, 3, 3], [3, 3, 3, 3], [3, 3, 3, 3], [3, 3, 3, 3]]), 40, 'Test 29');
test(projectionArea([[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 3, 5, 3, 1], [2, 4, 6, 4, 2], [3, 5, 7, 5, 3]]), 80, 'Test 30');
test(projectionArea([[5,0,0,0,0],[0,5,0,0,0],[0,0,5,0,0],[0,0,0,5,0],[0,0,0,0,5]]), 55, 'Test 31');
test(projectionArea([[1,2,3,4,5],[5,4,3,2,1],[1,3,5,3,1],[4,2,1,2,4],[2,4,2,4,2]]), 71, 'Test 32');
test(projectionArea([[10,10,10],[10,0,10],[10,10,10]]), 68, 'Test 33');
test(projectionArea([[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]]), 35, 'Test 34');
test(projectionArea([[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5]]), 75, 'Test 35');
test(projectionArea([[1,1,0,0],[1,1,0,0],[0,0,1,1],[0,0,1,1]]), 16, 'Test 36');
test(projectionArea([[5, 0, 0], [0, 5, 0], [0, 0, 5]]), 33, 'Test 37');
test(projectionArea([[5,5,5,5],[5,1,1,5],[5,1,1,5],[5,5,5,5]]), 56, 'Test 38');
test(projectionArea([[5,8,3],[3,7,2],[6,4,1]]), 47, 'Test 39');
test(projectionArea([[5, 1, 3], [0, 2, 4], [6, 0, 0]]), 33, 'Test 40');
test(projectionArea([[1,2,3,4,5],[5,4,3,2,1],[1,5,2,4,3],[3,4,1,5,2],[2,1,4,3,5]]), 74, 'Test 41');
test(projectionArea([[4,4,4],[4,0,4],[4,4,4]]), 32, 'Test 42');
test(projectionArea([[3,0,4,0],[0,2,0,0],[1,0,3,0],[0,0,0,3]]), 30, 'Test 43');
test(projectionArea([[3,3,3,3,3],[3,3,3,3,3],[3,3,3,3,3],[3,3,3,3,3],[3,3,3,3,3]]), 55, 'Test 44');
test(projectionArea([[1,2,3,4,5],[5,4,3,2,1],[1,3,5,3,1],[5,3,1,3,5],[2,4,6,4,2]]), 75, 'Test 45');
test(projectionArea([[3,1,4],[1,5,9],[2,6,5]]), 46, 'Test 46');
test(projectionArea([[1, 1, 1], [1, 1, 1], [1, 1, 0]]), 14, 'Test 47');
test(projectionArea([[10, 0, 0, 0], [0, 20, 0, 0], [0, 0, 30, 0], [0, 0, 0, 40]]), 204, 'Test 48');
test(projectionArea([[5,3,1],[4,2,0],[1,4,2]]), 32, 'Test 49');
test(projectionArea([[1,2,3,4,5],[5,4,3,2,1],[1,3,5,7,9],[9,7,5,3,1],[2,4,6,8,10]]), 103, 'Test 50');
test(projectionArea([[1,2,3,4,5,6],[6,5,4,3,2,1],[1,3,5,7,9,11],[11,9,7,5,3,1],[2,4,6,8,10,12],[12,11,10,9,8,7]]), 158, 'Test 51');
test(projectionArea([[0,1,2,3,4],[5,4,3,2,1],[4,5,6,7,8],[3,2,1,0,9],[2,3,4,5,6]]), 87, 'Test 52');
test(projectionArea([[1,2,3,4,5,6],[6,5,4,3,2,1],[1,3,5,7,9,11],[11,9,7,5,3,1],[1,2,3,4,5,6],[6,5,4,3,2,1]]), 136, 'Test 53');
test(projectionArea([[2,2,2,2],[2,1,1,2],[2,1,1,2],[2,2,2,2]]), 32, 'Test 54');
test(projectionArea([[3,0,3],[0,4,0],[3,0,3]]), 25, 'Test 55');
test(projectionArea([[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]]), 105, 'Test 56');
test(projectionArea([[5,0,0],[0,5,0],[0,0,5]]), 33, 'Test 57');
test(projectionArea([[4,0,0,0],[0,4,0,0],[0,0,4,0],[0,0,0,4]]), 36, 'Test 58');
test(projectionArea([[3,0,0,3,3],[0,2,0,0,0],[0,0,4,0,0],[3,0,0,3,3],[3,0,0,3,3]]), 41, 'Test 59');
test(projectionArea([[1,0,0,1,0],[0,1,0,0,1],[0,0,1,0,0],[1,0,0,1,0],[0,1,0,0,1]]), 19, 'Test 60');
test(projectionArea([[3,0,0],[0,3,0],[0,0,3]]), 21, 'Test 61');
test(projectionArea([[4,0,0],[0,0,0],[0,0,4]]), 18, 'Test 62');
test(projectionArea([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]), 12, 'Test 63');
test(projectionArea([[5,4,3,2,1],[4,3,2,1,0],[3,2,1,0,4],[2,1,0,4,3],[1,0,4,3,2]]), 63, 'Test 64');
test(projectionArea([[0,1,0,1],[1,0,1,0],[0,1,0,1],[1,0,1,0]]), 16, 'Test 65');
test(projectionArea([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]), 24, 'Test 66');
test(projectionArea([[9,8,7,6],[5,4,3,2],[1,2,3,4],[8,7,6,5]]), 72, 'Test 67');
test(projectionArea([[5,0,0,0],[0,5,0,0],[0,0,5,0],[0,0,0,5]]), 44, 'Test 68');
test(projectionArea([[1,2,3],[4,5,6],[7,8,9]]), 51, 'Test 69');
test(projectionArea([[3,1,4],[2,5,6],[7,8,9]]), 52, 'Test 70');
test(projectionArea([[0,1,2,3],[3,2,1,0],[0,1,0,1],[1,0,1,0]]), 28, 'Test 71');
test(projectionArea([[10,20,30],[20,30,40],[30,40,50]]), 249, 'Test 72');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

