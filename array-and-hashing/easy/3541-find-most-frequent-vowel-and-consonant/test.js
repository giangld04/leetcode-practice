// Test: 3541. Find Most Frequent Vowel and Consonant
// Run: node test.js

const { maxFreqSum } = require("./solution");

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

console.log("\n3541. Find Most Frequent Vowel and Consonant\n");

test(maxFreqSum("successes"), 6, 'Example 1: maxFreqSum("successes") → 6');
test(maxFreqSum("aeiaeia"), 3, 'Example 2: maxFreqSum("aeiaeia") → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

