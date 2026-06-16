// Test: 3574. Maximize Subarray GCD Score
// Run: node test.js

const { maxGCDScore } = require("./solution");

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

console.log("\n3574. Maximize Subarray GCD Score\n");

test(maxGCDScore([2,4], 1), 8, 'Example 1: maxGCDScore([2,4], 1) → 8');
test(maxGCDScore([3,5,7], 2), 14, 'Example 2: maxGCDScore([3,5,7], 2) → 14');
test(maxGCDScore([5,5,5], 1), 15, 'Example 3: maxGCDScore([5,5,5], 1) → 15');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

