// Test: 3833. Count Dominant Indices
// Run: node test.js

const { dominantIndices } = require("./solution");

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

console.log("\n3833. Count Dominant Indices\n");

test(dominantIndices([5,4,3]), 2, 'Example 1: dominantIndices([5,4,3]) → 2');
test(dominantIndices([4,1,2]), 1, 'Example 2: dominantIndices([4,1,2]) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

