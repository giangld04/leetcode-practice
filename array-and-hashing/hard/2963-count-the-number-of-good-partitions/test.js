// Test: 2963. Count the Number of Good Partitions
// Run: node test.js

const { numberOfGoodPartitions } = require("./solution");

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

console.log("\n2963. Count the Number of Good Partitions\n");

test(numberOfGoodPartitions([1,2,3,4]), 8, 'Example 1: numberOfGoodPartitions([1,2,3,4]) → 8');
test(numberOfGoodPartitions([1,1,1,1]), 1, 'Example 2: numberOfGoodPartitions([1,1,1,1]) → 1');
test(numberOfGoodPartitions([1,2,1,3]), 2, 'Example 3: numberOfGoodPartitions([1,2,1,3]) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

