// Test: 1856. Maximum Subarray Min Product
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { maxSumMinProduct } = require("./solution");

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

console.log("\n1856. Maximum Subarray Min Product\n");

test(maxSumMinProduct([5,9,6,8,7]), 180, 'Test 1');
test(maxSumMinProduct([2,1]), 4, 'Test 2');
test(maxSumMinProduct([10,9,8,7,6,5,4,3,2,1]), 240, 'Test 3');
test(maxSumMinProduct([9,8,7,6,5,4,3,2,1]), 180, 'Test 4');
test(maxSumMinProduct([1,2,3,4,5,6,7,8,9,10]), 240, 'Test 5');
test(maxSumMinProduct([1]), 1, 'Test 6');
test(maxSumMinProduct([10000000]), 999300007, 'Test 7');
test(maxSumMinProduct([5,9,6,8,7,4,3,2,10,1]), 180, 'Test 8');
test(maxSumMinProduct([2,3,3,1,2]), 18, 'Test 9');
test(maxSumMinProduct([10000000,9999999,9999998,9999997,9999996]), 696500047, 'Test 10');
test(maxSumMinProduct([5,5,5,5,5]), 125, 'Test 11');
test(maxSumMinProduct([7,1,5,6,4,2]), 60, 'Test 12');
test(maxSumMinProduct([1,2,3,4,5]), 36, 'Test 13');
test(maxSumMinProduct([1,1,1,1,1,1,1,1,1,1]), 10, 'Test 14');
test(maxSumMinProduct([1,2,1,2,1,2,1,2,1,2]), 15, 'Test 15');
test(maxSumMinProduct([1,1,1,1,1]), 5, 'Test 16');
test(maxSumMinProduct([3,1,5,6,4,2]), 60, 'Test 17');
test(maxSumMinProduct([10000000,9999999,9999998,9999997]), 817200025, 'Test 18');
test(maxSumMinProduct([5,4,3,2,1]), 36, 'Test 19');
test(maxSumMinProduct([1,2]), 4, 'Test 20');
test(maxSumMinProduct([1,2,3,2]), 14, 'Test 21');
test(maxSumMinProduct([5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1]), 72, 'Test 22');
test(maxSumMinProduct([5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1]), 135, 'Test 23');
test(maxSumMinProduct([10000000,9999999,9999998,9999997,9999996,9999995,9999994,9999993,9999992,9999991]), 643000419, 'Test 24');
test(maxSumMinProduct([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 2400000, 'Test 25');
test(maxSumMinProduct([5, 8, 6, 7, 8, 9, 9, 10, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 642, 'Test 26');
test(maxSumMinProduct([1,10,2,9,3,8,4,7,5,6,11,12,13,14,15,16,17,18,19,20]), 1728, 'Test 27');
test(maxSumMinProduct([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 1728, 'Test 28');
test(maxSumMinProduct([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5]), 360, 'Test 29');
test(maxSumMinProduct([10, 20, 10, 30, 20, 10, 40, 30, 20, 10]), 2100, 'Test 30');
test(maxSumMinProduct([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 1728, 'Test 31');
test(maxSumMinProduct([9999999, 1, 9999999, 1, 9999999, 1, 9999999, 1, 9999999, 1]), 979300008, 'Test 32');
test(maxSumMinProduct([1, 3, 2, 5, 6, 2, 8, 4, 9, 1, 3]), 84, 'Test 33');
test(maxSumMinProduct([10000000, 9999999, 9999998, 9999997, 9999996, 9999995, 9999994, 9999993, 9999992, 9999991, 9999990]), 342300564, 'Test 34');
test(maxSumMinProduct([1,10000000,1,10000000,1,10000000,1,10000000,1,10000000,1,10000000,1,10000000,1,10000000]), 999300007, 'Test 35');
test(maxSumMinProduct([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 756, 'Test 36');
test(maxSumMinProduct([1, 1, 1, 1, 10000000, 1, 1, 1, 1, 10000000, 1, 1, 1, 1]), 999300007, 'Test 37');
test(maxSumMinProduct([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 20, 'Test 38');
test(maxSumMinProduct([10000000, 10000000, 10000000, 10000000, 10000000]), 996500007, 'Test 39');
test(maxSumMinProduct([10, 20, 30, 40, 50, 1, 2, 3, 4, 5]), 3600, 'Test 40');
test(maxSumMinProduct([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 420, 'Test 41');
test(maxSumMinProduct([7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7]), 90, 'Test 42');
test(maxSumMinProduct([7, 8, 9, 10, 1, 2, 3, 4, 5, 6]), 238, 'Test 43');
test(maxSumMinProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 420, 'Test 44');
test(maxSumMinProduct([1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100]), 10000, 'Test 45');
test(maxSumMinProduct([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 420, 'Test 46');
test(maxSumMinProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]), 240, 'Test 47');
test(maxSumMinProduct([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 15, 'Test 48');
test(maxSumMinProduct([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 480, 'Test 49');
test(maxSumMinProduct([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 420, 'Test 50');
test(maxSumMinProduct([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 480, 'Test 51');
test(maxSumMinProduct([1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000]), 999930007, 'Test 52');
test(maxSumMinProduct([2,3,2,4,3,2,5,4,3,2,6,5,4,3,2,7,6,5,4,3,2,8,7,6,5,4,3,2,9,8,7,6,5,4,3,2,10]), 332, 'Test 53');
test(maxSumMinProduct([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1728, 'Test 54');
test(maxSumMinProduct([10000000,9000000,8000000,7000000,6000000,5000000,4000000,3000000,2000000,1000000]), 998320007, 'Test 55');
test(maxSumMinProduct([3, 2, 1, 4, 3, 2, 5, 4, 3, 6, 5, 4, 7, 6, 5, 8, 7, 6, 9, 8, 7]), 315, 'Test 56');
test(maxSumMinProduct([10,20,30,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 1000, 'Test 57');
test(maxSumMinProduct([1,2,3,4,5,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]), 240, 'Test 58');
test(maxSumMinProduct([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 240, 'Test 59');
test(maxSumMinProduct([10000000, 9999999, 9999998, 9999997, 9999996, 9999995, 9999994]), 365100133, 'Test 60');
test(maxSumMinProduct([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 1728, 'Test 61');
test(maxSumMinProduct([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 240, 'Test 62');
test(maxSumMinProduct([8,2,6,5,4,1,3,7,9]), 112, 'Test 63');
test(maxSumMinProduct([100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 24000, 'Test 64');
test(maxSumMinProduct([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 41, 'Test 65');
test(maxSumMinProduct([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 82, 'Test 66');
test(maxSumMinProduct([10000000, 1, 10000000, 1, 10000000, 1, 10000000, 1]), 999300007, 'Test 67');
test(maxSumMinProduct([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 240, 'Test 68');
test(maxSumMinProduct([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), 980, 'Test 69');
test(maxSumMinProduct([2, 1, 3, 4, 1, 5, 1, 6, 1, 7]), 49, 'Test 70');
test(maxSumMinProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 420, 'Test 71');
test(maxSumMinProduct([10000000, 9999999, 9999998, 9999997, 9999996, 9999995, 9999994, 9999993, 9999992, 9999991]), 643000419, 'Test 72');
test(maxSumMinProduct([10000000, 1, 10000000, 1, 10000000, 1, 10000000, 1, 10000000]), 999300007, 'Test 73');
test(maxSumMinProduct([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 3300, 'Test 74');
test(maxSumMinProduct([3,2,5,4,7,6,8,9,1,10,2,3,4,5,6,7,8,9,1,10,2,3,4,5,6,7,8,9,1,10,2,3,4,5,6,7,8,9,1]), 210, 'Test 75');
test(maxSumMinProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 756, 'Test 76');
test(maxSumMinProduct([1, 5, 4, 3, 6, 2, 8, 7, 9]), 168, 'Test 77');
test(maxSumMinProduct([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]), 81, 'Test 78');
test(maxSumMinProduct([1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1]), 100, 'Test 79');
test(maxSumMinProduct([5, 6, 1, 2, 8, 9, 3, 4, 7, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 240, 'Test 80');
test(maxSumMinProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 1728, 'Test 81');
test(maxSumMinProduct([7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 180, 'Test 82');
test(maxSumMinProduct([10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000,10000000]), 993000007, 'Test 83');
test(maxSumMinProduct([9,7,5,3,1,2,4,6,8,10]), 144, 'Test 84');
test(maxSumMinProduct([5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6]), 148, 'Test 85');
test(maxSumMinProduct([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 10, 'Test 86');
test(maxSumMinProduct([10000000,1,10000000,1,10000000,1,10000000]), 999300007, 'Test 87');
test(maxSumMinProduct([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 240, 'Test 88');
test(maxSumMinProduct([1, 10000000, 2, 9999999, 3, 9999998, 4, 9999997, 5, 9999996]), 999300007, 'Test 89');
test(maxSumMinProduct([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1]), 36, 'Test 90');
test(maxSumMinProduct([9999996, 9999997, 9999998, 9999999, 10000000, 9999999, 9999998, 9999997, 9999996]), 433700087, 'Test 91');
test(maxSumMinProduct([5, 1, 5, 1, 5, 1, 5, 1, 5, 1]), 30, 'Test 92');
test(maxSumMinProduct([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 240, 'Test 93');
test(maxSumMinProduct([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1]), 33, 'Test 94');
test(maxSumMinProduct([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 24000, 'Test 95');
test(maxSumMinProduct([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 20, 'Test 96');
test(maxSumMinProduct([1,10,100,1000,10000,100000,1000000,10000000,1000000,100000,10000,1000,100,10,1]), 999300007, 'Test 97');
test(maxSumMinProduct([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 375, 'Test 98');
test(maxSumMinProduct([1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1]), 25, 'Test 99');
test(maxSumMinProduct([1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000]), 999937007, 'Test 100');
test(maxSumMinProduct([1, 10000000, 1, 10000000, 1, 10000000, 1, 10000000]), 999300007, 'Test 101');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

