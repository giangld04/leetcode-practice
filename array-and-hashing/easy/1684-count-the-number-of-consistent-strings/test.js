// Test: 1684. Count The Number Of Consistent Strings
// 66 test cases from LeetCodeDataset
// Run: node test.js

const { countConsistentStrings } = require("./solution");

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

console.log("\n1684. Count The Number Of Consistent Strings\n");

test(countConsistentStrings("ijkl", ["i", "j", "k", "l", "ij", "ik", "il", "jk", "jl", "kl", "ijkl"]), 11, 'Test 1');
test(countConsistentStrings("abcdef", ["a", "ab", "abc", "abcd", "abcde", "abcdef"]), 6, 'Test 2');
test(countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"]), 4, 'Test 3');
test(countConsistentStrings("gh", ["g", "h", "gh"]), 3, 'Test 4');
test(countConsistentStrings("xyz", ["xy","yz","xzy","zxy","zyx","xyz"]), 6, 'Test 5');
test(countConsistentStrings("xyz", ["x", "y", "z", "xy", "xz", "yz", "xyz"]), 7, 'Test 6');
test(countConsistentStrings("uvw", ["u", "v", "w", "uv", "uw", "vw", "uvw"]), 7, 'Test 7');
test(countConsistentStrings("mnop", ["m", "n", "o", "p", "mn", "mo", "mp", "no", "np", "op", "mno", "mnp", "mop", "nop", "mnop"]), 15, 'Test 8');
test(countConsistentStrings("mnop", ["m","n","o","p","mn","mo","mp","no","np","op","mno","mnp","mop","nop","mnop"]), 15, 'Test 9');
test(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]), 2, 'Test 10');
test(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"]), 7, 'Test 11');
test(countConsistentStrings("qrst", ["qr", "qs", "qt", "rs", "rt", "st", "qrs", "qrt", "qst", "rst", "qrst"]), 11, 'Test 12');
test(countConsistentStrings("qwerty", ["q", "w", "e", "r", "t", "y", "qw", "we", "er", "rt", "ty", "yq", "qr", "re", "et", "ty", "yr", "re", "et", "ty", "qwer", "wert", "erty", "rtye", "tyer", "yert", "erty", "rtye", "tyer", "yert"]), 30, 'Test 13');
test(countConsistentStrings("xyz", ["xzy", "zyx", "xyzz", "zyzzx", "xzyzyx", "zyzxzy", "xyzxyz", "zyxzyxzyx"]), 8, 'Test 14');
test(countConsistentStrings("abcdef", ["abc", "bcd", "cde", "def", "abcf", "bcde", "cdef", "abcdef", "af", "bf", "cf", "df", "ef", "f", "a", "b", "c", "d", "e"]), 19, 'Test 15');
test(countConsistentStrings("abcdefg", ["abc", "def", "ghi", "abcd", "efg", "abdefg", "abcdef", "abcdefg", "xyz"]), 7, 'Test 16');
test(countConsistentStrings("mnopqr", ["mnop", "opqr", "mnqr", "mpqr", "mnoq", "mnpq", "mnopq", "mnopqr", "mnoqr", "mnopqr", "qrmpno", "rpmnqo", "qrmp", "mnpqr", "pqmno"]), 15, 'Test 17');
test(countConsistentStrings("xyz", ["x", "y", "z", "xy", "xz", "yz", "xyz", "xyzz", "zxy", "yxz", "zyx", "zzz"]), 12, 'Test 18');
test(countConsistentStrings("abcdef", ["a", "ab", "abc", "abcd", "abcde", "abcdef", "fedcba", "defabc", "cbadef", "abcdefg", "abcdefh", "abcdefi", "abcdefj", "abcdefk", "abcdefl", "abcdefm", "abef", "acd", "bcd", "cde", "def", "efg", "fgh", "ghi", "hij", "ijk", "jkl", "klm", "lmn", "mno", "nop", "opq", "pqr", "qrs", "rst", "stu", "tuv", "uvw", "vwx", "wxy", "xyz", "ab", "bc", "cd", "de", "ef", "fg", "gh", "hi", "ij", "jk", "kl", "lm", "mn", "no", "op", "pq", "qr", "rs", "st", "tu", "uv", "vw", "wx", "xy", "yz", "za", "abab", "acac", "adad", "aeae", "afaf", "agag", "ahah", "aiai", "ajaj", "akak", "alal", "amam", "anan", "aoao", "apap", "aqaq", "arar", "asas", "atat", "auau", "avav", "awaw", "axax", "ayay", "azaz"]), 24, 'Test 19');
test(countConsistentStrings("tuvwxy", ["tuv", "uvw", "vwx", "wxy", "tuvw", "uvwx", "vwx", "wxy", "tuvwx", "uvwxy", "tuvwxy", "tuvwxyu", "tuvwxyv", "tuvwxyw", "tuvwxyx", "tuvwxyy"]), 16, 'Test 20');
test(countConsistentStrings("ijklmno", ["ijkl", "ijkm", "ilkn", "ijln", "ikln", "jklm", "jkmn", "jlmn", "klnm", "ijklmnop", "ijklmnoi", "ijklmnopq", "ijklmnopqrstuvwxyz", "ijklmnolikj", "ijklmnlijklmn", "mnopijk", "mnopilkmn"]), 12, 'Test 21');
test(countConsistentStrings("mnopqrstuvw", ["mnop", "qrstuv", "w", "mnopqr", "stuvw", "mnopqrstuvw", "mnopqrstuvww", "mnopqrstuvwww", "mnopqrstuvwq", "mnopqrstuvwqq", "mnopqrstuvwrr", "mnopqrstuvwsss", "mnopqrstuvwttt", "mnopqrstuvwuuu", "mnopqrstuvwvvv", "mnopqrstuvwwww"]), 16, 'Test 22');
test(countConsistentStrings("qrstuv", ["qrst", "uv", "qrs", "tu", "rqs", "vut", "qrtuv", "tuvqr", "usvrtq", "rqstuv", "uvtqrs", "qrsutv", "rqvstu"]), 13, 'Test 23');
test(countConsistentStrings("pqrs", ["pq", "qr", "rs", "sp", "pqrs", "prqs", "psrq", "sqrp", "rqps", "rspq", "pqs", "qsr", "rsq", "spq", "qrp", "rps", "sqr", "prq", "qsp", "rqs", "spr", "psr", "qrs", "rsq", "spq", "pqr", "qrs", "rsp", "spr", "psr", "srp", "rps", "qsp", "psq"]), 34, 'Test 24');
test(countConsistentStrings("mnopqr", ["mno", "mnp", "mqr", "npr", "opq", "orq", "pqr", "mnop", "mnoq", "mnopqr", "pqor", "nopr", "mnopq", "nopqr", "mnopqrs", "mnoprq", "mnopqrr", "mnopqrs", "mnopqrs", "mnopqrs", "mnopqrs", "mnopqrs", "mnopqrs", "mnopqrs", "mnopqrs", "mnopqrs", "mnopqrs", "mnopqrs", "mnopqrs"]), 16, 'Test 25');
test(countConsistentStrings("jklm", ["jj", "kk", "ll", "mm", "jk", "jl", "jm", "kl", "km", "lm", "jkl", "jkm", "jlm", "klm", "jklm", "jkll", "jjkkllmm", "klmklm", "jkljkl", "mnop", "qrst", "uvwxy", "z"]), 19, 'Test 26');
test(countConsistentStrings("klmnopqrstuvwxyz", ["klmnopqrstuvwxyzz", "klmnopqrstuvwxzz", "klmnopqrstuvwxxz", "klmnopqrstuvvvvv", "klmnopqrsssssss", "klmnopqqqqqqqq", "klllllllllll", "kkkkkkkkkkkk", "jjjjjjjjjjjj", "iiiiiiiiiiii", "hhhhhhhhhhhh", "gggggggggggg", "ffffffffffff", "eeeeeeeeeeee", "dddddddddddd", "cccccccccc", "bbbbbbbbbb", "aaaaaaaaaa"]), 8, 'Test 27');
test(countConsistentStrings("mno", ["m", "n", "o", "mn", "no", "om", "mno", "mon", "nom", "omn", "nmo", "nom", "omn", "mon", "mno", "mno", "nom", "omn", "mon", "mno", "nom", "omn", "mon", "mno", "nom", "omn", "mon", "mno", "nom", "omn", "mon", "mno"]), 32, 'Test 28');
test(countConsistentStrings("abcdefghij", ["abcdefghij", "abcdefghijk", "abcdefghi", "abcdefg", "abcde", "abcd", "abc", "ab", "a", "jihgfedcba", "abcdefghijabcdefghij", "abcdefghijabcdefghijk", "abcdefghijabcdefghi", "abcdefghijabcdefg", "abcdefghijabcde", "abcdefghijabcd", "abcdefghijabc", "abcdefghijab", "abcdefghija"]), 17, 'Test 29');
test(countConsistentStrings("ijkl", ["ij", "kl", "ik", "jl", "ikl", "jkl", "ijk", "ijkl", "ijl", "ikjl", "likj", "ljk", "lkij", "lijk", "ilkj", "lkji"]), 16, 'Test 30');
test(countConsistentStrings("xyz", ["xy", "yz", "xz", "xyz", "zyx", "yxz", "xzy", "zy", "yx", "zx"]), 10, 'Test 31');
test(countConsistentStrings("xyz", ["x", "y", "z", "xy", "xz", "yz", "xyz", "xzy", "yzx", "zyx", "zyz", "zxz", "yzy", "xyx", "xxy", "xxz", "xyy", "xzz", "yyy", "yzz", "zzz"]), 21, 'Test 32');
test(countConsistentStrings("abcdefghij", ["abcdefghij", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "ab", "cd", "ef", "gh", "ij", "abcd", "efgh", "ijkl", "abcdefghi", "abcdefgh", "abcdefg", "abcdef", "abcde", "abcd", "abc", "ab", "a", "abcdefghijk", "abcdefghijj", "abcdefghiij", "abcdefghhij", "abcdefghiiij"]), 31, 'Test 33');
test(countConsistentStrings("xyz", ["xyzzy", "zyx", "zxyx", "zzyzxzy", "xyzabc", "xzyz"]), 5, 'Test 34');
test(countConsistentStrings("fv", ["f", "v", "fv", "vf", "ff", "vv", "ffff", "vvvv", "fvfv", "vfvf", "fvvf", "vvff", "fvff", "vvvf", "fvvv", "ffvv", "f", "v", "fv", "vf", "ff", "vv", "ffff", "vvvv", "fvfv", "vfvf", "fvvf", "vvff", "fvff", "vvvf", "fvvv", "ffvv", "f", "v", "fv", "vf", "ff", "vv", "ffff", "vvvv"]), 40, 'Test 35');
test(countConsistentStrings("qrst", ["qqqq", "rrrr", "ssss", "tttt", "qqrr", "qqss", "qqtt", "rrss", "rrtt", "sstt", "qqrrss", "qqrrtt", "qqsstt", "rrsstt", "qqrrsstt", "qqrrssttt"]), 16, 'Test 36');
test(countConsistentStrings("abcdefghij", ["abcdefghij", "abcdefghi", "abcdefgh", "abcdefg", "abcdef", "abcde", "abcd", "abc", "ab", "a", "abcdefghijabcdefghij", "abcdefghijabcdefgh", "abcdefghijabcdef", "abcdefghijabcd", "abcdefghijabc", "abcdefghijab", "abcdefghija"]), 17, 'Test 37');
test(countConsistentStrings("xyz", ["xy", "xz", "yz", "xyz", "xx", "yy", "zz", "xyx", "yzy", "zxz", "xyxy", "xzyz", "yzxy", "xyzx", "xzyzx", "yzxyz", "xyzyx", "zxyxz", "yxzyz", "zyxzy"]), 20, 'Test 38');
test(countConsistentStrings("abcdef", ["a", "b", "c", "d", "e", "f", "ab", "cd", "ef", "abc", "def", "abcdef", "abcdefg", "abcdefabc"]), 13, 'Test 39');
test(countConsistentStrings("qrstuv", ["qrst", "qrsu", "rstuv", "qrstu", "quv", "qrs", "qrtuv", "qru", "quvtsr", "quvz"]), 9, 'Test 40');
test(countConsistentStrings("abcdef", ["abc", "def", "abcdef", "aabbcc", "ddeeff", "abcdeff", "abcdefg"]), 6, 'Test 41');
test(countConsistentStrings("ijklmnop", ["ijkl", "mnop", "ijkm", "klnm", "ijlmo", "ijkmnop", "ijklmnopq", "ijklmno", "ijklnop"]), 8, 'Test 42');
test(countConsistentStrings("jklmno", ["jk", "kl", "lm", "mn", "no", "jkl", "klm", "lmn", "mno", "jklm", "klmn", "lmno", "jklmo", "klmno", "jklmno", "jklmnou", "klmnop", "jklmnop"]), 15, 'Test 43');
test(countConsistentStrings("abcdef", ["abc", "def", "abcd", "abef", "acdf", "bcde", "acde", "bcdf", "abcf", "abcdef", "afecbd", "fedcba"]), 12, 'Test 44');
test(countConsistentStrings("qrst", ["q", "r", "s", "t", "qr", "qs", "qt", "rs", "rt", "st", "qrs", "qrt", "qst", "rst", "qrst"]), 15, 'Test 45');
test(countConsistentStrings("wxyz", ["w", "x", "y", "z", "wx", "wxyz", "xy", "yz", "wxy", "wxyz", "wxzy", "xywz", "yzwx", "zxyw"]), 14, 'Test 46');
test(countConsistentStrings("abcd", ["a", "b", "c", "d", "ab", "bc", "cd", "da", "abc", "bcd", "cda", "dab", "abcd", "bcda", "cdab", "dabc", "abdc", "bacd", "cabd", "dabc", "acbd", "badc", "cabd", "dacb", "acdb", "bdac", "cadb", "dbac", "dcab", "dcba"]), 30, 'Test 47');
test(countConsistentStrings("xyz", ["xyzz", "zyx", "zxy", "xxxyyyzzz", "zzzz", "yyyxxx", "abc", "xyzzyx", "zzzxxx", "xyxyxy"]), 9, 'Test 48');
test(countConsistentStrings("abcdef", ["abc", "def", "abcdef", "abcd", "abcf", "defa", "bcde", "fabc", "aabbccdd", "fedcba"]), 10, 'Test 49');
test(countConsistentStrings("qz", ["qqqz", "zqq", "q", "z", "zzzz", "qqqq", "qzqz", "zqzq", "zzzq", "zqqz"]), 10, 'Test 50');
test(countConsistentStrings("xyz", ["xy", "yz", "xz", "xyz", "xzy", "yxz", "zxy", "zyx", "yzz", "zzz"]), 10, 'Test 51');
test(countConsistentStrings("jkl", ["j", "k", "l", "jk", "kl", "lj", "jkl", "klj", "lkj", "kjl", "jlk", "lk", "kj", "jl", "kl", "jk", "lj", "kl", "jl", "kj", "jl", "kj", "lk", "jk", "kl", "jl", "kj", "lk", "jk", "kl", "jl", "kj"]), 32, 'Test 52');
test(countConsistentStrings("mnopqr", ["mnop", "mnopqr", "mnopq", "mnopqrs", "mnopqrst", "mnopqrstuv", "mnopqrstu", "mnopqrst", "mnopqrstuvw", "mnopqrstuvwx", "mnopqrstuvwxy", "mnopqrstuvwxyz", "mno", "pqrs", "qrst", "uvwx", "vwxyz"]), 4, 'Test 53');
test(countConsistentStrings("uvw", ["uvw", "uv", "uw", "vw", "u", "v", "w", "uvvw", "uwwv", "vwwu", "vvvuuuwww", "wuvuvuvuv"]), 12, 'Test 54');
test(countConsistentStrings("mnopqr", ["mnop", "nopq", "opqr", "mnopq", "nopqr", "mnopqr", "mnopqr", "mnopqrs", "mnopqrst", "mnopqrstu", "mnopqrstuv", "mnopqrstuvw", "mnopqrstuvwx", "mnopqrstuvwxy", "mnopqrstuvwxyz"]), 7, 'Test 55');
test(countConsistentStrings("abcdefghij", ["abcde", "fghij", "abcdefghij", "abcdefghi", "efgij", "hijabc", "defghij", "bcdefghij", "abcdefghijk", "ijabcdefgh", "abcdeffghij", "abcdefghijj", "jihgfedcba", "abcdefghijkk", "abcdefghijjj"]), 13, 'Test 56');
test(countConsistentStrings("abcdef", ["abc", "def", "abcdef", "abcd", "defg", "fedcba", "aabbccddeeff", "zzzzz"]), 6, 'Test 57');
test(countConsistentStrings("abcdefghij", ["abcdefghij", "abcdefghi", "abcdefgh", "abcdefg", "abcdef", "abcde", "abcd", "abc", "ab", "a", "abcdefghijk", "abcdefghijj", "abcdefghiij", "abcdefghhij", "abcdefghiiij", "abcdefghijjj", "abcdefghiiijj", "abcdefghijjjj", "abcdefghiiijjj", "abcdefghijjjjj", "abcdefghijjjjjj", "abcdefghijjjjjjj", "abcdefghijjjjjjjj", "abcdefghijjjjjjjjj", "abcdefghijjjjjjjjjj", "abcdefghijjjjjjjjjjj", "abcdefghijjjjjjjjjjjj", "abcdefghijjjjjjjjjjjjj"]), 27, 'Test 58');
test(countConsistentStrings("abcdefg", ["a", "ab", "abc", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgi", "abcdefgh", "abcdefgabcdefg"]), 8, 'Test 59');
test(countConsistentStrings("pqrstuvw", ["pqrs", "qrst", "rstu", "stuv", "tuvw", "pqrsrstuvw", "uvws", "uvwpqr", "rstuvwq", "pqrstuvwz", "uvwstu", "qrpstu", "vwstupqr"]), 12, 'Test 60');
test(countConsistentStrings("pqrst", ["p", "q", "r", "s", "t", "pq", "qr", "rs", "st", "pqrs", "qrst", "pqrst", "pqrs", "pqst", "prst", "qrstu", "pqrstv"]), 15, 'Test 61');
test(countConsistentStrings("tuvwxy", ["tu", "tv", "tw", "tx", "ty", "tvwxy", "uwxyt", "wxtyv", "xytuw", "tuvxy", "wxytv", "xyzut", "ytuvwx", "uvxtyw", "tuvwxyuvwx", "txyuvw", "ytxwuv", "utxwvy", "wxuytv", "tvxyw", "tuvwxytvwx", "tuvwxytuvwxy"]), 21, 'Test 62');
test(countConsistentStrings("lmnopq", ["lmn", "opq", "lmnop", "lmnopq", "pqonm", "qlmnp", "pqlno", "opqmn", "nopql", "mnopq", "lmnopqrr", "plmqon", "opqlnm", "qponml", "mnopql"]), 14, 'Test 63');
test(countConsistentStrings("xyz", ["xx", "yy", "zz", "xy", "yz", "zx", "xyz", "zxy", "yxz"]), 9, 'Test 64');
test(countConsistentStrings("xyz", ["xzy", "zyx", "zyzx", "xxxyyyzzz", "xzyxzyxzy"]), 5, 'Test 65');
test(countConsistentStrings("mnopqrstuvwxyz", ["mnopqrstuvwxyz", "mnopqrstuvwxy", "mnopqrstuvwx", "mnopqrstuvw", "mnopqrstu", "mnopqrst", "mnopqrs", "mnopqr", "mnopq", "mnop", "mno", "mn", "m", "nopqrstuvwxyz", "opqrstuvwxy", "pqrstuvwx", "qrstuvw", "rstuv", "stuv", "tuv", "uv", "v", "mnopqrstuvwxyza", "nopqrstuvwxyzb", "mnopqrstuvwxc", "mnopqrstuvxd", "mnopqrstvxe", "mnopqrsvxf", "mnopqrvxg", "mnopqruxh", "mnopquxi", "mnopqxi", "mnopxi", "mnoxi", "moxi", "moxi", "oxi", "oxi", "oxiz", "mnoxyz", "mnopxyz", "mnopqxyz", "mnopqrxyz", "mnopqrstxyz", "mnopqrstuxyz", "mnopqrstuvxyz", "mnopqrstuvwxyz", "mnopqrstuvwxyzabc", "mnopqrstuvwxyzabcd", "mnopqrstuvwxyzabcde", "mnopqrstuvwxyzabcdef", "mnopqrstuvwxyzabcdefg"]), 30, 'Test 66');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

