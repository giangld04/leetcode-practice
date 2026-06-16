// Test: 863. All Nodes Distance K in Binary Tree
// Run: node test.js

const { distanceK } = require("./solution");

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

console.log("\n863. All Nodes Distance K in Binary Tree\n");

test(distanceK([3,5,1,6,2,0,8,null,null,7,4], 5, 2), [7,4,1]
Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1., 'Example 1: distanceK([3,5,1,6,2,0,8,null,null,7,4], 5, 2) → [7,4,1]
Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.');
test(distanceK([1], 1, 3), [], 'Example 2: distanceK([1], 1, 3) → []');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

