// Test: 3840. House Robber V
// Run: node test.js

const { rob } = require("./solution");

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

console.log("\n3840. House Robber V\n");

test(rob([1,4,3,5], [1,1,2,2]), 9, 'Example 1: rob([1,4,3,5], [1,1,2,2]) → 9');
test(rob([3,1,2,4], [2,3,2,2]), 8, 'Example 2: rob([3,1,2,4], [2,3,2,2]) → 8');
test(rob([10,1,3,9], [1,1,1,2]), 22, 'Example 3: rob([10,1,3,9], [1,1,1,2]) → 22');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

