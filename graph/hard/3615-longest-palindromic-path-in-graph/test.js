// Test: 3615. Longest Palindromic Path in Graph
// Run: node test.js

const { maxLen } = require("./solution");

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

console.log("\n3615. Longest Palindromic Path in Graph\n");

test(maxLen(3, [[0,1],[1,2]], "aba"), 3, 'Example 1: maxLen(3, [[0,1],[1,2]], "aba") → 3');
test(maxLen(3, [[0,1],[0,2]], "abc"), 1, 'Example 2: maxLen(3, [[0,1],[0,2]], "abc") → 1');
test(maxLen(4, [[0,2],[0,3],[3,1]], "bbac"), 3, 'Example 3: maxLen(4, [[0,2],[0,3],[3,1]], "bbac") → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

