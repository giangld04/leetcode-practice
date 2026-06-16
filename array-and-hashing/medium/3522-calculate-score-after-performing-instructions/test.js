// Test: 3522. Calculate Score After Performing Instructions
// Run: node test.js

const { calculateScore } = require("./solution");

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

console.log("\n3522. Calculate Score After Performing Instructions\n");

test(calculateScore(["jump","add","add","jump","add","jump"], [2,1,3,1,-2,-3]), 1, 'Example 1: calculateScore(["jump","add","add","jump","add","jump"], [2,1,3,1,-2,-3]) → 1');
test(calculateScore(["jump","add","add"], [3,1,1]), 0, 'Example 2: calculateScore(["jump","add","add"], [3,1,1]) → 0');
test(calculateScore(["jump"], [0]), 0, 'Example 3: calculateScore(["jump"], [0]) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

