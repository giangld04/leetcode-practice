// Test: 589. N-ary Tree Preorder Traversal
// Run: node test.js

const { preorder } = require("./solution");

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

console.log("\n589. N-ary Tree Preorder Traversal\n");

test(preorder([1,null,3,2,4,null,5,6]), [1,3,5,6,2,4], 'Example 1: preorder([1,null,3,2,4,null,5,6]) → [1,3,5,6,2,4]');
test(preorder([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]), [1,2,3,6,7,11,14,4,8,12,5,9,13,10], 'Example 2: preorder([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]) → [1,2,3,6,7,11,14,4,8,12,5,9,13,10]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

