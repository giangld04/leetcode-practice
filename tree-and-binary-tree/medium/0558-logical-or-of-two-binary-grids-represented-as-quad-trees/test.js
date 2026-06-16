// Test: 558. Logical OR of Two Binary Grids Represented as Quad-Trees
// Run: node test.js

const { intersect } = require("./solution");

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

console.log("\n558. Logical OR of Two Binary Grids Represented as Quad-Trees\n");

test(intersect([[0,1],[1,1],[1,1],[1,0],[1,0]], [[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]), [[0,0],[1,1],[1,1],[1,1],[1,0]], 'Example 1: intersect([[0,1],[1,1],[1,1],[1,0],[1,0]], [[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]) → [[0,0],[1,1],[1,1],[1,1],[1,0]]');
test(intersect([[1,0]], [[1,0]]), [[1,0]], 'Example 2: intersect([[1,0]], [[1,0]]) → [[1,0]]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

