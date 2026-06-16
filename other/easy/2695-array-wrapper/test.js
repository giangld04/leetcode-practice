// Test: 2695. Array Wrapper
// Run: node test.js

const { ArrayWrapper } = require("./solution");

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

console.log("\n2695. Array Wrapper\n");

test(ArrayWrapper([[1,2],[3,4]], "Add"), 10, 'Example 1: ArrayWrapper([[1,2],[3,4]], "Add") → 10');
test(ArrayWrapper([[23,98,42,70]], "String"), "[23,98,42,70]", 'Example 2: ArrayWrapper([[23,98,42,70]], "String") → "[23,98,42,70]"');
test(ArrayWrapper([[],[]], "Add"), 0, 'Example 3: ArrayWrapper([[],[]], "Add") → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

