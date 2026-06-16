// Test: 3770. Largest Prime from Consecutive Prime Sum
// Run: node test.js

const { largestPrime } = require("./solution");

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

console.log("\n3770. Largest Prime from Consecutive Prime Sum\n");

test(largestPrime(20), 17, 'Example 1: largestPrime(20) → 17');
test(largestPrime(2), 2, 'Example 2: largestPrime(2) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

