// Test: 3781. Maximum Score After Binary Swaps
// Run: node test.js

const { maximumScore } = require("./solution");

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

console.log("\n3781. Maximum Score After Binary Swaps\n");

test(maximumScore([2,1,5,2,3], "01010"), 7, 'Example 1: maximumScore([2,1,5,2,3], "01010") → 7');
test(maximumScore([4,7,2,9], "0000"), 0, 'Example 2: maximumScore([4,7,2,9], "0000") → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

