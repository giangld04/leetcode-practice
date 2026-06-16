// Test: 1325. Delete Leaves With A Given Value
// 31 test cases from LeetCodeDataset
// Run: node test.js

const { removeLeafNodes } = require("./solution");

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

console.log("\n1325. Delete Leaves With A Given Value\n");

test(removeLeafNodes(target), Error: Solution.removeLeafNodes[] missing 2 required positional arguments: 'root' and 'target', 'Test 1');
test(removeLeafNodes(root), Error: Solution.removeLeafNodes[] missing 2 required positional arguments: 'root' and 'target', 'Test 2');
test(removeLeafNodes([1,2,null,2,null,2], 2), [1], 'Test 3');
test(removeLeafNodes([1000,1000,1000,1000,1000,1000,1000], 1000), null, 'Test 4');
test(removeLeafNodes([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), null, 'Test 5');
test(removeLeafNodes([1,2,3,null,4,5,null,6,7,null,8,9,10], 5), [1, 2, 3, null, 4, 5, null, 6, 7, null, 8, 9, 10], 'Test 6');
test(removeLeafNodes([1,2,3,2,null,2,4], 2), [1, null, 3, null, 4], 'Test 7');
test(removeLeafNodes([1,2,3,4,2,2,4,2,null,2,null,2,null,2], 2), [1, 2, 3, 4, null, null, 4], 'Test 8');
test(removeLeafNodes([1,3,3,3,2], 3), [1, 3, null, null, 2], 'Test 9');
test(removeLeafNodes([1,2,3,null,null,null,4], 4), [1, 2, 3], 'Test 10');
test(removeLeafNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 15), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 11');
test(removeLeafNodes([1,2,2,3,3,3,3,2,2,2,2,2,2,2,2], 3), [1, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2], 'Test 12');
test(removeLeafNodes([1,2,3], 4), [1, 2, 3], 'Test 13');
test(removeLeafNodes([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 2), [1], 'Test 14');
test(removeLeafNodes([1,2,3,null,null,4,5], 2), [1, null, 3, 4, 5], 'Test 15');
test(removeLeafNodes([1,null,1,null,1,null,1], 1), null, 'Test 16');
test(removeLeafNodes([1,2,3], 2), [1, null, 3], 'Test 17');
test(removeLeafNodes([1,2,3,4,5,6,7], 7), [1, 2, 3, 4, 5, 6], 'Test 18');
test(removeLeafNodes([1,1,1,1,1,1,1], 1), null, 'Test 19');
test(removeLeafNodes([1,2,3,2,2,2,2,2,2,2,2,2,2,2,2], 2), [1, null, 3], 'Test 20');
test(removeLeafNodes([1,null,1,null,1,null,1,null,1], 1), null, 'Test 21');
test(removeLeafNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 11, 12, 13, 14, 15], 'Test 22');
test(removeLeafNodes([1,null,3,null,4,5,null,6,7], 2), [1, null, 3, null, 4, 5, null, 6, 7], 'Test 23');
test(removeLeafNodes([1], 1), null, 'Test 24');
test(removeLeafNodes([1,2,3,null,null,4,5], 5), [1, 2, 3, null, null, 4], 'Test 25');
test(removeLeafNodes([1,2,3,2,2,2,4], 2), [1, null, 3, null, 4], 'Test 26');
test(removeLeafNodes([1,null,3,3,3], 3), [1], 'Test 27');
test(removeLeafNodes([1,null,3,2,2,null,4,2,null,2], 2), [1, null, 3, 2, null, null, 4], 'Test 28');
test(removeLeafNodes([1,2,3,4,5,6,7], 3), [1, 2, 3, 4, 5, 6, 7], 'Test 29');
test(removeLeafNodes([1,2,3,2,2,2,2], 2), [1, null, 3], 'Test 30');
test(removeLeafNodes([1,null,1,1,1,1,1,1], 1), null, 'Test 31');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

