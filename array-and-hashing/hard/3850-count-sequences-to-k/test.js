// Test: 3850. Count Sequences to K
// Run: node test.js

const { countSequences } = require("./solution");

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

console.log("\n3850. Count Sequences to K\n");

test(countSequences([2,3,2], 6), 2, 'Example 1: countSequences([2,3,2], 6) → 2');
test(countSequences([4,6,3], 2), 2, 'Example 2: countSequences([4,6,3], 2) → 2');
test(countSequences([1,5], 1), 3, 'Example 3: countSequences([1,5], 1) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

