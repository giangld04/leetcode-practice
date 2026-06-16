// Test: 3659. Partition Array Into K-Distinct Groups
// Run: node test.js

const { partitionArray } = require("./solution");

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

console.log("\n3659. Partition Array Into K-Distinct Groups\n");

test(partitionArray([1,2,3,4], 2), true, 'Example 1: partitionArray([1,2,3,4], 2) → true');
test(partitionArray([3,5,2,2], 2), true, 'Example 2: partitionArray([3,5,2,2], 2) → true');
test(partitionArray([1,5,2,3], 3), false, 'Example 3: partitionArray([1,5,2,3], 3) → false');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

