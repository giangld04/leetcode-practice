// Test: 3750. Minimum Number of Flips to Reverse Binary String
// Run: node test.js

const { minimumFlips } = require("./solution");

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

console.log("\n3750. Minimum Number of Flips to Reverse Binary String\n");

test(minimumFlips(7), 0, 'Example 1: minimumFlips(7) → 0');
test(minimumFlips(10), 4, 'Example 2: minimumFlips(10) → 4');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

