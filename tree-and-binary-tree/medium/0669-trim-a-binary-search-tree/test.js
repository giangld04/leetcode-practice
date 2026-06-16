// Test: 669. Trim A Binary Search Tree
// 34 test cases from LeetCodeDataset
// Run: node test.js

const { trimBST } = require("./solution");

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

console.log("\n669. Trim A Binary Search Tree\n");

test(trimBST(high), Error: Solution.trimBST[] missing 3 required positional arguments: 'root', 'low', and 'high', 'Test 1');
test(trimBST(low), Error: Solution.trimBST[] missing 3 required positional arguments: 'root', 'low', and 'high', 'Test 2');
test(trimBST(root), Error: Solution.trimBST[] missing 3 required positional arguments: 'root', 'low', and 'high', 'Test 3');
test(trimBST([3,1,4,null,2], 1, 2), [1, null, 2], 'Test 4');
test(trimBST([5,3,6,2,4,null,8,1,null,null,null,7,9], 2, 8), [5, 3, 6, 2, 4, null, 8, null, null, null, null, 7], 'Test 5');
test(trimBST([5,3,6,2,4,null,7], 3, 6), [5, 3, 6, null, 4], 'Test 6');
test(trimBST([3,1,4,null,2], 2, 4), [3, 2, 4], 'Test 7');
test(trimBST([5,3,6,2,4,null,7], 2, 5), [5, 3, null, 2, 4], 'Test 8');
test(trimBST([1,null,2,null,3,null,4], 3, 4), [3, null, 4], 'Test 9');
test(trimBST([8,3,10,1,6,null,14,null,null,4,7,13], 5, 13), [8, 6, 10, null, 7, null, 13], 'Test 10');
test(trimBST([1,null,2], 1, 1), [1], 'Test 11');
test(trimBST([1,2,null,2,null,3], 2, 4), null, 'Test 12');
test(trimBST([10,5,15,3,7,null,18], 7, 15), [10, 7, 15], 'Test 13');
test(trimBST([1], 1, 2), [1], 'Test 14');
test(trimBST([1,0,2,null,null,0.5,1.5], 0.5, 1.5), [1, null, 0.5], 'Test 15');
test(trimBST([2,1,3], 1, 2), [2, 1], 'Test 16');
test(trimBST([1,null,2], 2, 2), [2], 'Test 17');
test(trimBST([3,0,4,null,2,null,null,1], 1, 3), [3, 2, null, 1], 'Test 18');
test(trimBST([5,3,6,2,4,null,7], 3, 5), [5, 3, null, null, 4], 'Test 19');
test(trimBST([1,0,2], 1, 2), [1, null, 2], 'Test 20');
test(trimBST([1, null, 2], 1, 3), [1, null, 2], 'Test 21');
test(trimBST([1, null, 2, null, 3, null, 4, null, 5], 4, 5), [4, null, 5], 'Test 22');
test(trimBST([1,3,5,null,null,2,4], 2, 4), [2], 'Test 23');
test(trimBST([5,3,6,2,4,null,null,1], 2, 4), [3, 2, 4], 'Test 24');
test(trimBST([3,1,4,null,2], 3, 4), [3, null, 4], 'Test 25');
test(trimBST([1, null, 2, null, 3], 3, 3), [3], 'Test 26');
test(trimBST([1, null, 2], 2, 4), [2], 'Test 27');
test(trimBST([1,0,2,null,null,1.5,2.5], 1, 2), [1, null, 2, 1.5], 'Test 28');
test(trimBST([1,0,2,null,null,1.5,3], 1, 2), [1, null, 2, 1.5], 'Test 29');
test(trimBST([2,null,3], 2, 2), [2], 'Test 30');
test(trimBST([1,2,3,4,5], 4, 5), null, 'Test 31');
test(trimBST([1, null, 2, null, 3, null, 4], 3, 4), [3, null, 4], 'Test 32');
test(trimBST([1,null,2,null,3,null,4,null,5], 3, 4), [3, null, 4], 'Test 33');
test(trimBST([1], 0, 0), null, 'Test 34');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

