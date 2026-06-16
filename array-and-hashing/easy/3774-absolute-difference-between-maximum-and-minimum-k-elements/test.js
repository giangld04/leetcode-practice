// Test: 3774. Absolute Difference Between Maximum and Minimum K Elements
// Run: node test.js

const { absDifference } = require("./solution");

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

console.log("\n3774. Absolute Difference Between Maximum and Minimum K Elements\n");

test(absDifference([5,2,2,4], 2), 5, 'Example 1: absDifference([5,2,2,4], 2) → 5');
test(absDifference([100], 1), 0, 'Example 2: absDifference([100], 1) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

