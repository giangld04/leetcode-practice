// Test: 3556. Sum of Largest Prime Substrings
// Run: node test.js

const { sumOfLargestPrimes } = require("./solution");

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

console.log("\n3556. Sum of Largest Prime Substrings\n");

test(sumOfLargestPrimes("12234"), 1469, 'Example 1: sumOfLargestPrimes("12234") → 1469');
test(sumOfLargestPrimes("111"), 11, 'Example 2: sumOfLargestPrimes("111") → 11');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

