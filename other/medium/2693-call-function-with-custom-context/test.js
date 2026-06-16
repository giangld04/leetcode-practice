// Test: 2693. Call Function with Custom Context
// Run: node test.js

const { increment } = require("./solution");

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

console.log("\n2693. Call Function with Custom Context\n");

test(increment(function add(b) {
  return this.a + b;
}, [{"a": 5}, 7]), 12, 'Example 1: increment(function add(b) {
  return this.a + b;
}, [{"a": 5}, 7]) → 12');
test(increment(function tax(price, taxRate) { 
 return `The cost of the ${this.item} is ${price * taxRate}`; 
}, [{"item": "burger"}, 10, 1.1]), "The cost of the burger is 11", 'Example 2: increment(function tax(price, taxRate) { 
 return `The cost of the ${this.item} is ${price * taxRate}`; 
}, [{"item": "burger"}, 10, 1.1]) → "The cost of the burger is 11"');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

