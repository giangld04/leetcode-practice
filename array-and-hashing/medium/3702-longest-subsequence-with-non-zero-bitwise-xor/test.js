// Test: 3702. Longest Subsequence With Non-Zero Bitwise XOR
// Run: node test.js

const { longestSubsequence } = require("./solution");

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

console.log("\n3702. Longest Subsequence With Non-Zero Bitwise XOR\n");

test(longestSubsequence([1,2,3]), 2, 'Example 1: longestSubsequence([1,2,3]) → 2');
test(longestSubsequence([2,3,4]), 3, 'Example 2: longestSubsequence([2,3,4]) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

