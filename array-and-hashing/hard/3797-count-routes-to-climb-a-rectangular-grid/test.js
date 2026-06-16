// Test: 3797. Count Routes to Climb a Rectangular Grid
// Run: node test.js

const { numberOfRoutes } = require("./solution");

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

console.log("\n3797. Count Routes to Climb a Rectangular Grid\n");

test(numberOfRoutes(["..","#."], 1), 2, 'Example 1: numberOfRoutes(["..","#."], 1) → 2');
test(numberOfRoutes(["..","#."], 2), 4, 'Example 2: numberOfRoutes(["..","#."], 2) → 4');
test(numberOfRoutes(["#"], 750), 0, 'Example 3: numberOfRoutes(["#"], 750) → 0');
test(numberOfRoutes([".."], 1), 4, 'Example 4: numberOfRoutes([".."], 1) → 4');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

