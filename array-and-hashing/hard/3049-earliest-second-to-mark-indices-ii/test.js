// Test: 3049. Earliest Second to Mark Indices II
// Run: node test.js

const { earliestSecondToMarkIndices } = require("./solution");

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

console.log("\n3049. Earliest Second to Mark Indices II\n");

test(earliestSecondToMarkIndices([3,2,3], [1,3,2,2,2,2,3]), 6, 'Example 1: earliestSecondToMarkIndices([3,2,3], [1,3,2,2,2,2,3]) → 6');
test(earliestSecondToMarkIndices([0,0,1,2], [1,2,1,2,1,2,1,2]), 7, 'Example 2: earliestSecondToMarkIndices([0,0,1,2], [1,2,1,2,1,2,1,2]) → 7');
test(earliestSecondToMarkIndices([1,2,3], [1,2,3]), -1, 'Example 3: earliestSecondToMarkIndices([1,2,3], [1,2,3]) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

