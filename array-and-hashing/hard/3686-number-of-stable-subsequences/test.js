// Test: 3686. Number of Stable Subsequences
// Run: node test.js

const { countStableSubsequences } = require("./solution");

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

console.log("\n3686. Number of Stable Subsequences\n");

test(countStableSubsequences([1,3,5]), 6, 'Example 1: countStableSubsequences([1,3,5]) → 6');
test(countStableSubsequences([2,3,4,2]), 14, 'Example 2: countStableSubsequences([2,3,4,2]) → 14');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

