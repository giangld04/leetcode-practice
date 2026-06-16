// Test: 3619. Count Islands With Total Value Divisible by K
// Run: node test.js

const { countIslands } = require("./solution");

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

console.log("\n3619. Count Islands With Total Value Divisible by K\n");

test(countIslands([[0,2,1,0,0],[0,5,0,0,5],[0,0,1,0,0],[0,1,4,7,0],[0,2,0,0,8]], 5), 2, 'Example 1: countIslands([[0,2,1,0,0],[0,5,0,0,5],[0,0,1,0,0],[0,1,4,7,0],[0,2,0,0,8]], 5) → 2');
test(countIslands([[3,0,3,0], [0,3,0,3], [3,0,3,0]], 3), 6, 'Example 2: countIslands([[3,0,3,0], [0,3,0,3], [3,0,3,0]], 3) → 6');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

