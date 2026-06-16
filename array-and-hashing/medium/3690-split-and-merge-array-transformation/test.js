// Test: 3690. Split and Merge Array Transformation
// Run: node test.js

const { minSplitMerge } = require("./solution");

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

console.log("\n3690. Split and Merge Array Transformation\n");

test(minSplitMerge([3,1,2], [1,2,3]), 1, 'Example 1: minSplitMerge([3,1,2], [1,2,3]) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

