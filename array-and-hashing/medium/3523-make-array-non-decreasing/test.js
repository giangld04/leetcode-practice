// Test: 3523. Make Array Non-decreasing
// Run: node test.js

const { maximumPossibleSize } = require("./solution");

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

console.log("\n3523. Make Array Non-decreasing\n");

test(maximumPossibleSize([4,2,5,3,5]), 3, 'Example 1: maximumPossibleSize([4,2,5,3,5]) → 3');
test(maximumPossibleSize([1,2,3]), 3, 'Example 2: maximumPossibleSize([1,2,3]) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

