// Test: 3777. Minimum Deletions to Make Alternating Substring
// Run: node test.js

const { minDeletions } = require("./solution");

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

console.log("\n3777. Minimum Deletions to Make Alternating Substring\n");

test(minDeletions("ABA", [[2,1,2],[1,1],[2,0,2]]), [0,2], 'Example 1: minDeletions("ABA", [[2,1,2],[1,1],[2,0,2]]) → [0,2]');
test(minDeletions("ABB", [[2,0,2],[1,2],[2,0,2]]), [1,0], 'Example 2: minDeletions("ABB", [[2,0,2],[1,2],[2,0,2]]) → [1,0]');
test(minDeletions("BABA", [[2,0,3],[1,1],[2,1,3]]), [0,1], 'Example 3: minDeletions("BABA", [[2,0,3],[1,1],[2,1,3]]) → [0,1]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

