// Test: 3734. Lexicographically Smallest Palindromic Permutation Greater Than Target
// Run: node test.js

const { lexPalindromicPermutation } = require("./solution");

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

console.log("\n3734. Lexicographically Smallest Palindromic Permutation Greater Than Target\n");

test(lexPalindromicPermutation("baba", "abba"), "baab", 'Example 1: lexPalindromicPermutation("baba", "abba") → "baab"');
test(lexPalindromicPermutation("baba", "bbaa"), "", 'Example 2: lexPalindromicPermutation("baba", "bbaa") → ""');
test(lexPalindromicPermutation("abc", "abb"), "", 'Example 3: lexPalindromicPermutation("abc", "abb") → ""');
test(lexPalindromicPermutation("aac", "abb"), "aca", 'Example 4: lexPalindromicPermutation("aac", "abb") → "aca"');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

