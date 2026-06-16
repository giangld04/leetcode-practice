// Test: 3691. Maximum Total Subarray Value II
// Run: node test.js

const { maxTotalValue } = require("./solution");

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

console.log("\n3691. Maximum Total Subarray Value II\n");

test(maxTotalValue([1,3,2], 2), 4, 'Example 1: maxTotalValue([1,3,2], 2) → 4');
test(maxTotalValue([4,2,5,1], 3), 12, 'Example 2: maxTotalValue([4,2,5,1], 3) → 12');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

