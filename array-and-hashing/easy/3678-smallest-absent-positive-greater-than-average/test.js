// Test: 3678. Smallest Absent Positive Greater Than Average
// Run: node test.js

const { smallestAbsent } = require("./solution");

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

console.log("\n3678. Smallest Absent Positive Greater Than Average\n");

test(smallestAbsent([3,5]), 6, 'Example 1: smallestAbsent([3,5]) → 6');
test(smallestAbsent([-1,1,2]), 3, 'Example 2: smallestAbsent([-1,1,2]) → 3');
test(smallestAbsent([4,-1]), 2, 'Example 3: smallestAbsent([4,-1]) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

