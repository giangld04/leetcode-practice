// Test: 3514. Number of Unique XOR Triplets II
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

console.log("\n3514. Number of Unique XOR Triplets II\n");

test(uniqueXorTriplets([1,3]), 2, 'Example 1: uniqueXorTriplets([1,3]) → 2');
test(uniqueXorTriplets([6,7,8,9]), 4, 'Example 2: uniqueXorTriplets([6,7,8,9]) → 4');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

