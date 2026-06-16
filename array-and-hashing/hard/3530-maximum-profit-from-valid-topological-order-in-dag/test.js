// Test: 3530. Maximum Profit from Valid Topological Order in DAG
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

console.log("\n3530. Maximum Profit from Valid Topological Order in DAG\n");

test(maxProfit(2, [[0,1]], [2,3]), 8, 'Example 1: maxProfit(2, [[0,1]], [2,3]) → 8');
test(maxProfit(3, [[0,1],[0,2]], [1,6,3]), 25, 'Example 2: maxProfit(3, [[0,1],[0,2]], [1,6,3]) → 25');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

