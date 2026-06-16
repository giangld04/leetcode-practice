// Test: 2073. Time Needed To Buy Tickets
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { timeRequiredToBuy } = require("./solution");

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

console.log("\n2073. Time Needed To Buy Tickets\n");

test(timeRequiredToBuy([5,1,1,1], 0), 8, 'Test 1');
test(timeRequiredToBuy([4,3,2,1], 1), 9, 'Test 2');
test(timeRequiredToBuy([100,100,100], 1), 299, 'Test 3');
test(timeRequiredToBuy([1], 0), 1, 'Test 4');
test(timeRequiredToBuy([10,10,10], 2), 30, 'Test 5');
test(timeRequiredToBuy([10,10,10], 0), 28, 'Test 6');
test(timeRequiredToBuy([10,10,10], 1), 29, 'Test 7');
test(timeRequiredToBuy([1,2,3,4,5], 4), 15, 'Test 8');
test(timeRequiredToBuy([2,3,2], 2), 6, 'Test 9');
test(timeRequiredToBuy([100,100,100], 2), 300, 'Test 10');
test(timeRequiredToBuy([1,1,1,1], 2), 3, 'Test 11');
test(timeRequiredToBuy([1,1,1,1], 1), 2, 'Test 12');
test(timeRequiredToBuy([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10], 19), 110, 'Test 13');
test(timeRequiredToBuy([5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1], 10), 59, 'Test 14');
test(timeRequiredToBuy([9, 3, 5, 7, 1, 2, 6], 4), 5, 'Test 15');
test(timeRequiredToBuy([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 91, 'Test 16');
test(timeRequiredToBuy([7,2,9,1,8,3,6,4,5], 6), 39, 'Test 17');
test(timeRequiredToBuy([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], 15), 86, 'Test 18');
test(timeRequiredToBuy([1,2,3,4,5,4,3,2,1], 8), 9, 'Test 19');
test(timeRequiredToBuy([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4], 15), 76, 'Test 20');
test(timeRequiredToBuy([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), 91, 'Test 21');
test(timeRequiredToBuy([25, 30, 15, 20, 10], 3), 85, 'Test 22');
test(timeRequiredToBuy([3,1,4,1,5,9,2,6,5,3,5], 5), 44, 'Test 23');
test(timeRequiredToBuy([3,3,3,3,3,3,3,3,3,3], 4), 25, 'Test 24');
test(timeRequiredToBuy([5,2,3,1,4], 2), 11, 'Test 25');
test(timeRequiredToBuy([5,1,2,3,4], 0), 15, 'Test 26');
test(timeRequiredToBuy([3,1,5,4,2], 3), 14, 'Test 27');
test(timeRequiredToBuy([7, 8, 9, 10, 11, 12, 13, 14, 15], 8), 99, 'Test 28');
test(timeRequiredToBuy([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 9), 10, 'Test 29');
test(timeRequiredToBuy([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 8), 29, 'Test 30');
test(timeRequiredToBuy([9,3,8,4,6,7,5,2,1], 1), 19, 'Test 31');
test(timeRequiredToBuy([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 19), 20, 'Test 32');
test(timeRequiredToBuy([1, 5, 3, 4, 2, 6, 7, 8], 5), 31, 'Test 33');
test(timeRequiredToBuy([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 15), 28, 'Test 34');
test(timeRequiredToBuy([3,1,4,1,5,9,2,6,5,3,5,9,2,6,5,3,5,9,2,6,5,3,5,9,2,6,5,3,5,9,2,6,5,3,5,9,2,6,5,3,5,9,2,6,5,3,5,9,2,6,5,3,5,9,2], 10), 192, 'Test 35');
test(timeRequiredToBuy([5,4,3,2,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1], 19), 20, 'Test 36');
test(timeRequiredToBuy([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 0), 81, 'Test 37');
test(timeRequiredToBuy([10,20,30,40,50,60,70,80,90,100], 4), 395, 'Test 38');
test(timeRequiredToBuy([1, 2, 3, 4, 3, 2, 1], 5), 12, 'Test 39');
test(timeRequiredToBuy([5,3,5,2,4,1,3], 3), 11, 'Test 40');
test(timeRequiredToBuy([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4], 10), 43, 'Test 41');
test(timeRequiredToBuy([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7), 85, 'Test 42');
test(timeRequiredToBuy([2,2,2,2,2,2,2,2,2,2], 5), 16, 'Test 43');
test(timeRequiredToBuy([5,5,5,5,5,5,5,5,5,5], 4), 45, 'Test 44');
test(timeRequiredToBuy([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 9), 90, 'Test 45');
test(timeRequiredToBuy([1,2,3,4,5,4,3,2,1], 4), 25, 'Test 46');
test(timeRequiredToBuy([2,6,3,4,5,1], 2), 13, 'Test 47');
test(timeRequiredToBuy([10,9,8,7,6,5,4,3,2,1], 9), 10, 'Test 48');
test(timeRequiredToBuy([20,1,20,1,20], 2), 61, 'Test 49');
test(timeRequiredToBuy([25, 30, 5, 10, 15], 1), 85, 'Test 50');
test(timeRequiredToBuy([1,2,1,2,1,2,1,2,1,2], 8), 9, 'Test 51');
test(timeRequiredToBuy([4,4,4,4,4,4,4,4,4,4], 4), 35, 'Test 52');
test(timeRequiredToBuy([10,9,8,7,6,5,4,3,2,1], 5), 40, 'Test 53');
test(timeRequiredToBuy([9,8,7,6,5,4,3,2,1], 0), 45, 'Test 54');
test(timeRequiredToBuy([1, 3, 2, 4, 5, 6, 7, 8, 9, 10], 0), 1, 'Test 55');
test(timeRequiredToBuy([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2], 99), Error: list index out of range, 'Test 56');
test(timeRequiredToBuy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), 156, 'Test 57');
test(timeRequiredToBuy([5,4,3,2,1], 0), 15, 'Test 58');
test(timeRequiredToBuy([4,2,3,3,1,4,2,3], 5), 22, 'Test 59');
test(timeRequiredToBuy([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 50), 104, 'Test 60');
test(timeRequiredToBuy([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 19), 210, 'Test 61');
test(timeRequiredToBuy([5,6,7,8,9], 2), 30, 'Test 62');
test(timeRequiredToBuy([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 49), 162, 'Test 63');
test(timeRequiredToBuy([1,1,1,1,1,1,1,1,1,1], 5), 6, 'Test 64');
test(timeRequiredToBuy([10,15,5,20,25,30,5], 4), 104, 'Test 65');
test(timeRequiredToBuy([10,9,8,7,6,5,4,3,2,1], 0), 55, 'Test 66');
test(timeRequiredToBuy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4), 35, 'Test 67');
test(timeRequiredToBuy([1,5,2,3,4,5], 5), 20, 'Test 68');
test(timeRequiredToBuy([3,1,5,2,4,6], 3), 9, 'Test 69');
test(timeRequiredToBuy([20,15,10,5,1], 0), 51, 'Test 70');
test(timeRequiredToBuy([1,2,3,4,5,6,7,8,9,10], 0), 1, 'Test 71');
test(timeRequiredToBuy([2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1], 19), 20, 'Test 72');
test(timeRequiredToBuy([1,2,3,4,5,6,7,8,9,10], 5), 41, 'Test 73');
test(timeRequiredToBuy([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 11, 'Test 74');
test(timeRequiredToBuy([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), 156, 'Test 75');
test(timeRequiredToBuy([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 9), 30, 'Test 76');
test(timeRequiredToBuy([10, 1, 10, 1, 10, 1, 10], 3), 4, 'Test 77');
test(timeRequiredToBuy([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 0), 163, 'Test 78');
test(timeRequiredToBuy([10,5,4,6,3,8,2], 4), 19, 'Test 79');
test(timeRequiredToBuy([1,2,3,4,5,6,7,8,9,10], 9), 55, 'Test 80');
test(timeRequiredToBuy([2,5,3,4,1,2], 2), 13, 'Test 81');
test(timeRequiredToBuy([10,20,30,40,50], 2), 118, 'Test 82');
test(timeRequiredToBuy([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8], 0), 393, 'Test 83');
test(timeRequiredToBuy([3,2,1,4,5,6], 5), 21, 'Test 84');
test(timeRequiredToBuy([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 25), 238, 'Test 85');
test(timeRequiredToBuy([4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 5), 36, 'Test 86');
test(timeRequiredToBuy([20, 15, 10, 5, 1], 1), 46, 'Test 87');
test(timeRequiredToBuy([5,4,3,2,1,5,4,3,2,1], 9), 10, 'Test 88');
test(timeRequiredToBuy([3, 3, 3, 3, 3], 2), 13, 'Test 89');
test(timeRequiredToBuy([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 5), 96, 'Test 90');
test(timeRequiredToBuy([50,50,50,50,50], 2), 248, 'Test 91');
test(timeRequiredToBuy([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 7), 38, 'Test 92');
test(timeRequiredToBuy([20,19,18,17,16,15,14,13,12,11], 9), 110, 'Test 93');
test(timeRequiredToBuy([7,8,9,10,11,12,13,14], 5), 79, 'Test 94');
test(timeRequiredToBuy([3,5,2,4,1], 2), 8, 'Test 95');
test(timeRequiredToBuy([3,3,3,3,3,3,3,3,3,3], 3), 24, 'Test 96');
test(timeRequiredToBuy([1,1,1,2,2,2,3,3,3], 6), 16, 'Test 97');
test(timeRequiredToBuy([5, 4, 3, 2, 1], 2), 12, 'Test 98');
test(timeRequiredToBuy([1,1,2,2,3,3,4,4,5,5], 8), 29, 'Test 99');
test(timeRequiredToBuy([50, 30, 20, 10, 90, 80, 70, 60], 4), 410, 'Test 100');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

