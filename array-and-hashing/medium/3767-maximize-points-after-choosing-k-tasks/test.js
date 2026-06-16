// Test: 3767. Maximize Points After Choosing K Tasks
// Run: node test.js

const { maxPoints } = require("./solution");

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

console.log("\n3767. Maximize Points After Choosing K Tasks\n");

test(maxPoints([5,2,10], [10,3,8], 2), 22, 'Example 1: maxPoints([5,2,10], [10,3,8], 2) → 22');
test(maxPoints([10,20,30], [5,15,25], 2), 60, 'Example 2: maxPoints([10,20,30], [5,15,25], 2) → 60');
test(maxPoints([1,2,3], [4,5,6], 0), 15, 'Example 3: maxPoints([1,2,3], [4,5,6], 0) → 15');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

