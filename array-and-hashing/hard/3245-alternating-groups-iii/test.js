// Test: 3245. Alternating Groups III
// Run: node test.js

const { numberOfAlternatingGroups } = require("./solution");

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

console.log("\n3245. Alternating Groups III\n");

test(numberOfAlternatingGroups([0,1,1,0,1], [[2,1,0],[1,4]]), [2], 'Example 1: numberOfAlternatingGroups([0,1,1,0,1], [[2,1,0],[1,4]]) → [2]');
test(numberOfAlternatingGroups([0,0,1,0,1,1], [[1,3],[2,3,0],[1,5]]), [2,0], 'Example 2: numberOfAlternatingGroups([0,0,1,0,1,1], [[1,3],[2,3,0],[1,5]]) → [2,0]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

