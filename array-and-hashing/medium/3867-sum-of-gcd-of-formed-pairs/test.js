// Test: 3867. Sum of GCD of Formed Pairs
// Run: node test.js

const { gcdSum } = require("./solution");

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

console.log("\n3867. Sum of GCD of Formed Pairs\n");

test(gcdSum([2,6,4]), 2, 'Example 1: gcdSum([2,6,4]) → 2');
test(gcdSum([3,6,2,8]), 5, 'Example 2: gcdSum([3,6,2,8]) → 5');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

