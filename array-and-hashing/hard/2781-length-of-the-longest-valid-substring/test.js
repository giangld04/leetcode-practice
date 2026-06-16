// Test: 2781. Length Of The Longest Valid Substring
// 76 test cases from LeetCodeDataset
// Run: node test.js

const { longestValidSubstring } = require("./solution");

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

console.log("\n2781. Length Of The Longest Valid Substring\n");

test(longestValidSubstring("zzzzzzzzzz", ["zz"]), 1, 'Test 1');
test(longestValidSubstring("abacab", ["ba","ca"]), 2, 'Test 2');
test(longestValidSubstring("leetcode", ["de","le","e"]), 4, 'Test 3');
test(longestValidSubstring("abcde", ["fgh"]), 5, 'Test 4');
test(longestValidSubstring("aaaaaaa", ["aa"]), 1, 'Test 5');
test(longestValidSubstring("aaaabaaa", ["aa"]), 3, 'Test 6');
test(longestValidSubstring("abcde", ["fgh","ijk"]), 5, 'Test 7');
test(longestValidSubstring("xyz", ["xy","yz"]), 1, 'Test 8');
test(longestValidSubstring("cbaaaabc", ["aaa","cb"]), 4, 'Test 9');
test(longestValidSubstring("abcdefghijklmnopqrstuvwxyz", ["abc","xyz"]), 24, 'Test 10');
test(longestValidSubstring("abcd", ["a","b","c","d"]), 0, 'Test 11');
test(longestValidSubstring("abacaba", ["ba","ca"]), 2, 'Test 12');
test(longestValidSubstring("abcde", ["ab","bc","cd","de"]), 1, 'Test 13');
test(longestValidSubstring("aaabbbcccddd", ["aaa", "bbb", "ccc", "ddd", "abc"]), 4, 'Test 14');
test(longestValidSubstring("abcdefghijklmnopqrstuvwxyz", ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz"]), 4, 'Test 15');
test(longestValidSubstring("pppppppppppppppppppppppppppppppppp", ["pp", "p"]), 0, 'Test 16');
test(longestValidSubstring("abcdefghijabcdefghij", ["abc", "def", "ghi", "jij", "fed", "cba"]), 5, 'Test 17');
test(longestValidSubstring("abcdefghijabcdefghij", ["abcdefghij", "abc", "def", "ghi", "jih", "ihg", "fed", "cba"]), 5, 'Test 18');
test(longestValidSubstring("xyxzyzyxzyzyzxzyzx", ["xyz", "zyx", "xzy"]), 7, 'Test 19');
test(longestValidSubstring("hellothere", ["he", "lo", "th", "er", "ere"]), 3, 'Test 20');
test(longestValidSubstring("xyzxyzxyzxyz", ["xy", "yz", "zx", "xyz"]), 1, 'Test 21');
test(longestValidSubstring("abcdefghij", ["abc", "def", "ghi", "j"]), 4, 'Test 22');
test(longestValidSubstring("abcdeabcdeabcde", ["abc", "cde", "dea", "bcd"]), 3, 'Test 23');
test(longestValidSubstring("abcdefghijklmnopqrstuvwxyz", ["abc","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz"]), 2, 'Test 24');
test(longestValidSubstring("pneumonoultramicroscopicsilicovolcanoconiosis", ["pneumo", "ultra", "micro", "scopic", "silico", "volcano", "conio", "osis", "pneumonoultramicro", "microscopic", "scopicsilico", "silicovolcano", "volcanoconi", "conoosis"]), 11, 'Test 25');
test(longestValidSubstring("qwertyuiopasdfghjklzxcvbnm", ["qwe", "ert", "rty", "tyu", "yui", "uio", "iop", "asd", "sdf", "dfg", "fgh", "ghj", "hjk", "jkl", "klz", "lzx", "zxc", "xcv", "cvb", "vbn", "bnm"]), 4, 'Test 26');
test(longestValidSubstring("mississippi", ["iss", "sip", "issi", "ippi"]), 4, 'Test 27');
test(longestValidSubstring("abcabcabcabc", ["abcabc", "bcab", "cababc"]), 5, 'Test 28');
test(longestValidSubstring("aaaaaaaaaabbbbbbbbbb", ["aaa", "bbb", "ab", "ba", "aab", "bba"]), 2, 'Test 29');
test(longestValidSubstring("banana", ["na", "an", "ba", "baa", "nan", "ban", "anan"]), 1, 'Test 30');
test(longestValidSubstring("abcdefghijklmnopqrstuvwxyz", ["xyz", "uvw", "rst", "qpo", "lmn", "fed", "cba"]), 13, 'Test 31');
test(longestValidSubstring("banana", ["ana", "nan", "ba", "na", "an"]), 1, 'Test 32');
test(longestValidSubstring("qwertyuiopasdfghjklzxcvbnm", ["qwe", "rty", "uiop", "asdf", "ghjk", "lzx", "cvb", "nm"]), 6, 'Test 33');
test(longestValidSubstring("xyzxyzxyzxyz", ["xy", "yz", "zx"]), 1, 'Test 34');
test(longestValidSubstring("aaaaabbbbbcccccc", ["aaaa","bbbb","cccc","ab","bc","ca"]), 3, 'Test 35');
test(longestValidSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", ["aabb", "bbcc", "ccdd", "ddee", "eefg", "fghi", "ghij", "hijk", "ijkl", "jklm", "klmn", "lmno", "mnop", "nopq", "opqr", "pqr", "qrs", "rst", "stu", "tuv", "uvw", "vwx", "wxy", "xyz", "zyz"]), 45, 'Test 36');
test(longestValidSubstring("abcabcabcabc", ["abc", "cab", "bca"]), 2, 'Test 37');
test(longestValidSubstring("abcdefghijklmnopqrstuvwxyz", ["abc", "xyz", "mnop", "qrst"]), 14, 'Test 38');
test(longestValidSubstring("ababababab", ["aba", "bab", "aaa"]), 2, 'Test 39');
test(longestValidSubstring("mississippi", ["issi","iss","ss","ssip","ippi"]), 4, 'Test 40');
test(longestValidSubstring("xyzxyzxyz", ["xyz", "xy", "yz"]), 2, 'Test 41');
test(longestValidSubstring("abcabcabcabcabc", ["abc", "bca", "cab"]), 2, 'Test 42');
test(longestValidSubstring("abababababababab", ["aba", "bab", "abb"]), 2, 'Test 43');
test(longestValidSubstring("hellohellohellohello", ["he", "el", "ll", "lo", "oh"]), 1, 'Test 44');
test(longestValidSubstring("xyxyxyxyxyxyxyxy", ["xyx","yxy","xyxy"]), 2, 'Test 45');
test(longestValidSubstring("abacabadabacaba", ["aba", "abc", "bac"]), 5, 'Test 46');
test(longestValidSubstring("mississippi", ["issi", "iss", "is", "mp", "ss", "pp"]), 3, 'Test 47');
test(longestValidSubstring("abcdefghij", ["abc", "bcd", "cde", "def", "efg", "fgh", "ghi", "hij", "ijk", "jkl"]), 2, 'Test 48');
test(longestValidSubstring("mississippi", ["iss", "issi", "ippi", "issipp", "missi", "sissi", "ssippi"]), 5, 'Test 49');
test(longestValidSubstring("nolongerforbidden", ["for", "bidden", "no", "longer"]), 7, 'Test 50');
test(longestValidSubstring("qwertypoiuytrewq", ["qw", "we", "er", "rt", "ty", "yu", "ui", "io", "op"]), 11, 'Test 51');
test(longestValidSubstring("banana", ["na", "ba", "an"]), 1, 'Test 52');
test(longestValidSubstring("thisthisthisthisthis", ["thi", "hist", "isth", "histh", "thist"]), 3, 'Test 53');
test(longestValidSubstring("mississippi", ["iss", "issi", "ippi"]), 5, 'Test 54');
test(longestValidSubstring("abababababababab", ["aba", "bab", "aab", "bba"]), 2, 'Test 55');
test(longestValidSubstring("qwertyuiopasdfghjklzxcvbnm", ["qw", "er", "ty", "ui", "op", "as", "df", "gh", "jk", "kl", "zx", "cv", "vb", "bn", "nm"]), 2, 'Test 56');
test(longestValidSubstring("abcdabcdabcdabcdabcdabcd", ["abcd", "bcda", "cdab", "dabc"]), 3, 'Test 57');
test(longestValidSubstring("abacaxabcd", ["ab", "ca", "bc", "d"]), 3, 'Test 58');
test(longestValidSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", ["aa", "bb", "cc", "zz", "yy"]), 44, 'Test 59');
test(longestValidSubstring("banana", ["ana", "nan", "ban", "ana", "naa"]), 2, 'Test 60');
test(longestValidSubstring("mississippi", ["issi", "iss", "is", "i", "s", "p", "mp"]), 1, 'Test 61');
test(longestValidSubstring("abracadabra", ["abr", "rac", "ada", "bra", "cab", "cad"]), 3, 'Test 62');
test(longestValidSubstring("abcdefghij", ["abcdefghij","abcdefghi","bcdefgh","cdefgh","defgh","efgh","fgh","gh","h","ij"]), 7, 'Test 63');
test(longestValidSubstring("abacabadabacaba", ["aba", "bad", "cab", "abc"]), 4, 'Test 64');
test(longestValidSubstring("aaaaaaaaaa", ["a", "aa", "aaa", "aaaa", "aaaaa"]), 0, 'Test 65');
test(longestValidSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", ["aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj", "kk", "ll", "mm", "nn", "oo", "pp", "qq", "rr", "ss", "tt", "uu", "vv", "ww", "xx", "yy", "zz"]), 2, 'Test 66');
test(longestValidSubstring("mnopqrstuvwxyzabcdefghijkl", ["mnop", "qrst", "uvwx", "yzab", "cdef", "ghij", "klmn", "opqr", "stuv", "wxyz"]), 6, 'Test 67');
test(longestValidSubstring("aabbccddeeff", ["aa", "bb", "cc", "dd", "ee", "ff"]), 2, 'Test 68');
test(longestValidSubstring("abcabcabcabcabcabcabc", ["abcabc", "bcabc", "cabc", "abca", "bca", "cab", "abc"]), 2, 'Test 69');
test(longestValidSubstring("abacabadabacaba", ["aba", "aca", "bad"]), 4, 'Test 70');
test(longestValidSubstring("thisisaverylongwordthatneedstobecut", ["this", "is", "very", "long", "word", "that", "needs", "to", "be", "cut"]), 7, 'Test 71');
test(longestValidSubstring("abacabacabacaba", ["aba", "aca", "bab"]), 3, 'Test 72');
test(longestValidSubstring("abacabadabacaba", ["aba","abc","bac"]), 5, 'Test 73');
test(longestValidSubstring("thisisateststring", ["test","string","is","a","this"]), 8, 'Test 74');
test(longestValidSubstring("mississippi", ["issi", "sip", "iss", "ippi", "ppi"]), 4, 'Test 75');
test(longestValidSubstring("abcdefghijklmnopqrstuvwxyz", ["abc", "xyz", "mnop"]), 14, 'Test 76');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

