// Test: 3655. XOR After Range Multiplication Queries II
// Run: node test.js

const { xorAfterQueries } = require("./solution");

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

console.log("\n3655. XOR After Range Multiplication Queries II\n");

test(xorAfterQueries([1,1,1], [[0,2,1,4]]), 4, 'Example 1: xorAfterQueries([1,1,1], [[0,2,1,4]]) → 4');
test(xorAfterQueries([2,3,1,5,4], [[1,4,2,3],[0,2,1,2]]), 31, 'Example 2: xorAfterQueries([2,3,1,5,4], [[1,4,2,3],[0,2,1,2]]) → 31');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

