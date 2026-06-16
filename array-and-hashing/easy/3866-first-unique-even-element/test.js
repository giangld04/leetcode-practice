// Test: 3866. First Unique Even Element
// Run: node test.js

const { firstUniqueEven } = require("./solution");

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

console.log("\n3866. First Unique Even Element\n");

test(firstUniqueEven([3,4,2,5,4,6]), 2, 'Example 1: firstUniqueEven([3,4,2,5,4,6]) → 2');
test(firstUniqueEven([4,4]), -1, 'Example 2: firstUniqueEven([4,4]) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

