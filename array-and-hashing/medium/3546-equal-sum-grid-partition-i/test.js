// Test: 3546. Equal Sum Grid Partition I
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

console.log("\n3546. Equal Sum Grid Partition I\n");

test(canPartitionGrid([[1,4],[2,3]]), true, 'Example 1: canPartitionGrid([[1,4],[2,3]]) → true');
test(canPartitionGrid([[1,3],[2,4]]), false, 'Example 2: canPartitionGrid([[1,3],[2,4]]) → false');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

