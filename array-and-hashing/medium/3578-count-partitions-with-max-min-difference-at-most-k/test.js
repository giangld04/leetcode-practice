// Test: 3578. Count Partitions With Max-Min Difference at Most K
// Run: node test.js

const { countPartitions } = require("./solution");

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

console.log("\n3578. Count Partitions With Max-Min Difference at Most K\n");

test(countPartitions([9,4,1,3,7], 4), 6, 'Example 1: countPartitions([9,4,1,3,7], 4) → 6');
test(countPartitions([3,3,4], 0), 2, 'Example 2: countPartitions([3,3,4], 0) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

