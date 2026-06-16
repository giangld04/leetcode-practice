// Test: 3826. Minimum Partition Score
// Run: node test.js

const { minPartitionScore } = require("./solution");

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

console.log("\n3826. Minimum Partition Score\n");

test(minPartitionScore([5,1,2,1], 2), 25, 'Example 1: minPartitionScore([5,1,2,1], 2) → 25');
test(minPartitionScore([1,2,3,4], 1), 55, 'Example 2: minPartitionScore([1,2,3,4], 1) → 55');
test(minPartitionScore([1,1,1], 3), 3, 'Example 3: minPartitionScore([1,1,1], 3) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

