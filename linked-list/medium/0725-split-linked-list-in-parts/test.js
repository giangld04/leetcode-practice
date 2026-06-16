// Test: 725. Split Linked List in Parts
// Run: node test.js

const { splitListToParts } = require("./solution");

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

console.log("\n725. Split Linked List in Parts\n");

test(splitListToParts([1,2,3], 5), [[1],[2],[3],[],[]], 'Example 1: splitListToParts([1,2,3], 5) → [[1],[2],[3],[],[]]');
test(splitListToParts([1,2,3,4,5,6,7,8,9,10], 3), [[1,2,3,4],[5,6,7],[8,9,10]], 'Example 2: splitListToParts([1,2,3,4,5,6,7,8,9,10], 3) → [[1,2,3,4],[5,6,7],[8,9,10]]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

