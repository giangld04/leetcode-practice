// Test: 3597. Partition String 
// Run: node test.js

const { partitionString } = require("./solution");

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

console.log("\n3597. Partition String \n");

test(partitionString("abbccccd"), ["a","b","bc","c","cc","d"], 'Example 1: partitionString("abbccccd") → ["a","b","bc","c","cc","d"]');
test(partitionString("aaaa"), ["a","aa"], 'Example 2: partitionString("aaaa") → ["a","aa"]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

