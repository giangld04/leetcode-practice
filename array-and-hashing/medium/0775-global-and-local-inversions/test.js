// Test: 775. Global And Local Inversions
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { isIdealPermutation } = require("./solution");

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

console.log("\n775. Global And Local Inversions\n");

test(isIdealPermutation([0,1,2,3,4]), true, 'Test 1');
test(isIdealPermutation([4,3,2,1,0]), false, 'Test 2');
test(isIdealPermutation([2,0,1,3]), false, 'Test 3');
test(isIdealPermutation([2,1,0,3]), false, 'Test 4');
test(isIdealPermutation([3,2,1,0]), false, 'Test 5');
test(isIdealPermutation([0,2,1,3]), true, 'Test 6');
test(isIdealPermutation([0,1,2,3]), true, 'Test 7');
test(isIdealPermutation([0,1,3,2]), true, 'Test 8');
test(isIdealPermutation([1,0,2]), true, 'Test 9');
test(isIdealPermutation([1,2,0]), false, 'Test 10');
test(isIdealPermutation([1,2,3,0,4,5,6]), false, 'Test 11');
test(isIdealPermutation([0,2,4,1,3,5,7,6,9,8]), false, 'Test 12');
test(isIdealPermutation([6,5,4,3,2,1,0]), false, 'Test 13');
test(isIdealPermutation([5,2,4,0,3,1]), false, 'Test 14');
test(isIdealPermutation([2,1,0,3,4,5,6,7]), false, 'Test 15');
test(isIdealPermutation([0,2,1,3,4,5,6,7]), true, 'Test 16');
test(isIdealPermutation([0,3,1,2,4,5,6,7]), false, 'Test 17');
test(isIdealPermutation([1,3,0,2,5,4,7,6,9,8]), false, 'Test 18');
test(isIdealPermutation([0,1,2,3,4,5,6,7,8,9]), true, 'Test 19');
test(isIdealPermutation([0,1,2,3,4,5,7,6,8,9,10,11]), true, 'Test 20');
test(isIdealPermutation([10,9,8,7,6,5,4,3,2,1,0]), false, 'Test 21');
test(isIdealPermutation([8,1,2,3,4,5,6,7,0]), false, 'Test 22');
test(isIdealPermutation([7,6,5,4,3,2,1,0]), false, 'Test 23');
test(isIdealPermutation([0, 2, 4, 1, 3, 5]), false, 'Test 24');
test(isIdealPermutation([0,2,1,3,5,4,6]), true, 'Test 25');
test(isIdealPermutation([2,1,0,5,4,3,8,7,10,9]), false, 'Test 26');
test(isIdealPermutation([2,3,0,1,4,5]), false, 'Test 27');
test(isIdealPermutation([1,2,3,4,5,6,7,8,9,0,10]), false, 'Test 28');
test(isIdealPermutation([6,4,2,0,3,1,8,5,7,9,10]), false, 'Test 29');
test(isIdealPermutation([5,1,0,4,3,2]), false, 'Test 30');
test(isIdealPermutation([1, 3, 0, 2, 4]), false, 'Test 31');
test(isIdealPermutation([2,1,0,5,4,3,8,7,6]), false, 'Test 32');
test(isIdealPermutation([0,2,1,3,4,5,7,6,8]), true, 'Test 33');
test(isIdealPermutation([5,3,1,4,2,0]), false, 'Test 34');
test(isIdealPermutation([2,0,1,4,3,6,5,8,7,10,9,12,11]), false, 'Test 35');
test(isIdealPermutation([0,2,1,4,3,6,5,8,7,10,9]), true, 'Test 36');
test(isIdealPermutation([11,5,3,7,2,8,1,6,9,4,0,10]), false, 'Test 37');
test(isIdealPermutation([1,2,3,0,4,5,6,7,8,9]), false, 'Test 38');
test(isIdealPermutation([13,7,5,9,3,11,2,10,12,4,1,6,8,0]), false, 'Test 39');
test(isIdealPermutation([3,0,1,2,5,4]), false, 'Test 40');
test(isIdealPermutation([1,0,3,2,5,4]), true, 'Test 41');
test(isIdealPermutation([1,2,4,3,6,5,8,7,10,9]), true, 'Test 42');
test(isIdealPermutation([3,0,1,2,5,4,7,6,9,8]), false, 'Test 43');
test(isIdealPermutation([0,2,4,6,8,10,1,3,5,7,9,11]), false, 'Test 44');
test(isIdealPermutation([5,0,1,2,3,4,6,7,8,9]), false, 'Test 45');
test(isIdealPermutation([4,0,3,1,2,6,5,8,9,7]), false, 'Test 46');
test(isIdealPermutation([0,2,1,4,3,5]), true, 'Test 47');
test(isIdealPermutation([1,0,3,2,5,4,6]), true, 'Test 48');
test(isIdealPermutation([1,3,0,2,4,5,7,6,8,9]), false, 'Test 49');
test(isIdealPermutation([4,0,2,1,3]), false, 'Test 50');
test(isIdealPermutation([1,0,3,2,5,4,7,6,9,8]), true, 'Test 51');
test(isIdealPermutation([5,2,3,4,0,1,6,7,8,9]), false, 'Test 52');
test(isIdealPermutation([9,0,8,1,7,2,6,3,5,4]), false, 'Test 53');
test(isIdealPermutation([1,3,0,2,4,5]), false, 'Test 54');
test(isIdealPermutation([5,4,3,2,1,0]), false, 'Test 55');
test(isIdealPermutation([0,1,3,2,4,5,7,6,8,9,11,10]), true, 'Test 56');
test(isIdealPermutation([5,0,1,2,3,4]), false, 'Test 57');
test(isIdealPermutation([10,3,4,5,2,1,8,6,9,7,0]), false, 'Test 58');
test(isIdealPermutation([0,1,3,2,4,5,6]), true, 'Test 59');
test(isIdealPermutation([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), true, 'Test 60');
test(isIdealPermutation([0,1,2,4,3,5,6,7]), true, 'Test 61');
test(isIdealPermutation([0,2,1,3,4]), true, 'Test 62');
test(isIdealPermutation([1,0,5,4,3,2,6]), false, 'Test 63');
test(isIdealPermutation([1,0,2,3,4,5,6,7]), true, 'Test 64');
test(isIdealPermutation([0,1,2,3,4,5]), true, 'Test 65');
test(isIdealPermutation([3, 1, 0, 4, 2, 5]), false, 'Test 66');
test(isIdealPermutation([1,3,2,4,0,5,6,7,8,9]), false, 'Test 67');
test(isIdealPermutation([11,10,9,8,7,6,5,4,3,2,1,0]), false, 'Test 68');
test(isIdealPermutation([0, 1, 3, 2, 4]), true, 'Test 69');
test(isIdealPermutation([4, 3, 2, 1, 0]), false, 'Test 70');
test(isIdealPermutation([0,2,1,3,5,4,7,6,9,8]), true, 'Test 71');
test(isIdealPermutation([1,3,0,2,4]), false, 'Test 72');
test(isIdealPermutation([0,1,3,2,5,4,7,6,9,8]), true, 'Test 73');
test(isIdealPermutation([8,7,6,5,4,3,2,1,0]), false, 'Test 74');
test(isIdealPermutation([2,0,1,4,3,6,5,8,7,9]), false, 'Test 75');
test(isIdealPermutation([0, 2, 1, 3, 4, 5]), true, 'Test 76');
test(isIdealPermutation([0,2,3,1,4,5,6]), false, 'Test 77');
test(isIdealPermutation([0,2,1,4,3,6,5,8,7,9]), true, 'Test 78');
test(isIdealPermutation([9,8,7,6,5,4,3,2,1,0]), false, 'Test 79');
test(isIdealPermutation([1, 2, 3, 4, 5, 0]), false, 'Test 80');
test(isIdealPermutation([0,1,2,3,4,5,6]), true, 'Test 81');
test(isIdealPermutation([10,9,8,7,6,5,4,3,2,1,0,11,12,13,14]), false, 'Test 82');
test(isIdealPermutation([0,1,3,2,4,6,5,7]), true, 'Test 83');
test(isIdealPermutation([6,0,5,2,1,4,3]), false, 'Test 84');
test(isIdealPermutation([8,0,7,1,6,2,5,3,4]), false, 'Test 85');
test(isIdealPermutation([10,1,9,2,8,3,7,4,6,5,0]), false, 'Test 86');
test(isIdealPermutation([0,2,1,3,5,4]), true, 'Test 87');
test(isIdealPermutation([4,3,2,1,0,5]), false, 'Test 88');
test(isIdealPermutation([6,2,3,5,0,4,1]), false, 'Test 89');
test(isIdealPermutation([2,0,1,4,3,6,5,8,7,9,10,11]), false, 'Test 90');
test(isIdealPermutation([0,3,1,2,4,5,6,7,8,9]), false, 'Test 91');
test(isIdealPermutation([0,1,2,4,3,5,7,6]), true, 'Test 92');
test(isIdealPermutation([0,3,2,1,4]), false, 'Test 93');
test(isIdealPermutation([1,0,3,2,5,4,7,6,9,8,11,10]), true, 'Test 94');
test(isIdealPermutation([3,0,2,1,4,5,6,7,8,9]), false, 'Test 95');
test(isIdealPermutation([1,0,3,2,5,4,7,6]), true, 'Test 96');
test(isIdealPermutation([3,0,1,2,5,4,6,7]), false, 'Test 97');
test(isIdealPermutation([4,3,0,1,2]), false, 'Test 98');
test(isIdealPermutation([1,3,2,0,5,4,6]), false, 'Test 99');
test(isIdealPermutation([5, 4, 3, 2, 1, 0]), false, 'Test 100');
test(isIdealPermutation([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), false, 'Test 101');
test(isIdealPermutation([5,2,3,0,1,4]), false, 'Test 102');
test(isIdealPermutation([0,1,2,3,5,4,6,7,8]), true, 'Test 103');
test(isIdealPermutation([12,6,4,8,2,10,1,7,11,3,0,5,9]), false, 'Test 104');
test(isIdealPermutation([2, 4, 0, 1, 3, 5]), false, 'Test 105');
test(isIdealPermutation([1,2,3,0,4,5]), false, 'Test 106');
test(isIdealPermutation([9,4,2,5,7,1,3,6,8,0]), false, 'Test 107');
test(isIdealPermutation([1,2,0,3,4,5,6,7,8,9]), false, 'Test 108');
test(isIdealPermutation([7,3,4,1,2,0,5,6]), false, 'Test 109');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

