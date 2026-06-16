// Test: 76. Minimum Window Substring
// 80 test cases from LeetCodeDataset
// Run: node test.js

const { minWindow } = require("./solution");

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

console.log("\n76. Minimum Window Substring\n");

test(minWindow("acbbaca", "aba"), baca, 'Test 1');
test(minWindow("aabbcc", "abc"), abbc, 'Test 2');
test(minWindow("aaaaaaa", "aa"), aa, 'Test 3');
test(minWindow("a", "aa"), , 'Test 4');
test(minWindow("abcd", "bd"), bcd, 'Test 5');
test(minWindow("ab", "b"), b, 'Test 6');
test(minWindow("aa", "aa"), aa, 'Test 7');
test(minWindow("ADOBECODEBANC", "ABC"), BANC, 'Test 8');
test(minWindow("fgrheahtfeqcrha", "harf"), fgrhea, 'Test 9');
test(minWindow("aaaaaaaaaaaabbbbbcdd", "abcdd"), abbbbbcdd, 'Test 10');
test(minWindow("abcde", "f"), , 'Test 11');
test(minWindow("ab", "a"), a, 'Test 12');
test(minWindow("abababab", "abab"), abab, 'Test 13');
test(minWindow("a", "a"), a, 'Test 14');
test(minWindow("aafffrbb", "ffab"), afffrb, 'Test 15');
test(minWindow("bba", "ab"), ba, 'Test 16');
test(minWindow("cbbbaaaaabbbcccccbbaa", "aaabbbccc"), aaabbbccc, 'Test 17');
test(minWindow("abcabcabc", "abc"), abc, 'Test 18');
test(minWindow("cabwefgewcwaefgcf", "cae"), cwae, 'Test 19');
test(minWindow("abcabcabc", "aaa"), abcabca, 'Test 20');
test(minWindow("abc", "abc"), abc, 'Test 21');
test(minWindow("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa"), aaaaaaaaaaaaaaaaaaaaaaaaa, 'Test 22');
test(minWindow("zjwsxeyrhtlnejzjwsxeyrhtlnej", "nejxyz"), nejzjwsxey, 'Test 23');
test(minWindow("abcdefghijk", "jihgfedcba"), abcdefghij, 'Test 24');
test(minWindow("abacabadabacaba", "abc"), bac, 'Test 25');
test(minWindow("abcabcabcabcabcabcabcabcabcabc", "cba"), abc, 'Test 26');
test(minWindow("aabbccddeeffgghhii", "abcdefghi"), abbccddeeffgghhi, 'Test 27');
test(minWindow("aaaaaaaaaabbbbbbcccccc", "abc"), abbbbbbc, 'Test 28');
test(minWindow("mississippi", "issip"), issip, 'Test 29');
test(minWindow("zzzzzzzzzzzzzzzzz", "zzz"), zzz, 'Test 30');
test(minWindow("xyxzyxzyxzyxzyx", "xzy"), yxz, 'Test 31');
test(minWindow("abcdefg", "zyxwvutsrqponmlkjihgfedcba"), , 'Test 32');
test(minWindow("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zyxwvutsrqponmlkjihgfedcba"), abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyz, 'Test 33');
test(minWindow("xyzxzyzxzyzzyzyxzyzyxzyzyx", "xyzzyxzyzyzx"), xyzxzyzxzyzzy, 'Test 34');
test(minWindow("aaabbbaaabbbccc", "aabbcc"), aabbbcc, 'Test 35');
test(minWindow("zzzzzzzzzzz", "z"), z, 'Test 36');
test(minWindow("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdef"), abbccddeef, 'Test 37');
test(minWindow("aabbccddeeffgghhii", "aabbccddeeffgghhii"), aabbccddeeffgghhii, 'Test 38');
test(minWindow("abcabcabcabcabcabcabcabcabcabcabcabc", "aabbcc"), abcabc, 'Test 39');
test(minWindow("bbaabbbbbaabbbbaaabbbbaaabbababababab", "bbbbaaaa"), aabbbbaa, 'Test 40');
test(minWindow("mississippi", "issi"), issi, 'Test 41');
test(minWindow("aaabbcccccccdddeee", "abcde"), abbcccccccddde, 'Test 42');
test(minWindow("zxcvbnmasdfghjklqwertyuiop", "opq"), qwertyuiop, 'Test 43');
test(minWindow("aaaaaaaaaaaabbbbbbcccccccc", "abc"), abbbbbbc, 'Test 44');
test(minWindow("abcabcabcabcabcabc", "cba"), abc, 'Test 45');
test(minWindow("xyzzxyzzxyzz", "xyz"), xyz, 'Test 46');
test(minWindow("aaaaaaaaaaaabbbbbbbbbbbcccccccccc", "abc"), abbbbbbbbbbbc, 'Test 47');
test(minWindow("xyzzzyxzyxzyxzyxzy", "zyxzyxz"), xyzzzyx, 'Test 48');
test(minWindow("ababababababab", "abba"), abab, 'Test 49');
test(minWindow("abcdabcdeabcdf", "abcfed"), eabcdf, 'Test 50');
test(minWindow("abababababababababab", "aabbcc"), , 'Test 51');
test(minWindow("abcdefg", "xyz"), , 'Test 52');
test(minWindow("aabbccddeeffgghhii", "aabbcc"), aabbcc, 'Test 53');
test(minWindow("ababcabcabcabcabcabcabcabcabcabcabcabc", "abcabcabc"), abcabcabc, 'Test 54');
test(minWindow("hellohellohello", "lle"), ell, 'Test 55');
test(minWindow("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), abcdefghijklmnopqrstuvwxyz, 'Test 56');
test(minWindow("sadjhasjhdjahsjdhasjhadsjhsahjdahjdsjahjdhasjdhajsdhasjdhajsdjasdhasjdhsa", "hasjdh"), hasjhd, 'Test 57');
test(minWindow("bancbbancbbanc", "abc"), banc, 'Test 58');
test(minWindow("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzz", "abcdefghijklmnopqrstuvwxyz"), abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyz, 'Test 59');
test(minWindow("thisisaverylongstringthatweneedtolookinto", "tin"), int, 'Test 60');
test(minWindow("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzz"), zzzzzzzz, 'Test 61');
test(minWindow("bbaaaaaaabbbbcccc", "aabbbccc"), aabbbbccc, 'Test 62');
test(minWindow("abababababababab", "abab"), abab, 'Test 63');
test(minWindow("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), , 'Test 64');
test(minWindow("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "mnopqrstuvwxyz"), mnnooppqqrrssttuuvvwwxxyyz, 'Test 65');
test(minWindow("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm", "qwertyuiopzxcvbnm"), zxcvbnmqwertyuiop, 'Test 66');
test(minWindow("xyzzyxzyzyxzyzxzyzxzyxzyzyxzyx", "xyz"), xyz, 'Test 67');
test(minWindow("abcbacbacbacbacbacbacbacbacbacbacbacbacbacbac", "acbcba"), abcbac, 'Test 68');
test(minWindow("abccbaacz", "abc"), abc, 'Test 69');
test(minWindow("abracadabra", "rac"), rac, 'Test 70');
test(minWindow("aaaaaaaaaabbbbbbbbbbcccccccccc", "abc"), abbbbbbbbbbc, 'Test 71');
test(minWindow("bbaaacccaaaabbbccc", "aabbbccc"), aabbbccc, 'Test 72');
test(minWindow("bancancode", "abc"), banc, 'Test 73');
test(minWindow("abcdefgabcdefg", "abcd"), abcd, 'Test 74');
test(minWindow("qwertyuiopasdfghjklzxcvbnm", "qwertyuiop"), qwertyuiop, 'Test 75');
test(minWindow("aaaaaaaaaa", "aaa"), aaa, 'Test 76');
test(minWindow("ababababababababababababababababababab", "aba"), aba, 'Test 77');
test(minWindow("aaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccc", "abc"), abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc, 'Test 78');
test(minWindow("abcdeffeghijk", "efg"), feg, 'Test 79');
test(minWindow("abcabcabcabcabc", "cba"), abc, 'Test 80');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

