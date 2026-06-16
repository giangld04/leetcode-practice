// Test: 3649. Number of Perfect Pairs
// Run: node test.js

const { perfectPairs } = require("./solution");

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

console.log("\n3649. Number of Perfect Pairs\n");

test(perfectPairs([0,1,2,3]), 2, 'Example 1: perfectPairs([0,1,2,3]) → 2');
test(perfectPairs([-3,2,-1,4]), 4, 'Example 2: perfectPairs([-3,2,-1,4]) → 4');
test(perfectPairs([1,10,100,1000]), 0, 'Example 3: perfectPairs([1,10,100,1000]) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

