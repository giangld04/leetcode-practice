// Test: 3938. Maximum Path Intersection Sum in a Grid
// Run: node test.js

const { maxScore } = require("./solution");

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

console.log("\n3938. Maximum Path Intersection Sum in a Grid\n");

test(maxScore([[1,2,0,-3],[1,-2,1,0],[-4,2,-1,3],[3,-3,3,-2],[-1,-5,0,1]]), 4, 'Example 1: maxScore([[1,2,0,-3],[1,-2,1,0],[-4,2,-1,3],[3,-3,3,-2],[-1,-5,0,1]]) → 4');
test(maxScore([[4,-2,-3],[-1,-3,-1],[-4,2,-1]]), 3, 'Example 2: maxScore([[4,-2,-3],[-1,-3,-1],[-4,2,-1]]) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

