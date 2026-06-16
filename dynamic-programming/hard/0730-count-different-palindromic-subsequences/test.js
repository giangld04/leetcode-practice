// Test: 730. Count Different Palindromic Subsequences
// 88 test cases from LeetCodeDataset
// Run: node test.js

const { countPalindromicSubsequences } = require("./solution");

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

console.log("\n730. Count Different Palindromic Subsequences\n");

test(countPalindromicSubsequences("abba"), 6, 'Test 1');
test(countPalindromicSubsequences("abccba"), 14, 'Test 2');
test(countPalindromicSubsequences("abcba"), 10, 'Test 3');
test(countPalindromicSubsequences("abac"), 5, 'Test 4');
test(countPalindromicSubsequences("a"), 1, 'Test 5');
test(countPalindromicSubsequences("abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba"), 104860361, 'Test 6');
test(countPalindromicSubsequences("aabbaa"), 10, 'Test 7');
test(countPalindromicSubsequences("abcdabcdabcdabcdabcdabcdabcdabcd"), 29348, 'Test 8');
test(countPalindromicSubsequences("abcddcba"), 30, 'Test 9');
test(countPalindromicSubsequences("bccb"), 6, 'Test 10');
test(countPalindromicSubsequences("aaa"), 3, 'Test 11');
test(countPalindromicSubsequences("abcd"), 4, 'Test 12');
test(countPalindromicSubsequences("aabb"), 4, 'Test 13');
test(countPalindromicSubsequences("aaaa"), 4, 'Test 14');
test(countPalindromicSubsequences("abab"), 6, 'Test 15');
test(countPalindromicSubsequences("abacabadabacabadabacaba"), 2571, 'Test 16');
test(countPalindromicSubsequences("ababbabaabbababbab"), 212, 'Test 17');
test(countPalindromicSubsequences("abcdeabcdeabcdeabcdeabcde"), Error: list assignment index out of range, 'Test 18');
test(countPalindromicSubsequences("aabbaabbaabb"), 44, 'Test 19');
test(countPalindromicSubsequences("aaaabbbbccccaaaabbbbccccaaaabbbbcccc"), 996, 'Test 20');
test(countPalindromicSubsequences("abcdabcdabcdabcdabcde"), Error: list assignment index out of range, 'Test 21');
test(countPalindromicSubsequences("ddccbbbaaacccbdd"), 94, 'Test 22');
test(countPalindromicSubsequences("abcabcabcabc"), 84, 'Test 23');
test(countPalindromicSubsequences("aaaaabbbbbccccddddaaaaabbbbbccccddddaaaaabbbbbccccddddaaaaabbbbbccccddddaaaaabbbbbccccddddaaaaabbbbbccccddddaaaaabbbbbccccdddd"), 127372410, 'Test 24');
test(countPalindromicSubsequences("aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeffffffffffgggggggggghhhhhhhhhh"), Error: list assignment index out of range, 'Test 25');
test(countPalindromicSubsequences("abcddcbaabcddcba"), 340, 'Test 26');
test(countPalindromicSubsequences("abcdabcdabcd"), 72, 'Test 27');
test(countPalindromicSubsequences("abababababababababababababababab"), 8358, 'Test 28');
test(countPalindromicSubsequences("aaaabbbbccccddddaaaabbbbccccdddd"), 224, 'Test 29');
test(countPalindromicSubsequences("aabbccddeeefffggghhhhiiiijjjkkklllmmmmmnnnooooppppqqqqrrrsssttttuuuuvvvvwxxxxyyzz"), Error: list assignment index out of range, 'Test 30');
test(countPalindromicSubsequences("abacaba"), 19, 'Test 31');
test(countPalindromicSubsequences("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 450061485, 'Test 32');
test(countPalindromicSubsequences("aaaabbbaaaaabbbbaaaaabbbbaaaaabbbbaaaaabbbbaaaaabbbbaaaa"), 61293, 'Test 33');
test(countPalindromicSubsequences("abcdcba"), 22, 'Test 34');
test(countPalindromicSubsequences("abacabadabacabadaaaabbbbccccddddeeeeffff"), Error: list assignment index out of range, 'Test 35');
test(countPalindromicSubsequences("acbdca"), 14, 'Test 36');
test(countPalindromicSubsequences("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 320164, 'Test 37');
test(countPalindromicSubsequences("ababababababababababababababababababababababababababababababababababababababababababab"), 672623781, 'Test 38');
test(countPalindromicSubsequences("abcdbca"), 20, 'Test 39');
test(countPalindromicSubsequences("abccbaabccbaabccba"), 446, 'Test 40');
test(countPalindromicSubsequences("abcdabcdaabbccbddc"), 184, 'Test 41');
test(countPalindromicSubsequences("aabbccddeedccbbaa"), Error: list assignment index out of range, 'Test 42');
test(countPalindromicSubsequences("ababababababab"), 106, 'Test 43');
test(countPalindromicSubsequences("abababababab"), 64, 'Test 44');
test(countPalindromicSubsequences("abcababcababcababcababcababcababcababcab"), 237716, 'Test 45');
test(countPalindromicSubsequences("abcdabcdaabbccbddcddcbaabccbddcddcba"), 17166, 'Test 46');
test(countPalindromicSubsequences("abcabcabcabcabcabc"), 504, 'Test 47');
test(countPalindromicSubsequences("aababaababaababaababaababaababaababaababaababaababa"), 442187, 'Test 48');
test(countPalindromicSubsequences("abbbccaddccbbbaabbbccaddccbbba"), 4260, 'Test 49');
test(countPalindromicSubsequences("abcdabcdabcdabcd"), 244, 'Test 50');
test(countPalindromicSubsequences("abcdabcdabcdabcdabcd"), 812, 'Test 51');
test(countPalindromicSubsequences("ddccbbbaaacccbbbaaacccbdd"), 607, 'Test 52');
test(countPalindromicSubsequences("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 38097140, 'Test 53');
test(countPalindromicSubsequences("dddddddddddddddddddddddd"), 24, 'Test 54');
test(countPalindromicSubsequences("abababababababababab"), 462, 'Test 55');
test(countPalindromicSubsequences("abcdabcdabcdabcdabcdabcdabcdabcdabcde"), Error: list assignment index out of range, 'Test 56');
test(countPalindromicSubsequences("aaaaa"), 5, 'Test 57');
test(countPalindromicSubsequences("abacabadabacaba"), 232, 'Test 58');
test(countPalindromicSubsequences("dcbadcbadcbadcbadcbadcb"), 2219, 'Test 59');
test(countPalindromicSubsequences("aabababababababa"), 161, 'Test 60');
test(countPalindromicSubsequences("abcdabcd"), 20, 'Test 61');
test(countPalindromicSubsequences("aaaaabbbbbcccc"), 14, 'Test 62');
test(countPalindromicSubsequences("abccccddddddbbbaaaadddbbbbccccaaaabbbccbbccbbccbbccbbccbbccbbbbaaaaddbbbbccccaaaaadddbbbbccccaaaabbbccbbccbbccbbccbbccbbccbbbbaaaadd"), 584072730, 'Test 63');
test(countPalindromicSubsequences("dcbaabcd"), 30, 'Test 64');
test(countPalindromicSubsequences("abracadabraabracadabra"), Error: list assignment index out of range, 'Test 65');
test(countPalindromicSubsequences("abcabcdabcabcdabcabcdabcabcdabcabcdabcabcdabcabcdabcabcdabcabcdabcabcdabcabcd"), 852725823, 'Test 66');
test(countPalindromicSubsequences("abcdabcdbabcdbabcdb"), 607, 'Test 67');
test(countPalindromicSubsequences("aabbccddeeffaabbccddeeff"), Error: list assignment index out of range, 'Test 68');
test(countPalindromicSubsequences("aaaabbbbccccdddd"), 16, 'Test 69');
test(countPalindromicSubsequences("abacabadabacabadabacabad"), 2784, 'Test 70');
test(countPalindromicSubsequences("abbaabbaabba"), 54, 'Test 71');
test(countPalindromicSubsequences("abcdabcdabcdabcdabcdabcdabcdabcdabcd"), 96936, 'Test 72');
test(countPalindromicSubsequences("aabbccddccbbaa"), 106, 'Test 73');
test(countPalindromicSubsequences("abccbaabcba"), 56, 'Test 74');
test(countPalindromicSubsequences("abababababababababababab"), 1216, 'Test 75');
test(countPalindromicSubsequences("ababababab"), 38, 'Test 76');
test(countPalindromicSubsequences("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcda"), 198263755, 'Test 77');
test(countPalindromicSubsequences("abcabc"), 12, 'Test 78');
test(countPalindromicSubsequences("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 125826312, 'Test 79');
test(countPalindromicSubsequences("abcdcbadcbadcbabcd"), 432, 'Test 80');
test(countPalindromicSubsequences("abcabcabcabcabcabcabcabc"), 2952, 'Test 81');
test(countPalindromicSubsequences("dcbbabdccacbaaadbcbbabcbbb"), 934, 'Test 82');
test(countPalindromicSubsequences("ababa"), 9, 'Test 83');
test(countPalindromicSubsequences("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 320443980, 'Test 84');
test(countPalindromicSubsequences("ddddcbbaabcdccbdddbddbcccbdbabdbbaccabdbdddcbbaabaddabbdcbbaabcddbacccbadcbbaabcdccbdddbddbcccbdbabdbbaccabdbddd"), 923039370, 'Test 85');
test(countPalindromicSubsequences("abcadcbadcbadcb"), 210, 'Test 86');
test(countPalindromicSubsequences("abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcbaabcd"), 649659461, 'Test 87');
test(countPalindromicSubsequences("abcdcbaabcdcbaabcdcba"), 1694, 'Test 88');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

