// Test: 1170. Compare Strings By Frequency Of The Smallest Character
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { numSmallerByFrequency } = require("./solution");

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

console.log("\n1170. Compare Strings By Frequency Of The Smallest Character\n");

test(numSmallerByFrequency(["ccc"], ["a","bb","ccc","dddd"]), [1], 'Test 1');
test(numSmallerByFrequency(["a", "b", "c"], ["d", "e", "f", "g"]), [0, 0, 0], 'Test 2');
test(numSmallerByFrequency(["abc", "def"], ["ghi", "jkl"]), [0, 0], 'Test 3');
test(numSmallerByFrequency(["zzz"], ["aaa","bbb","ccc"]), [0], 'Test 4');
test(numSmallerByFrequency(["abc", "bcd"], ["def", "ghi"]), [0, 0], 'Test 5');
test(numSmallerByFrequency(["aaa", "bbb", "ccc"], ["ddd", "eee", "fff"]), [0, 0, 0], 'Test 6');
test(numSmallerByFrequency(["a","aa","aaa"], ["b","bb","bbb","bbbb"]), [3, 2, 1], 'Test 7');
test(numSmallerByFrequency(["cbd"], ["zaaaz"]), [1], 'Test 8');
test(numSmallerByFrequency(["bbb","cc"], ["a","aa","aaa","aaaa"]), [1, 2], 'Test 9');
test(numSmallerByFrequency(["a"], ["b","c","d"]), [0], 'Test 10');
test(numSmallerByFrequency(["abc","bcd"], ["cde","def","efg"]), [0, 0], 'Test 11');
test(numSmallerByFrequency(["xyz"], ["aaa","bbb","ccc","ddd","eee"]), [5], 'Test 12');
test(numSmallerByFrequency(["a", "aa"], ["b", "bb", "bbb"]), [2, 1], 'Test 13');
test(numSmallerByFrequency(["xyz"], ["abc", "def", "ghi"]), [0], 'Test 14');
test(numSmallerByFrequency(["a","b","c","d","e","f","g","h","i","j"], ["k","l","m","n","o","p","q","r","s","t"]), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 15');
test(numSmallerByFrequency(["zz","zaz","zzz"], ["aaa","aa","a","aaaaa","aaaa","aaaab"]), [4, 5, 3], 'Test 16');
test(numSmallerByFrequency(["aabbcc", "ddeeff", "gghhii"], ["jjkkll", "mmnnoo", "ppqqrr", "ssttuu"]), [0, 0, 0], 'Test 17');
test(numSmallerByFrequency(["aaa", "aab", "aac"], ["bbb", "bbc", "bba", "abb", "aba", "aab"]), [0, 1, 1], 'Test 18');
test(numSmallerByFrequency(["ab","bc","cd"], ["a","b","c","d","e","f","g","h"]), [0, 0, 0], 'Test 19');
test(numSmallerByFrequency(["abcd","dcba","abcd","dcba"], ["abcd","dcba","abcd","dcba","abcd","dcba"]), [0, 0, 0, 0], 'Test 20');
test(numSmallerByFrequency(["abcd", "abdc", "acdb"], ["bcde", "cdef", "defg", "efgh"]), [0, 0, 0], 'Test 21');
test(numSmallerByFrequency(["aaaa", "bbb", "cc"], ["zzzz", "zzz", "zz", "z"]), [0, 1, 2], 'Test 22');
test(numSmallerByFrequency(["a", "b", "c", "d", "e", "f"], ["g", "h", "i", "j", "k", "l", "m", "n", "o", "p"]), [0, 0, 0, 0, 0, 0], 'Test 23');
test(numSmallerByFrequency(["abcdabcd", "bcdbcd", "cdcdcd"], ["ddd", "dddd", "ddddd"]), [3, 3, 2], 'Test 24');
test(numSmallerByFrequency(["a", "a", "a", "a"], ["b", "b", "b", "b"]), [0, 0, 0, 0], 'Test 25');
test(numSmallerByFrequency(["abcde", "bcdef", "cdefg"], ["defgh", "efghi", "fghij", "ghijk", "hijkl", "ijklm"]), [0, 0, 0], 'Test 26');
test(numSmallerByFrequency(["zzzzzzz", "zzzzzz", "zzzzz", "zzzz", "zzz"], ["zzzz", "zzz", "zz", "z", "a"]), [0, 0, 0, 0, 1], 'Test 27');
test(numSmallerByFrequency(["hello", "world"], ["python", "java", "csharp", "ruby", "swift"]), [1, 1], 'Test 28');
test(numSmallerByFrequency(["abcd", "ab", "abc"], ["abcd", "abc", "ab", "a"]), [0, 0, 0], 'Test 29');
test(numSmallerByFrequency(["x", "xx", "xxx", "xxxx", "xxxxx"], ["y", "yy", "yyy", "yyyy", "yyyyy", "yyyyyy"]), [5, 4, 3, 2, 1], 'Test 30');
test(numSmallerByFrequency(["xyxzyz", "yzyzyx", "zxzyxz"], ["zxyzxy", "xyzxyz", "yzxyzx", "zyxzyz"]), [0, 3, 0], 'Test 31');
test(numSmallerByFrequency(["abcdefghij", "bcdefghijk", "cdefghijkl"], ["defghijklm", "efghijklmn", "fghijklmno", "ghijklmnop", "hijklmnopq", "ijklmnopqr"]), [0, 0, 0], 'Test 32');
test(numSmallerByFrequency(["xyz", "xyzz", "xyzzz"], ["wxyz", "wwxyz", "wwwxyz", "wwwwxyz"]), [3, 3, 3], 'Test 33');
test(numSmallerByFrequency(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba"], ["qwertyuiopasdfghjklzxcvbnm","mnbvcxzasdfghjklpoiuytrewq"]), [0, 0], 'Test 34');
test(numSmallerByFrequency(["zzzzzz","yyyyyy","xxxxxx"], ["wwwwww","vvvvvv","uuuuuu","tttttt"]), [0, 0, 0], 'Test 35');
test(numSmallerByFrequency(["aabbcc", "bbccdd", "ccddee", "ddeeff", "eeffgg"], ["ffgghh", "gghhiijj", "hhiijjkk", "iijjkkll", "jjkkllmm"]), [0, 0, 0, 0, 0], 'Test 36');
test(numSmallerByFrequency(["abcdef", "bcdefg", "cdefgh"], ["defghi", "efghij", "fghijk", "ghijkl", "hijklm", "ijklmn"]), [0, 0, 0], 'Test 37');
test(numSmallerByFrequency(["zzz", "zzzz"], ["aaaaa", "aaa", "aa", "a"]), [1, 1], 'Test 38');
test(numSmallerByFrequency(["a", "aa", "aaa", "aaaa", "aaaaa"], ["z", "zz", "zzz", "zzzz", "zzzzz", "zzzzzz"]), [5, 4, 3, 2, 1], 'Test 39');
test(numSmallerByFrequency(["abcd" * 2, "efgh" * 2, "ijkl" * 2], ["mnop" * 2, "qrst" * 2, "uvwx" * 2, "yzab" * 2]), Error: Solution.numSmallerByFrequency[] missing 2 required positional arguments: 'queries' and 'words', 'Test 40');
test(numSmallerByFrequency(["zzzzz", "zzzz", "zzz", "zz", "z"], ["zzzzzz", "zzzzz", "zzzz", "zzz", "zz", "z", "a"]), [1, 2, 3, 4, 5], 'Test 41');
test(numSmallerByFrequency(["zzz", "zz", "z"], ["aaa", "aa", "a", "aaaa"]), [1, 2, 3], 'Test 42');
test(numSmallerByFrequency(["aabbcc","bbaacc","ccaabb"], ["aabbb","bbccc","ccaaa","abcabc","aabbccaa"]), [2, 2, 2], 'Test 43');
test(numSmallerByFrequency(["aab","abb","abc"], ["aab","abb","abc","acc","bac","bca","cab","cba","cca"]), [0, 1, 1], 'Test 44');
test(numSmallerByFrequency(["aaaaab", "aaaabb", "aaabbb", "aabbbb", "abbbbb"], ["bbbbb", "bbbb", "bbb", "bb", "b"]), [0, 1, 2, 3, 4], 'Test 45');
test(numSmallerByFrequency(["apple","banana","cherry"], ["date","elderberry","fig","grape","kiwi","lemon","mango","nectarine","orange","papaya"]), [2, 0, 2], 'Test 46');
test(numSmallerByFrequency(["a" * 5, "b" * 5, "c" * 5, "d" * 5], ["e" * 5, "f" * 5, "g" * 5, "h" * 5, "i" * 5]), Error: Solution.numSmallerByFrequency[] missing 2 required positional arguments: 'queries' and 'words', 'Test 47');
test(numSmallerByFrequency(["apple", "banana", "cherry"], ["date", "fig", "grape", "kiwi"]), [1, 0, 1], 'Test 48');
test(numSmallerByFrequency(["aabbcc", "bbaacc", "ccaabb"], ["aabbc", "bbccc", "ccaab", "aaabb", "bbcca", "ccaab"]), [1, 1, 1], 'Test 49');
test(numSmallerByFrequency(["apple", "banana", "cherry"], ["date", "elderberry", "fig", "grape"]), [0, 0, 0], 'Test 50');
test(numSmallerByFrequency(["zzzzz", "zzzz", "zzz", "zz", "z"], ["aaaaa", "aaaa", "aaa", "aa", "a"]), [0, 1, 2, 3, 4], 'Test 51');
test(numSmallerByFrequency(["mnopqr", "nopqrs", "opqrst"], ["pqrsqt", "qrstuv", "rstuvw", "stuvwx", "tuvwxy", "uvwxyx"]), [0, 0, 0], 'Test 52');
test(numSmallerByFrequency(["zzz", "yyy", "xxx"], ["www", "vvv", "uuu", "ttt", "ss"]), [0, 0, 0], 'Test 53');
test(numSmallerByFrequency(["aabbcc","bbccdd","ccddeeff"], ["abc","bcd","cde","def","efg","fgh","ghi","hij"]), [0, 0, 0], 'Test 54');
test(numSmallerByFrequency(["abcd", "abc", "ab"], ["zzzz", "zzz", "zz", "z"]), [3, 3, 3], 'Test 55');
test(numSmallerByFrequency(["aabbcc", "bbccdd", "ccddaa"], ["ddeeff", "eeffgg", "ffgghh"]), [0, 0, 0], 'Test 56');
test(numSmallerByFrequency(["aab", "aabbb", "aabbbb"], ["b", "bb", "bbb", "bbbb", "bbbbb", "bbbbbb", "bbbbbbb"]), [5, 5, 5], 'Test 57');
test(numSmallerByFrequency(["leetcode","challenge","python"], ["programming","interview","solution","difficulty","easy","hard","medium"]), [1, 1, 1], 'Test 58');
test(numSmallerByFrequency(["abcd", "abcde", "abcdef"], ["bcdefg", "cdefgh", "defghi", "efghij"]), [0, 0, 0], 'Test 59');
test(numSmallerByFrequency(["abcd","abdc","adcb"], ["bcde","dcbe","debc","edcb"]), [0, 0, 0], 'Test 60');
test(numSmallerByFrequency(["mississippi","delaware","kentucky"], ["alabama","missouri","georgia","texas","california","arizona","wyoming"]), [0, 1, 4], 'Test 61');
test(numSmallerByFrequency(["abcdefg", "hijklmn", "opqrstu", "vwxyzab"], ["cdefghi", "defghij", "efghijk", "fghijkl", "ghijklm"]), [0, 0, 0, 0], 'Test 62');
test(numSmallerByFrequency(["abcdef", "ghijkl", "mnopqr"], ["stuvwx", "yzabcd", "efghij", "klmnop", "qrstuv"]), [0, 0, 0], 'Test 63');
test(numSmallerByFrequency(["apple", "banana", "cherry"], ["date", "fig", "grape", "kiwi", "lemon", "mango"]), [1, 0, 1], 'Test 64');
test(numSmallerByFrequency(["hello", "world"], ["python", "java", "c++", "ruby"]), [1, 1], 'Test 65');
test(numSmallerByFrequency(["abcd","abdc","aabc"], ["aaa","aaab","baaab","baaabbb"]), [4, 4, 4], 'Test 66');
test(numSmallerByFrequency(["a"], ["aaaaaaaaaab","aaaaaaaaaa","aaaaaaaaa","aaaaaaaa","aaaaaaa","aaaaaa","aaaaa","aaaa","aaa","aa","a"]), [10], 'Test 67');
test(numSmallerByFrequency(["a", "b", "c", "d", "e", "f"], ["g", "h", "i", "j", "k", "l", "m"]), [0, 0, 0, 0, 0, 0], 'Test 68');
test(numSmallerByFrequency(["zzz","zzzz","zzzzz"], ["zzzzzz","zzzzzzz","zzzzzzzz","zzzzzzzzz"]), [4, 4, 4], 'Test 69');
test(numSmallerByFrequency(["zzzzzz", "zzzzz", "zzzz", "zzz", "zz", "z"], ["aaaaaa", "aaaaa", "aaaa", "aaa", "aa", "a"]), [0, 1, 2, 3, 4, 5], 'Test 70');
test(numSmallerByFrequency(["abcdef", "bcdefg", "cdefgh"], ["defghi", "efghij", "fghijk", "ghijkl", "hijklm"]), [0, 0, 0], 'Test 71');
test(numSmallerByFrequency(["xylophone","guitar","piano"], ["flute","harmonica","trumpet","violin","cello","saxophone","trombone","tuba"]), [2, 2, 2], 'Test 72');
test(numSmallerByFrequency(["zz", "yy", "xx"], ["ww", "vv", "uu", "tt", "ss", "rr", "qq", "pp", "oo", "nn"]), [0, 0, 0], 'Test 73');
test(numSmallerByFrequency(["abcxyz","zzzz","uvw"], ["mnop","qrst","xyz","aabbcc"]), [1, 0, 1], 'Test 74');
test(numSmallerByFrequency(["mnop", "qrst", "uvwx", "yzab", "cdef"], ["efgh", "ghij", "ijkl", "klmn", "lmno"]), [0, 0, 0, 0, 0], 'Test 75');
test(numSmallerByFrequency(["zzz", "yyy", "xxx"], ["www", "vvv", "uuu", "ttt"]), [0, 0, 0], 'Test 76');
test(numSmallerByFrequency(["xyzz","zzyx","zzyy"], ["zzzz","zzyz","zyzz","zzzy","zyyz","zyzy","zyzz","zzzyz"]), [3, 3, 1], 'Test 77');
test(numSmallerByFrequency(["a", "b", "c", "d", "e"], ["f", "g", "h", "i", "j", "k", "l", "m", "n", "o"]), [0, 0, 0, 0, 0], 'Test 78');
test(numSmallerByFrequency(["zzz", "zzzz", "zzzzz"], ["zzzzzz", "zzzzzzz", "zzzzzzzz", "zzzzzzzzz", "zzzzzzzzzz"]), [5, 5, 5], 'Test 79');
test(numSmallerByFrequency(["aaaaa","bbb","cccc"], ["ddd","eee","ffff","ggggg"]), [0, 2, 1], 'Test 80');
test(numSmallerByFrequency(["mnop","qrst","uvwx","yzab"], ["abcd","efgh","ijkl","mnop","qrst","uvwx","yzab"]), [0, 0, 0, 0], 'Test 81');
test(numSmallerByFrequency(["abcdabcd", "abcdeabcde", "abcdefabcdef"], ["bcdefgbcdefg", "cdefghcdefgh", "defghidefghi"]), [0, 0, 0], 'Test 82');
test(numSmallerByFrequency(["zzzz", "yyyy", "xxxx", "wwww"], ["vvvv", "uuuu", "tttt", "ssss", "rrrr", "qqqq", "pppp", "oooo", "nnnn", "mmmm"]), [0, 0, 0, 0], 'Test 83');
test(numSmallerByFrequency(["a" * 10, "b" * 10, "c" * 10], ["d" * 10, "e" * 10, "f" * 10, "g" * 10]), Error: Solution.numSmallerByFrequency[] missing 2 required positional arguments: 'queries' and 'words', 'Test 84');
test(numSmallerByFrequency(["applepie", "bananabread", "cherrypie"], ["strawberry", "blueberry", "raspberry"]), [1, 0, 1], 'Test 85');
test(numSmallerByFrequency(["abcd", "abcde", "abcdef"], ["bcde", "bcdef", "bcdefg", "bcdefgh", "bcdefghi", "bcdefghij"]), [0, 0, 0], 'Test 86');
test(numSmallerByFrequency(["zzz", "yyy", "xxx"], ["www", "vvv", "uuu", "ttt", "sss"]), [0, 0, 0], 'Test 87');
test(numSmallerByFrequency(["abc", "abcd", "abcde", "abcdef"], ["bcde", "cdef", "defg", "efgh", "fghi", "ghij", "hijk", "ijkl"]), [0, 0, 0, 0], 'Test 88');
test(numSmallerByFrequency(["xyz", "xyzz", "xyzzz"], ["uvw", "uvwv", "uvwvv", "uvwvvv", "uvwvvvv", "uvwvvvvv"]), [0, 0, 0], 'Test 89');
test(numSmallerByFrequency(["aabbcc", "bbccdd", "ccddee"], ["ddeeff", "eeffgg", "ffgghh", "gghhii"]), [0, 0, 0], 'Test 90');
test(numSmallerByFrequency(["zzzzz", "yyyyy", "xxxxx"], ["wwwww", "vvvvv", "uuuuu", "ttttt", "sssss"]), [0, 0, 0], 'Test 91');
test(numSmallerByFrequency(["abcdefgh", "hgfedcba", "fedcbahg"], ["ghfedcba", "ahgfedcb", "bahgfedc", "cbahgfed", "dcbahegf", "efgdcba", "gfedcba", "hgfedcb", "abcdefgh"]), [0, 0, 0], 'Test 92');
test(numSmallerByFrequency(["abcdabcd","bcdbcd","cdab"], ["ababcdabcd","bcdbcdabcd","cdababcd","abcdabcdabcd","bcdabcd","cdabcd","abcd"]), [2, 2, 3], 'Test 93');
test(numSmallerByFrequency(["ab", "abc", "abcd"], ["bc", "bcd", "bcde", "bcdef", "bcdefg", "bcdefgh"]), [0, 0, 0], 'Test 94');
test(numSmallerByFrequency(["zzzzzzzzzz", "zzzzzzzzz", "zzzzzzzz", "zzzzzzz", "zzzzzz", "zzzzz", "zzzz", "zzz", "zz", "z"], ["aaaaaaaaaa", "aaaaaaaaa", "aaaaaaaa", "aaaaaaa", "aaaaaa", "aaaaa", "aaaa", "aaa", "aa", "a"]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 95');
test(numSmallerByFrequency(["zz", "yy", "xx", "ww", "vv"], ["uu", "tt", "ss", "rr", "qq", "pp", "oo", "nn", "mm", "ll"]), [0, 0, 0, 0, 0], 'Test 96');
test(numSmallerByFrequency(["abcdef", "ghijkl", "mnopqr"], ["stuvwx", "yzabcd", "efghij", "klmnop"]), [0, 0, 0], 'Test 97');
test(numSmallerByFrequency(["mmmmmm", "nnnnnn", "oooooo", "pppppp"], ["qqqqqq", "rrrrrr", "ssssss", "tttttt"]), [0, 0, 0, 0], 'Test 98');
test(numSmallerByFrequency(["qwerty", "asdfgh", "zxcvbn"], ["poiuyt", "lkjhgf", "mnbvcx", "tyuiop", "ghjkl" "cvbnm"]), [0, 0, 0], 'Test 99');
test(numSmallerByFrequency(["xyz", "zyx", "yxz"], ["qrs", "rsq", "srq"]), [0, 0, 0], 'Test 100');
test(numSmallerByFrequency(["aaaaaaaa", "bbbbbbbb", "cccccccc"], ["dddddddd", "eeeeeeee", "ffffffff", "gggggggg", "hhhhhhhh", "iiiiiiii", "jjjjjjjj", "kkkkkkkk", "llllllll"]), [0, 0, 0], 'Test 101');
test(numSmallerByFrequency(["ab","bc","cd","de","ef"], ["zz","zy","yx","xw","vw","uv","tu","ts","sr","rq","qp","po","on","nm","ml","lk","kj","ji","ih","hg","gf","fe","ed","dc","cb","ba"]), [1, 1, 1, 1, 1], 'Test 102');
test(numSmallerByFrequency(["apple", "banana", "cherry"], ["date", "elderberry", "fig", "grape", "honeydew"]), [0, 0, 0], 'Test 103');

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
