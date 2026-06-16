// Test: 3745. Maximize Expression of Three Elements
// Run: node test.js

const { maximizeExpressionOfThree } = require("./solution");

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

console.log("\n3745. Maximize Expression of Three Elements\n");

test(maximizeExpressionOfThree([1,4,2,5]), 8, 'Example 1: maximizeExpressionOfThree([1,4,2,5]) → 8');
test(maximizeExpressionOfThree([-2,0,5,-2,4]), 11, 'Example 2: maximizeExpressionOfThree([-2,0,5,-2,4]) → 11');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

