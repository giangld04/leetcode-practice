// Test: 3145. Find Products of Elements of Big Array
// Run: node test.js

const { findProductsOfElements } = require("./solution");

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

console.log("\n3145. Find Products of Elements of Big Array\n");

test(findProductsOfElements([[1,3,7]]), [4], 'Example 1: findProductsOfElements([[1,3,7]]) → [4]');
test(findProductsOfElements([[2,5,3],[7,7,4]]), [2,2], 'Example 2: findProductsOfElements([[2,5,3],[7,7,4]]) → [2,2]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

