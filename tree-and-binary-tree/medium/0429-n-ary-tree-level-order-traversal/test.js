// Test: 429. N-ary Tree Level Order Traversal
// Run: node test.js

const { levelOrder } = require("./solution");

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

console.log("\n429. N-ary Tree Level Order Traversal\n");

test(levelOrder([1,null,3,2,4,null,5,6]), [[1],[3,2,4],[5,6]], 'Example 1: levelOrder([1,null,3,2,4,null,5,6]) → [[1],[3,2,4],[5,6]]');
test(levelOrder([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]), [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]], 'Example 2: levelOrder([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]) → [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

