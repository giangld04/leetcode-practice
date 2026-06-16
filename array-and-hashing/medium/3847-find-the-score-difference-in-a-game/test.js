// Test: 3847. Find the Score Difference in a Game
// Run: node test.js

const { scoreDifference } = require("./solution");

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

console.log("\n3847. Find the Score Difference in a Game\n");

test(scoreDifference([1,2,3]), 0, 'Example 1: scoreDifference([1,2,3]) → 0');
test(scoreDifference([2,4,2,1,2,1]), 4, 'Example 2: scoreDifference([2,4,2,1,2,1]) → 4');
test(scoreDifference([1]), -1, 'Example 3: scoreDifference([1]) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

