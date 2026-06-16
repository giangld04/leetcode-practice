// Test: 3646. Next Special Palindrome Number
// Run: node test.js

const { specialPalindrome } = require("./solution");

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

console.log("\n3646. Next Special Palindrome Number\n");

test(specialPalindrome(2), 22, 'Example 1: specialPalindrome(2) → 22');
test(specialPalindrome(33), 212, 'Example 2: specialPalindrome(33) → 212');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

