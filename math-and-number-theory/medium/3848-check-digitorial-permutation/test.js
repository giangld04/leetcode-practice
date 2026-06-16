// Test: 3848. Check Digitorial Permutation
// Run: node test.js

const { isDigitorialPermutation } = require("./solution");

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

console.log("\n3848. Check Digitorial Permutation\n");

test(isDigitorialPermutation(145), true, 'Example 1: isDigitorialPermutation(145) → true');
test(isDigitorialPermutation(10), false, 'Example 2: isDigitorialPermutation(10) → false');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

