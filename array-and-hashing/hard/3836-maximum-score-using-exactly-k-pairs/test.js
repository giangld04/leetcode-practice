// Test: 3836. Maximum Score Using Exactly K Pairs
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

console.log("\n3836. Maximum Score Using Exactly K Pairs\n");

test(maxScore([1,3,2], [4,5,1], 2), 22, 'Example 1: maxScore([1,3,2], [4,5,1], 2) → 22');
test(maxScore([-2,0,5], [-3,4,-1,2], 2), 26, 'Example 2: maxScore([-2,0,5], [-3,4,-1,2], 2) → 26');
test(maxScore([-3,-2], [1,2], 2), -7, 'Example 3: maxScore([-3,-2], [1,2], 2) → -7');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

