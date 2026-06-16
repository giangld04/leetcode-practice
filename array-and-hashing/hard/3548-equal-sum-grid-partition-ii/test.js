// Test: 3548. Equal Sum Grid Partition II
// Run: node test.js

const { canPartitionGrid } = require("./solution");

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

console.log("\n3548. Equal Sum Grid Partition II\n");

test(canPartitionGrid([[1,4],[2,3]]), true, 'Example 1: canPartitionGrid([[1,4],[2,3]]) → true');
test(canPartitionGrid([[1,2],[3,4]]), true, 'Example 2: canPartitionGrid([[1,2],[3,4]]) → true');
test(canPartitionGrid([[1,2,4],[2,3,5]]), false, 'Example 3: canPartitionGrid([[1,2,4],[2,3,5]]) → false');
test(canPartitionGrid([[4,1,8],[3,2,6]]), false, 'Example 4: canPartitionGrid([[4,1,8],[3,2,6]]) → false');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

