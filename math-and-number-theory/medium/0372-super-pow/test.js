// Test: 372. Super Pow
// Run: node test.js

const { superPow } = require("./solution");

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

console.log("\n372. Super Pow\n");

test(superPow(2, [3]), 8, 'Example 1: superPow(2, [3]) → 8');
test(superPow(2, [1,0]), 1024, 'Example 2: superPow(2, [1,0]) → 1024');
test(superPow(1, [4,3,3,8,5,2]), 1, 'Example 3: superPow(1, [4,3,3,8,5,2]) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

