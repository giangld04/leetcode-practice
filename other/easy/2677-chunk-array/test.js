// Test: 2677. Chunk Array
// Run: node test.js

const { chunk } = require("./solution");

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

console.log("\n2677. Chunk Array\n");

test(chunk([1,2,3,4,5], 1), [[1],[2],[3],[4],[5]], 'Example 1: chunk([1,2,3,4,5], 1) → [[1],[2],[3],[4],[5]]');
test(chunk([1,9,6,3,2], 3), [[1,9,6],[3,2]], 'Example 2: chunk([1,9,6,3,2], 3) → [[1,9,6],[3,2]]');
test(chunk([8,5,3,2,6], 6), [[8,5,3,2,6]], 'Example 3: chunk([8,5,3,2,6], 6) → [[8,5,3,2,6]]');
test(chunk([], 1), [], 'Example 4: chunk([], 1) → []');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

