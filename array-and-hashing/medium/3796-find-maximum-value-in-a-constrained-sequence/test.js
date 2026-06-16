// Test: 3796. Find Maximum Value in a Constrained Sequence
// Run: node test.js

const { findMaxVal } = require("./solution");

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

console.log("\n3796. Find Maximum Value in a Constrained Sequence\n");

test(findMaxVal(10, [[3,1],[8,1]], [2,2,3,1,4,5,1,1,2]), 6, 'Example 1: findMaxVal(10, [[3,1],[8,1]], [2,2,3,1,4,5,1,1,2]) → 6');
test(findMaxVal(8, [[3,2]], [3,5,2,4,2,3,1]), 12, 'Example 2: findMaxVal(8, [[3,2]], [3,5,2,4,2,3,1]) → 12');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

