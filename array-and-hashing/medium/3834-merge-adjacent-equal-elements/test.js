// Test: 3834. Merge Adjacent Equal Elements
// Run: node test.js

const { mergeAdjacent } = require("./solution");

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

console.log("\n3834. Merge Adjacent Equal Elements\n");

test(mergeAdjacent([3,1,1,2]), [3,4], 'Example 1: mergeAdjacent([3,1,1,2]) → [3,4]');
test(mergeAdjacent([2,2,4]), [8], 'Example 2: mergeAdjacent([2,2,4]) → [8]');
test(mergeAdjacent([3,7,5]), [3,7,5], 'Example 3: mergeAdjacent([3,7,5]) → [3,7,5]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

