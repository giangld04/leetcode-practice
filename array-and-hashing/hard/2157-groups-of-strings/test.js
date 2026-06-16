// Test: 2157. Groups Of Strings
// 70 test cases from LeetCodeDataset
// Run: node test.js

const { groupStrings } = require("./solution");

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

console.log("\n2157. Groups Of Strings\n");

test(groupStrings(["abc","bcd","ace","bce"]), [1, 4], 'Test 1');
test(groupStrings(["abcd","ac","ab","abc","a"]), [1, 5], 'Test 2');
test(groupStrings(["abcd","abce","abcf","abde","acde","bcde","abcde"]), [1, 7], 'Test 3');
test(groupStrings(["a","b","ab","cde"]), [2, 3], 'Test 4');
test(groupStrings(["abcd","ab","cd","a","b","c","d"]), [2, 6], 'Test 5');
test(groupStrings(["a","b","c","d","e","f","g"]), [1, 7], 'Test 6');
test(groupStrings(["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"]), [9, 1], 'Test 7');
test(groupStrings(["a","ab","abc"]), [1, 3], 'Test 8');
test(groupStrings(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), [1, 26], 'Test 9');
test(groupStrings(["abc","abcd","abde","acde","bcde"]), [1, 5], 'Test 10');
test(groupStrings(["abc","bcd","ace","xyz"]), [2, 3], 'Test 11');
test(groupStrings(["xyz","xy","yz","xz","x","y","z"]), [1, 7], 'Test 12');
test(groupStrings(["abc","bcd","ace","bd","abcde"]), [2, 4], 'Test 13');
test(groupStrings(["abc","acb","bac","bca","cab","cba","abcd","abdc","acbd","acdb","adbc","adcb","bacd","badc","bcad","bcda","bdac","bdca","cabd","cadb","cbad","cbda","cdab","cdba","dabc","dacb","dbac","dbca","dcab","dcba","abcdefgh","abcdefghi","abcdefghij","abcdefghijk","abcdefghijl","abcdefghijkml","abcdefghijkmn","abcdefghijkop","abcdefghijkmnop","abcdefghijkmnopq"]), [5, 30], 'Test 14');
test(groupStrings(["abcdef", "bcdefg", "cdefgh", "defghi", "efghij", "fghijk", "ghijkl", "hijklm", "ijklmn", "jklmno", "klmnop", "lmnopq", "mnopqr", "nopqrs", "opqrst", "pqrstu", "qrstuv", "rstuvw", "stuvwx", "tuvwxy", "uvwxyz"]), [1, 21], 'Test 15');
test(groupStrings(["abcdef","bcdefg","cdefgh","defghi","efghij","fghijk","ghijkl","hijklm","ijklmn","jklmno","klmnop","lmnopq","mnopqr","nopqrs","opqrst","pqrs"]), [2, 15], 'Test 16');
test(groupStrings(["abc", "ab", "a", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh", "abcdefghi", "abcdefghij"]), [1, 10], 'Test 17');
test(groupStrings(["pqrst", "pqrstuvw", "pqrstu", "pqrs", "pqr", "pq", "p", "qrstuv", "qrstu", "qrst", "qrs", "qr", "q", "rstuv", "rstu", "rst", "rs", "r", "stuv", "stu", "st", "s", "tuv", "tu", "t", "uv", "u", "v"]), [2, 27], 'Test 18');
test(groupStrings(["abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxy", "abcdefghijklmnopqrstuvwx", "abcdefghijklmnopqrstuvw", "abcdefghijklmnopqrstu"]), [2, 4], 'Test 19');
test(groupStrings(["abc", "abcd", "ab", "a", "bc", "b", "c", "ac", "d", "de", "def", "defg", "defgh", "defghi", "defghij", "defghijk", "defghijkl", "defghijklm", "defghijklmn", "defghijklmno", "defghijklmnop", "defghijklmnopq", "defghijklmnopqr", "defghijklmnopqrs", "defghijklmnopqrst", "defghijklmnopqrstu", "defghijklmnopqrstuv", "defghijklmnopqrstuvw", "defghijklmnopqrstuvwx", "defghijklmnopqrstuvwxy", "defghijklmnopqrstuvwxyz"]), [1, 31], 'Test 20');
test(groupStrings(["ab","ac","ad","bc","bd","cd","abc","abd","acd","bcd","abcd","abcde","abcf","abcdg","abde","acde","bcde","abcdefg","abcdefgh","abcdefghi","abcdefghij","abcdefghijk","abcdefghijkl","abcdefghijklm","abcdefghijklmn","abcdefghijklmno","abcdefghijklmnop","abcdefghijklmnopq","abcdefghijklmnopqr","abcdefghijklmnopqrst","abcdefghijklmnopqrstu","abcdefghijklmnopqrstuv","abcdefghijklmnopqrstuvw","abcdefghijklmnopqrstuvwxy","abcdefghijklmnopqrstuvwxyz"]), [4, 17], 'Test 21');
test(groupStrings(["xyz","xy","xz","yz","x","y","z","xyza","xyzab","xyzabc","xyzabcd","xyzabcde","xyzabcdef","xyzabcdefg","xyzabcdefgh","xyzabcdefghi","xyzabcdefghij","xyzabcdefghijk","xyzabcdefghijkl","xyzabcdefghijklm","xyzabcdefghijklmn","xyzabcdefghijklmno","xyzabcdefghijklmnop","xyzabcdefghijklmnopq","xyzabcdefghijklmnopqr","xyzabcdefghijklmnopqrst","xyzabcdefghijklmnopqrstu","xyzabcdefghijklmnopqrstuv","xyzabcdefghijklmnopqrstuvw","xyzabcdefghijklmnopqrstuvwxy","xyzabcdefghijklmnopqrstuvwxyz"]), [2, 25], 'Test 22');
test(groupStrings(["ab","ac","ad","bc","bd","cd","abcd","abef","acde","bcde","cdef","defg","efgh","fghi","ghij","hijk","ijkl","jklm","klmn","lmno","mnop","nopq","opqr","pqrs","qrst","rstu","stuv","tuvw","uvwx","vwxy","wxyz"]), [3, 24], 'Test 23');
test(groupStrings(["abc", "abd", "abe", "abf", "abg", "abh", "abi", "abj", "abk", "abl", "abm", "abn", "abo", "abp", "abq", "abr", "abs", "abt", "abu", "abv", "abw", "abx", "aby", "abz", "acb", "adb", "aeb", "afb", "agb", "ahb", "aib", "ajb", "akb", "alb", "amb", "anb", "aob", "apb", "aqb", "arb", "asb", "atb", "aub", "avb", "awb", "axb", "ayb", "azb"]), [1, 48], 'Test 24');
test(groupStrings(["abcd", "abcf", "acdf", "bcdf", "abcdg", "abcfg", "abdfg", "acdfg", "bcdfg", "abcdef", "abcdfg", "abcfgh", "abcdefg", "abcdefh", "abcddef", "abcedef", "abcfdef", "abcdefg", "abcdefh", "abcdefi", "abcdefj", "abcdefk", "abcdefl", "abcdefm", "abcdefn", "abcdefo", "abcdefp", "abcdefq", "abcdefr", "abcdefs", "abcdeft", "abcdefu", "abcdefv", "abcdefw", "abcdefx", "abcdefy", "abcdefz"]), [1, 37], 'Test 25');
test(groupStrings(["a", "b", "ab", "abc", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh"]), [1, 9], 'Test 26');
test(groupStrings(["xyz", "xy", "xz", "yz", "x", "y", "z", "abc", "ab", "ac", "bc", "a", "b", "c", "abcd", "abce", "abcf", "abde", "acde", "bcde", "abcde", "abcdef", "abcdefg", "abcdefgh", "abcdefghi", "abcdefghij", "abcdefghijk", "abcdefghijkl", "abcdefghijklm", "abcdefghijklmn", "abcdefghijklmnop"]), [2, 30], 'Test 27');
test(groupStrings(["xyz", "xy", "yz", "xz", "x", "y", "z", "xyw", "yzw", "xzw", "w", "xyzw"]), [1, 12], 'Test 28');
test(groupStrings(["abc", "ac", "ab", "b", "c", "bcd", "bc", "cd", "d", "abcd", "abdc", "bacd", "cabd", "acbd", "bcad", "bcda"]), [1, 16], 'Test 29');
test(groupStrings(["abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxy", "abcdefghijklmnopqrstuvwx", "abcdefghijklmnopqrstuvw", "abcdefghijklmnopqrstu", "abcdefghijklmnopqrst", "abcdefghijklmnopqr", "abcdefghijklmnopq", "abcdefghijklmnop", "abcdefghijklmno"]), [3, 4], 'Test 30');
test(groupStrings(["abcdefg","abc","def","ghijkl","mnopqr","stuv","wxyz","abcdefghij"]), [8, 1], 'Test 31');
test(groupStrings(["xyz","xy","xz","yz","a","b","c","abc","abcd"]), [3, 4], 'Test 32');
test(groupStrings(["abcd", "abce", "abcf", "abde", "acde", "bcde", "abcde", "abcdf", "abcef", "abdef", "acdef", "bcdef", "abcdefg", "abcdefgh", "abcdefghi", "abcdefghij", "abcdefghijk", "abcdefghijkl", "abcdefghijklm", "abcdefghijklmn", "abcdefghijklmno", "abcdefghijklmnop", "abcdefghijklmnopq", "abcdefghijklmnopqr", "abcdefghijklmnopqrs", "abcdefghijklmnopqrst", "abcdefghijklmnopqrstu", "abcdefghijklmnopqrstuv", "abcdefghijklmnopqrstuvw", "abcdefghijklmnopqrstuvwx", "abcdefghijklmnopqrstuvwxy", "abcdefghijklmnopqrstuvwxyz"]), [2, 20], 'Test 33');
test(groupStrings(["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz","abcde","fghij","klmno","pqrst","uvwxy","zabcd","efghi","jklmn","opqrs","tuvwx","yzabc","defgh","ijklm","nopqr","stuvw","xyzab","cdefg","hijkl","mnopq","rstuv","wxyza","bcdef","ghijk","lmnop","opqrs","tuvwx","yzabc"]), [11, 22], 'Test 34');
test(groupStrings(["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz", "abcd", "efgh", "ijkl", "mnop", "qrst", "uvwx", "yzab", "cdef", "ghij", "klmn", "opqr", "stuv", "wxyz", "abcd", "efgh", "ijkl", "mnop", "qrst", "uvwx", "yzab"]), [14, 3], 'Test 35');
test(groupStrings(["abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyzq", "abcdefghijklmnopqrstuvwxyzp", "abcdefghijklmnopqrstuvwxyzr", "abcdefghijklmnopqrstuvwxyzs"]), [1, 5], 'Test 36');
test(groupStrings(["abcd", "abcf", "abdf", "acdf", "bcdf", "abcdef", "bcdefg", "cdefgh", "defghi", "efghij", "fghijk", "ghijkl", "hijklm", "ijklmn", "jklmno", "klmnop", "lmnopq", "mnopqr", "nopqrs", "opqrst", "pqrstu", "qrstuv", "rstuvw", "stuvwx", "tuvwxy", "uvwxy"]), [2, 21], 'Test 37');
test(groupStrings(["pqr","pq","pr","qr","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), [1, 30], 'Test 38');
test(groupStrings(["abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxy", "abcdefghijklmnopqrstuvwx", "abcdefghijklmnopqrstuvw"]), [1, 4], 'Test 39');
test(groupStrings(["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaaa", "aaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaaa", "aaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"]), [1, 31], 'Test 40');
test(groupStrings(["abcd","abef","acgh","bcdf","cdef","efgh","efgi","efgj","efgk","efgl","efgm","efgn","efgo","efgp","efgq","efgr","efgs","efgt","efgu","efgv","efgw","efgx","efgy","efgz"]), [4, 19], 'Test 41');
test(groupStrings(["abcdefghijklmnopqrstuvwxyz","abcdefghijklmnopqrstuvwxy","abcdefghijklmnopqrstuvwx","abcdefghijklmnopqrstuvw","abcdefghijklmnopqrstu","abcdefghijklmnopqrstuv","abcdefghijklmnopqrstu","abcdefghijklmnopqrst","abcdefghijklmnopqr","abcdefghijklmnopq","abcdefghijklmnop","abcdefghijklmno","abcdefghijklmn","abcdefghijklm","abcdefghijkl","abcdefghijk","abcdefghij","abcdefghi","abcdefgh","abcdefg","abcdef","abcde","abcd","abc","ab","a"]), [2, 18], 'Test 42');
test(groupStrings(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]), [1, 26], 'Test 43');
test(groupStrings(["abcd", "abce", "abcf", "abde", "acde", "bcde", "abcde", "abcd", "abce", "abcf", "abde", "acde", "bcde", "abcde"]), [1, 14], 'Test 44');
test(groupStrings(["abc", "acb", "bac", "bca", "cab", "cba", "abcd", "abdc", "acbd", "acdb", "adbc", "adcb", "bacd", "badc", "bcad", "bcda", "bdac", "bdca", "cabd", "cadb", "cbad", "cbda", "cdab", "cdba", "dabc", "dacb", "dbac", "dbca", "dcab", "dcba"]), [1, 30], 'Test 45');
test(groupStrings(["a","b","ab","abc","abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij","abcdefghijk","abcdefghijkl","abcdefghijklm","abcdefghijklmn","abcdefghijklmno","abcdefghijklmnop","abcdefghijklmnopq","abcdefghijklmnopqr","abcdefghijklmnopqrs","abcdefghijklmnopqrst","abcdefghijklmnopqrstu","abcdefghijklmnopqrstuv","abcdefghijklmnopqrstuvw","abcdefghijklmnopqrstvwxy","abcdefghijklmnopqrstuvwxyz"]), [3, 24], 'Test 46');
test(groupStrings(["abcdef","abc","def","abcd","abef","acdf","bcde","abcf","abcdg","abcde","abcdefg"]), [2, 10], 'Test 47');
test(groupStrings(["mnop","mno","mnp","mop","nop","npp","ppp","pp","p","z","zz","zzz","zzzz","zzzzz","zzzzzz","zzzzzzz","zzzzzzzz","zzzzzzzzz","zzzzzzzzzz"]), [1, 19], 'Test 48');
test(groupStrings(["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz", "abcdefghi", "jklmnopqr", "stuvwxyz", "abcde", "fghij", "klmno", "pqrst", "uvwxy", "z", "abcdefghijkl", "mnopqrstu", "vwxyz", "abcd", "efgh", "ijkl", "mnop", "qrst", "uvwx", "yz"]), [18, 4], 'Test 49');
test(groupStrings(["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz","abcdef","ghijkl","mnopqr","stuvwx","yzab","cdefgh","ijklmn","opqrst","uvwxyl","zabcde","fghijk","lmnopq","rstuvw","xylzab","cdefgh","ijklmn","opqrst","vwxyza","yzabcd","efghij","klmnop","qrstuv","wxylza","bcdefg","hijklm","nopqrs","tuvwxy","zabcde","fghijk","lmnopq","rstuvw","wxylza","cdefgh","ijklmn","opqrst","vwxyza","yzabcd"]), [15, 9], 'Test 50');
test(groupStrings(["xyz", "xy", "xz", "yz", "x", "y", "z", "xyza", "xyzb", "xyzc", "xyzd", "xyze", "xyzf", "xyzg", "xyzh", "xyzi", "xyzj", "xyzk", "xyzl", "xyzm", "xyzn", "xyzo", "xyzp", "xyzq", "xyxr", "xyxs", "xyxt", "xyxu", "xyxv", "xyxw", "xyxx", "xyxy", "xyxz"]), [1, 33], 'Test 51');
test(groupStrings(["a", "b", "ab", "abc", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh", "abcdefghi", "abcdefghij", "abcdefghijk", "abcdefghijkl", "abcdefghijklm", "abcdefghijklmn", "abcdefghijklmnop", "abcdefghijklmnopq", "abcdefghijklmnopqr", "abcdefghijklmnopqrs", "abcdefghijklmnopqrst", "abcdefghijklmnopqrstu", "abcdefghijklmnopqrstuv", "abcdefghijklmnopqrstuvw", "abcdefghijklmnopqrstuvwx", "abcdefghijklmnopqrstuvwxy", "abcdefghijklmnopqrstuvwxyz"]), [2, 15], 'Test 52');
test(groupStrings(["abcdefg","abcdef","abcde","abcd","abc","ab","a","b","c","d","e","f","g"]), [1, 13], 'Test 53');
test(groupStrings(["abc", "abd", "acd", "bcd", "abcde", "bcdef", "cdefg", "defgh", "efghi", "fghij"]), [2, 6], 'Test 54');
test(groupStrings(["abcdef", "abcdeg", "abcef", "bcdef", "acdef", "abdef", "abcdf", "abcdg", "abc", "ab", "ac", "ad", "ae", "af", "ag", "a", "b", "c", "d", "e", "f", "g"]), [2, 14], 'Test 55');
test(groupStrings(["ab", "ac", "ad", "ae", "af", "ag", "ah", "ai", "aj", "ak", "al", "am", "an", "ao", "ap", "aq", "ar", "as", "at", "au", "av", "aw", "ax", "ay", "az", "ba", "ca", "da", "ea", "fa", "ga", "ha", "ia", "ja", "ka", "la", "ma", "na", "oa", "pa", "qa", "ra", "sa", "ta", "ua", "va", "wa", "xa", "ya", "za"]), [1, 50], 'Test 56');
test(groupStrings(["a", "ab", "abc", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh", "abcdefghi", "abcdefghij", "abcdefghijk", "abcdefghijkl", "abcdefghijklm", "abcdefghijklmn", "abcdefghijklmno", "abcdefghijklmnop", "abcdefghijklmnopq", "abcdefghijklmnopqr", "abcdefghijklmnopqrs", "abcdefghijklmnopqrst", "abcdefghijklmnopqrstu", "abcdefghijklmnopqrstuv", "abcdefghijklmnopqrstuvw", "abcdefghijklmnopqrstuvwx", "abcdefghijklmnopqrstuvwxy"]), [1, 25], 'Test 57');
test(groupStrings(["abcdef","abcde","abcef","abdef","acdef","bcdef","abcdefg","abcdefgh","abcdefghi"]), [1, 9], 'Test 58');
test(groupStrings(["a", "b", "c", "ab", "bc", "ac", "abc", "abcd", "abce", "abcf", "abde", "acde", "bcde", "abcde", "abcdef", "abcdefg", "abcdefgh", "abcdefghi", "abcdefghij", "abcdefghijk", "abcdefghijkl", "abcdefghijklm", "abcdefghijklmn", "abcdefghijklmnop", "abcdefghijklmnopq", "abcdefghijklmnopqr", "abcdefghijklmnopqrs", "abcdefghijklmnopqrst", "abcdefghijklmnopqrstu", "abcdefghijklmnopqrstuv", "abcdefghijklmnopqrstuvw", "abcdefghijklmnopqrstuvwx", "abcdefghijklmnopqrstuvwxy", "abcdefghijklmnopqrstuvwxyz", "mnopqrstuvwxy", "mnopqrstuvwx", "mnopqrstuvw", "mnopqrstuv", "mnopqrstu", "mnopqrst", "mnopqr", "mnopq", "mnop", "mon", "mo", "m", "nopqrstuvwxyz", "nopqrstuvwx", "nopqrstuvw", "nopqrstuv", "nopqrstu", "nopqrst", "nopqr", "nopq", "nop", "no", "n", "opqrstuvwxyz", "opqrstuvwx", "opqrstuvw", "opqrstuv", "opqrstu", "opqrst", "opqr", "opq", "op", "o", "pqrstuvwxyz", "pqrstuvwx", "pqrstuvw", "pqrstuv", "pqrstu", "pqrs", "pqr", "pq", "p"]), [3, 42], 'Test 59');
test(groupStrings(["mnopqr", "mnopqs", "mnopqt", "mnoprs", "mnoprt", "mnopst", "mnoqrs", "mnoqrt", "mnoqst", "mnoprs", "mnoprt", "mnopst", "mnoqrt", "mnoqst", "mnoprt", "mnopst", "mnoqrs", "mnopqr", "mnopqs", "mnopqt", "mnoprs", "mnoprt", "mnopst", "mnoqrt", "mnoqst", "mnoprt", "mnopst"]), [1, 27], 'Test 60');
test(groupStrings(["abcd", "abce", "abcf", "abde", "acde", "bcde", "abcde", "bcdef", "acdef", "abcef", "abdef", "acdefg", "bcdefg", "cdefgh", "defghi"]), [1, 15], 'Test 61');
test(groupStrings(["xyz","xy","xz","yz","x","y","z","xyzu","xyvz","xywz","xyxz","xyyz","xyzv","xyzw","xyzz","xzu","xvz","xwz","xxz","xzz","yzu","yvz","ywz","yyz","yzv","yzw","yzz","zvu","zwv","zzv","zzw","zzz","abc","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz","abcd","bcde","cdef","defg","efgh","fghi","ghij","hijk","ijkl","jklm","klmn","lmno","mnop","nopq","opqr","pqrs","qrst","rstu","stuv","tuvw","uvwx","vwxy","wxyz","vwxyz","vwxyza","vwxyzab","vwxyzabc","vwxyzabcd"]), [1, 84], 'Test 62');
test(groupStrings(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","ab","bc","cd","de","ef","fg","gh","hi","ij","jk","kl","lm","mn","no","op","pq","qr","rs","st","tu","uv","vw","wx","xy","yz"]), [1, 51], 'Test 63');
test(groupStrings(["abcdefghijklmnopqrstuvwxyz","abcdefghijklmnopqrstuvwxy","abcdefghijklmnopqrstuvwx","abcdefghijklmnopqrstuvw","abcdefghijklmnopqrstu","abcdefghijklmnopqrstuv","abcdefghijklmnopqrstu","abcdefghijklmnopqrstuv","abcdefghijklmnopqrstu","abcdefghijklmnopqrstu"]), [1, 10], 'Test 64');
test(groupStrings(["abc","abd","acd","bcd","abcd","ab","ac","ad","bc","bd","cd","a","b","c","d"]), [1, 15], 'Test 65');
test(groupStrings(["abcdefghijklmnopqrstuvwxyz","abcdefghijklmnopqrstuvwxy","abcdefghijklmnopqrstuvwx","abcdefghijklmnopqrstuvw","abcdefghijklmnopqrstu","abcdefghijklmnopqrstuv","abcdefghijklmnopqrstu","abcdefghijklmnopqrstuvwx","abcdefghijklmnopqrstuvwxy","abcdefghijklmnopqrstuvw","abcdefghijklmnopqrstu","abcdefghijklmnopqrstuv","abcdefghijklmnopqrstu"]), [1, 13], 'Test 66');
test(groupStrings(["abc", "abd", "acd", "bcd", "abcd", "ab", "bc", "cd", "ac", "a", "b", "c", "d"]), [1, 13], 'Test 67');
test(groupStrings(["pqrst", "pqsrt", "pqrst", "pqrsu", "pqrs", "pqrt", "pqst", "prst", "qrst", "pq", "qr", "qs", "qt", "pr", "ps", "pt", "rs", "rt", "st", "p", "q", "r", "s", "t"]), [2, 15], 'Test 68');
test(groupStrings(["abcdefghij","abcdefgh","abcdefg","abcdef","abcde","abcd","abc","ab","a","z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b"]), [2, 33], 'Test 69');
test(groupStrings(["abcdefghijklmnopqrstuvwxyz","abcdefghijklmnopqrstuvwx","abcdefghijklmnopqrstuvw","abcdefghijklmnopqrstu","abcdefghijklmnopqrstuv","abcdefghijklmnopqrstu","abcdefghijklmnopqrs","abcdefghijklmnopqrt","abcdefghijklmnopqr","abcdefghijklmnopq","abcdefghijklmnop","abcdefghijklmno","abcdefghijklmn","abcdefghijklm","abcdefghijkl","abcdefghijk","abcdefghij","abcdefghi","abcdefgh","abcdefg","abcdef","abcde","abcd","abc","ab","a"]), [3, 20], 'Test 70');

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
