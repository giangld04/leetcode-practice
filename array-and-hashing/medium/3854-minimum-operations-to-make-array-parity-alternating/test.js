// Test: 3854. Minimum Operations to Make Array Parity Alternating
// Run: node test.js

const { makeParityAlternating } = require("./solution");

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

console.log("\n3854. Minimum Operations to Make Array Parity Alternating\n");

test(makeParityAlternating([-2,-3,1,4]), [2,6], 'Example 1: makeParityAlternating([-2,-3,1,4]) → [2,6]');
test(makeParityAlternating([0,2,-2]), [1,3], 'Example 2: makeParityAlternating([0,2,-2]) → [1,3]');
test(makeParityAlternating([7]), [0,0], 'Example 3: makeParityAlternating([7]) → [0,0]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

