// Test: 652. Find Duplicate Subtrees
// Run: node test.js

const { findDuplicateSubtrees } = require("./solution");

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

console.log("\n652. Find Duplicate Subtrees\n");

test(findDuplicateSubtrees([1,2,3,4,null,2,4,null,null,4]), [[2,4],[4]], 'Example 1: findDuplicateSubtrees([1,2,3,4,null,2,4,null,null,4]) → [[2,4],[4]]');
test(findDuplicateSubtrees([2,1,1]), [[1]], 'Example 2: findDuplicateSubtrees([2,1,1]) → [[1]]');
test(findDuplicateSubtrees([2,2,2,3,null,3,null]), [[2,3],[3]], 'Example 3: findDuplicateSubtrees([2,2,2,3,null,3,null]) → [[2,3],[3]]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

