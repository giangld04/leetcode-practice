// Test: 2634. Filter Elements from Array
// Run: node test.js

const { filter } = require("./solution");

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

console.log("\n2634. Filter Elements from Array\n");

test(filter([0,10,20,30], function greaterThan10(n) { return n > 10; }), [20,30], 'Example 1: filter([0,10,20,30], function greaterThan10(n) { return n > 10; }) → [20,30]');
test(filter([1,2,3], function firstIndex(n, i) { return, == 0; }), [1], 'Example 2: filter([1,2,3], function firstIndex(n, i) { return, == 0; }) → [1]');
test(filter([-2,-1,0,1,2], function plusOne(n) { return n + 1 }), [-2,0,1,2], 'Example 3: filter([-2,-1,0,1,2], function plusOne(n) { return n + 1 }) → [-2,0,1,2]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

