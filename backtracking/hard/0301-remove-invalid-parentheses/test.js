// Test: 301. Remove Invalid Parentheses
// Run: node test.js

const { removeInvalidParentheses } = require("./solution");

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

console.log("\n301. Remove Invalid Parentheses\n");

test(removeInvalidParentheses("()())()"), ["(())()","()()()"], 'Example 1: removeInvalidParentheses("()())()") → ["(())()","()()()"]');
test(removeInvalidParentheses("(a)())()"), ["(a())()","(a)()()"], 'Example 2: removeInvalidParentheses("(a)())()") → ["(a())()","(a)()()"]');
test(removeInvalidParentheses(")("), [""], 'Example 3: removeInvalidParentheses(")(") → [""]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

