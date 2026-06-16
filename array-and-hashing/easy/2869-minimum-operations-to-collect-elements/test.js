// Test: 2869. Minimum Operations To Collect Elements
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { minOperations } = require("./solution");

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

console.log("\n2869. Minimum Operations To Collect Elements\n");

test(minOperations([2,1,2,1,2], 2), 2, 'Test 1');
test(minOperations([2,3,1,4,5], 4), 5, 'Test 2');
test(minOperations([3,1,5,4,2], 5), 5, 'Test 3');
test(minOperations([4,3,2,1,5], 5), 5, 'Test 4');
test(minOperations([2,4,6,8,10], 3), null, 'Test 5');
test(minOperations([1,2,2,3,3], 3), 5, 'Test 6');
test(minOperations([1,2,3,4,5], 3), 5, 'Test 7');
test(minOperations([1,2,3,4,5], 5), 5, 'Test 8');
test(minOperations([5,4,3,2,1], 5), 5, 'Test 9');
test(minOperations([1,3,2,5,4], 4), 5, 'Test 10');
test(minOperations([2,2,2,1,3], 3), 3, 'Test 11');
test(minOperations([5,1,2,3,4], 1), 4, 'Test 12');
test(minOperations([3,1,5,4,2], 2), 4, 'Test 13');
test(minOperations([1,3,5,7,9], 1), 5, 'Test 14');
test(minOperations([1,3,5,7,9], 4), null, 'Test 15');
test(minOperations([1,1,1,1,1], 1), 1, 'Test 16');
test(minOperations([2,4,3,1,5], 4), 5, 'Test 17');
test(minOperations([2,4,1,3,5], 2), 5, 'Test 18');
test(minOperations([2,4,1,3,5], 4), 5, 'Test 19');
test(minOperations([5,3,1,4,2], 2), 3, 'Test 20');
test(minOperations([3,2,5,3,1], 3), 4, 'Test 21');
test(minOperations([5,4,3,2,1], 3), 3, 'Test 22');
test(minOperations([1,2,3,4,5,6,7,8,9,10], 10), 10, 'Test 23');
test(minOperations([2,4,6,8,10,1,3,5,7,9], 5), 10, 'Test 24');
test(minOperations([7,7,7,7,7,7,7,7,7,1,2,3,4,5,6], 6), 6, 'Test 25');
test(minOperations([7,6,5,4,3,2,1,7,6,5,4,3,2,1,7,6,5,4,3,2,1], 7), 7, 'Test 26');
test(minOperations([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1], 1), 1, 'Test 27');
test(minOperations([8,7,6,5,4,3,2,1,8,7,6,5,4,3,2,1], 8), 8, 'Test 28');
test(minOperations([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 10), 10, 'Test 29');
test(minOperations([50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 50), 50, 'Test 30');
test(minOperations([5,3,2,1,4,6,7], 7), 7, 'Test 31');
test(minOperations([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5], 5), 5, 'Test 32');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 25), 25, 'Test 33');
test(minOperations([7,6,5,4,3,2,1], 7), 7, 'Test 34');
test(minOperations([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 10), 10, 'Test 35');
test(minOperations([1,2,3,4,5,5,4,3,2,1], 5), 5, 'Test 36');
test(minOperations([3,2,1,3,2,1,3,2,1], 3), 3, 'Test 37');
test(minOperations([5,4,3,2,1,2,3,4,5], 5), 5, 'Test 38');
test(minOperations([3,3,3,3,3,3,2,2,2,2,1,1,1,1,1], 3), 10, 'Test 39');
test(minOperations([5,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 20), 20, 'Test 40');
test(minOperations([5,3,2,1,4,6,7,8,9,10], 10), 10, 'Test 41');
test(minOperations([4,5,3,2,1,6,7], 5), 7, 'Test 42');
test(minOperations([5,4,3,2,1,5,4,3,2,1,5,4,3,2,1], 5), 5, 'Test 43');
test(minOperations([5,5,5,5,5,5,5,5,1,2,3,4,5], 5), 5, 'Test 44');
test(minOperations([3,6,5,2,8,7,4,1,9,10], 5), 10, 'Test 45');
test(minOperations([1,2,3,4,5,1,2,3,4,5], 3), 5, 'Test 46');
test(minOperations([10,20,30,40,50,1,2,3,4,5], 5), 5, 'Test 47');
test(minOperations([3,3,3,3,3,3,3,3,3,3,1], 1), 1, 'Test 48');
test(minOperations([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1], 1), 1, 'Test 49');
test(minOperations([2,1,1,3,1,2,1,2,3], 3), 3, 'Test 50');
test(minOperations([2,1,5,4,3,6,8,7,10,9,12,11], 6), 12, 'Test 51');
test(minOperations([10,9,8,7,6,5,4,3,2,1], 10), 10, 'Test 52');
test(minOperations([10,9,8,7,6,5,4,3,2,1,11,12,13], 13), 13, 'Test 53');
test(minOperations([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 15), 15, 'Test 54');
test(minOperations([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 2), 2, 'Test 55');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 50), 50, 'Test 56');
test(minOperations([1,3,5,7,9,11,13,15,17,19,20,18,16,14,12,10,8,6,4,2], 20), 20, 'Test 57');
test(minOperations([4,3,2,1,5,6,7,8,9,10,11,12,13,14,15], 15), 15, 'Test 58');
test(minOperations([5,1,3,2,4,6,7], 5), 7, 'Test 59');
test(minOperations([7,6,5,4,3,2,1,8,9,10,11,12,13,14,15], 15), 15, 'Test 60');
test(minOperations([6,3,1,5,4,2,7,8,9,10], 10), 10, 'Test 61');
test(minOperations([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 20), 20, 'Test 62');
test(minOperations([7,1,6,2,5,3,4,8,9,10], 10), 10, 'Test 63');
test(minOperations([3,2,1,3,2,1,3,2,1,3], 3), 3, 'Test 64');
test(minOperations([1,3,2,5,4,7,6,9,8,11,10], 5), 11, 'Test 65');
test(minOperations([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5], 10), 10, 'Test 66');
test(minOperations([3,3,3,3,3,3,3,1,2,3], 3), 3, 'Test 67');
test(minOperations([9,8,7,6,5,4,3,2,1], 9), 9, 'Test 68');
test(minOperations([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4], 1), null, 'Test 69');
test(minOperations([1,3,5,7,9,11,13,15,17,19], 5), null, 'Test 70');
test(minOperations([1,3,5,7,9,2,4,6,8,10,12,14,16,18,20], 10), 15, 'Test 71');
test(minOperations([50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 25), 25, 'Test 72');
test(minOperations([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 1), null, 'Test 73');
test(minOperations([1,2,3,4,5,1,2,3,4,5], 5), 5, 'Test 74');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 45), 50, 'Test 75');
test(minOperations([7,3,5,1,2,6,4], 7), 7, 'Test 76');
test(minOperations([5,1,4,3,2,5,1,4,3,2,5,1,4,3,2,5,1,4,3,2], 5), 5, 'Test 77');
test(minOperations([4,1,2,3,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2], 4), 4, 'Test 78');
test(minOperations([3,2,1,5,4,7,6,9,8,11,10,13,12,15,14], 15), 15, 'Test 79');
test(minOperations([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5], 5), 5, 'Test 80');
test(minOperations([5,3,1,2,4,6], 4), 5, 'Test 81');
test(minOperations([1,1,2,2,3,3,4,4,5,5], 5), 9, 'Test 82');
test(minOperations([5,1,3,4,2,5,4,3,2,1], 5), 5, 'Test 83');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 15), 15, 'Test 84');
test(minOperations([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1], 10), 10, 'Test 85');
test(minOperations([5,4,3,2,1,1,2,3,4,5], 5), 5, 'Test 86');
test(minOperations([5,3,6,1,2,8,4,7,9,10], 10), 10, 'Test 87');
test(minOperations([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 10), 10, 'Test 88');
test(minOperations([5,4,3,2,1,6,7,8,9,10], 10), 10, 'Test 89');
test(minOperations([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6], 6), 21, 'Test 90');
test(minOperations([5,3,1,4,2,3,1,4,2,5], 5), 5, 'Test 91');
test(minOperations([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 1), null, 'Test 92');
test(minOperations([10,9,8,7,6,5,4,3,2,1], 5), 5, 'Test 93');
test(minOperations([4,3,2,1,4,3,2,1], 4), 4, 'Test 94');
test(minOperations([1,3,2,5,4,7,6,9,8,10], 10), 10, 'Test 95');
test(minOperations([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 15), 15, 'Test 96');
test(minOperations([3,5,1,2,4,6,7,8,9,10,11,12,13,14,15], 15), 15, 'Test 97');
test(minOperations([1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 10), 18, 'Test 98');
test(minOperations([3,6,5,3,7,8,9,1,2,4,5,6,7,8,9], 9), 12, 'Test 99');
test(minOperations([4,4,4,4,4,1,2,3,4,5], 5), 5, 'Test 100');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

