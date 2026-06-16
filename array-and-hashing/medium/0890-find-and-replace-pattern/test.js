// Test: 890. Find And Replace Pattern
// 118 test cases from LeetCodeDataset
// Run: node test.js

const { findAndReplacePattern } = require("./solution");

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

console.log("\n890. Find And Replace Pattern\n");

test(findAndReplacePattern(["hello","world","leetcode"], "aaaaa"), [], 'Test 1');
test(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], "abb"), ['mee', 'aqq'], 'Test 2');
test(findAndReplacePattern(["abb","abb","abb"], "abc"), [], 'Test 3');
test(findAndReplacePattern(["abb","abc","abz","xyz","xyy"], "abb"), ['abb', 'xyy'], 'Test 4');
test(findAndReplacePattern(["aaa","bbb","ccc"], "aaa"), ['aaa', 'bbb', 'ccc'], 'Test 5');
test(findAndReplacePattern(["a","b","c"], "a"), ['a', 'b', 'c'], 'Test 6');
test(findAndReplacePattern(["hello","world","abcde","uvwxy"], "abcde"), ['world', 'abcde', 'uvwxy'], 'Test 7');
test(findAndReplacePattern(["abb","abb","abb","abb"], "abc"), [], 'Test 8');
test(findAndReplacePattern(["abb","abc","aab"], "abb"), ['abb'], 'Test 9');
test(findAndReplacePattern(["aba","bcb","bab"], "aba"), ['aba', 'bcb', 'bab'], 'Test 10');
test(findAndReplacePattern(["abb","abc","aab","aba"], "abb"), ['abb'], 'Test 11');
test(findAndReplacePattern(["abb","abc","xyz","xyy"], "abb"), ['abb', 'xyy'], 'Test 12');
test(findAndReplacePattern(["abb","aaa","aab"], "abb"), ['abb'], 'Test 13');
test(findAndReplacePattern(["abba","abab","baab","baba","aaaa"], "aabb"), [], 'Test 14');
test(findAndReplacePattern(["abac","bcad","aacc","bbdd","aabb"], "abab"), [], 'Test 15');
test(findAndReplacePattern(["abcdefg","hijklmn","opqrstu","vwxyzab","cdefghi"], "abcdefg"), ['abcdefg', 'hijklmn', 'opqrstu', 'vwxyzab', 'cdefghi'], 'Test 16');
test(findAndReplacePattern(["abcabc","bcbcbc","dedede","aiaiai","jkjkjk"], "abcabc"), ['abcabc'], 'Test 17');
test(findAndReplacePattern(["abcde","bcdef","cdefg","defgh","efghi"], "abcde"), ['abcde', 'bcdef', 'cdefg', 'defgh', 'efghi'], 'Test 18');
test(findAndReplacePattern(["zyx","yxz","xyz","zyz","yzy","zzy","zzz","zzz"], "zyx"), ['zyx', 'yxz', 'xyz'], 'Test 19');
test(findAndReplacePattern(["xyx","yxy","xyz","zyz"], "aba"), ['xyx', 'yxy', 'zyz'], 'Test 20');
test(findAndReplacePattern(["abcde", "bcdea", "cdeab", "deabc", "eabcd"], "abcde"), ['abcde', 'bcdea', 'cdeab', 'deabc', 'eabcd'], 'Test 21');
test(findAndReplacePattern(["abcd","efgh","ijkl"], "abcd"), ['abcd', 'efgh', 'ijkl'], 'Test 22');
test(findAndReplacePattern(["aaaaabbbbbcccccdddddeeeeeffffffggggghhhhhhiiiiijjjjjkkkkklllllmmmmmnnnnnooooo","zzzzzyyyyyxxxxxwwwwwvvvvvtttttsssssrrrrrqqqqqppppoonnnnnmmmmmlllllkkkkkjjjjjiiiii","tttttsssssrrrrrqqqqqppppponnnnnmmmmmlllllkkkkkjjjjjiiiiihhhhhhgggggffffffeeeeedddddeeecccbbbaaaaa"], "tttttsssssrrrrrqqqqqppppponnnnnmmmmmlllllkkkkkjjjjjiiiiihhhhhhgggggffffffeeeeedddddeeecccbbbaaaaa"), ['tttttsssssrrrrrqqqqqppppponnnnnmmmmmlllllkkkkkjjjjjiiiiihhhhhhgggggffffffeeeeedddddeeecccbbbaaaaa'], 'Test 23');
test(findAndReplacePattern(["abcd","abcc","abbc","abcb","acbb","adbb"], "abbc"), ['abbc'], 'Test 24');
test(findAndReplacePattern(["xyx","yxy","xyy","yyy","xyxy"], "xxyx"), [], 'Test 25');
test(findAndReplacePattern(["abcd","dcba","abab","dcdc","aabb"], "abcd"), ['abcd', 'dcba'], 'Test 26');
test(findAndReplacePattern(["aabbcc","ddeeff","gghhii","jjkkll","mmnnoo"], "aabbcc"), ['aabbcc', 'ddeeff', 'gghhii', 'jjkkll', 'mmnnoo'], 'Test 27');
test(findAndReplacePattern(["zzzz","zzzz","zzzz","zzzz"], "aaaa"), ['zzzz', 'zzzz', 'zzzz', 'zzzz'], 'Test 28');
test(findAndReplacePattern(["abbc","deee","zzzz"], "aabb"), [], 'Test 29');
test(findAndReplacePattern(["abcde","bcdea","cdeab","deabc","eabcd","fghij"], "abcde"), ['abcde', 'bcdea', 'cdeab', 'deabc', 'eabcd', 'fghij'], 'Test 30');
test(findAndReplacePattern(["abcdef", "fedcba", "ghijkl", "lkjihg", "mnopqr", "rqponm"], "abcdef"), ['abcdef', 'fedcba', 'ghijkl', 'lkjihg', 'mnopqr', 'rqponm'], 'Test 31');
test(findAndReplacePattern(["ijkl","ikjl","ijlk","ijlk","ikjl"], "ijkl"), ['ijkl', 'ikjl', 'ijlk', 'ijlk', 'ikjl'], 'Test 32');
test(findAndReplacePattern(["mnop","qrst","uvwx"], "mnop"), ['mnop', 'qrst', 'uvwx'], 'Test 33');
test(findAndReplacePattern(["xyzx","yzxy","zxyx","yxzy","xzyz","zyzx","yzyz","zyzy"], "abcb"), ['zxyx', 'xzyz'], 'Test 34');
test(findAndReplacePattern(["mnop","mnop","mnop","mnop","mnop","mnop","mnop","mnop"], "mnop"), ['mnop', 'mnop', 'mnop', 'mnop', 'mnop', 'mnop', 'mnop', 'mnop'], 'Test 35');
test(findAndReplacePattern(["tttt","tqtq","ttqt","qtqt","qtqq"], "aaaa"), ['tttt'], 'Test 36');
test(findAndReplacePattern(["xyy","yxx","xyz","xyx","xxy"], "aba"), ['xyx'], 'Test 37');
test(findAndReplacePattern(["qrst","qstr","qrts","qtsr","qtpr","qrsp"], "qrst"), ['qrst', 'qstr', 'qrts', 'qtsr', 'qtpr', 'qrsp'], 'Test 38');
test(findAndReplacePattern(["xyzy","zyxy","yzyx","zyxz"], "xyzy"), ['xyzy', 'zyxy'], 'Test 39');
test(findAndReplacePattern(["mnop","qrst","uvwx","yzxy","qrst"], "abcd"), ['mnop', 'qrst', 'uvwx', 'qrst'], 'Test 40');
test(findAndReplacePattern(["qrst","rstq","stqr","tqrs","qrst","rstq","stqr","tqrs"], "abcd"), ['qrst', 'rstq', 'stqr', 'tqrs', 'qrst', 'rstq', 'stqr', 'tqrs'], 'Test 41');
test(findAndReplacePattern(["mnop","nopm","opmn","pqrs","qrst","stuv","tuvw","uvwx"], "mnop"), ['mnop', 'nopm', 'opmn', 'pqrs', 'qrst', 'stuv', 'tuvw', 'uvwx'], 'Test 42');
test(findAndReplacePattern(["xxy", "xyy", "yxx", "yyx", "xyx", "yxy"], "xyy"), ['xyy', 'yxx'], 'Test 43');
test(findAndReplacePattern(["abc","bcd","cde","def","efg","fgh","ghi","hij","ijk"], "abc"), ['abc', 'bcd', 'cde', 'def', 'efg', 'fgh', 'ghi', 'hij', 'ijk'], 'Test 44');
test(findAndReplacePattern(["abacabadabacaba","babcbabcbbabcbb","abacabadabcadaa"], "abacabadabacaba"), ['abacabadabacaba'], 'Test 45');
test(findAndReplacePattern(["abbcc","aabbb","aabbcc","abbbaa","abacba","abcabc"], "abbcc"), ['abbcc'], 'Test 46');
test(findAndReplacePattern(["xyyx","mnop","qrst"], "mnop"), ['mnop', 'qrst'], 'Test 47');
test(findAndReplacePattern(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","abcdefghijkabcdefghijk"], "abcdefghijklmnopqrstuvwxyz"), ['abcdefghijklmnopqrstuvwxyz', 'zyxwvutsrqponmlkjihgfedcba'], 'Test 48');
test(findAndReplacePattern(["deq","mee","aqq","dkd","ccc","eii","fff","ggh"], "abb"), ['mee', 'aqq', 'eii'], 'Test 49');
test(findAndReplacePattern(["abcde","vwxyz","pqrst"], "uvwxy"), ['abcde', 'vwxyz', 'pqrst'], 'Test 50');
test(findAndReplacePattern(["qrst","uvwx","yzab"], "abcd"), ['qrst', 'uvwx', 'yzab'], 'Test 51');
test(findAndReplacePattern(["xyx","yxy","zaz","azz","bzb","abb"], "aba"), ['xyx', 'yxy', 'zaz', 'bzb'], 'Test 52');
test(findAndReplacePattern(["xyz","xyy","xzy","yxy","yzy","zyx"], "xyz"), ['xyz', 'xzy', 'zyx'], 'Test 53');
test(findAndReplacePattern(["mnop","nmop","mnop","npom","mnop"], "abcd"), ['mnop', 'nmop', 'mnop', 'npom', 'mnop'], 'Test 54');
test(findAndReplacePattern(["abcdef","ghijkl","mnopqr","stuvwx","yzabcf"], "abcdef"), ['abcdef', 'ghijkl', 'mnopqr', 'stuvwx', 'yzabcf'], 'Test 55');
test(findAndReplacePattern(["mnop","nomp","mpon","mnop","mnoo","mmno"], "mnop"), ['mnop', 'nomp', 'mpon', 'mnop'], 'Test 56');
test(findAndReplacePattern(["abca","decd","mefm","aqqz","dkdf","ccca"], "abba"), [], 'Test 57');
test(findAndReplacePattern(["aabbcc","bbccdd","ccddaa","ddeeff","eefggh"], "aabbcc"), ['aabbcc', 'bbccdd', 'ccddaa', 'ddeeff'], 'Test 58');
test(findAndReplacePattern(["abcd","bcde","cdef","defg","efgh","fghi","ghij","hijk"], "abcd"), ['abcd', 'bcde', 'cdef', 'defg', 'efgh', 'fghi', 'ghij', 'hijk'], 'Test 59');
test(findAndReplacePattern(["abba", "abab", "aabb", "baba", "baab", "bbaa"], "abba"), ['abba', 'baab'], 'Test 60');
test(findAndReplacePattern(["abacaba","cabadab","bacabac","adabaad","abaabab"], "abacaba"), ['abacaba'], 'Test 61');
test(findAndReplacePattern(["ijkl","jklm","klmn","lmno","mnop","nopq","opqr","pqrs"], "mnop"), ['ijkl', 'jklm', 'klmn', 'lmno', 'mnop', 'nopq', 'opqr', 'pqrs'], 'Test 62');
test(findAndReplacePattern(["zzzzz","yyyyy","xxxxx","wwwww","vvvvv"], "aaaaa"), ['zzzzz', 'yyyyy', 'xxxxx', 'wwwww', 'vvvvv'], 'Test 63');
test(findAndReplacePattern(["mnoonm","mnoono","mmnnoo","noonmm"], "mnoonm"), ['mnoonm'], 'Test 64');
test(findAndReplacePattern(["xyyx","mnop","qrst"], "abba"), ['xyyx'], 'Test 65');
test(findAndReplacePattern(["zzz", "aaa", "zzz", "aaa"], "abc"), [], 'Test 66');
test(findAndReplacePattern(["abcde","edcba","abcde","edcba"], "abcde"), ['abcde', 'edcba', 'abcde', 'edcba'], 'Test 67');
test(findAndReplacePattern(["abcd","abca","abcb","abcc","abdd"], "abba"), [], 'Test 68');
test(findAndReplacePattern(["baba","abab","aaaa","bbbb","abcd"], "abba"), [], 'Test 69');
test(findAndReplacePattern(["abcd","abab","abac","aabb","abba","aaaa","bbbb","abac"], "abcd"), ['abcd'], 'Test 70');
test(findAndReplacePattern(["abcabcabcabcabcabcabcabc","bcbcbcbcbcbcbcbcbcbcbcbcbcbcb","cbbccbbccbbccbbccbbccbbccbbcc","abcbbccbbccbbccbbccbbccbbccbb"], "abcabcabcabcabcabcabcabc"), ['abcabcabcabcabcabcabcabc'], 'Test 71');
test(findAndReplacePattern(["abac","deed","zaff"], "deed"), ['deed'], 'Test 72');
test(findAndReplacePattern(["abcdefgh", "hgfedcba", "ijklmnop", "ponmlkji", "qrstuvwx", "xwvutsrq"], "abcdefgh"), ['abcdefgh', 'hgfedcba', 'ijklmnop', 'ponmlkji', 'qrstuvwx', 'xwvutsrq'], 'Test 73');
test(findAndReplacePattern(["abcde","vwxyz","pqrst"], "vwxyz"), ['abcde', 'vwxyz', 'pqrst'], 'Test 74');
test(findAndReplacePattern(["abac","baba","abca","baac","caba","dada"], "abac"), ['abac'], 'Test 75');
test(findAndReplacePattern(["efgh","efgi","efgh","efgi","efgh"], "abcd"), ['efgh', 'efgi', 'efgh', 'efgi', 'efgh'], 'Test 76');
test(findAndReplacePattern(["ababab", "bababa", "cdcdcd", "dcdcdc", "efefef", "fefefe"], "ababab"), ['ababab', 'bababa', 'cdcdcd', 'dcdcdc', 'efefef', 'fefefe'], 'Test 77');
test(findAndReplacePattern(["abab","baba","abba","aaaa","bbbb","cccc","aabb","abab"], "abab"), ['abab', 'baba', 'abab'], 'Test 78');
test(findAndReplacePattern(["abab","baba","abba","baab","aaaa","bbbb"], "abab"), ['abab', 'baba'], 'Test 79');
test(findAndReplacePattern(["aabbcc", "bbccdd", "ccddaa", "ddeeff", "eeffgg", "ffggee"], "abcdef"), [], 'Test 80');
test(findAndReplacePattern(["zzzz","zzyz","zyzy","zyyz"], "aaaa"), ['zzzz'], 'Test 81');
test(findAndReplacePattern(["aaaaaa", "bbbbbb", "cccccc", "dddddd", "eeeeee", "ffffff"], "aaaaaa"), ['aaaaaa', 'bbbbbb', 'cccccc', 'dddddd', 'eeeeee', 'ffffff'], 'Test 82');
test(findAndReplacePattern(["aab","aba","aab","aba","aab"], "aba"), ['aba', 'aba'], 'Test 83');
test(findAndReplacePattern(["aaaaa","bbbbb","ccccc"], "abcde"), [], 'Test 84');
test(findAndReplacePattern(["abcde","vwxyz","mnopq","rstuv","fghij"], "abcde"), ['abcde', 'vwxyz', 'mnopq', 'rstuv', 'fghij'], 'Test 85');
test(findAndReplacePattern(["aab","aba","baa","aaa"], "aab"), ['aab'], 'Test 86');
test(findAndReplacePattern(["abac","debd","mee","aqq","dkd","ccc"], "abac"), ['abac', 'dkd'], 'Test 87');
test(findAndReplacePattern(["aabb","bbcc","ccdd"], "aabb"), ['aabb', 'bbcc', 'ccdd'], 'Test 88');
test(findAndReplacePattern(["aabbccdd","bbaaddcc","ccddaabb","ddccaabb"], "aabbccdd"), ['aabbccdd', 'bbaaddcc', 'ccddaabb', 'ddccaabb'], 'Test 89');
test(findAndReplacePattern(["abcdefgh","hgfedcba","abcdefgh","hgfedcba"], "abcdefgh"), ['abcdefgh', 'hgfedcba', 'abcdefgh', 'hgfedcba'], 'Test 90');
test(findAndReplacePattern(["wxyz","wyxz","wyzx","wxzy","wxyz"], "wxyz"), ['wxyz', 'wyxz', 'wyzx', 'wxzy', 'wxyz'], 'Test 91');
test(findAndReplacePattern(["aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz","zzzzyyyyxxxxwwwwvvvvuuuuttssrrqqppoonnmmllkkjjiihhggee","mnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnop"], "abcdefghijklmnopqrstuvwxyzzz"), [], 'Test 92');
test(findAndReplacePattern(["zzzz","yyyy","xxxx","wwww","vvvv","uuuu"], "aaaa"), ['zzzz', 'yyyy', 'xxxx', 'wwww', 'vvvv', 'uuuu'], 'Test 93');
test(findAndReplacePattern(["ab","ba","aa","bb","cc","dd"], "ab"), ['ab', 'ba'], 'Test 94');
test(findAndReplacePattern(["xxyy","xyyx","xxyx","yxyx"], "abab"), ['yxyx'], 'Test 95');
test(findAndReplacePattern(["abac","abcd","abca","abac"], "abac"), ['abac', 'abac'], 'Test 96');
test(findAndReplacePattern(["uvw","uvw","uvw","uvw","uvw","uvw"], "uvw"), ['uvw', 'uvw', 'uvw', 'uvw', 'uvw', 'uvw'], 'Test 97');
test(findAndReplacePattern(["abcbacbacbacbacbac","bcabcabcabcabcabc","cbacbacbacbacbacba","bacbacbacbacbacbac"], "abcbacbacbacbacbac"), ['abcbacbacbacbacbac'], 'Test 98');
test(findAndReplacePattern(["pqrs","prqs","psqr","psrq","pqsr"], "qrst"), ['pqrs', 'prqs', 'psqr', 'psrq', 'pqsr'], 'Test 99');
test(findAndReplacePattern(["abc","bcd","cde","def","efg","fgh"], "abc"), ['abc', 'bcd', 'cde', 'def', 'efg', 'fgh'], 'Test 100');
test(findAndReplacePattern(["aabcb","bbaab","cbbaa","ababa"], "aabcb"), ['aabcb'], 'Test 101');
test(findAndReplacePattern(["abababababababababab","bababababababababa","aabbaabbaabbaabb","bbabbaabbaabbabb"], "abababababababababab"), ['abababababababababab', 'bababababababababa'], 'Test 102');
test(findAndReplacePattern(["abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz","zyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyx","mnopmnopmnopmnopmnopmnopmnopmnopmnopmnopmnop"], "abcdefghijklmnopqrstuvwxyzz"), [], 'Test 103');
test(findAndReplacePattern(["aaaabbbb","ccccdddd","eeeeffff","ggggaaaa","bbbbcccc"], "aabbccdd"), [], 'Test 104');
test(findAndReplacePattern(["aaaaa","bbbbb","ccccc"], "zzzzz"), ['aaaaa', 'bbbbb', 'ccccc'], 'Test 105');
test(findAndReplacePattern(["mxyz","yzxy","zxyz","yzzx","zzzz"], "wxyz"), ['mxyz'], 'Test 106');
test(findAndReplacePattern(["aabb","bbcc","ccdd","aacc","abab"], "aabb"), ['aabb', 'bbcc', 'ccdd', 'aacc'], 'Test 107');
test(findAndReplacePattern(["abcabc", "defdef", "ghighi", "jkljkl", "mnopmn", "opqropqr"], "abcabc"), ['abcabc', 'defdef', 'ghighi', 'jkljkl'], 'Test 108');
test(findAndReplacePattern(["abc","acb","bac","bca","cab","cba"], "abc"), ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'], 'Test 109');
test(findAndReplacePattern(["abcd","abdc","acbd","acdb"], "acdb"), ['abcd', 'abdc', 'acbd', 'acdb'], 'Test 110');
test(findAndReplacePattern(["aabbcc","bbccdd","ccddeeff","ddeeffgg","eeffgghh"], "aabbc"), ['aabbcc', 'bbccdd', 'ccddeeff', 'ddeeffgg', 'eeffgghh'], 'Test 111');
test(findAndReplacePattern(["stuv","stvu","tuvv","stvv","stvu"], "stvu"), ['stuv', 'stvu', 'stvu'], 'Test 112');
test(findAndReplacePattern(["abac","deed","zaff"], "abab"), [], 'Test 113');
test(findAndReplacePattern(["ababab","bababa","ababba","bababb","aabbab","bbaaab","abbaab","babaab"], "ababab"), ['ababab', 'bababa'], 'Test 114');
test(findAndReplacePattern(["mnop","ponm","mpon","mnop","nmop"], "mnop"), ['mnop', 'ponm', 'mpon', 'mnop', 'nmop'], 'Test 115');
test(findAndReplacePattern(["abac","baca","caab","acab","caba"], "abac"), ['abac', 'acab'], 'Test 116');
test(findAndReplacePattern(["aabb","bbaa","abab","baab","aaaa","bbbb","abba","baba"], "aabb"), ['aabb', 'bbaa'], 'Test 117');
test(findAndReplacePattern(["abcabc","defdef","ghighi","jkljkl","mnopqr"], "abcabc"), ['abcabc', 'defdef', 'ghighi', 'jkljkl'], 'Test 118');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

