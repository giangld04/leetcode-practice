// Test: 3825. Longest Strictly Increasing Subsequence With Non-Zero Bitwise AND
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

console.log("\n3825. Longest Strictly Increasing Subsequence With Non-Zero Bitwise AND\n");

test(longestSubsequence([5,4,7]), 2, 'Example 1: longestSubsequence([5,4,7]) → 2');
test(longestSubsequence([2,3,6]), 3, 'Example 2: longestSubsequence([2,3,6]) → 3');
test(longestSubsequence([0,1]), 1, 'Example 3: longestSubsequence([0,1]) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

