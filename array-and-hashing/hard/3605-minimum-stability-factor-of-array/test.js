// Test: 3605. Minimum Stability Factor of Array
// Run: node test.js

const { minStable } = require("./solution");

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

console.log("\n3605. Minimum Stability Factor of Array\n");

test(minStable([3,5,10], 1), 1, 'Example 1: minStable([3,5,10], 1) → 1');
test(minStable([2,6,8], 2), 1, 'Example 2: minStable([2,6,8], 2) → 1');
test(minStable([2,4,9,6], 1), 2, 'Example 3: minStable([2,4,9,6], 1) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

