// Test: 3932. Count K-th Roots in a Range
// Run: node test.js

const { countKthRoots } = require("./solution");

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

console.log("\n3932. Count K-th Roots in a Range\n");

test(countKthRoots(1, 9, 3), 2, 'Example 1: countKthRoots(1, 9, 3) → 2');
test(countKthRoots(8, 30, 2), 3, 'Example 2: countKthRoots(8, 30, 2) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

