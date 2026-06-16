// Test: 3566. Partition Array into Two Equal Product Subsets
// Run: node test.js

const { checkEqualPartitions } = require("./solution");

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

console.log("\n3566. Partition Array into Two Equal Product Subsets\n");

test(checkEqualPartitions([3,1,6,8,4], 24), true, 'Example 1: checkEqualPartitions([3,1,6,8,4], 24) → true');
test(checkEqualPartitions([2,5,3,7], 15), false, 'Example 2: checkEqualPartitions([2,5,3,7], 15) → false');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

