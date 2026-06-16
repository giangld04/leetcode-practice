// Test: 237. Delete Node in a Linked List
// Run: node test.js

const { deleteNode } = require("./solution");

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

console.log("\n237. Delete Node in a Linked List\n");

test(deleteNode([4,5,1,9], 5), [4,1,9], 'Example 1: deleteNode([4,5,1,9], 5) → [4,1,9]');
test(deleteNode([4,5,1,9], 1), [4,5,9], 'Example 2: deleteNode([4,5,1,9], 1) → [4,5,9]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

