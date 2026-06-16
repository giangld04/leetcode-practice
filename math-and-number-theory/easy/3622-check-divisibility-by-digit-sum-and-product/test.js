// Test: 3622. Check Divisibility by Digit Sum and Product
// Run: node test.js

const { checkDivisibility } = require("./solution");

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

console.log("\n3622. Check Divisibility by Digit Sum and Product\n");

test(checkDivisibility(99), true, 'Example 1: checkDivisibility(99) → true');
test(checkDivisibility(23), false, 'Example 2: checkDivisibility(23) → false');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

