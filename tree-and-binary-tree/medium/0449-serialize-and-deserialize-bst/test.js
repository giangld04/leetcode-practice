// Test: 449. Serialize and Deserialize BST
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

console.log("\n449. Serialize and Deserialize BST\n");

test(serialize([2,1,3]), [2,1,3], 'Example 1: serialize([2,1,3]) → [2,1,3]');
test(serialize([]), [], 'Example 2: serialize([]) → []');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

