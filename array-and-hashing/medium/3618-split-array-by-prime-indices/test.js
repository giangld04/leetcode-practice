// Test: 3618. Split Array by Prime Indices
// Run: node test.js

const { splitArray } = require("./solution");

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

console.log("\n3618. Split Array by Prime Indices\n");

test(splitArray([2,3,4]), 1, 'Example 1: splitArray([2,3,4]) → 1');
test(splitArray([-1,5,7,0]), 3, 'Example 2: splitArray([-1,5,7,0]) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

