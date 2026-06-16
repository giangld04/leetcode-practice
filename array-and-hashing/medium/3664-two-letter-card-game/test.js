// Test: 3664. Two-Letter Card Game
// Run: node test.js

const { score } = require("./solution");

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

console.log("\n3664. Two-Letter Card Game\n");

test(score(["aa","ab","ba","ac"], "a"), 2, 'Example 1: score(["aa","ab","ba","ac"], "a") → 2');
test(score(["aa","ab","ba"], "a"), 1, 'Example 2: score(["aa","ab","ba"], "a") → 1');
test(score(["aa","ab","ba","ac"], "b"), 0, 'Example 3: score(["aa","ab","ba","ac"], "b") → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

