// Test: 3906. Count Good Integers on a Grid Path
// Run: node test.js

const { countGoodIntegersOnPath } = require("./solution");

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

console.log("\n3906. Count Good Integers on a Grid Path\n");

test(countGoodIntegersOnPath(8, 10, "DDDRRR"), 2, 'Example 1: countGoodIntegersOnPath(8, 10, "DDDRRR") → 2');
test(countGoodIntegersOnPath(123456789, 123456790, "DDRRDR"), 1, 'Example 2: countGoodIntegersOnPath(123456789, 123456790, "DDRRDR") → 1');
test(countGoodIntegersOnPath(1288561398769758, 1288561398769758, "RRRDDD"), 0, 'Example 3: countGoodIntegersOnPath(1288561398769758, 1288561398769758, "RRRDDD") → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

