// Test: 3592. Inverse Coin Change
// Run: node test.js

const { findCoins } = require("./solution");

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

console.log("\n3592. Inverse Coin Change\n");

test(findCoins([0,1,0,2,0,3,0,4,0,5]), [2,4,6], 'Example 1: findCoins([0,1,0,2,0,3,0,4,0,5]) → [2,4,6]');
test(findCoins([1,2,2,3,4]), [1,2,5], 'Example 2: findCoins([1,2,2,3,4]) → [1,2,5]');
test(findCoins([1,2,3,4,15]), [], 'Example 3: findCoins([1,2,3,4,15]) → []');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

