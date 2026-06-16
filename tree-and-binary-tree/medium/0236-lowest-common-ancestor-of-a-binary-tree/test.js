// Test: 236. Lowest Common Ancestor Of A Binary Tree
// 23 test cases from LeetCodeDataset
// Run: node test.js

const { lowestCommonAncestor } = require("./solution");

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

console.log("\n236. Lowest Common Ancestor Of A Binary Tree\n");

test(lowestCommonAncestor(root), Error: Solution.lowestCommonAncestor[] missing 3 required positional arguments: 'root', 'p', and 'q', 'Test 1');
test(lowestCommonAncestor(q), Error: Solution.lowestCommonAncestor[] missing 3 required positional arguments: 'root', 'p', and 'q', 'Test 2');
test(lowestCommonAncestor(p), Error: Solution.lowestCommonAncestor[] missing 3 required positional arguments: 'root', 'p', and 'q', 'Test 3');
test(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 5, 1), null, 'Test 4');
test(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 2, 7), null, 'Test 5');
test(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 6, 8), null, 'Test 6');
test(lowestCommonAncestor([37,-34,-48,null,-100,-101,48,null,null,null,null,-54,null,-71,-22,null,null,null,8], -100, -101), null, 'Test 7');
test(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 5, 4), null, 'Test 8');
test(lowestCommonAncestor([3,1,4,null,2], 2, 1), null, 'Test 9');
test(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 6, 4), null, 'Test 10');
test(lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 0, 5), null, 'Test 11');
test(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 3, 0), null, 'Test 12');
test(lowestCommonAncestor([30,15,18,3,17,19,20,1,16,null,null,null,14,15,null,null,9,11], 3, 17), null, 'Test 13');
test(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 6, 2), null, 'Test 14');
test(lowestCommonAncestor([3,1,4,null,2], 2, 3), null, 'Test 15');
test(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 0, 8), null, 'Test 16');
test(lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 3, 5), null, 'Test 17');
test(lowestCommonAncestor([2,1], 2, 1), null, 'Test 18');
test(lowestCommonAncestor([1,2], 1, 2), null, 'Test 19');
test(lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 7, 4), null, 'Test 20');
test(lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 2, 4), null, 'Test 21');
test(lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 2, 8), null, 'Test 22');
test(lowestCommonAncestor([37,-34,-48,null,-100,-100,48,null,null,null,null,-54,null,-71,-22,null,null,null,8], -100, 48), null, 'Test 23');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

