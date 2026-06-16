// Test: 3600. Maximize Spanning Tree Stability with Upgrades
// Run: node test.js

const { maxStability } = require("./solution");

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

console.log("\n3600. Maximize Spanning Tree Stability with Upgrades\n");

test(maxStability(3, [[0,1,2,1],[1,2,3,0]], 1), 2, 'Example 1: maxStability(3, [[0,1,2,1],[1,2,3,0]], 1) → 2');
test(maxStability(3, [[0,1,4,0],[1,2,3,0],[0,2,1,0]], 2), 6, 'Example 2: maxStability(3, [[0,1,4,0],[1,2,3,0],[0,2,1,0]], 2) → 6');
test(maxStability(3, [[0,1,1,1],[1,2,1,1],[2,0,1,1]], 0), -1, 'Example 3: maxStability(3, [[0,1,1,1],[1,2,1,1],[2,0,1,1]], 0) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

