// Test: 226. Invert Binary Tree
// 70 test cases from LeetCodeDataset
// Run: node test.js

const { invertTree } = require("./solution");

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

console.log("\n226. Invert Binary Tree\n");

test(invertTree([4,2,7,1,3,6,9]), [4, 7, 2, 9, 6, 3, 1], 'Test 1');
test(invertTree([2,1,3]), [2, 3, 1], 'Test 2');
test(invertTree([]), null, 'Test 3');
test(invertTree([3,1,4,null,2]), [3, 4, 1, null, null, 2], 'Test 4');
test(invertTree([1,null,2,null,3,null,4,null,5]), [1, 2, null, 3, null, 4, null, 5], 'Test 5');
test(invertTree([1,2,3,4,5,null,7,8,null,10,11,12]), [1, 3, 2, 7, null, 5, 4, null, 12, 11, 10, null, 8], 'Test 6');
test(invertTree([50,20,70,10,30,60,80,5,15,25,35,55,65,75,85]), [50, 70, 20, 80, 60, 30, 10, 85, 75, 65, 55, 35, 25, 15, 5], 'Test 7');
test(invertTree([3,1,4,3,null,1,5]), [3, 4, 1, 5, 1, null, 3], 'Test 8');
test(invertTree([1,null,2,null,3,null,4,null,5,null,6]), [1, 2, null, 3, null, 4, null, 5, null, 6], 'Test 9');
test(invertTree([8,5,9,3,7,12,15,1,4,6,10,13,17]), [8, 9, 5, 15, 12, 7, 3, null, null, 17, 13, 10, 6, 4, 1], 'Test 10');
test(invertTree([5,15,1,null,30,20,null]), [5, 1, 15, null, 20, 30], 'Test 11');
test(invertTree([8,15,3,7,19,1,2]), [8, 3, 15, 2, 1, 19, 7], 'Test 12');
test(invertTree([6,3,8,1,4,7,9,null,null,2,5]), [6, 8, 3, 9, 7, 4, 1, null, null, null, null, 5, 2], 'Test 13');
test(invertTree([20,10,30,5,15,25,35,3,7,13,17,23,27,33,37]), [20, 30, 10, 35, 25, 15, 5, 37, 33, 27, 23, 17, 13, 7, 3], 'Test 14');
test(invertTree([1,2]), [1, null, 2], 'Test 15');
test(invertTree([10,null,20,null,30,null,40]), [10, 20, null, 30, null, 40], 'Test 16');
test(invertTree([3,9,20,null,null,15,7]), [3, 20, 9, 7, 15], 'Test 17');
test(invertTree([7,3,15,1,5,9,20,null,null,null,6,null,18]), [7, 15, 3, 20, 9, 5, 1, null, null, 18, null, 6], 'Test 18');
test(invertTree([10,5,15,null,null,6,20]), [10, 15, 5, 20, 6], 'Test 19');
test(invertTree([1,3,2,5,4]), [1, 2, 3, null, null, 4, 5], 'Test 20');
test(invertTree([8,5,9,2,7,null,null,null,3,null,4]), [8, 9, 5, null, null, 7, 2, 4, null, 3], 'Test 21');
test(invertTree([1,2,3,null,4,null,5]), [1, 3, 2, 5, null, 4], 'Test 22');
test(invertTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,16,17,18,19,20]), [1, 3, 2, 7, 6, 5, 4, 15, 14, 13, 12, 11, 10, 9, 8, null, null, null, null, null, null, null, null, null, 20, 19, 18, 17, 16], 'Test 23');
test(invertTree([10,5,15,3,7,null,18]), [10, 15, 5, 18, null, 7, 3], 'Test 24');
test(invertTree([-10,-5,-15,-3,-8,null,-20]), [-10, -15, -5, -20, null, -8, -3], 'Test 25');
test(invertTree([1,3,2,null,6,5,4,null,null,null,null,null,7]), [1, 2, 3, 4, 5, 6, null, 7], 'Test 26');
test(invertTree([5,3,7,2,4,6,8,1]), [5, 7, 3, 8, 6, 4, 2, null, null, null, null, null, null, null, 1], 'Test 27');
test(invertTree([100,-50,-20,-60,-80,-30,-10]), [100, -20, -50, -10, -30, -80, -60], 'Test 28');
test(invertTree([5,1,8,null,null,6,9]), [5, 8, 1, 9, 6], 'Test 29');
test(invertTree([-1,-2,-3,-4,-5,-6,-7]), [-1, -3, -2, -7, -6, -5, -4], 'Test 30');
test(invertTree([7,-3,9,-5,-4,8,-10,null,null,null,-9,-8,-6]), [7, 9, -3, -10, 8, -4, -5, null, null, -6, -8, -9], 'Test 31');
test(invertTree([1,2,3,4,null,null,5,6,null,8,null,9,null,10]), [1, 3, 2, 5, null, null, 4, null, 8, null, 6, null, 10, null, 9], 'Test 32');
test(invertTree([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), [1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9], 'Test 33');
test(invertTree([6,2,8,0,4,7,9,null,null,3,5]), [6, 8, 2, 9, 7, 4, 0, null, null, null, null, 5, 3], 'Test 34');
test(invertTree([5,4,8,11,null,13,4,7,2,null,null,5,1]), [5, 8, 4, 4, 13, null, 11, 1, 5, null, null, 2, 7], 'Test 35');
test(invertTree([1,null,2,null,null,null,3,null,null,null,null,null,null,4]), [1, 2], 'Test 36');
test(invertTree([1,null,2,null,3,null,4,null,5,null,6,null,7]), [1, 2, null, 3, null, 4, null, 5, null, 6, null, 7], 'Test 37');
test(invertTree([8,5,10,null,null,6,12,null,null,7,9]), [8, 10, 5, 12, 6, null, null, 9, 7], 'Test 38');
test(invertTree([6,2,8,0,4,7,9,null,3,5,null,null,null,null,null,null]), [6, 8, 2, 9, 7, 4, 0, null, null, null, null, null, 5, 3], 'Test 39');
test(invertTree([5,4,7,3,null,6,9]), [5, 7, 4, 9, 6, null, 3], 'Test 40');
test(invertTree([20,15,25,10,18,null,30,null,16,22,27,null,null,19]), [20, 25, 15, 30, null, 18, 10, null, null, 27, 22, 16, null, null, null, null, null, null, 19], 'Test 41');
test(invertTree([1,2,3,4,5,6,7,8,9,null,10,null,null,11,12,null,null,13,null,14,15]), [1, 3, 2, 7, 6, 5, 4, 12, 11, null, null, 10, null, 9, 8, null, null, null, null, 15, 14, null, 13], 'Test 42');
test(invertTree([5,1,4,null,null,3,6]), [5, 4, 1, 6, 3], 'Test 43');
test(invertTree([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8]), [1, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8], 'Test 44');
test(invertTree([1,3,2,null,null,5,4]), [1, 2, 3, 4, 5], 'Test 45');
test(invertTree([1,2,3,4,5,6,null,7,8,null,null,null,null,9]), [1, 3, 2, null, 6, 5, 4, null, null, null, null, 8, 7, null, null, null, 9], 'Test 46');
test(invertTree([1,2,null,3,null,4,null,5,null,6,null,7,null,8]), [1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8], 'Test 47');
test(invertTree([100,-100,50,25,75,-25,-50]), [100, 50, -100, -50, -25, 75, 25], 'Test 48');
test(invertTree([5,3,8,1,4,7,9,null,null,2,6]), [5, 8, 3, 9, 7, 4, 1, null, null, null, null, 6, 2], 'Test 49');
test(invertTree([0,0,0,0,0,null,null,0,0]), [0, 0, 0, null, null, 0, 0, null, null, 0, 0], 'Test 50');
test(invertTree([5,4,7,3,null,2,null,-1]), [5, 7, 4, null, 2, null, 3, null, null, null, -1], 'Test 51');
test(invertTree([1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,null,null,null,14]), [1, 3, 2, 7, 6, 5, 4, null, null, 13, 12, 11, 10, 9, 8, null, null, null, null, null, null, null, null, 14], 'Test 52');
test(invertTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [1, 3, 2, 7, 6, 5, 4, 15, 14, 13, 12, 11, 10, 9, 8, null, null, null, null, null, null, null, null, null, null, null, 20, 19, 18, 17, 16], 'Test 53');
test(invertTree([1,null,2,null,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), [1, 2], 'Test 54');
test(invertTree([3,5,1,6,2,0,8,null,null,7,4]), [3, 1, 5, 8, 0, 2, 6, null, null, null, null, 4, 7], 'Test 55');
test(invertTree([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9]), [1, 3, 2, 5, 4, null, null, 7, 6, null, null, 9, 8], 'Test 56');
test(invertTree([2,null,3,null,4,null,5,null,6]), [2, 3, null, 4, null, 5, null, 6], 'Test 57');
test(invertTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [1, 3, 2, 7, 6, 5, 4, 15, 14, 13, 12, 11, 10, 9, 8], 'Test 58');
test(invertTree([1,null,2,null,null,3,null]), [1, 2], 'Test 59');
test(invertTree([1,2,2,3,4,4,3]), [1, 2, 2, 3, 4, 4, 3], 'Test 60');
test(invertTree([100,-50,150,25,75,125,175,15,35,65,85,115,145,165,185]), [100, 150, -50, 175, 125, 75, 25, 185, 165, 145, 115, 85, 65, 35, 15], 'Test 61');
test(invertTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), [1, 3, 2, 7, 6, 5, 4, 15, 14, 13, 12, 11, 10, 9, 8, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16], 'Test 62');
test(invertTree([8,5,1,7,10,12]), [8, 1, 5, null, 12, 10, 7], 'Test 63');
test(invertTree([1,2,null,3,null,4,null,5]), [1, null, 2, null, 3, null, 4, null, 5], 'Test 64');
test(invertTree([1,3,null,null,2]), [1, null, 3, 2], 'Test 65');
test(invertTree([1,null,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), [1, 2, null, 4, 3, 8, 7, 6, 5, null, 15, 14, 13, 12, 11, 10, 9, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 30, 29], 'Test 66');
test(invertTree([1,2,3,4,null,null,7,8,null,null,14]), [1, 3, 2, 7, null, null, 4, 14, null, null, 8], 'Test 67');
test(invertTree([1,2,3,4,5,null,6,7,null,null,null,null,8]), [1, 3, 2, 6, null, 5, 4, 8, null, null, null, null, 7], 'Test 68');
test(invertTree([10,null,20,null,null,15,25]), [10, 20], 'Test 69');
test(invertTree([5,1,null,null,4,3,null,null,2]), [5, null, 1, 4, null, null, 3, 2], 'Test 70');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

