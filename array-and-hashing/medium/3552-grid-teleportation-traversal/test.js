// Test: 3552. Grid Teleportation Traversal
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

console.log("\n3552. Grid Teleportation Traversal\n");

test(minMoves(["A..",".A.","..."]), 2, 'Example 1: minMoves(["A..",".A.","..."]) → 2');
test(minMoves([".#...",".#.#.",".#.#.","...#."]), 13, 'Example 2: minMoves([".#...",".#.#.",".#.#.","...#."]) → 13');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

