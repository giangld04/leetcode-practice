// Test: 795. Number Of Subarrays With Bounded Maximum
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { numSubarrayBoundedMax } = require("./solution");

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

console.log("\n795. Number Of Subarrays With Bounded Maximum\n");

test(numSubarrayBoundedMax([5,2,1], 1, 5), 6, 'Test 1');
test(numSubarrayBoundedMax([73,55,36,5,55,14,9,7,72,52], 32, 69), 22, 'Test 2');
test(numSubarrayBoundedMax([2,1,4,3], 2, 3), 3, 'Test 3');
test(numSubarrayBoundedMax([8,2,4,4,4,6,7,7,7,8], 4, 6), 14, 'Test 4');
test(numSubarrayBoundedMax([10, 20, 30, 40, 50], 15, 45), 9, 'Test 5');
test(numSubarrayBoundedMax([5,2,4,5,5,5,6,5,5,5], 4, 5), 26, 'Test 6');
test(numSubarrayBoundedMax([2,9,2,5,6], 2, 8), 7, 'Test 7');
test(numSubarrayBoundedMax([5, 5, 5, 5, 5], 5, 5), 15, 'Test 8');
test(numSubarrayBoundedMax([10,20,30], 25, 25), 0, 'Test 9');
test(numSubarrayBoundedMax([1,2,3], 1, 3), 6, 'Test 10');
test(numSubarrayBoundedMax([10,20,30,40,50], 20, 40), 9, 'Test 11');
test(numSubarrayBoundedMax([1,2,3,4,5], 2, 4), 9, 'Test 12');
test(numSubarrayBoundedMax([5,5,5,5,5], 5, 5), 15, 'Test 13');
test(numSubarrayBoundedMax([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50], 30, 80), 43, 'Test 14');
test(numSubarrayBoundedMax([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7, 1, 6, 9, 3, 9, 9, 3, 7, 9, 3, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5], 5, 10), 2028, 'Test 15');
test(numSubarrayBoundedMax([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 10, 20), 0, 'Test 16');
test(numSubarrayBoundedMax([10, 5, 3, 15, 7, 9, 20, 1], 5, 10), 8, 'Test 17');
test(numSubarrayBoundedMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 10), 55, 'Test 18');
test(numSubarrayBoundedMax([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0, 2), 210, 'Test 19');
test(numSubarrayBoundedMax([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 5, 15), 33, 'Test 20');
test(numSubarrayBoundedMax([1, 3, 5, 7, 9, 11, 13, 15], 4, 12), 18, 'Test 21');
test(numSubarrayBoundedMax([1, 3, 5, 7, 9, 11, 13], 4, 10), 12, 'Test 22');
test(numSubarrayBoundedMax([8, 1, 6, 3, 5, 7, 2, 9, 4, 10], 3, 7), 20, 'Test 23');
test(numSubarrayBoundedMax([5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 6), 49, 'Test 24');
test(numSubarrayBoundedMax([9, 8, 7, 6, 5, 4, 3, 2, 1], 3, 7), 25, 'Test 25');
test(numSubarrayBoundedMax([2, 3, 2, 1, 2, 3, 4, 3, 2, 1], 2, 3), 25, 'Test 26');
test(numSubarrayBoundedMax([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 50, 950), 45, 'Test 27');
test(numSubarrayBoundedMax([3, 2, 1, 4, 3, 5, 4, 3, 2, 1], 2, 4), 23, 'Test 28');
test(numSubarrayBoundedMax([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4, 8), 35, 'Test 29');
test(numSubarrayBoundedMax([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 1, 2), 55, 'Test 30');
test(numSubarrayBoundedMax([100, 200, 300, 400, 500], 150, 350), 5, 'Test 31');
test(numSubarrayBoundedMax([1, 2, 2, 2, 2, 2, 2, 2, 2, 1], 2, 2), 53, 'Test 32');
test(numSubarrayBoundedMax([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 3, 8), 21, 'Test 33');
test(numSubarrayBoundedMax([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 1, 5), 120, 'Test 34');
test(numSubarrayBoundedMax([7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 7, 7), 55, 'Test 35');
test(numSubarrayBoundedMax([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10, 100), 55, 'Test 36');
test(numSubarrayBoundedMax([7, 4, 7, 2, 5, 3, 6], 4, 6), 9, 'Test 37');
test(numSubarrayBoundedMax([1, 3, 5, 7, 9, 11, 13, 15], 6, 12), 15, 'Test 38');
test(numSubarrayBoundedMax([7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 5, 5), 0, 'Test 39');
test(numSubarrayBoundedMax([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 6, 14), 25, 'Test 40');
test(numSubarrayBoundedMax([5, 4, 3, 2, 1, 0, 1, 2, 3, 4], 1, 3), 27, 'Test 41');
test(numSubarrayBoundedMax([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 25, 75), 25, 'Test 42');
test(numSubarrayBoundedMax([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 1), 55, 'Test 43');
test(numSubarrayBoundedMax([5, 4, 3, 2, 1], 2, 4), 9, 'Test 44');
test(numSubarrayBoundedMax([3, 7, 2, 5, 4, 6, 1, 8, 9], 4, 7), 25, 'Test 45');
test(numSubarrayBoundedMax([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0, 0), 55, 'Test 46');
test(numSubarrayBoundedMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 8), 30, 'Test 47');
test(numSubarrayBoundedMax([4, 2, 7, 3, 6, 5, 8, 1, 9, 0], 3, 7), 20, 'Test 48');
test(numSubarrayBoundedMax([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 400, 800), 30, 'Test 49');
test(numSubarrayBoundedMax([5, 10, 5, 10, 5, 10, 5, 10], 5, 10), 36, 'Test 50');
test(numSubarrayBoundedMax([1, 3, 5, 7, 9, 11, 13, 15], 5, 10), 12, 'Test 51');
test(numSubarrayBoundedMax([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5], 5, 15), 66, 'Test 52');
test(numSubarrayBoundedMax([9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10, 15), 27, 'Test 53');
test(numSubarrayBoundedMax([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 1, 3), 55, 'Test 54');
test(numSubarrayBoundedMax([3, 2, 1, 4, 5, 6, 7, 8, 9, 10], 3, 8), 33, 'Test 55');
test(numSubarrayBoundedMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10, 20), 165, 'Test 56');
test(numSubarrayBoundedMax([8, 7, 6, 5, 4, 3, 2, 1], 3, 6), 18, 'Test 57');
test(numSubarrayBoundedMax([3, 2, 1, 2, 3, 2, 1, 2, 3], 2, 3), 43, 'Test 58');
test(numSubarrayBoundedMax([7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 9), 45, 'Test 59');
test(numSubarrayBoundedMax([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4, 8), 35, 'Test 60');
test(numSubarrayBoundedMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5, 15), 110, 'Test 61');
test(numSubarrayBoundedMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5, 10), 45, 'Test 62');
test(numSubarrayBoundedMax([1, 4, 2, 3, 5, 6, 7, 8, 9, 10], 3, 8), 34, 'Test 63');
test(numSubarrayBoundedMax([5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5], 1, 4), 44, 'Test 64');
test(numSubarrayBoundedMax([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8], 5, 10), 210, 'Test 65');
test(numSubarrayBoundedMax([5, 4, 3, 2, 1, 2, 3, 4, 5, 6], 3, 5), 39, 'Test 66');
test(numSubarrayBoundedMax([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 2, 8), 42, 'Test 67');
test(numSubarrayBoundedMax([8, 8, 8, 8, 8, 8, 8, 8, 8, 8], 8, 8), 55, 'Test 68');
test(numSubarrayBoundedMax([1, 3, 5, 2, 4, 6, 8, 7], 2, 6), 20, 'Test 69');
test(numSubarrayBoundedMax([3, 4, 2, 2, 2, 2, 2, 4, 3, 1], 2, 3), 18, 'Test 70');
test(numSubarrayBoundedMax([1000000000, 999999999, 1000000000, 999999999, 1000000000], 500000000, 1500000000), 15, 'Test 71');
test(numSubarrayBoundedMax([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 200, 800), 35, 'Test 72');
test(numSubarrayBoundedMax([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 1), 120, 'Test 73');
test(numSubarrayBoundedMax([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 15, 95), 44, 'Test 74');
test(numSubarrayBoundedMax([7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 5, 9), 55, 'Test 75');
test(numSubarrayBoundedMax([100, 200, 300, 400, 500], 150, 450), 9, 'Test 76');
test(numSubarrayBoundedMax([5, 4, 3, 2, 1], 1, 3), 6, 'Test 77');
test(numSubarrayBoundedMax([5, 1, 4, 3, 2, 5, 6, 7, 8, 5], 3, 6), 27, 'Test 78');
test(numSubarrayBoundedMax([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 250, 750), 25, 'Test 79');
test(numSubarrayBoundedMax([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 3, 7), 25, 'Test 80');
test(numSubarrayBoundedMax([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 2, 4), 55, 'Test 81');
test(numSubarrayBoundedMax([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 10, 15), 39, 'Test 82');
test(numSubarrayBoundedMax([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 2, 4), 33, 'Test 83');
test(numSubarrayBoundedMax([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 4, 7), 22, 'Test 84');
test(numSubarrayBoundedMax([1, 5, 1, 5, 1, 5, 1, 5, 1, 5], 5, 5), 50, 'Test 85');
test(numSubarrayBoundedMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 7), 25, 'Test 86');
test(numSubarrayBoundedMax([3, 7, 2, 5, 9, 1, 6], 3, 7), 11, 'Test 87');
test(numSubarrayBoundedMax([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100, 1000), 55, 'Test 88');
test(numSubarrayBoundedMax([8, 8, 8, 8, 8, 8, 8, 8, 8, 8], 5, 10), 55, 'Test 89');
test(numSubarrayBoundedMax([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5, 5), 210, 'Test 90');
test(numSubarrayBoundedMax([1, 3, 5, 7, 9, 11, 13, 15], 4, 10), 12, 'Test 91');
test(numSubarrayBoundedMax([1, 3, 5, 7, 9, 11, 13], 2, 10), 14, 'Test 92');
test(numSubarrayBoundedMax([10, 12, 8, 7, 5, 4, 3, 11, 6, 10], 5, 10), 16, 'Test 93');
test(numSubarrayBoundedMax([7, 1, 8, 2, 3, 8, 4, 5, 6, 8, 7, 1, 2], 3, 7), 13, 'Test 94');
test(numSubarrayBoundedMax([1, 100, 1, 100, 1, 100, 1, 100, 1, 100], 50, 150), 50, 'Test 95');
test(numSubarrayBoundedMax([5, 8, 1, 4, 9, 7, 6, 3, 2, 10], 4, 7), 10, 'Test 96');
test(numSubarrayBoundedMax([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5, 10), 45, 'Test 97');
test(numSubarrayBoundedMax([10, 20, 30, 40, 50], 25, 45), 7, 'Test 98');
test(numSubarrayBoundedMax([7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 6, 8), 55, 'Test 99');
test(numSubarrayBoundedMax([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3], 2, 2), 8, 'Test 100');
test(numSubarrayBoundedMax([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0, 1), 120, 'Test 101');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

