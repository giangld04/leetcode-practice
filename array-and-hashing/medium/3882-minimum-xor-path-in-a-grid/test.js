// Test: 3882. Minimum XOR Path in a Grid
// Run: node test.js

const { minCost } = require("./solution");

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

console.log("\n3882. Minimum XOR Path in a Grid\n");

test(minCost([[1,2],[3,4]]), 6, 'Example 1: minCost([[1,2],[3,4]]) → 6');
test(minCost([[6,7],[5,8]]), 9, 'Example 2: minCost([[6,7],[5,8]]) → 9');
test(minCost([[2,7,5]]), 0, 'Example 3: minCost([[2,7,5]]) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

