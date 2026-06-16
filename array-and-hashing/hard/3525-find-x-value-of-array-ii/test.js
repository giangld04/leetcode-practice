// Test: 3525. Find X Value of Array II
// Run: node test.js

const { resultArray } = require("./solution");

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

console.log("\n3525. Find X Value of Array II\n");

test(resultArray([1,2,3,4,5], 3, [[2,2,0,2],[3,3,3,0],[0,1,0,1]]), [2,2,2], 'Example 1: resultArray([1,2,3,4,5], 3, [[2,2,0,2],[3,3,3,0],[0,1,0,1]]) → [2,2,2]');
test(resultArray([1,2,4,8,16,32], 4, [[0,2,0,2],[0,2,0,1]]), [1,0], 'Example 2: resultArray([1,2,4,8,16,32], 4, [[0,2,0,2],[0,2,0,1]]) → [1,0]');
test(resultArray([1,1,2,1,1], 2, [[2,1,0,1]]), [5], 'Example 3: resultArray([1,1,2,1,1], 2, [[2,1,0,1]]) → [5]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

