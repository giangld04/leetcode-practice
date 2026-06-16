// Test: 3291. Minimum Number Of Valid Strings To Form Target I
// 149 test cases from LeetCodeDataset
// Run: node test.js

const { minValidStrings } = require("./solution");

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

console.log("\n3291. Minimum Number Of Valid Strings To Form Target I\n");

test(minValidStrings(["abc"], "abcabc"), 2, 'Test 1');
test(minValidStrings(["ab", "ba"], "abab"), 2, 'Test 2');
test(minValidStrings(["a","b","c","d"], "abcdabcdabcd"), 12, 'Test 3');
test(minValidStrings(["abcde", "fghij", "klmno"], "abcdefghijklmno"), 3, 'Test 4');
test(minValidStrings(["z"], "zzzzzzzzzz"), 10, 'Test 5');
test(minValidStrings(["abababab","ab"], "ababaababa"), 2, 'Test 6');
test(minValidStrings(["abc", "abc", "abc"], "abcabcabc"), 3, 'Test 7');
test(minValidStrings(["a","aa","aaa"], "aaaaaa"), 2, 'Test 8');
test(minValidStrings(["hello","world"], "hello"), 1, 'Test 9');
test(minValidStrings(["abcdef"], "xyz"), -1, 'Test 10');
test(minValidStrings(["prefix","pre","fix"], "prefixfix"), 2, 'Test 11');
test(minValidStrings(["a","aa","aaa"], "aaaaaaaaaa"), 4, 'Test 12');
test(minValidStrings(["hello", "world"], "hello"), 1, 'Test 13');
test(minValidStrings(["aaa","aa","a"], "aaaaaa"), 2, 'Test 14');
test(minValidStrings(["aa", "bb", "cc"], "aabbcc"), 3, 'Test 15');
test(minValidStrings(["ab","bc","cd"], "abcd"), 2, 'Test 16');
test(minValidStrings(["abcd", "efgh", "ijkl"], "abcdefghijl"), -1, 'Test 17');
test(minValidStrings(["a", "b", "c"], "abc"), 3, 'Test 18');
test(minValidStrings(["hello","world"], "helloworld"), 2, 'Test 19');
test(minValidStrings(["a","ab","abc"], "abcabcabc"), 3, 'Test 20');
test(minValidStrings(["a","b","c"], "abc"), 3, 'Test 21');
test(minValidStrings(["abc", "def", "ghi"], "abcdef"), 2, 'Test 22');
test(minValidStrings(["prefix", "pre", "fix"], "prefixfix"), 2, 'Test 23');
test(minValidStrings(["hello", "world"], "world"), 1, 'Test 24');
test(minValidStrings(["a"], "aaaaa"), 5, 'Test 25');
test(minValidStrings(["a", "ab", "abc"], "abc"), 1, 'Test 26');
test(minValidStrings(["prefix","suffix"], "prefixsuffix"), 2, 'Test 27');
test(minValidStrings(["abc","aaaaa","bcdef"], "aabcdabc"), 3, 'Test 28');
test(minValidStrings(["abc", "def", "ghi", "jkl", "mno"], "abcdefghijklmno"), 5, 'Test 29');
test(minValidStrings(["a","ab","abc","abcd"], "abcdabcdabcd"), 3, 'Test 30');
test(minValidStrings(["prefix","pre","fix","suffix"], "prefixsuffix"), 2, 'Test 31');
test(minValidStrings(["abc","bca","cab"], "abcabcabcabc"), 4, 'Test 32');
test(minValidStrings(["aaa","aaaa","aaaaa","aaaaaa"], "aaaaaaaaaaaaaaaaaa"), 3, 'Test 33');
test(minValidStrings(["jump","jum","ju","j"], "jumpjumpjump"), 3, 'Test 34');
test(minValidStrings(["ab","ba","aba","bab","abab"], "ababbababababa"), 4, 'Test 35');
test(minValidStrings(["brown","brow","bro","br","b"], "brownbrownbrow"), 3, 'Test 36');
test(minValidStrings(["aaa", "aa", "a", "aaaa"], "aaaaaaaaa"), 3, 'Test 37');
test(minValidStrings(["abc", "def", "ghi", "jkl"], "abcdefghijk"), 4, 'Test 38');
test(minValidStrings(["abcdefghij","jihgfedcba","abcdefgh","hgfedcba"], "abcdefghijhgfedcbahgfedcba"), 3, 'Test 39');
test(minValidStrings(["abc","def","ghi","jkl","mno"], "abcdefghijklmnopqrstuvwxyza"), -1, 'Test 40');
test(minValidStrings(["lazy","laz","la","l"], "lazylazy"), 2, 'Test 41');
test(minValidStrings(["a","aa","aaa","aaaa","aaaaa"], "aaaaaaaaaaaaaaaaaa"), 4, 'Test 42');
test(minValidStrings(["one","two","three","four","five","six","seven","eight","nine","ten"], "onetwothreefourfivesixseveneightnineten"), 10, 'Test 43');
test(minValidStrings(["repeated","repeat","re","rep","repe"], "repeatedrepeated"), 2, 'Test 44');
test(minValidStrings(["abcd","bcd","cd","d"], "abcdbcdbcd"), 3, 'Test 45');
test(minValidStrings(["one","two","three"], "onetwothree"), 3, 'Test 46');
test(minValidStrings(["hello","world","hello","world"], "helloworldhello"), 3, 'Test 47');
test(minValidStrings(["xyz","zyx","yz","zx","yx"], "zyxzyxzyx"), 3, 'Test 48');
test(minValidStrings(["prefix","pre","fix","fixx","fixxx"], "prefixfixfixxxfixfixfixx"), 6, 'Test 49');
test(minValidStrings(["one","two","three","four"], "onetwothreefour"), 4, 'Test 50');
test(minValidStrings(["xyz","xy","x"], "xyzyzyxzyzyx"), -1, 'Test 51');
test(minValidStrings(["longprefix","longerprefix","longestprefix"], "longestprefixlongprefixlongerprefix"), 3, 'Test 52');
test(minValidStrings(["dog","do","d"], "dogdogdog"), 3, 'Test 53');
test(minValidStrings(["short","longer","longestword"], "shortlongerlongestwordshortlongerlongestwordshortlongerlongestword"), 9, 'Test 54');
test(minValidStrings(["abcd","abc","ab","a"], "abcabcabcabc"), 4, 'Test 55');
test(minValidStrings(["abcdefg","bcdefgh","cdefghi","defghij","efghijk"], "abcdefghijk"), 2, 'Test 56');
test(minValidStrings(["unique","words","only","here"], "uniquewordsonlyhere"), 4, 'Test 57');
test(minValidStrings(["abcdefgh","ijklmnop","qrstuvwx","yz"], "abcdefghijklmnopqrstuvwxyzyz"), 5, 'Test 58');
test(minValidStrings(["abab","baba","abba","baab","aaaa"], "ababbabaabbaab"), 4, 'Test 59');
test(minValidStrings(["hello","world","hello","world"], "helloworldhelloworld"), 4, 'Test 60');
test(minValidStrings(["longword","longerword","longestword"], "longwordlongerwordlongestwordlongestwordlongestword"), 5, 'Test 61');
test(minValidStrings(["hello","hell","he","h"], "hellohello"), 2, 'Test 62');
test(minValidStrings(["prefix", "prefixprefix", "prefixprefixprefix"], "prefixprefixprefixprefix"), 2, 'Test 63');
test(minValidStrings(["ab","abc","abcd"], "abcabcdab"), 3, 'Test 64');
test(minValidStrings(["aaa","aab","aac","aad"], "aaabaaacaaad"), 6, 'Test 65');
test(minValidStrings(["small","big","medium"], "smallbigmediumbig"), 4, 'Test 66');
test(minValidStrings(["one", "two", "three", "four"], "onetwothreefour"), 4, 'Test 67');
test(minValidStrings(["hello","world","hel","lo","wor","ld"], "helloworld"), 2, 'Test 68');
test(minValidStrings(["giraffe","gira","gir","gi","g"], "giraffegiraffe"), 2, 'Test 69');
test(minValidStrings(["a","aa","aaa","aaaa","aaaaa"], "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 8, 'Test 70');
test(minValidStrings(["one","on","o"], "ononeone"), 3, 'Test 71');
test(minValidStrings(["x","y","z","xy","yz","xz","xyz"], "xyzxyzxyz"), 3, 'Test 72');
test(minValidStrings(["prefix", "fix", "pre", "prefixfix"], "prefixprefix"), 2, 'Test 73');
test(minValidStrings(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], "abcdefghijklmnopqrstuvwxyz"), 26, 'Test 74');
test(minValidStrings(["prefix","pre","fix","prefixfix"], "prefixprefixfix"), 2, 'Test 75');
test(minValidStrings(["aabb","ab","aab","aa"], "aabbabaaababaab"), 6, 'Test 76');
test(minValidStrings(["pqr","pq","p"], "pqrpqppqrpqpp"), 7, 'Test 77');
test(minValidStrings(["abc","abcabc","abcabcabc","abcabcabcabc"], "abcabcabcabcabcabcabcabcabcabc"), 3, 'Test 78');
test(minValidStrings(["xyz", "xy", "x"], "xyzyxzyz"), -1, 'Test 79');
test(minValidStrings(["prefix","suffix","pre","fix","postfix"], "prefixpostfix"), 2, 'Test 80');
test(minValidStrings(["a", "b", "c", "d", "e"], "abcdeabcdeabcde"), 15, 'Test 81');
test(minValidStrings(["abcd","abcde","abcdef","abcdefg"], "abcdefgabcdefgabcdefg"), 3, 'Test 82');
test(minValidStrings(["abcd","bcde","cdef","defg"], "abcdefg"), 2, 'Test 83');
test(minValidStrings(["abcd", "abc", "ab", "a"], "abcdabc"), 2, 'Test 84');
test(minValidStrings(["abc","bcd","cde","def"], "abcdef"), 2, 'Test 85');
test(minValidStrings(["hello","hellohello","hellohellohello"], "hellohellohellohellohellohello"), 2, 'Test 86');
test(minValidStrings(["quick","qui","qu","q"], "quickquick"), 2, 'Test 87');
test(minValidStrings(["xyz","yz","z"], "xyzxyz"), 2, 'Test 88');
test(minValidStrings(["longword","long","lo","l"], "longwordlongwordlongword"), 3, 'Test 89');
test(minValidStrings(["panda","pan","pa","p"], "pandapanpapanda"), 4, 'Test 90');
test(minValidStrings(["abc","def","ghi","jkl"], "abcdefghijkl"), 4, 'Test 91');
test(minValidStrings(["abc","b","c"], "abcbabcbabc"), 5, 'Test 92');
test(minValidStrings(["repeated","repeat","rep","r"], "repeatedrepeatedrepeated"), 3, 'Test 93');
test(minValidStrings(["zebra","zeb","ze","z"], "zebrazebrazebra"), 3, 'Test 94');
test(minValidStrings(["abc","cba","bac"], "abcbacbac"), 3, 'Test 95');
test(minValidStrings(["a", "ab", "abc", "abcd"], "abcdabcdabcd"), 3, 'Test 96');
test(minValidStrings(["aaaa","aaa","aa","a"], "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 8, 'Test 97');
test(minValidStrings(["a","aa","aaa","aaaa"], "aaaaaaaaaaaa"), 3, 'Test 98');
test(minValidStrings(["ab","a","b"], "abababababab"), 6, 'Test 99');
test(minValidStrings(["aaaa","aaa","aa","a"], "aaaaaaaaaaaa"), 3, 'Test 100');
test(minValidStrings(["longprefix","prefix","fix","suffix"], "longprefixsuffix"), 2, 'Test 101');
test(minValidStrings(["fox","fo","f"], "foxfoxfoxfox"), 4, 'Test 102');
test(minValidStrings(["abcd","abc","ab","a"], "abcdabcaba"), 4, 'Test 103');
test(minValidStrings(["pqr","pq","p"], "ppppqqqrrr"), -1, 'Test 104');
test(minValidStrings(["prefix", "prefi", "pref", "pre", "pr"], "prefixprefix"), 2, 'Test 105');
test(minValidStrings(["cat","ca","c"], "catcatcatcat"), 4, 'Test 106');
test(minValidStrings(["prefix","pref","pre","p"], "prefixprefix"), 2, 'Test 107');
test(minValidStrings(["abc","bcd","cde","def"], "abcdefg"), -1, 'Test 108');
test(minValidStrings(["apple","banana","cherry"], "applebananaapple"), 3, 'Test 109');
test(minValidStrings(["partial","part","par","pa","p"], "partialpartparpap"), 5, 'Test 110');
test(minValidStrings(["abcd","abc","ab","a"], "abcdabcab"), 3, 'Test 111');
test(minValidStrings(["prefix","pre","fix","fixx"], "prefixprefixfixfixxfix"), 5, 'Test 112');
test(minValidStrings(["aaa","aa","a"], "aaaaaaaaaaaaaaaa"), 6, 'Test 113');
test(minValidStrings(["prefix","prefixing","pre","fix","fixing"], "prefixprefixfix"), 3, 'Test 114');
test(minValidStrings(["qwerty","werty","erty","rty","ty","y","yt","tyu"], "qwertytyutytutytutytutytutytutytutytutu"), -1, 'Test 115');
test(minValidStrings(["abac","bac","cab","abc"], "abacbacabc"), 3, 'Test 116');
test(minValidStrings(["over","ove","ov","o"], "overoverover"), 3, 'Test 117');
test(minValidStrings(["aaaaa","aaaa","aaa","aa","a"], "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 21, 'Test 118');
test(minValidStrings(["abcde","cdefg","efghi","fghij"], "abcdefghij"), 2, 'Test 119');
test(minValidStrings(["a", "b", "c", "d", "e"], "edcba"), 5, 'Test 120');
test(minValidStrings(["one","two","three"], "onetwothreeonetwo"), 5, 'Test 121');
test(minValidStrings(["abc","ab","a"], "abcabcabc"), 3, 'Test 122');
test(minValidStrings(["a","ab","abc","abcd"], "abcdabcd"), 2, 'Test 123');
test(minValidStrings(["hello","hi","h","he","hel"], "hellohellohi"), 3, 'Test 124');
test(minValidStrings(["xyz", "zyx", "yyz", "xzy"], "zyxzyxzyx"), 3, 'Test 125');
test(minValidStrings(["same","same","same"], "samesamesamesamesame"), 5, 'Test 126');
test(minValidStrings(["pqr","pr","qr","r","pq","q"], "pqrprqrpqr"), 4, 'Test 127');
test(minValidStrings(["test", "testing", "testcase"], "testtestingtestcase"), 3, 'Test 128');
test(minValidStrings(["abcd","bcd","cde","def","efg","fgh"], "abcdefg"), 2, 'Test 129');
test(minValidStrings(["abc", "abcd", "abcde"], "abcdeabcdeabcde"), 3, 'Test 130');
test(minValidStrings(["complex","words","example"], "complexwordscomplex"), 3, 'Test 131');
test(minValidStrings(["elephant","elepha","eleph","elep","ele","el","e"], "elephantelephant"), 2, 'Test 132');
test(minValidStrings(["abc", "bc", "c", "abcd"], "abcabcabc"), 3, 'Test 133');
test(minValidStrings(["xyz","zyx","yzx"], "xyzzyxyzzyx"), 4, 'Test 134');
test(minValidStrings(["xy","xyz","xyza","xyzabc"], "xyzabcxyzabcxyz"), 3, 'Test 135');
test(minValidStrings(["xyz","xy","x"], "xyzyxyzyx"), -1, 'Test 136');
test(minValidStrings(["a","b","c","d","e","f","g","h","i","j"], "abcdefghij"), 10, 'Test 137');
test(minValidStrings(["aaa","bbb","ccc"], "aaabbbccc"), 3, 'Test 138');
test(minValidStrings(["abc", "abcd", "ab", "bcde"], "abcdabcde"), 3, 'Test 139');
test(minValidStrings(["a","ab","abc","abcd","abcde"], "abcdeabcde"), 2, 'Test 140');
test(minValidStrings(["xyz","zyx","yxz","yxzyx"], "xyzzyxzyxzyxzyxzyx"), 6, 'Test 141');
test(minValidStrings(["zzz","zz","z"], "zzzzzzzzzzzzzzzzzzzz"), 7, 'Test 142');
test(minValidStrings(["z", "yz", "xyz", "wxyz"], "wxyzwxyzwxyz"), 3, 'Test 143');
test(minValidStrings(["abc","acb","bac","bca","cab","cba"], "abcacbabcabc"), 4, 'Test 144');
test(minValidStrings(["abcde","bcd","cde","efg"], "abcdecdefg"), 3, 'Test 145');
test(minValidStrings(["repeated","repeate","repea","repe","rep","re","r"], "repeatedrepeatedrepeated"), 3, 'Test 146');
test(minValidStrings(["aaaa", "aa", "a"], "aaaaaaaaaaaaaaaaaaaaaaaa"), 6, 'Test 147');
test(minValidStrings(["onetwo", "one", "two", "three"], "onetwothreeonetwo"), 3, 'Test 148');
test(minValidStrings(["abc","def","ghi","jkl"], "abcdefghijk"), 4, 'Test 149');

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
