// Test: 3872. Longest Arithmetic Sequence After Changing At Most One Element
// Run: node test.js

const { longestArithmetic } = require("./solution");

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

console.log("\n3872. Longest Arithmetic Sequence After Changing At Most One Element\n");

test(longestArithmetic([9,7,5,10,1]), 5, 'Example 1: longestArithmetic([9,7,5,10,1]) → 5');
test(longestArithmetic([1,2,6,7]), 3, 'Example 2: longestArithmetic([1,2,6,7]) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

