// Test: 3828. Final Element After Subarray Deletions
// Run: node test.js

const { finalElement } = require("./solution");

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

console.log("\n3828. Final Element After Subarray Deletions\n");

test(finalElement([1,5,2]), 2, 'Example 1: finalElement([1,5,2]) → 2');
test(finalElement([3,7]), 7, 'Example 2: finalElement([3,7]) → 7');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

