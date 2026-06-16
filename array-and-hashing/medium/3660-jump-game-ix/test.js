// Test: 3660. Jump Game IX
// Run: node test.js

const { maxValue } = require("./solution");

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

console.log("\n3660. Jump Game IX\n");

test(maxValue([2,1,3]), [2,2,3], 'Example 1: maxValue([2,1,3]) → [2,2,3]');
test(maxValue([2,3,1]), [3,3,3], 'Example 2: maxValue([2,3,1]) → [3,3,3]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

