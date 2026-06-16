// Test: 3947. Maximum Number of Items From Sale II
// Run: node test.js

const { maximumSaleItems } = require("./solution");

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

console.log("\n3947. Maximum Number of Items From Sale II\n");

test(maximumSaleItems([[1,6],[2,4],[3,5]], 19), 5, 'Example 1: maximumSaleItems([[1,6],[2,4],[3,5]], 19) → 5');
test(maximumSaleItems([[2,8],[1,10],[6,6],[4,12],[5,20],[5,17]], 35), 7, 'Example 2: maximumSaleItems([[2,8],[1,10],[6,6],[4,12],[5,20],[5,17]], 35) → 7');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

