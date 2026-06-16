// Test: 2667. Create Hello World Function
// Run: node test.js

const { createHelloWorld } = require("./solution");

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

console.log("\n2667. Create Hello World Function\n");

test(createHelloWorld([]), "Hello World", 'Example 1: createHelloWorld([]) → "Hello World"');
test(createHelloWorld([{},null,42]), "Hello World", 'Example 2: createHelloWorld([{},null,42]) → "Hello World"');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

