// Test: 1540. Can Convert String In K Moves
// 119 test cases from LeetCodeDataset
// Run: node test.js

const { canConvertString } = require("./solution");

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

console.log("\n1540. Can Convert String In K Moves\n");

test(canConvertString("abc", "abc", 0), true, 'Test 1');
test(canConvertString("aaa", "zzz", 702), true, 'Test 2');
test(canConvertString("abc", "bcd", 10), false, 'Test 3');
test(canConvertString("abc", "xyz", 702), true, 'Test 4');
test(canConvertString("abcd", "pqrs", 100), true, 'Test 5');
test(canConvertString("zzz", "aaa", 78), true, 'Test 6');
test(canConvertString("abcd", "pqrs", 78), false, 'Test 7');
test(canConvertString("aaa", "abc", 3), true, 'Test 8');
test(canConvertString("abcdefghijklmnopqrstuvwxyz", "bcdefghijklmnopqrstuvwxyza", 25), false, 'Test 9');
test(canConvertString("zzz", "aaa", 25), false, 'Test 10');
test(canConvertString("aab", "bbb", 27), true, 'Test 11');
test(canConvertString("a", "z", 25), true, 'Test 12');
test(canConvertString("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz", 0), true, 'Test 13');
test(canConvertString("input", "ouput", 9), true, 'Test 14');
test(canConvertString("repeatedchars", "sfpqeueftdsft", 150), true, 'Test 15');
test(canConvertString("zzzzz", "aaaaa", 122), true, 'Test 16');
test(canConvertString("aaaaaaaaaa", "zzzzzzzzzz", 260), true, 'Test 17');
test(canConvertString("abcde", "edcba", 155), true, 'Test 18');
test(canConvertString("wraparound", "xqcsbpsboe", 150), true, 'Test 19');
test(canConvertString("abcdef", "fedcba", 50), true, 'Test 20');
test(canConvertString("z", "a", 1), true, 'Test 21');
test(canConvertString("xylophone", "xylophone", 1), true, 'Test 22');
test(canConvertString("testcase", "testcase", 0), true, 'Test 23');
test(canConvertString("pqrs", "abcd", 76), false, 'Test 24');
test(canConvertString("xyz", "abc", 25), false, 'Test 25');
test(canConvertString("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", 104), true, 'Test 26');
test(canConvertString("longstringexample", "mpjutjvqygfqfcqpf", 300), true, 'Test 27');
test(canConvertString("xyzzxyzz", "abcdabcd", 156), true, 'Test 28');
test(canConvertString("zzz", "abc", 78), true, 'Test 29');
test(canConvertString("hello", "tqxxa", 100), false, 'Test 30');
test(canConvertString("abcabcabc", "defdefdef", 24), false, 'Test 31');
test(canConvertString("aaaaabbbbb", "bbbbbccccc", 250), true, 'Test 32');
test(canConvertString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 900), true, 'Test 33');
test(canConvertString("hello", "worry", 100), true, 'Test 34');
test(canConvertString("python", "pythom", 100), true, 'Test 35');
test(canConvertString("aquickbrownfoxjumpsoverthelazydog", "zptjhoqznbmmktgdobnkszemgsvx", 1000), false, 'Test 36');
test(canConvertString("abcd", "dcba", 10), false, 'Test 37');
test(canConvertString("mississippi", "ssissippi", 100), false, 'Test 38');
test(canConvertString("hello", "khoor", 15), false, 'Test 39');
test(canConvertString("almostthere", "bnmpsuusfsf", 99), false, 'Test 40');
test(canConvertString("abcdefghij", "jihgfedcba", 260), true, 'Test 41');
test(canConvertString("shifting", "zmtxlqjq", 300), true, 'Test 42');
test(canConvertString("abcde", "edcba", 156), true, 'Test 43');
test(canConvertString("abc", "bcd", 2), false, 'Test 44');
test(canConvertString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "bcccdddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzza", 1000), false, 'Test 45');
test(canConvertString("conversion", "cvqfvkzqpo", 100), true, 'Test 46');
test(canConvertString("xyz", "abc", 24), false, 'Test 47');
test(canConvertString("abcxyz", "bcdyza", 27), false, 'Test 48');
test(canConvertString("zzzzzzzzzz", "aaaaaaaaaa", 259), true, 'Test 49');
test(canConvertString("hello", "uifsf", 100), true, 'Test 50');
test(canConvertString("abc", "xyz", 100), true, 'Test 51');
test(canConvertString("thisisatest", "ujkjkfbtftu", 150), true, 'Test 52');
test(canConvertString("aaaaaaa", "zzzzzzz", 702), true, 'Test 53');
test(canConvertString("abcd", "abcd", 0), true, 'Test 54');
test(canConvertString("abcdefghijklmnopqrstuvwxyz", "zzzzzzzzzzzzzzzzzzzzzzzzzz", 1000), true, 'Test 55');
test(canConvertString("abcdabcdabcd", "efghefghijkl", 100), false, 'Test 56');
test(canConvertString("aaaabbbb", "bbbbcccc", 26), false, 'Test 57');
test(canConvertString("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", "bcdebcdebcdebcdebcdebcdebcdebcdebcdebcde", 100), false, 'Test 58');
test(canConvertString("aaaaaaaaaaa", "bbbbbbbbbbb", 1000), true, 'Test 59');
test(canConvertString("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz", 1), true, 'Test 60');
test(canConvertString("zzzzzzzzzzzzzzzzzzzz", "aaaaaaaaaaaaaaaaaaaa", 260), false, 'Test 61');
test(canConvertString("ab", "yz", 51), true, 'Test 62');
test(canConvertString("abcdefghijklmnopqrstuvwxyz", "zabcdefghijklmnopqrstuvwxy", 51), false, 'Test 63');
test(canConvertString("abcdabcdabcd", "efefefefefef", 80), false, 'Test 64');
test(canConvertString("hello", "world", 20), false, 'Test 65');
test(canConvertString("aabbaabb", "bbccbbcc", 25), false, 'Test 66');
test(canConvertString("aaaabbbb", "bbbbcccc", 100), false, 'Test 67');
test(canConvertString("aaaa", "bbbb", 26), false, 'Test 68');
test(canConvertString("abcabcabcabcabcabc", "defdefdefdefdefdef", 260), false, 'Test 69');
test(canConvertString("abcdefghijklmnopqrstuvwxyz", "bcdefghijklmnopqrstuvwxyza", 200), false, 'Test 70');
test(canConvertString("abcdefghijklmnopqrstuvwxyz", "bcdefghijklmnopqrstuvwxyza", 26), false, 'Test 71');
test(canConvertString("azazaz", "bbbbbb", 78), true, 'Test 72');
test(canConvertString("aabbcc", "bbccdd", 29), false, 'Test 73');
test(canConvertString("abcdabcd", "bcdebcde", 10), false, 'Test 74');
test(canConvertString("hello", "world", 51), true, 'Test 75');
test(canConvertString("zzzz", "aaaa", 104), true, 'Test 76');
test(canConvertString("aaaaaaaaaa", "bbbbbbbbbb", 100), false, 'Test 77');
test(canConvertString("hello", "ifmmp", 5), false, 'Test 78');
test(canConvertString("abcd", "dcba", 104), true, 'Test 79');
test(canConvertString("abcd", "dcba", 100), true, 'Test 80');
test(canConvertString("abacabadabacaba", "bcbbcadbbcbcbbc", 200), true, 'Test 81');
test(canConvertString("abcdefghijklmnopqrstuvwxyz", "zzzzzzzzzzzzzzzzzzzzzzzzzz", 675), true, 'Test 82');
test(canConvertString("aaaaaaaaaaaa", "bbbbbbbbbbbb", 12), false, 'Test 83');
test(canConvertString("python", "python", 0), true, 'Test 84');
test(canConvertString("abcabcabc", "defdefdef", 26), false, 'Test 85');
test(canConvertString("hello", "world", 52), true, 'Test 86');
test(canConvertString("abcdef", "ghijkl", 18), false, 'Test 87');
test(canConvertString("xyz", "abc", 77), true, 'Test 88');
test(canConvertString("abcdefghij", "jihgfedcba", 100), true, 'Test 89');
test(canConvertString("same", "same", 10), true, 'Test 90');
test(canConvertString("programming", "qpsxstjnnqj", 200), true, 'Test 91');
test(canConvertString("programming", "programming", 1000), true, 'Test 92');
test(canConvertString("conversion", "wxvqivlxnt", 500), true, 'Test 93');
test(canConvertString("thisisatest", "ytnsytyfyty", 150), true, 'Test 94');
test(canConvertString("zzzzzzzzzzzzzzzzzzzzzzzzzzzz", "aaaaaaaaaaaaaaaaaaaaaaaaaaaa", 1325), true, 'Test 95');
test(canConvertString("aaa", "zzz", 701), true, 'Test 96');
test(canConvertString("a", "a", 0), true, 'Test 97');
test(canConvertString("aaa", "zzz", 78), true, 'Test 98');
test(canConvertString("conversion", "hxqzsrqvok", 200), true, 'Test 99');
test(canConvertString("aaa", "abc", 2), true, 'Test 100');
test(canConvertString("abcdefgh", "hgfedcba", 50), true, 'Test 101');
test(canConvertString("abcabcabc", "defdefdef", 78), false, 'Test 102');
test(canConvertString("mississippi", "vvvttttpppp", 260), true, 'Test 103');
test(canConvertString("abcdefghijklmnopqrstuvwxyz", "bcdefghijklmnopqrstuvwxyza", 260), false, 'Test 104');
test(canConvertString("abcdefghijklmnopqrstuvwxyz", "zabcdefghijklmnopqrstuvwxy", 100), false, 'Test 105');
test(canConvertString("racecar", "racecar", 100), true, 'Test 106');
test(canConvertString("aabbcc", "bbccdd", 30), false, 'Test 107');
test(canConvertString("aabbaabb", "bbccbbcc", 26), false, 'Test 108');
test(canConvertString("aaaa", "zzzz", 103), true, 'Test 109');
test(canConvertString("python", "qzuipo", 65), false, 'Test 110');
test(canConvertString("zzzzz", "aaaab", 130), true, 'Test 111');
test(canConvertString("abcabcabcabcabcabcabcabcabcabc", "bcdbcdbcdbcdbcdbcdbcdbcdbcdbcdbcdcb", 260), false, 'Test 112');
test(canConvertString("mississippi", "aaaaaaaaaaa", 130), true, 'Test 113');
test(canConvertString("yzyzyzyzyz", "acacacacac", 520), true, 'Test 114');
test(canConvertString("hello", "world", 50), true, 'Test 115');
test(canConvertString("quickbrownfox", "rvjdlqpsqfy", 200), false, 'Test 116');
test(canConvertString("leetcode", "leetcode", 0), true, 'Test 117');
test(canConvertString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "bbaacceeggiikkmmppttuuwwyyzzeeddfgghhjjoonnuuxx", 1000), false, 'Test 118');
test(canConvertString("longstringwithmultiplecharacters", "nqprxuixwqywwpdqfhhcifqtf", 500), false, 'Test 119');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

