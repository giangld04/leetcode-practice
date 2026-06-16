// Test: 3820. Pythagorean Distance Nodes in a Tree
// Run: node test.js

const { specialNodes } = require("./solution");

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

console.log("\n3820. Pythagorean Distance Nodes in a Tree\n");

test(specialNodes(4, [[0,1],[0,2],[0,3]], 1, 2, 3), 3, 'Example 1: specialNodes(4, [[0,1],[0,2],[0,3]], 1, 2, 3) → 3');
test(specialNodes(4, [[0,1],[1,2],[2,3]], 0, 3, 2), 0, 'Example 2: specialNodes(4, [[0,1],[1,2],[2,3]], 0, 3, 2) → 0');
test(specialNodes(4, [[0,1],[1,2],[1,3]], 1, 3, 0), 1, 'Example 3: specialNodes(4, [[0,1],[1,2],[1,3]], 1, 3, 0) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

