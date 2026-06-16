// Test: 2704. To Be Or Not To Be
// Run: node test.js

const { expect } = require("./solution");

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

console.log("\n2704. To Be Or Not To Be\n");

test(expect(() => expect(5).toBe(5)), {"value": true}, 'Example 1: expect(() => expect(5).toBe(5)) → {"value": true}');
test(expect(() => expect(5).toBe(null)), {"error": "Not Equal"}, 'Example 2: expect(() => expect(5).toBe(null)) → {"error": "Not Equal"}');
test(expect(() => expect(5).notToBe(null)), {"value": true}, 'Example 3: expect(() => expect(5).notToBe(null)) → {"value": true}');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

