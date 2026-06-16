// Test: 142. Linked List Cycle II
// Run: node test.js

const { detectCycle } = require("./solution");

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

console.log("\n142. Linked List Cycle II\n");

test(detectCycle([3,2,0,-4], 1), tail connects to node index 1, 'Example 1: detectCycle([3,2,0,-4], 1) → tail connects to node index 1');
test(detectCycle([1,2], 0), tail connects to node index 0, 'Example 2: detectCycle([1,2], 0) → tail connects to node index 0');
test(detectCycle([1], -1), no cycle, 'Example 3: detectCycle([1], -1) → no cycle');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

