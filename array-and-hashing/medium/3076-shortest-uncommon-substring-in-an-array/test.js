// Test: 3076. Shortest Uncommon Substring In An Array
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { shortestSubstrings } = require("./solution");

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

console.log("\n3076. Shortest Uncommon Substring In An Array\n");

test(shortestSubstrings(["abcabc","bcabc","cabc","abcd"]), ['abca', '', '', 'd'], 'Test 1');
test(shortestSubstrings(["aaa","aab","aba","abb"]), ['aaa', 'aab', 'ba', 'bb'], 'Test 2');
test(shortestSubstrings(["abc","bcd","abcd"]), ['', '', 'abcd'], 'Test 3');
test(shortestSubstrings(["abcd","bcde","cdef","defg"]), ['a', 'bcde', 'cdef', 'g'], 'Test 4');
test(shortestSubstrings(["hello","world","hel","wor","ld"]), ['ll', 'rl', '', '', ''], 'Test 5');
test(shortestSubstrings(["unique","strings","array","test"]), ['q', 'g', 'a', 'es'], 'Test 6');
test(shortestSubstrings(["cab","ad","bad","c"]), ['ab', '', 'ba', ''], 'Test 7');
test(shortestSubstrings(["aaaa","aaab","aabb","abbb"]), ['aaaa', 'aaab', 'aabb', 'bbb'], 'Test 8');
test(shortestSubstrings(["xyz","zyx","yzx"]), ['xy', 'yx', 'zx'], 'Test 9');
test(shortestSubstrings(["abcde","bcdef","cdefg","defgh"]), ['a', 'bcdef', 'cdefg', 'h'], 'Test 10');
test(shortestSubstrings(["a","b","c","d"]), ['a', 'b', 'c', 'd'], 'Test 11');
test(shortestSubstrings(["hello","world","python","programming"]), ['e', 'd', 't', 'a'], 'Test 12');
test(shortestSubstrings(["same","same","same","same"]), ['', '', '', ''], 'Test 13');
test(shortestSubstrings(["banana","bandana","band"]), ['nan', 'da', ''], 'Test 14');
test(shortestSubstrings(["aaa","aab","aac","abc"]), ['aaa', 'aab', 'ac', 'bc'], 'Test 15');
test(shortestSubstrings(["abc","def","ghi","jkl","mno"]), ['a', 'd', 'g', 'j', 'm'], 'Test 16');
test(shortestSubstrings(["banana","ananas","nana","ana","nan"]), ['b', 's', '', '', ''], 'Test 17');
test(shortestSubstrings(["xyz","xyzz","xyzzz","xyzzzz"]), ['', '', '', 'zzzz'], 'Test 18');
test(shortestSubstrings(["mississippi","missouri","mismatch","misinterpret","misspoke"]), ['ip', 'u', 'a', 'n', 'k'], 'Test 19');
test(shortestSubstrings(["abcdefghij","bcdefghijk","cdefghijkl","defghijklm","efghijklmn","fghijklmno","ghijklmnop","hijklmnopq","ijklmnopqr","jklmnopqrs"]), ['a', 'bcdefghijk', 'cdefghijkl', 'defghijklm', 'efghijklmn', 'fghijklmno', 'ghijklmnop', 'hijklmnopq', 'ijklmnopqr', 's'], 'Test 20');
test(shortestSubstrings(["mississippi","missouri","miss","mis","is","sip","pip"]), ['pp', 'o', '', '', '', '', 'pip'], 'Test 21');
test(shortestSubstrings(["abacabadabacaba", "bacabadaba", "acabadaba", "cabacaba", "abacaba", "bacaba", "acaba", "cabaca"]), ['dabac', '', '', 'cabacab', '', '', '', ''], 'Test 22');
test(shortestSubstrings(["banana","anana","nana","ana","na","a","bandana","band"]), ['bana', '', '', '', '', '', 'da', ''], 'Test 23');
test(shortestSubstrings(["aabbcc","bbccdd","ccddaa","ddeaab"]), ['abb', 'bccd', 'da', 'e'], 'Test 24');
test(shortestSubstrings(["aabbccddeeff","bbaacceeffdd","ccddeeffaabb","ddeeffaabbcc","eeffddbbaacc","ffddbbaaccee"]), ['bccd', 'ceef', 'cddeeffa', 'faabbc', 'effddb', 'dbbaacce'], 'Test 25');
test(shortestSubstrings(["zxyzyx", "zyxzyx", "yzyxzy", "xyzyxz", "yzyxzyx", "zyxzyxzy"]), ['zx', '', '', 'xyzyxz', 'yzyxzyx', 'xzyxz'], 'Test 26');
test(shortestSubstrings(["banana","ananas","nana","anan"]), ['b', 's', '', ''], 'Test 27');
test(shortestSubstrings(["abacabadaba","bacabadabac","acabadabaca","cadabacabad","adabacabadab"]), ['abacabadaba', 'bacabadabac', 'badabaca', 'cad', 'dabacabada'], 'Test 28');
test(shortestSubstrings(["xyxyxy","yxyx","xyx","yx","xyz","zyx"]), ['xyxy', '', '', '', 'yz', 'zy'], 'Test 29');
test(shortestSubstrings(["xyx", "yxy", "xyxy", "yxyx", "xyxyx", "yxyxy"]), ['', '', '', '', 'xyxyx', 'yxyxy'], 'Test 30');
test(shortestSubstrings(["abacabad","bacabadab","acabadabc","cababad"]), ['abac', 'bacabada', 'bc', 'bab'], 'Test 31');
test(shortestSubstrings(["zzzzz","zzzz","zzz","zz","z"]), ['zzzzz', '', '', '', ''], 'Test 32');
test(shortestSubstrings(["aabbccddeeff","bbccddeeffaa","ccddeeffaabb","ddeeffaabbcc","eeffaabbc","ffaabbcdd","aabbcdd","bbccdd","ccdd","ddee","eff","ff","ee","dd","cc","bb","aa"]), ['abbccd', 'bccddeeffa', 'cddeeffaab', 'faabbcc', '', 'faabbcd', '', '', '', '', '', '', '', '', '', '', ''], 'Test 33');
test(shortestSubstrings(["longstring","longstringa","longstringb","longstringc","longstringd","longstringe"]), ['', 'a', 'b', 'c', 'd', 'e'], 'Test 34');
test(shortestSubstrings(["aaaaab","bbbbb","cccc","dddd","eeeee","aaaaabbbb","bbbbbcccc","ccccdddd","ddddeeee"]), ['', '', '', '', 'eeeee', 'abb', 'bc', 'cd', 'de'], 'Test 35');
test(shortestSubstrings(["aabbccddeeff","bbaacceeffgg","ccaabbeeffhh","ddbbccffeeii","eekkllmmnn","ffggklllnnoo","gggghhkkllmm","hhhiiikkllmm","iiijjkklmmnn","jjjjkkklnnnoo"]), ['cd', 'ac', 'be', 'cf', 'ek', 'gk', 'gh', 'hi', 'ij', 'jjj'], 'Test 36');
test(shortestSubstrings(["abcdef","bcdefg","cdefgh","defghi","efghij","fghijk","ghijkl"]), ['a', 'bcdefg', 'cdefgh', 'defghi', 'efghij', 'fghijk', 'l'], 'Test 37');
test(shortestSubstrings(["abacaba","cabcabc","babcbab","abcabca","babcabc","cacacac","abcabcabc","bcabcbc","abcbcab","cacbcac"]), ['aba', '', 'cba', '', 'babca', 'acac', 'bcabcab', 'cabcb', 'bcbca', 'acb'], 'Test 38');
test(shortestSubstrings(["mississippi","mississippis","mississippii","mississippiii","mississippiiii"]), ['', 'pis', '', '', 'iiii'], 'Test 39');
test(shortestSubstrings(["xyz","xyzz","xyzzy","xyzzz","zyxzyx"]), ['', '', 'zzy', 'zzz', 'xz'], 'Test 40');
test(shortestSubstrings(["aaaabbbb","bbbbaaaa","aabbaabb","baabbaab","bbaabbab"]), ['aaab', 'baaa', 'abbaabb', 'baabbaa', 'bab'], 'Test 41');
test(shortestSubstrings(["abacaba","bacabab","acababa"]), ['abac', 'bacabab', 'baba'], 'Test 42');
test(shortestSubstrings(["pqr","pqs","pqt","pqu","pqv","pqw","pqx","pqy","pqz"]), ['r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], 'Test 43');
test(shortestSubstrings(["abcdefgh","efghijkl","ghijklmn","hijklmno","ijklmnop"]), ['a', 'fghi', 'ghijklm', 'hijklmno', 'p'], 'Test 44');
test(shortestSubstrings(["banana","nanana","anana","bananaaa","anananan","ananan","anan","ana","a","n","an","na"]), ['', '', '', 'aa', 'ananana', '', '', '', '', '', '', ''], 'Test 45');
test(shortestSubstrings(["abcdefg","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz"]), ['a', '', '', '', '', 'fgh', 'ghi', 'hij', 'ijk', 'jkl', 'klm', 'lmn', 'mno', 'nop', 'opq', 'pqr', 'qrs', 'rst', 'stu', 'tuv', 'uvw', 'vwx', 'wxy', 'z'], 'Test 46');
test(shortestSubstrings(["abcdefghij","jabcdefghi","ijabcdefgh","hijabcdefg","ghijabcdef","fghijabcde","efghijabcd","defghijabc","cdefghijab","bcdefghija"]), ['abcdefghij', 'jabcdefghi', 'ijabcdefgh', 'hijabcdefg', 'ghijabcdef', 'fghijabcde', 'efghijabcd', 'defghijabc', 'cdefghijab', 'bcdefghija'], 'Test 47');
test(shortestSubstrings(["abcdefg","bcdefgh","cdefghi","defghij","efghijk","fghijkl","ghijklm"]), ['a', 'bcdefgh', 'cdefghi', 'defghij', 'efghijk', 'fghijkl', 'm'], 'Test 48');
test(shortestSubstrings(["mamma","pappa","bappa","kappa","dappa","lappa","sappa","tappa","gappa","yappa","xappa"]), ['m', 'pap', 'b', 'k', 'd', 'l', 's', 't', 'g', 'y', 'x'], 'Test 49');
test(shortestSubstrings(["algorithm","logarithm","rhythm","algorithmic","algorhythm"]), ['', 'ar', '', 'c', 'orh'], 'Test 50');
test(shortestSubstrings(["pqrstuvw", "qrstuvwx", "rstuvwxy", "stuvwxyz", "tuvwxyzx", "uvwxyzxy", "vwxyzxyz"]), ['p', 'qrstuvwx', 'rstuvwxy', 'stuvwxyz', 'tuvwxyzx', 'uvwxyzxy', 'zxyz'], 'Test 51');
test(shortestSubstrings(["xyxzyxzyx","yxyxzyxzx","xzyxzyxzy","zyxzyxzyx","yxzxzyxzy"]), ['xyxzyxzy', 'yxy', 'xzyxzyxz', 'zyxzyxzyx', 'zxz'], 'Test 52');
test(shortestSubstrings(["abcdefghij","bcdefghija","cdefghijab","defghijabc","efghijabcd","fghijabcde","ghijabcdef","hijabcdefg","ijabcdefgh","jabcdefghi"]), ['abcdefghij', 'bcdefghija', 'cdefghijab', 'defghijabc', 'efghijabcd', 'fghijabcde', 'ghijabcdef', 'hijabcdefg', 'ijabcdefgh', 'jabcdefghi'], 'Test 53');
test(shortestSubstrings(["mississippi","missouri","miss","issi","siss"]), ['p', 'o', '', '', ''], 'Test 54');
test(shortestSubstrings(["hello","world","hold","hellohold","holdworld"]), ['', '', '', 'oh', 'dw'], 'Test 55');
test(shortestSubstrings(["elephant","elephantology","elephantine","elephantmania","elephantdom","elephants"]), ['', 'g', 'in', 'ia', 'd', 's'], 'Test 56');
test(shortestSubstrings(["abcdabcd","cdabcdab","bcabcdab","ababcdcd","abcdabcd","cdabcdabcd","abcdabcda","bcdabcdabc","abcdabcdab","abcdabcdabc"]), ['', '', 'ca', 'ba', '', 'dabcdabcd', '', '', '', 'abcdabcdabc'], 'Test 57');
test(shortestSubstrings(["hellohello", "elloworld", "loworldhe", "oworldhel", "worldhell", "orldhello", "rldhelloe", "ldhelloel", "dhelloell"]), ['oh', 'llow', 'loworldh', 'oworldhel', 'worldhell', 'orldhello', 'rldhelloe', 'ldhelloel', 'oell'], 'Test 58');
test(shortestSubstrings(["nancy","randy","bandy","pancy","pandy","landy"]), ['na', 'r', 'b', 'panc', 'pand', 'l'], 'Test 59');
test(shortestSubstrings(["abcdabc","bcdbcda","cdabcdab"]), ['bcdabc', 'db', 'dabcd'], 'Test 60');
test(shortestSubstrings(["abcabcabc","bcabcabca","cabcabcab","abcabcaaa","abcaaacab","caaacabca","aaacabcab"]), ['abcabcabc', 'bcabcabca', 'cabcabcab', 'cabcaa', 'bcaaac', 'caaacabc', 'acabcab'], 'Test 61');
test(shortestSubstrings(["abcdefg","bcdefga","cdefgab","defgabc","efgabcd","fgabcde","gabcdef"]), ['abcdefg', 'bcdefga', 'cdefgab', 'defgabc', 'efgabcd', 'fgabcde', 'gabcdef'], 'Test 62');
test(shortestSubstrings(["abcdabcd","bcdbcdbd","cdabcdab","dabcdabc","abcdabca"]), ['bcdabcd', 'bd', 'cdabcda', 'dabcdabc', 'ca'], 'Test 63');
test(shortestSubstrings(["xxyyyzzz","yyzzzxxy","zzxxyyyz","xzzyyxxy","yzzxxyyy","zxyyyzzx"]), ['yyyzzz', 'zzzx', 'zxxyyyz', 'xz', 'yzzxx', 'zxy'], 'Test 64');
test(shortestSubstrings(["algorithm","logarithm","rhythm","algorithmic","logarithmic","rhythmical"]), ['', '', '', 'orithmi', 'arithmi', 'ca'], 'Test 65');
test(shortestSubstrings(["abcdefg","bcdefgh","cdefghi","defghij","efghijk"]), ['a', 'bcdefgh', 'cdefghi', 'defghij', 'k'], 'Test 66');
test(shortestSubstrings(["abacabad","bacabad","acabad","cabad","abad","bad","ad","d"]), ['abac', '', '', '', '', '', '', ''], 'Test 67');
test(shortestSubstrings(["zxy","zyx","xyz","yzx","xzy","yxz","zyxz","zxzy","yxzx","xyzy"]), ['zxy', '', '', 'yzx', '', '', 'zyxz', 'zxz', 'xzx', 'yzy'], 'Test 68');
test(shortestSubstrings(["aaaabc", "aabbb", "acabc", "bbccc", "aabbcc"]), ['aaa', 'bbb', 'ac', 'ccc', 'abbc'], 'Test 69');
test(shortestSubstrings(["zzzzzz","zzzzzy","zzzyzz","zzyzzz"]), ['zzzzzz', 'zzzzy', 'zzzyz', 'yzzz'], 'Test 70');
test(shortestSubstrings(["mississippi","mississippis","mississippiss","mississippisss","mississippi","mississippis","mississippiss","mississippisss","mississippi"]), ['', '', '', '', '', '', '', '', ''], 'Test 71');
test(shortestSubstrings(["xyzzxyzz","zzyxzyzx","yzyzyzyz"]), ['xy', 'xz', 'yzy'], 'Test 72');
test(shortestSubstrings(["zxy","zyx","yzx","xyz","yxz","xzy","zyx"]), ['zxy', '', 'yzx', 'xyz', 'yxz', 'xzy', ''], 'Test 73');
test(shortestSubstrings(["aabbccddeeff","bbccddeeffgg","ccddeeffgghh","ddeeffgghhii","eeffgghhiijj"]), ['a', 'bccddeeffg', 'cddeeffggh', 'deeffgghhi', 'j'], 'Test 74');
test(shortestSubstrings(["aabbccdd","bbaacccd","ccddaabb","ddccbbaa","aabbddcc"]), ['bc', 'ac', 'da', 'cb', 'bd'], 'Test 75');
test(shortestSubstrings(["xyxyxyxy","yxyxyxyx","xyxyxyyx","xyxxyxyx","xxyxyxyx"]), ['xyxyxyxy', 'yxyxyxyx', 'yy', 'yxx', 'xxyxyxy'], 'Test 76');
test(shortestSubstrings(["aaaaabbbbb","bbbbbccccc","cccccddddd","dddddeeeee","eeeeefffff"]), ['a', 'bc', 'cd', 'de', 'f'], 'Test 77');
test(shortestSubstrings(["abcdabcd", "bcdbcdbcd", "cdcdcdcd", "dcdcdcdc", "cdcdcd"]), ['a', 'db', 'cdcdcdcd', 'dcdcdcdc', ''], 'Test 78');
test(shortestSubstrings(["zzzzzzz","zzzzzzzz","zzzzzzzzz","zzzzzzzzzz"]), ['', '', '', 'zzzzzzzzzz'], 'Test 79');
test(shortestSubstrings(["mnopqrst", "nopqrstu", "opqrstuv", "pqrstuvw", "qrstuvwx", "rstuvwxy", "stuvwxyz", "tuvwxyzx"]), ['m', 'nopqrstu', 'opqrstuv', 'pqrstuvw', 'qrstuvwx', 'rstuvwxy', 'stuvwxyz', 'zx'], 'Test 80');
test(shortestSubstrings(["abababab","baba","ab","ba","aba","bab"]), ['abab', '', '', '', '', ''], 'Test 81');
test(shortestSubstrings(["aabbcc","bbaacc","aabbbc","aabbccdd","aabccdde","aabbccde"]), ['', 'ac', 'bbb', 'bbccdd', 'abc', 'cde'], 'Test 82');
test(shortestSubstrings(["abcdef", "defgh", "fghij", "ghijkl", "hijklm", "ijklmn"]), ['a', 'efg', 'fghi', 'ghijk', 'hijklm', 'n'], 'Test 83');
test(shortestSubstrings(["abcabc","bcabc","cabc","abcd","bcde","cdef"]), ['abca', '', '', 'abcd', 'bcde', 'f'], 'Test 84');
test(shortestSubstrings(["zzzzzzzzzz","zzzzzzzzzy","zzzzzzzzzx","zzzzzzzzww","zzzzzzzvvv","zzzzzzuuuu","zzzzzttttt","zzzzsssss","zzzrrrrr","zzqqqqq","zppppp","oooooo"]), ['zzzzzzzzzz', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o'], 'Test 85');
test(shortestSubstrings(["abcde","bcdef","cdefg","defgh","efghi"]), ['a', 'bcdef', 'cdefg', 'defgh', 'i'], 'Test 86');
test(shortestSubstrings(["aaa","aab","aba","baa","aabbaa","baabaa","aabaab","baabaa","abaaab","aababa"]), ['', '', '', '', 'bb', '', 'abaab', '', 'aaab', 'bab'], 'Test 87');
test(shortestSubstrings(["mississippi","missouri","missed","miss","mississippi"]), ['', 'o', 'd', '', ''], 'Test 88');
test(shortestSubstrings(["aaaabbbb","aabbbbaa","abbaabba","bbaaaabb"]), ['aaabbb', 'bbba', 'abba', 'baaa'], 'Test 89');
test(shortestSubstrings(["aaaaab","bbbba","abbbb","baaaa","abba","baba"]), ['aab', 'bbba', 'abbb', 'baa', 'abba', 'aba'], 'Test 90');
test(shortestSubstrings(["aabbcc","bbaacc","ccaabb","aabbbc","bbccaa"]), ['abbc', 'ac', 'caab', 'bbb', 'bcca'], 'Test 91');
test(shortestSubstrings(["abcde","bcdef","cdefg","defgh","efghi","fghij","ghijk","hijkl","ijklm","jklmn"]), ['a', 'bcdef', 'cdefg', 'defgh', 'efghi', 'fghij', 'ghijk', 'hijkl', 'ijklm', 'n'], 'Test 92');
test(shortestSubstrings(["elephant","elphant","lphant","phant","hant","ant","nt","t"]), ['ep', 'elp', '', '', '', '', '', ''], 'Test 93');
test(shortestSubstrings(["abcdabcd","bcdabcda","cdabcdab","dabcabcd"]), ['abcdabc', 'bcdabcda', 'dabcdab', 'ca'], 'Test 94');
test(shortestSubstrings(["aaaaaaa","aaaaaab","aaaaabb","aaaabb","aaabb","aabb","abb","bb"]), ['aaaaaaa', 'aaaaaab', 'aaaaabb', '', '', '', '', ''], 'Test 95');
test(shortestSubstrings(["apple","application","applet","app"]), ['', 'c', 'et', ''], 'Test 96');
test(shortestSubstrings(["xzy","zyx","xyzzy","zyxzyx"]), ['', '', 'xy', 'yxz'], 'Test 97');
test(shortestSubstrings(["abcdefg","bcdefgh","cdefghi","defghij","efghijk","fghijkl"]), ['a', 'bcdefgh', 'cdefghi', 'defghij', 'efghijk', 'l'], 'Test 98');
test(shortestSubstrings(["aaaaabbbbb","bbbbbccccc","cccccaaaaa","dddddeeeee","eeeeeaaaaa","fffffbbbbb","gggggccccc","hhhhhdddd","iiiiieeeee","jjjjjfffff","kkkkkggggg","lllllhhhhh","mmmmmiiiii","nnnnnjjjjj","oooookkkkk","ppppplllll"]), ['ab', 'bc', 'ca', 'de', 'ea', 'fb', 'gc', 'hd', 'ie', 'jf', 'kg', 'lh', 'm', 'n', 'o', 'p'], 'Test 99');
test(shortestSubstrings(["qwertyuiop","asdfghjkl","zxcvbnm","qwerty","asdfg","zxcvb"]), ['i', 'h', 'm', '', '', ''], 'Test 100');
test(shortestSubstrings(["abcdefghij","bcdefghij","cdefghij","defghij","efghij","fghij","ghij","hij","ij","j"]), ['a', '', '', '', '', '', '', '', '', ''], 'Test 101');
test(shortestSubstrings(["abcdef","ghijkl","mnopqr","stuvwx","yzabcd","efghij","klmnop","qrstuv","wxyzab","cdefgh"]), ['bcde', 'jk', 'pq', 'vw', 'zabc', 'fghi', 'lm', 'rs', 'xy', 'defg'], 'Test 102');
test(shortestSubstrings(["unique","uneque","uniquely","uniqely","unieqly"]), ['', 'ne', 'uel', 'qe', 'ie'], 'Test 103');
test(shortestSubstrings(["aabbcc","ababab","abcabc","aabb","abbb","bbcc","acca","bbac","aabbccdd","bbccddaa"]), ['', 'aba', 'abc', '', 'bbb', '', 'acc', 'bac', 'abbccd', 'da'], 'Test 104');
test(shortestSubstrings(["aaaaaabbbbb","bbbbbccccc","cccccaaaaa","aacccbbbbb","bbcccaaaaa"]), ['ab', 'bbbc', 'cccca', 'ac', 'bccca'], 'Test 105');
test(shortestSubstrings(["algorithm","algorith","algorit","algori","algor","algo","algr","alg","al","a","bmw","bmv","bvw","b","m","w"]), ['hm', '', '', '', '', '', 'gr', '', '', '', 'mw', 'mv', 'bv', '', '', ''], 'Test 106');
test(shortestSubstrings(["abcabc","bcabcabc","cabcabcab","abcabcabc"]), ['', '', 'cabcabca', 'abcabcabc'], 'Test 107');
test(shortestSubstrings(["aabbccddeeff", "bbccddeeffgg", "ccddeeffgghh", "ddeeffgghhii", "eeffgghhiijj", "ffgghhiijjkk"]), ['a', 'bccddeeffg', 'cddeeffggh', 'deeffgghhi', 'effgghhiij', 'k'], 'Test 108');
test(shortestSubstrings(["abcdabcd","bcdbcd","cdabcd","dabcabcd","abcddabc"]), ['bcda', 'db', '', 'ca', 'dd'], 'Test 109');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

