// Test: 3743. Maximize Cyclic Partition Score
// Run: node test.js

const { maximumScore } = require("./solution");

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

console.log("\n3743. Maximize Cyclic Partition Score\n");

test(maximumScore([1,2,3,3], 2), 3, 'Example 1: maximumScore([1,2,3,3], 2) → 3');
test(maximumScore([1,2,3,3], 1), 2, 'Example 2: maximumScore([1,2,3,3], 1) → 2');
test(maximumScore([1,2,3,3], 4), 3, 'Example 3: maximumScore([1,2,3,3], 4) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

