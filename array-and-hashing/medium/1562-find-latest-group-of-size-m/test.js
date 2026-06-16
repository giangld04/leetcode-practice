// Test: 1562. Find Latest Group Of Size M
// 106 test cases from LeetCodeDataset
// Run: node test.js

const { findLatestStep } = require("./solution");

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

console.log("\n1562. Find Latest Group Of Size M\n");

test(findLatestStep([1,2,3,4,5], 3), 3, 'Test 1');
test(findLatestStep([1,3,5,2,4], 1), 4, 'Test 2');
test(findLatestStep([2,1,3,5,4], 1), 4, 'Test 3');
test(findLatestStep([3,5,1,2,4], 1), 4, 'Test 4');
test(findLatestStep([5,4,3,2,1], 1), 1, 'Test 5');
test(findLatestStep([5,4,3,2,1], 2), 2, 'Test 6');
test(findLatestStep([3,1,5,4,2], 2), -1, 'Test 7');
test(findLatestStep([1,3,2,5,4], 1), 4, 'Test 8');
test(findLatestStep([1,3,5,2,4], 2), -1, 'Test 9');
test(findLatestStep([2,5,8,1,4,7,10,3,6,9], 3), -1, 'Test 10');
test(findLatestStep([15,1,13,2,14,3,12,4,11,5,10,6,9,7,8], 5), 11, 'Test 11');
test(findLatestStep([1, 2, 3, 4, 5, 6], 3), 3, 'Test 12');
test(findLatestStep([8,5,10,1,9,3,6,7,4,2], 2), 7, 'Test 13');
test(findLatestStep([3,2,5,1,4,6,7,8], 3), 4, 'Test 14');
test(findLatestStep([3,6,2,8,1,9,4,7,5,10], 3), 6, 'Test 15');
test(findLatestStep([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 6), 6, 'Test 16');
test(findLatestStep([1,2,3,4,5,6,7,8,9,10], 3), 3, 'Test 17');
test(findLatestStep([5,10,1,2,6,8,4,7,9,3], 5), 8, 'Test 18');
test(findLatestStep([1, 2, 4, 3, 6, 5, 8, 7, 10, 9], 3), -1, 'Test 19');
test(findLatestStep([1,10,5,6,7,8,9,2,3,4], 3), 9, 'Test 20');
test(findLatestStep([5, 3, 1, 2, 4, 9, 7, 6, 8, 10], 1), 8, 'Test 21');
test(findLatestStep([1,2,5,6,3,4,7,8,10,9], 3), 5, 'Test 22');
test(findLatestStep([1, 3, 5, 7, 9, 2, 4, 6, 8, 10], 2), -1, 'Test 23');
test(findLatestStep([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), 5, 'Test 24');
test(findLatestStep([1, 4, 7, 10, 2, 5, 8, 11, 3, 6, 9, 12], 2), 10, 'Test 25');
test(findLatestStep([5, 1, 9, 2, 6, 3, 7, 4, 8, 10], 3), 7, 'Test 26');
test(findLatestStep([10,1,20,2,19,3,18,4,17,5,16,6,15,7,14,8,13,9,12,11], 7), 16, 'Test 27');
test(findLatestStep([1, 5, 9, 2, 6, 3, 7, 4, 8, 10], 2), 6, 'Test 28');
test(findLatestStep([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 1, 'Test 29');
test(findLatestStep([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 6), 6, 'Test 30');
test(findLatestStep([2,1,4,3,6,5,8,7,10,9], 2), 3, 'Test 31');
test(findLatestStep([1,2,3,4,5,6,7,8,9,10], 10), 10, 'Test 32');
test(findLatestStep([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 1), 1, 'Test 33');
test(findLatestStep([2, 4, 1, 6, 5, 3], 2), 5, 'Test 34');
test(findLatestStep([1,2,3,4,5,6,7,8,9,10], 5), 5, 'Test 35');
test(findLatestStep([10,9,8,7,6,5,4,3,2,1], 4), 4, 'Test 36');
test(findLatestStep([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 10), 10, 'Test 37');
test(findLatestStep([6,2,5,9,7,8,3,1,10,4], 5), 8, 'Test 38');
test(findLatestStep([1, 6, 4, 3, 2, 5], 1), 5, 'Test 39');
test(findLatestStep([5,1,6,3,8,2,7,10,4,9], 3), 8, 'Test 40');
test(findLatestStep([1,15,2,14,3,13,4,12,5,11,6,10,7,9,8], 7), 14, 'Test 41');
test(findLatestStep([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2), 2, 'Test 42');
test(findLatestStep([10,5,2,7,1,8,3,6,9,4], 3), 9, 'Test 43');
test(findLatestStep([10, 8, 6, 4, 2, 1, 3, 5, 7, 9], 1), 9, 'Test 44');
test(findLatestStep([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 5, 'Test 45');
test(findLatestStep([6, 5, 4, 3, 2, 1], 3), 3, 'Test 46');
test(findLatestStep([7, 3, 10, 8, 6, 9, 1, 5, 4, 2], 4), -1, 'Test 47');
test(findLatestStep([1, 2, 5, 4, 3, 6, 7, 8, 9, 10], 2), 4, 'Test 48');
test(findLatestStep([10,1,2,3,4,5,6,7,8,9], 9), -1, 'Test 49');
test(findLatestStep([3,6,1,9,7,8,2,5,10,4], 3), 9, 'Test 50');
test(findLatestStep([3, 1, 7, 5, 9, 2, 8, 6, 10, 4], 4), -1, 'Test 51');
test(findLatestStep([6,7,8,1,2,3,4,5,12,11,9,10], 6), -1, 'Test 52');
test(findLatestStep([1,2,3,4,5,6,7,8,9,10], 1), 1, 'Test 53');
test(findLatestStep([10, 5, 1, 6, 3, 8, 9, 2, 7, 4], 2), 8, 'Test 54');
test(findLatestStep([3, 5, 2, 1, 4, 6, 8, 7, 10, 9], 1), 9, 'Test 55');
test(findLatestStep([1,10,2,9,3,8,4,7,5,6], 4), 9, 'Test 56');
test(findLatestStep([1,11,2,12,3,13,4,14,5,15,6,16,7,17,8,18,9,19,10,20], 10), -1, 'Test 57');
test(findLatestStep([3, 1, 5, 7, 6, 2, 8, 4, 9, 10], 2), -1, 'Test 58');
test(findLatestStep([1, 2, 5, 6, 3, 4, 9, 10, 7, 8], 2), 9, 'Test 59');
test(findLatestStep([1,10,3,8,5,12,7,2,9,4,6,11], 4), 10, 'Test 60');
test(findLatestStep([10,9,8,7,6,5,4,3,2,1], 5), 5, 'Test 61');
test(findLatestStep([6, 5, 8, 4, 7, 10, 9, 1, 2, 3], 3), 4, 'Test 62');
test(findLatestStep([9,5,10,1,2,3,4,6,7,8], 4), -1, 'Test 63');
test(findLatestStep([3,1,4,2,5,6,7,8,9,10], 3), -1, 'Test 64');
test(findLatestStep([6, 2, 3, 1, 5, 4], 2), 5, 'Test 65');
test(findLatestStep([1,3,5,7,9,2,4,6,8,10], 1), 8, 'Test 66');
test(findLatestStep([6, 3, 1, 5, 4, 2], 1), 5, 'Test 67');
test(findLatestStep([5,1,9,3,7,2,8,6,4,10], 2), -1, 'Test 68');
test(findLatestStep([5,2,1,8,3,4,7,6,10,9], 2), 7, 'Test 69');
test(findLatestStep([10, 2, 8, 4, 6, 3, 9, 5, 7, 1], 3), 8, 'Test 70');
test(findLatestStep([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 3), 3, 'Test 71');
test(findLatestStep([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5), 5, 'Test 72');
test(findLatestStep([5, 1, 6, 3, 4, 2], 1), 5, 'Test 73');
test(findLatestStep([10, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4), 5, 'Test 74');
test(findLatestStep([5,1,9,10,3,7,4,6,8,2], 3), 7, 'Test 75');
test(findLatestStep([10,9,8,7,6,5,4,3,2,1], 3), 3, 'Test 76');
test(findLatestStep([6, 4, 2, 8, 10, 1, 3, 5, 7, 9], 2), 6, 'Test 77');
test(findLatestStep([10,9,8,7,6,5,4,3,2,1], 1), 1, 'Test 78');
test(findLatestStep([3, 1, 4, 2, 6, 5, 7, 10, 9, 8], 4), 5, 'Test 79');
test(findLatestStep([2, 4, 6, 8, 10, 1, 3, 5, 7, 9], 2), 6, 'Test 80');
test(findLatestStep([5,1,7,10,3,8,4,6,9,2], 4), -1, 'Test 81');
test(findLatestStep([3,6,1,8,2,7,4,9,5,10], 1), 5, 'Test 82');
test(findLatestStep([1,10,2,9,3,8,4,7,5,6,11,20,12,19,13,18,14,17,15,16], 8), -1, 'Test 83');
test(findLatestStep([1,2,4,5,3,7,6,8,10,9], 2), 4, 'Test 84');
test(findLatestStep([6,3,5,1,2,4,9,7,8,10], 4), -1, 'Test 85');
test(findLatestStep([2,4,6,8,10,1,3,5,7,9], 5), -1, 'Test 86');
test(findLatestStep([1, 5, 3, 9, 7, 2, 6, 10, 4, 8], 1), 7, 'Test 87');
test(findLatestStep([7, 5, 3, 1, 9, 10, 8, 6, 4, 2], 5), -1, 'Test 88');
test(findLatestStep([5, 3, 8, 6, 2, 4, 1, 7, 9, 10], 3), -1, 'Test 89');
test(findLatestStep([3, 2, 5, 4, 8, 7, 10, 9, 6, 1], 4), 8, 'Test 90');
test(findLatestStep([1, 6, 10, 3, 5, 9, 2, 4, 8, 7], 4), -1, 'Test 91');
test(findLatestStep([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 4), 9, 'Test 92');
test(findLatestStep([10,9,8,7,6,5,4,3,2,1], 2), 2, 'Test 93');
test(findLatestStep([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4), 4, 'Test 94');
test(findLatestStep([5, 3, 1, 2, 4, 6, 7, 8, 9, 10], 3), 4, 'Test 95');
test(findLatestStep([5, 1, 9, 3, 7, 2, 8, 10, 4, 6], 5), 9, 'Test 96');
test(findLatestStep([3, 6, 9, 2, 5, 8, 1, 4, 7, 10], 2), 8, 'Test 97');
test(findLatestStep([10, 2, 6, 4, 7, 9, 1, 8, 5, 3], 5), 8, 'Test 98');
test(findLatestStep([5,6,7,8,9,10,1,2,3,4], 3), 9, 'Test 99');
test(findLatestStep([5,2,8,10,3,7,4,6,9,1], 2), 7, 'Test 100');
test(findLatestStep([10, 8, 6, 4, 2, 1, 3, 5, 7, 9], 2), 6, 'Test 101');
test(findLatestStep([1,2,3,4,5,6,7,8,9,10], 4), 4, 'Test 102');
test(findLatestStep([10,1,9,2,8,3,7,4,6,5], 4), 9, 'Test 103');
test(findLatestStep([1, 2, 5, 4, 7, 3, 8, 6, 9, 10], 2), 7, 'Test 104');
test(findLatestStep([5, 3, 1, 7, 9, 10, 8, 6, 4, 2], 3), -1, 'Test 105');
test(findLatestStep([6,1,4,5,3,7,9,8,10,2], 2), -1, 'Test 106');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

