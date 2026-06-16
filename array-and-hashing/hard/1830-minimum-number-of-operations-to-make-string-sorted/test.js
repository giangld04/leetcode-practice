// Test: 1830. Minimum Number of Operations to Make String Sorted
// Run: node test.js

const { makeStringSorted } = require("./solution");

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

console.log("\n1830. Minimum Number of Operations to Make String Sorted\n");

test(makeStringSorted("cba"), 5, 'Example 1: makeStringSorted("cba") → 5');
test(makeStringSorted("aabaa"), 2, 'Example 2: makeStringSorted("aabaa") → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

