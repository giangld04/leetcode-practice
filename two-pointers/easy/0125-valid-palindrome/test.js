// Test: 125. Valid Palindrome
// 21 test cases from LeetCodeDataset
// Run: node test.js

const { isPalindrome } = require("./solution");

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

console.log("\n125. Valid Palindrome\n");

test(isPalindrome("race a car"), false, 'Test 1');
test(isPalindrome(" "), true, 'Test 2');
test(isPalindrome("Able was I ere I saw Elba"), true, 'Test 3');
test(isPalindrome("__Level__, __level__"), true, 'Test 4');
test(isPalindrome("No lemon, no melon"), true, 'Test 5');
test(isPalindrome("0P"), false, 'Test 6');
test(isPalindrome("_a!a_"), true, 'Test 7');
test(isPalindrome("Never odd or even"), true, 'Test 8');
test(isPalindrome("12345678987654321"), true, 'Test 9');
test(isPalindrome("Was it a car or a cat I saw?"), true, 'Test 10');
test(isPalindrome("No 'x' in Nixon"), true, 'Test 11');
test(isPalindrome("Able was I, I saw Elba"), true, 'Test 12');
test(isPalindrome("12321"), true, 'Test 13');
test(isPalindrome("Not a palindrome"), false, 'Test 14');
test(isPalindrome("Able was I, ere I saw Elba"), true, 'Test 15');
test(isPalindrome("123abcba321"), true, 'Test 16');
test(isPalindrome("Step on no pets"), true, 'Test 17');
test(isPalindrome("A man, a plan, a canal: Panama"), true, 'Test 18');
test(isPalindrome("Madam, in Eden, I'm Adam"), true, 'Test 19');
test(isPalindrome("123abccba321"), true, 'Test 20');
test(isPalindrome("__^_^__"), true, 'Test 21');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

