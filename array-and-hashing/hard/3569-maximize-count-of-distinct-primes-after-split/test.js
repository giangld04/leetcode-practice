// Test: 3569. Maximize Count of Distinct Primes After Split
// Run: node test.js

const { maximumCount } = require("./solution");

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

console.log("\n3569. Maximize Count of Distinct Primes After Split\n");

test(maximumCount([2,1,3,1,2], [[1,2],[3,3]]), [3,4], 'Example 1: maximumCount([2,1,3,1,2], [[1,2],[3,3]]) → [3,4]');
test(maximumCount([2,1,4], [[0,1]]), [0], 'Example 2: maximumCount([2,1,4], [[0,1]]) → [0]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

