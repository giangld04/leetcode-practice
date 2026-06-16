// Test: 235. Lowest Common Ancestor of a Binary Search Tree
// Run: node test.js

const { lowestCommonAncestor } = require("./solution");

let passed = 0, failed = 0;
function test(actual, expected, label) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    console.log(`  ✓ ${label}`);
    passed++;
  } else {
    console.log(`  ✗ ${label}`);
    console.log(`    Expected: ${e}`);
    console.log(`    Actual:   ${a}`);
    failed++;
  }
}

console.log("\n235. Lowest Common Ancestor of a Binary Search Tree\n");

test(lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 2, 8), 6, 'Example 1: lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 2, 8) → 6');
test(lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 2, 4), 2, 'Example 2: lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 2, 4) → 2');
test(lowestCommonAncestor([2,1], 2, 1), 2, 'Example 3: lowestCommonAncestor([2,1], 2, 1) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

