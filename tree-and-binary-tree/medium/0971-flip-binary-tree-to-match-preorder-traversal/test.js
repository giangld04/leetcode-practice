// Test: 971. Flip Binary Tree To Match Preorder Traversal
// 91 test cases from LeetCodeDataset
// Run: node test.js

const { flipMatchVoyage } = require("./solution");

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

console.log("\n971. Flip Binary Tree To Match Preorder Traversal\n");

test(flipMatchVoyage([1,2,3], [1,3,2]), [1], 'Test 1');
test(flipMatchVoyage([1,2,3,null,null,4,5], [1,3,5,4,2]), [1, 3], 'Test 2');
test(flipMatchVoyage([1,2,3,4,5,6,7], [1,2,3,4,5,6,7]), [-1], 'Test 3');
test(flipMatchVoyage([1,2,3,4,5,6,7], [1,2,4,5,3,6,7]), [], 'Test 4');
test(flipMatchVoyage([1,2,3,4,5], [1,3,5,4,2]), [-1], 'Test 5');
test(flipMatchVoyage([1,2,3], [1,2,3]), [], 'Test 6');
test(flipMatchVoyage([1,2,3,4,5], [1,2,4,5,3]), [], 'Test 7');
test(flipMatchVoyage([1,null,2], [1,2]), [], 'Test 8');
test(flipMatchVoyage([1,2,3,4,5], [1,3,2,5,4]), [1, 2], 'Test 9');
test(flipMatchVoyage([1,2,3,4,5,6,7], [1,3,7,6,2,5,4]), [1, 3, 2], 'Test 10');
test(flipMatchVoyage([1,2,3,null,null,4,5], [1,2,3,4,5]), [], 'Test 11');
test(flipMatchVoyage([1,2], [2,1]), [-1], 'Test 12');
test(flipMatchVoyage([1,2,3,4,5,6,7], [1,3,7,6,5,2,4]), [-1], 'Test 13');
test(flipMatchVoyage([1,2,null,3], [1,2,3]), [], 'Test 14');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,7,14,15,6,12,13,2,5,10,11,4,8,9]), [1, 3, 2], 'Test 15');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,3,5,4,7,6,9,8,11,10,13,12,15,14]), [-1], 'Test 16');
test(flipMatchVoyage([1,2,3,4,null,6,7,8,9,10,11,null,13,14,15], [1,3,7,15,14,13,6,11,10,9,2,5,4,8]), [-1], 'Test 17');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,4,9,8,5,11,10,3,6,13,12,7,15,14]), [4, 5, 6, 7], 'Test 18');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,4,5,6,7,8,9,10,11,12,13,14,15,3]), [-1], 'Test 19');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,6,5,4,7,2,10,9,8,13,12,11,15,14]), [-1], 'Test 20');
test(flipMatchVoyage([1,2,3,4,null,null,5,null,6,7,8], [1,3,5,8,7,6,2,4]), [-1], 'Test 21');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,null,null,9,10,11,null,12,null,13,null,null,14], [1,2,4,8,3,5,10,11,6,12,13,7,9,14]), [-1], 'Test 22');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,15,14,13,12,11,10,9,8,7,6,5,4,2]), [-1], 'Test 23');
test(flipMatchVoyage([1,2,3,null,null,4,5,6,7,null,null,8,9,10,11], [1,3,5,11,10,9,8,7,6,2,4]), [-1], 'Test 24');
test(flipMatchVoyage([1,2,3,null,null,null,4,null,null,5,null,null,6,null,null,7,null,null,8], [1,3,4,8,7,6,5,2]), [-1], 'Test 25');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,6,12,13,7,14,15,2,4,8,9,5,10,11]), [1], 'Test 26');
test(flipMatchVoyage([1,2,null,3,4,5,6], [1,2,3,4,5,6]), [-1], 'Test 27');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,7,15,14,13,6,12,11,10,9,8,2,5,4]), [-1], 'Test 28');
test(flipMatchVoyage([1,2,3,4,5,null,null,6,7,null,null,null,null,8,9], [1,3,5,7,9,8,6,2,4]), [-1], 'Test 29');
test(flipMatchVoyage([1,2,3,4,5,6,7,null,null,8,9,null,null,10,11,null,null,12,13,null,null,14,15], [1,3,7,6,5,2,4,9,8,11,10,13,12]), [-1], 'Test 30');
test(flipMatchVoyage([1,2,3,4,5,6,7,null,null,null,null,null,null,8,9], [1,3,7,8,9,6,2,5,4]), [1, 3, 2], 'Test 31');
test(flipMatchVoyage([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9], [1,2,3,4,5,6,7,8,9]), [], 'Test 32');
test(flipMatchVoyage([1,2,3,4,5,null,6,7,null,null,null,null,8,9], [1,3,6,8,9,2,4,5]), [-1], 'Test 33');
test(flipMatchVoyage([1,null,2,null,3,null,4,null,5,null,6], [1,2,3,4,5,6]), [], 'Test 34');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,7,15,14,13,8,12,6,11,10,9,5,4,2]), [-1], 'Test 35');
test(flipMatchVoyage([1,2,3,4,5,null,null,6,null,null,null,null,7], [1,2,4,6,7,5,3]), [], 'Test 36');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,2,6,5,4,7,11,10,9,13,12,8,15,14]), [-1], 'Test 37');
test(flipMatchVoyage([1,2,3,4,null,5,6,null,7,8,9,10,null,null,11,12,null,null,13,null,null,14,15], [1,3,6,10,12,14,15,13,9,11,8,5,4,2]), [-1], 'Test 38');
test(flipMatchVoyage([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9], [1,2,3,4,5,6,7,8,9]), [], 'Test 39');
test(flipMatchVoyage([1,2,3,4,5,6,7,null,8,null,9,null,10], [1,2,4,5,6,10,7,3,8,9]), [-1], 'Test 40');
test(flipMatchVoyage([1,2,3,null,4,5,null,6,null,7,null,8,null,9], [1,3,5,9,8,7,6,2,4]), [-1], 'Test 41');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,3,4,6,5,7,8,9,10,11,12,13,15,14]), [-1], 'Test 42');
test(flipMatchVoyage([1,2,3,null,4,null,5,6], [1,3,5,6,2,4]), [-1], 'Test 43');
test(flipMatchVoyage([1,2,3,4,null,5,6,null,null,7,8,9,10], [1,2,4,3,6,10,9,8,5,7]), [-1], 'Test 44');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [-1], 'Test 45');
test(flipMatchVoyage([1,2,3,4,null,5,6,7,null,null,null,null,8], [1,3,6,8,5,4,2]), [-1], 'Test 46');
test(flipMatchVoyage([1,2,3,4,null,5,6,null,null,7,8,null,null,9,10], [1,3,6,10,9,2,4,5,8,7]), [-1], 'Test 47');
test(flipMatchVoyage([1,2,3,4,5,null,6,null,null,7,8,null,null,9,10], [1,3,6,10,9,2,5,8,7,4]), [-1], 'Test 48');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,2,5,4,7,6,9,8,11,10,13,12,14,15]), [-1], 'Test 49');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,4,8,9,10,11,5,12,13,6,14,15,3,7]), [-1], 'Test 50');
test(flipMatchVoyage([1,2,3,4,5,6,7,null,null,8,9,10,11,12,13,14,15], [1,3,7,15,14,13,6,12,11,5,10,9,4,2]), [-1], 'Test 51');
test(flipMatchVoyage([1,2,3,4,5,6,7,null,8,null,9,null,10,null,null,11,null,12], [1,2,4,5,6,10,11,7,3,8,12,9]), [-1], 'Test 52');
test(flipMatchVoyage([1,2,3,4,5,6,7,null,null,8,9,null,null,10,11,null,null,12,13], [1,3,7,13,12,6,11,10,9,8,2,5,4]), [-1], 'Test 53');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,7,15,14,13,12,6,11,10,9,8,2,5,4]), [-1], 'Test 54');
test(flipMatchVoyage([1,2,3,4,null,5,6], [1,2,4,3,5,6]), [], 'Test 55');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,7,15,14,13,12,6,11,10,9,5,4,2]), [-1], 'Test 56');
test(flipMatchVoyage([1,2,null,4,5,null,null,8,9], [1,2,5,4,9,8]), [-1], 'Test 57');
test(flipMatchVoyage([1,2,3,null,4,null,5,null,null,null,6,null,null,7], [1,3,5,6,7,4,2]), [-1], 'Test 58');
test(flipMatchVoyage([1,2,3,4,null,null,5,null,6,7,null,8,9], [1,2,4,3,5,7,8,9,6]), [-1], 'Test 59');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,7,14,15,6,13,12,2,5,11,10,4,9,8]), [1, 3, 6, 2, 5, 4], 'Test 60');
test(flipMatchVoyage([1,2,3,4,5,6,7,null,null,8,9,10,11,12,13], [1,3,7,13,12,6,11,10,9,2,5,4,8]), [-1], 'Test 61');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,null,null,10,null,11,12,null,null,13,14,15,null,null,null,null,null,null,null,null,null,16], [1,2,4,8,13,14,15,9,16,5,10,6,11,12,3,7]), [-1], 'Test 62');
test(flipMatchVoyage([1,2,3,4,5,null,6,null,null,7,8,null,null,9,10], [1,2,4,7,8,5,3,6,9,10]), [-1], 'Test 63');
test(flipMatchVoyage([1,2,3,null,4,null,5,null,6,null,7], [1,3,5,7,2,4,6]), [1], 'Test 64');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,3,4,6,5,8,7,10,9,12,11,14,13,15]), [-1], 'Test 65');
test(flipMatchVoyage([1,2,null,3,4,null,null,5,6], [1,2,4,3,5,6]), [-1], 'Test 66');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10], [1,3,7,8,9,6,10,5,4,2]), [-1], 'Test 67');
test(flipMatchVoyage([1,2,3,4,5,null,null,6,7,8,9,null,null,10,11], [1,2,4,6,10,7,11,5,8,9,3]), [-1], 'Test 68');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,null,null,null,null,null,null,null,9,10,11,12,13,14,15], [1,2,4,8,9,10,11,5,3,6,7,12,13,14,15]), [-1], 'Test 69');
test(flipMatchVoyage([1,2,3,4,null,5,6,null,7,null,8], [1,2,4,3,6,5,8,7]), [-1], 'Test 70');
test(flipMatchVoyage([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9], [1,2,4,5,6,7,8,9,3]), [-1], 'Test 71');
test(flipMatchVoyage([1,2,3,4,5,6,7,null,null,null,null,8,9,10,11,12,13,14,15], [1,2,4,5,3,6,7,12,8,9,10,11,13,14,15]), [-1], 'Test 72');
test(flipMatchVoyage([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], [1,2,3,4,5,6,7,8,9,10]), [], 'Test 73');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,2,7,6,5,4,15,14,13,12,11,10,9,8]), [-1], 'Test 74');
test(flipMatchVoyage([1,2,3,4,5,null,6,7,8,9,10,null,null,11,12,null,null,null,null,13,14,15], [1,3,6,13,14,15,11,12,8,9,10,7,2,4,5]), [-1], 'Test 75');
test(flipMatchVoyage([1,2,3,4,5,6,7,null,null,null,null,8,9,null,null,10,11], [1,3,7,11,10,9,8,6,5,4,2]), [-1], 'Test 76');
test(flipMatchVoyage([1,2,3,4,5,null,6,null,7,8,9,10,11,12,13,14,15], [1,3,6,15,14,13,12,11,10,9,5,4,2]), [-1], 'Test 77');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,7,15,14,13,12,6,11,10,9,5,4,2,8]), [-1], 'Test 78');
test(flipMatchVoyage([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11], [1,2,4,5,6,7,8,9,10,11,3]), [-1], 'Test 79');
test(flipMatchVoyage([1,2,3,4,5,null,null,6,7,8,9], [1,2,4,6,7,5,8,9,3]), [], 'Test 80');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,7,15,14,13,12,11,6,10,9,8,2,5,4]), [-1], 'Test 81');
test(flipMatchVoyage([1,2,3,4,null,null,5,null,6], [1,2,4,3,5,6]), [-1], 'Test 82');
test(flipMatchVoyage([1,2,3,null,4,null,5,null,null,6,null,null,7,8,9], [1,3,5,9,8,7,2,4,6]), [-1], 'Test 83');
test(flipMatchVoyage([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9], [1,3,5,9,8,7,6,2,4]), [-1], 'Test 84');
test(flipMatchVoyage([1,2,null,3,null,4,null,5], [1,2,3,4,5]), [], 'Test 85');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,2,4,8,9,5,10,11,3,6,12,13,7,14,15]), [], 'Test 86');
test(flipMatchVoyage([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15], [1,3,5,7,15,14,13,12,6,11,10,9,4,2]), [-1], 'Test 87');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [1,3,2,5,4,7,6,9,8,11,10,13,12,15,14]), [-1], 'Test 88');
test(flipMatchVoyage([1,2,3,null,4,5,null,6,7], [1,2,4,6,7,3,5]), [], 'Test 89');
test(flipMatchVoyage([1,2,3,4,5,6,7,8,9,10], [1,3,7,6,2,5,4,10,9,8]), [-1], 'Test 90');
test(flipMatchVoyage([1,2,3,4,5,null,6,null,null,7,8,null,null,9,10], [1,3,6,10,5,4,2,7,8,9]), [-1], 'Test 91');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

