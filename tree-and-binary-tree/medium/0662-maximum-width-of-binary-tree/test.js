// Test: 662. Maximum Width Of Binary Tree
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { widthOfBinaryTree } = require("./solution");

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

console.log("\n662. Maximum Width Of Binary Tree\n");

test(widthOfBinaryTree([1,2,3,4,5,6,7]), 4, 'Test 1');
test(widthOfBinaryTree([1,3,2,5,3,null,9]), 4, 'Test 2');
test(widthOfBinaryTree([1,3,2,5,null,null,9,6,null,7]), 7, 'Test 3');
test(widthOfBinaryTree([1,2,3,null,4,null,5,null,6,null,7]), 5, 'Test 4');
test(widthOfBinaryTree([1,3,2,5]), 2, 'Test 5');
test(widthOfBinaryTree([1,null,2]), 1, 'Test 6');
test(widthOfBinaryTree([1]), 1, 'Test 7');
test(widthOfBinaryTree([1,3,null,null,5]), 1, 'Test 8');
test(widthOfBinaryTree([1,3,2,5,null,null,9,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 49, 'Test 9');
test(widthOfBinaryTree([1,2,3,null,5,null,7,8,null,null,9,null,null,10]), 6, 'Test 10');
test(widthOfBinaryTree([1,3,2,5,null,null,9,6,null,7,null,null,null,null,8]), 7, 'Test 11');
test(widthOfBinaryTree([1,2,3,null,null,4,5,null,null,6,null,null,7,8,9,null,null,null,null,10,null,null,11]), 2, 'Test 12');
test(widthOfBinaryTree([1,2,2,3,null,null,3,4,null,null,4]), 8, 'Test 13');
test(widthOfBinaryTree([1,3,null,5,3,null,9,6,7,null,8,null,null,null,9,null,null,null,null,10]), 5, 'Test 14');
test(widthOfBinaryTree([1,3,null,5,3,null,9]), 2, 'Test 15');
test(widthOfBinaryTree([1,3,2,5,3,null,9,6,null,7,8,null,10,null,null,11,null,null,null,null,null,null,null,12]), 8, 'Test 16');
test(widthOfBinaryTree([1,3,2,5,null,3,9,6,7,null,null,null,null,8,null,null,10,null,null,null,11,null,12]), 4, 'Test 17');
test(widthOfBinaryTree([1,3,2,5,3,null,9,6,null,7,null,null,8,null,null,null,null,null,null,null,17]), 8, 'Test 18');
test(widthOfBinaryTree([1,3,2,5,3,null,9,6,null,7,null,null,null,null,8]), 4, 'Test 19');
test(widthOfBinaryTree([1,2,null,4,null,null,null,8,null,null,null,null,null,null,null,16]), 1, 'Test 20');
test(widthOfBinaryTree([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16]), 65, 'Test 21');
test(widthOfBinaryTree([1,3,2,null,5,6,null,7,null,null,8,null,9,null,10]), 7, 'Test 22');
test(widthOfBinaryTree([1,2,3,null,4,5,6,null,null,7,null,null,8,9]), 4, 'Test 23');
test(widthOfBinaryTree([1,3,2,5,null,null,9,6,null,7,null,10,null,null,11,null,null,null,null,12,null,null,13,null,null,14,null,null,15]), 14, 'Test 24');
test(widthOfBinaryTree([1,null,3,null,null,null,9,6,null,7]), 1, 'Test 25');
test(widthOfBinaryTree([1,2,3,4,5,null,6,7,null,null,null,null,8]), 8, 'Test 26');
test(widthOfBinaryTree([1,3,2,null,null,null,9,6,null,null,7,null,null,null,null,null,8,null,null,null,10]), 2, 'Test 27');
test(widthOfBinaryTree([1,3,2,5,4,6,7,null,9,10,11,null,null,12,null,null,13,null,null,null,null,14,null,null,null,null,15]), 10, 'Test 28');
test(widthOfBinaryTree([1,null,2,null,null,null,3,null,null,null,null,4,null,null,null,null,5]), 1, 'Test 29');
test(widthOfBinaryTree([1,null,2,null,null,3,null,null,null,null,4]), 1, 'Test 30');
test(widthOfBinaryTree([1,3,2,5,3,9,6,7,8,10,11,12,13,14,15]), 8, 'Test 31');
test(widthOfBinaryTree([1,3,2,null,null,5,4,null,null,8,null,null,7,9,10]), 2, 'Test 32');
test(widthOfBinaryTree([1,3,2,5,null,null,9,6,null,7,null,null,null,null,null,8]), 7, 'Test 33');
test(widthOfBinaryTree([1,3,2,5,null,9,6,7,null,null,null,8]), 7, 'Test 34');
test(widthOfBinaryTree([1,3,null,5,3,null,9,6,null,7,null,null,8]), 4, 'Test 35');
test(widthOfBinaryTree([1,3,2,5,3,null,9,null,null,null,null,null,null,6,null,7]), 4, 'Test 36');
test(widthOfBinaryTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 15, 'Test 37');
test(widthOfBinaryTree([1,3,2,null,null,5,null,6]), 2, 'Test 38');
test(widthOfBinaryTree([1,2,3,null,4,null,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12]), 2, 'Test 39');
test(widthOfBinaryTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 8, 'Test 40');
test(widthOfBinaryTree([1,3,2,5,null,null,9,6,null,7,null,10,null,null,11,null,null,null,null,12]), 14, 'Test 41');
test(widthOfBinaryTree([1,null,2,null,null,3,null,null,4,null,null,5,null,null,6]), 1, 'Test 42');
test(widthOfBinaryTree([1,3,2,5,null,null,9,6,7,null,null,null,null,null,8,9,10]), 4, 'Test 43');
test(widthOfBinaryTree([1,2,3,null,4,null,5,null,null,6,7,null,null,null,null,null,null,8,9,null,null,null,null,10,11]), 3, 'Test 44');
test(widthOfBinaryTree([1,3,2,5,null,9,6,null,7,null,null,8,null,null,null,11,null,null,null,12,null,null,null,13]), 6, 'Test 45');
test(widthOfBinaryTree([1,3,2,5,null,null,9,null,null,7,8,null,null,null,null,10,11]), 4, 'Test 46');
test(widthOfBinaryTree([1,3,2,5,3,null,9,6,null,null,7,null,8,null,9]), 8, 'Test 47');
test(widthOfBinaryTree([1,null,2,null,3,null,4,null,5]), 1, 'Test 48');
test(widthOfBinaryTree([1,3,2,5,3,null,9,6,null,7,null,null,null,null,null,null,8]), 4, 'Test 49');
test(widthOfBinaryTree([1,3,2,5,null,null,9,null,null,null,null,6,null,null,null,null,7,null,null,null,null,8]), 4, 'Test 50');
test(widthOfBinaryTree([1,2,3,null,4,5,6,null,7,null,8,9,10,null,null,null,null,null,null,11]), 5, 'Test 51');
test(widthOfBinaryTree([1,null,2,3,null,4,5,6,null,7,null,8,null,9,null,10]), 5, 'Test 52');
test(widthOfBinaryTree([1,2,3,4,5,6,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 13, 'Test 53');
test(widthOfBinaryTree([1,null,2,null,3,null,4]), 1, 'Test 54');
test(widthOfBinaryTree([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 65, 'Test 55');
test(widthOfBinaryTree([1,3,2,5,4,6,7,8,9,10,11,12,13,14,15]), 8, 'Test 56');
test(widthOfBinaryTree([1,3,2,5,3,null,9,6,null,7,null,null,null,null,null,8,null,null,11]), 4, 'Test 57');
test(widthOfBinaryTree([1,3,2,5,4,null,9,null,null,6,7,8,9]), 6, 'Test 58');
test(widthOfBinaryTree([1,null,3,2,null,4,null,5,6,null,7,null,8,null,9,null,10,null,11]), 5, 'Test 59');
test(widthOfBinaryTree([1,3,2,5,null,9,6,null,7,8,null,null,null,null,10]), 4, 'Test 60');
test(widthOfBinaryTree([1,2,3,4,null,null,5,null,null,6,7,null,null,null,null,null,null,8,9]), 4, 'Test 61');
test(widthOfBinaryTree([1,3,2,5,3,null,9,null,null,6,null,null,null,null,7,null,null,8,null,null,null,null,9,null,null,10,null,null,11,null,12]), 4, 'Test 62');
test(widthOfBinaryTree([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 1, 'Test 63');
test(widthOfBinaryTree([1,3,2,5,null,null,9,null,null,6,null,null,null,null,7,null,null,null,null,8,null,null,null,null,9]), 4, 'Test 64');
test(widthOfBinaryTree([1,3,2,null,5,6,null,7,null,8,9]), 4, 'Test 65');
test(widthOfBinaryTree([1,3,2,5,3,null,9,6,null,7,null,8,null,9]), 7, 'Test 66');
test(widthOfBinaryTree([1,3,2,5,null,null,9,null,null,6,null,null,null,null,7,null,null,null,null,8,null,null,null,null,9,null,null,null,null,10]), 4, 'Test 67');
test(widthOfBinaryTree([1,3,2,5,3,9,8,6,null,7,null,null,null,10,null,null,11]), 7, 'Test 68');
test(widthOfBinaryTree([1,3,2,5,3,9,8,6,null,null,null,null,7,null,null,10]), 6, 'Test 69');
test(widthOfBinaryTree([1,3,2,null,null,5,9,null,6,7,null,null,null,8,9]), 2, 'Test 70');
test(widthOfBinaryTree([1,2,null,3,null,4,null,5,null,6,null,7]), 1, 'Test 71');
test(widthOfBinaryTree([1,3,2,5,null,null,9,6,null,7,null,8,null,9,null,10]), 13, 'Test 72');
test(widthOfBinaryTree([1,null,2,null,3,null,4,null,5,null,6]), 1, 'Test 73');
test(widthOfBinaryTree([1,3,null,5,3]), 2, 'Test 74');
test(widthOfBinaryTree([1,3,2,5,null,9,6,7,8,null,null,10,null,null,null,11,null,null,null,12,null,null,null,13,null,null,null,14,null,null,null,15]), 7, 'Test 75');
test(widthOfBinaryTree([1,3,2,5,null,null,9,6,null,7,null,10,null,null,11]), 14, 'Test 76');
test(widthOfBinaryTree([1,3,2,null,3,null,2,null,null,5,6,null,null,7,8,null,null,9,null,null,null,null,null,10]), 3, 'Test 77');
test(widthOfBinaryTree([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12]), 1, 'Test 78');
test(widthOfBinaryTree([1,3,2,5,null,null,9,null,8,null,7]), 7, 'Test 79');
test(widthOfBinaryTree([1,2,3,null,4,5,null,6,null,7,null,8,null,9]), 5, 'Test 80');
test(widthOfBinaryTree([1,3,2,5,null,null,9,null,null,null,null,6,null,null,7]), 4, 'Test 81');
test(widthOfBinaryTree([1,3,2,5,null,null,9,null,null,null,null,null,6,null,null,null,null,null,null,7]), 4, 'Test 82');
test(widthOfBinaryTree([1,3,2,5,null,null,9,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13]), 49, 'Test 83');
test(widthOfBinaryTree([1,3,2,5,null,null,9,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14]), 49, 'Test 84');
test(widthOfBinaryTree([1,3,2,5,null,null,9,6,null,7,null,8,null,9,null,10,null,11,null,12]), 25, 'Test 85');
test(widthOfBinaryTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), 8, 'Test 86');
test(widthOfBinaryTree([1,3,2,5,null,null,9,null,null,6,null,null,7]), 4, 'Test 87');
test(widthOfBinaryTree([1,null,2,3,null,4,null,null,5]), 1, 'Test 88');
test(widthOfBinaryTree([1,3,2,5,null,null,9,6,null,7,null,null,8,null,null,null,null,null,null,null,17,null,null,null,null,null,null,null,null,null,null,null,null,null,18]), 7, 'Test 89');
test(widthOfBinaryTree([1,3,2,5,null,null,9,6,null,7,null,10,null,null,11,null,null,null,null,12,null,null,13]), 14, 'Test 90');
test(widthOfBinaryTree([1,3,null,null,2]), 1, 'Test 91');
test(widthOfBinaryTree([1,3,2,null,null,5,9,null,null,null,7,null,null,null,null,8,9]), 2, 'Test 92');
test(widthOfBinaryTree([1,3,2,5,null,null,9,6,null,7,null,null,null,8,null,null,10,11,null,null,null,null,12,null,13]), 7, 'Test 93');
test(widthOfBinaryTree([1,3,2,5,null,null,9,6,null,7,null,8,null,null,null,9,null,null,null,10]), 7, 'Test 94');
test(widthOfBinaryTree([1,3,2,5,3,null,9,null,null,6,null,null,null,null,7,null,null,null,null,8,null,null,null,null,9,null,null,null,null,10,null,null,11,null,12,null,13,null,14,null,15]), 4, 'Test 95');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

