// Test: 3895. Count Digit Appearances
// Run: node test.js

const { countDigitOccurrences } = require("./solution");

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

console.log("\n3895. Count Digit Appearances\n");

test(countDigitOccurrences([12,54,32,22], 2), 4, 'Example 1: countDigitOccurrences([12,54,32,22], 2) → 4');
test(countDigitOccurrences([1,34,7], 9), 0, 'Example 2: countDigitOccurrences([1,34,7], 9) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

