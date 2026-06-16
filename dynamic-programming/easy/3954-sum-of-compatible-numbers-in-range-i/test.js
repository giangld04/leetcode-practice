// Test: 3954. Sum of Compatible Numbers in Range I
// Run: node test.js

const { sumOfGoodIntegers } = require("./solution");

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

console.log("\n3954. Sum of Compatible Numbers in Range I\n");

test(sumOfGoodIntegers(2, 3), 10, 'Example 1: sumOfGoodIntegers(2, 3) → 10');
test(sumOfGoodIntegers(5, 1), 0, 'Example 2: sumOfGoodIntegers(5, 1) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

