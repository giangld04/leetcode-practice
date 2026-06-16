// Test: 430. Flatten a Multilevel Doubly Linked List
// Run: node test.js

const { flatten } = require("./solution");

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

console.log("\n430. Flatten a Multilevel Doubly Linked List\n");

test(flatten([1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]), [1,2,3,7,8,11,12,9,10,4,5,6], 'Example 1: flatten([1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]) → [1,2,3,7,8,11,12,9,10,4,5,6]');
test(flatten([1,2,null,3]), [1,3,2], 'Example 2: flatten([1,2,null,3]) → [1,3,2]');
test(flatten([]), [], 'Example 3: flatten([]) → []');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

