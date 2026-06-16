// Test: 1967. Number Of Strings That Appear As Substrings In Word
// 122 test cases from LeetCodeDataset
// Run: node test.js

const { numOfStrings } = require("./solution");

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

console.log("\n1967. Number Of Strings That Appear As Substrings In Word\n");

test(numOfStrings(["a","b","c"], "aaaaabbbbb"), 2, 'Test 1');
test(numOfStrings(["aa","bb","cc"], "abcabc"), 0, 'Test 2');
test(numOfStrings(["a","abc","bc","d"], "abc"), 3, 'Test 3');
test(numOfStrings(["aaa"], "aaaaa"), 1, 'Test 4');
test(numOfStrings(["abc"], "abc"), 1, 'Test 5');
test(numOfStrings(["xyz","xy","yz"], "xyz"), 3, 'Test 6');
test(numOfStrings(["hello","world"], "helloworld"), 2, 'Test 7');
test(numOfStrings(["a","a","a"], "ab"), 3, 'Test 8');
test(numOfStrings(["z"], "abcz"), 1, 'Test 9');
test(numOfStrings(["a","b","c","d","e"], "edcba"), 5, 'Test 10');
test(numOfStrings(["hello","world","foo","bar"], "helloworldfoo"), 3, 'Test 11');
test(numOfStrings(["repeated","repeat","eat"], "repeatedrepeat"), 3, 'Test 12');
test(numOfStrings(["this","is","a","test"], "thisisatest"), 4, 'Test 13');
test(numOfStrings(["abc","cab","bac"], "abacabcabc"), 3, 'Test 14');
test(numOfStrings(["aabb","bbcc","ccdd","ddaa"], "aabbccdd"), 3, 'Test 15');
test(numOfStrings(["a","ab","abc","abcd"], "abcd"), 4, 'Test 16');
test(numOfStrings(["a","aa","aaa","aaaa"], "aaaaaaaa"), 4, 'Test 17');
test(numOfStrings(["overlapping","lapping","lappingo","verlapping"], "overlappinglappingoverlappingoverlapping"), 4, 'Test 18');
test(numOfStrings(["hello","world","python","programming"], "helloworldpythonprogramming"), 4, 'Test 19');
test(numOfStrings(["xyz","zyx","zxy"], "xyzzyxzyxzxyzyx"), 3, 'Test 20');
test(numOfStrings(["xy","yx","xyz","zyx"], "xyzzyx"), 4, 'Test 21');
test(numOfStrings(["lorem","ipsum","dolor","sit","amet"], "loremipsumdolorsitamet"), 5, 'Test 22');
test(numOfStrings(["abcd","bcde","cdef","defg","efgh","fghi","ghij","hijk","ijkl","jklm","klmn","lmno","mnop","nopq","opqr","pqrs","qrst","rstu","stuv","tuvw","uvwx","vwxy","wxyz"], "abcdefghijklmnopqrstuvwxyz"), 23, 'Test 23');
test(numOfStrings(["mnop","nopq","opqr","pqrs","qrst"], "mnopqrstu"), 5, 'Test 24');
test(numOfStrings(["quick","brown","fox"], "thequickbrownfox"), 3, 'Test 25');
test(numOfStrings(["abcd","abcde","abcdef"], "abcdefgabcdefg"), 3, 'Test 26');
test(numOfStrings(["xyz","zyx","yxz","xzy","zyx"], "zyxzyxzyxzyx"), 4, 'Test 27');
test(numOfStrings(["ab","ba","aba","bab"], "abababab"), 4, 'Test 28');
test(numOfStrings(["aaaa","bbbb","cccc"], "aaaabbbbccccaaaabbbbcccc"), 3, 'Test 29');
test(numOfStrings(["aba", "bba", "aaa", "bbb"], "abababababa"), 1, 'Test 30');
test(numOfStrings(["repeated","pattern","substring","string"], "repeatedpatternsubstringstring"), 4, 'Test 31');
test(numOfStrings(["ab", "bc", "cd", "de", "ef", "fg"], "abcdefg"), 6, 'Test 32');
test(numOfStrings(["repeated","substring","example"], "repeatedsubstringexample"), 3, 'Test 33');
test(numOfStrings(["overlap","lap","ap","p"], "overlaplapap"), 4, 'Test 34');
test(numOfStrings(["hello", "world", "python", "programming"], "programmingworldpython"), 3, 'Test 35');
test(numOfStrings(["longer","substrings","to","check"], "thisisalongersubstringtocheck"), 3, 'Test 36');
test(numOfStrings(["unique","un","iq"], "uniqueiq"), 3, 'Test 37');
test(numOfStrings(["substring","string","sub"], "thisisjustasubstringexample"), 3, 'Test 38');
test(numOfStrings(["hello","world","hello","world"], "helloworldhello"), 4, 'Test 39');
test(numOfStrings(["aaa","aa","a"], "aaaaaaaaaaaa"), 3, 'Test 40');
test(numOfStrings(["z","zz","zzz"], "zzzzzzzzz"), 3, 'Test 41');
test(numOfStrings(["ab","bc","cd","de","ef"], "abcdef"), 5, 'Test 42');
test(numOfStrings(["123", "234", "345"], "1234567890"), 3, 'Test 43');
test(numOfStrings(["a","b","c","d","e","f","g","h","i","j"], "abcdefghij"), 10, 'Test 44');
test(numOfStrings(["a", "b", "c", "d", "e", "f"], "abcdef"), 6, 'Test 45');
test(numOfStrings(["a","ab","abc","abcd","abcde"], "abcde"), 5, 'Test 46');
test(numOfStrings(["one","two","three"], "onetwothreeonetwothree"), 3, 'Test 47');
test(numOfStrings(["aaa","aab","aba","baa","aabaa","aaaba","aaba","baaa"], "aaaabaaaa"), 8, 'Test 48');
test(numOfStrings(["hello","world","helloworld"], "helloworld"), 3, 'Test 49');
test(numOfStrings(["quick","brown","fox"], "thequickbrownfoxjumps"), 3, 'Test 50');
test(numOfStrings(["xyz","zyx","yzz","zzz"], "xyzzyzyzzz"), 3, 'Test 51');
test(numOfStrings(["aaa","bbb","ccc","abc","bca","cab"], "abcabcabc"), 3, 'Test 52');
test(numOfStrings(["abcd","dcba","abcdabcd"], "abcdabcdabcdabcd"), 2, 'Test 53');
test(numOfStrings(["a","ab","abc","abcd","abcde"], "abcdefghijklmnopqrstuvwxyz"), 5, 'Test 54');
test(numOfStrings(["abc","def","ghi","jkl"], "abcdefghijkl"), 4, 'Test 55');
test(numOfStrings(["aaaaa","bbbbb","ccccc","ddddd"], "abcdeabcdeabcdeabcde"), 0, 'Test 56');
test(numOfStrings(["ab","bc","cd","de"], "abcdefg"), 4, 'Test 57');
test(numOfStrings(["pattern","matching","substrings"], "matchingpatternsubstring"), 2, 'Test 58');
test(numOfStrings(["ab","ba","abab","baba"], "abababababababab"), 4, 'Test 59');
test(numOfStrings(["same","sub","string","test","case"], "substringtestcase"), 4, 'Test 60');
test(numOfStrings(["aaaa","bbbb","cccc","ddd"], "aaaabbbbccccddd"), 4, 'Test 61');
test(numOfStrings(["apple","banana","cherry"], "cherrybananaapple"), 3, 'Test 62');
test(numOfStrings(["cat","dog","bird","fish"], "fishdogcatbird"), 4, 'Test 63');
test(numOfStrings(["python","java","cpp"], "pythonjavacpp"), 3, 'Test 64');
test(numOfStrings(["aaa","bbb","ccc","ddd"], "aaabbbcccddd"), 4, 'Test 65');
test(numOfStrings(["test","sett","best"], "bestsett"), 2, 'Test 66');
test(numOfStrings(["abc","bca","cab","abcabc"], "abcabcabcabc"), 4, 'Test 67');
test(numOfStrings(["aaa","aa","a"], "aaaaaaaaaa"), 3, 'Test 68');
test(numOfStrings(["quick","brown","fox","jump","over","lazy","dog"], "thequickbrownfoxjumpsoverthelazydog"), 7, 'Test 69');
test(numOfStrings(["abc","cab","bca"], "abcabcabcabc"), 3, 'Test 70');
test(numOfStrings(["xyz","zyx","xy","yx","xzy","yzx"], "zyxwvutsrqponmlkjihgfedcba"), 2, 'Test 71');
test(numOfStrings(["aaa","bbb","ccc","ddd","eee","fff"], "abcdefabcdefabcdef"), 0, 'Test 72');
test(numOfStrings(["abc","def","ghi"], "defabc"), 2, 'Test 73');
test(numOfStrings(["quick","brown","fox"], "thequickbrownfoxjumpsoverthelazydog"), 3, 'Test 74');
test(numOfStrings(["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"], "abcdef ghijklmnopqrstuvwxyz"), 9, 'Test 75');
test(numOfStrings(["aaa","aa","a"], "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 3, 'Test 76');
test(numOfStrings(["a","b","c","d","e","f","g","h","i","j"], "abcdefghijabcdefghij"), 10, 'Test 77');
test(numOfStrings(["test", "string", "finding", "substring"], "teststringfindingsubstring"), 4, 'Test 78');
test(numOfStrings(["aa","aaa","aaaa"], "aaaa"), 3, 'Test 79');
test(numOfStrings(["short","shot","dot"], "shortshot"), 2, 'Test 80');
test(numOfStrings(["foo","bar","foobar","barfoo"], "foobarbarfoobarfoo"), 4, 'Test 81');
test(numOfStrings(["aba","bab","aba"], "ababababa"), 3, 'Test 82');
test(numOfStrings(["hello","world","python"], "pythonworldhello"), 3, 'Test 83');
test(numOfStrings(["abc","acb","bac","bca","cab","cba"], "abcacbcbacbacbcbac"), 5, 'Test 84');
test(numOfStrings(["banana","ana","nan","ban"], "banananana"), 4, 'Test 85');
test(numOfStrings(["abc","abcd","abcde"], "abcdefgh"), 3, 'Test 86');
test(numOfStrings(["abcd","dcba","abcd"], "abcdcbaabcd"), 3, 'Test 87');
test(numOfStrings(["aaaa","bbbb","cccc","dddd"], "abcdeabcdeabcde"), 0, 'Test 88');
test(numOfStrings(["longpattern","long","pattern"], "longpatternlongpattern"), 3, 'Test 89');
test(numOfStrings(["ab","bc","cd","de","ef","fg","gh","hi","ij"], "abcdefghij"), 9, 'Test 90');
test(numOfStrings(["abc","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz"], "abcdefghijklmnopqrstuvwxyz"), 24, 'Test 91');
test(numOfStrings(["zzz","zzzz","zzzzz"], "zzzzzzzzzz"), 3, 'Test 92');
test(numOfStrings(["ab","bc","cd","de"], "abcde"), 4, 'Test 93');
test(numOfStrings(["abc", "bcd", "cde", "def"], "abcdefg"), 4, 'Test 94');
test(numOfStrings(["abc","abcd","abcde","abcdef"], "abcdefg"), 4, 'Test 95');
test(numOfStrings(["test","tset","sett","settset"], "testsettsettset"), 4, 'Test 96');
test(numOfStrings(["small","medium","large","extra","huge"], "smallmediumlargeextrahuge"), 5, 'Test 97');
test(numOfStrings(["pattern","tern","ternary","ternarysearch"], "binarysearchternarysearch"), 3, 'Test 98');
test(numOfStrings(["xyz","zyx","yzx"], "xyzzyxzyxzyx"), 2, 'Test 99');
test(numOfStrings(["abcd","efgh","ijkl"], "efghijklabcd"), 3, 'Test 100');
test(numOfStrings(["abc","cab","bac","bca","acb","cba"], "abcabcabc"), 3, 'Test 101');
test(numOfStrings(["abc","abcabc","abcabcabc"], "abcabcabcabc"), 3, 'Test 102');
test(numOfStrings(["aaa", "bbb", "ccc"], "abacabadabc"), 0, 'Test 103');
test(numOfStrings(["one","two","three","onetwothree"], "onetwothreeonetwothree"), 4, 'Test 104');
test(numOfStrings(["search","sear","arch"], "searchingthesearchinthesearch"), 3, 'Test 105');
test(numOfStrings(["overlap","lap","lapping"], "lapping"), 2, 'Test 106');
test(numOfStrings(["abc","def","ghi","jkl"], "abcdefghijklmnopqrstuvwxyz"), 4, 'Test 107');
test(numOfStrings(["abc","def","ghi","jkl"], "abcdefghijk"), 3, 'Test 108');
test(numOfStrings(["xyz", "zyx", "wxy", "uvw"], "xyzzyxwxyuvw"), 4, 'Test 109');
test(numOfStrings(["abc","def","ghi","jkl"], "abcdefghij"), 3, 'Test 110');
test(numOfStrings(["abcd","efgh","ijkl","mnop","qrst","uvwx","yz"], "abcdefghijklmnopqrstuvwxyz"), 7, 'Test 111');
test(numOfStrings(["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"], "abcdefghijklmnopqrstuvwxyz"), 9, 'Test 112');
test(numOfStrings(["zz", "zzz", "zzzz"], "zzzzzzzzzz"), 3, 'Test 113');
test(numOfStrings(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], "zyxwvutsrqponmlkjihgfedcba"), 26, 'Test 114');
test(numOfStrings(["example","ample","mple","ple","le","e"], "exampleexampleexample"), 6, 'Test 115');
test(numOfStrings(["ab","ba","ac","ca","bc","cb"], "abcbaacbba"), 5, 'Test 116');
test(numOfStrings(["abc","def","ghi"], "abcdefghi"), 3, 'Test 117');
test(numOfStrings(["xyz","zyx","yzx"], "xyzzyxzyx"), 2, 'Test 118');
test(numOfStrings(["zzz","zz","z"], "zzzzzzzzzz"), 3, 'Test 119');
test(numOfStrings(["pattern","tern","ternary","ary"], "patternarypatternary"), 4, 'Test 120');
test(numOfStrings(["xyz","abc","def","ghi","jkl"], "zyxwvutsrqponmlkjihgfedcba"), 0, 'Test 121');
test(numOfStrings(["a","ab","abc","abcd"], "abcdabcdabcd"), 4, 'Test 122');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

