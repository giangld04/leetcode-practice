// Test: 297. Serialize and Deserialize Binary Tree
// Run: node test.js

const { serialize } = require("./solution");

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

console.log("\n297. Serialize and Deserialize Binary Tree\n");

test(serialize([1,2,3,null,null,4,5]), [1,2,3,null,null,4,5], 'Example 1: serialize([1,2,3,null,null,4,5]) → [1,2,3,null,null,4,5]');
test(serialize([]), [], 'Example 2: serialize([]) → []');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

