// Test: 3510. Minimum Pair Removal to Sort Array II
// Run: node test.js

const { minimumPairRemoval } = require("./solution");

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

console.log("\n3510. Minimum Pair Removal to Sort Array II\n");

test(minimumPairRemoval([5,2,3,1]), 2, 'Example 1: minimumPairRemoval([5,2,3,1]) → 2');
test(minimumPairRemoval([1,2,2]), 0, 'Example 2: minimumPairRemoval([1,2,2]) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

