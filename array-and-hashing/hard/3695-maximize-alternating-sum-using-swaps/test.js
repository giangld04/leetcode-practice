// Test: 3695. Maximize Alternating Sum Using Swaps
// Run: node test.js

const { maxAlternatingSum } = require("./solution");

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

console.log("\n3695. Maximize Alternating Sum Using Swaps\n");

test(maxAlternatingSum([1,2,3], [[0,2],[1,2]]), 4, 'Example 1: maxAlternatingSum([1,2,3], [[0,2],[1,2]]) → 4');
test(maxAlternatingSum([1,2,3], [[1,2]]), 2, 'Example 2: maxAlternatingSum([1,2,3], [[1,2]]) → 2');
test(maxAlternatingSum([1,1000000000,1,1000000000,1,1000000000], []), -2999999997, 'Example 3: maxAlternatingSum([1,1000000000,1,1000000000,1,1000000000], []) → -2999999997');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

