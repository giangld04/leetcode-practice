// Test: 918. Maximum Sum Circular Subarray
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { maxSubarraySumCircular } = require("./solution");

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

console.log("\n918. Maximum Sum Circular Subarray\n");

test(maxSubarraySumCircular([1,-2,3,-2]), 3, 'Test 1');
test(maxSubarraySumCircular([10,-2,5,1,-4,3,-1]), 16, 'Test 2');
test(maxSubarraySumCircular([2,3,-4,5,7]), 17, 'Test 3');
test(maxSubarraySumCircular([5,-3,5]), 10, 'Test 4');
test(maxSubarraySumCircular([3,-1,2,-1]), 4, 'Test 5');
test(maxSubarraySumCircular([2,-2,2,7]), 11, 'Test 6');
test(maxSubarraySumCircular([-1,-2,-3,4]), 4, 'Test 7');
test(maxSubarraySumCircular([9,-4,7,3,-2]), 17, 'Test 8');
test(maxSubarraySumCircular([10,0,3,5,-10,2,4]), 24, 'Test 9');
test(maxSubarraySumCircular([1,2,3,4,5]), 15, 'Test 10');
test(maxSubarraySumCircular([-1,-2,-3,-4]), -1, 'Test 11');
test(maxSubarraySumCircular([1,-4,7,2]), 10, 'Test 12');
test(maxSubarraySumCircular([-1,-2,-3,-4,-5]), -1, 'Test 13');
test(maxSubarraySumCircular([9,-4,7,2,-1]), 17, 'Test 14');
test(maxSubarraySumCircular([-3,-2,-3]), -2, 'Test 15');
test(maxSubarraySumCircular([100, -1, -2, -3, -4, -5, -6, -7, -8, -9, 100, 100, -200, 100, 100]), 455, 'Test 16');
test(maxSubarraySumCircular([-10, -20, -30, 15, 20, 25, -10, -5]), 60, 'Test 17');
test(maxSubarraySumCircular([5, -3, 5, -2, 3, -4, 7, -6, 8, -1]), 18, 'Test 18');
test(maxSubarraySumCircular([3,-1,4,-1,5,-9,2,6,-3,8]), 23, 'Test 19');
test(maxSubarraySumCircular([10, -3, 4, -2, -1, 10, -10, 5, 6, -5, 2]), 26, 'Test 20');
test(maxSubarraySumCircular([1,2,3,4,5,6,7,8,9,10]), 55, 'Test 21');
test(maxSubarraySumCircular([2,4,-2,-3,8]), 14, 'Test 22');
test(maxSubarraySumCircular([1,2,3,-6,4,5,6,-10,7,8,9]), 39, 'Test 23');
test(maxSubarraySumCircular([1, 2, 3, 4, 5, -20, 1, 2, 3, 4, 5, -20, 1, 2, 3, 4, 5]), 30, 'Test 24');
test(maxSubarraySumCircular([3,-2,2,5,-3]), 8, 'Test 25');
test(maxSubarraySumCircular([1, -10, 3, 4, -2, 5]), 11, 'Test 26');
test(maxSubarraySumCircular([100, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]), 100, 'Test 27');
test(maxSubarraySumCircular([-2,4,-3,5,1,-5,3,-1,2,4,-5]), 10, 'Test 28');
test(maxSubarraySumCircular([-1, -1, -1, -1, -1, 100, -1, -1, -1, -1]), 100, 'Test 29');
test(maxSubarraySumCircular([-5, -1, -8, 2, 6, -3, 4, 2, -8, 3, 7]), 13, 'Test 30');
test(maxSubarraySumCircular([-1, 4, -2, 3, -2, 4, -2, 3, -1, 2, -5, 6]), 14, 'Test 31');
test(maxSubarraySumCircular([2, 3, -4, 5, 7, 1, -1, -3, 4]), 18, 'Test 32');
test(maxSubarraySumCircular([8,-1,3,-4,3,2,-2,5,7,-4,5,-2,1,2,-1,3,4,-3,4,-1,-2,1,5]), 37, 'Test 33');
test(maxSubarraySumCircular([-1, -2, -3, 20, -1, -2, -3, 20, -1, -2, -3, 20]), 48, 'Test 34');
test(maxSubarraySumCircular([1, -1, 2, -2, 3, -3, 4, -4]), 4, 'Test 35');
test(maxSubarraySumCircular([1, 2, 3, -5, 6, 7, -8, 9, 10, -11, 12]), 37, 'Test 36');
test(maxSubarraySumCircular([3,-2,2,-3,4,-1,2,1,-5,4]), 10, 'Test 37');
test(maxSubarraySumCircular([5, -3, 5, -3, 5, -3, 5, -3, 5, -3]), 13, 'Test 38');
test(maxSubarraySumCircular([-1000, 1000, -2000, 2000, -3000, 3000, -4000, 4000, -5000, 5000]), 5000, 'Test 39');
test(maxSubarraySumCircular([10000, -1000, 5000, -500, 2000, -300]), 16200, 'Test 40');
test(maxSubarraySumCircular([1, -2, 3, -2, 4, -1, 2, 1, -5, 4]), 10, 'Test 41');
test(maxSubarraySumCircular([8,-1,3,-2,4,-3,2,1,-5,4]), 16, 'Test 42');
test(maxSubarraySumCircular([10, -20, 5, 5, -3, 2, -1]), 18, 'Test 43');
test(maxSubarraySumCircular([7, 5, -3, 6, -1, 8, -4, 2]), 24, 'Test 44');
test(maxSubarraySumCircular([-1, -2, -3, 4, 5, -1, 2, -1]), 10, 'Test 45');
test(maxSubarraySumCircular([0,0,0,0,0,0,0,0,0,0]), 0, 'Test 46');
test(maxSubarraySumCircular([3, -1, 4, -1, 5, -9, 2, 6, -5, 3, -8]), 10, 'Test 47');
test(maxSubarraySumCircular([1, 2, 3, 4, 5, -15, 1, 2, 3, 4, 5]), 30, 'Test 48');
test(maxSubarraySumCircular([-5, 1, 5, 0, -7, 3, -1, 2]), 6, 'Test 49');
test(maxSubarraySumCircular([-1,0,1,-2,2,-3,3,-4,4,-5,5]), 5, 'Test 50');
test(maxSubarraySumCircular([-2, -3, 4, -1, -2, 1, 5, -3, 2, -5]), 7, 'Test 51');
test(maxSubarraySumCircular([-10, 15, -20, 25, -30, 35, -40, 45, -50, 55]), 75, 'Test 52');
test(maxSubarraySumCircular([7,5,-3,6,-5,2,-7,8,-2,4,5]), 30, 'Test 53');
test(maxSubarraySumCircular([1, -2, 3, -2, 5, 6, -4, 2]), 13, 'Test 54');
test(maxSubarraySumCircular([-2, -3, -1, -4, -5, -7, -8, -6, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20]), -1, 'Test 55');
test(maxSubarraySumCircular([1, 2, 3, 4, -10, 1, 2, 3, 4]), 20, 'Test 56');
test(maxSubarraySumCircular([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]), 15, 'Test 57');
test(maxSubarraySumCircular([1,-1,2,-2,3,-3,4,-4,5,-5,6,-6]), 6, 'Test 58');
test(maxSubarraySumCircular([-1, -2, -3, -4, -5, 5, 4, 3, 2, 1, -1, -2]), 15, 'Test 59');
test(maxSubarraySumCircular([-1, -2, -3, 4, 5, -10, 6, 7]), 16, 'Test 60');
test(maxSubarraySumCircular([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100, 1000]), 1000, 'Test 61');
test(maxSubarraySumCircular([-5,-1,-8,-9,-2,-6,-3,-8,-4,-5]), -1, 'Test 62');
test(maxSubarraySumCircular([10, 20, 30, 40, 50, -5, -10, -15, -20, -25, 50, 100, -50, -100, 150, -200, 250, -300, 350, -400]), 350, 'Test 63');
test(maxSubarraySumCircular([3, -1, 2, -1, 4, -2, 5, -3, 6, -4, 7, -5, 8, -6, 9, -7, 10, -8]), 25, 'Test 64');
test(maxSubarraySumCircular([3,-2,2,-3,4,-1,2,1,-5,4,3,-2,2,-3,4,-1,2,1,-5,4]), 15, 'Test 65');
test(maxSubarraySumCircular([-5, 5, -5, 5, -5, 5]), 5, 'Test 66');
test(maxSubarraySumCircular([10,-10,20,-20,30,-30,40,-40,50,-50]), 50, 'Test 67');
test(maxSubarraySumCircular([-2,4,-3,4,-1,-2,1,5,-3]), 8, 'Test 68');
test(maxSubarraySumCircular([100, -200, 300, -400, 500, -600, 700, -800, 900, -1000, 1000]), 1500, 'Test 69');
test(maxSubarraySumCircular([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10]), 10, 'Test 70');
test(maxSubarraySumCircular([1,2,3,4,5,-6,7,8,9,10]), 49, 'Test 71');
test(maxSubarraySumCircular([15,-2,20,4,-5,-9,-10]), 37, 'Test 72');
test(maxSubarraySumCircular([1,2,3,4,5,-1,-2,-3,-4,-5,10]), 25, 'Test 73');
test(maxSubarraySumCircular([1,-10,3,4,-5,2,6,-1,4]), 14, 'Test 74');
test(maxSubarraySumCircular([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55, 'Test 75');
test(maxSubarraySumCircular([3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13]), 20, 'Test 76');
test(maxSubarraySumCircular([10,-7,9,-7,9,-7,9,9,-6,-4,6]), 31, 'Test 77');
test(maxSubarraySumCircular([100, -1, -100, 100, -1, -100, 100, -1, -100, 100]), 200, 'Test 78');
test(maxSubarraySumCircular([5, -2, 5, -2, 5, -2, 5, -2]), 14, 'Test 79');
test(maxSubarraySumCircular([-10, 2, 3, -2, 5, -6, 7, -8, 9, -10]), 10, 'Test 80');
test(maxSubarraySumCircular([5,10,-20,5,10,5]), 35, 'Test 81');
test(maxSubarraySumCircular([8, -1, 3, 4, -2, -3, 6, 1]), 21, 'Test 82');
test(maxSubarraySumCircular([5, 5, 5, 5, -10, 5, 5, 5, 5]), 40, 'Test 83');
test(maxSubarraySumCircular([10, -5, 4, -1, 12, -3, 7, -2, 8, -6]), 30, 'Test 84');
test(maxSubarraySumCircular([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]), -1, 'Test 85');
test(maxSubarraySumCircular([8, -1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14, -15]), 15, 'Test 86');
test(maxSubarraySumCircular([10, -20, 30, -40, 50, -60, 70, -80, 90, -100]), 90, 'Test 87');
test(maxSubarraySumCircular([2, 3, -4, 5, 7, -10, 20, -5, 3, -2, 1, -1, 4, -3, 2, -2, 5, -7, 8, -6]), 30, 'Test 88');
test(maxSubarraySumCircular([-1, -2, 3, 4, -5, 6, -7, 8, -9, 10]), 16, 'Test 89');
test(maxSubarraySumCircular([1,2,3,-6,1,2,3,4,5,-10,1,2,3,4,5]), 30, 'Test 90');
test(maxSubarraySumCircular([-1, -3, -5, 2, 1, -1, -2, 3, 4]), 7, 'Test 91');
test(maxSubarraySumCircular([-1,-2,-3,-4,-5,1,2,3,4,5]), 15, 'Test 92');
test(maxSubarraySumCircular([100, -100, 100, -100, 100, -100, 100]), 200, 'Test 93');
test(maxSubarraySumCircular([-5,5,-5,5,-5,5,-5,5]), 5, 'Test 94');
test(maxSubarraySumCircular([3, -1, -1, 3, 5, -7, 5]), 14, 'Test 95');
test(maxSubarraySumCircular([1, -2, 3, 5, -6, 4, 2]), 13, 'Test 96');
test(maxSubarraySumCircular([0, -1, 0, 1, 0, -1, 0, 1, 0, -1, 0, 1]), 1, 'Test 97');
test(maxSubarraySumCircular([1, 2, 3, 4, 5, -5, -4, -3, -2, -1]), 15, 'Test 98');
test(maxSubarraySumCircular([-5000, -1000, -3000, -2000, -4000, -1500]), -1000, 'Test 99');
test(maxSubarraySumCircular([10, -10, 20, -20, 30, -30, 40, -40, 50]), 90, 'Test 100');
test(maxSubarraySumCircular([1, 2, 3, 4, 5, -1, -2, -3, -4, -5, 1, 2, 3, 4, 5]), 30, 'Test 101');
test(maxSubarraySumCircular([1,2,3,-6,4,5,6,-10,1,2,3,4]), 25, 'Test 102');
test(maxSubarraySumCircular([5, -1, 5, -2, 3, 4, -5]), 14, 'Test 103');
test(maxSubarraySumCircular([-1, -2, -3, -4, -5, 15, 10, 5, -10, -5, 20, 25, -30]), 60, 'Test 104');
test(maxSubarraySumCircular([3, -4, 5, 2, -6, 1, 4, -3, 2, -5]), 7, 'Test 105');
test(maxSubarraySumCircular([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), -1, 'Test 106');
test(maxSubarraySumCircular([-1,-2,-3,-4,-5,1,2,3,4,5,-10]), 15, 'Test 107');
test(maxSubarraySumCircular([1, 2, 3, 4, 5, 6, 7, 8, 9, -100, 10, 20, 30, 40, 50]), 195, 'Test 108');
test(maxSubarraySumCircular([5, 1, -2, 3, -1, 2]), 10, 'Test 109');
test(maxSubarraySumCircular([10, -2, -3, -4, 7, 9, -20, 10, 15]), 42, 'Test 110');
test(maxSubarraySumCircular([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 1, 'Test 111');
test(maxSubarraySumCircular([3, -2, 2, 5, -3, 3, 5, -2, 3, 2, 5, -3]), 21, 'Test 112');
test(maxSubarraySumCircular([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15]), 22, 'Test 113');
test(maxSubarraySumCircular([5,-1,5,-1,5,-1,5,-1,5,-1]), 21, 'Test 114');
test(maxSubarraySumCircular([100,-1,100,-1,100,-1,100,-1,100]), 497, 'Test 115');
test(maxSubarraySumCircular([1,-2,3,4,-1,2,1,-5,4]), 12, 'Test 116');
test(maxSubarraySumCircular([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,1]), 1, 'Test 117');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

