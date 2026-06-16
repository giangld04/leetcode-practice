// Test: 3776. Minimum Moves to Balance Circular Array
// Run: node test.js

const { minMoves } = require("./solution");

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

console.log("\n3776. Minimum Moves to Balance Circular Array\n");

test(minMoves([5,1,-4]), 4, 'Example 1: minMoves([5,1,-4]) → 4');
test(minMoves([1,2,-5,2]), 6, 'Example 2: minMoves([1,2,-5,2]) → 6');
test(minMoves([-3,2]), -1, 'Example 3: minMoves([-3,2]) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

