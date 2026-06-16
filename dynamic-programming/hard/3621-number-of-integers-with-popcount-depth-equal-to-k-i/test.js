// Test: 3621. Number of Integers With Popcount-Depth Equal to K I
// Run: node test.js

const { popcountDepth } = require("./solution");

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

console.log("\n3621. Number of Integers With Popcount-Depth Equal to K I\n");

test(popcountDepth(4, 1), 2, 'Example 1: popcountDepth(4, 1) → 2');
test(popcountDepth(7, 2), 3, 'Example 2: popcountDepth(7, 2) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

