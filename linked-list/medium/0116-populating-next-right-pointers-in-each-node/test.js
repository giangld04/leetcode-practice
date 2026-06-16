// Test: 116. Populating Next Right Pointers in Each Node
// Run: node test.js

const { connect } = require("./solution");

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

console.log("\n116. Populating Next Right Pointers in Each Node\n");

test(connect([1,2,3,4,5,6,7]), [1,#,2,3,#,4,5,6,7,#], 'Example 1: connect([1,2,3,4,5,6,7]) → [1,#,2,3,#,4,5,6,7,#]');
test(connect([]), [], 'Example 2: connect([]) → []');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

