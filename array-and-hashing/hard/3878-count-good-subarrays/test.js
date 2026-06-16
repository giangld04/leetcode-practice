// Test: 3878. Count Good Subarrays
// Run: node test.js

const { countGoodSubarrays } = require("./solution");

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

console.log("\n3878. Count Good Subarrays\n");

test(countGoodSubarrays([4,2,3]), 4, 'Example 1: countGoodSubarrays([4,2,3]) → 4');
test(countGoodSubarrays([1,3,1]), 6, 'Example 2: countGoodSubarrays([1,3,1]) → 6');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

