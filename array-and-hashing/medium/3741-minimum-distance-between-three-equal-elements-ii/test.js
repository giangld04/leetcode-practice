// Test: 3741. Minimum Distance Between Three Equal Elements II
// Run: node test.js

const { minimumDistance } = require("./solution");

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

console.log("\n3741. Minimum Distance Between Three Equal Elements II\n");

test(minimumDistance([1,2,1,1,3]), 6, 'Example 1: minimumDistance([1,2,1,1,3]) → 6');
test(minimumDistance([1,1,2,3,2,1,2]), 8, 'Example 2: minimumDistance([1,1,2,3,2,1,2]) → 8');
test(minimumDistance([1]), -1, 'Example 3: minimumDistance([1]) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

