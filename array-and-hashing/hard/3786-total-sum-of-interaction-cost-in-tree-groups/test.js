// Test: 3786. Total Sum of Interaction Cost in Tree Groups
// Run: node test.js

const { interactionCosts } = require("./solution");

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

console.log("\n3786. Total Sum of Interaction Cost in Tree Groups\n");

test(interactionCosts(3, [[0,1],[1,2]], [1,1,1]), 4, 'Example 1: interactionCosts(3, [[0,1],[1,2]], [1,1,1]) → 4');
test(interactionCosts(3, [[0,1],[1,2]], [3,2,3]), 2, 'Example 2: interactionCosts(3, [[0,1],[1,2]], [3,2,3]) → 2');
test(interactionCosts(4, [[0,1],[0,2],[0,3]], [1,1,4,4]), 3, 'Example 3: interactionCosts(4, [[0,1],[0,2],[0,3]], [1,1,4,4]) → 3');
test(interactionCosts(2, [[0,1]], [9,8]), 0, 'Example 4: interactionCosts(2, [[0,1]], [9,8]) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

