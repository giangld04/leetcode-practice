// Test: 3844. Longest Almost-Palindromic Substring
// Run: node test.js

const { almostPalindromic } = require("./solution");

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

console.log("\n3844. Longest Almost-Palindromic Substring\n");

test(almostPalindromic("abca"), 4, 'Example 1: almostPalindromic("abca") → 4');
test(almostPalindromic("abba"), 4, 'Example 2: almostPalindromic("abba") → 4');
test(almostPalindromic("zzabba"), 5, 'Example 3: almostPalindromic("zzabba") → 5');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

