// Test: 3897. Maximum Value of Concatenated Binary Segments
// Run: node test.js

const { maxValue } = require("./solution");

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

console.log("\n3897. Maximum Value of Concatenated Binary Segments\n");

test(maxValue([1,2], [1,0]), 14, 'Example 1: maxValue([1,2], [1,0]) → 14');
test(maxValue([3,1], [0,3]), 120, 'Example 2: maxValue([3,1], [0,3]) → 120');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

