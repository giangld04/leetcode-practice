// Test: 3868. Minimum Cost to Equalize Arrays Using Swaps
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

console.log("\n3868. Minimum Cost to Equalize Arrays Using Swaps\n");

test(minCost([10,20], [20,10]), 0, 'Example 1: minCost([10,20], [20,10]) → 0');
test(minCost([10,10], [20,20]), 1, 'Example 2: minCost([10,10], [20,20]) → 1');
test(minCost([10,20], [30,40]), -1, 'Example 3: minCost([10,20], [30,40]) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

