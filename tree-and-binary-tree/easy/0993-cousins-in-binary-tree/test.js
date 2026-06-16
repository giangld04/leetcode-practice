// Test: 993. Cousins In Binary Tree
// 54 test cases from LeetCodeDataset
// Run: node test.js

const { isCousins } = require("./solution");

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

console.log("\n993. Cousins In Binary Tree\n");

test(isCousins([1,2,3,4,null,null,null,5,null,6], 5, 6), false, 'Test 1');
test(isCousins([1,2,3,null,4,null,5], 5, 4), true, 'Test 2');
test(isCousins([1,2,3,4,5,6,7,null,null,8,9,null,null,10,11], 9, 11), true, 'Test 3');
test(isCousins([1,2,3,null,4,null,null,5,null,6], 5, 6), false, 'Test 4');
test(isCousins([1,2,3,4,5,6,7], 2, 3), false, 'Test 5');
test(isCousins([1,2,3,4,5,null,null,6,7,null,8,null,null,9], 6, 8), true, 'Test 6');
test(isCousins([1,2,3,4,5,6,7,null,null,8,9,10,11,null,null,null,null,12,13], 10, 11), false, 'Test 7');
test(isCousins([1,2,3,4], 4, 3), false, 'Test 8');
test(isCousins([1,2,3,null,4,null,5,null,null,6,7], 6, 7), false, 'Test 9');
test(isCousins([1,2,3,null,4], 2, 3), false, 'Test 10');
test(isCousins([1,2,3,null,null,4,5], 4, 5), false, 'Test 11');
test(isCousins([1,2,3,4,5,6,7,null,null,8,9,null,null,10,11], 3, 7), false, 'Test 12');
test(isCousins([1,2,3,4,5,6,7], 4, 7), true, 'Test 13');
test(isCousins([1,2,3,4,5,6,7,null,null,8,9,null,null,10,11], 2, 3), false, 'Test 14');
test(isCousins([1,2,3,4,5,null,null,null,null,6,7], 6, 7), false, 'Test 15');
test(isCousins([1,2,3,null,null,6,7,8,9], 8, 9), false, 'Test 16');
test(isCousins([1,2,3,null,4,null,null,5,6,null,null,null,null,7,8], 7, 8), false, 'Test 17');
test(isCousins([1,2,3,null,null,6,7], 6, 7), false, 'Test 18');
test(isCousins([1,2,3,4,5,6,7,null,null,8,9,null,null,10,11], 4, 9), false, 'Test 19');
test(isCousins([1,2,3,4,5,6,7,null,null,8,9], 4, 9), false, 'Test 20');
test(isCousins([1,2,3,null,4,null,null,5], 5, 4), false, 'Test 21');
test(isCousins([1,2,3,4,5,6,7,null,null,8,9,null,null,10,11], 4, 6), true, 'Test 22');
test(isCousins([1,2,3,4,5,null,null,null,null,6,null,null,7], 6, 7), false, 'Test 23');
test(isCousins([1,2,3,4,5,6,7,null,null,8,9], 8, 5), false, 'Test 24');
test(isCousins([1,2,3,4,5,6,7], 4, 6), true, 'Test 25');
test(isCousins([1,2,3,4,null,null,null,null,5], 4, 5), false, 'Test 26');
test(isCousins([1,2,3,4,5,6,7], 5, 7), true, 'Test 27');
test(isCousins([1,2,3,4,5,null,6,null,null,7,8], 7, 8), false, 'Test 28');
test(isCousins([1,2,3,null,null,4,5,null,null,6,7], 6, 7), false, 'Test 29');
test(isCousins([1,2,3,4,5,6,7], 6, 5), true, 'Test 30');
test(isCousins([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 8, 11), true, 'Test 31');
test(isCousins([1,2,3,4,5,6,7,null,null,8,9,null,null,10,11,null,null,12], 12, 11), false, 'Test 32');
test(isCousins([1,2,3,4,null,null,null,null,5], 2, 3), false, 'Test 33');
test(isCousins([1,2,3,null,4,null,5,6,null,null,7], 6, 7), true, 'Test 34');
test(isCousins([1,2,3,4,5,6,7,null,null,8,null,null,9,null,null,10], 8, 10), false, 'Test 35');
test(isCousins([1,2,3,null,4,5], 4, 5), true, 'Test 36');
test(isCousins([1,2,3,4,5,null,null,6,7], 6, 7), false, 'Test 37');
test(isCousins([1,2,3,null,4,null,null,5,6], 5, 6), false, 'Test 38');
test(isCousins([1,2,3,4,5,6,7,null,null,8,9,null,null,10,11], 10, 11), false, 'Test 39');
test(isCousins([1,2,3,4,5,6,7], 4, 5), false, 'Test 40');
test(isCousins([1,2,3,4,5,null,null,6,7,null,null,8,9], 8, 9), false, 'Test 41');
test(isCousins([1,2,3,4,null,null,null], 4, 3), false, 'Test 42');
test(isCousins([1,2,3,4,5,null,null,6,7], 4, 7), false, 'Test 43');
test(isCousins([1,2,3,4,5,6,7,null,null,8,9,null,null,10,11], 8, 9), false, 'Test 44');
test(isCousins([1,2,3,4,5,6,7,null,null,null,null,8,9], 8, 9), false, 'Test 45');
test(isCousins([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 10, 14), true, 'Test 46');
test(isCousins([1,2,3,4,5,6,7,null,null,null,8,9,10,11], 10, 11), true, 'Test 47');
test(isCousins([1,2,3,4,5,null,null,null,null,6,7], 6, 5), false, 'Test 48');
test(isCousins([1,2,3,4,5,6,7,null,null,null,null,null,null,8,9], 8, 9), false, 'Test 49');
test(isCousins([1,2,3,4,5,6,7,null,null,null,8,9], 8, 9), true, 'Test 50');
test(isCousins([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 3, 15), false, 'Test 51');
test(isCousins([1,2,3,4,null,null,null,5,6], 5, 6), false, 'Test 52');
test(isCousins([1,2,3,4,5,6,7,null,null,8,9,null,null,10,11,null,null,12,13], 12, 13), false, 'Test 53');
test(isCousins([1,2,3,4,null,null,5,null,6], 6, 5), false, 'Test 54');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

