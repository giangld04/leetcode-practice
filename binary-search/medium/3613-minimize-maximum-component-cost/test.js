// Test: 3613. Minimize Maximum Component Cost
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

console.log("\n3613. Minimize Maximum Component Cost\n");

test(minCost(5, [[0,1,4],[1,2,3],[1,3,2],[3,4,6]], 2), 4, 'Example 1: minCost(5, [[0,1,4],[1,2,3],[1,3,2],[3,4,6]], 2) → 4');
test(minCost(4, [[0,1,5],[1,2,5],[2,3,5]], 1), 5, 'Example 2: minCost(4, [[0,1,5],[1,2,5],[2,3,5]], 1) → 5');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

