// Test: 2014. Longest Subsequence Repeated K Times
// 92 test cases from LeetCodeDataset
// Run: node test.js

const { longestSubsequenceRepeatedK } = require("./solution");

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

console.log("\n2014. Longest Subsequence Repeated K Times\n");

test(longestSubsequenceRepeatedK("aabbcc", 3), , 'Test 1');
test(longestSubsequenceRepeatedK("zzzzzzzzz", 4), zz, 'Test 2');
test(longestSubsequenceRepeatedK("zzzzzzzzzz", 5), zz, 'Test 3');
test(longestSubsequenceRepeatedK("abcabcabcabc", 4), abc, 'Test 4');
test(longestSubsequenceRepeatedK("abcdabcabc", 3), abc, 'Test 5');
test(longestSubsequenceRepeatedK("abababababab", 3), abab, 'Test 6');
test(longestSubsequenceRepeatedK("aabbbccccc", 3), c, 'Test 7');
test(longestSubsequenceRepeatedK("letsleetcode", 2), let, 'Test 8');
test(longestSubsequenceRepeatedK("ab", 2), , 'Test 9');
test(longestSubsequenceRepeatedK("zzzzzzzzzzzzzz", 5), zz, 'Test 10');
test(longestSubsequenceRepeatedK("aaaabbbbcccc", 2), cc, 'Test 11');
test(longestSubsequenceRepeatedK("aaaabbbb", 2), bb, 'Test 12');
test(longestSubsequenceRepeatedK("aabbccddeeff", 2), f, 'Test 13');
test(longestSubsequenceRepeatedK("abcabcabc", 3), abc, 'Test 14');
test(longestSubsequenceRepeatedK("abcdabcdabcd", 3), abcd, 'Test 15');
test(longestSubsequenceRepeatedK("bb", 2), b, 'Test 16');
test(longestSubsequenceRepeatedK("abcdeabcdeabcde", 3), abcde, 'Test 17');
test(longestSubsequenceRepeatedK("abcdefghi", 1), abcdefghi, 'Test 18');
test(longestSubsequenceRepeatedK("aabbcc", 2), c, 'Test 19');
test(longestSubsequenceRepeatedK("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", 16), qq, 'Test 20');
test(longestSubsequenceRepeatedK("mnopmnopmnop", 6), , 'Test 21');
test(longestSubsequenceRepeatedK("abcabcabcabc", 3), cab, 'Test 22');
test(longestSubsequenceRepeatedK("abcdefabcdefabcdefabcdef", 4), abcdef, 'Test 23');
test(longestSubsequenceRepeatedK("aabbaaccdd", 3), a, 'Test 24');
test(longestSubsequenceRepeatedK("abcdefgabcdefgabcdefg", 3), abcdefg, 'Test 25');
test(longestSubsequenceRepeatedK("kkkkkkkkkkkkkkkk", 16), k, 'Test 26');
test(longestSubsequenceRepeatedK("aaaabbbbccccddddeeeeffffgggghhhhiiii", 3), i, 'Test 27');
test(longestSubsequenceRepeatedK("abcdefghijklaaaaaaabbbbbbbbbccccccccc", 5), cc, 'Test 28');
test(longestSubsequenceRepeatedK("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy", 8), yxyx, 'Test 29');
test(longestSubsequenceRepeatedK("abababababababababababababab", 7), abab, 'Test 30');
test(longestSubsequenceRepeatedK("zzzzzzzzzzzzzzzzzzzz", 5), zzzz, 'Test 31');
test(longestSubsequenceRepeatedK("aabaaaabbbaaa", 4), aa, 'Test 32');
test(longestSubsequenceRepeatedK("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 1), Execution timed out, 'Test 33');
test(longestSubsequenceRepeatedK("xyzxyzxyzxyzxyzxyz", 2), xyzxyzxyz, 'Test 34');
test(longestSubsequenceRepeatedK("aaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbcccccccccccccc", 5), aaa, 'Test 35');
test(longestSubsequenceRepeatedK("ababababababababababababababababab", 10), ba, 'Test 36');
test(longestSubsequenceRepeatedK("abacabadabacabadabacabadabacabadabacabadabacabad", 4), abaabaaba, 'Test 37');
test(longestSubsequenceRepeatedK("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm", 2), Execution timed out, 'Test 38');
test(longestSubsequenceRepeatedK("abcabcabcabcabcabcabcabcabcabcabcabc", 5), cabcab, 'Test 39');
test(longestSubsequenceRepeatedK("mississippi", 2), ssi, 'Test 40');
test(longestSubsequenceRepeatedK("ppppqqrrrrrssstttt", 3), t, 'Test 41');
test(longestSubsequenceRepeatedK("abcabcabcabcabcabcabc", 3), cabcab, 'Test 42');
test(longestSubsequenceRepeatedK("zzzzzzzzzzzzzzzzzz", 10), z, 'Test 43');
test(longestSubsequenceRepeatedK("abcabcabcabcabcabc", 3), abcabc, 'Test 44');
test(longestSubsequenceRepeatedK("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 2), Execution timed out, 'Test 45');
test(longestSubsequenceRepeatedK("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 20), zzz, 'Test 46');
test(longestSubsequenceRepeatedK("abababababababab", 8), ab, 'Test 47');
test(longestSubsequenceRepeatedK("mnopqrqponmlkjihgfedcba", 2), q, 'Test 48');
test(longestSubsequenceRepeatedK("abcabcabcabcabcabcabcabcabcabc", 5), abcabc, 'Test 49');
test(longestSubsequenceRepeatedK("qqwweerrttyyuuiiooppllaaasssdddfffggghhjjkk", 3), s, 'Test 50');
test(longestSubsequenceRepeatedK("aabbccddeeefffggg", 2), g, 'Test 51');
test(longestSubsequenceRepeatedK("aaabbbcccddd", 3), d, 'Test 52');
test(longestSubsequenceRepeatedK("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 5), dabcdabc, 'Test 53');
test(longestSubsequenceRepeatedK("abcabcabcabcabcabcabcabcabcabc", 10), abc, 'Test 54');
test(longestSubsequenceRepeatedK("abcabcabcabcabcabcabcabcabcabca", 5), bcabca, 'Test 55');
test(longestSubsequenceRepeatedK("zzzzzzzzzzzz", 5), zz, 'Test 56');
test(longestSubsequenceRepeatedK("aaaabbbbccccdddddd", 4), d, 'Test 57');
test(longestSubsequenceRepeatedK("xzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzy", 4), zyxzyx, 'Test 58');
test(longestSubsequenceRepeatedK("aabbccddeeffgg", 2), g, 'Test 59');
test(longestSubsequenceRepeatedK("zzzzzzzzzzzzzzzzzzzz", 20), z, 'Test 60');
test(longestSubsequenceRepeatedK("ababababababab", 4), ba, 'Test 61');
test(longestSubsequenceRepeatedK("ababababababababab", 5), ba, 'Test 62');
test(longestSubsequenceRepeatedK("mnopqrsmnopqrsmnopqrsmnopqrsmnopqrs", 3), smnopqr, 'Test 63');
test(longestSubsequenceRepeatedK("abcdefghijabcdefghijabcdefghijabcdefghij", 4), abcdefghij, 'Test 64');
test(longestSubsequenceRepeatedK("aaaaaaaaaa", 2), aaaaa, 'Test 65');
test(longestSubsequenceRepeatedK("qwertyqwertyqwerty", 3), qwerty, 'Test 66');
test(longestSubsequenceRepeatedK("xyzzzzzzzzzzzxyzzzzzzzzzzzzxyzzzzzzzzzzzz", 3), xyzzzzzzzzzzz, 'Test 67');
test(longestSubsequenceRepeatedK("ababababababababababababababababab", 16), ba, 'Test 68');
test(longestSubsequenceRepeatedK("aabbccddeeefff", 2), f, 'Test 69');
test(longestSubsequenceRepeatedK("abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef", 6), fabcde, 'Test 70');
test(longestSubsequenceRepeatedK("abcdefgabcdefgabcdefg", 2), gabcdef, 'Test 71');
test(longestSubsequenceRepeatedK("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10), zzzz, 'Test 72');
test(longestSubsequenceRepeatedK("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 25), z, 'Test 73');
test(longestSubsequenceRepeatedK("aaabbbcccdddeeefffggghhhiii", 4), , 'Test 74');
test(longestSubsequenceRepeatedK("abcdabcdbacdb", 2), cdab, 'Test 75');
test(longestSubsequenceRepeatedK("xyxyxyxyxyxy", 4), yx, 'Test 76');
test(longestSubsequenceRepeatedK("abcabcabcabcabcabcabcabc", 4), abcabc, 'Test 77');
test(longestSubsequenceRepeatedK("aabaaabaaabaaabaaab", 5), aab, 'Test 78');
test(longestSubsequenceRepeatedK("abcdefghijklaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbcccccccccccccc", 6), bbb, 'Test 79');
test(longestSubsequenceRepeatedK("abcabcabcabcabc", 5), abc, 'Test 80');
test(longestSubsequenceRepeatedK("mmmmmmnnnnnnnnnnoooooo", 5), nn, 'Test 81');
test(longestSubsequenceRepeatedK("mmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxxyyyyyzzzzz", 5), z, 'Test 82');
test(longestSubsequenceRepeatedK("abcdabcdabcdabcdabcdabcdabcdabcd", 8), abcd, 'Test 83');
test(longestSubsequenceRepeatedK("zzzzzzzzzzzzz", 5), zz, 'Test 84');
test(longestSubsequenceRepeatedK("axbyczdxeyfzgyhz", 2), xyz, 'Test 85');
test(longestSubsequenceRepeatedK("aaabbbcccdddeeefff", 4), , 'Test 86');
test(longestSubsequenceRepeatedK("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz", 10), zxy, 'Test 87');
test(longestSubsequenceRepeatedK("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 2), z, 'Test 88');
test(longestSubsequenceRepeatedK("abcdefghijabcdefghijabcdefghij", 3), abcdefghij, 'Test 89');
test(longestSubsequenceRepeatedK("abcdefghabcdefghabcdefgh", 3), abcdefgh, 'Test 90');
test(longestSubsequenceRepeatedK("zzzzyyyxxxwww", 4), z, 'Test 91');
test(longestSubsequenceRepeatedK("xyzxyzxyzxyzxyz", 4), zxy, 'Test 92');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

