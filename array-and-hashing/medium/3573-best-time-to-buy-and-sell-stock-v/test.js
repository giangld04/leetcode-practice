// Test: 3573. Best Time to Buy and Sell Stock V
// Run: node test.js

const { maximumProfit } = require("./solution");

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

console.log("\n3573. Best Time to Buy and Sell Stock V\n");

test(maximumProfit([1,7,9,8,2], 2), 14, 'Example 1: maximumProfit([1,7,9,8,2], 2) → 14');
test(maximumProfit([12,16,19,19,8,1,19,13,9], 3), 36, 'Example 2: maximumProfit([12,16,19,19,8,1,19,13,9], 3) → 36');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

