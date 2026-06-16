// Test: 3625. Count Number of Trapezoids II
// Run: node test.js

const { countTrapezoids } = require("./solution");

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

console.log("\n3625. Count Number of Trapezoids II\n");

test(countTrapezoids([[-3,2],[3,0],[2,3],[3,2],[2,-3]]), 2, 'Example 1: countTrapezoids([[-3,2],[3,0],[2,3],[3,2],[2,-3]]) → 2');
test(countTrapezoids([[0,0],[1,0],[0,1],[2,1]]), 1, 'Example 2: countTrapezoids([[0,0],[1,0],[0,1],[2,1]]) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

