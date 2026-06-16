// Test: 2790. Maximum Number Of Groups With Increasing Length
// 70 test cases from LeetCodeDataset
// Run: node test.js

const { maxIncreasingGroups } = require("./solution");

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

console.log("\n2790. Maximum Number Of Groups With Increasing Length\n");

test(maxIncreasingGroups([10,9,8,7,6,5,4,3,2,1]), 10, 'Test 1');
test(maxIncreasingGroups([1000000000,1000000000,1000000000]), 3, 'Test 2');
test(maxIncreasingGroups([5,5,5,5,5,5,5,5,5,5]), 9, 'Test 3');
test(maxIncreasingGroups([1,2,5]), 3, 'Test 4');
test(maxIncreasingGroups([1,2,3,4,5]), 5, 'Test 5');
test(maxIncreasingGroups([3,3,3]), 3, 'Test 6');
test(maxIncreasingGroups([1,1]), 1, 'Test 7');
test(maxIncreasingGroups([1,1,1,1,1,1,1,1,1,1]), 4, 'Test 8');
test(maxIncreasingGroups([1]), 1, 'Test 9');
test(maxIncreasingGroups([1,1000000000,1,1000000000,1]), 4, 'Test 10');
test(maxIncreasingGroups([3,3,3,3]), 4, 'Test 11');
test(maxIncreasingGroups([1000000000,1000000000,1000000000,1000000000,1000000000]), 5, 'Test 12');
test(maxIncreasingGroups([2,1,2]), 2, 'Test 13');
test(maxIncreasingGroups([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1000000000]), 5, 'Test 14');
test(maxIncreasingGroups([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 11, 'Test 15');
test(maxIncreasingGroups([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 19, 'Test 16');
test(maxIncreasingGroups([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 15, 'Test 17');
test(maxIncreasingGroups([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 14, 'Test 18');
test(maxIncreasingGroups([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 10, 'Test 19');
test(maxIncreasingGroups([20,1,20,2,20,3,20,4,20,5,20,6,20,7,20,8,20,9,20,10]), 20, 'Test 20');
test(maxIncreasingGroups([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 5, 'Test 21');
test(maxIncreasingGroups([1, 3, 6, 10, 15]), 5, 'Test 22');
test(maxIncreasingGroups([1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000]), 20, 'Test 23');
test(maxIncreasingGroups([5, 3, 2, 1]), 4, 'Test 24');
test(maxIncreasingGroups([15, 10, 6, 3, 1]), 5, 'Test 25');
test(maxIncreasingGroups([1,3,6,10,15,21,28,36,45,55]), 10, 'Test 26');
test(maxIncreasingGroups([10,10,10,10,10,10,10,10,10,10]), 10, 'Test 27');
test(maxIncreasingGroups([1000000000, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 4, 'Test 28');
test(maxIncreasingGroups([30, 28, 26, 24, 22, 20, 18, 16, 14, 12, 10, 8, 6, 4, 2]), 15, 'Test 29');
test(maxIncreasingGroups([10, 10, 10, 10, 10]), 5, 'Test 30');
test(maxIncreasingGroups([100,200,300,400,500,600,700,800,900,1000]), 10, 'Test 31');
test(maxIncreasingGroups([1, 3, 2, 5, 4, 7, 6, 9, 8, 10]), 10, 'Test 32');
test(maxIncreasingGroups([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 7, 'Test 33');
test(maxIncreasingGroups([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 15, 'Test 34');
test(maxIncreasingGroups([9, 8, 7, 6, 5, 4, 3, 2, 1]), 9, 'Test 35');
test(maxIncreasingGroups([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20]), 6, 'Test 36');
test(maxIncreasingGroups([100, 50, 25, 12, 6, 3, 1]), 7, 'Test 37');
test(maxIncreasingGroups([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14]), 20, 'Test 38');
test(maxIncreasingGroups([1,1,2,2,3,3,4,4,5,5]), 7, 'Test 39');
test(maxIncreasingGroups([5, 4, 3, 2, 1]), 5, 'Test 40');
test(maxIncreasingGroups([10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1]), 14, 'Test 41');
test(maxIncreasingGroups([1000000000, 1, 1000000000, 1, 1000000000, 1]), 5, 'Test 42');
test(maxIncreasingGroups([1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000]), 10, 'Test 43');
test(maxIncreasingGroups([1,2,2,3,3,3]), 4, 'Test 44');
test(maxIncreasingGroups([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 16, 'Test 45');
test(maxIncreasingGroups([1,2,3,4,5,6,7,8,9,10]), 10, 'Test 46');
test(maxIncreasingGroups([1000000000,1000000000,1000000000,1000000000]), 4, 'Test 47');
test(maxIncreasingGroups([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 20, 'Test 48');
test(maxIncreasingGroups([1, 1, 1, 1, 1, 1, 1, 1, 1, 1000000000]), 4, 'Test 49');
test(maxIncreasingGroups([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 4, 'Test 50');
test(maxIncreasingGroups([5,2,4,1,3]), 5, 'Test 51');
test(maxIncreasingGroups([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 20, 'Test 52');
test(maxIncreasingGroups([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]), 10, 'Test 53');
test(maxIncreasingGroups([5,4,3,2,1]), 5, 'Test 54');
test(maxIncreasingGroups([100,50,25,10,5,1]), 6, 'Test 55');
test(maxIncreasingGroups([1,2,1,2,1,2,1,2,1,2]), 5, 'Test 56');
test(maxIncreasingGroups([1, 2, 3, 4, 5]), 5, 'Test 57');
test(maxIncreasingGroups([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125]), 10, 'Test 58');
test(maxIncreasingGroups([20,10,30,5,15,25,5,35,40,10,5,15,20,5,25,30,5,40,5,10]), 20, 'Test 59');
test(maxIncreasingGroups([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 7, 'Test 60');
test(maxIncreasingGroups([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 15, 'Test 61');
test(maxIncreasingGroups([1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10]), 14, 'Test 62');
test(maxIncreasingGroups([10, 10, 10, 10, 10, 10, 10, 10, 10, 1]), 10, 'Test 63');
test(maxIncreasingGroups([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 7, 'Test 64');
test(maxIncreasingGroups([10,1,10,1,10,1,10,1,10,1,10,1,10,1,10]), 11, 'Test 65');
test(maxIncreasingGroups([1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 20, 'Test 66');
test(maxIncreasingGroups([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 15, 'Test 67');
test(maxIncreasingGroups([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), 6, 'Test 68');
test(maxIncreasingGroups([10, 10, 10, 10, 10, 10]), 6, 'Test 69');
test(maxIncreasingGroups([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), 15, 'Test 70');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

