// Test: 110. Balanced Binary Tree
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { isBalanced } = require("./solution");

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

console.log("\n110. Balanced Binary Tree\n");

test(isBalanced([1,2,3,4,5,6,null,7]), true, 'Test 1');
test(isBalanced([1,2,2,3,3,3,3,4,4,4,4,4,4,null,null,5,5]), true, 'Test 2');
test(isBalanced([1,2,2,3,null,null,3,4,4,4,4]), false, 'Test 3');
test(isBalanced([1,2,2,3,4,4,3]), true, 'Test 4');
test(isBalanced([1,2,2,3,3,null,null,4,4]), false, 'Test 5');
test(isBalanced([1,null,2,null,3]), false, 'Test 6');
test(isBalanced([1,2,3,null,4,null,5,null,6]), false, 'Test 7');
test(isBalanced([1,2,2,3,null,null,3,4,4,null,null,4,4]), false, 'Test 8');
test(isBalanced([3,9,20,null,null,15,7]), true, 'Test 9');
test(isBalanced([1]), true, 'Test 10');
test(isBalanced([]), true, 'Test 11');
test(isBalanced([1,2,2,3,3,3,3,4,4,4,4,5,5,5,5]), true, 'Test 12');
test(isBalanced([1,2,3,null,4,5,null,6,7,8,9,null,null,10,11]), false, 'Test 13');
test(isBalanced([1,2,3,4,null,5,null,6,7,8,9,10,11,12,null,null,13,14,15]), false, 'Test 14');
test(isBalanced([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), false, 'Test 15');
test(isBalanced([1,2,2,3,null,null,3,4,null,null,4]), false, 'Test 16');
test(isBalanced([1,2,3,4,null,null,5,null,6,7,8,9,10,11,12]), false, 'Test 17');
test(isBalanced([1,2,3,4,null,null,7,8,null,10,11,12,null,null,15]), false, 'Test 18');
test(isBalanced([1,2,3,4,null,null,5,null,null,6,null,null,7]), false, 'Test 19');
test(isBalanced([1,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,null,10]), true, 'Test 20');
test(isBalanced([1,2,2,3,null,null,3,4,4,5,5,null,null,6,6]), false, 'Test 21');
test(isBalanced([1,2,3,4,5,6,7,null,9,null,null,14,null,16,17,18,19,null,null,null,null,null,null,null,null,28]), false, 'Test 22');
test(isBalanced([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25,null,26,null,27,null,28,null,29,null,30,null,31,null,32]), false, 'Test 23');
test(isBalanced([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), false, 'Test 24');
test(isBalanced([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]), true, 'Test 25');
test(isBalanced([1,2,2,3,3,3,3,4,4,4,4,4,4,null,4,5,5]), true, 'Test 26');
test(isBalanced([1,2,null,3,4,null,5,null,6,null,7]), false, 'Test 27');
test(isBalanced([1,2,3,4,5,6,7,8,null,null,null,null,null,9,null]), true, 'Test 28');
test(isBalanced([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8]), false, 'Test 29');
test(isBalanced([1,2,3,4,null,null,5,6,null,7,8,9,10,null,null,11,12]), false, 'Test 30');
test(isBalanced([1,2,null,3,null,4,null,5,null,6,null,7,null,8]), false, 'Test 31');
test(isBalanced([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,20,null]), false, 'Test 32');
test(isBalanced([1,2,2,3,3,3,3,4,4,4,4,null,null,null,null,5,5,5,5,null,null,null,null]), false, 'Test 33');
test(isBalanced([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,null,null,null,null,null,null,21]), true, 'Test 34');
test(isBalanced([1,2,3,4,5,6,null,7,8,9,10,null,null,11,12]), false, 'Test 35');
test(isBalanced([1,2,2,3,null,null,4,null,5,6,7,8,9]), false, 'Test 36');
test(isBalanced([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25,null,26,null,27,null,28,null,29,null,30]), false, 'Test 37');
test(isBalanced([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,16]), true, 'Test 38');
test(isBalanced([1,2,2,3,3,3,3,4,4,4,4,null,null,null,null,5,null,null,null,null,6]), false, 'Test 39');
test(isBalanced([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,16]), true, 'Test 40');
test(isBalanced([1,2,2,3,null,null,4,5,null,null,6]), false, 'Test 41');
test(isBalanced([1,2,3,4,5,null,6,7,null,null,null,null,null,8,9]), false, 'Test 42');
test(isBalanced([1,null,3,null,null,null,6,null,null,null,null,12,null,null,null,19]), true, 'Test 43');
test(isBalanced([1,2,2,3,null,null,3,4,null,null,4,5,null,null,5]), false, 'Test 44');
test(isBalanced([1,2,2,3,3,3,3,4,4,4,4,4,4,4,4,5,5,null,null,5]), true, 'Test 45');
test(isBalanced([1,2,3,4,5,null,6,null,7,null,8,9,null,10]), false, 'Test 46');
test(isBalanced([1,2,null,3,4,5,6,7,null,null,null,null,null,8,9,10,11]), false, 'Test 47');
test(isBalanced([1,2,3,4,5,6,7,null,9,null,11,14,null,16,17,18,19,null,23,null,null,null,null,null,null,28]), false, 'Test 48');
test(isBalanced([1,2,2,3,4,4,5,6,7,8,9]), true, 'Test 49');
test(isBalanced([1,2,3,4,null,5,null,6,null,7,null,8,null,9,null,10]), false, 'Test 50');
test(isBalanced([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), true, 'Test 51');
test(isBalanced([1,2,3,4,5,null,6,null,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,16,17]), false, 'Test 52');
test(isBalanced([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), true, 'Test 53');
test(isBalanced([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), true, 'Test 54');
test(isBalanced([1,2,2,3,4,4,5,5,null,null,6,6]), true, 'Test 55');
test(isBalanced([1,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9]), true, 'Test 56');
test(isBalanced([1,2,null,3,null,4,null,5]), false, 'Test 57');
test(isBalanced([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,16]), true, 'Test 58');
test(isBalanced([1,2,3,4,5,null,6,null,7,null,8,null,9,null,10]), false, 'Test 59');
test(isBalanced([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,31]), true, 'Test 60');
test(isBalanced([1,2,3,4,5,6,7,8,null,10,11,12,13,14,15,16,null,null,null,null,null,null,null,null,null,null,null,28,29,30]), false, 'Test 61');
test(isBalanced([1,null,2,null,3,null,4,null,5]), false, 'Test 62');
test(isBalanced([1,2,3,4,5,6,7,null,null,null,8,9,10,null,null,11,12,13,14]), false, 'Test 63');
test(isBalanced([1,2,null,4,null,7,8,14,15]), false, 'Test 64');
test(isBalanced([1,2,3,null,null,4,5,null,null,6,7,null,8]), false, 'Test 65');
test(isBalanced([1,2,3,4,5,6,null,7,8,9,10,11,12,13,14]), false, 'Test 66');
test(isBalanced([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), true, 'Test 67');
test(isBalanced([1,2,2,3,3,3,3,4,4,4,4,5,5,5,null]), true, 'Test 68');
test(isBalanced([1,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,null,null,10,11]), true, 'Test 69');
test(isBalanced([1,null,2,3,null,4,null,5,6,null,7,null,8,null,9,null,10]), false, 'Test 70');
test(isBalanced([1,2,3,4,5,null,null,6,7,8,9,null,null,null,null,10,11,12,13,null,null,null,null,null,null,null,14]), false, 'Test 71');
test(isBalanced([1,null,2,null,null,null,3,null,null,null,4]), true, 'Test 72');
test(isBalanced([1,2,3,4,5,6,7,8,9,10,11,12,13,null,15,16,17]), true, 'Test 73');
test(isBalanced([1,null,2,null,3,null,4,null,5,null,6,null,7]), false, 'Test 74');
test(isBalanced([1,2,2,3,3,3,3,null,null,null,null,null,null,null,4]), true, 'Test 75');
test(isBalanced([1,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,null]), true, 'Test 76');
test(isBalanced([1,2,3,4,null,null,7,8,null,10,null,14,null,16,17,18,19,null,null,null,null,null,null,null,null,28]), false, 'Test 77');
test(isBalanced([1,2,2,3,null,null,3,null,4,null,4]), false, 'Test 78');
test(isBalanced([1,2,2,3,3,3,3,4,4,4,4,4,4,4,4]), true, 'Test 79');
test(isBalanced([1,2,3,4,5,6,7,8,9,10,11,12,null,null,13,null,null,14]), true, 'Test 80');
test(isBalanced([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20]), false, 'Test 81');
test(isBalanced([1,2,null,3,null,4,null,5,null,6,null,7]), false, 'Test 82');
test(isBalanced([1,2,3,4,null,null,5,6,null,7,null,8,null,9,null,10]), false, 'Test 83');
test(isBalanced([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9]), false, 'Test 84');
test(isBalanced([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,null,null,16]), true, 'Test 85');
test(isBalanced([1,2,3,4,5,null,null,6,7,8,9,null,null,null,null,10,11,12,13,null,null,null,null,null,null,14,15,16,17,18,19,20]), false, 'Test 86');
test(isBalanced([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,16,17]), true, 'Test 87');
test(isBalanced([1,null,2,null,3,null,4,null,5,null,6]), false, 'Test 88');
test(isBalanced([1,2,2,3,4,4,3,5,null,6,null,null,null,null,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), false, 'Test 89');
test(isBalanced([1,2,2,3,null,null,3,4,4,null,null,5,5]), false, 'Test 90');
test(isBalanced([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12]), false, 'Test 91');
test(isBalanced([1,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6]), true, 'Test 92');
test(isBalanced([1,2,3,4,null,5,6,null,null,7,null,8,9]), true, 'Test 93');
test(isBalanced([1,2,3,4,null,6,null,8,null,10,11,12,null,null,null,16,null,null,null,null,null,null,25]), false, 'Test 94');
test(isBalanced([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), false, 'Test 95');
test(isBalanced([1,2,2,3,3,null,null,4,4,null,null,5,5]), false, 'Test 96');
test(isBalanced([1,2,null,3,4,null,null,5,null,6]), false, 'Test 97');
test(isBalanced([1,2,2,3,3,3,3,4,4,4,4,5,5,6,6,7,7,8,8,9,9]), true, 'Test 98');
test(isBalanced([1,2,2,null,3,3,null,4,4]), false, 'Test 99');
test(isBalanced([1,2,2,3,4,null,3,4,5,null,5]), true, 'Test 100');
test(isBalanced([1,2,3,4,null,null,5,6,7,8,9,10,11,12,13,14,15]), false, 'Test 101');
test(isBalanced([1,2,2,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), true, 'Test 102');
test(isBalanced([1,2,3,4,5,6,7,8,9,10,11,12,13,14,null]), true, 'Test 103');
test(isBalanced([1,2,3,null,4,null,5,null,6,null,7]), false, 'Test 104');
test(isBalanced([1,2,2,3,3,3,3,4,4,4,4,null,null,null,null,null,null,null,5]), false, 'Test 105');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

