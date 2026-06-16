// Test: 3396. Minimum Number Of Operations To Make Elements In Array Distinct
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { minimumOperations } = require("./solution");

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

console.log("\n3396. Minimum Number Of Operations To Make Elements In Array Distinct\n");

test(minimumOperations([4,5,6,4,4]), 2, 'Test 1');
test(minimumOperations([1,1,1,1,1,1,1,1,1]), 3, 'Test 2');
test(minimumOperations([10,20,30,10,20,30,10,20,30]), 2, 'Test 3');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10]), 0, 'Test 4');
test(minimumOperations([1]), 0, 'Test 5');
test(minimumOperations([6,7,8,9]), 0, 'Test 6');
test(minimumOperations([1,1,2,2,3,3,4,4,5,5]), 3, 'Test 7');
test(minimumOperations([10,20,30,40,50]), 0, 'Test 8');
test(minimumOperations([5,5,5,5,5]), 2, 'Test 9');
test(minimumOperations([1,2,2,3,3,3]), 2, 'Test 10');
test(minimumOperations([1,2,3,1,2,3,1,2,3]), 2, 'Test 11');
test(minimumOperations([1,1,2]), 1, 'Test 12');
test(minimumOperations([10,10,10,10,10,10,10,10,10]), 3, 'Test 13');
test(minimumOperations([1,1,1,1,1]), 2, 'Test 14');
test(minimumOperations([1,1,1,1,1,1,1,1]), 3, 'Test 15');
test(minimumOperations([10,20,30,10,20]), 1, 'Test 16');
test(minimumOperations([1,2,2,3,3,3,4,4,4,4]), 3, 'Test 17');
test(minimumOperations([1,2]), 0, 'Test 18');
test(minimumOperations([1,2,3]), 0, 'Test 19');
test(minimumOperations([5,5,5,5,5,5,5,5,5,5]), 3, 'Test 20');
test(minimumOperations([5,5,5,5,5,5,5]), 2, 'Test 21');
test(minimumOperations([1,1,1,1,1,1]), 2, 'Test 22');
test(minimumOperations([1,1,1,2,2,2,3,3,3]), 3, 'Test 23');
test(minimumOperations([1,2,3,4,2,3,3,5,7]), 2, 'Test 24');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1]), 1, 'Test 25');
test(minimumOperations([5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10]), 6, 'Test 26');
test(minimumOperations([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 100, 99, 98, 97, 96, 95]), 2, 'Test 27');
test(minimumOperations([100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100]), 7, 'Test 28');
test(minimumOperations([1,2,3,4,5,6,7,8,9,1,1,1,1,1,1,1,1,1,1]), 6, 'Test 29');
test(minimumOperations([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 6, 'Test 30');
test(minimumOperations([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 5, 'Test 31');
test(minimumOperations([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 6, 'Test 32');
test(minimumOperations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 7, 'Test 33');
test(minimumOperations([1,1,2,3,4,5,6,7,8,9,10,1,1,2,3,4,5,6,7,8,9,10,1,1,2,3,4,5,6,7,8,9,10]), 8, 'Test 34');
test(minimumOperations([10,20,30,40,50,10,20,30,40,50,10,20,30,40,50,10,20,30,40,50,10,20,30,40,50,10,20,30,40,50]), 9, 'Test 35');
test(minimumOperations([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12]), 8, 'Test 36');
test(minimumOperations([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), 3, 'Test 37');
test(minimumOperations([100,100,100,100,100,99,99,99,99,99,98,98,98,98,98]), 5, 'Test 38');
test(minimumOperations([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 3, 'Test 39');
test(minimumOperations([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7]), 7, 'Test 40');
test(minimumOperations([10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30]), 3, 'Test 41');
test(minimumOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 7, 'Test 42');
test(minimumOperations([1,2,3,1,2,3,1,2,3,1,2,3]), 3, 'Test 43');
test(minimumOperations([42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42]), 8, 'Test 44');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 7, 'Test 45');
test(minimumOperations([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5]), 8, 'Test 46');
test(minimumOperations([5,5,5,5,5,5,1,2,3,4,5,5,5,5,5,5,6,7,8,9,10,10,10,10,10,10]), 9, 'Test 47');
test(minimumOperations([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), 10, 'Test 48');
test(minimumOperations([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 7, 'Test 49');
test(minimumOperations([5, 6, 7, 8, 9, 5, 6, 7, 8, 9, 5]), 2, 'Test 50');
test(minimumOperations([20, 20, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 1, 'Test 51');
test(minimumOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 19, 'Test 52');
test(minimumOperations([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), 6, 'Test 53');
test(minimumOperations([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6]), 7, 'Test 54');
test(minimumOperations([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 10, 'Test 55');
test(minimumOperations([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 4, 'Test 56');
test(minimumOperations([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 7, 'Test 57');
test(minimumOperations([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 3, 'Test 58');
test(minimumOperations([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 12, 'Test 59');
test(minimumOperations([1, 2, 1, 3, 2, 1, 4, 3, 2, 1, 5, 4, 3, 2, 1, 6, 5, 4, 3, 2, 1]), 5, 'Test 60');
test(minimumOperations([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4]), 7, 'Test 61');
test(minimumOperations([10,20,30,10,20,30,10,20,30,10,20,30,10,20,30]), 4, 'Test 62');
test(minimumOperations([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 10, 'Test 63');
test(minimumOperations([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 30, 30]), 20, 'Test 64');
test(minimumOperations([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), 6, 'Test 65');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10]), 4, 'Test 66');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), 7, 'Test 67');
test(minimumOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 7, 'Test 68');
test(minimumOperations([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14]), 9, 'Test 69');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 0, 'Test 70');
test(minimumOperations([5,5,5,5,5,6,6,6,6,6,7,7,7,7,7]), 5, 'Test 71');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5]), 2, 'Test 72');
test(minimumOperations([9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5]), 5, 'Test 73');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 0, 'Test 74');
test(minimumOperations([5,6,7,5,6,7,5,6,7,5,6,7,5,6,7,5]), 5, 'Test 75');
test(minimumOperations([10,20,30,40,50,10,20,30,40,50,10,20,30,40,50]), 4, 'Test 76');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 7, 'Test 77');
test(minimumOperations([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10]), 10, 'Test 78');
test(minimumOperations([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0]), 4, 'Test 79');
test(minimumOperations([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 22, 'Test 80');
test(minimumOperations([99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70]), 0, 'Test 81');
test(minimumOperations([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]), 5, 'Test 82');
test(minimumOperations([10, 10, 10, 20, 20, 20, 30, 30, 30, 10, 20, 30, 10, 20, 30]), 4, 'Test 83');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 0, 'Test 84');
test(minimumOperations([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4]), 13, 'Test 85');
test(minimumOperations([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]), 4, 'Test 86');
test(minimumOperations([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), 7, 'Test 87');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5]), 2, 'Test 88');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 4, 'Test 89');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 0, 'Test 90');
test(minimumOperations([1, 2, 3, 1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9, 7, 8, 9, 10, 11, 12, 10, 11, 12, 13, 14, 15, 13, 14, 15, 16, 17, 18, 16, 17, 18, 19, 20, 21, 19, 20, 21, 22, 23, 24, 22, 23, 24, 25, 26, 27, 25, 26, 27, 28, 29, 30]), 17, 'Test 91');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 10, 'Test 92');
test(minimumOperations([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6]), 10, 'Test 93');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 4, 'Test 94');
test(minimumOperations([7, 8, 9, 10, 11, 12, 7, 8, 9, 10, 11, 12, 7, 8, 9, 10, 11, 12, 7]), 5, 'Test 95');
test(minimumOperations([7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]), 0, 'Test 96');
test(minimumOperations([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]), 6, 'Test 97');
test(minimumOperations([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), 5, 'Test 98');
test(minimumOperations([10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20, 30]), 5, 'Test 99');
test(minimumOperations([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 0, 'Test 100');
test(minimumOperations([7,8,9,7,8,9,7,8,9,7,8,9,7,8,9,7,8,9,7,8,9,7,8,9,7,8,9,7,8,9]), 9, 'Test 101');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6]), 2, 'Test 102');
test(minimumOperations([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 6, 'Test 103');
test(minimumOperations([1, 2, 3, 4, 5, 1, 2, 3, 6, 7, 8, 9, 10, 1, 2]), 3, 'Test 104');
test(minimumOperations([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 5, 'Test 105');
test(minimumOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 7, 'Test 106');
test(minimumOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 7, 'Test 107');
test(minimumOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 5, 'Test 108');
test(minimumOperations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 6, 'Test 109');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]), 2, 'Test 110');
test(minimumOperations([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]), 5, 'Test 111');
test(minimumOperations([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7]), 7, 'Test 112');
test(minimumOperations([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]), 3, 'Test 113');
test(minimumOperations([1,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 114');
test(minimumOperations([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 7, 'Test 115');
test(minimumOperations([9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1]), 3, 'Test 116');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

// Auto-mark DONE when all tests pass
if (!failed) {
  const path = require("path");
  const fs = require("fs");
  const dir = __dirname;
  const folder = path.basename(dir);
  if (!folder.startsWith("DONE-")) {
    const parent = path.dirname(dir);
    const newDir = path.join(parent, "DONE-" + folder);
    fs.renameSync(dir, newDir);
    const readme = path.join(newDir, "README.md");
    if (fs.existsSync(readme)) {
      let c = fs.readFileSync(readme, "utf-8");
      if (!c.includes("<!-- SOLVED -->")) {
        c = c.replace(/^(# .+)$/m, "$1 ✅\n<!-- SOLVED -->");
        fs.writeFileSync(readme, c);
      }
    }
    console.log("✅ DONE → " + "DONE-" + folder);
  }
}
