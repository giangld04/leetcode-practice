// Test: 81. Search In Rotated Sorted Array Ii
// 77 test cases from LeetCodeDataset
// Run: node test.js

const { search } = require("./solution");

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

console.log("\n81. Search In Rotated Sorted Array Ii\n");

test(search([4,5,6,7,0,1,2], 6), true, 'Test 1');
test(search([1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1], 2), true, 'Test 2');
test(search([4,5,6,6,7,0,1,2,4,4], 4), true, 'Test 3');
test(search([3,1], 2), false, 'Test 4');
test(search([4,5,6,7,0,1,2], 3), false, 'Test 5');
test(search([4,5,6,7,0,1,2], 0), true, 'Test 6');
test(search([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,3,3], 1), true, 'Test 7');
test(search([1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1], 3), false, 'Test 8');
test(search([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,1], 1), true, 'Test 9');
test(search([3,1], 1), true, 'Test 10');
test(search([1], 1), true, 'Test 11');
test(search([5,1,3], 3), true, 'Test 12');
test(search([2,5,6,0,0,1,2], 3), false, 'Test 13');
test(search([4,5,6,6,7,0,1,2,4,4], 7), true, 'Test 14');
test(search([1,2,3,4,5,6,7,8,9,10], 5), true, 'Test 15');
test(search([2,5,6,0,0,1,2], 0), true, 'Test 16');
test(search([10,9,8,7,6,5,4,3,2,1], 1), true, 'Test 17');
test(search([5,1,3], 5), true, 'Test 18');
test(search([1,3,5], 1), true, 'Test 19');
test(search([1,0,1,1,1], 0), true, 'Test 20');
test(search([1], 0), false, 'Test 21');
test(search([1], 2), false, 'Test 22');
test(search([1,3,5], 5), true, 'Test 23');
test(search([3,1], 3), true, 'Test 24');
test(search([2,2,2,2,2,3,4,2], 3), true, 'Test 25');
test(search([11,13,15,17,19,2,4,6,8,10], 7), false, 'Test 26');
test(search([7,8,9,1,2,3,4,5,6], 9), true, 'Test 27');
test(search([6,7,1,2,3,4,5], 3), true, 'Test 28');
test(search([5,5,5,1,2,3,4,5], 6), false, 'Test 29');
test(search([4,5,6,7,0,1,2,3], 6), true, 'Test 30');
test(search([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,0], 18), true, 'Test 31');
test(search([4,5,6,7,0,1,2,3], 10), false, 'Test 32');
test(search([6,7,8,9,10,11,12,1,2,3,4,5], 10), true, 'Test 33');
test(search([11,13,15,17,19,21,3,5,7,9], 3), true, 'Test 34');
test(search([5,6,7,8,9,0,1,2,3,4], 9), true, 'Test 35');
test(search([1,2,2,3,4,5,6,7,8,9,0], 0), true, 'Test 36');
test(search([15,16,17,18,19,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], 3), true, 'Test 37');
test(search([10,11,12,13,14,15,0,1,2,3,4,5,6,7,8,9], 15), true, 'Test 38');
test(search([5,5,5,1,2,3,4,5], 1), true, 'Test 39');
test(search([1,2,3,4,5,6,7,8,9,10,0], 0), true, 'Test 40');
test(search([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,0], 19), true, 'Test 41');
test(search([2,2,2,2,2,2,2,2,2,2], 2), true, 'Test 42');
test(search([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 0), true, 'Test 43');
test(search([2,2,2,0,2,2], 0), true, 'Test 44');
test(search([5,5,5,5,5,5,5,5,5,5,5,5,1,2,3,4], 1), true, 'Test 45');
test(search([2,2,2,0,1,2], 3), false, 'Test 46');
test(search([2,2,2,0,1,2], 0), true, 'Test 47');
test(search([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 15), true, 'Test 48');
test(search([1,1,1,1,1,1,1,1,1,1], 2), false, 'Test 49');
test(search([5,1,3,4,5,5,5,5,5], 1), true, 'Test 50');
test(search([5,6,7,8,9,0,1,2,3,4], 1), true, 'Test 51');
test(search([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,0], 20), false, 'Test 52');
test(search([3,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 1), true, 'Test 53');
test(search([4,5,6,7,0,1,2,3], 0), true, 'Test 54');
test(search([2,3,4,5,6,7,8,9,0,1], 0), true, 'Test 55');
test(search([11,13,15,17,19,2,4,6,8,10], 5), false, 'Test 56');
test(search([9,9,9,9,9,1,1,1,1,1], 1), true, 'Test 57');
test(search([1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 3), true, 'Test 58');
test(search([4,5,6,7,8,1,2,3], 8), true, 'Test 59');
test(search([2,2,2,2,2,2,2,3,1,2,2,2,2,2,2,2], 3), true, 'Test 60');
test(search([8,8,8,8,8,8,8,8,8,8,0,8,8,8,8,8,8,8,8,8], 1), false, 'Test 61');
test(search([0,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1], 9), true, 'Test 62');
test(search([4,4,4,5,6,7,8,9,10,0,1,2,3,4,4,4,4,4], 0), true, 'Test 63');
test(search([5,5,5,5,1,5,5,5,5,5,5,5], 1), true, 'Test 64');
test(search([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 1), false, 'Test 65');
test(search([4,5,6,7,0,1,2,3,4,4,4,4,4,4,4,4,4,4,4,4], 0), true, 'Test 66');
test(search([20,21,22,23,24,25,26,27,28,29,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 25), true, 'Test 67');
test(search([5,6,7,8,9,10,1,2,3,4], 10), true, 'Test 68');
test(search([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7], 5), true, 'Test 69');
test(search([8,8,8,8,8,8,8,8,8,8,0,8,8,8,8,8,8,8,8,8], 0), true, 'Test 70');
test(search([3,4,5,6,1,2], 1), true, 'Test 71');
test(search([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7), true, 'Test 72');
test(search([10,10,10,10,10,1,2,3,4,5], 1), true, 'Test 73');
test(search([10,15,20,25,30,5,10], 25), true, 'Test 74');
test(search([11,13,15,17,19,2,4,6,8,10], 17), true, 'Test 75');
test(search([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59], 29), true, 'Test 76');
test(search([1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1], 2), true, 'Test 77');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

