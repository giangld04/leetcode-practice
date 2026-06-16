// Test: 3805. Count Caesar Cipher Pairs
// Run: node test.js

const { countPairs } = require("./solution");

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

console.log("\n3805. Count Caesar Cipher Pairs\n");

test(countPairs(["fusion","layout"]), 1, 'Example 1: countPairs(["fusion","layout"]) → 1');
test(countPairs(["ab","aa","za","aa"]), 2, 'Example 2: countPairs(["ab","aa","za","aa"]) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

