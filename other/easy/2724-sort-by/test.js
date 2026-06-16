// Test: 2724. Sort By
// Run: node test.js

const { sortBy } = require("./solution");

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

console.log("\n2724. Sort By\n");

test(sortBy([5, 4, 1, 2, 3], (x) => x), [1, 2, 3, 4, 5], 'Example 1: sortBy([5, 4, 1, 2, 3], (x) => x) → [1, 2, 3, 4, 5]');
test(sortBy([{"x": 1}, {"x": 0}, {"x": -1}], (d) => d.x), [{"x": -1}, {"x": 0}, {"x": 1}], 'Example 2: sortBy([{"x": 1}, {"x": 0}, {"x": -1}], (d) => d.x) → [{"x": -1}, {"x": 0}, {"x": 1}]');
test(sortBy([[3, 4], [5, 2], [10, 1]], (x) => x[1]), [[10, 1], [5, 2], [3, 4]], 'Example 3: sortBy([[3, 4], [5, 2], [10, 1]], (x) => x[1]) → [[10, 1], [5, 2], [3, 4]]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

