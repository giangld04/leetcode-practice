// Test: 3799. Word Squares II
// Run: node test.js

const { wordSquares } = require("./solution");

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

console.log("\n3799. Word Squares II\n");

test(wordSquares(["able","area","echo","also"]), [["able","area","echo","also"],["area","able","also","echo"]], 'Example 1: wordSquares(["able","area","echo","also"]) → [["able","area","echo","also"],["area","able","also","echo"]]');
test(wordSquares(["code","cafe","eden","edge"]), [], 'Example 2: wordSquares(["code","cafe","eden","edge"]) → []');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

