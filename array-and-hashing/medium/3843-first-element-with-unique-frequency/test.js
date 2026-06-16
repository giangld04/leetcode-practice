// Test: 3843. First Element with Unique Frequency
// Run: node test.js

const { firstUniqueFreq } = require("./solution");

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

console.log("\n3843. First Element with Unique Frequency\n");

test(firstUniqueFreq([20,10,30,30]), 30, 'Example 1: firstUniqueFreq([20,10,30,30]) → 30');
test(firstUniqueFreq([20,20,10,30,30,30]), 20, 'Example 2: firstUniqueFreq([20,20,10,30,30,30]) → 20');
test(firstUniqueFreq([10,10,20,20]), -1, 'Example 3: firstUniqueFreq([10,10,20,20]) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

