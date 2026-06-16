// Test: 1932. Merge BSTs to Create Single BST
// Run: node test.js

const { canMerge } = require("./solution");

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

console.log("\n1932. Merge BSTs to Create Single BST\n");

test(canMerge([[2,1],[3,2,5],[5,4]]), [3,2,5,1,null,4], 'Example 1: canMerge([[2,1],[3,2,5],[5,4]]) → [3,2,5,1,null,4]');
test(canMerge([[5,3,8],[3,2,6]]), [], 'Example 2: canMerge([[5,3,8],[3,2,6]]) → []');
test(canMerge([[5,4],[3]]), [], 'Example 3: canMerge([[5,4],[3]]) → []');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

