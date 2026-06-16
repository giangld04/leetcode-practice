// Test: 3513. Number of Unique XOR Triplets I
// Run: node test.js

const { uniqueXorTriplets } = require("./solution");

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

console.log("\n3513. Number of Unique XOR Triplets I\n");

test(uniqueXorTriplets([1,2]), 2, 'Example 1: uniqueXorTriplets([1,2]) → 2');
test(uniqueXorTriplets([3,1,2]), 4, 'Example 2: uniqueXorTriplets([3,1,2]) → 4');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

