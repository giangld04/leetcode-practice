// Test: 2618. Check if Object Instance of Class
// Run: node test.js

const { checkIfInstanceOf } = require("./solution");

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

console.log("\n2618. Check if Object Instance of Class\n");

test(checkIfInstanceOf(() => checkIfInstanceOf(new Date(), Date)), true, 'Example 1: checkIfInstanceOf(() => checkIfInstanceOf(new Date(), Date)) → true');
test(checkIfInstanceOf(() => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }), true, 'Example 2: checkIfInstanceOf(() => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }) → true');
test(checkIfInstanceOf(() => checkIfInstanceOf(Date, Date)), false, 'Example 3: checkIfInstanceOf(() => checkIfInstanceOf(Date, Date)) → false');
test(checkIfInstanceOf(() => checkIfInstanceOf(5, Number)), true, 'Example 4: checkIfInstanceOf(() => checkIfInstanceOf(5, Number)) → true');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

