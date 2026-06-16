// Test: 3804. Number of Centered Subarrays
// Run: node test.js

const { centeredSubarrays } = require("./solution");

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

console.log("\n3804. Number of Centered Subarrays\n");

test(centeredSubarrays([-1,1,0]), 5, 'Example 1: centeredSubarrays([-1,1,0]) → 5');
test(centeredSubarrays([2,-3]), 2, 'Example 2: centeredSubarrays([2,-3]) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

