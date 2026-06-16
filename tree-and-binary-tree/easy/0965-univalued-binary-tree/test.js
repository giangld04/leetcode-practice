// Test: 965. Univalued Binary Tree
// 77 test cases from LeetCodeDataset
// Run: node test.js

const { isUnivalTree } = require("./solution");

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

console.log("\n965. Univalued Binary Tree\n");

test(isUnivalTree([1,1,1,1,1,null,1]), true, 'Test 1');
test(isUnivalTree([2,2,2,5,2]), false, 'Test 2');
test(isUnivalTree([1,1,1,1,1,1,2]), false, 'Test 3');
test(isUnivalTree([0,0,0,0,0,0,0]), true, 'Test 4');
test(isUnivalTree([1,1,2]), false, 'Test 5');
test(isUnivalTree([5,5,5,5,5,5,5]), true, 'Test 6');
test(isUnivalTree([1,2,1,1,1,null,1]), false, 'Test 7');
test(isUnivalTree([0]), true, 'Test 8');
test(isUnivalTree([5]), true, 'Test 9');
test(isUnivalTree([6,6,6,6,6,6,6,6,6,6,6,6,6,null,6,6,6,6,6,6,6]), true, 'Test 10');
test(isUnivalTree([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), true, 'Test 11');
test(isUnivalTree([2,2,2,2,2,2,2,null,2,2,null,2,null,2,null,2,2]), true, 'Test 12');
test(isUnivalTree([9,9,9,9,9,9,9,null,null,9,null,9,null,9,null]), true, 'Test 13');
test(isUnivalTree([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,null,9,null,9]), true, 'Test 14');
test(isUnivalTree([10,10,10,null,10,10,null,10,null,10,10,10,null,10]), true, 'Test 15');
test(isUnivalTree([4,4,4,4,4,null,4,4,null,null,4,4,null,4,4,4,null,4,4,null,null,4]), true, 'Test 16');
test(isUnivalTree([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), true, 'Test 17');
test(isUnivalTree([6,6,6,6,6,6,6,null,6,6,6,null,null,6,6,6,null,6,6,6,6]), true, 'Test 18');
test(isUnivalTree([4,4,4,4,4,4,4,4,4,4,4]), true, 'Test 19');
test(isUnivalTree([1,1,1,1,1,1,null,null,null,1,1,1,1]), true, 'Test 20');
test(isUnivalTree([6,6,6,6,null,6,6,6,null,6,6,6,6,null,6,6,6,6]), true, 'Test 21');
test(isUnivalTree([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,null,2]), true, 'Test 22');
test(isUnivalTree([1,1,1,1,1,1,null,null,null,null,null,null,null,1,1]), true, 'Test 23');
test(isUnivalTree([9,9,9,9,null,9,9,9,9,null,9,null,9,9,9,9,9]), true, 'Test 24');
test(isUnivalTree([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), true, 'Test 25');
test(isUnivalTree([6,6,6,6,6,6,6,6,null,null,6,6,6,6,6]), true, 'Test 26');
test(isUnivalTree([3,3,3,3,3,3,3,null,3,null,3,null,3]), true, 'Test 27');
test(isUnivalTree([3,3,3,3,3,3,null,3,3,null,3,3,3,null,3]), true, 'Test 28');
test(isUnivalTree([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), true, 'Test 29');
test(isUnivalTree([8,8,8,8,8,8,8,null,8,8,8,null,8,8,8,null,8,8,8,null,8,8,8,null,8,8,8,null,8,8,8]), true, 'Test 30');
test(isUnivalTree([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,null,10,null,10,null,10]), true, 'Test 31');
test(isUnivalTree([7,7,7,7,7,7,7,7,null,7,null,7,null,7,null,7]), true, 'Test 32');
test(isUnivalTree([4,4,4,4,4,null,4,null,4,null,4,null,4,4,4]), true, 'Test 33');
test(isUnivalTree([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), true, 'Test 34');
test(isUnivalTree([7,7,7,7,7,7,7,null,null,7,7,null,null,7,7]), true, 'Test 35');
test(isUnivalTree([10,10,10,10,10,10,10,null,null,10,null,10,null,10,null,10,null,10,null,10]), true, 'Test 36');
test(isUnivalTree([6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,null,6,null,6,null,6,null,6,null,6,null,6,null,6,null,6,7]), false, 'Test 37');
test(isUnivalTree([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,null,3,null,3,null,3,null,3,null,3,null,3,null,3,null,3,null,3,4]), false, 'Test 38');
test(isUnivalTree([6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,null,6]), true, 'Test 39');
test(isUnivalTree([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,null,1]), true, 'Test 40');
test(isUnivalTree([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]), true, 'Test 41');
test(isUnivalTree([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,null,4,null,4,null,4,null,4,null,4,null,4,null,4,null,4,5]), false, 'Test 42');
test(isUnivalTree([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,null,5,null,5,null,5,null,5,null,5,null,5,null,5,null,5,6]), false, 'Test 43');
test(isUnivalTree([1,1,2,1,1,1,1,null,1,1,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1]), false, 'Test 44');
test(isUnivalTree([1,2,null,1,null,1,null,1,null,1]), false, 'Test 45');
test(isUnivalTree([3,3,3,3,null,3,3,3,null,null,3]), true, 'Test 46');
test(isUnivalTree([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]), true, 'Test 47');
test(isUnivalTree([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 48');
test(isUnivalTree([1,1,2,1,1,null,null,null,null,1,1,1,1]), false, 'Test 49');
test(isUnivalTree([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,null,2]), true, 'Test 50');
test(isUnivalTree([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), false, 'Test 51');
test(isUnivalTree([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), true, 'Test 52');
test(isUnivalTree([1,1,2,1,1,null,1,null,1,null,1,null,1]), false, 'Test 53');
test(isUnivalTree([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), true, 'Test 54');
test(isUnivalTree([7,7,7,7,7,7,7,7,null,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), true, 'Test 55');
test(isUnivalTree([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 56');
test(isUnivalTree([1,2,1,1,1,null,1,null,1,null,1,null,1]), false, 'Test 57');
test(isUnivalTree([4,4,4,4,4,4,4,null,4,4,4,null,4,4,4,null,4,4,4,null,4,4,4,null,4,4,5]), false, 'Test 58');
test(isUnivalTree([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,null,null,null,null,2,2,2,2,2,2,2,2]), true, 'Test 59');
test(isUnivalTree([9,9,9,9,null,9,9,9,null,null,9,9,9,9,9]), true, 'Test 60');
test(isUnivalTree([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 61');
test(isUnivalTree([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 62');
test(isUnivalTree([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,null,5,5,5,5,5]), true, 'Test 63');
test(isUnivalTree([8,8,null,8,null,8,null,8,null,8]), true, 'Test 64');
test(isUnivalTree([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,null,2,null,2,null,2,null,2,null,2,null,2,null,2,null,2,null,2]), true, 'Test 65');
test(isUnivalTree([8,8,8,8,8,8,null,8,8,8,8,8,8,8,8,8,8,8,8]), true, 'Test 66');
test(isUnivalTree([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), true, 'Test 67');
test(isUnivalTree([9,9,9,9,null,9,9,null,9,9,9,9,9,9,9]), true, 'Test 68');
test(isUnivalTree([6,6,6,6,6,6,null,6,6,null,6,6,null,6,6]), true, 'Test 69');
test(isUnivalTree([11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,null,11,null,11,null,11,null,11,null,11]), true, 'Test 70');
test(isUnivalTree([11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,null,11,null,11,null,11,null,11]), true, 'Test 71');
test(isUnivalTree([4,4,4,4,4,null,4,null,null,4,4,null,null,4]), true, 'Test 72');
test(isUnivalTree([10,10,10,10,10,10,10,null,10,10,10,null,10,10,10,null,10,10,10,null,10,10,10,null,10,10,10,null,10,10,10]), true, 'Test 73');
test(isUnivalTree([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 74');
test(isUnivalTree([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,null,7,null,7,null,7,null,7,null,7,null,7,null,7,null,7,8]), false, 'Test 75');
test(isUnivalTree([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,null,8,null,8]), true, 'Test 76');
test(isUnivalTree([7,7,7,7,7,7,7,7,null,7,7,7,7,7,7]), true, 'Test 77');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

