// Test: 3677. Count Binary Palindromic Numbers
// Run: node test.js

const { countBinaryPalindromes } = require("./solution");

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

console.log("\n3677. Count Binary Palindromic Numbers\n");

test(countBinaryPalindromes(9), 6, 'Example 1: countBinaryPalindromes(9) → 6');
test(countBinaryPalindromes(0), 1, 'Example 2: countBinaryPalindromes(0) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

