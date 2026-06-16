// Test: 3881. Direction Assignments with Exactly K Visible People
// Run: node test.js

const { countVisiblePeople } = require("./solution");

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

console.log("\n3881. Direction Assignments with Exactly K Visible People\n");

test(countVisiblePeople(3, 1, 0), 2, 'Example 1: countVisiblePeople(3, 1, 0) → 2');
test(countVisiblePeople(3, 2, 1), 4, 'Example 2: countVisiblePeople(3, 2, 1) → 4');
test(countVisiblePeople(1, 0, 0), 2, 'Example 3: countVisiblePeople(1, 0, 0) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

