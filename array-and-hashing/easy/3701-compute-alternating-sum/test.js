// Test: 3701. Compute Alternating Sum
// Run: node test.js

const { alternatingSum } = require("./solution");

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

console.log("\n3701. Compute Alternating Sum\n");

test(alternatingSum([1,3,5,7]), -4, 'Example 1: alternatingSum([1,3,5,7]) → -4');
test(alternatingSum([100]), 100, 'Example 2: alternatingSum([100]) → 100');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

