// Test: 3663. Find The Least Frequent Digit
// Run: node test.js

const { getLeastFrequentDigit } = require("./solution");

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

console.log("\n3663. Find The Least Frequent Digit\n");

test(getLeastFrequentDigit(1553322), 1, 'Example 1: getLeastFrequentDigit(1553322) → 1');
test(getLeastFrequentDigit(723344511), 2, 'Example 2: getLeastFrequentDigit(723344511) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

