// Test: 1371. Find The Longest Substring Containing Vowels In Even Counts
// 77 test cases from LeetCodeDataset
// Run: node test.js

const { findTheLongestSubstring } = require("./solution");

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

console.log("\n1371. Find The Longest Substring Containing Vowels In Even Counts\n");

test(findTheLongestSubstring("bcbcbc"), 6, 'Test 1');
test(findTheLongestSubstring("cbacdcdcdbacdbad"), 14, 'Test 2');
test(findTheLongestSubstring("aeiouaeiouaeiouaeiou"), 20, 'Test 3');
test(findTheLongestSubstring("aaaaaeeeeeiioooouuuu"), 14, 'Test 4');
test(findTheLongestSubstring("abcdefghijklmnopqrstuvwxyz"), 5, 'Test 5');
test(findTheLongestSubstring("uuuuuuuuuuuuuuuuuuuuuuuuuuu"), 26, 'Test 6');
test(findTheLongestSubstring("aaeeiioouu"), 10, 'Test 7');
test(findTheLongestSubstring("aeiou"), 0, 'Test 8');
test(findTheLongestSubstring("aaaaa"), 4, 'Test 9');
test(findTheLongestSubstring("a"), 0, 'Test 10');
test(findTheLongestSubstring("leetcodeisgreat"), 5, 'Test 11');
test(findTheLongestSubstring("abacabadabacaba"), 15, 'Test 12');
test(findTheLongestSubstring("aeiaaioaaaaeiiiiouuuooaaaaea"), 18, 'Test 13');
test(findTheLongestSubstring(""), 0, 'Test 14');
test(findTheLongestSubstring("aeeeeeiiiiioooouuuu"), 12, 'Test 15');
test(findTheLongestSubstring("xyz"), 3, 'Test 16');
test(findTheLongestSubstring("abcdefghiijkeilmnopqrstuvwxyzaeiou"), 12, 'Test 17');
test(findTheLongestSubstring("aabbeeaabbeeaabb"), 16, 'Test 18');
test(findTheLongestSubstring("eiouaeiouaeiou"), 10, 'Test 19');
test(findTheLongestSubstring("eleetminicoworoep"), 13, 'Test 20');
test(findTheLongestSubstring("bbaeixaaaaooxu"), 8, 'Test 21');
test(findTheLongestSubstring("aioieu"), 0, 'Test 22');
test(findTheLongestSubstring("bcdfghjklmnpqrstvwxyz"), 21, 'Test 23');
test(findTheLongestSubstring("aeiaaioaaaaeiiiiiioooeeeauuaeuia"), 28, 'Test 24');
test(findTheLongestSubstring("aabbccddeeff"), 12, 'Test 25');
test(findTheLongestSubstring("leetcodeleetcode"), 16, 'Test 26');
test(findTheLongestSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 52, 'Test 27');
test(findTheLongestSubstring("zxcvbnmlkjhgfdsapoiuytrewq"), 15, 'Test 28');
test(findTheLongestSubstring("aaaaaaaa"), 8, 'Test 29');
test(findTheLongestSubstring("aeiouaeiouaeiouaeiouaeiouxyzuvwaeiouaeiouaeiou"), 45, 'Test 30');
test(findTheLongestSubstring("eeioouuuaeeioouuua"), 18, 'Test 31');
test(findTheLongestSubstring("aeiouaeiouaeiou"), 10, 'Test 32');
test(findTheLongestSubstring("abacaxebecixodeoxou"), 9, 'Test 33');
test(findTheLongestSubstring("thisisaverylongstringwithvariousvowels"), 13, 'Test 34');
test(findTheLongestSubstring("eiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou"), 40, 'Test 35');
test(findTheLongestSubstring("uoieaouioeaoieauoi"), 12, 'Test 36');
test(findTheLongestSubstring("mamad"), 5, 'Test 37');
test(findTheLongestSubstring("leetcodeleetcodeleetcode"), 21, 'Test 38');
test(findTheLongestSubstring("bbaaccddeeffgg"), 14, 'Test 39');
test(findTheLongestSubstring("eiouaeiouaieouaeiouaeiouaeiou"), 20, 'Test 40');
test(findTheLongestSubstring("xyzuvwaeiouaeiouxyzuvwaeiouaeiouxyzuvwaeiouaeiou"), 47, 'Test 41');
test(findTheLongestSubstring("abcdeabcdeabcde"), 13, 'Test 42');
test(findTheLongestSubstring("aeiouaeiouaeiouaeiouaeiouaeiouabcdeffedcbaaeiouaeiou"), 52, 'Test 43');
test(findTheLongestSubstring("xyzabcdeiouaeiouabcdeiouaeiouxyz"), 32, 'Test 44');
test(findTheLongestSubstring("bbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 50, 'Test 45');
test(findTheLongestSubstring("bcbcbcbaeibcbcbcbaeibcbcbc"), 26, 'Test 46');
test(findTheLongestSubstring("aeeeeiiiooouuuuuuuuu"), 10, 'Test 47');
test(findTheLongestSubstring("bcbcbcabcabcabcabcabcabc"), 24, 'Test 48');
test(findTheLongestSubstring("abacaxebecixodeoxouabacaxebecixodeoxou"), 38, 'Test 49');
test(findTheLongestSubstring("zzzaeizzzaeiouzzzaeiouzzz"), 19, 'Test 50');
test(findTheLongestSubstring("aeiouabcdefghijklmnopqrstuvwxyzaeiou"), 31, 'Test 51');
test(findTheLongestSubstring("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"), 52, 'Test 52');
test(findTheLongestSubstring("uvceeaieeaaceeaiaa"), 17, 'Test 53');
test(findTheLongestSubstring("aebecixodeoxouaebecixodeoxou"), 28, 'Test 54');
test(findTheLongestSubstring("vvvvvvvvvvvvvvvvvv"), 18, 'Test 55');
test(findTheLongestSubstring("aebecidofugoeiaoeiu"), 4, 'Test 56');
test(findTheLongestSubstring("aeiouaeiouabcdeffedcbaaeiouaeiou"), 32, 'Test 57');
test(findTheLongestSubstring("abcdefghijklmnopqrstuvwxyzaeiouaeiouaeiou"), 41, 'Test 58');
test(findTheLongestSubstring("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 52, 'Test 59');
test(findTheLongestSubstring("leetcodeisgreataeiou"), 17, 'Test 60');
test(findTheLongestSubstring("aeiouaeiouaeiouxyzuvw"), 17, 'Test 61');
test(findTheLongestSubstring("abcdeffedcbabcdeffedcbabcdeffedcbabcdeffedcb"), 44, 'Test 62');
test(findTheLongestSubstring("xyzuvwaeiouxyzuvwaeiou"), 22, 'Test 63');
test(findTheLongestSubstring("qwertyuiopasdfghjklzxcvbnmaeiouaeiou"), 31, 'Test 64');
test(findTheLongestSubstring("vwxyz"), 5, 'Test 65');
test(findTheLongestSubstring("aabbccddeeffgg"), 14, 'Test 66');
test(findTheLongestSubstring("eleetminicoworoepzzzzzzzzzz"), 13, 'Test 67');
test(findTheLongestSubstring("abecidofug"), 1, 'Test 68');
test(findTheLongestSubstring("eiouaieouaieoua"), 10, 'Test 69');
test(findTheLongestSubstring("aeiaoeiuioeiuaeiaoeiuioeiuaeiaoeiuioeiaoeiu"), 26, 'Test 70');
test(findTheLongestSubstring("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou"), 50, 'Test 71');
test(findTheLongestSubstring("eiouaeiouaeiouaeiouaeiouaeiou"), 20, 'Test 72');
test(findTheLongestSubstring("eleetminicoworoepaeiou"), 13, 'Test 73');
test(findTheLongestSubstring("eeioouuuaeeioouuuaeeioouuuaeeioouuua"), 36, 'Test 74');
test(findTheLongestSubstring("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 50, 'Test 75');
test(findTheLongestSubstring("aabbccddeeffaabbccddeeff"), 24, 'Test 76');
test(findTheLongestSubstring("leetcodeisgreatleetcodeisgreatleetcodeisgreat"), 35, 'Test 77');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

