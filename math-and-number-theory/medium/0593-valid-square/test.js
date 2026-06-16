// Test: 593. Valid Square
// 89 test cases from LeetCodeDataset
// Run: node test.js

const { validSquare } = require("./solution");

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

console.log("\n593. Valid Square\n");

test(validSquare([-1,-1], [-1,1], [1,1], [1,-1]), true, 'Test 1');
test(validSquare([1,2], [3,4], [5,6], [7,8]), false, 'Test 2');
test(validSquare([2,2], [3,3], [4,4], [5,5]), false, 'Test 3');
test(validSquare([0,0], [0,0], [0,0], [0,0]), false, 'Test 4');
test(validSquare([1,0], [-1,0], [0,1], [0,-1]), true, 'Test 5');
test(validSquare([0,0], [1,1], [1,0], [0,12]), false, 'Test 6');
test(validSquare([1,1], [1,2], [2,1], [2,2]), true, 'Test 7');
test(validSquare([5,5], [5,6], [6,6], [6,5]), true, 'Test 8');
test(validSquare([0,0], [1,0], [1,1], [0,1]), true, 'Test 9');
test(validSquare([0,0], [1,2], [3,2], [2,0]), false, 'Test 10');
test(validSquare([0,0], [1,1], [2,2], [3,3]), false, 'Test 11');
test(validSquare([0,0], [1,1], [1,2], [2,1]), false, 'Test 12');
test(validSquare([1,1], [2,2], [3,3], [4,5]), false, 'Test 13');
test(validSquare([0,0], [0,1], [1,1], [1,0]), true, 'Test 14');
test(validSquare([0,0], [1,1], [1,0], [0,1]), true, 'Test 15');
test(validSquare([0,0], [2,0], [2,2], [0,2]), true, 'Test 16');
test(validSquare([0,0], [5,0], [5,5], [0,5]), true, 'Test 17');
test(validSquare([1,1], [1,1], [1,1], [1,1]), false, 'Test 18');
test(validSquare([2,2], [3,3], [3,2], [2,3]), true, 'Test 19');
test(validSquare([1,1], [1,2], [2,2], [2,1]), true, 'Test 20');
test(validSquare([1,2], [4,5], [7,8], [10,11]), false, 'Test 21');
test(validSquare([0, 0], [1, 0], [0, 1], [1, 1]), true, 'Test 22');
test(validSquare([-2,-2], [-2,2], [2,2], [2,-2]), true, 'Test 23');
test(validSquare([0, 1], [1, 0], [0, -1], [-1, 0]), true, 'Test 24');
test(validSquare([-1,-1], [1,1], [0,0], [2,2]), false, 'Test 25');
test(validSquare([1,1], [2,2], [2,3], [3,2]), false, 'Test 26');
test(validSquare([-3,-3], [-2,-2], [-2,-1], [-1,-2]), false, 'Test 27');
test(validSquare([0,0], [1,1], [2,0], [1,2]), false, 'Test 28');
test(validSquare([1000,-1000], [-1000,1000], [1000,1000], [-1000,-1000]), true, 'Test 29');
test(validSquare([-3,-3], [-3,0], [0,-3], [0,0]), true, 'Test 30');
test(validSquare([1, 0], [0, 1], [-1, 0], [0, -1]), true, 'Test 31');
test(validSquare([-3,-3], [-3,-2], [-2,-2], [-2,-3]), true, 'Test 32');
test(validSquare([10,0], [0,10], [-10,0], [0,-10]), true, 'Test 33');
test(validSquare([1,1], [1,3], [3,1], [3,3]), true, 'Test 34');
test(validSquare([-5,2], [-2,5], [1,2], [-2,-1]), true, 'Test 35');
test(validSquare([1,2], [3,4], [2,1], [0,-1]), false, 'Test 36');
test(validSquare([-1,-1], [-1,0], [0,-1], [0,0]), true, 'Test 37');
test(validSquare([0,1], [1,0], [1,2], [2,1]), true, 'Test 38');
test(validSquare([1,1], [2,1], [2,2], [1,2]), true, 'Test 39');
test(validSquare([-2,-2], [-2,2], [2,-2], [2,2]), true, 'Test 40');
test(validSquare([1,0], [0,1], [-1,0], [0,-1]), true, 'Test 41');
test(validSquare([-1, -1], [0, 0], [1, -1], [0, -2]), true, 'Test 42');
test(validSquare([1000, 1000], [1001, 1001], [1001, 1000], [1000, 1001]), true, 'Test 43');
test(validSquare([5,5], [6,5], [6,6], [5,6]), true, 'Test 44');
test(validSquare([7,7], [7,9], [9,7], [9,9]), true, 'Test 45');
test(validSquare([5, 5], [5, 10], [10, 10], [10, 5]), true, 'Test 46');
test(validSquare([0,0], [0,3], [3,3], [3,0]), true, 'Test 47');
test(validSquare([1, 1], [1, 2], [2, 1], [2, 3]), false, 'Test 48');
test(validSquare([0, 0], [0, 5], [5, 5], [5, 0]), true, 'Test 49');
test(validSquare([0,0], [0,2], [2,0], [2,2]), true, 'Test 50');
test(validSquare([0,0], [0,2], [2,2], [2,0]), true, 'Test 51');
test(validSquare([0,0], [1,1], [1,0], [0,-1]), false, 'Test 52');
test(validSquare([10,10], [14,14], [14,10], [10,14]), true, 'Test 53');
test(validSquare([-100,-100], [-99,-99], [-99,-100], [-100,-99]), true, 'Test 54');
test(validSquare([1,0], [0,1], [1,2], [2,1]), true, 'Test 55');
test(validSquare([-1000,-1000], [-999,-999], [-999,-1000], [-1000,-999]), true, 'Test 56');
test(validSquare([1, 1], [1, 3], [3, 1], [3, 3]), true, 'Test 57');
test(validSquare([1,1], [2,2], [3,3], [4,4]), false, 'Test 58');
test(validSquare([0, 0], [0, 0], [0, 0], [0, 0]), false, 'Test 59');
test(validSquare([-10000, -10000], [-10000, -9999], [-9999, -10000], [-9999, -9999]), true, 'Test 60');
test(validSquare([5, 5], [6, 6], [7, 7], [8, 8]), false, 'Test 61');
test(validSquare([3, 3], [6, 6], [6, 3], [3, 6]), true, 'Test 62');
test(validSquare([-5,-5], [-10,-5], [-10,-10], [-5,-10]), true, 'Test 63');
test(validSquare([0, 0], [1, 1], [1, 0], [0, -1]), false, 'Test 64');
test(validSquare([3,3], [6,3], [6,6], [3,6]), true, 'Test 65');
test(validSquare([-2, -2], [-1, -1], [1, 1], [2, 2]), false, 'Test 66');
test(validSquare([10, 10], [10, 20], [20, 10], [20, 20]), true, 'Test 67');
test(validSquare([1,1], [1,3], [3,3], [3,1]), true, 'Test 68');
test(validSquare([-1,-1], [1,1], [1,-1], [-1,1]), true, 'Test 69');
test(validSquare([1000,1000], [1001,1001], [1001,1000], [1000,1001]), true, 'Test 70');
test(validSquare([0, 0], [1, 1], [2, 2], [3, 3]), false, 'Test 71');
test(validSquare([5, 5], [6, 6], [6, 5], [5, 6]), true, 'Test 72');
test(validSquare([1, 2], [3, 4], [5, 6], [7, 8]), false, 'Test 73');
test(validSquare([1,2], [4,5], [7,2], [4,-1]), true, 'Test 74');
test(validSquare([0, 0], [0, 1], [1, 0], [2, 1]), false, 'Test 75');
test(validSquare([-2,-2], [-2,-3], [-3,-3], [-3,-2]), true, 'Test 76');
test(validSquare([1,1], [4,5], [5,4], [8,8]), false, 'Test 77');
test(validSquare([100,100], [101,101], [101,100], [100,101]), true, 'Test 78');
test(validSquare([0, 0], [0, 10000], [10000, 0], [10000, 10000]), true, 'Test 79');
test(validSquare([5,5], [5,10], [10,5], [10,10]), true, 'Test 80');
test(validSquare([1000,1000], [1000,2000], [2000,2000], [2000,1000]), true, 'Test 81');
test(validSquare([1, 1], [2, 2], [3, 3], [4, 4]), false, 'Test 82');
test(validSquare([0,1], [1,0], [0,-1], [-1,0]), true, 'Test 83');
test(validSquare([3,4], [6,8], [9,5], [6,1]), false, 'Test 84');
test(validSquare([-2, -2], [-1, -1], [-2, -1], [-1, -2]), true, 'Test 85');
test(validSquare([5,5], [8,5], [8,8], [5,8]), true, 'Test 86');
test(validSquare([10000, 10000], [10001, 10001], [10001, 10000], [10000, 9999]), false, 'Test 87');
test(validSquare([-5, 5], [-4, 4], [-4, 5], [-5, 4]), true, 'Test 88');
test(validSquare([0,0], [0,4], [4,4], [4,0]), true, 'Test 89');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

