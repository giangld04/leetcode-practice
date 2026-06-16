// Test: 3577. Count the Number of Computer Unlocking Permutations
// Run: node test.js

const { countPermutations } = require("./solution");

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

console.log("\n3577. Count the Number of Computer Unlocking Permutations\n");

test(countPermutations([1,2,3]), 2, 'Example 1: countPermutations([1,2,3]) → 2');
test(countPermutations([3,3,3,4,4,4]), 0, 'Example 2: countPermutations([3,3,3,4,4,4]) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

