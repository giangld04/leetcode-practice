// Test: 31. Next Permutation
// 98 test cases from LeetCodeDataset
// Run: node test.js

const { nextPermutation } = require("./solution");

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

console.log("\n31. Next Permutation\n");

test(nextPermutation([5,4,7,5,3,2]), null, 'Test 1');
test(nextPermutation([4,3,2,1]), null, 'Test 2');
test(nextPermutation([1,2,2,3]), null, 'Test 3');
test(nextPermutation([1,1,1]), null, 'Test 4');
test(nextPermutation([2,3,1]), null, 'Test 5');
test(nextPermutation([2,1]), null, 'Test 6');
test(nextPermutation([1]), null, 'Test 7');
test(nextPermutation([1,2,3,4]), null, 'Test 8');
test(nextPermutation([2,1,3]), null, 'Test 9');
test(nextPermutation([1,2,3,4,5]), null, 'Test 10');
test(nextPermutation([1,3,2]), null, 'Test 11');
test(nextPermutation([1,3,5,4,2]), null, 'Test 12');
test(nextPermutation([3,2,1]), null, 'Test 13');
test(nextPermutation([2,2,2,2]), null, 'Test 14');
test(nextPermutation([5,4,3,2,1]), null, 'Test 15');
test(nextPermutation([1,2]), null, 'Test 16');
test(nextPermutation([5,1,1]), null, 'Test 17');
test(nextPermutation([1,2,3]), null, 'Test 18');
test(nextPermutation([1,1,5]), null, 'Test 19');
test(nextPermutation([1,3,2,4]), null, 'Test 20');
test(nextPermutation([1,3,2,4,5]), null, 'Test 21');
test(nextPermutation([10,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), null, 'Test 22');
test(nextPermutation([100,0,1,2,3,4,5,6,7,8,9]), null, 'Test 23');
test(nextPermutation([1,2,3,4,5,6,7,8,9,10]), null, 'Test 24');
test(nextPermutation([0,0,0,0,1,0,0,0]), null, 'Test 25');
test(nextPermutation([9,6,7,3,2,1]), null, 'Test 26');
test(nextPermutation([10,9,8,7,6,5,4,3,2,1,0]), null, 'Test 27');
test(nextPermutation([5,4,3,2,1,1,2,3,4,5]), null, 'Test 28');
test(nextPermutation([6,8,7,4,3,2]), null, 'Test 29');
test(nextPermutation([1,2,2,3,3,4,5]), null, 'Test 30');
test(nextPermutation([1,1,1,1,1]), null, 'Test 31');
test(nextPermutation([4,5,6,7,8,9,10,1,2,3]), null, 'Test 32');
test(nextPermutation([9,5,4,3,2,1]), null, 'Test 33');
test(nextPermutation([2,1,3,4,5,6,7,8,9,10]), null, 'Test 34');
test(nextPermutation([1,2,2,2,2,2,2,2,2,2]), null, 'Test 35');
test(nextPermutation([1,2,3,3,3,3,2,1]), null, 'Test 36');
test(nextPermutation([1,2,3,2,1]), null, 'Test 37');
test(nextPermutation([3,3,3,2,2,2,1,1,1]), null, 'Test 38');
test(nextPermutation([1,2,2,2,2,2,3]), null, 'Test 39');
test(nextPermutation([1,10,10,9,8,7,6,5,4,3,2,1]), null, 'Test 40');
test(nextPermutation([1,1,2,2,3,3]), null, 'Test 41');
test(nextPermutation([1,2,3,3,3,2,1]), null, 'Test 42');
test(nextPermutation([1,2,3,5,4,3,2,1]), null, 'Test 43');
test(nextPermutation([1,1,2,2,3,3,4,4,5,5]), null, 'Test 44');
test(nextPermutation([1,2,2,3,3,4,4]), null, 'Test 45');
test(nextPermutation([6,2,1,5,4,3,0]), null, 'Test 46');
test(nextPermutation([1,3,5,7,9,11,8,6,4,2,0]), null, 'Test 47');
test(nextPermutation([1,1,1,1,1,1,1]), null, 'Test 48');
test(nextPermutation([1,2,3,4,3,2,1]), null, 'Test 49');
test(nextPermutation([1,2,3,4,3,2,1,5,4,3,2,1]), null, 'Test 50');
test(nextPermutation([1,3,2,4,3,2,1]), null, 'Test 51');
test(nextPermutation([1,2,3,4,5,6]), null, 'Test 52');
test(nextPermutation([1,1,1,1,2,2,2,2,3,3,3,3]), null, 'Test 53');
test(nextPermutation([7,6,5,4,3,2,1,8]), null, 'Test 54');
test(nextPermutation([5,4,3,2,1,0]), null, 'Test 55');
test(nextPermutation([4,1,2,5,3]), null, 'Test 56');
test(nextPermutation([1,9,4,6,7]), null, 'Test 57');
test(nextPermutation([1,2,2,2,3,3,3]), null, 'Test 58');
test(nextPermutation([1,1,1,1,1,1]), null, 'Test 59');
test(nextPermutation([3,3,3,3,2,2,2,2,1,1,1,1]), null, 'Test 60');
test(nextPermutation([1,3,2,3,2,1]), null, 'Test 61');
test(nextPermutation([100,99,98,97,96]), null, 'Test 62');
test(nextPermutation([10,9,8,7,6,5,4,3,2,1]), null, 'Test 63');
test(nextPermutation([11,10,9,8,7,6,5,4,3,2,1,0]), null, 'Test 64');
test(nextPermutation([1,3,2,1,3,2,1,3,2,1]), null, 'Test 65');
test(nextPermutation([1,2,3,4,5,6,7,8,9,0]), null, 'Test 66');
test(nextPermutation([9,7,5,3,1,0]), null, 'Test 67');
test(nextPermutation([1,3,2,1,4,3]), null, 'Test 68');
test(nextPermutation([9,8,7,10,6,5,4,3,2,1]), null, 'Test 69');
test(nextPermutation([1,2,3,4,5,6,7,8,9]), null, 'Test 70');
test(nextPermutation([6,2,1,5,4,3,9]), null, 'Test 71');
test(nextPermutation([9,8,7,6,5,4,3,2,1,0]), null, 'Test 72');
test(nextPermutation([1,2,2,3,3,4,4,5]), null, 'Test 73');
test(nextPermutation([1,1,1,1,1,1,2,1,1,1,1,1]), null, 'Test 74');
test(nextPermutation([1,2,3,4,5,6,7,8,9,10,11]), null, 'Test 75');
test(nextPermutation([4,5,2,3,1]), null, 'Test 76');
test(nextPermutation([2,3,1,5,4]), null, 'Test 77');
test(nextPermutation([10,20,30,25,15,5,10]), null, 'Test 78');
test(nextPermutation([100,1,2,3,4,5,6,7,8,9]), null, 'Test 79');
test(nextPermutation([1,5,1,4,3,2]), null, 'Test 80');
test(nextPermutation([1,2,3,4,5,6,7,8,9,100]), null, 'Test 81');
test(nextPermutation([1,2,2,1]), null, 'Test 82');
test(nextPermutation([9,8,7,6,5,4,3,2,1]), null, 'Test 83');
test(nextPermutation([1,3,2,4,3,2]), null, 'Test 84');
test(nextPermutation([100,99,98,97,96,95]), null, 'Test 85');
test(nextPermutation([100,0,1,99,98,97,96,95]), null, 'Test 86');
test(nextPermutation([1,1,4,4,2,2,3,3]), null, 'Test 87');
test(nextPermutation([1,2,2,3,3]), null, 'Test 88');
test(nextPermutation([1,1,1,1,1,1,1,1,1,1]), null, 'Test 89');
test(nextPermutation([1,5,1,5,1,5]), null, 'Test 90');
test(nextPermutation([3,3,2,1,1,1,1]), null, 'Test 91');
test(nextPermutation([1,2,1,2,1,2,1]), null, 'Test 92');
test(nextPermutation([1,2,2,2,3]), null, 'Test 93');
test(nextPermutation([7,8,9,10,11,12,13,14,15,16,17,18,19,20]), null, 'Test 94');
test(nextPermutation([1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5]), null, 'Test 95');
test(nextPermutation([4,3,2,1,3,2,1]), null, 'Test 96');
test(nextPermutation([2,3,3,2,1,1]), null, 'Test 97');
test(nextPermutation([2,2,2,2,2,2,2]), null, 'Test 98');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

