// Test: 3908. Valid Digit Number
// Run: node test.js

const { validDigit } = require("./solution");

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

console.log("\n3908. Valid Digit Number\n");

test(validDigit(101, 0), true, 'Example 1: validDigit(101, 0) → true');
test(validDigit(232, 2), false, 'Example 2: validDigit(232, 2) → false');
test(validDigit(5, 1), false, 'Example 3: validDigit(5, 1) → false');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

