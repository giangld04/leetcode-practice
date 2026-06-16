// Test: 3752. Lexicographically Smallest Negated Permutation that Sums to Target
// Run: node test.js

const { lexSmallestNegatedPerm } = require("./solution");

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

console.log("\n3752. Lexicographically Smallest Negated Permutation that Sums to Target\n");

test(lexSmallestNegatedPerm(3, 0), [-3,1,2], 'Example 1: lexSmallestNegatedPerm(3, 0) → [-3,1,2]');
test(lexSmallestNegatedPerm(1, 10000000000), [], 'Example 2: lexSmallestNegatedPerm(1, 10000000000) → []');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

