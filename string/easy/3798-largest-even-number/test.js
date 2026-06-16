// Test: 3798. Largest Even Number
// Run: node test.js

const { largestEven } = require("./solution");

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

console.log("\n3798. Largest Even Number\n");

test(largestEven("1112"), "1112", 'Example 1: largestEven("1112") → "1112"');
test(largestEven("221"), "22", 'Example 2: largestEven("221") → "22"');
test(largestEven("1"), "", 'Example 3: largestEven("1") → ""');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

