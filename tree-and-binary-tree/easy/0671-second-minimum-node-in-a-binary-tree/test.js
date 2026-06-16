// Test: 671. Second Minimum Node In A Binary Tree
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { findSecondMinimumValue } = require("./solution");

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

console.log("\n671. Second Minimum Node In A Binary Tree\n");

test(findSecondMinimumValue([3,3,3,3,3,3,3]), -1, 'Test 1');
test(findSecondMinimumValue([6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]), -1, 'Test 2');
test(findSecondMinimumValue([5,5,5,5,5,5,5]), -1, 'Test 3');
test(findSecondMinimumValue([2,2,5,null,null,5,7]), 5, 'Test 4');
test(findSecondMinimumValue([5,5,6,5,6]), 6, 'Test 5');
test(findSecondMinimumValue([3,3,4,3,3,null,null,3,null,null,null]), 4, 'Test 6');
test(findSecondMinimumValue([1,1,3,1,1,3,4]), 3, 'Test 7');
test(findSecondMinimumValue([2,2,2]), -1, 'Test 8');
test(findSecondMinimumValue([7,7,8,7,7,7,9]), 8, 'Test 9');
test(findSecondMinimumValue([10,10,15,10,null,11,15]), 11, 'Test 10');
test(findSecondMinimumValue([3,3,3,3,3,3,3,3,3,3,3,3,3,3,5]), 5, 'Test 11');
test(findSecondMinimumValue([3,3,5,3,3,6,7]), 5, 'Test 12');
test(findSecondMinimumValue([1,1,3,1,1,3,4,3,1]), 3, 'Test 13');
test(findSecondMinimumValue([5,5,5,5,5]), -1, 'Test 14');
test(findSecondMinimumValue([1,1,2,1,1,2,2,1,1,1,1,1,1,1,3]), 2, 'Test 15');
test(findSecondMinimumValue([8,8,9,8,8,10,11,8,null,null,8,9,null,9,null,11]), 9, 'Test 16');
test(findSecondMinimumValue([1,1,3,1,1,4,6,1,1,1,1,5,7,1,1,1,1,1,1,1,1,1,1,1,1,1]), 3, 'Test 17');
test(findSecondMinimumValue([8,8,9,8,8,8,10,8,8,null,null,8,null,null,null,null,null,8,null,null,null]), 9, 'Test 18');
test(findSecondMinimumValue([15,15,16,15,15,15,17,15,15,15,15,15,15,15,18,15,15,15,15,15,15,15,15,15,19]), 16, 'Test 19');
test(findSecondMinimumValue([2,2,2,2,2,3,4,2,2,null,null,2,5,2,6,2,2,null,null,null,null,2,2,null,null,null,null,null,2]), 3, 'Test 20');
test(findSecondMinimumValue([15,15,20,15,15,25,30,15,15,15,15,35,40,15,45]), 20, 'Test 21');
test(findSecondMinimumValue([8,8,9,8,8,9,10,8,8,8,8,9,9,10,11,8,8,8,8,8,8,8,9,9,9,9,9,9,10]), 9, 'Test 22');
test(findSecondMinimumValue([1,1,4,1,1,2,5,1,1,null,null,1,null,null,null,null,null,1,null,null,null]), 2, 'Test 23');
test(findSecondMinimumValue([6,6,7,6,6,8,9,6,6,null,null,6,10,6,11,6,6,null,null,null,null,6,6,null,null,null,null,null,6]), 7, 'Test 24');
test(findSecondMinimumValue([5,5,7,5,5,8,9,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 7, 'Test 25');
test(findSecondMinimumValue([1,1,3,1,1,5,7,1,1,9,11,1,1,1,1]), 3, 'Test 26');
test(findSecondMinimumValue([4,4,6,4,4,7,9,4,4,4,4,4,4,4,4]), 6, 'Test 27');
test(findSecondMinimumValue([2,2,3,2,2,4,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 3, 'Test 28');
test(findSecondMinimumValue([1,1,2,1,1,3,4,1,1,5,6]), 2, 'Test 29');
test(findSecondMinimumValue([10,10,15,10,10,12,20,10,10,null,null,12,13,null,null,14,null,null]), 12, 'Test 30');
test(findSecondMinimumValue([11,11,12,11,11,13,14,11,null,11,11,null,null,12,null]), 12, 'Test 31');
test(findSecondMinimumValue([7,7,8,7,7,9,10,7,7,7,7,7,7,7,7]), 8, 'Test 32');
test(findSecondMinimumValue([9,9,12,9,9,15,18,9,9,9,9,21,24,9,27]), 12, 'Test 33');
test(findSecondMinimumValue([5,5,6,5,5,null,5,5,5,null,5,5,5,null,5]), 6, 'Test 34');
test(findSecondMinimumValue([2,2,3,2,2,3,4,2,2,2,2,3,3,4,5]), 3, 'Test 35');
test(findSecondMinimumValue([3,3,4,3,3,5,6,3,3,null,null,3,null,null,null,null,null,3,null,null,null]), 4, 'Test 36');
test(findSecondMinimumValue([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5]), 5, 'Test 37');
test(findSecondMinimumValue([1,1,2,1,1,2,3,1,1,1,1,2,2,2,4]), 2, 'Test 38');
test(findSecondMinimumValue([9,9,10,9,9,11,12,9,null,9,9,null,null,10,null]), 10, 'Test 39');
test(findSecondMinimumValue([12,12,13,12,12,14,15,12,null,12,12,null,null,13,null]), 13, 'Test 40');
test(findSecondMinimumValue([6,6,7,6,6,8,9,6,null,null,6,7,null,7,null,9]), 7, 'Test 41');
test(findSecondMinimumValue([5,5,10,5,5,10,15,5,5,10,15,20,null,null,null,null,null,null]), 10, 'Test 42');
test(findSecondMinimumValue([5,5,6,5,5,6,7]), 6, 'Test 43');
test(findSecondMinimumValue([10,10,10,10,10,10,11,10,10,null,null,10,12,10,13]), 11, 'Test 44');
test(findSecondMinimumValue([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4]), 4, 'Test 45');
test(findSecondMinimumValue([6,6,8,6,6,9,11,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]), 8, 'Test 46');
test(findSecondMinimumValue([6,6,9,6,6,8,9,6,6,7,8,9,10,6,null,null,6,null,null,7,null,null,8,null,null,9,null,null,null]), 7, 'Test 47');
test(findSecondMinimumValue([8,8,9,8,8,10,11,8,null,8,8,null,null,9,null]), 9, 'Test 48');
test(findSecondMinimumValue([6,6,7,6,6,7,8,6,6,6,6,7,7,8,9]), 7, 'Test 49');
test(findSecondMinimumValue([9,9,10,9,9,11,12,9,null,null,9,10,null,10,null,12,9,null,10]), 10, 'Test 50');
test(findSecondMinimumValue([1,1,2,1,1,3,4,1,1,1,1,5,6,1,7]), 2, 'Test 51');
test(findSecondMinimumValue([4,4,8,4,4,7,10,4,4,5,7,8,10,4,null,null,4,null,null,5,null,null,7,null,null,8,null,null,null]), 5, 'Test 52');
test(findSecondMinimumValue([7,7,8,7,7,8,9,7,null,null,7,8,null,8,null]), 8, 'Test 53');
test(findSecondMinimumValue([7,7,8,7,7,9,10,7,7,7,7,7,7,11,12]), 8, 'Test 54');
test(findSecondMinimumValue([3,3,6,3,3,7,8,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 6, 'Test 55');
test(findSecondMinimumValue([6,6,8,6,6,10,12,6,6,6,6,14,16,6,18]), 8, 'Test 56');
test(findSecondMinimumValue([1,1,3,1,1,4,5,1,1,1,1,2,6]), 2, 'Test 57');
test(findSecondMinimumValue([10,10,11,10,10,10,12,10,10,10,10,10,10,10,13]), 11, 'Test 58');
test(findSecondMinimumValue([4,4,5,4,4,5,6]), 5, 'Test 59');
test(findSecondMinimumValue([2,2,3,2,2,2,4,2,2,2,2,2,2,2,5]), 3, 'Test 60');
test(findSecondMinimumValue([3,3,6,3,3,9,12,3,3,3,3,15,18,3,21]), 6, 'Test 61');
test(findSecondMinimumValue([1,1,3,1,1,2,4,1,1,null,null,1,null,null,null,null,null,1,null,null,null]), 2, 'Test 62');
test(findSecondMinimumValue([6,6,7,6,6,8,9,6,6,6,6,7,7,8,10]), 7, 'Test 63');
test(findSecondMinimumValue([4,4,5,4,4,4,6,4,4,null,null,4,null,null,null,null,null,4,null,null,null]), 5, 'Test 64');
test(findSecondMinimumValue([9,9,10,9,9,11,12,9,9,9,9,9,9,9,9]), 10, 'Test 65');
test(findSecondMinimumValue([4,4,5,4,4,6,7,4,4,4,4,5,5,6,8]), 5, 'Test 66');
test(findSecondMinimumValue([6,6,7,6,6,6,8,6,6,null,null,6,null,null,null,null,null,6,null,null,null]), 7, 'Test 67');
test(findSecondMinimumValue([7,7,8,7,7,9,10,7,7,null,null,7,11,7,12,7,null,null,null,null,7]), 8, 'Test 68');
test(findSecondMinimumValue([7,7,8,7,7,8,9,7,null,7,7,null,null,8,null]), 8, 'Test 69');
test(findSecondMinimumValue([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), -1, 'Test 70');
test(findSecondMinimumValue([2,2,3,2,2,4,5,2,2,2,2,6,7,2,8]), 3, 'Test 71');
test(findSecondMinimumValue([4,4,7,4,4,10,14,4,4,4,4,16,20,4,24]), 7, 'Test 72');
test(findSecondMinimumValue([9,9,10,9,9,11,12,9,9,null,null,9,13,9,14,9,9,null,null,null,null,9,9,null,null,null,null,null,9]), 10, 'Test 73');
test(findSecondMinimumValue([9,9,11,9,9,12,13,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), 11, 'Test 74');
test(findSecondMinimumValue([7,7,8,7,7,9,9,7,7,7,7,7,7,7,7]), 8, 'Test 75');
test(findSecondMinimumValue([9,9,10,9,9,11,12,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), 10, 'Test 76');
test(findSecondMinimumValue([8,8,10,8,8,11,12,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]), 10, 'Test 77');
test(findSecondMinimumValue([2,2,3,2,2,4,5,2,2,2,2,2,2,2,6]), 3, 'Test 78');
test(findSecondMinimumValue([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), -1, 'Test 79');
test(findSecondMinimumValue([5,5,6,5,5,7,8,5,5,9,10,5,5,11,12]), 6, 'Test 80');
test(findSecondMinimumValue([10,10,11,10,10,12,13,10,10,10,10,10,10,10,10]), 11, 'Test 81');
test(findSecondMinimumValue([12,12,14,12,12,15,16,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12]), 14, 'Test 82');
test(findSecondMinimumValue([12,12,13,12,12,14,15,12,null,null,12,13,null,13,null,15,12,null,13]), 13, 'Test 83');
test(findSecondMinimumValue([6,6,7,6,6,7,8,6,6,6,6,7,7,9,10]), 7, 'Test 84');
test(findSecondMinimumValue([10,10,15,10,10,20,20,10,10,10,10,25,30,10,10]), 15, 'Test 85');
test(findSecondMinimumValue([11,11,12,11,11,13,14,11,null,null,11,12,null,12,null,14,11,null,12]), 12, 'Test 86');
test(findSecondMinimumValue([7,7,8,7,7,7,9,7,7,null,null,7,7,7,10]), 8, 'Test 87');
test(findSecondMinimumValue([9,9,10,9,9,9,11,9,9,null,null,9,null,null,null,null,null,9,null,null,null]), 10, 'Test 88');
test(findSecondMinimumValue([1,1,2,1,1,2,3]), 2, 'Test 89');
test(findSecondMinimumValue([7,7,7,7,7,7,7,7,7,7,7,7,7,7,8]), 8, 'Test 90');
test(findSecondMinimumValue([9,9,10,9,9,10,11,9,9,10,10,10,11,11,12]), 10, 'Test 91');
test(findSecondMinimumValue([1,1,2,1,1,3,3,1,1,1,1,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 2, 'Test 92');
test(findSecondMinimumValue([8,8,9,8,8,10,11,8,8,8,8,8,8,8,8]), 9, 'Test 93');
test(findSecondMinimumValue([2,2,6,2,2,6,10,2,2,6,10,14,18,2,2,6,10,14,18,22,null,null,null,null,null,null,null,null,null,null]), 6, 'Test 94');
test(findSecondMinimumValue([8,8,9,8,8,10,11,8,8,8,8,12,13,8,14]), 9, 'Test 95');
test(findSecondMinimumValue([1,1,2,1,1,1,3]), 2, 'Test 96');
test(findSecondMinimumValue([1,1,3,1,1,3,4,1,null,1,null,null,null,null,null]), 3, 'Test 97');
test(findSecondMinimumValue([4,4,4,4,4,4,5,4,4,4,4,6,7]), 5, 'Test 98');
test(findSecondMinimumValue([7,7,8,7,7,8,9,7,7,8,8,8,9,null,9]), 8, 'Test 99');
test(findSecondMinimumValue([1,1,2,1,1,1,3,1,1,null,null,1,null,null,null,null,null,1,null,null,null]), 2, 'Test 100');
test(findSecondMinimumValue([5,5,6,5,5,5,7,5,null,5,5,null,null,5,null]), 6, 'Test 101');
test(findSecondMinimumValue([2,2,3,2,2,4,4,2,2,2,2,5,5,5,5]), 3, 'Test 102');
test(findSecondMinimumValue([8,8,12,8,8,12,14,8,8,12,14,16,18,8,null,null,8,null,null,null,null,null,null]), 12, 'Test 103');
test(findSecondMinimumValue([7,7,11,7,7,11,13,7,7,11,13,17,19,7,null,null,7,null,null,null,null,null,null]), 11, 'Test 104');
test(findSecondMinimumValue([10,10,11,10,10,12,13,10,null,null,10,11,null,11,null,13]), 11, 'Test 105');
test(findSecondMinimumValue([10,10,11,10,10,12,13,10,10,10,10,11,11,12,14]), 11, 'Test 106');
test(findSecondMinimumValue([5,5,6,5,5,7,8,5,null,null,9,10,11]), 6, 'Test 107');
test(findSecondMinimumValue([3,3,4,3,3,5,6,3,3,null,null,null,null,null,null,5]), 4, 'Test 108');
test(findSecondMinimumValue([5,5,5,5,5,5,5,5,5,5,5,5,5,5,6]), 6, 'Test 109');
test(findSecondMinimumValue([12,12,13,12,12,14,15,12,12,12,12,16,17,12,18]), 13, 'Test 110');
test(findSecondMinimumValue([10,10,20,10,10,10,30,10,10,10,10,10,10,40,50]), 20, 'Test 111');
test(findSecondMinimumValue([4,4,5,4,4,5,6,4,4,null,null,null,null,5]), 5, 'Test 112');
test(findSecondMinimumValue([5,5,6,5,5,6,7,5,null,null,5,6,null,6,null]), 6, 'Test 113');
test(findSecondMinimumValue([6,6,7,6,6,8,9,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,10]), 7, 'Test 114');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

