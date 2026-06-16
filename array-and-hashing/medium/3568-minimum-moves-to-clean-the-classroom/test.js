// Test: 3568. Minimum Moves to Clean the Classroom
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

console.log("\n3568. Minimum Moves to Clean the Classroom\n");

test(minMoves(["S.", "XL"], 2), 2, 'Example 1: minMoves(["S.", "XL"], 2) → 2');
test(minMoves(["LS", "RL"], 4), 3, 'Example 2: minMoves(["LS", "RL"], 4) → 3');
test(minMoves(["L.S", "RXL"], 3), -1, 'Example 3: minMoves(["L.S", "RXL"], 3) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

