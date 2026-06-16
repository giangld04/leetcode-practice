// Test: 1639. Number Of Ways To Form A Target String Given A Dictionary
// 167 test cases from LeetCodeDataset
// Run: node test.js

const { numWays } = require("./solution");

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

console.log("\n1639. Number Of Ways To Form A Target String Given A Dictionary\n");

test(numWays(["a","b","c"], "abc"), 0, 'Test 1');
test(numWays(["abc","def"], "ad"), 0, 'Test 2');
test(numWays(["mississippi"], "issi"), 15, 'Test 3');
test(numWays(["aaa","aaa","aaa"], "aaa"), 27, 'Test 4');
test(numWays(["abc","acb","bac","bca","cab","cba"], "abc"), 8, 'Test 5');
test(numWays(["abc","bcd","cde"], "abc"), 1, 'Test 6');
test(numWays(["mississippi","mississippi","mississippi"], "miss"), 567, 'Test 7');
test(numWays(["mississippi","mississippi","mississippi"], "issi"), 1215, 'Test 8');
test(numWays(["acca","bbbb","caca"], "aba"), 6, 'Test 9');
test(numWays(["leetcode","leetcode","leetcode"], "leet"), 81, 'Test 10');
test(numWays(["aaa","aaa","aaa"], "a"), 9, 'Test 11');
test(numWays(["zzz","zzz","zzz"], "zzz"), 27, 'Test 12');
test(numWays(["abc","bcd","cde"], "aab"), 0, 'Test 13');
test(numWays(["abc","bcd","cde"], "abd"), 1, 'Test 14');
test(numWays(["aaaaaaaaaa","aaaaaaaaaa","aaaaaaaaaa"], "aaaa"), 17010, 'Test 15');
test(numWays(["abc","def","ghi"], "adg"), 0, 'Test 16');
test(numWays(["abba","baab"], "bab"), 4, 'Test 17');
test(numWays(["mississippi"], "sip"), 12, 'Test 18');
test(numWays(["abcdefghij", "abcdefghij", "abcdefghij", "abcdefghij"], "abcdefghijk"), 0, 'Test 19');
test(numWays(["abcdef", "bcadef", "cdefgh"], "abcd"), 2, 'Test 20');
test(numWays(["abcdefgh","efghijkl","mnopqr","stuvwx","yzabcd"], "mnop"), 1, 'Test 21');
test(numWays(["python","java","javascript","csharp","ruby"], "java"), Error: list index out of range, 'Test 22');
test(numWays(["abcdefgh","ijklmnop","qrstuvwx","yzabcdef"], "aceg"), 1, 'Test 23');
test(numWays(["abcdefg", "xyzabc", "mnopqr", "stuvwx"], "abc"), 4, 'Test 24');
test(numWays(["aaaaaa","bbbbbb","cccccc","dddddd"], "abcd"), 15, 'Test 25');
test(numWays(["aaaa","bbbb","cccc","dddd"], "abcd"), 1, 'Test 26');
test(numWays(["xyzxyz","yzxyzy","zxyzxy","yzyxzy"], "zyx"), 26, 'Test 27');
test(numWays(["thisisanexample","thisisanexample","thisisanexample"], "example"), 2187, 'Test 28');
test(numWays(["mississippi", "mississippi", "mississippi", "mississippi"], "miss"), 1792, 'Test 29');
test(numWays(["aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz","zzzzyyxwwvvuuttrrssqqponnmlkkjjiihhggffeeddccbaab","abcdefghijklmnopqrstuvwxyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"], "abcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 30');
test(numWays(["hello", "hello", "hello", "hello", "hello"], "hello"), 3125, 'Test 31');
test(numWays(["xylophone", "xylophone", "xylophone"], "xylo"), 162, 'Test 32');
test(numWays(["hellohellohello", "worldworldworld", "hellohellohello"], "helloworld"), 2496, 'Test 33');
test(numWays(["ababababab", "bababababa", "ababababab"], "ababab"), 4339, 'Test 34');
test(numWays(["abcdefghij","abcdefghij","abcdefghij"], "aceg"), 81, 'Test 35');
test(numWays(["lloremipsumdolorsitamet","lloremipsumdolorsitamet","lloremipsumdolorsitamet"], "lorem"), 1458, 'Test 36');
test(numWays(["abacabadabacaba", "bacabadabacabab", "acabadabacababa"], "abacaba"), 13252, 'Test 37');
test(numWays(["abcabc", "bcabca", "cababc"], "abc"), 39, 'Test 38');
test(numWays(["aabbccddeeff", "bbaacceeddff", "ccaabbeedddf", "ddaabbccdeff"], "abcde"), 1496, 'Test 39');
test(numWays(["abacabad","acadaeaf","agahaiaj","akalaalaa"], "baa"), Error: list index out of range, 'Test 40');
test(numWays(["zzzz","zzzz","zzzz","zzzz","zzzz"], "zz"), 150, 'Test 41');
test(numWays(["abcdefgh","efghijkl","mnopqr","stuvwx","yzabcd"], "abcd"), 5, 'Test 42');
test(numWays(["zzzzzz","yyyyyy","xxxxxx","wwwwww","vvvvvv"], "zyxwv"), 6, 'Test 43');
test(numWays(["abcabcabcabc", "defdefdefdef", "ghighighighi", "jkljkljkljkl"], "adgj"), 1, 'Test 44');
test(numWays(["abcdefghij", "abcdefghij", "abcdefghij", "abcdefghij", "abcdefghij", "abcdefghij", "abcdefghij", "abcdefghij", "abcdefghij", "abcdefghij"], "abcdefghij"), 999999937, 'Test 45');
test(numWays(["algorithms","datastructures","programming"], "ds"), Error: list index out of range, 'Test 46');
test(numWays(["abcde", "fghij", "klmno", "pqrst"], "afkp"), 0, 'Test 47');
test(numWays(["zzzz","zzzz","zzzz","zzzz"], "zzz"), 256, 'Test 48');
test(numWays(["abcdefgh","efghijkl","mnopqr","stuvwx","yzabcd"], "ijkl"), 1, 'Test 49');
test(numWays(["xyzxyzxyzxyz","yzxyzyzyzx","zxyzxyzxyz"], "xyzxyz"), 770, 'Test 50');
test(numWays(["aabbccddeeff", "bbccddeeffgg", "ccddeeffgghh"], "abcdeffg"), 414, 'Test 51');
test(numWays(["abcdefghij", "abcdefghij", "abcdefghij", "abcdefghij"], "acfi"), 256, 'Test 52');
test(numWays(["abcdefgh","efghijkl","mnopqr","stuvwx","yzabcd"], "mnopqr"), 1, 'Test 53');
test(numWays(["hello","hello","hello","hello","hello"], "hello"), 3125, 'Test 54');
test(numWays(["aabbcc", "bbaacc", "ccaabb"], "abc"), 40, 'Test 55');
test(numWays(["banana", "banana", "banana", "banana"], "ban"), 192, 'Test 56');
test(numWays(["abcdefghi", "jklmnopqr", "stuvwxyz"], "adgt"), 0, 'Test 57');
test(numWays(["aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz","zzzzyyxwwvvuuttrrssqqponnmlkkjjiihhggffeeddccbaab","abcdefghijklmnopqrstuvwxyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"], "zzzzzzzzzz"), Error: list index out of range, 'Test 58');
test(numWays(["abcdef","bcdefg","cdefgh","defghi","efghij"], "abcde"), 1, 'Test 59');
test(numWays(["abcabcabc","abcabcabc","abcabcabc"], "abc"), 270, 'Test 60');
test(numWays(["mississippi", "mississippi", "mississippi"], "mississippi"), 177147, 'Test 61');
test(numWays(["mississippi", "mississippi", "mississippi", "mississippi", "mississippi", "mississippi"], "issipi"), 746496, 'Test 62');
test(numWays(["zzzzzzzzzz", "zzzzzzzzzz", "zzzzzzzzzz", "zzzzzzzzzz", "zzzzzzzzzz"], "zzzz"), 131250, 'Test 63');
test(numWays(["aabbcc","ddeeff","gghhii","jjkkll","mmnnoo"], "abcd"), 0, 'Test 64');
test(numWays(["hello","world","python","programming","challenge"], "how"), Error: list index out of range, 'Test 65');
test(numWays(["aaaaaaaaaa","aaaaaaaaaa","aaaaaaaaaa","aaaaaaaaaa"], "aaaa"), 53760, 'Test 66');
test(numWays(["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb","cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"], "abc"), Error: list index out of range, 'Test 67');
test(numWays(["zzzzzzzzzzzzzzzzzzzz","zzzzzzzzzzzzzzzzzzzz","zzzzzzzzzzzzzzzzzzzz"], "zzzz"), 392445, 'Test 68');
test(numWays(["abcdef","ghijkl","mnopqr","stuvwx","yzabcd"], "afg"), 0, 'Test 69');
test(numWays(["abcdefghij", "abcdefghij", "abcdefghij", "abcdefghij", "abcdefghij"], "acegi"), 3125, 'Test 70');
test(numWays(["abcdefghij","klmnopqrstu","vwxyzabcde","fghijklmno"], "fedcba"), Error: list index out of range, 'Test 71');
test(numWays(["abcdef","bcdefg","cdefgh","defghi","efghij"], "efghij"), 1, 'Test 72');
test(numWays(["abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"], "zyxwvutsrqponmlkjihgfedcba"), 1, 'Test 73');
test(numWays(["abacaba", "bacabab", "cacabac", "dacabad"], "abac"), 81, 'Test 74');
test(numWays(["zzzzzzzzzz","yyyyyyyyyy","xxxxxxxxxx","wwwwwwwwww","vvvvvvvvvv"], "zyxwv"), 252, 'Test 75');
test(numWays(["aaaaaaaaaa","bbbbbbbbbb","cccccccccc"], "abc"), 120, 'Test 76');
test(numWays(["abcdef","bcdefg","cdefgh","defghi","efghij"], "defg"), 15, 'Test 77');
test(numWays(["target","target","target","target","target"], "target"), 15625, 'Test 78');
test(numWays(["abcdefghij","jihgfedcba","abcdefghij","jihgfedcba"], "abcdefghij"), 1024, 'Test 79');
test(numWays(["xyzxyzxyz", "uvwuvwuvw", "mnopqmnopq"], "xum"), Error: list index out of range, 'Test 80');
test(numWays(["abcdefghij","klmnopqrstu","vwxyz"], "xyz"), Error: list index out of range, 'Test 81');
test(numWays(["abcdefghij", "klmnopqr", "stuvwxyz", "abcdefghij", "klmnopqr"], "mnop"), 16, 'Test 82');
test(numWays(["abacabad","acadaeaf","agahaiaj","akalaalaa"], "aaa"), Error: list index out of range, 'Test 83');
test(numWays(["banana","banana","banana","banana","banana"], "ban"), 375, 'Test 84');
test(numWays(["abcdefghij","abcdefghij","abcdefghij"], "abcdefghij"), 59049, 'Test 85');
test(numWays(["qwertyuiop", "asdfghjklz", "xcvbnm,./", "qwertyuiop"], "qzv"), Error: list index out of range, 'Test 86');
test(numWays(["aaaa", "abbb", "accc", "addd"], "abcd"), 4, 'Test 87');
test(numWays(["aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"], "abcdefghijklmnopqrstu"), 46480318, 'Test 88');
test(numWays(["abcdefg","abcdefg","abcdefg","abcdefg","abcdefg"], "abcdefg"), 78125, 'Test 89');
test(numWays(["hellohellohellohello","worldworldworldworld","pythonpythonpythonpython"], "python"), Error: list index out of range, 'Test 90');
test(numWays(["abcdefghijklmnop","qrstuvwxyzab","cdefghijklmnop","qrstuvwxyzab"], "abcde"), 1, 'Test 91');
test(numWays(["aaaaaa", "bbbbbb", "cccccc", "dddddd"], "abcd"), 15, 'Test 92');
test(numWays(["abcdefghijk","abcdefghij","abcdefghi","abcdefgh","abcdefg","abcdef","abcde","abcd","abc"], "abcdefg"), 1224720, 'Test 93');
test(numWays(["aabbccdd","aabbccdd","aabbccdd","aabbccdd"], "abcd"), 4096, 'Test 94');
test(numWays(["abcd", "abcf", "acdf", "adef"], "ace"), 4, 'Test 95');
test(numWays(["abcdefghij", "klmnopqr", "stuvwxyz", "abcdefghij", "klmnopqr"], "mnopqrst"), 0, 'Test 96');
test(numWays(["aaaaaaaabaaaaaa","baaaaaaaabaaaaa","caaaaaaabaaaaaa"], "aaaaaabaaaaaa"), 9920232, 'Test 97');
test(numWays(["abacabadabacaba", "bcbdbecbdbecb", "dcdcdcddcdcdc"], "abc"), 110, 'Test 98');
test(numWays(["abababababababab","bababababababa","abababababababab"], "abab"), 9394, 'Test 99');
test(numWays(["abcdef", "fedcba", "abcdef"], "abcdef"), 64, 'Test 100');
test(numWays(["abcdefgh","efghijkl","mnopqr","stuvwx","yzabcd"], "stuvwx"), 1, 'Test 101');
test(numWays(["qwerty","qwerty","qwerty","qwerty","qwerty"], "qwe"), 125, 'Test 102');
test(numWays(["aabbcc","bbccdd","ccddeeff","ddeeffgg","eeffgghh"], "abcde"), Error: list index out of range, 'Test 103');
test(numWays(["abcabcabc","defdefdef","ghighighi"], "adg"), 1, 'Test 104');
test(numWays(["abcdefghijk","abcdefghij","abcdefghi","abcdefgh","abcdefg","abcdef","abcde","abcd","abc"], "abc"), 729, 'Test 105');
test(numWays(["abcdefghij", "abcdefghij", "abcdefghij", "abcdefghij"], "abcdefghijabcdefghij"), 0, 'Test 106');
test(numWays(["aabbcc","ddeeff","gghhii","jjkkgg"], "abgi"), 4, 'Test 107');
test(numWays(["abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"], "zyxwvutsrqponmlkjihgfedcba"), 67108864, 'Test 108');
test(numWays(["abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyz"], "abcdefghijklmnopqrstuvwxyz"), 67108864, 'Test 109');
test(numWays(["aaaa","abab","acac","adad","aeae"], "aa"), 46, 'Test 110');
test(numWays(["programming","is","fun"], "pin"), 1, 'Test 111');
test(numWays(["sequence","sequence","sequence","sequence","sequence"], "seq"), 125, 'Test 112');
test(numWays(["abcd","abcd","abcd","abcd","abcd"], "abcd"), 625, 'Test 113');
test(numWays(["mississippi","mississippi","mississippi"], "ssss"), 81, 'Test 114');
test(numWays(["abcdef","ghijkl","mnopqr","stuvwx","yzabcd"], "abc"), 4, 'Test 115');
test(numWays(["abcdefghijkl", "mnopqrstuv", "wxyzabcdef", "ghijklmnop"], "mnop"), 5, 'Test 116');
test(numWays(["abcdefghijabcdefghij","jihgfedcbaabcdef","abcdefghijjihgfe"], "abcdefghij"), 3536, 'Test 117');
test(numWays(["abacaba","bcbcbcb","cacacac"], "abcabc"), 10, 'Test 118');
test(numWays(["aabbccddeeff", "gghhiijjkkll", "mmnnooppqqrr", "ssttuuvvwwxx"], "abcdefff"), 0, 'Test 119');
test(numWays(["abcde","abfgh","acjkl"], "abac"), 0, 'Test 120');
test(numWays(["algorithm","algorithm","algorithm","algorithm","algorithm"], "algo"), 625, 'Test 121');
test(numWays(["aaaaaaaaaa","aaaaaaaaab","aaaaaaaaac","aaaaaaaaad"], "aaa"), 5952, 'Test 122');
test(numWays(["abcdefgh","efghijkl","mnopqr","stuvwx","yzabcd"], "yzabcd"), 1, 'Test 123');
test(numWays(["abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij"], "abcdefghij"), 9765625, 'Test 124');
test(numWays(["abcdef", "ghijkl", "mnopqr", "stuvwx", "yzabcd"], "abcde"), 1, 'Test 125');
test(numWays(["abcdefg", "bcdefgh", "cdefghi"], "efg"), 10, 'Test 126');
test(numWays(["abcdefghij", "abcdefghij", "abcdefghij", "abcdefghij", "abcdefghij"], "abcdefghij"), 9765625, 'Test 127');
test(numWays(["racecar","racecar","racecar","racecar","racecar"], "race"), 625, 'Test 128');
test(numWays(["zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz","zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz","zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"], "zzzzzzzzzz"), 277520636, 'Test 129');
test(numWays(["abcdefghij","klmnopqrstu","vwxyzabcde","fghijklmno"], "aeiou"), Error: list index out of range, 'Test 130');
test(numWays(["abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd"], "abcdabcd"), 0, 'Test 131');
test(numWays(["abcabcabcabc","bcabcabcabca","cabcabcabcab"], "abcabc"), 924, 'Test 132');
test(numWays(["aabbccdd","bbaaddcc","ccddaabb","ddbbaacc"], "abcd"), 77, 'Test 133');
test(numWays(["aaaaaaaaa", "bbbbbbbbb", "ccccccccc", "ddddddddd", "eeeeeeeee", "fffffff", "ggggggggg", "hhhhhhhhh", "iiiiiiiii"], "abcdefghi"), 1, 'Test 134');
test(numWays(["zzzzzz", "zzzzzz", "zzzzzz"], "zzz"), 540, 'Test 135');
test(numWays(["thisisatest","anotherstring","stringmatching"], "string"), Error: list index out of range, 'Test 136');
test(numWays(["quickbrownfox", "quickbrownfox", "quickbrownfox"], "quickfox"), 6561, 'Test 137');
test(numWays(["abcdefghij", "abcdefghij", "abcdefghij"], "abcdefghij"), 59049, 'Test 138');
test(numWays(["abacabadabacaba", "bcbdbecbdbecb", "dcdcdcddcdcdc", "efefegfefegfe", "ghighighihighi"], "abcdefg"), 40, 'Test 139');
test(numWays(["abcdabcdabcd","abcdabcdabcd","abcdabcdabcd"], "abcd"), 1215, 'Test 140');
test(numWays(["abcdabcdabcd","bcdbcdbcdb","cdcdcdcdcd"], "abcdabcd"), 184, 'Test 141');
test(numWays(["abcdefgh","efghijkl","mnopqr","stuvwx","yzabcd"], "abcdef"), 1, 'Test 142');
test(numWays(["abcabcabc", "defdefdef", "ghighighi"], "adg"), 1, 'Test 143');
test(numWays(["abcdefg","hijklmn","opqrstu","vwxyzab","cdefghi"], "abcde"), 1, 'Test 144');
test(numWays(["abcdef", "ghijkl", "mnopqr"], "abcghi"), 0, 'Test 145');
test(numWays(["abcde","fghij","klmno","pqrst","uvwxy","zabcd"], "ace"), 4, 'Test 146');
test(numWays(["aaaaaaaaaa","bbbbbbbbbb","cccccccccc","dddddddddd","eeeeeeeeee"], "abcde"), 252, 'Test 147');
test(numWays(["zzzzzzzzzz", "zzzzzzzzzz", "zzzzzzzzzz", "zzzzzzzzzz"], "zzz"), 7680, 'Test 148');
test(numWays(["aabbcc", "ddeeff", "gghhii", "jjkkll"], "abcd"), 0, 'Test 149');
test(numWays(["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"], "abcde"), 1, 'Test 150');
test(numWays(["abcdefgh","efghijkl","mnopqr","stuvwx","yzabcd"], "efgh"), 5, 'Test 151');
test(numWays(["abcdefghijklmnopqrstuvwxyz","abcdefghijklmnopqrstuvwxyz","abcdefghijklmnopqrstuvwxyz"], "zyxwvut"), 0, 'Test 152');
test(numWays(["abcde","fghij","klmno","pqrst"], "afk"), 0, 'Test 153');
test(numWays(["leetcode", "leetcode", "leetcode", "leetcode"], "leet"), 256, 'Test 154');
test(numWays(["abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh", "abcdefgh"], "abcdefgh"), 390625, 'Test 155');
test(numWays(["thisisalongstring", "thisisalongstring", "thisisalongstring", "thisisalongstring"], "thisisalongstring"), 179869065, 'Test 156');
test(numWays(["zzzzzzzzzz", "zzzzzzzzzz", "zzzzzzzzzz", "zzzzzzzzzz"], "zzzz"), 53760, 'Test 157');
test(numWays(["qwert","qwerty","qwertyu","qwertyui","qwertyuiop"], "qwerty"), Error: list index out of range, 'Test 158');
test(numWays(["qwertyuiop","asdfghjklz","xcvbnm,./"], "asdf"), Error: list index out of range, 'Test 159');
test(numWays(["abcdefghij","abcdefghij","abcdefghij"], "afik"), 0, 'Test 160');
test(numWays(["abcdefghij", "abcdefghij", "abcdefghij", "abcdefghij"], "abcdefghij"), 1048576, 'Test 161');
test(numWays(["abcdefghij","abcdefghij","abcdefghij","abcdefghij","abcdefghij"], "abc"), 125, 'Test 162');
test(numWays(["mississippi","mississippi","mississippi"], "missi"), 3645, 'Test 163');
test(numWays(["abracadabra","abracadabra","abracadabra","abracadabra"], "abrac"), 1024, 'Test 164');
test(numWays(["hello","world","python","programming","language"], "python"), Error: list index out of range, 'Test 165');
test(numWays(["ababababab", "bababababa", "ababababab", "bababababa"], "abab"), 3360, 'Test 166');
test(numWays(["xylophone","xylophone","xylophone","xylophone","xylophone"], "xyl"), 125, 'Test 167');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

// Auto-mark DONE when all tests pass
if (!failed) {
  const path = require("path");
  const fs = require("fs");
  const dir = __dirname;
  const folder = path.basename(dir);
  if (!folder.startsWith("DONE-")) {
    const parent = path.dirname(dir);
    const newDir = path.join(parent, "DONE-" + folder);
    fs.renameSync(dir, newDir);
    const readme = path.join(newDir, "README.md");
    if (fs.existsSync(readme)) {
      let c = fs.readFileSync(readme, "utf-8");
      if (!c.includes("<!-- SOLVED -->")) {
        c = c.replace(/^(# .+)$/m, "$1 ✅\n<!-- SOLVED -->");
        fs.writeFileSync(readme, c);
      }
    }
    console.log("✅ DONE → " + "DONE-" + folder);
  }
}
