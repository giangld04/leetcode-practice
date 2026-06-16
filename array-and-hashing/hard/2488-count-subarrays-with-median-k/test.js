// Test: 2488. Count Subarrays With Median K
// 81 test cases from LeetCodeDataset
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

console.log("\n2488. Count Subarrays With Median K\n");

test(countSubarrays([2,3,1], 3), 1, 'Test 1');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10], 5), 10, 'Test 2');
test(countSubarrays([5,1,4,3,2], 3), 6, 'Test 3');
test(countSubarrays([1,2,3,4,5,6], 4), 5, 'Test 4');
test(countSubarrays([10,9,8,7,6,5,4,3,2,1], 6), 9, 'Test 5');
test(countSubarrays([3,2,1,4,5], 4), 3, 'Test 6');
test(countSubarrays([7,5,3,1,2,4,6], 4), 4, 'Test 7');
test(countSubarrays([5,4,3,2,1], 3), 5, 'Test 8');
test(countSubarrays([1,3,5,7,9,2,4,6,8,10], 5), 13, 'Test 9');
test(countSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,30,28,26,24,22,20,18,16,14,12], 15), 16, 'Test 10');
test(countSubarrays([5,6,7,8,9,1,2,3,4], 5), 4, 'Test 11');
test(countSubarrays([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 15), 30, 'Test 12');
test(countSubarrays([25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 15), 21, 'Test 13');
test(countSubarrays([8, 6, 4, 2, 1, 3, 5, 7, 9], 5), 6, 'Test 14');
test(countSubarrays([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), 10, 'Test 15');
test(countSubarrays([1, 5, 2, 6, 3, 7, 4, 8, 9, 10], 5), 7, 'Test 16');
test(countSubarrays([1,3,2,6,5,4,8,7,9], 5), 12, 'Test 17');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 27), 47, 'Test 18');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 15), 30, 'Test 19');
test(countSubarrays([5, 2, 8, 3, 9, 4, 10, 1, 6, 7], 5), 6, 'Test 20');
test(countSubarrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 15), 15, 'Test 21');
test(countSubarrays([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 10), 11, 'Test 22');
test(countSubarrays([49,47,45,43,41,39,37,35,33,31,29,27,25,23,21,19,17,15,13,11,9,7,5,3,1], 25), 25, 'Test 23');
test(countSubarrays([4,3,2,1,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 25), 50, 'Test 24');
test(countSubarrays([15,20,10,25,5,1,6,11,16,21,26,30,3,8,13,18,23,28,2,7,12,17,22,27,29,4,9,14,19,24], 15), 17, 'Test 25');
test(countSubarrays([1,10,2,9,3,8,4,7,5,6,11,20,12,19,13,18,14,17,15,16,21,30,22,29,23,28,24,27,25,26,31,40,32,39,33,38,34,37,35,36,41,50,42,49,43,48,44,47,45,46], 25), 54, 'Test 26');
test(countSubarrays([5,10,4,3,8,7,9,2,6,1], 5), 7, 'Test 27');
test(countSubarrays([1,5,9,13,17,21,25,29,2,6,10,14,18,22,26,30,3,7,11,15,19,23,27,28,4,8,12,16,20,24], 15), 87, 'Test 28');
test(countSubarrays([4,1,5,3,2,7,6,8,9,10], 5), 7, 'Test 29');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), 20, 'Test 30');
test(countSubarrays([2, 4, 6, 8, 10, 1, 3, 5, 7, 9], 5), 14, 'Test 31');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 13), 25, 'Test 32');
test(countSubarrays([10,8,6,4,2,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], 10), 3, 'Test 33');
test(countSubarrays([5, 1, 3, 2, 4, 6, 8, 7, 10, 9], 5), 3, 'Test 34');
test(countSubarrays([25,1,3,5,7,9,11,13,15,17,19,21,23,27,29,31,33,35,37,39,41,43,45,47,49], 25), 2, 'Test 35');
test(countSubarrays([25,20,15,10,5,1,6,11,16,21,26,30,3,8,13,18,23,28,2,7,12,17,22,27,29,4,9,14,19,24], 15), 24, 'Test 36');
test(countSubarrays([3,1,2,5,4,7,6,9,8,11,10,13,12,15,14,17,16,19,18,20], 10), 21, 'Test 37');
test(countSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 11), 19, 'Test 38');
test(countSubarrays([4,1,5,3,2,6,8,7,9,10], 5), 7, 'Test 39');
test(countSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 25), 11, 'Test 40');
test(countSubarrays([10,9,8,7,6,5,4,3,2,1], 5), 10, 'Test 41');
test(countSubarrays([5,1,3,2,4,8,6,7,9,10], 6), 10, 'Test 42');
test(countSubarrays([1, 3, 5, 7, 9, 2, 4, 6, 8, 10], 5), 13, 'Test 43');
test(countSubarrays([100,1,99,2,98,3,97,4,96,5,95,6,94,7,93,8,92,9,91,10], 50), Error: 50 is not in list, 'Test 44');
test(countSubarrays([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 15), 11, 'Test 45');
test(countSubarrays([1,3,5,7,9,11,13,15,17,19], 11), 9, 'Test 46');
test(countSubarrays([1,13,5,7,9,11,2,4,6,8,10,12,14,15,16,17,18,19,20,3], 10), 24, 'Test 47');
test(countSubarrays([5,1,4,2,3,8,6,7,10,9], 5), 3, 'Test 48');
test(countSubarrays([39,37,35,33,31,29,27,25,23,21,19,17,15,13,11,9,7,5,3,1], 21), 19, 'Test 49');
test(countSubarrays([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 11), 19, 'Test 50');
test(countSubarrays([5,3,1,2,4,6,7,8,9,10], 6), 9, 'Test 51');
test(countSubarrays([5,1,9,3,7,8,2,6,4,10], 5), 8, 'Test 52');
test(countSubarrays([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 15), 44, 'Test 53');
test(countSubarrays([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 10), 20, 'Test 54');
test(countSubarrays([23,45,12,34,56,78,90,21,11,5,3,2,1,9,8,7,6,4,10,13,14,15,16,17,18,19,20,22,24,26,27,28,29,30,31,32,33,35,36,37,38,39,40,41,42,43,44,46,47,48,49], 25), Error: 25 is not in list, 'Test 55');
test(countSubarrays([3,1,4,1,5,9,2,6,5,3,5], 5), 7, 'Test 56');
test(countSubarrays([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 5), 7, 'Test 57');
test(countSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 8), 15, 'Test 58');
test(countSubarrays([5,1,9,3,7,2,8,4,6,10], 7), 4, 'Test 59');
test(countSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 19), 20, 'Test 60');
test(countSubarrays([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 12), 17, 'Test 61');
test(countSubarrays([5, 6, 7, 8, 9, 10, 1, 2, 3, 4], 5), 3, 'Test 62');
test(countSubarrays([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 8), 15, 'Test 63');
test(countSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49], 25), 25, 'Test 64');
test(countSubarrays([5,1,9,3,7,2,8,6,4,10], 5), 7, 'Test 65');
test(countSubarrays([1,15,2,14,3,13,4,12,5,11,6,10,7,9,8], 8), 15, 'Test 66');
test(countSubarrays([12,14,10,15,13,11,9,8,7,6,5,4,3,2,1], 10), 9, 'Test 67');
test(countSubarrays([1,11,5,9,7,2,6,3,8,10,4], 6), 25, 'Test 68');
test(countSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 21), 19, 'Test 69');
test(countSubarrays([15, 20, 25, 10, 5, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 50), 20, 'Test 70');
test(countSubarrays([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 6), 9, 'Test 71');
test(countSubarrays([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 5), 10, 'Test 72');
test(countSubarrays([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40], 22), 19, 'Test 73');
test(countSubarrays([3,6,1,8,5,2,9,4,7], 5), 19, 'Test 74');
test(countSubarrays([2,4,6,8,10,12,14,16,18,20,1,3,5,7,9,11,13,15,17,19], 10), 28, 'Test 75');
test(countSubarrays([3, 1, 4, 2, 5], 3), 3, 'Test 76');
test(countSubarrays([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 8), 15, 'Test 77');
test(countSubarrays([2,4,6,8,10,12,14,16,18,20,1,3,5,7,9,11,13,15,17,19], 11), 25, 'Test 78');
test(countSubarrays([42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 25), 35, 'Test 79');
test(countSubarrays([2,1,5,3,4,6,7,8,9,10], 5), 7, 'Test 80');
test(countSubarrays([5, 1, 9, 3, 7, 2, 8, 4, 6, 10], 5), 6, 'Test 81');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

