// Test: 946. Validate Stack Sequences
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { validateStackSequences } = require("./solution");

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

console.log("\n946. Validate Stack Sequences\n");

test(validateStackSequences([1,2,3,4,5], [4,5,3,2,1]), true, 'Test 1');
test(validateStackSequences([2,1,0], [0,1,2]), true, 'Test 2');
test(validateStackSequences([1,2,3,4,5], [1,3,2,5,4]), true, 'Test 3');
test(validateStackSequences([1,2,3,4,5], [5,4,3,2,1]), true, 'Test 4');
test(validateStackSequences([1,2,3,4,5], [4,3,5,1,2]), false, 'Test 5');
test(validateStackSequences([1], [1]), true, 'Test 6');
test(validateStackSequences([1,2,3,4,5], [3,5,4,2,1]), true, 'Test 7');
test(validateStackSequences([1,2,3,4,5], [2,1,5,4,3]), true, 'Test 8');
test(validateStackSequences([1,2,3,4,5], [2,3,4,5,1]), true, 'Test 9');
test(validateStackSequences([1,2,3,4,5], [1,2,3,4,5]), true, 'Test 10');
test(validateStackSequences([1,2,3,4,5], [3,2,1,5,4]), true, 'Test 11');
test(validateStackSequences([1,2,3], [1,3,2]), true, 'Test 12');
test(validateStackSequences([1,2,3,4,5], [5,1,2,3,4]), false, 'Test 13');
test(validateStackSequences([1,2,3,4,5], [1,5,4,3,2]), true, 'Test 14');
test(validateStackSequences([1,2,3], [3,2,1]), true, 'Test 15');
test(validateStackSequences([1,4,5,6,3,2], [2,3,6,5,4,1]), true, 'Test 16');
test(validateStackSequences([1,3,2,5,4,6,8,7,10,9], [3,2,1,5,4,8,7,10,9,6]), true, 'Test 17');
test(validateStackSequences([5,4,3,2,1], [1,2,3,4,5]), true, 'Test 18');
test(validateStackSequences([5,1,2,4,3], [1,5,3,4,2]), true, 'Test 19');
test(validateStackSequences([1,3,5,7,9,11,13,15,17,19], [2,4,6,8,10,12,14,16,18,1]), false, 'Test 20');
test(validateStackSequences([1,3,2,4,5,6,7,8,9], [3,1,4,2,5,6,7,8,9]), true, 'Test 21');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [1,3,2,5,4,8,7,6,10,9]), true, 'Test 22');
test(validateStackSequences([1,3,2,5,4,6], [2,5,6,4,3,1]), true, 'Test 23');
test(validateStackSequences([7,6,5,4,3,2,1], [1,2,3,4,5,6,7]), true, 'Test 24');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), true, 'Test 25');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [1,4,3,2,5,8,7,6,10,9]), true, 'Test 26');
test(validateStackSequences([5,3,1,2,4,6,7], [7,6,4,2,1,3,5]), true, 'Test 27');
test(validateStackSequences([10,9,8,7,6,5,4,3,2,1], [1,2,3,4,5,6,7,8,9,10]), true, 'Test 28');
test(validateStackSequences([2,1,5,4,3,6], [3,1,6,5,2,4]), false, 'Test 29');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [5,4,3,2,1,10,9,8,7,6]), true, 'Test 30');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 31');
test(validateStackSequences([5,1,2,4,3], [5,3,4,2,1]), true, 'Test 32');
test(validateStackSequences([1,2,3,4,5,6,7,8,9], [4,3,2,1,8,7,6,5,9]), true, 'Test 33');
test(validateStackSequences([1,3,5,7,9,2,4,6,8,10], [1,3,2,5,4,7,6,9,8,10]), false, 'Test 34');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [3,1,2,4,5,7,6,9,10,8]), false, 'Test 35');
test(validateStackSequences([10,20,30,40,50,60,70,80,90,100], [30,20,40,60,50,100,90,80,70,10]), true, 'Test 36');
test(validateStackSequences([10,9,8,7,6,5,4,3,2,1], [1,3,2,5,4,8,7,6,10,9]), false, 'Test 37');
test(validateStackSequences([4,3,5,1,2], [1,5,2,4,3]), false, 'Test 38');
test(validateStackSequences([1,5,3,2,4,6], [2,3,1,5,4,6]), false, 'Test 39');
test(validateStackSequences([5,3,2,1,4], [3,1,2,4,5]), true, 'Test 40');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [5,3,2,1,6,4,9,8,10,7]), false, 'Test 41');
test(validateStackSequences([1,3,5,2,4,6,8,7,9,10], [1,5,3,4,2,6,7,8,10,9]), true, 'Test 42');
test(validateStackSequences([9,8,7,6,5,4,3,2,1], [1,2,3,4,5,6,7,8,9]), true, 'Test 43');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [3,5,1,4,2,7,6,9,8,10]), false, 'Test 44');
test(validateStackSequences([6,2,3,1,5,4], [6,3,2,1,4,5]), true, 'Test 45');
test(validateStackSequences([2,1,3,5,4,6], [2,1,4,5,3,6]), true, 'Test 46');
test(validateStackSequences([1,2,3,5,4,6,7,8,9,10], [2,3,1,5,4,6,7,8,10,9]), true, 'Test 47');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,2,4,3,1]), false, 'Test 48');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [3,4,2,1,8,9,6,7,10,5]), false, 'Test 49');
test(validateStackSequences([2,1,3,4,5], [1,2,3,4,5]), true, 'Test 50');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [3,1,2,5,4,6,7,10,9,8]), false, 'Test 51');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [1,3,2,5,4,7,6,9,8,10]), true, 'Test 52');
test(validateStackSequences([3,2,1,5,4,6], [2,3,1,5,4,6]), true, 'Test 53');
test(validateStackSequences([1,3,2,4,5], [3,1,5,4,2]), true, 'Test 54');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [3,2,1,6,5,4,9,8,7,10]), true, 'Test 55');
test(validateStackSequences([1,3,5,7,9,11], [11,9,7,5,3,1]), true, 'Test 56');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,10,9,8,7,6]), true, 'Test 57');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [10,8,6,4,2,1,3,5,7,9]), false, 'Test 58');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [1,5,4,3,2,6,7,8,10,9]), true, 'Test 59');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [10,1,2,3,4,5,6,7,8,9]), false, 'Test 60');
test(validateStackSequences([1,3,2,5,4], [2,3,1,5,4]), true, 'Test 61');
test(validateStackSequences([10,9,8,7,6,5,4,3,2,1], [1,3,2,4,5,7,6,8,10,9]), false, 'Test 62');
test(validateStackSequences([1,5,7,9,11,13,15,17,19], [19,17,15,13,11,9,7,5,1]), true, 'Test 63');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [2,1,4,3,6,5,8,7,10,9]), true, 'Test 64');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [7,8,9,10,11,12,13,14,15,1,2,3,4,5,6]), false, 'Test 65');
test(validateStackSequences([3,1,2,4,5], [1,2,3,4,5]), true, 'Test 66');
test(validateStackSequences([1,3,2,4,5,7,6,8,9,10], [2,3,1,6,7,5,10,9,8,4]), true, 'Test 67');
test(validateStackSequences([1,3,5,2,4,6], [2,4,6,3,5,1]), false, 'Test 68');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8,9,10]), true, 'Test 69');
test(validateStackSequences([10,20,30,40,50,60,70,80,90,100], [30,50,100,90,80,70,60,40,20,10]), true, 'Test 70');
test(validateStackSequences([1,2,5,3,4,6], [2,1,5,6,4,3]), true, 'Test 71');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [1,3,5,7,9,2,4,6,8,10]), false, 'Test 72');
test(validateStackSequences([5,1,3,4,2], [1,2,3,4,5]), false, 'Test 73');
test(validateStackSequences([1,4,3,2,5,6], [2,3,4,1,6,5]), true, 'Test 74');
test(validateStackSequences([1,3,2,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,2,3,1]), true, 'Test 75');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,3,4,5,6,7,8,9,15,14,13,12,11,10]), true, 'Test 76');
test(validateStackSequences([1,3,2,5,4,6], [2,3,4,5,6,1]), true, 'Test 77');
test(validateStackSequences([1,2,3,4,5], [5,3,4,1,2]), false, 'Test 78');
test(validateStackSequences([10,20,30,40,50], [20,10,50,30,40]), false, 'Test 79');
test(validateStackSequences([1,3,2,4,5], [2,3,1,5,4]), true, 'Test 80');
test(validateStackSequences([9,8,7,6,5,4,3,2,1,0], [0,1,2,3,4,5,6,7,8,9]), true, 'Test 81');
test(validateStackSequences([1,2,5,3,6,4,7,8,9,10], [1,2,3,4,6,5,7,8,10,9]), true, 'Test 82');
test(validateStackSequences([1,3,5,4,2], [2,4,5,3,1]), true, 'Test 83');
test(validateStackSequences([8,9,7,6,10,11,12,13,14], [12,14,13,11,10,7,6,9,8]), false, 'Test 84');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [2,4,6,8,10,9,7,5,3,1]), true, 'Test 85');
test(validateStackSequences([1,2,3,5,4], [5,1,4,2,3]), false, 'Test 86');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [3,1,2,5,4,7,6,8,10,9]), false, 'Test 87');
test(validateStackSequences([7,8,9,10,11], [9,11,10,8,7]), true, 'Test 88');
test(validateStackSequences([1,4,5,3,2,6], [2,3,4,5,1,6]), false, 'Test 89');
test(validateStackSequences([1,3,5,7,9,2,4,6,8,10], [2,4,6,8,10,5,7,9,3,1]), false, 'Test 90');
test(validateStackSequences([1,3,2,5,4,6], [3,2,5,1,4,6]), true, 'Test 91');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [6,5,4,3,2,1,7,8,9,10]), true, 'Test 92');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [8,9,6,7,4,5,2,3,10,11,12,15,14,1,13]), false, 'Test 93');
test(validateStackSequences([1,2,3,5,4,6,7,9,8,10], [1,2,3,6,5,4,8,7,10,9]), false, 'Test 94');
test(validateStackSequences([1,3,5,7,9,2,4,6,8,10], [2,4,6,8,10,1,3,5,7,9]), false, 'Test 95');
test(validateStackSequences([100,90,80,70,60,50,40,30,20,10], [10,20,30,40,50,60,70,80,90,100]), true, 'Test 96');
test(validateStackSequences([1,3,5,7,2,4,6,8], [1,3,2,5,4,7,6,8]), false, 'Test 97');
test(validateStackSequences([1,3,2,5,4], [5,4,2,3,1]), true, 'Test 98');
test(validateStackSequences([2,1,3,5,4], [3,1,2,4,5]), true, 'Test 99');
test(validateStackSequences([1,3,2,4,5], [3,2,1,5,4]), true, 'Test 100');
test(validateStackSequences([1,2,3,4,5,6,7,8,9,10], [6,5,4,3,2,1,10,9,8,7]), true, 'Test 101');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

