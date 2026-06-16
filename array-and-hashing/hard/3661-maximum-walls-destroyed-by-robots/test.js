// Test: 3661. Maximum Walls Destroyed by Robots
// Run: node test.js

const { maxWalls } = require("./solution");

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

console.log("\n3661. Maximum Walls Destroyed by Robots\n");

test(maxWalls([4], [3], [1,10]), 1, 'Example 1: maxWalls([4], [3], [1,10]) → 1');
test(maxWalls([10,2], [5,1], [5,2,7]), 3, 'Example 2: maxWalls([10,2], [5,1], [5,2,7]) → 3');
test(maxWalls([1,2], [100,1], [10]), 0, 'Example 3: maxWalls([1,2], [100,1], [10]) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

