// Test: 1237. Find Positive Integer Solution for a Given Equation
// Run: node test.js

const { findSolution } = require("./solution");

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

console.log("\n1237. Find Positive Integer Solution for a Given Equation\n");

test(findSolution(1, 5), [[1,4],[2,3],[3,2],[4,1]], 'Example 1: findSolution(1, 5) → [[1,4],[2,3],[3,2],[4,1]]');
test(findSolution(2, 5), [[1,5],[5,1]], 'Example 2: findSolution(2, 5) → [[1,5],[5,1]]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

