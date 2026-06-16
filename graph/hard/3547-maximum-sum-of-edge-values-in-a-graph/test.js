// Test: 3547. Maximum Sum of Edge Values in a Graph
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

console.log("\n3547. Maximum Sum of Edge Values in a Graph\n");

test(maxScore(4, [[0,1],[1,2],[2,3]]), 23, 'Example 1: maxScore(4, [[0,1],[1,2],[2,3]]) → 23');
test(maxScore(6, [[0,3],[4,5],[2,0],[1,3],[2,4],[1,5]]), 82, 'Example 2: maxScore(6, [[0,3],[4,5],[2,0],[1,3],[2,4],[1,5]]) → 82');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

