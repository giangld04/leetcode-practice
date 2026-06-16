// Test: 3567. Minimum Absolute Difference in Sliding Submatrix
// Run: node test.js

const { minAbsDiff } = require("./solution");

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

console.log("\n3567. Minimum Absolute Difference in Sliding Submatrix\n");

test(minAbsDiff([[1,8],[3,-2]], 2), [[2]], 'Example 1: minAbsDiff([[1,8],[3,-2]], 2) → [[2]]');
test(minAbsDiff([[3,-1]], 1), [[0,0]], 'Example 2: minAbsDiff([[3,-1]], 1) → [[0,0]]');
test(minAbsDiff([[1,-2,3],[2,3,5]], 2), [[1,2]], 'Example 3: minAbsDiff([[1,-2,3],[2,3,5]], 2) → [[1,2]]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

