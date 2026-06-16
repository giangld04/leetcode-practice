// Test: 55. Jump Game
// 66 test cases from LeetCodeDataset
// Run: node test.js

const { canJump } = require("./solution");

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

console.log("\n55. Jump Game\n");

test(canJump([1,1,1,1,1,1,1,1,1,1]), true, 'Test 1');
test(canJump([2,5,0,0]), true, 'Test 2');
test(canJump([1,1,1,1,1]), true, 'Test 3');
test(canJump([0]), true, 'Test 4');
test(canJump([5,0,0,0,0]), true, 'Test 5');
test(canJump([1,2,3]), true, 'Test 6');
test(canJump([2,3,1,1,4]), true, 'Test 7');
test(canJump([3,2,1,0,4]), false, 'Test 8');
test(canJump([1,0,1,0]), false, 'Test 9');
test(canJump([10,9,8,7,6,5,4,3,2,1,0]), true, 'Test 10');
test(canJump([1,2,3,4,5]), true, 'Test 11');
test(canJump([5,9,4,2,1]), true, 'Test 12');
test(canJump([2,0,0]), true, 'Test 13');
test(canJump([9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), false, 'Test 14');
test(canJump([1,3,2,1,0,4]), false, 'Test 15');
test(canJump([2,3,1,1,4,2,3,1,1,1]), true, 'Test 16');
test(canJump([4,2,0,0,1,1,4,4,0,4]), true, 'Test 17');
test(canJump([3,0,8,2,0,0,1,1,1,1,1,1]), true, 'Test 18');
test(canJump([2,0,1,0,2,0,1,0,2,0,1,0,2,0,1,0]), false, 'Test 19');
test(canJump([1,0,3,4,5,0]), false, 'Test 20');
test(canJump([2,5,0,0,1,1,1,1,0,2]), false, 'Test 21');
test(canJump([10,9,8,7,6,5,4,3,2,1]), true, 'Test 22');
test(canJump([1,2,3,4,5,6,7,8,9,10]), true, 'Test 23');
test(canJump([10,0,0,0,0,0,0,0,0,1]), true, 'Test 24');
test(canJump([3,0,8,2,0,0,1]), true, 'Test 25');
test(canJump([2,0,0,0,1,0]), false, 'Test 26');
test(canJump([2,3,0,1,4]), true, 'Test 27');
test(canJump([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10]), true, 'Test 28');
test(canJump([3,2,1,3,4,2,1,0,0,0,0]), false, 'Test 29');
test(canJump([1,1,2,2,3,3,4,4,5,5]), true, 'Test 30');
test(canJump([2,5,0,1,3,2,1]), true, 'Test 31');
test(canJump([1,0,1,0,1,0,1,0,1,0]), false, 'Test 32');
test(canJump([1,3,2,0,0,0,0,0,0,1]), false, 'Test 33');
test(canJump([10,0,0,0,0,0,0,0,0,9]), true, 'Test 34');
test(canJump([0,2,3,1,4,2,2,1,0,1]), false, 'Test 35');
test(canJump([1,3,5,7,9,11,13,15,17,19]), true, 'Test 36');
test(canJump([1,0,1,0,1,0,1,0,1,0,1,0,1]), false, 'Test 37');
test(canJump([5,4,3,2,1,0,0,0,0,0,0,0,0]), false, 'Test 38');
test(canJump([3,5,0,0,0,0,0,0,0,0,0,0,1]), false, 'Test 39');
test(canJump([1,2,1,1,1,1,1,1,1,1,1,1]), true, 'Test 40');
test(canJump([4,3,2,1,0,0,0,0,0]), false, 'Test 41');
test(canJump([2,0,0,0,1]), false, 'Test 42');
test(canJump([1,2,1,2,1,2,1,2,1,2]), true, 'Test 43');
test(canJump([1,3,5,7,9,11,13,15,17,19,21]), true, 'Test 44');
test(canJump([0,2,3,4,5,6,7,8,9,10]), false, 'Test 45');
test(canJump([1,1,0,0,1,1,0,0,1,1,0,0,1,1]), false, 'Test 46');
test(canJump([9,0,0,0,0,0,0,0,0,0]), true, 'Test 47');
test(canJump([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), true, 'Test 48');
test(canJump([1,2,3,4,0,0,0,0,0,0,0,0]), false, 'Test 49');
test(canJump([3,2,1,0,4,0,0,0,0,0,0,0,0,0,0]), false, 'Test 50');
test(canJump([1,2,0,2,0,1,0,0,1,0]), false, 'Test 51');
test(canJump([1,1,1,1,1,0,1,1,1,1,1]), false, 'Test 52');
test(canJump([2,3,1,1,4,0,0,0,0,0,0,0,0,0,0]), false, 'Test 53');
test(canJump([10,2,14,1,0,0,0,0,0,0]), true, 'Test 54');
test(canJump([0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), false, 'Test 55');
test(canJump([1,1,2,2,3,3,4,4,5,5,6,6]), true, 'Test 56');
test(canJump([2,0,2,0,1,1]), true, 'Test 57');
test(canJump([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), false, 'Test 58');
test(canJump([1,0,1,0,1,0,1,0,1,0,1]), false, 'Test 59');
test(canJump([2,3,1,1,4,2,1,0,1,3,1,0,1]), true, 'Test 60');
test(canJump([1,2,3,4,3,2,1,2,3,4,5,0,0,1]), true, 'Test 61');
test(canJump([0,2,3]), false, 'Test 62');
test(canJump([1,1,1,1,1,1,1,1,1,0]), true, 'Test 63');
test(canJump([1,1,2,2,1,1,1,1,1,0,0]), false, 'Test 64');
test(canJump([4,2,0,0,1,1,4,0,0,0,1]), true, 'Test 65');
test(canJump([2,5,0,0,0,0,4,1,1,1,1]), true, 'Test 66');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

