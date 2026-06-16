// Test: 479. Largest Palindrome Product
// 8 test cases from LeetCodeDataset
// Run: node test.js

const { largestPalindrome } = require("./solution");

let passed = 0, failed = 0;
function test(actual, expected, label) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    passed++;
  } else {
    console.log(`  ✗ ${label}`);
    console.log(`    Expected: ${e}`);
    console.log(`    Actual:   ${a}`);
    failed++;
  }
}

console.log("\n479. Largest Palindrome Product\n");

test(largestPalindrome(8), 475, 'Test 1');
test(largestPalindrome(3), 123, 'Test 2');
test(largestPalindrome(4), 597, 'Test 3');
test(largestPalindrome(6), 1218, 'Test 4');
test(largestPalindrome(2), 987, 'Test 5');
test(largestPalindrome(1), 9, 'Test 6');
test(largestPalindrome(7), 877, 'Test 7');
test(largestPalindrome(5), 677, 'Test 8');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

