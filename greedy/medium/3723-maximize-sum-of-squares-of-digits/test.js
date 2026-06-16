// Test: 3723. Maximize Sum of Squares of Digits
// Run: node test.js

const { maxSumOfSquares } = require("./solution");

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

console.log("\n3723. Maximize Sum of Squares of Digits\n");

test(maxSumOfSquares(2, 3), "30", 'Example 1: maxSumOfSquares(2, 3) → "30"');
test(maxSumOfSquares(2, 17), "98", 'Example 2: maxSumOfSquares(2, 17) → "98"');
test(maxSumOfSquares(1, 10), "", 'Example 3: maxSumOfSquares(1, 10) → ""');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

