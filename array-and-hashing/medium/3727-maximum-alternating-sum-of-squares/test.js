// Test: 3727. Maximum Alternating Sum of Squares
// Run: node test.js

const { maxAlternatingSum } = require("./solution");

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

console.log("\n3727. Maximum Alternating Sum of Squares\n");

test(maxAlternatingSum([1,2,3]), 12, 'Example 1: maxAlternatingSum([1,2,3]) → 12');
test(maxAlternatingSum([1,-1,2,-2,3,-3]), 16, 'Example 2: maxAlternatingSum([1,-1,2,-2,3,-3]) → 16');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

