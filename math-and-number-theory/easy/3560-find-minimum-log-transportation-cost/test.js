// Test: 3560. Find Minimum Log Transportation Cost
// Run: node test.js

const { minCuttingCost } = require("./solution");

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

console.log("\n3560. Find Minimum Log Transportation Cost\n");

test(minCuttingCost(6, 5, 5), 5, 'Example 1: minCuttingCost(6, 5, 5) → 5');
test(minCuttingCost(4, 4, 6), 0, 'Example 2: minCuttingCost(4, 4, 6) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

