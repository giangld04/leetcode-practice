// Test: 409. Longest Palindrome
// 68 test cases from LeetCodeDataset
// Run: node test.js

const { longestPalindrome } = require("./solution");

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

console.log("\n409. Longest Palindrome\n");

test(longestPalindrome("aabbccc"), 7, 'Test 1');
test(longestPalindrome("abccccdd"), 7, 'Test 2');
test(longestPalindrome("zyyzzzzz"), 8, 'Test 3');
test(longestPalindrome("abcdedcba"), 9, 'Test 4');
test(longestPalindrome("aabbbb"), 6, 'Test 5');
test(longestPalindrome("aaaaa"), 5, 'Test 6');
test(longestPalindrome("aabbccddee"), 10, 'Test 7');
test(longestPalindrome("a"), 1, 'Test 8');
test(longestPalindrome("aaabbbaa"), 7, 'Test 9');
test(longestPalindrome("aabbbccc"), 7, 'Test 10');
test(longestPalindrome("aabbbbccc"), 9, 'Test 11');
test(longestPalindrome("zzzz"), 4, 'Test 12');
test(longestPalindrome("aabbc"), 5, 'Test 13');
test(longestPalindrome(""), 0, 'Test 14');
test(longestPalindrome("aabbb"), 5, 'Test 15');
test(longestPalindrome("abcde"), 1, 'Test 16');
test(longestPalindrome("Aa"), 1, 'Test 17');
test(longestPalindrome("racecar"), 7, 'Test 18');
test(longestPalindrome("aabb"), 4, 'Test 19');
test(longestPalindrome("abbccc"), 5, 'Test 20');
test(longestPalindrome("abcadcb"), 7, 'Test 21');
test(longestPalindrome("abcABC"), 1, 'Test 22');
test(longestPalindrome("abba"), 4, 'Test 23');
test(longestPalindrome("abc"), 1, 'Test 24');
test(longestPalindrome("aabbccddeeffgghhii"), 18, 'Test 25');
test(longestPalindrome("aabbccddeeff"), 12, 'Test 26');
test(longestPalindrome("zyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyz"), 52, 'Test 27');
test(longestPalindrome("aabbbbcccc"), 10, 'Test 28');
test(longestPalindrome("zzzzzzzz"), 8, 'Test 29');
test(longestPalindrome("zyxwvutsrqponmlkjihgfedcba"), 1, 'Test 30');
test(longestPalindrome("abcdefg"), 1, 'Test 31');
test(longestPalindrome("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"), 1, 'Test 32');
test(longestPalindrome("abAB"), 1, 'Test 33');
test(longestPalindrome("aaAAbbBBccCCddDDeeEEffFFggGGhhHHiiJJkkLLmmNNooPPqqRRssSStttUuuVvvWwwXxxYyyZzz"), 71, 'Test 34');
test(longestPalindrome("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), 49, 'Test 35');
test(longestPalindrome("deified"), 7, 'Test 36');
test(longestPalindrome("AaBbCcDdEeFfGg"), 1, 'Test 37');
test(longestPalindrome("abcABCabcABCabcABC"), 13, 'Test 38');
test(longestPalindrome("abcdeABCDEabcdeABCDEabcdeABCDEabcdeABCDE"), 40, 'Test 39');
test(longestPalindrome("abcdabcabcdabcabcdabcabcdabcabcdabcabcdabcabcdabcabcdabcdabcabcdabcabcdabc"), 71, 'Test 40');
test(longestPalindrome("Aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 51, 'Test 41');
test(longestPalindrome("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), 1, 'Test 42');
test(longestPalindrome("abacabadabacaba"), 15, 'Test 43');
test(longestPalindrome("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzAAAaaaBBBbbbCCCcccDDDdddEEEeeeFFFfffGGGgggHHHhhhIIIiiiJJJjjjKKKkkkLLLlllMMMmmmNNNnnnOOOoooPPPpppQQQqqqRRRrrrSSSsssTTTtttUUUuuuVVVvvvWWWwwwXXXxxxYYYyyyZZZzzz"), 157, 'Test 44');
test(longestPalindrome("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 1, 'Test 45');
test(longestPalindrome("abacabadabacabadabacabadabacabad"), 32, 'Test 46');
test(longestPalindrome("zyxwvutsrqponmlkjihgfedcbaABCDEFGHIJKLMNOPQRSTUVWXYZ"), 1, 'Test 47');
test(longestPalindrome("bAabA"), 5, 'Test 48');
test(longestPalindrome("rotor"), 5, 'Test 49');
test(longestPalindrome("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyz"), 51, 'Test 50');
test(longestPalindrome("noon"), 4, 'Test 51');
test(longestPalindrome("banana"), 5, 'Test 52');
test(longestPalindrome("abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg"), 56, 'Test 53');
test(longestPalindrome("abbcccdddd"), 9, 'Test 54');
test(longestPalindrome("aabbccddeeeffffffgggg"), 21, 'Test 55');
test(longestPalindrome("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 52, 'Test 56');
test(longestPalindrome("bbaaaacccddeeefffggghhhiiijjjkkklllmmmnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz"), 55, 'Test 57');
test(longestPalindrome("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 71, 'Test 58');
test(longestPalindrome("abbacdfee"), 7, 'Test 59');
test(longestPalindrome("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzz"), 58, 'Test 60');
test(longestPalindrome("AxA"), 3, 'Test 61');
test(longestPalindrome("aaabbbbcccc"), 11, 'Test 62');
test(longestPalindrome("thisisatest"), 7, 'Test 63');
test(longestPalindrome("mississippi"), 11, 'Test 64');
test(longestPalindrome("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 52, 'Test 65');
test(longestPalindrome("zyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyx"), 49, 'Test 66');
test(longestPalindrome("level"), 5, 'Test 67');
test(longestPalindrome("Aaaaaaaa"), 7, 'Test 68');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

