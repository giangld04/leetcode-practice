// Test: 287. Find The Duplicate Number
// 87 test cases from LeetCodeDataset
// Run: node test.js

const { findDuplicate } = require("./solution");

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

console.log("\n287. Find The Duplicate Number\n");

test(findDuplicate([1,2,3,3,3,3]), 3, 'Test 1');
test(findDuplicate([1,2,2,3,4]), 2, 'Test 2');
test(findDuplicate([7,9,7,4,6,2,3,8,5,1]), 7, 'Test 3');
test(findDuplicate([3,1,3,4,2]), 3, 'Test 4');
test(findDuplicate([1,2,3,4,4,4,5]), 4, 'Test 5');
test(findDuplicate([3,3,3,3,3]), 3, 'Test 6');
test(findDuplicate([1,3,4,2,2]), 2, 'Test 7');
test(findDuplicate([5,1,2,3,4,5]), 5, 'Test 8');
test(findDuplicate([1,2,3,4,5,6,6]), 6, 'Test 9');
test(findDuplicate([1,2,3,4,4]), 4, 'Test 10');
test(findDuplicate([1,1,2,3,4,5]), 1, 'Test 11');
test(findDuplicate([1,1,2,3,4]), 1, 'Test 12');
test(findDuplicate([2,2,2,2,1]), 2, 'Test 13');
test(findDuplicate([2,2,2,2,2]), 2, 'Test 14');
test(findDuplicate([2,1,2,3,4,5]), 2, 'Test 15');
test(findDuplicate([1,2,3,4,5,5]), 5, 'Test 16');
test(findDuplicate([1,4,4,2,3]), 4, 'Test 17');
test(findDuplicate([2,5,9,6,9,3,8,9,7,1]), 9, 'Test 18');
test(findDuplicate([5,1,2,3,4,5,6,7,8,9,10]), 5, 'Test 19');
test(findDuplicate([1,3,2,4,5,5,6,7,8,9]), 5, 'Test 20');
test(findDuplicate([1,2,3,4,5,6,7,8,9,10,7]), 7, 'Test 21');
test(findDuplicate([1,3,2,5,4,6,7,8,9,10,3]), 3, 'Test 22');
test(findDuplicate([1,2,3,4,5,6,7,8,9,10,10]), 10, 'Test 23');
test(findDuplicate([2,1,3,4,5,6,7,8,9,10,2]), 2, 'Test 24');
test(findDuplicate([1,2,3,4,5,6,7,8,9,10,2]), 2, 'Test 25');
test(findDuplicate([1,2,3,4,5,6,7,8,9,10,5]), 5, 'Test 26');
test(findDuplicate([5,1,4,2,5,3,5,5,5,5]), 5, 'Test 27');
test(findDuplicate([5,4,3,2,1,6,7,8,9,2,2]), 2, 'Test 28');
test(findDuplicate([2,1,4,3,5,6,7,8,9,10,2]), 2, 'Test 29');
test(findDuplicate([8,7,3,6,4,2,5,7,1,9]), 7, 'Test 30');
test(findDuplicate([1,5,2,3,5,4,5,5,5,5,5]), 5, 'Test 31');
test(findDuplicate([2,3,4,5,6,7,8,9,10,1,1]), 1, 'Test 32');
test(findDuplicate([1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 33');
test(findDuplicate([1,2,3,4,5,6,7,8,9,10,1]), 1, 'Test 34');
test(findDuplicate([10,9,8,7,6,5,4,3,2,1,1]), 1, 'Test 35');
test(findDuplicate([2,2,2,2,2,2,2,2,2,2,2]), 2, 'Test 36');
test(findDuplicate([8,9,7,6,5,4,3,2,1,8,8]), 8, 'Test 37');
test(findDuplicate([3,2,1,4,5,6,7,8,9,10,3]), 3, 'Test 38');
test(findDuplicate([1,2,3,4,5,6,7,8,9,10,4]), 4, 'Test 39');
test(findDuplicate([2,2,2,2,2,2,2,2,2,2,1]), 2, 'Test 40');
test(findDuplicate([50000,1,2,3,4,5,6,7,8,9,10,50000]), 12, 'Test 41');
test(findDuplicate([1,5,3,4,2,5]), 5, 'Test 42');
test(findDuplicate([1,1,2,3,4,5,6,7,8,9,10]), 1, 'Test 43');
test(findDuplicate([5,5,5,5,5,5,5,5,5,5,5]), 5, 'Test 44');
test(findDuplicate([1,2,3,4,5,6,7,8,9,9,10]), 9, 'Test 45');
test(findDuplicate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1]), 1, 'Test 46');
test(findDuplicate([1,2,3,4,5,6,7,8,9,10,8]), 8, 'Test 47');
test(findDuplicate([100000,99999,99998,99997,99996,99995,99994,99993,99992,99991,99991]), 11, 'Test 48');
test(findDuplicate([9,8,7,6,5,4,3,2,1,1]), 1, 'Test 49');
test(findDuplicate([1,2,3,4,5,6,7,8,9,10,9]), 9, 'Test 50');
test(findDuplicate([10,2,3,4,5,6,7,8,9,1,1]), 1, 'Test 51');
test(findDuplicate([5,4,3,2,1,2,6,7,8,9,10]), 2, 'Test 52');
test(findDuplicate([7,6,5,4,3,2,1,1]), 1, 'Test 53');
test(findDuplicate([1,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 54');
test(findDuplicate([8,7,6,5,4,3,2,1,1,9,10]), 1, 'Test 55');
test(findDuplicate([100000,1,2,3,4,5,6,7,8,9,100000]), 11, 'Test 56');
test(findDuplicate([1,2,3,4,5,6,7,8,9,10,6]), 6, 'Test 57');
test(findDuplicate([1,2,3,4,5,6,7,8,9,10,100]), 11, 'Test 58');
test(findDuplicate([10,8,7,4,6,2,9,5,3,10,1]), 10, 'Test 59');
test(findDuplicate([1,3,2,5,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,5]), 5, 'Test 60');
test(findDuplicate([5,2,4,3,1,5,5,5,5,5,5]), 5, 'Test 61');
test(findDuplicate([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,1]), 1, 'Test 62');
test(findDuplicate([50000,49999,1,2,3,4,5,6,7,8,50000]), 11, 'Test 63');
test(findDuplicate([7,7,7,7,7,7,7,7,7,7,7]), 7, 'Test 64');
test(findDuplicate([1,2,3,4,5,6,7,8,9,1,10]), 1, 'Test 65');
test(findDuplicate([9,8,7,6,5,4,3,2,1,5,5]), 5, 'Test 66');
test(findDuplicate([10,9,8,7,6,5,4,3,2,1,2]), 2, 'Test 67');
test(findDuplicate([7,8,9,10,11,12,13,14,15,16,7]), 11, 'Test 68');
test(findDuplicate([5,4,3,2,1,1,6,7,8,9,10]), 1, 'Test 69');
test(findDuplicate([9,8,7,6,5,4,3,2,1,9,9]), 9, 'Test 70');
test(findDuplicate([1,3,2,4,5,6,7,8,9,10,8,8,8,8,8]), 8, 'Test 71');
test(findDuplicate([1,2,3,4,5,6,7,8,9,10,3]), 3, 'Test 72');
test(findDuplicate([1,100000,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,100000]), 21, 'Test 73');
test(findDuplicate([9,8,7,6,5,4,3,2,1,1,10]), 1, 'Test 74');
test(findDuplicate([5,6,7,8,9,10,1,2,3,4,5]), 5, 'Test 75');
test(findDuplicate([99999,99998,99997,99996,99995,99994,99993,99992,99991,99990,99991]), 11, 'Test 76');
test(findDuplicate([2,3,1,4,5,6,7,8,9,10,2]), 2, 'Test 77');
test(findDuplicate([1,3,5,7,9,11,13,15,17,19,1]), 11, 'Test 78');
test(findDuplicate([5,4,3,2,1,6,5,7,8,9,10]), 5, 'Test 79');
test(findDuplicate([1,3,5,4,2,5,6]), 5, 'Test 80');
test(findDuplicate([8,9,7,6,5,4,3,2,1,8]), 8, 'Test 81');
test(findDuplicate([1,2,3,4,5,6,7,8,9,10,3,11,12,13,14,15,16,17,18,19,20]), 3, 'Test 82');
test(findDuplicate([10,8,9,6,3,1,2,7,4,10,5]), 10, 'Test 83');
test(findDuplicate([2,4,6,8,10,12,14,16,18,20,2]), 11, 'Test 84');
test(findDuplicate([1,5,4,2,3,6,7,8,9,9,10]), 9, 'Test 85');
test(findDuplicate([10,1,2,3,4,5,6,7,8,9,9]), 9, 'Test 86');
test(findDuplicate([1,2,3,4,5,5,5,5,5,5,5]), 5, 'Test 87');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

