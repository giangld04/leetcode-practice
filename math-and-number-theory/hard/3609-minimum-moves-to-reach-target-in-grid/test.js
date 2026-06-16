// Test: 3609. Minimum Moves to Reach Target in Grid
// Run: node test.js

const { minMoves } = require("./solution");

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

console.log("\n3609. Minimum Moves to Reach Target in Grid\n");

test(minMoves(1, 2, 5, 4), 2, 'Example 1: minMoves(1, 2, 5, 4) → 2');
test(minMoves(0, 1, 2, 3), 3, 'Example 2: minMoves(0, 1, 2, 3) → 3');
test(minMoves(1, 1, 2, 2), -1, 'Example 3: minMoves(1, 1, 2, 2) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

