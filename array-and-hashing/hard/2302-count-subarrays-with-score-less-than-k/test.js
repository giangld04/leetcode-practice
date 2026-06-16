// Test: 2302. Count Subarrays With Score Less Than K
// 79 test cases from LeetCodeDataset
// Run: node test.js

const { countSubarrays } = require("./solution");

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

console.log("\n2302. Count Subarrays With Score Less Than K\n");

test(countSubarrays([1,2,3,4,5], 100), 15, 'Test 1');
test(countSubarrays([10,10,10], 100), 6, 'Test 2');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10], 50), 24, 'Test 3');
test(countSubarrays([1,1,1], 5), 5, 'Test 4');
test(countSubarrays([1], 2), 1, 'Test 5');
test(countSubarrays([5,5,5,5], 20), 4, 'Test 6');
test(countSubarrays([10,20,30], 100), 4, 'Test 7');
test(countSubarrays([5,5,5,5], 25), 7, 'Test 8');
test(countSubarrays([2,1,4,3,5], 10), 6, 'Test 9');
test(countSubarrays([10,5,2,6], 100), 10, 'Test 10');
test(countSubarrays([5,5,5,5,5], 25), 9, 'Test 11');
test(countSubarrays([1,2,3,4,5], 75), 14, 'Test 12');
test(countSubarrays([10,20,30,40,50], 200), 10, 'Test 13');
test(countSubarrays([5,5,5,5], 15), 4, 'Test 14');
test(countSubarrays([1, 2, 2, 2, 2, 2, 2, 2, 2, 2], 10), 19, 'Test 15');
test(countSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 1000), 32, 'Test 16');
test(countSubarrays([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 50), 19, 'Test 17');
test(countSubarrays([3, 5, 2, 8, 6, 1], 25), 10, 'Test 18');
test(countSubarrays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 30), 24, 'Test 19');
test(countSubarrays([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 30), 19, 'Test 20');
test(countSubarrays([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 50), 74, 'Test 21');
test(countSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 20), 74, 'Test 22');
test(countSubarrays([2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3], 20), 23, 'Test 23');
test(countSubarrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 100), 26, 'Test 24');
test(countSubarrays([1, 10, 1, 10, 1, 10, 1, 10, 1, 10], 100), 34, 'Test 25');
test(countSubarrays([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 10000), 54, 'Test 26');
test(countSubarrays([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 200), 32, 'Test 27');
test(countSubarrays([9, 8, 7, 6, 5, 4, 3, 2, 1], 100), 29, 'Test 28');
test(countSubarrays([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 100), 34, 'Test 29');
test(countSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 30), 18, 'Test 30');
test(countSubarrays([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 100), 23, 'Test 31');
test(countSubarrays([100, 200, 300, 400, 500], 100000), 15, 'Test 32');
test(countSubarrays([100000, 100000, 100000, 100000, 100000], 500000000000), 15, 'Test 33');
test(countSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 50), 24, 'Test 34');
test(countSubarrays([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 500000), 55, 'Test 35');
test(countSubarrays([10, 20, 10, 20, 10, 20, 10, 20, 10, 20], 400), 37, 'Test 36');
test(countSubarrays([100000, 99999, 99998, 99997, 99996, 99995], 100000000000), 21, 'Test 37');
test(countSubarrays([9, 9, 9, 9, 9, 9, 9], 50), 13, 'Test 38');
test(countSubarrays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 200), 101, 'Test 39');
test(countSubarrays([1, 3, 6, 10, 15, 21, 28, 36, 45, 55], 500), 37, 'Test 40');
test(countSubarrays([3, 5, 7, 2, 8, 10], 100), 17, 'Test 41');
test(countSubarrays([100, 200, 300, 400, 500], 10000), 15, 'Test 42');
test(countSubarrays([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100000), 55, 'Test 43');
test(countSubarrays([5, 1, 3, 2, 5, 1, 2], 20), 14, 'Test 44');
test(countSubarrays([9, 7, 5, 3, 1, 9, 7, 5, 3, 1], 100), 34, 'Test 45');
test(countSubarrays([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 300), 32, 'Test 46');
test(countSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10000), 55, 'Test 47');
test(countSubarrays([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2], 30), 57, 'Test 48');
test(countSubarrays([99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991, 99990], 999990000000), 55, 'Test 49');
test(countSubarrays([7, 3, 2, 8, 1, 2, 4], 20), 11, 'Test 50');
test(countSubarrays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 20), 20, 'Test 51');
test(countSubarrays([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 81), 19, 'Test 52');
test(countSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 57, 'Test 53');
test(countSubarrays([5, 4, 3, 2, 1, 5, 4, 3, 2, 1], 25), 22, 'Test 54');
test(countSubarrays([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 50), 54, 'Test 55');
test(countSubarrays([3, 2, 1, 4, 5], 20), 10, 'Test 56');
test(countSubarrays([5, 4, 3, 2, 1], 15), 8, 'Test 57');
test(countSubarrays([10, 1, 2, 3, 10, 2, 3, 10, 2, 3], 50), 27, 'Test 58');
test(countSubarrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 150), 30, 'Test 59');
test(countSubarrays([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 50000), 54, 'Test 60');
test(countSubarrays([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 150), 38, 'Test 61');
test(countSubarrays([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 100), 27, 'Test 62');
test(countSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 11), 27, 'Test 63');
test(countSubarrays([50, 40, 30, 20, 10], 1000), 15, 'Test 64');
test(countSubarrays([9, 8, 7, 6, 5, 4, 3, 2, 1], 50), 22, 'Test 65');
test(countSubarrays([1, 10, 100, 1000, 10000, 100000, 1000000], 10000000), 28, 'Test 66');
test(countSubarrays([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 100), 203, 'Test 67');
test(countSubarrays([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 150), 29, 'Test 68');
test(countSubarrays([5, 4, 3, 2, 1, 1, 2, 3, 4, 5], 50), 34, 'Test 69');
test(countSubarrays([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 5000), 55, 'Test 70');
test(countSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 27, 'Test 71');
test(countSubarrays([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 500), 40, 'Test 72');
test(countSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 150), 53, 'Test 73');
test(countSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 100), 54, 'Test 74');
test(countSubarrays([10, 2, 3, 4, 5, 6, 7, 8, 9, 10], 150), 37, 'Test 75');
test(countSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 100), 32, 'Test 76');
test(countSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5000), 54, 'Test 77');
test(countSubarrays([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 200), 61, 'Test 78');
test(countSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 100), 44, 'Test 79');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

