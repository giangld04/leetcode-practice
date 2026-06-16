// Test: 3771. Total Score of Dungeon Runs
// Run: node test.js

const { totalScore } = require("./solution");

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

console.log("\n3771. Total Score of Dungeon Runs\n");

test(totalScore(11, [3,6,7], [4,2,5]), 3, 'Example 1: totalScore(11, [3,6,7], [4,2,5]) → 3');
test(totalScore(2, [10000,1], [1,1]), 1, 'Example 2: totalScore(2, [10000,1], [1,1]) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

