// Test: 766. Toeplitz Matrix
// 84 test cases from LeetCodeDataset
// Run: node test.js

const { isToeplitzMatrix } = require("./solution");

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

console.log("\n766. Toeplitz Matrix\n");

test(isToeplitzMatrix([[3,4,5],[6,3,4],[7,6,3]]), true, 'Test 1');
test(isToeplitzMatrix([[1,2,3],[4,1,2],[7,4,1]]), true, 'Test 2');
test(isToeplitzMatrix([[1]]), true, 'Test 3');
test(isToeplitzMatrix([[1,2],[3,4]]), false, 'Test 4');
test(isToeplitzMatrix([[1,2,3],[4,5,6],[7,8,9]]), false, 'Test 5');
test(isToeplitzMatrix([[1,1],[1,1],[1,1]]), true, 'Test 6');
test(isToeplitzMatrix([[3,3,3],[3,3,3],[3,3,3]]), true, 'Test 7');
test(isToeplitzMatrix([[1,2],[3,4],[5,6]]), false, 'Test 8');
test(isToeplitzMatrix([[1,1,1],[1,1,1],[1,1,1]]), true, 'Test 9');
test(isToeplitzMatrix([[1,2],[2,2]]), false, 'Test 10');
test(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]), true, 'Test 11');
test(isToeplitzMatrix([[1,2,3,4,5,6,7,8],[9,1,2,3,4,5,6,7],[17,9,1,2,3,4,5,6],[25,17,9,1,2,3,4,5]]), true, 'Test 12');
test(isToeplitzMatrix([[9,8,7,6],[8,9,8,7],[7,8,9,8],[6,7,8,9]]), true, 'Test 13');
test(isToeplitzMatrix([[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]]), true, 'Test 14');
test(isToeplitzMatrix([[1,2,3,4,5,6],[7,1,2,3,4,5],[8,7,1,2,3,4],[9,8,7,1,2,3]]), true, 'Test 15');
test(isToeplitzMatrix([[1,2,3,4,5],[6,1,2,3,4],[11,6,1,2,3],[17,11,6,1,2]]), true, 'Test 16');
test(isToeplitzMatrix([[1,0,0,0],[1,1,0,0],[1,1,1,0],[1,1,1,1]]), true, 'Test 17');
test(isToeplitzMatrix([[1,2,2],[3,1,2],[4,3,1]]), true, 'Test 18');
test(isToeplitzMatrix([[1,2,3,4,5],[6,1,2,3,4],[11,6,1,2,3],[16,11,6,1,2],[21,16,11,6,1]]), true, 'Test 19');
test(isToeplitzMatrix([[5,6,7,8],[4,5,6,7],[3,4,5,6],[2,3,4,5],[1,2,3,4]]), true, 'Test 20');
test(isToeplitzMatrix([[1,2,3,4,5],[6,7,8,9,10],[11,6,7,8,9],[12,13,6,7,8]]), false, 'Test 21');
test(isToeplitzMatrix([[1,2,3,4,5,6,7,8,9],[10,1,2,3,4,5,6,7,8],[19,10,1,2,3,4,5,6,7],[28,19,10,1,2,3,4,5,6]]), true, 'Test 22');
test(isToeplitzMatrix([[3,4,5,6,7,8],[2,3,4,5,6,7],[1,2,3,4,5,6],[0,1,2,3,4,5]]), true, 'Test 23');
test(isToeplitzMatrix([[7,8,9],[1,7,8],[2,1,7],[3,2,1]]), true, 'Test 24');
test(isToeplitzMatrix([[7,7,7,7],[7,7,7,7],[7,7,7,7],[7,7,7,7]]), true, 'Test 25');
test(isToeplitzMatrix([[9],[8],[7],[6],[5]]), true, 'Test 26');
test(isToeplitzMatrix([[1,2,2],[4,1,2],[7,4,1]]), true, 'Test 27');
test(isToeplitzMatrix([[1,1,1,1,1,1],[2,1,1,1,1,1],[3,2,1,1,1,1],[4,3,2,1,1,1]]), true, 'Test 28');
test(isToeplitzMatrix([[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5]]), true, 'Test 29');
test(isToeplitzMatrix([[3,8,4,2],[6,3,8,4],[7,6,3,8]]), true, 'Test 30');
test(isToeplitzMatrix([[1,2,3,4,5],[6,1,2,3,4],[7,6,1,2,3],[8,7,6,1,2],[9,8,7,6,1]]), true, 'Test 31');
test(isToeplitzMatrix([[1,2,3,4,5,6],[7,1,2,3,4,5],[13,7,1,2,3,4],[19,13,7,1,2,3]]), true, 'Test 32');
test(isToeplitzMatrix([[10,11,12,13],[14,10,11,12],[15,14,10,11]]), true, 'Test 33');
test(isToeplitzMatrix([[9,8,7,6,5],[8,7,6,5,4],[7,6,5,4,3],[6,5,4,3,2]]), false, 'Test 34');
test(isToeplitzMatrix([[1,2,3,4],[5,1,2,9],[9,5,1,10]]), false, 'Test 35');
test(isToeplitzMatrix([[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]]), true, 'Test 36');
test(isToeplitzMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]), false, 'Test 37');
test(isToeplitzMatrix([[0,1,2,3,4,5],[0,0,1,2,3,4],[0,0,0,1,2,3],[0,0,0,0,1,2],[0,0,0,0,0,1]]), true, 'Test 38');
test(isToeplitzMatrix([[10,20,30],[20,10,20],[30,20,10]]), true, 'Test 39');
test(isToeplitzMatrix([[1,2,3],[2,3,4],[3,4,5]]), false, 'Test 40');
test(isToeplitzMatrix([[5,6,7],[8,5,6],[9,8,5],[10,9,8]]), true, 'Test 41');
test(isToeplitzMatrix([[9,8,7],[8,7,6],[7,6,5],[6,5,4]]), false, 'Test 42');
test(isToeplitzMatrix([[1,2],[2,1],[3,2],[4,3]]), true, 'Test 43');
test(isToeplitzMatrix([[1,0,0,0],[2,1,0,0],[3,2,1,0],[4,3,2,1]]), true, 'Test 44');
test(isToeplitzMatrix([[10,11,12],[13,10,11],[14,13,10]]), true, 'Test 45');
test(isToeplitzMatrix([[1,2],[3,1],[4,3],[5,4],[6,5]]), true, 'Test 46');
test(isToeplitzMatrix([[9,8,7,6],[8,7,6,5],[7,6,5,4],[6,5,4,3]]), false, 'Test 47');
test(isToeplitzMatrix([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]), true, 'Test 48');
test(isToeplitzMatrix([[10,11,12,13,14],[5,10,11,12,13],[0,5,10,11,12],[9,0,5,10,11]]), true, 'Test 49');
test(isToeplitzMatrix([[0,1,2,3],[1,0,1,2],[2,1,0,1]]), true, 'Test 50');
test(isToeplitzMatrix([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]), true, 'Test 51');
test(isToeplitzMatrix([[5,5,5,5,5,5],[5,5,5,5,5,5],[5,5,5,5,5,5],[5,5,5,5,5,5]]), true, 'Test 52');
test(isToeplitzMatrix([[4,5,6,7],[1,4,5,6],[2,1,4,5],[3,2,1,4],[4,3,2,1]]), true, 'Test 53');
test(isToeplitzMatrix([[7,8,9,10],[4,7,8,9],[1,4,7,8],[0,1,4,7]]), true, 'Test 54');
test(isToeplitzMatrix([[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18]]), false, 'Test 55');
test(isToeplitzMatrix([[1,2],[2,1],[1,2]]), true, 'Test 56');
test(isToeplitzMatrix([[1,2,3,4,5],[5,4,3,2,1],[1,2,3,4,5],[5,4,3,2,1]]), false, 'Test 57');
test(isToeplitzMatrix([[1,2,3,4,5,6,7,8,9,10],[11,1,2,3,4,5,6,7,8,9],[21,11,1,2,3,4,5,6,7,8],[31,21,11,1,2,3,4,5,6,7],[41,31,21,11,1,2,3,4,5,6]]), true, 'Test 58');
test(isToeplitzMatrix([[1,2,3],[4,5,6],[7,8,9],[10,11,12]]), false, 'Test 59');
test(isToeplitzMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]]), false, 'Test 60');
test(isToeplitzMatrix([[1,2,3,4],[2,3,4,5],[3,4,5,6],[4,5,6,7]]), false, 'Test 61');
test(isToeplitzMatrix([[3,3,3,3],[3,3,3,3],[3,3,3,3],[3,3,3,3]]), true, 'Test 62');
test(isToeplitzMatrix([[1,2,3,4,5],[6,1,2,3,4],[7,6,1,2,3],[8,7,6,1,2]]), true, 'Test 63');
test(isToeplitzMatrix([[1,2,3,4,5],[6,1,2,3,4],[11,6,1,2,3],[12,11,6,1,2]]), true, 'Test 64');
test(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2],[8,9,5,1]]), true, 'Test 65');
test(isToeplitzMatrix([[1,2,3],[2,3,4],[1,2,3]]), false, 'Test 66');
test(isToeplitzMatrix([[1,2],[2,3],[3,4],[4,5]]), false, 'Test 67');
test(isToeplitzMatrix([[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]]), false, 'Test 68');
test(isToeplitzMatrix([[1,2,3,4,5,6,7],[8,1,2,3,4,5,6],[15,8,1,2,3,4,5],[22,15,8,1,2,3,4]]), true, 'Test 69');
test(isToeplitzMatrix([[9,8,7],[8,9,8],[7,8,9]]), true, 'Test 70');
test(isToeplitzMatrix([[10,11,12,13,14],[9,10,11,12,13],[8,9,10,11,12],[7,8,9,10,11]]), true, 'Test 71');
test(isToeplitzMatrix([[1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8],[0,0,1,2,3,4,5,6,7],[0,0,0,1,2,3,4,5,6],[0,0,0,0,1,2,3,4,5]]), true, 'Test 72');
test(isToeplitzMatrix([[5],[4],[3],[2],[1]]), true, 'Test 73');
test(isToeplitzMatrix([[1,2,3,4],[4,1,2,3],[3,4,1,2],[2,3,4,1]]), true, 'Test 74');
test(isToeplitzMatrix([[1,1,1,2],[1,1,2,3],[1,2,3,4]]), false, 'Test 75');
test(isToeplitzMatrix([[1,2],[3,4],[5,6],[7,8]]), false, 'Test 76');
test(isToeplitzMatrix([[5,4,3],[6,5,4],[7,6,5],[8,7,6]]), true, 'Test 77');
test(isToeplitzMatrix([[5,6,7,8],[4,5,6,7],[3,4,5,6],[2,3,4,5]]), true, 'Test 78');
test(isToeplitzMatrix([[1,2,3,4],[2,1,2,3],[3,2,1,2],[4,3,2,1]]), true, 'Test 79');
test(isToeplitzMatrix([[1,2,3,4,5,6,7,8,9],[2,1,2,3,4,5,6,7,8],[3,2,1,2,3,4,5,6,7],[4,3,2,1,2,3,4,5,6]]), true, 'Test 80');
test(isToeplitzMatrix([[1,2,3,4,5,6],[2,3,4,5,6,7],[3,4,5,6,7,8],[4,5,6,7,8,9]]), false, 'Test 81');
test(isToeplitzMatrix([[9,8,7,6,5],[8,9,8,7,6],[7,8,9,8,7],[6,7,8,9,8]]), true, 'Test 82');
test(isToeplitzMatrix([[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1]]), true, 'Test 83');
test(isToeplitzMatrix([[1,2,3,4,5],[2,3,4,5,6],[3,4,5,6,7],[4,5,6,7,8],[5,6,7,8,9]]), false, 'Test 84');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

