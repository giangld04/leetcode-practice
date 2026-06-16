// Test: 3898. Find the Degree of Each Vertex
// Run: node test.js

const { findDegrees } = require("./solution");

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

console.log("\n3898. Find the Degree of Each Vertex\n");

test(findDegrees([[0,1,1],[1,0,1],[1,1,0]]), [2,2,2], 'Example 1: findDegrees([[0,1,1],[1,0,1],[1,1,0]]) → [2,2,2]');
test(findDegrees([[0,1,0],[1,0,0],[0,0,0]]), [1,1,0], 'Example 2: findDegrees([[0,1,0],[1,0,0],[0,0,0]]) → [1,1,0]');
test(findDegrees([[0]]), [0], 'Example 3: findDegrees([[0]]) → [0]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

