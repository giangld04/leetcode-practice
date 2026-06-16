// Test: 1248. Count Number Of Nice Subarrays
// 68 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfSubarrays } = require("./solution");

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

console.log("\n1248. Count Number Of Nice Subarrays\n");

test(numberOfSubarrays([1,2,3,4,5], 3), 1, 'Test 1');
test(numberOfSubarrays([1,2,3,4,5,6,7,8,9,10], 5), 2, 'Test 2');
test(numberOfSubarrays([2], 1), 0, 'Test 3');
test(numberOfSubarrays([2,4,6], 1), 0, 'Test 4');
test(numberOfSubarrays([1,2,3,4,5,6,7,8,9,10], 3), 10, 'Test 5');
test(numberOfSubarrays([1], 1), 1, 'Test 6');
test(numberOfSubarrays([1,3,5,7,9], 5), 1, 'Test 7');
test(numberOfSubarrays([2,2,2,2,2], 1), 0, 'Test 8');
test(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2), 16, 'Test 9');
test(numberOfSubarrays([1,3,5,7,9], 2), 4, 'Test 10');
test(numberOfSubarrays([1,1,2,1,1], 3), 2, 'Test 11');
test(numberOfSubarrays([2,2,2,2,2], 0), 15, 'Test 12');
test(numberOfSubarrays([10,15,20,25,30], 1), 8, 'Test 13');
test(numberOfSubarrays([2,2,2,2,2,2,2,2,2,2], 0), 55, 'Test 14');
test(numberOfSubarrays([2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 5), 44, 'Test 15');
test(numberOfSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2], 15), 16, 'Test 16');
test(numberOfSubarrays([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30], 1), 0, 'Test 17');
test(numberOfSubarrays([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30], 0), 120, 'Test 18');
test(numberOfSubarrays([3,1,4,1,5,9,2,6,5,3,5,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,9,5,0,2,8,8,4,1,9,7,1,6,9,3,9,9,3,7], 10), 61, 'Test 19');
test(numberOfSubarrays([1,3,5,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34], 5), 0, 'Test 20');
test(numberOfSubarrays([2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2], 1), 81, 'Test 21');
test(numberOfSubarrays([2,4,6,8,10,1,3,5,7,9,11,13,15,17,19,21,23], 5), 13, 'Test 22');
test(numberOfSubarrays([2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2], 4), 16, 'Test 23');
test(numberOfSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 20), 54, 'Test 24');
test(numberOfSubarrays([1,2,1,2,1,2,1,2,1,2], 5), 2, 'Test 25');
test(numberOfSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 15), 2, 'Test 26');
test(numberOfSubarrays([10,15,20,25,30,35,40,45,50,55], 2), 14, 'Test 27');
test(numberOfSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5), 16, 'Test 28');
test(numberOfSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 21, 'Test 29');
test(numberOfSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), 2, 'Test 30');
test(numberOfSubarrays([2,4,6,8,10,12,14,16,18,20,1,3,5,7,9,2,4,6,8,10], 3), 18, 'Test 31');
test(numberOfSubarrays([2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3], 5), 42, 'Test 32');
test(numberOfSubarrays([2,1,4,3,6,5,8,7,10,9], 3), 10, 'Test 33');
test(numberOfSubarrays([5,5,5,5,5,5,5,5,5,5], 2), 9, 'Test 34');
test(numberOfSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5), 12, 'Test 35');
test(numberOfSubarrays([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 3), 36, 'Test 36');
test(numberOfSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59], 20), 11, 'Test 37');
test(numberOfSubarrays([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0], 5), 22, 'Test 38');
test(numberOfSubarrays([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 1), 20, 'Test 39');
test(numberOfSubarrays([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40], 0), 210, 'Test 40');
test(numberOfSubarrays([2,3,4,5,6,7,8,9,10,11], 4), 6, 'Test 41');
test(numberOfSubarrays([11,22,33,44,55,66,77,88,99,100], 5), 2, 'Test 42');
test(numberOfSubarrays([1,3,5,7,9,11,13,15,17,19,21], 3), 9, 'Test 43');
test(numberOfSubarrays([1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2], 4), 57, 'Test 44');
test(numberOfSubarrays([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80], 0), 820, 'Test 45');
test(numberOfSubarrays([1,3,5,7,9,2,4,6,8,10,1,3,5,7,9], 7), 4, 'Test 46');
test(numberOfSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 15), 6, 'Test 47');
test(numberOfSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49], 10), 16, 'Test 48');
test(numberOfSubarrays([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 5), 16, 'Test 49');
test(numberOfSubarrays([2,4,6,8,10,12,14,16,18,20,1,3,5,7,9], 5), 11, 'Test 50');
test(numberOfSubarrays([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 1), 640, 'Test 51');
test(numberOfSubarrays([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 3), 13, 'Test 52');
test(numberOfSubarrays([100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 100000], 3), 0, 'Test 53');
test(numberOfSubarrays([1,2,3,2,1,2,3,2,1], 2), 12, 'Test 54');
test(numberOfSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 6), 18, 'Test 55');
test(numberOfSubarrays([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6], 3), 29, 'Test 56');
test(numberOfSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 11, 'Test 57');
test(numberOfSubarrays([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 3), 22, 'Test 58');
test(numberOfSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 21, 'Test 59');
test(numberOfSubarrays([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 5), 22, 'Test 60');
test(numberOfSubarrays([1,1,2,1,2,1,2,1,2,1], 3), 10, 'Test 61');
test(numberOfSubarrays([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40], 1), 0, 'Test 62');
test(numberOfSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5), 22, 'Test 63');
test(numberOfSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 20), 25, 'Test 64');
test(numberOfSubarrays([2,3,2,3,2,3,2,3,2,3,2,3], 3), 14, 'Test 65');
test(numberOfSubarrays([1,2,3,4,5,6,7,8,9,10], 4), 6, 'Test 66');
test(numberOfSubarrays([1,1,2,2,2,3,3,4,4,4,5,5,5,6,6,6,7,7,8,8,9,9,10,10], 5), 35, 'Test 67');
test(numberOfSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], 7), 9, 'Test 68');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

