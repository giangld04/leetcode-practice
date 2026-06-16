// Test: 115. Distinct Subsequences
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { numDistinct } = require("./solution");

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

console.log("\n115. Distinct Subsequences\n");

test(numDistinct("abc", "abcd"), 0, 'Test 1');
test(numDistinct("abcd", "abcd"), 1, 'Test 2');
test(numDistinct("rabbbit", "rabbit"), 3, 'Test 3');
test(numDistinct("aaa", "a"), 3, 'Test 4');
test(numDistinct("", "abc"), 0, 'Test 5');
test(numDistinct("mississippi", "isip"), 16, 'Test 6');
test(numDistinct("aaaaa", "aa"), 10, 'Test 7');
test(numDistinct("abcde", "ae"), 1, 'Test 8');
test(numDistinct("abcde", ""), 1, 'Test 9');
test(numDistinct("abcd", "ab"), 1, 'Test 10');
test(numDistinct("a", "a"), 1, 'Test 11');
test(numDistinct("abcdabcabc", "abc"), 10, 'Test 12');
test(numDistinct("babgbag", "bag"), 5, 'Test 13');
test(numDistinct("abc", "abc"), 1, 'Test 14');
test(numDistinct("pppp", "p"), 4, 'Test 15');
test(numDistinct("abab", "aba"), 1, 'Test 16');
test(numDistinct("", ""), 1, 'Test 17');
test(numDistinct("leetcodeisgood", "code"), 1, 'Test 18');
test(numDistinct("abcdefghijklmnopqrstuvwxyz", "acegikmoqsuwy"), 1, 'Test 19');
test(numDistinct("zzzzzzzzzzzzzzzzzzzz", "zzz"), 1140, 'Test 20');
test(numDistinct("dynamicprogramming", "dpm"), 2, 'Test 21');
test(numDistinct("ababababab", "abab"), 35, 'Test 22');
test(numDistinct("abcdabcdabcd", "abcd"), 15, 'Test 23');
test(numDistinct("abcdabcdabcdabcd", "abcd"), 35, 'Test 24');
test(numDistinct("zzzzzzzzzz", "zzzz"), 210, 'Test 25');
test(numDistinct("aaaabbbbccccdddd", "abcd"), 256, 'Test 26');
test(numDistinct("abracadabra", "abrac"), 1, 'Test 27');
test(numDistinct("abcdefgabcdefgabcdefgabcdefgabcdefg", "abcdefg"), 330, 'Test 28');
test(numDistinct("abcabcabcabcabcabcabcabc", "abcabc"), 924, 'Test 29');
test(numDistinct("ababcabcabc", "abc"), 19, 'Test 30');
test(numDistinct("abcdefghikjlmnopqrstuvwxyz", "xyz"), 1, 'Test 31');
test(numDistinct("abcabcabcabc", "abc"), 20, 'Test 32');
test(numDistinct("abcbabc", "abc"), 5, 'Test 33');
test(numDistinct("xyzxyzxyz", "xyzyx"), 1, 'Test 34');
test(numDistinct("aabbbccc", "abc"), 18, 'Test 35');
test(numDistinct("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzz"), 64512240, 'Test 36');
test(numDistinct("xyzxyzxyzxyz", "xyz"), 20, 'Test 37');
test(numDistinct("aabbccddeeffgg", "aabbcc"), 1, 'Test 38');
test(numDistinct("abcdeabcdeabcde", "abc"), 10, 'Test 39');
test(numDistinct("xyzzxyzzxyzzxyzz", "xyz"), 40, 'Test 40');
test(numDistinct("xxyxyxyxyxyxyxyx", "xyx"), 112, 'Test 41');
test(numDistinct("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abc"), 8, 'Test 42');
test(numDistinct("xyxxyxyxyx", "xyx"), 27, 'Test 43');
test(numDistinct("mississippi", "issi"), 15, 'Test 44');
test(numDistinct("pneumonoultramicroscopicsilicovolcanoconiosis", "pneumo"), 23, 'Test 45');
test(numDistinct("pppppppppppp", "pppp"), 495, 'Test 46');
test(numDistinct("aaaaabaaaaabaabaaabaababab", "aab"), 686, 'Test 47');
test(numDistinct("abcdefg", "xyz"), 0, 'Test 48');
test(numDistinct("rabbbitrabbbitrabbbit", "rabbit"), 126, 'Test 49');
test(numDistinct("leetcodeleetcode", "leet"), 12, 'Test 50');
test(numDistinct("xyzxyzxyzxyz", "xyzxyz"), 28, 'Test 51');
test(numDistinct("abcdefghijk", "acegi"), 1, 'Test 52');
test(numDistinct("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijklmnopqrstuvwxyz"), 67108864, 'Test 53');
test(numDistinct("aabbccddeeffgg", "abcde"), 32, 'Test 54');
test(numDistinct("longerstringexample", "long"), 3, 'Test 55');
test(numDistinct("abracadabra", "abra"), 9, 'Test 56');
test(numDistinct("xxyyzzxxxyyzz", "xyxz"), 24, 'Test 57');
test(numDistinct("pppppppp", "pp"), 28, 'Test 58');
test(numDistinct("attatchmentattach", "attach"), 32, 'Test 59');
test(numDistinct("abcdefghijabcdefghij", "abcde"), 6, 'Test 60');
test(numDistinct("abcdabcdeabcdeabcd", "abcd"), 35, 'Test 61');
test(numDistinct("abcdefghij", "abcdefghijk"), 0, 'Test 62');
test(numDistinct("zzzzzzzzzz", "zz"), 45, 'Test 63');
test(numDistinct("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzz"), 14782231840815648, 'Test 64');
test(numDistinct("ppppppppp", "ppp"), 84, 'Test 65');
test(numDistinct("abcdefghij", "j"), 1, 'Test 66');
test(numDistinct("abcdabcdabcdabcdabcd", "abcd"), 70, 'Test 67');
test(numDistinct("repeatedsequence", "seq"), 1, 'Test 68');
test(numDistinct("aaaaaaaaaaaaaab", "aaab"), 364, 'Test 69');
test(numDistinct("aabbaabbaabbaabbaabb", "aabb"), 415, 'Test 70');
test(numDistinct("mixedcharacters", "mix"), 1, 'Test 71');
test(numDistinct("abababababab", "ababab"), 84, 'Test 72');
test(numDistinct("abcabcabcabc", "abcabc"), 28, 'Test 73');
test(numDistinct("aaaaaaabbaaaaa", "aaaaaab"), 14, 'Test 74');
test(numDistinct("abcabcabc", "abc"), 10, 'Test 75');
test(numDistinct("abcdabcdabcd", "abca"), 5, 'Test 76');
test(numDistinct("babgbagbabgbagbabgbag", "bagbag"), 329, 'Test 77');
test(numDistinct("anappleperap", "ape"), 10, 'Test 78');
test(numDistinct("zzzzzzzzzz", "zzz"), 120, 'Test 79');
test(numDistinct("aaaaaaaaaa", "aaaaa"), 252, 'Test 80');
test(numDistinct("abcdefghij", "af"), 1, 'Test 81');
test(numDistinct("abcabcabcabcabcabcabcabcabcabc", "abcabc"), 3003, 'Test 82');
test(numDistinct("complexpattern", "comp"), 2, 'Test 83');
test(numDistinct("abcdefghij", "a"), 1, 'Test 84');
test(numDistinct("aabbaabbaabbaabbaabb", "aab"), 190, 'Test 85');
test(numDistinct("abracadabraabracadabra", "abra"), 103, 'Test 86');
test(numDistinct("leetcodeleetcodeleetcode", "leet"), 51, 'Test 87');
test(numDistinct("aabbccddeeffgghhiijjkkllmnoonnpooqqrrssttuuvvwwxxyyzz", "abcxyz"), 64, 'Test 88');
test(numDistinct("abcdefabcdefabcdef", "abcdef"), 28, 'Test 89');
test(numDistinct("abcdefghij", "acegi"), 1, 'Test 90');
test(numDistinct("pppppppppp", "pp"), 45, 'Test 91');
test(numDistinct("hellohellohello", "hellohello"), 17, 'Test 92');
test(numDistinct("abcdefghij", "aceg"), 1, 'Test 93');
test(numDistinct("aabbccddeeffgg", "abcdefg"), 128, 'Test 94');
test(numDistinct("hellohellohello", "he"), 6, 'Test 95');
test(numDistinct("thisisaverylongstringthisisaverylongstring", "thisisaverylongstring"), 73, 'Test 96');
test(numDistinct("subsequenceexample", "subseq"), 1, 'Test 97');
test(numDistinct("abracadabra", "aca"), 6, 'Test 98');
test(numDistinct("abcdeabcde", "abc"), 4, 'Test 99');
test(numDistinct("aaaaabaaaabaaaab", "aaab"), 380, 'Test 100');
test(numDistinct("abcdefghijabcdefghijabcdefghij", "abcde"), 21, 'Test 101');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

