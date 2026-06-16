// Test: 3614. Process String with Special Operations II
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

console.log("\n3614. Process String with Special Operations II\n");

test(processStr("a#b%*", 1), "a", 'Example 1: processStr("a#b%*", 1) → "a"');
test(processStr("cd%#*#", 3), "d", 'Example 2: processStr("cd%#*#", 3) → "d"');
test(processStr("z*#", 0), ".", 'Example 3: processStr("z*#", 0) → "."');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

