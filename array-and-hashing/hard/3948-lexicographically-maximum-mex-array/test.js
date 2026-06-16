// Test: 3948. Lexicographically Maximum MEX Array
// Run: node test.js

const { maximumMEX } = require("./solution");

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

console.log("\n3948. Lexicographically Maximum MEX Array\n");

test(maximumMEX([0,1,0]), [2,1], 'Example 1: maximumMEX([0,1,0]) → [2,1]');
test(maximumMEX([1,0,2]), [3], 'Example 2: maximumMEX([1,0,2]) → [3]');
test(maximumMEX([3,1]), [0,0], 'Example 3: maximumMEX([3,1]) → [0,0]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

