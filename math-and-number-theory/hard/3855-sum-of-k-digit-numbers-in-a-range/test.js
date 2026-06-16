// Test: 3855. Sum of K-Digit Numbers in a Range
// Run: node test.js

const { sumOfNumbers } = require("./solution");

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

console.log("\n3855. Sum of K-Digit Numbers in a Range\n");

test(sumOfNumbers(1, 2, 2), 66, 'Example 1: sumOfNumbers(1, 2, 2) → 66');
test(sumOfNumbers(0, 1, 3), 444, 'Example 2: sumOfNumbers(0, 1, 3) → 444');
test(sumOfNumbers(5, 5, 10), 555555520, 'Example 3: sumOfNumbers(5, 5, 10) → 555555520');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

