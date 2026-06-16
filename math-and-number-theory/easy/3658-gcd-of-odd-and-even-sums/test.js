// Test: 3658. GCD of Odd and Even Sums
// Run: node test.js

const { gcdOfOddEvenSums } = require("./solution");

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

console.log("\n3658. GCD of Odd and Even Sums\n");

test(gcdOfOddEvenSums(4), 4, 'Example 1: gcdOfOddEvenSums(4) → 4');
test(gcdOfOddEvenSums(5), 5, 'Example 2: gcdOfOddEvenSums(5) → 5');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

