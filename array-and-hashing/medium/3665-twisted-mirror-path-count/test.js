// Test: 3665. Twisted Mirror Path Count
// Run: node test.js

const { uniquePaths } = require("./solution");

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

console.log("\n3665. Twisted Mirror Path Count\n");

test(uniquePaths([[0,1,0],[0,0,1],[1,0,0]]), 5, 'Example 1: uniquePaths([[0,1,0],[0,0,1],[1,0,0]]) → 5');
test(uniquePaths([[0,0],[0,0]]), 2, 'Example 2: uniquePaths([[0,0],[0,0]]) → 2');
test(uniquePaths([[0,1,1],[1,1,0]]), 1, 'Example 3: uniquePaths([[0,1,1],[1,1,0]]) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

