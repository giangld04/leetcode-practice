// Test: 3537. Fill a Special Grid
// Run: node test.js

const { specialGrid } = require("./solution");

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

console.log("\n3537. Fill a Special Grid\n");

test(specialGrid(0), [[0]], 'Example 1: specialGrid(0) → [[0]]');
test(specialGrid(1), [[3,0],[2,1]], 'Example 2: specialGrid(1) → [[3,0],[2,1]]');
test(specialGrid(2), [[15,12,3,0],[14,13,2,1],[11,8,7,4],[10,9,6,5]], 'Example 3: specialGrid(2) → [[15,12,3,0],[14,13,2,1],[11,8,7,4],[10,9,6,5]]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

