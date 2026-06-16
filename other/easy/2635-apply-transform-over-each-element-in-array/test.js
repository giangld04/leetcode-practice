// Test: 2635. Apply Transform Over Each Element in Array
// Run: node test.js

const { map } = require("./solution");

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

console.log("\n2635. Apply Transform Over Each Element in Array\n");

test(map([1,2,3], function plusone(n) { return n + 1; }), [2,3,4], 'Example 1: map([1,2,3], function plusone(n) { return n + 1; }) → [2,3,4]');
test(map([1,2,3], function plusI(n, i) { return n + i; }), [1,3,5], 'Example 2: map([1,2,3], function plusI(n, i) { return n + i; }) → [1,3,5]');
test(map([10,20,30], function constant() { return 42; }), [42,42,42], 'Example 3: map([10,20,30], function constant() { return 42; }) → [42,42,42]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

