// Test: 1969. Minimum Non-Zero Product of the Array Elements
// Run: node test.js

const { minNonZeroProduct } = require("./solution");

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

console.log("\n1969. Minimum Non-Zero Product of the Array Elements\n");

test(minNonZeroProduct(1), 1, 'Example 1: minNonZeroProduct(1) → 1');
test(minNonZeroProduct(2), 6, 'Example 2: minNonZeroProduct(2) → 6');
test(minNonZeroProduct(3), 1512, 'Example 3: minNonZeroProduct(3) → 1512');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

