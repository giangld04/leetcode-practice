// Test: 2705. Compact Object
// Run: node test.js

const { compactObject } = require("./solution");

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

console.log("\n2705. Compact Object\n");

test(compactObject([null, 0, false, 1]), [1], 'Example 1: compactObject([null, 0, false, 1]) → [1]');
test(compactObject({"a": null, "b": [false, 1]}), {"b": [1]}, 'Example 2: compactObject({"a": null, "b": [false, 1]}) → {"b": [1]}');
test(compactObject([null, 0, 5, [0], [false, 16]]), [5, [], [16]], 'Example 3: compactObject([null, 0, 5, [0], [false, 16]]) → [5, [], [16]]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

