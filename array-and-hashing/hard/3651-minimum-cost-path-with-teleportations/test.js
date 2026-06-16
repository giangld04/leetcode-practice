// Test: 3651. Minimum Cost Path with Teleportations
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

console.log("\n3651. Minimum Cost Path with Teleportations\n");

test(minCost([[1,3,3],[2,5,4],[4,3,5]], 2), 7, 'Example 1: minCost([[1,3,3],[2,5,4],[4,3,5]], 2) → 7');
test(minCost([[1,2],[2,3],[3,4]], 1), 9, 'Example 2: minCost([[1,2],[2,3],[3,4]], 1) → 9');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

