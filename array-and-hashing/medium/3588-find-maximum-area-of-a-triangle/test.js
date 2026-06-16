// Test: 3588. Find Maximum Area of a Triangle
// Run: node test.js

const { maxArea } = require("./solution");

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

console.log("\n3588. Find Maximum Area of a Triangle\n");

test(maxArea([[1,1],[1,2],[3,2],[3,3]]), 2, 'Example 1: maxArea([[1,1],[1,2],[3,2],[3,3]]) → 2');
test(maxArea([[1,1],[2,2],[3,3]]), -1, 'Example 2: maxArea([[1,1],[2,2],[3,3]]) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

