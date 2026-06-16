// Test: 1323. Maximum 69 Number
// Run: node test.js

const { maximum69Number } = require("./solution");

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

console.log("\n1323. Maximum 69 Number\n");

test(maximum69Number(9669), 9969, 'Example 1: maximum69Number(9669) → 9969');
test(maximum69Number(9996), 9999, 'Example 2: maximum69Number(9996) → 9999');
test(maximum69Number(9999), 9999, 'Example 3: maximum69Number(9999) → 9999');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

