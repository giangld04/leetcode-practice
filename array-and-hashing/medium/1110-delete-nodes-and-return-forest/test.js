// Test: 1110. Delete Nodes And Return Forest
// Run: node test.js

const { delNodes } = require("./solution");

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

console.log("\n1110. Delete Nodes And Return Forest\n");

test(delNodes([1,2,3,4,5,6,7], [3,5]), [[1,2,null,4],[6],[7]], 'Example 1: delNodes([1,2,3,4,5,6,7], [3,5]) → [[1,2,null,4],[6],[7]]');
test(delNodes([1,2,4,null,3], [3]), [[1,2,4]], 'Example 2: delNodes([1,2,4,null,3], [3]) → [[1,2,4]]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

