// Test: 3747. Count Distinct Integers After Removing Zeros
// Run: node test.js

const { countDistinct } = require("./solution");

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

console.log("\n3747. Count Distinct Integers After Removing Zeros\n");

test(countDistinct(10), 9, 'Example 1: countDistinct(10) → 9');
test(countDistinct(3), 3, 'Example 2: countDistinct(3) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

