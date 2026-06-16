// Test: 3909. Compare Sums of Bitonic Parts
// Run: node test.js

const { compareBitonicSums } = require("./solution");

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

console.log("\n3909. Compare Sums of Bitonic Parts\n");

test(compareBitonicSums([1,3,2,1]), 1, 'Example 1: compareBitonicSums([1,3,2,1]) → 1');
test(compareBitonicSums([2,4,5,2]), 0, 'Example 2: compareBitonicSums([2,4,5,2]) → 0');
test(compareBitonicSums([1,2,4,3]), -1, 'Example 3: compareBitonicSums([1,2,4,3]) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

