// Test: 3946. Maximum Number of Items From Sale I
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

console.log("\n3946. Maximum Number of Items From Sale I\n");

test(maximumSaleItems([[6,2],[2,6],[3,4]], 9), 4, 'Example 1: maximumSaleItems([[6,2],[2,6],[3,4]], 9) → 4');
test(maximumSaleItems([[2,4],[3,2],[4,1],[6,4],[12,4]], 8), 10, 'Example 2: maximumSaleItems([[2,4],[3,2],[4,1],[6,4],[12,4]], 8) → 10');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

