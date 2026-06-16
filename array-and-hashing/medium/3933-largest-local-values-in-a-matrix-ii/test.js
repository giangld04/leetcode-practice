// Test: 3933. Largest Local Values in a Matrix II
// Run: node test.js

const { countLocalMaximums } = require("./solution");

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

console.log("\n3933. Largest Local Values in a Matrix II\n");

test(countLocalMaximums([[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,2,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]), 1, 'Example 1: countLocalMaximums([[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,2,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]) → 1');
test(countLocalMaximums([[1,2],[3,4]]), 1, 'Example 2: countLocalMaximums([[1,2],[3,4]]) → 1');
test(countLocalMaximums([[1,0,1],[0,1,0],[1,0,1]]), 5, 'Example 3: countLocalMaximums([[1,0,1],[0,1,0],[1,0,1]]) → 5');
test(countLocalMaximums([[1,1],[1,1]]), 4, 'Example 4: countLocalMaximums([[1,1],[1,1]]) → 4');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

