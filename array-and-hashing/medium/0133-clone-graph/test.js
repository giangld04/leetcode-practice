// Test: 133. Clone Graph
// Run: node test.js

const { cloneGraph } = require("./solution");

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

console.log("\n133. Clone Graph\n");

test(cloneGraph([[2,4],[1,3],[2,4],[1,3]]), [[2,4],[1,3],[2,4],[1,3]], 'Example 1: cloneGraph([[2,4],[1,3],[2,4],[1,3]]) → [[2,4],[1,3],[2,4],[1,3]]');
test(cloneGraph([[]]), [[]], 'Example 2: cloneGraph([[]]) → [[]]');
test(cloneGraph([]), [], 'Example 3: cloneGraph([]) → []');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

