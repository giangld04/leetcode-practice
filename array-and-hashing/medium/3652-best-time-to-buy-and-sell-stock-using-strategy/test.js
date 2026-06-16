// Test: 3652. Best Time to Buy and Sell Stock using Strategy
// Run: node test.js

const { maxProfit } = require("./solution");

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

console.log("\n3652. Best Time to Buy and Sell Stock using Strategy\n");

test(maxProfit([4,2,8], [-1,0,1], 2), 10, 'Example 1: maxProfit([4,2,8], [-1,0,1], 2) → 10');
test(maxProfit([5,4,3], [1,1,0], 2), 9, 'Example 2: maxProfit([5,4,3], [1,1,0], 2) → 9');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

