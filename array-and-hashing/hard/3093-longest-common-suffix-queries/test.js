// Test: 3093. Longest Common Suffix Queries
// 90 test cases from LeetCodeDataset
// Run: node test.js

const { stringIndices } = require("./solution");

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

console.log("\n3093. Longest Common Suffix Queries\n");

test(stringIndices(["banana","mango","papaya"], ["ana","ango","aya"]), [0, 1, 2], 'Test 1');
test(stringIndices(["abcde","bcde","cde","de","e"], ["cde","de","e","a","b"]), [2, 3, 4, 4, 4], 'Test 2');
test(stringIndices(["xyz","zyx","zxy"], ["x","y","z"]), [1, 2, 0], 'Test 3');
test(stringIndices(["zzzzz","zzzz","zzz","zz","z"], ["zzzz","zzz","zz","z","a"]), [1, 2, 3, 4, 4], 'Test 4');
test(stringIndices(["a","ab","abc"], ["a","ab","abc"]), [0, 1, 2], 'Test 5');
test(stringIndices(["unique","suffix","words"], ["fix","ffix","uffix"]), [1, 1, 1], 'Test 6');
test(stringIndices(["abcd","bcd","xbcd"], ["cd","bcd","xyz"]), [1, 1, 1], 'Test 7');
test(stringIndices(["hello","world","python"], ["lo","rld","on"]), [0, 1, 2], 'Test 8');
test(stringIndices(["a","b","c"], ["d","e","f"]), [0, 0, 0], 'Test 9');
test(stringIndices(["abcdefgh","poiuygh","ghghgh"], ["gh","acbfgh","acbfegh"]), [2, 0, 2], 'Test 10');
test(stringIndices(["abcde","bcde","cde"], ["cde","de","e"]), [2, 2, 2], 'Test 11');
test(stringIndices(["same","same","same"], ["same","same","same"]), [0, 0, 0], 'Test 12');
test(stringIndices(["longestword","short","word"], ["word","short","longestword"]), [2, 1, 0], 'Test 13');
test(stringIndices(["apple","maple","orange"], ["le","ple","range"]), [0, 0, 2], 'Test 14');
test(stringIndices(["a","b","c"], ["a","b","c"]), [0, 1, 2], 'Test 15');
test(stringIndices(["abc","def","ghi"], ["abc","def","ghi"]), [0, 1, 2], 'Test 16');
test(stringIndices(["a","b","c","d"], ["a","b","c","d"]), [0, 1, 2, 3], 'Test 17');
test(stringIndices(["qwerty","werty","erty","rty","ty","y"], ["y","ty","rty","erty","werty","qwerty","ertyu","qwertyu"]), Error: ord[] expected a character, but string of length 7 found, 'Test 18');
test(stringIndices(["aaaaa","bbbbb","ccccc","abcde","bcdef","cdefg"], ["abcde","bcdef","cdefg","de","ef","f"]), [3, 4, 5, 3, 4, 4], 'Test 19');
test(stringIndices(["abcdef","defabc","abc","def","efg","fg","g"], ["abc","def","efg","fg","g","a","bcd","cde"]), [2, 3, 4, 5, 6, 6, 6, 6], 'Test 20');
test(stringIndices(["abcdefghijk","ghijklmno","ijklmnopq","jklmnopqr","klmnopqrs","lmnopqrst"], ["ijkl","mnop","nopq","opqr","pqrs","qrstu","rstuv","stuvw","tuvwx","uvwxy","vwxyz","wxyz","xyz","yz","z"]), [1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 21');
test(stringIndices(["aabbcc","bbcc","bcc","cc","c","aabbccdd","bbccdd","bccdd","ccdd","cdd","dd","d"], ["cc","dd","cdd","bcc","bbcc","aabbcc","xyz","abc","d","ccdd","aabbccdd"]), [3, 10, 9, 2, 1, 0, 4, 4, 11, 8, 5], 'Test 22');
test(stringIndices(["zzzzzzzzzzzzzzzz","zzzzzzzzzzzzzzz","zzzzzzzzzzzzzz","zzzzzzzzzzzzz","zzzzzzzzzzzz","zzzzzzzzzzz","zzzzzzzzzz","zzzzzzzzz","zzzzzzzz","zzzzzzz","zzzzzz","zzzzz","zzzz","zzz","zz","z",""], ["zzzzzzzzzzzzzzzz","zzzzzzzzzzzzzzz","zzzzzzzzzzzzzz","zzzzzzzzzzzzz","zzzzzzzzzzzz","zzzzzzzzzzz","zzzzzzzzzz","zzzzzzzzz","zzzzzzzz","zzzzzzz","zzzzzz","zzzzz","zzzz","zzz","zz","z","","abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15], 'Test 23');
test(stringIndices(["aaaaa","aaabaaa","aaacaaa","aaad","aa","a","aaeaaa"], ["aa","aaa","aaaa","aaaaa","aaab","aaac","aaad","aae"]), [4, 0, 0, 0, 5, 5, 3, 5], 'Test 24');
test(stringIndices(["apple","pple","ple","le","e","orange","range","ange","nge","ge","e"], ["ple","le","e","apple","orange","range","nge","ge"]), [2, 3, 4, 0, 5, 6, 8, 9], 'Test 25');
test(stringIndices(["abcd", "bcd", "cd", "d", ""], ["abcd", "bcd", "cd", "d", "", "a", "b", "c"]), [0, 1, 2, 3, 4, 4, 4, 4], 'Test 26');
test(stringIndices(["ababab","bababa","abab","bab","ab","b","a"], ["ab","bab","abab","bababa","ababab","ba","a"]), [4, 3, 2, 1, 0, 1, 6], 'Test 27');
test(stringIndices(["longestword","longest","long","lo","l"], ["word","st","ng","g","o","wordd","ngggg"]), [0, 1, 2, 2, 3, 0, 2], 'Test 28');
test(stringIndices(["abcd", "bcd", "bcd", "cd", "cd", "d"], ["cd", "bcd", "d", "a", "ab", "abcd"]), [3, 1, 5, 5, 5, 0], 'Test 29');
test(stringIndices(["a","aa","aaa","aaaa","aaaaa"], ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa"]), [0, 1, 2, 3, 4, 4, 4], 'Test 30');
test(stringIndices(["prefix", "prefixx", "prefixxx", "prefixxxx"], ["fix", "xfix", "xxfix", "xxxfix", "xxxxfix", "prefix"]), [0, 0, 0, 0, 0, 0], 'Test 31');
test(stringIndices(["abcd","bcd","cd","d","abcdabcd","bcdbcd","cdcd","dd","abcdabcde"], ["abcd","bcd","cd","d","abcdabcd","bcdbcd","cdcd","dd","e","abcdabcde","de","cde","bcde"]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8], 'Test 32');
test(stringIndices(["abcdexyz","bcdexyz","cdexyz","dexyz","exyz","xyz"], ["xyz","exyz","dexyz","cdexyz","bcdexyz","abcdexyz","z"]), [5, 4, 3, 2, 1, 0, 5], 'Test 33');
test(stringIndices(["longestword","longestwor","longestwo","longestw","longest","longes","longe","long","lon","lo","l"], ["longestword","longestwor","longestwo","longestw","longest","longes","longe","long","lon","lo","l","abc"]), Error: ord[] expected a character, but string of length 3 found, 'Test 34');
test(stringIndices(["abcdexyz", "bcdexyz", "xbcdexyz", "abcdexyz"], ["cdexyz", "bcdexyz", "xyz", "abcdexyz"]), [1, 1, 1, 0], 'Test 35');
test(stringIndices(["hello","world","hello_world","world_hello","hold","old","ld","d"], ["hello","world","hello_world","hold","old","ld","d","o"]), [0, 1, 2, 4, 5, 6, 7, 0], 'Test 36');
test(stringIndices(["apple", "orange", "banana", "grape", "pineapple"], ["apple", "orange", "banana", "grape", "pineapple", "pe", "e"]), [0, 1, 2, 3, 4, 3, 0], 'Test 37');
test(stringIndices(["xyz","yz","z","wxyz","vwxyz"], ["z","yz","xyz","wxyz","vwxyz","wxyzz"]), [2, 1, 0, 3, 4, 2], 'Test 38');
test(stringIndices(["aaaa","aaab","aaac","aaba","aabb","aabc","aaca","aacc","abaa","abab","abac","abba","abbb","abbc","abca","abcb","abcc","acaa","acab","acac","acba","acbb","acbc","acca","accb","accc"], ["aaa","aab","aac","aba","abb","abc","aca","acc","baa","bab","bac","bba","bbb","bbc","bca","bcb","bcc","caa","cab","cac","cba","cbb","cbc","cca","ccb","ccc","a","b","c","aa","ab","ac","ba","bb","bc","ca","cb","cc"]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 1, 2, 0, 1, 2, 3, 4, 5, 6, 15, 7], 'Test 39');
test(stringIndices(["example","samples","examples","sampless"], ["ple","les","ample","sample","samples","examples","sampless"]), [0, 1, 0, 0, 1, 2, 3], 'Test 40');
test(stringIndices(["abcdefghij", "abcdefghijk", "abcdefgh", "abcdefg", "abcde", "abcd"], ["defg", "efgh", "fghi", "ghij", "hijk", "ijkl"]), [3, 2, 5, 0, 1, 5], 'Test 41');
test(stringIndices(["abcdefghij","bcdefghij","cdefghij","defghij","efghij","fghij","ghij","hij","ij","j"], ["ghij","hij","ij","j","k","abcdefghij","bcdefghij","cdefghij","defghij"]), [6, 7, 8, 9, 9, 0, 1, 2, 3], 'Test 42');
test(stringIndices(["zxcvbn","xcvbn","cvbn","vbn","bn","n"], ["n","bn","vbn","cvbn","xcvbn","zxcvbn","mnbvcx","cvb"]), Error: ord[] expected a character, but string of length 3 found, 'Test 43');
test(stringIndices(["aabbcc","bbaacc","ccaabb","aabb","bbaa","ccaac","aac","ac","c"], ["aabbcc","bbaacc","ccaabb","aabb","bbaa","ccaac","aac","ac","c","aa","bb","cc"]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 4, 3, 0], 'Test 44');
test(stringIndices(["aaaaa","aaabb","aabbb","abbbb","bbbbb","bbbbc","bbbcc","bbccc","bcccc","ccccc"], ["ccccc","bbbbb","aaaaa","bbbcc","aaabb","abbbb","bbbbc","bcccc","bbccc","aabb","bbbb","bbb","bb","b","c"]), Error: ord[] expected a character, but string of length 2 found, 'Test 45');
test(stringIndices(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 46');
test(stringIndices(["banana","anana","nana","ana","na","a"], ["ana","na","a","anana","nana","banana","bana","ananaa"]), [3, 4, 5, 1, 2, 0, 3, 5], 'Test 47');
test(stringIndices(["abcdefg","defg","efg","fg","g"], ["defg","efg","fg","g","abcdefg"]), [1, 2, 3, 4, 0], 'Test 48');
test(stringIndices(["repeated", "repeatedword", "repeat", "rep", "re", "r"], ["repeated", "repeatedword", "repeat", "rep", "re", "r", "ed", "at", "t", "e", ""]), [0, 1, 2, 3, 4, 5, 0, 2, 2, 4, 5], 'Test 49');
test(stringIndices(["suffix","fix","suffixfix","suffixsuffix","ffix","fixfix","suffixfixfix"], ["suffix","fix","suffixfix","suffixsuffix","ffix","fixfix","suffixfixfix","ff","ix","x"]), [0, 1, 2, 3, 4, 5, 6, 1, 1, 1], 'Test 50');
test(stringIndices(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","abcdefghijk","lmnopqr","stuvwxyz"], ["mnopqr","lmnopqr","stuv","xyz","pqrs"]), [3, 3, 3, 4, 3], 'Test 51');
test(stringIndices(["qwerty","werty","erty","rty","ty","y","qwertyuiop","wertyuiop","ertyuiop","rtyuiop","tyuiop","yuiop"], ["ty","yuiop","ertyuiop","qwertyuiop","werty","erty","rty","qwerty","uiop","op","p","xyz"]), Error: ord[] expected a character, but string of length 3 found, 'Test 52');
test(stringIndices(["unique","uniq","un","u"], ["ue","iq","n","u","uniq","unique","nique"]), [0, 1, 2, 3, 1, 0, 0], 'Test 53');
test(stringIndices(["short","shorter","shortest","shortestest"], ["est","test","st","rtest","shortestestest","shorter","shortest"]), [2, 2, 2, 2, 3, 1, 2], 'Test 54');
test(stringIndices(["hello","world","programming","worldwide","program"], ["gram","ing","world","hello","pro","gramming"]), [4, 2, 1, 0, 0, 2], 'Test 55');
test(stringIndices(["algorithm","logarithm","rhythm","symptom","lymphom"], ["rhythm","symptom","lymphom","algorithm","logarithm","thm","m"]), Error: ord[] expected a character, but string of length 3 found, 'Test 56');
test(stringIndices(["suffix","prefix","suffixprefix","prefixsuffix"], ["fix","fixx","suffix","prefix","uffix","frefix","sufix"]), [0, 0, 0, 1, 0, 1, 0], 'Test 57');
test(stringIndices(["xyz","zyx","yxz","zxz","xzy","zyy"], ["xyz","zyx","yz","zx","xz","yy"]), [0, 1, 0, 1, 2, 5], 'Test 58');
test(stringIndices(["aaaa", "aaa", "aa", "a", ""], ["aaaa", "aaa", "aa", "a", "", "b"]), [0, 1, 2, 3, 4, 4], 'Test 59');
test(stringIndices(["a","aa","aaa","aaaa","aaaaa"], ["a","aa","aaa","aaaa","aaaaa","aaaaaa"]), [0, 1, 2, 3, 4, 4], 'Test 60');
test(stringIndices(["abcdefg","defghij","efghijk","fghijkl","ghijklm"], ["fgh","ghijk","ijkl","jklm","mnop"]), [0, 2, 3, 4, 0], 'Test 61');
test(stringIndices(["suffix", "suffixx", "suffixxx", "suffixxxx"], ["ffix", "xffix", "xxffix", "xxxffix", "xxxxffix", "suffix"]), [0, 0, 0, 0, 0, 0], 'Test 62');
test(stringIndices(["abcdefghij","bcdefghij","cdefghij","defghij","efghij","fghij","ghij","hij","ij","j"], ["abcdefghij","efghij","fghij","ghij","hij","ij","j","abcdefghijk","defghijk","fghijk","ghijk","hijk","ijk","jk","k"]), [9], 'Test 63');
test(stringIndices(["sameprefixsame","sameprefix","same","different"], ["sameprefixsame","sameprefix","same","different","sameprefixsame","sameprefix","same","different"]), [0, 1, 2, 3, 0, 1, 2, 3], 'Test 64');
test(stringIndices(["suffix","suffixes","suffices","suffixing","suffixied"], ["fix","fixes","fices","fixing","fixied","suffix","suffixes"]), [0, 1, 2, 3, 4, 0, 1], 'Test 65');
test(stringIndices(["longestword","longword","long","lon","lo","l"], ["ongestword","ongword","ong","on","o","l","x"]), [0, 1, 2, 3, 4, 5, 5], 'Test 66');
test(stringIndices(["one","two","three","four","five"], ["ne","wo","ree","our","ive","ven","on"]), [0, 1, 2, 3, 4, 0, 0], 'Test 67');
test(stringIndices(["abcabcabc","bcabcabc","cabcabc","abcabc","bcabc","cabc","abc","bc","c","a","b","c"], ["abc","bc","c","a","b","c","abcabc","bcabc","cabc","abcabcabc","xyz","zzz","aaaaa","bbbbb","ccccc","dddd","eeeee","ffffff","gggg","hhhhh","iiiii","jjjjj","kkkkk","lllll","mmmmm","nnnnn","ooooo","ppppp","qqqqq","rrrrr","sssss","ttttt","uuuuu","vvvvv","wwwww","xxxxx","yyyyy","zzzzz"]), [6, 7, 8, 9, 10, 8, 3, 4, 5, 0, 8, 8, 9, 10, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8], 'Test 68');
test(stringIndices(["aabbcc","bbcc","bcc","cc","c"], ["aabbcc","bbcc","bcc","cc","c","d","e","f"]), [0, 1, 2, 3, 4, 4, 4, 4], 'Test 69');
test(stringIndices(["apple","banana","grape","pineapple","orange"], ["apple","banana","grape","pineapple","orange","le","ane","e"]), [0, 1, 2, 3, 4, 0, 0, 0], 'Test 70');
test(stringIndices(["longstring","longstr","longs","long","lo","l"], ["longstr","longs","long","lo","l","o","ongstr","ngstr","gstr","str"]), [1, 2, 3, 4, 5, 4, 1, 1, 1, 1], 'Test 71');
test(stringIndices(["xyzabc","yabc","xabc","abc","bc","c"], ["abc","c","bc","xyzabc","yabc","xabc"]), [3, 5, 4, 0, 1, 2], 'Test 72');
test(stringIndices(["aabbcc","bbaa","ccaa","aab","bb","cc"], ["aabbcc","bbaa","ccaa","aab","bb","cc","aabb","bbcc","aa","b","c"]), [0, 1, 2, 3, 4, 5, 4, 0, 1, 4, 5], 'Test 73');
test(stringIndices(["abcdefghij","bcdefghij","cdefghij","defghij","efghij","fghij","ghij","hij","ij","j"], ["ij","fghij","ghij","hij","ij","j","abcdef","xyz","zzz","abcdefghij"]), [8, 5, 6, 7, 8, 9, 9, 9, 9, 0], 'Test 74');
test(stringIndices(["abcabcabcabc","bcabcabcabc","cabcabcabc","abcabcabc","bcabcabc","cabcabc","abcabc","bcabc","cabc","abc","bc","c"], ["abcabcabcabc","bcabcabcabc","cabcabcabc","abcabcabc","bcabcabc","cabcabc","abcabc","bcabc","cabc","abc","bc","c","d","e","f"]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11, 11], 'Test 75');
test(stringIndices(["suffix","suffixmatch","suffixmatchlong","suffixmatchlongest"], ["suffix","match","long","longest","suffixmatch","suffixmatchlong","suffixmatchlongest"]), [0, 1, 2, 3, 1, 2, 3], 'Test 76');
test(stringIndices(["racecar","civic","level","rotor","deified"], ["car","civic","vel","rotor","deified","cara","ivic"]), [0, 1, 2, 3, 4, 1, 1], 'Test 77');
test(stringIndices(["abcdefgh","abcdefg","abcde","abcd","abc","ab","a"], ["abcd","abc","ab","a","z","bcd","cde"]), [3, 4, 5, 6, 6, 3, 2], 'Test 78');
test(stringIndices(["xyzabc", "yzabc", "zabc", "abc", "c"], ["zabc", "abc", "c", "xyzabc", "y"]), [2, 3, 4, 0, 4], 'Test 79');
test(stringIndices(["abcdexyz","bcdexyz","cdexyz","dexyz","exyz","xyz","yz","z"], ["abcdexyz","bcdexyz","cdexyz","dexyz","exyz","xyz","yz","z","xyz","exyz","dexyz","cdexyz","bcdexyz","abcdexyz"]), [0, 1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2, 1, 0], 'Test 80');
test(stringIndices(["apple", "bpple", "cppla", "dppla", "epple"], ["pple", "apple", "bpple", "cppla", "dppla", "epple"]), [0, 0, 1, 2, 3, 4], 'Test 81');
test(stringIndices(["aaaa", "bbbb", "cccc", "dddd", "eeee"], ["aaaa", "bbbb", "cccc", "dddd", "eeee", "aaa", "bbb", "ccc", "ddd", "eee", "aa", "bb", "cc", "dd", "ee", "a", "b", "c", "d", "e"]), [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4], 'Test 82');
test(stringIndices(["abcd", "bcd", "cd", "d"], ["abcd", "bcd", "cd", "d", "abcd", "bcd", "cd", "d"]), [0, 1, 2, 3, 0, 1, 2, 3], 'Test 83');
test(stringIndices(["zzzzz","zzzz","zzz","zz","z"], ["zzzzz","zzzz","zzz","zz","z","a","b","c"]), [0, 1, 2, 3, 4, 4, 4, 4], 'Test 84');
test(stringIndices(["thisisatest","isisatest","sisatest","isatest","satest","atest","test","est","st","t"], ["test","est","st","t","a","b","c","d","e","f"]), [6, 7, 8, 9, 9, 9, 9, 9, 9, 9], 'Test 85');
test(stringIndices(["longword", "longerword", "longestword", "shortword", "tinyword"], ["word", "longword", "longerword", "longestword", "shortword", "tinyword", "long", "longer", "longest", "short", "tiny", "o", "r", "t", "w", "d"]), [0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 86');
test(stringIndices(["unique", "distinct", "separate", "different", "uniquely"], ["unique", "distinct", "separate", "different", "uniquely", "un"]), [0, 1, 2, 3, 4, 0], 'Test 87');
test(stringIndices(["longwordwithsuffix","wordwithsuffix","withsuffix","suffix","fix","ix","x"], ["suffix","fix","ix","x","y","z","wordwithsuffix","longwordwithsuffix"]), [3, 4, 5, 6, 6, 6, 1, 0], 'Test 88');
test(stringIndices(["longestword", "longest", "long", "lon", "lo", "l"], ["longestword", "longest", "longestword", "lon", "lo", "xyz"]), [0, 1, 0, 3, 4, 5], 'Test 89');
test(stringIndices(["uniqueword","anotherword","commonword","similarword","dissimilarword"], ["word","similar","dissimilar","unique","another","common"]), [0, 0, 0, 0, 0, 0], 'Test 90');

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
