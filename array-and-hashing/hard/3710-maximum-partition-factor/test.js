// Test: 3710. Maximum Partition Factor
// Run: node test.js

const { maxPartitionFactor } = require("./solution");

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

console.log("\n3710. Maximum Partition Factor\n");

test(maxPartitionFactor([[0,0],[0,2],[2,0],[2,2]]), 4, 'Example 1: maxPartitionFactor([[0,0],[0,2],[2,0],[2,2]]) → 4');
test(maxPartitionFactor([[0,0],[0,1],[10,0]]), 11, 'Example 2: maxPartitionFactor([[0,0],[0,1],[10,0]]) → 11');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

