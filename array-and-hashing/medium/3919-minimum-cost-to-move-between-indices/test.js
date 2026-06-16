// Test: 3919. Minimum Cost to Move Between Indices
// Run: node test.js

const { minCost } = require("./solution");

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

console.log("\n3919. Minimum Cost to Move Between Indices\n");

test(minCost([-5,-2,3], [[0,2],[2,0],[1,2]]), [6,2,5], 'Example 1: minCost([-5,-2,3], [[0,2],[2,0],[1,2]]) → [6,2,5]');
test(minCost([0,2,3,9], [[3,0],[1,2],[2,0]]), [4,1,3], 'Example 2: minCost([0,2,3,9], [[3,0],[1,2],[2,0]]) → [4,1,3]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

