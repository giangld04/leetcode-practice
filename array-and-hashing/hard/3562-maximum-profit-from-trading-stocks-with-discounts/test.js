// Test: 3562. Maximum Profit from Trading Stocks with Discounts
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

console.log("\n3562. Maximum Profit from Trading Stocks with Discounts\n");

test(maxProfit(2, [1,2], [4,3], [[1,2]], 3), 5, 'Example 1: maxProfit(2, [1,2], [4,3], [[1,2]], 3) → 5');
test(maxProfit(2, [3,4], [5,8], [[1,2]], 4), 4, 'Example 2: maxProfit(2, [3,4], [5,8], [[1,2]], 4) → 4');
test(maxProfit(3, [4,6,8], [7,9,11], [[1,2],[1,3]], 10), 10, 'Example 3: maxProfit(3, [4,6,8], [7,9,11], [[1,2],[1,3]], 10) → 10');
test(maxProfit(3, [5,2,3], [8,5,6], [[1,2],[2,3]], 7), 12, 'Example 4: maxProfit(3, [5,2,3], [8,5,6], [[1,2],[2,3]], 7) → 12');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

