// Test: 3681. Maximum XOR of Subsequences
// Run: node test.js

const { maxXorSubsequences } = require("./solution");

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

console.log("\n3681. Maximum XOR of Subsequences\n");

test(maxXorSubsequences([1,2,3]), 3, 'Example 1: maxXorSubsequences([1,2,3]) → 3');
test(maxXorSubsequences([5,2]), 7, 'Example 2: maxXorSubsequences([5,2]) → 7');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

