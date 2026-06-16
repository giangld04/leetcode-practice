// Test: 3612. Process String with Special Operations I
// Run: node test.js

const { processStr } = require("./solution");

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

console.log("\n3612. Process String with Special Operations I\n");

test(processStr("a#b%*"), "ba", 'Example 1: processStr("a#b%*") → "ba"');
test(processStr("z*#"), "", 'Example 2: processStr("z*#") → ""');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

