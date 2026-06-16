// Test: 1457. Pseudo-Palindromic Paths in a Binary Tree
// Run: node test.js

const { pseudoPalindromicPaths } = require("./solution");

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

console.log("\n1457. Pseudo-Palindromic Paths in a Binary Tree\n");

test(pseudoPalindromicPaths([2,3,1,3,1,null,1]), 2, 'Example 1: pseudoPalindromicPaths([2,3,1,3,1,null,1]) → 2');
test(pseudoPalindromicPaths([2,1,1,1,3,null,null,null,null,null,1]), 1, 'Example 2: pseudoPalindromicPaths([2,1,1,1,3,null,null,null,null,null,1]) → 1');
test(pseudoPalindromicPaths([9]), 1, 'Example 3: pseudoPalindromicPaths([9]) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

