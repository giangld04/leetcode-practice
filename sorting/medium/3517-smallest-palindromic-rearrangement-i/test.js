// Test: 3517. Smallest Palindromic Rearrangement I
// Run: node test.js

const { smallestPalindrome } = require("./solution");

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

console.log("\n3517. Smallest Palindromic Rearrangement I\n");

test(smallestPalindrome("z"), "z", 'Example 1: smallestPalindrome("z") → "z"');
test(smallestPalindrome("babab"), "abbba", 'Example 2: smallestPalindrome("babab") → "abbba"');
test(smallestPalindrome("daccad"), "acddca", 'Example 3: smallestPalindrome("daccad") → "acddca"');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

