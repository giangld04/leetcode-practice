// Test: 3768. Minimum Inversion Count in Subarrays of Fixed Length
// Run: node test.js

const { minInversionCount } = require("./solution");

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

console.log("\n3768. Minimum Inversion Count in Subarrays of Fixed Length\n");

test(minInversionCount([3,1,2,5,4], 3), 0, 'Example 1: minInversionCount([3,1,2,5,4], 3) → 0');
test(minInversionCount([5,3,2,1], 4), 6, 'Example 2: minInversionCount([5,3,2,1], 4) → 6');
test(minInversionCount([2,1], 1), 0, 'Example 3: minInversionCount([2,1], 1) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

