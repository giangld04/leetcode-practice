// Test: 820. Short Encoding Of Words
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { minimumLengthEncoding } = require("./solution");

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

console.log("\n820. Short Encoding Of Words\n");

test(minimumLengthEncoding(["abc", "def", "ghi", "jkl", "mno"]), 20, 'Test 1');
test(minimumLengthEncoding(["test", "testing", "tested", "testable"]), 29, 'Test 2');
test(minimumLengthEncoding(["hello", "hell", "he", "h"]), 16, 'Test 3');
test(minimumLengthEncoding(["aaa", "aa", "a"]), 4, 'Test 4');
test(minimumLengthEncoding(["one", "two", "three", "four", "five"]), 24, 'Test 5');
test(minimumLengthEncoding(["abcd", "bcde", "cdef", "defg"]), 20, 'Test 6');
test(minimumLengthEncoding(["apple", "ple", "le", "e"]), 6, 'Test 7');
test(minimumLengthEncoding(["test", "testcase", "cases", "ase", "se", "e"]), 20, 'Test 8');
test(minimumLengthEncoding(["hello", "world", "python", "programming"]), 31, 'Test 9');
test(minimumLengthEncoding(["apple", "pple", "ple", "le", "e"]), 6, 'Test 10');
test(minimumLengthEncoding(["ab", "bc", "cd", "da"]), 12, 'Test 11');
test(minimumLengthEncoding(["aa", "aaa", "aaaa", "aaaaa"]), 6, 'Test 12');
test(minimumLengthEncoding(["aa", "aaa", "aaaa"]), 5, 'Test 13');
test(minimumLengthEncoding(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]), 52, 'Test 14');
test(minimumLengthEncoding(["xyz", "xy", "y", "z"]), 7, 'Test 15');
test(minimumLengthEncoding(["a", "b", "c", "d", "e", "f", "g"]), 14, 'Test 16');
test(minimumLengthEncoding(["cat", "dog", "rat", "car"]), 16, 'Test 17');
test(minimumLengthEncoding(["hello", "world", "hold"]), 17, 'Test 18');
test(minimumLengthEncoding(["time", "me", "bell"]), 10, 'Test 19');
test(minimumLengthEncoding(["at", "ac", "bc", "abc"]), 10, 'Test 20');
test(minimumLengthEncoding(["hello", "world", "code", "word"]), 22, 'Test 21');
test(minimumLengthEncoding(["abc", "bcd", "cde"]), 12, 'Test 22');
test(minimumLengthEncoding(["t"]), 2, 'Test 23');
test(minimumLengthEncoding(["hello", "world", "word", "hello"]), 17, 'Test 24');
test(minimumLengthEncoding(["a", "ab", "abc", "abcd", "abcde"]), 20, 'Test 25');
test(minimumLengthEncoding(["abc", "bcd", "cde", "def", "efg", "fgh"]), 24, 'Test 26');
test(minimumLengthEncoding(["banana", "nana", "ana", "na", "a", "nan", "nanan"]), 13, 'Test 27');
test(minimumLengthEncoding(["sequence", "equence", "quence", "uence", "ence", "nce", "ce", "e", "sq", "qu", "uen", "en"]), 19, 'Test 28');
test(minimumLengthEncoding(["xyz", "xy", "xz", "yz", "x", "y", "z"]), 12, 'Test 29');
test(minimumLengthEncoding(["xyz", "zyx", "yzx", "yxz", "zxy", "xzy", "zy", "yx", "xz", "zx", "xy"]), 24, 'Test 30');
test(minimumLengthEncoding(["random", "andom", "dom", "om", "m", "rando", "and", "nd", "d", "rand", "ran", "ra", "ndom"]), 25, 'Test 31');
test(minimumLengthEncoding(["abcd", "bcde", "cdef", "defg", "efgh"]), 25, 'Test 32');
test(minimumLengthEncoding(["abc", "bc", "c", "abcd", "bcd"]), 9, 'Test 33');
test(minimumLengthEncoding(["apple", "ple", "leetcode", "code", "ode", "de"]), 15, 'Test 34');
test(minimumLengthEncoding(["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaaa", "aaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaaa", "aaaaaaaaaaaaaaa"]), 16, 'Test 35');
test(minimumLengthEncoding(["aa", "aaa", "aaaa", "aab", "aabaa", "aabaaa", "aabaaaa"]), 25, 'Test 36');
test(minimumLengthEncoding(["abcdefgh", "efgh", "fgh", "gh", "h", "abcdefghijk", "ghijk", "hijk", "ijk", "jk", "k"]), 21, 'Test 37');
test(minimumLengthEncoding(["xylophone", "ylophone", "lophone", "ophone", "phone", "hone", "one", "ne", "e"]), 10, 'Test 38');
test(minimumLengthEncoding(["a", "ab", "abc", "abcd", "abcde", "abcdef", "abcdefg"]), 35, 'Test 39');
test(minimumLengthEncoding(["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twentyone", "twentytwo", "twentythree", "twentyfour", "twentyfive"]), 162, 'Test 40');
test(minimumLengthEncoding(["abcd", "bcd", "cd", "d", "abcde", "bcde", "cde", "de", "e"]), 11, 'Test 41');
test(minimumLengthEncoding(["hello", "hell", "hel", "he", "h", "world", "worl", "wor", "wo", "w"]), 40, 'Test 42');
test(minimumLengthEncoding(["supercalifragilisticexpialidocious", "supercalifragilisticexpialidocio", "supercalifragilisticexpialido", "supercalifragilisticexpalia", "supercalifragilisticexpali", "supercalifragilisticexpal", "supercalifragilisticexpa", "supercalifragilisticex", "supercalifragilistice", "supercalifragilistic", "supercalifragilisti", "supercalifragilist", "supercalifragilis", "supercalifragili", "supercalifragil", "supercalifragi", "supercalifrag", "supercalifra", "supercalifr", "supercalif", "supercali", "supercal", "superc", "super", "supe", "sup", "su", "s"]), 469, 'Test 43');
test(minimumLengthEncoding(["abcd", "bcd", "cd", "d", "a", "ab", "abc", "bc", "c"]), 14, 'Test 44');
test(minimumLengthEncoding(["abracadabra", "bracadabr", "racadabr", "acadabr", "cadabr", "adabr", "dabr", "abr", "br", "r"]), 22, 'Test 45');
test(minimumLengthEncoding(["xylophone", "ylophone", "lophone", "ophone", "phone", "hone", "one", "ne", "e", "x"]), 12, 'Test 46');
test(minimumLengthEncoding(["qwerty", "werty", "erty", "rty", "ty", "y", "qwertyuiop", "ertyuiop", "rtyuiop", "tyuiop", "yuiop", "uiop", "iop", "op", "p"]), 18, 'Test 47');
test(minimumLengthEncoding(["aaaaaa", "aaaaa", "aaaa", "aaa", "aa", "a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa"]), 7, 'Test 48');
test(minimumLengthEncoding(["zebra", "bra", "ra", "a", "abacaxi", "bacaxi", "acaxi", "caxi", "axi", "xi", "i"]), 14, 'Test 49');
test(minimumLengthEncoding(["zzzzzzz", "zzzzzz", "zzzzz", "zzzz", "zzz", "zz", "z", "zzzzzzz", "zzzzzz", "zzzzz", "zzzz", "zzz", "zz", "z"]), 8, 'Test 50');
test(minimumLengthEncoding(["ab", "abc", "abcd", "abcde", "abcdef"]), 25, 'Test 51');
test(minimumLengthEncoding(["abcd", "bcd", "cd", "d", "efgh", "fgh", "gh", "h", "ijkl", "jkl", "kl", "l"]), 15, 'Test 52');
test(minimumLengthEncoding(["test", "testing", "tests", "tes", "te", "t", "testcase", "cases", "ase", "se", "e"]), 41, 'Test 53');
test(minimumLengthEncoding(["banana", "anana", "nana", "ana", "na", "a", "ban"]), 11, 'Test 54');
test(minimumLengthEncoding(["abcd", "bcd", "cd", "d", "def", "ef", "f", "fgh", "gh", "h"]), 13, 'Test 55');
test(minimumLengthEncoding(["banana", "anana", "nana", "ana", "na", "a", "nabana", "bananab"]), 22, 'Test 56');
test(minimumLengthEncoding(["ab", "abc", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh"]), 42, 'Test 57');
test(minimumLengthEncoding(["algorithm", "logarithm", "rhythm", "syzygy", "zymurgy", "zymurgy", "zymurgy", "zymurgy", "zymurgy"]), 42, 'Test 58');
test(minimumLengthEncoding(["abcd", "bcde", "cdef", "defg", "efgh", "fghi", "ghij", "hijk", "ijkl", "jkl", "kl", "l"]), 45, 'Test 59');
test(minimumLengthEncoding(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj", "kk", "ll", "mm", "nn", "oo", "pp", "qq", "rr", "ss", "tt", "uu", "vv", "ww", "xx", "yy", "zz"]), 78, 'Test 60');
test(minimumLengthEncoding(["hello", "hell", "helo", "he", "h", "e"]), 21, 'Test 61');
test(minimumLengthEncoding(["abacaxi", "bacaxi", "caxi", "axi", "xi", "i"]), 8, 'Test 62');
test(minimumLengthEncoding(["xyz", "zyx", "yzx", "yxz", "xzy", "zxy"]), 24, 'Test 63');
test(minimumLengthEncoding(["algorithm", "rhythm", "rhythmically", "thym", "hym", "ym", "m"]), 35, 'Test 64');
test(minimumLengthEncoding(["flower", "flow", "flight", "flighting", "flour"]), 35, 'Test 65');
test(minimumLengthEncoding(["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa"]), 8, 'Test 66');
test(minimumLengthEncoding(["word", "ord", "rd", "d", "word", "ord", "rd", "d", "word", "ord", "rd", "d", "word", "ord", "rd", "d", "word", "ord", "rd", "d"]), 5, 'Test 67');
test(minimumLengthEncoding(["apple", "peel", "pale", "ale", "le"]), 16, 'Test 68');
test(minimumLengthEncoding(["apple", "ple", "le", "e", "app", "ppl"]), 14, 'Test 69');
test(minimumLengthEncoding(["abcdefgh", "bcdefghi", "cdefghij", "defghijk", "efghijkl", "fghijklm", "ghijklmn", "hijklmno", "ijklmnop", "jklmnopq"]), 90, 'Test 70');
test(minimumLengthEncoding(["ab", "bc", "abc", "abcd", "abcde"]), 18, 'Test 71');
test(minimumLengthEncoding(["overlap", "lap", "ap", "p", "nolap", "olap", "lapo", "lapor", "laporator", "laporatory"]), 46, 'Test 72');
test(minimumLengthEncoding(["panorama", "anorama", "norama", "orama", "rama", "ama", "ma", "a", "planet", "lanet", "anet", "net", "et", "t"]), 16, 'Test 73');
test(minimumLengthEncoding(["apple", "ple", "le", "e", "app", "pple", "plea"]), 15, 'Test 74');
test(minimumLengthEncoding(["zebra", "ebra", "bra", "ra", "a", "z"]), 8, 'Test 75');
test(minimumLengthEncoding(["cat", "dog", "god", "tac", "act", "gat"]), 24, 'Test 76');
test(minimumLengthEncoding(["abc", "bcd", "cde", "def", "efg"]), 20, 'Test 77');
test(minimumLengthEncoding(["coding", "ing", "ode", "de", "e"]), 11, 'Test 78');
test(minimumLengthEncoding(["aaa", "aab", "aba", "abb", "baa", "bab", "bba", "bbb", "bbb", "bbb"]), 32, 'Test 79');
test(minimumLengthEncoding(["abcd", "bcd", "cd", "d", "abcds", "bcde", "cde", "de", "efg", "fgh", "ghi", "hij", "ijk", "jkl", "klm", "lmn", "mno", "nop", "opq", "pqr", "qrs", "rst", "stu", "tuv", "uvw", "vwx", "wxy", "xyz"]), 96, 'Test 80');
test(minimumLengthEncoding(["unique", "un", "iq", "que", "eue", "eu", "ue", "eq", "qu", "uq"]), 29, 'Test 81');
test(minimumLengthEncoding(["banana", "ana", "nana", "anaconda", "conda"]), 16, 'Test 82');
test(minimumLengthEncoding(["zebra", "ebra", "bra", "ra", "a", "cab", "ab", "b"]), 10, 'Test 83');
test(minimumLengthEncoding(["programming", "ming", "gram", "ing", "am", "m"]), 17, 'Test 84');
test(minimumLengthEncoding(["a", "ab", "abc", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh", "abcdefghi", "abcdefghij"]), 65, 'Test 85');
test(minimumLengthEncoding(["algorithm", "lgorithm", "gorithm", "orithm", "rithm", "ithm", "thm", "hm", "m"]), 10, 'Test 86');
test(minimumLengthEncoding(["algorithm", "lgorithm", "gorithm", "rhythm", "hythm", "hythm", "thm", "hm", "m", "a"]), 19, 'Test 87');
test(minimumLengthEncoding(["abcdefgh", "bcdefgh", "cdefgh", "defgh", "efgh", "fgh", "gh", "h"]), 9, 'Test 88');
test(minimumLengthEncoding(["sun", "un", "n", "moon", "oon", "on", "noon", "oon", "on", "n"]), 14, 'Test 89');
test(minimumLengthEncoding(["longest", "longer", "long", "lo", "l", "longestword", "word", "ord", "rd", "d"]), 37, 'Test 90');
test(minimumLengthEncoding(["apple", "peach", "pear", "leap", "lead", "meat", "heat", "seat"]), 42, 'Test 91');
test(minimumLengthEncoding(["watermelon", "atermelon", "termelon", "ermelon", "rmelon", "melon", "elon", "lon", "on", "n", "w"]), 13, 'Test 92');
test(minimumLengthEncoding(["aaaa", "aaab", "aabb", "abbb", "bbbb"]), 25, 'Test 93');
test(minimumLengthEncoding(["banana", "ananas", "nana", "ana", "na", "a", "banana", "ananas", "nana", "ana", "na", "a"]), 14, 'Test 94');
test(minimumLengthEncoding(["aaaa", "bbbb", "cccc", "dddd", "eeee", "ffff", "gggg", "hhhh", "iiii", "jjjj", "kkkk", "llll", "mmmm", "nnnn", "oooo", "pppp", "qqqq", "rrrr", "ssss", "tttt"]), 100, 'Test 95');
test(minimumLengthEncoding(["aaa", "aab", "aac", "aba", "abc", "aca", "baa", "bab", "bac", "bba", "bbb", "bbc", "bca", "bcb", "bcc", "caa", "cab", "cac", "cba", "cbb", "cbc", "cca", "ccb", "ccc"]), 96, 'Test 96');
test(minimumLengthEncoding(["aaaa", "aaa", "aa", "a", "aaaaa"]), 6, 'Test 97');
test(minimumLengthEncoding(["banana", "nana", "ana", "na", "a", "anana", "ananana", "anananana", "ananananana"]), 19, 'Test 98');
test(minimumLengthEncoding(["abcdexyz", "bcdexyz", "cdexyz", "dexyz", "exyz", "xyz", "yz", "z"]), 9, 'Test 99');
test(minimumLengthEncoding(["banana", "anana", "nana", "ana", "na", "a", "cat", "at", "t"]), 11, 'Test 100');
test(minimumLengthEncoding(["xyz", "yz", "z", "xy", "x", "yx", "zxy", "zyx", "yxz", "zyxz", "xyzz", "zyzzz", "zyzyz"]), 34, 'Test 101');
test(minimumLengthEncoding(["abcdefgh", "bcdefghi", "cdefghij", "defghijk", "efghijkl", "fghijklm", "ghijklmn", "hijklmno", "ijklmnop", "jklmnopq", "klmnopqr", "lmnopqrs", "mnopqrst", "nopqrstu", "opqrstuv", "pqrstuvw", "qrstuvwx", "rstuvwxy", "stuvwxyz"]), 171, 'Test 102');
test(minimumLengthEncoding(["programming", "gramming", "mming", "ming", "ing", "ng", "g"]), 12, 'Test 103');
test(minimumLengthEncoding(["abcde", "bcdef", "cdefg", "defgh", "efghi", "fghij", "ghijk", "hijkl", "ijklm", "jklmn", "klmno", "lmnop", "mnopq", "nopqr", "opqrs", "pqrst", "qrstu", "rstuv", "stuvw", "tuvwx", "uvwxy", "vwxyz", "wxyz", "xyz", "yz", "z"]), 132, 'Test 104');
test(minimumLengthEncoding(["apple", "app", "ple", "le", "e"]), 10, 'Test 105');
test(minimumLengthEncoding(["pqr", "pqs", "prq", "prs", "psq", "psr", "rpq", "rps", "rsp", "rsq", "spq", "spr"]), 48, 'Test 106');
test(minimumLengthEncoding(["ab", "bc", "cd", "de", "ef", "fg", "gh", "hi", "ij", "jk", "kl", "lm", "mn", "no", "op", "pq", "qr", "rs", "st", "tu", "uv", "vw", "wx", "xy", "yz"]), 75, 'Test 107');
test(minimumLengthEncoding(["apple", "ple", "le", "e", "orange", "range", "age", "ge"]), 17, 'Test 108');
test(minimumLengthEncoding(["abcd", "bcd", "cd", "d", "abcd", "bcd", "cd", "d"]), 5, 'Test 109');
test(minimumLengthEncoding(["apple", "ple", "app", "le", "p", "l", "e", "a"]), 14, 'Test 110');
test(minimumLengthEncoding(["abc", "bcd", "cde", "def", "efg", "fgh", "ghi", "hij", "ijk", "jkl", "klm", "lmn", "mno", "nop", "opq", "pqr", "qrs", "rst", "stu", "tuv", "uvw", "vwx", "wxy", "xyz"]), 96, 'Test 111');
test(minimumLengthEncoding(["optimization", "ptimization", "timization", "imization", "mization", "ization", "zation", "ation", "tion", "ion", "on", "n"]), 13, 'Test 112');
test(minimumLengthEncoding(["sequence", "equence", "quence", "uence", "ence", "nce", "ce", "e", "s", "sequ", "seq"]), 20, 'Test 113');
test(minimumLengthEncoding(["abcdefg", "cdefg", "defg", "efg", "fg", "g"]), 8, 'Test 114');
test(minimumLengthEncoding(["abracadabra", "racadabra", "cadabra", "adabra", "dabra", "abra", "bra", "ra", "a"]), 12, 'Test 115');
test(minimumLengthEncoding(["kitten", "ten", "en", "n", "sitting", "ting", "ing", "ng", "g"]), 15, 'Test 116');

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
