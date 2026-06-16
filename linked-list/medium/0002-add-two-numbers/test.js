// Test: 2. Add Two Numbers
// 59 test cases from LeetCodeDataset
// Run: node test.js

const { addTwoNumbers } = require("./solution");

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

console.log("\n2. Add Two Numbers\n");

test(addTwoNumbers([9,8,7], [1,2,3]), [0, 1, 1, 1], 'Test 1');
test(addTwoNumbers([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [5,6,4]), [6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 2');
test(addTwoNumbers([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], [5,6,4]), [6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 3');
test(addTwoNumbers([2,4,3], [5,6,4,1]), [7, 0, 8, 1], 'Test 4');
test(addTwoNumbers([1,2,3,4,5], [9,8,7,6,5]), [0, 1, 1, 1, 1, 1], 'Test 5');
test(addTwoNumbers([1], [9,9,9,9,9,9,9,9,9,9]), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 6');
test(addTwoNumbers([5,5,5], [5,5,5,5,5]), [0, 1, 1, 6, 5], 'Test 7');
test(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]), [8, 9, 9, 9, 0, 0, 0, 1], 'Test 8');
test(addTwoNumbers([9,9,9,9,9,9,9,9,9,9], [1]), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 9');
test(addTwoNumbers([1], [9,9]), [0, 0, 1], 'Test 10');
test(addTwoNumbers([1,0,0,0,0], [9,9,9,9]), [0, 0, 0, 0, 1], 'Test 11');
test(addTwoNumbers([9,8,7,6,5,4,3,2,1], [1,2,3,4,5,6,7,8,9]), [0, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 12');
test(addTwoNumbers([1,8,9], [0,0,9]), [1, 8, 8, 1], 'Test 13');
test(addTwoNumbers([2, 4, 3], [5, 6, 4]), [7, 0, 8], 'Test 14');
test(addTwoNumbers([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], [5,6,4]), [6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 15');
test(addTwoNumbers([2,4,6], [1,3,5]), [3, 7, 1, 1], 'Test 16');
test(addTwoNumbers([1,1,1], [9,9,9]), [0, 1, 1, 1], 'Test 17');
test(addTwoNumbers([1, 8], [0]), [1, 8], 'Test 18');
test(addTwoNumbers([1,8], [0]), [1, 8], 'Test 19');
test(addTwoNumbers([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5]), [5, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5], 'Test 20');
test(addTwoNumbers([1,8,9], [9,1]), [0, 0, 0, 1], 'Test 21');
test(addTwoNumbers([7,2,4,3], [5,6,4]), [2, 9, 8, 3], 'Test 22');
test(addTwoNumbers([1], [1,2,3,4,5]), [2, 2, 3, 4, 5], 'Test 23');
test(addTwoNumbers([1], [9,9,9,9,9,9,9,9,9]), [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 24');
test(addTwoNumbers([6,4,5], [0,4,5]), [6, 8, 0, 1], 'Test 25');
test(addTwoNumbers([5], [5]), [0, 1], 'Test 26');
test(addTwoNumbers([7,2,4,3], [5,6,4,2]), [2, 9, 8, 5], 'Test 27');
test(addTwoNumbers([1,2], [3,4,5,6]), [4, 6, 5, 6], 'Test 28');
test(addTwoNumbers([9,9,9], [1]), [0, 0, 0, 1], 'Test 29');
test(addTwoNumbers([9,9], [1]), [0, 0, 1], 'Test 30');
test(addTwoNumbers([1], [9,9,9,9,9,9,9,9]), [0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 31');
test(addTwoNumbers([1], [9]), [0, 1], 'Test 32');
test(addTwoNumbers([1,2,3], [9,8,7]), [0, 1, 1, 1], 'Test 33');
test(addTwoNumbers([1,2,3], [7,8,9]), [8, 0, 3, 1], 'Test 34');
test(addTwoNumbers([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [5, 6, 4]), [6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 35');
test(addTwoNumbers([1,1,1,1,1,1,1,1,1,1], [9,9,9,9,9,9,9,9,9,9]), [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 36');
test(addTwoNumbers([1,2,3], [4,5,6]), [5, 7, 9], 'Test 37');
test(addTwoNumbers([1,2,3,4,5], [5,4,3,2,1]), [6, 6, 6, 6, 6], 'Test 38');
test(addTwoNumbers([0,0,1], [0,0,1]), [0, 0, 2], 'Test 39');
test(addTwoNumbers([9,9], [1,1,1]), [0, 1, 2], 'Test 40');
test(addTwoNumbers([6,4,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], [3,4,2]), [9, 8, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 41');
test(addTwoNumbers([9], [1]), [0, 1], 'Test 42');
test(addTwoNumbers([1,0,0,0,0,0,0,0,0,0], [1]), [2, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 43');
test(addTwoNumbers([1, 2, 3], [4, 5, 6]), [5, 7, 9], 'Test 44');
test(addTwoNumbers([1,8,9], [2,5,8]), [3, 3, 8, 1], 'Test 45');
test(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]), [8, 9, 9, 9, 0, 0, 0, 1], 'Test 46');
test(addTwoNumbers([3,2,1], [9,8,7]), [2, 1, 9], 'Test 47');
test(addTwoNumbers([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], [5,6,4]), [6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 48');
test(addTwoNumbers([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], [5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6]), [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7], 'Test 49');
test(addTwoNumbers([1,2,3,4,5], [1,2,3,4,5]), [2, 4, 6, 8, 0, 1], 'Test 50');
test(addTwoNumbers([0], [0]), [0], 'Test 51');
test(addTwoNumbers([2,4,9], [5,6,4,9]), [7, 0, 4, 0, 1], 'Test 52');
test(addTwoNumbers([2,4,3], [5,6,4]), [7, 0, 8], 'Test 53');
test(addTwoNumbers([2,4,3,2,5,5,5], [5,6,4]), [7, 0, 8, 2, 5, 5, 5], 'Test 54');
test(addTwoNumbers([1,0,0,0,0], [9,9,9,9,9]), [0, 0, 0, 0, 0, 1], 'Test 55');
test(addTwoNumbers([2,4,6,8], [1,3,5,7]), [3, 7, 1, 6, 1], 'Test 56');
test(addTwoNumbers([9], [1,9,9,9,9,9,9,9,9,9]), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 57');
test(addTwoNumbers([0,1], [0,1]), [0, 2], 'Test 58');
test(addTwoNumbers([7,1,6], [5,9,2]), [2, 1, 9], 'Test 59');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

