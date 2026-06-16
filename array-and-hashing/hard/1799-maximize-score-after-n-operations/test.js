// Test: 1799. Maximize Score After N Operations
// Run: node test.js

const { maxScore } = require("./solution");

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

console.log("\n1799. Maximize Score After N Operations\n");

test(maxScore([1,2]), 1, 'Example 1: maxScore([1,2]) → 1');
test(maxScore([3,4,6,8]), 11, 'Example 2: maxScore([3,4,6,8]) → 11');
test(maxScore([1,2,3,4,5,6]), 14, 'Example 3: maxScore([1,2,3,4,5,6]) → 14');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

