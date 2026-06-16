// Test: 3643. Flip Square Submatrix Vertically
// Run: node test.js

const { reverseSubmatrix } = require("./solution");

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

console.log("\n3643. Flip Square Submatrix Vertically\n");

test(reverseSubmatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 1, 0, 3), [[1,2,3,4],[13,14,15,8],[9,10,11,12],[5,6,7,16]], 'Example 1: reverseSubmatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 1, 0, 3) → [[1,2,3,4],[13,14,15,8],[9,10,11,12],[5,6,7,16]]');
test(reverseSubmatrix([[3,4,2,3],[2,3,4,2]], 0, 2, 2), [[3,4,4,2],[2,3,2,3]], 'Example 2: reverseSubmatrix([[3,4,2,3],[2,3,4,2]], 0, 2, 2) → [[3,4,4,2],[2,3,2,3]]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

