// Test: 3712. Sum of Elements With Frequency Divisible by K
// Run: node test.js

const { sumDivisibleByK } = require("./solution");

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

console.log("\n3712. Sum of Elements With Frequency Divisible by K\n");

test(sumDivisibleByK([1,2,2,3,3,3,3,4], 2), 16, 'Example 1: sumDivisibleByK([1,2,2,3,3,3,3,4], 2) → 16');
test(sumDivisibleByK([1,2,3,4,5], 2), 0, 'Example 2: sumDivisibleByK([1,2,3,4,5], 2) → 0');
test(sumDivisibleByK([4,4,4,1,2,3], 3), 12, 'Example 3: sumDivisibleByK([4,4,4,1,2,3], 3) → 12');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

