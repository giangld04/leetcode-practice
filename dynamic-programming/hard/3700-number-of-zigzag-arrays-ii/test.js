// Test: 3700. Number of ZigZag Arrays II
// Run: node test.js

const { zigZagArrays } = require("./solution");

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

console.log("\n3700. Number of ZigZag Arrays II\n");

test(zigZagArrays(3, 4, 5), 2, 'Example 1: zigZagArrays(3, 4, 5) → 2');
test(zigZagArrays(3, 1, 3), 10, 'Example 2: zigZagArrays(3, 1, 3) → 10');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

