// Test: 3861. Minimum Capacity Box
// Run: node test.js

const { minimumIndex } = require("./solution");

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

console.log("\n3861. Minimum Capacity Box\n");

test(minimumIndex([1,5,3,7], 3), 2, 'Example 1: minimumIndex([1,5,3,7], 3) → 2');
test(minimumIndex([3,5,4,3], 2), 0, 'Example 2: minimumIndex([3,5,4,3], 2) → 0');
test(minimumIndex([4], 5), -1, 'Example 3: minimumIndex([4], 5) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

