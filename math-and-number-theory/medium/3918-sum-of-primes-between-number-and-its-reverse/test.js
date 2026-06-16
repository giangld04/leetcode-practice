// Test: 3918. Sum of Primes Between Number and Its Reverse
// Run: node test.js

const { sumOfPrimesInRange } = require("./solution");

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

console.log("\n3918. Sum of Primes Between Number and Its Reverse\n");

test(sumOfPrimesInRange(13), 132, 'Example 1: sumOfPrimesInRange(13) → 132');
test(sumOfPrimesInRange(10), 17, 'Example 2: sumOfPrimesInRange(10) → 17');
test(sumOfPrimesInRange(8), 0, 'Example 3: sumOfPrimesInRange(8) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

