// Test: 3715. Sum of Perfect Square Ancestors
// Run: node test.js

const { sumOfAncestors } = require("./solution");

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

console.log("\n3715. Sum of Perfect Square Ancestors\n");

test(sumOfAncestors(3, [[0,1],[1,2]], [2,8,2]), 3, 'Example 1: sumOfAncestors(3, [[0,1],[1,2]], [2,8,2]) → 3');
test(sumOfAncestors(3, [[0,1],[0,2]], [1,2,4]), 1, 'Example 2: sumOfAncestors(3, [[0,1],[0,2]], [1,2,4]) → 1');
test(sumOfAncestors(4, [[0,1],[0,2],[1,3]], [1,2,9,4]), 2, 'Example 3: sumOfAncestors(4, [[0,1],[0,2],[1,3]], [1,2,9,4]) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

