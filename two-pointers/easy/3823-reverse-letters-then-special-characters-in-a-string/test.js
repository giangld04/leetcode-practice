// Test: 3823. Reverse Letters Then Special Characters in a String
// Run: node test.js

const { reverseByType } = require("./solution");

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

console.log("\n3823. Reverse Letters Then Special Characters in a String\n");

test(reverseByType(")ebc#da@f("), "(fad@cb#e)", 'Example 1: reverseByType(")ebc#da@f(") → "(fad@cb#e)"');
test(reverseByType("z"), "z", 'Example 2: reverseByType("z") → "z"');
test(reverseByType("!@#$%^&*()"), ")(*&^%$#@!", 'Example 3: reverseByType("!@#$%^&*()") → ")(*&^%$#@!"');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

