// Test: 3830. Longest Alternating Subarray After Removing At Most One Element
// Run: node test.js

const { longestAlternating } = require("./solution");

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

console.log("\n3830. Longest Alternating Subarray After Removing At Most One Element\n");

test(longestAlternating([2,1,3,2]), 4, 'Example 1: longestAlternating([2,1,3,2]) → 4');
test(longestAlternating([3,2,1,2,3,2,1]), 4, 'Example 2: longestAlternating([3,2,1,2,3,2,1]) → 4');
test(longestAlternating([100000,100000]), 1, 'Example 3: longestAlternating([100000,100000]) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

