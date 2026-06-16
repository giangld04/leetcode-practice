// Test: 3845. Maximum Subarray XOR with Bounded Range
// Run: node test.js

const { maxXor } = require("./solution");

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

console.log("\n3845. Maximum Subarray XOR with Bounded Range\n");

test(maxXor([5,4,5,6], 2), 7, 'Example 1: maxXor([5,4,5,6], 2) → 7');
test(maxXor([5,4,5,6], 1), 6, 'Example 2: maxXor([5,4,5,6], 1) → 6');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

