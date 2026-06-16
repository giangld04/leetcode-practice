// Test: 3905. Multi Source Flood Fill
// Run: node test.js

const { colorGrid } = require("./solution");

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

console.log("\n3905. Multi Source Flood Fill\n");

test(colorGrid(3, 3, [[0,0,1],[2,2,2]]), [[1,1,2],[1,2,2],[2,2,2]], 'Example 1: colorGrid(3, 3, [[0,0,1],[2,2,2]]) → [[1,1,2],[1,2,2],[2,2,2]]');
test(colorGrid(3, 3, [[0,1,3],[1,1,5]]), [[3,3,3],[5,5,5],[5,5,5]], 'Example 2: colorGrid(3, 3, [[0,1,3],[1,1,5]]) → [[3,3,3],[5,5,5],[5,5,5]]');
test(colorGrid(2, 2, [[1,1,5]]), [[5,5],[5,5]], 'Example 3: colorGrid(2, 2, [[1,1,5]]) → [[5,5],[5,5]]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

