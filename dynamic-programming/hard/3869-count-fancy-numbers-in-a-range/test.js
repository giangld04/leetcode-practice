// Test: 3869. Count Fancy Numbers in a Range
// Run: node test.js

const { countFancy } = require("./solution");

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

console.log("\n3869. Count Fancy Numbers in a Range\n");

test(countFancy(8, 10), 3, 'Example 1: countFancy(8, 10) → 3');
test(countFancy(12340, 12341), 1, 'Example 2: countFancy(12340, 12341) → 1');
test(countFancy(123456788, 123456788), 0, 'Example 3: countFancy(123456788, 123456788) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

