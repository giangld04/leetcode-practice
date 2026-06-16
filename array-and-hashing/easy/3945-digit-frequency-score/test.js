// Test: 3945. Digit Frequency Score
// Run: node test.js

const { digitFrequencyScore } = require("./solution");

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

console.log("\n3945. Digit Frequency Score\n");

test(digitFrequencyScore(122), 5, 'Example 1: digitFrequencyScore(122) → 5');
test(digitFrequencyScore(101), 2, 'Example 2: digitFrequencyScore(101) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

