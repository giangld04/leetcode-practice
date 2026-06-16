// Test: 3608. Minimum Time for K Connected Components
// Run: node test.js

const { minTime } = require("./solution");

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

console.log("\n3608. Minimum Time for K Connected Components\n");

test(minTime(2, [[0,1,3]], 2), 3, 'Example 1: minTime(2, [[0,1,3]], 2) → 3');
test(minTime(3, [[0,1,2],[1,2,4]], 3), 4, 'Example 2: minTime(3, [[0,1,2],[1,2,4]], 3) → 4');
test(minTime(3, [[0,2,5]], 2), 0, 'Example 3: minTime(3, [[0,2,5]], 2) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

