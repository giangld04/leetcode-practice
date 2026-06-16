// Test: 3692. Majority Frequency Characters
// Run: node test.js

const { majorityFrequencyGroup } = require("./solution");

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

console.log("\n3692. Majority Frequency Characters\n");

test(majorityFrequencyGroup("aaabbbccdddde"), "ab", 'Example 1: majorityFrequencyGroup("aaabbbccdddde") → "ab"');
test(majorityFrequencyGroup("abcd"), "abcd", 'Example 2: majorityFrequencyGroup("abcd") → "abcd"');
test(majorityFrequencyGroup("pfpfgi"), "fp", 'Example 3: majorityFrequencyGroup("pfpfgi") → "fp"');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

