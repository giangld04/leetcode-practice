// Test: 3628. Maximum Number of Subsequences After One Inserting
// Run: node test.js

const { numOfSubsequences } = require("./solution");

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

console.log("\n3628. Maximum Number of Subsequences After One Inserting\n");

test(numOfSubsequences("LMCT"), 2, 'Example 1: numOfSubsequences("LMCT") → 2');
test(numOfSubsequences("LCCT"), 4, 'Example 2: numOfSubsequences("LCCT") → 4');
test(numOfSubsequences("L"), 0, 'Example 3: numOfSubsequences("L") → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

