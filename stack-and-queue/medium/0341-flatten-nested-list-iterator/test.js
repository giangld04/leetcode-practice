// Test: 341. Flatten Nested List Iterator
// Run: node test.js

const { NestedIterator } = require("./solution");

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

console.log("\n341. Flatten Nested List Iterator\n");

test(NestedIterator([[1,1],2,[1,1]]), [1,1,2,1,1], 'Example 1: NestedIterator([[1,1],2,[1,1]]) → [1,1,2,1,1]');
test(NestedIterator([1,[4,[6]]]), [1,4,6], 'Example 2: NestedIterator([1,[4,[6]]]) → [1,4,6]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

