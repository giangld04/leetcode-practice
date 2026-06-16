// Test: 2649. Nested Array Generator
// Run: node test.js

const { inorderTraversal } = require("./solution");

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

console.log("\n2649. Nested Array Generator\n");

test(inorderTraversal([[[6]],[1,3],[]]), [6,1,3], 'Example 1: inorderTraversal([[[6]],[1,3],[]]) → [6,1,3]');
test(inorderTraversal([]), [], 'Example 2: inorderTraversal([]) → []');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

