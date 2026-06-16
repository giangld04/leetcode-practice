// Test: 3583. Count Special Triplets
// Run: node test.js

const { specialTriplets } = require("./solution");

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

console.log("\n3583. Count Special Triplets\n");

test(specialTriplets([6,3,6]), 1, 'Example 1: specialTriplets([6,3,6]) → 1');
test(specialTriplets([0,1,0,0]), 1, 'Example 2: specialTriplets([0,1,0,0]) → 1');
test(specialTriplets([8,4,2,8,4]), 2, 'Example 3: specialTriplets([8,4,2,8,4]) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

