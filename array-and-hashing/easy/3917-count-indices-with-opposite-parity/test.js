// Test: 3917. Count Indices With Opposite Parity
// Run: node test.js

const { countOppositeParity } = require("./solution");

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

console.log("\n3917. Count Indices With Opposite Parity\n");

test(countOppositeParity([1,2,3,4]), [2,1,1,0], 'Example 1: countOppositeParity([1,2,3,4]) → [2,1,1,0]');
test(countOppositeParity([1]), [0], 'Example 2: countOppositeParity([1]) → [0]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

