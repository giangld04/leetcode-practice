// Test: 3707. Equal Score Substrings
// Run: node test.js

const { scoreBalance } = require("./solution");

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

console.log("\n3707. Equal Score Substrings\n");

test(scoreBalance("adcb"), true, 'Example 1: scoreBalance("adcb") → true');
test(scoreBalance("bace"), false, 'Example 2: scoreBalance("bace") → false');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

