// Test: 3644. Maximum K to Sort a Permutation
// Run: node test.js

const { sortPermutation } = require("./solution");

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

console.log("\n3644. Maximum K to Sort a Permutation\n");

test(sortPermutation([0,3,2,1]), 1, 'Example 1: sortPermutation([0,3,2,1]) → 1');
test(sortPermutation([0,1,3,2]), 2, 'Example 2: sortPermutation([0,1,3,2]) → 2');
test(sortPermutation([3,2,1,0]), 0, 'Example 3: sortPermutation([3,2,1,0]) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

