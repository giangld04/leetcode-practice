// Test: 3765. Complete Prime Number
// Run: node test.js

const { completePrime } = require("./solution");

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

console.log("\n3765. Complete Prime Number\n");

test(completePrime(23), true, 'Example 1: completePrime(23) → true');
test(completePrime(39), false, 'Example 2: completePrime(39) → false');
test(completePrime(7), true, 'Example 3: completePrime(7) → true');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

