// Test: 3008. Find Beautiful Indices In The Given Array Ii
// 122 test cases from LeetCodeDataset
// Run: node test.js

const { beautifulIndices } = require("./solution");

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

console.log("\n3008. Find Beautiful Indices In The Given Array Ii\n");

test(beautifulIndices("beautifulbeautifulbeautiful", "ful", "uti", 5), [6, 15, 24], 'Test 1');
test(beautifulIndices("abcabcabcabcabc", "abc", "bca", 3), [0, 3, 6, 9, 12], 'Test 2');
test(beautifulIndices("mississippi", "issi", "ippi", 4), [4], 'Test 3');
test(beautifulIndices("abcabcabc", "abc", "cab", 3), [0, 3, 6], 'Test 4');
test(beautifulIndices("abcabcabc", "abc", "cab", 2), [0, 3, 6], 'Test 5');
test(beautifulIndices("aaaaaaa", "aa", "aa", 2), [0, 1, 2, 3, 4, 5], 'Test 6');
test(beautifulIndices("beautifuldayinbeautifultown", "day", "town", 10), [], 'Test 7');
test(beautifulIndices("hellohellohello", "he", "lo", 2), [5, 10], 'Test 8');
test(beautifulIndices("abcd", "a", "a", 4), [0], 'Test 9');
test(beautifulIndices("isawsquirrelnearmysquirrelhouseohmy", "my", "squirrel", 15), [16, 33], 'Test 10');
test(beautifulIndices("hellobeautifulworld", "bea", "ful", 5), [], 'Test 11');
test(beautifulIndices("ababababa", "aba", "bab", 2), [0, 2, 4, 6], 'Test 12');
test(beautifulIndices("hellohellohello", "he", "lo", 5), [0, 5, 10], 'Test 13');
test(beautifulIndices("bananaananabananaba", "ana", "nana", 3), [1, 3, 6, 8, 12, 14], 'Test 14');
test(beautifulIndices("babababababababababa", "aba", "bab", 2), [1, 3, 5, 7, 9, 11, 13, 15, 17], 'Test 15');
test(beautifulIndices("sequenceofcharacters", "que", "nce", 4), [2], 'Test 16');
test(beautifulIndices("abababababab", "aba", "bab", 2), [0, 2, 4, 6, 8], 'Test 17');
test(beautifulIndices("mississippimississippi", "issi", "ippi", 6), [1, 4, 12, 15], 'Test 18');
test(beautifulIndices("mississippi", "issi", "issip", 5), [1, 4], 'Test 19');
test(beautifulIndices("zzzzzzzzzzzzzzz", "zzz", "zzz", 3), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'Test 20');
test(beautifulIndices("qwertyuiopqwertyuiop", "qwerty", "uiop", 4), [10], 'Test 21');
test(beautifulIndices("xyxxyxyxyxyxyxyxyx", "xy", "yx", 4), [0, 3, 5, 7, 9, 11, 13, 15], 'Test 22');
test(beautifulIndices("zzzzzzzzzzzzzzzzzzzzzzzzzz", "zzz", "zzzz", 5), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 'Test 23');
test(beautifulIndices("abcdefgabcdefgabcdefgabcdefgabcdefg", "abc", "def", 12), [0, 7, 14, 21, 28], 'Test 24');
test(beautifulIndices("repeatedrepeatedrepeated", "pea", "eat", 6), [2, 10, 18], 'Test 25');
test(beautifulIndices("ababababababababab", "aba", "bab", 1), [0, 2, 4, 6, 8, 10, 12, 14], 'Test 26');
test(beautifulIndices("qwertyuiopqwertyuiopqwertyuiop", "qwerty", "uiop", 15), [0, 10, 20], 'Test 27');
test(beautifulIndices("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzz", "zzz", 250000), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 'Test 28');
test(beautifulIndices("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm", "erty", "ghjk", 10), [], 'Test 29');
test(beautifulIndices("abcdefghijabcdefghijabcdefghij", "def", "jabcdefghi", 12), [3, 13, 23], 'Test 30');
test(beautifulIndices("bananaananabayana", "ana", "anaba", 6), [3, 6, 8, 14], 'Test 31');
test(beautifulIndices("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "mnop", "qrst", 10), [], 'Test 32');
test(beautifulIndices("longstringwithrepeatedpatternsandpatterns", "pattern", "patterns", 10), [22, 33], 'Test 33');
test(beautifulIndices("mississippi", "iss", "sis", 4), [1, 4], 'Test 34');
test(beautifulIndices("bananaananabananabanana", "ana", "anana", 5), [1, 3, 6, 8, 12, 14, 18, 20], 'Test 35');
test(beautifulIndices("qwertyuiopqwertyuiop", "rty", "tyu", 6), [3, 13], 'Test 36');
test(beautifulIndices("xyzyzyzyzyzyzyz", "zyz", "yzy", 4), [2, 4, 6, 8, 10, 12], 'Test 37');
test(beautifulIndices("thisisaverylongstringwithvariouswords", "word", "words", 20), [32], 'Test 38');
test(beautifulIndices("zzzzzzzzzzzzzzzzz", "zzz", "zzz", 1), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 39');
test(beautifulIndices("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy", "xyxy", "yxyx", 6), [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50], 'Test 40');
test(beautifulIndices("xyzzxyzzxyzzxyzz", "zz", "xy", 4), [2, 6, 10, 14], 'Test 41');
test(beautifulIndices("abababababababa", "aba", "bab", 5), [0, 2, 4, 6, 8, 10, 12], 'Test 42');
test(beautifulIndices("abcdabcdabcdabcd", "abcd", "dcba", 8), [], 'Test 43');
test(beautifulIndices("qwertyuiopasdfghjklzxcvbnmqwertyuiop", "asdf", "ghjk", 10), [10], 'Test 44');
test(beautifulIndices("lkjsdhflksjdhflksjdhflksjdhf", "ksj", "jdh", 10), [8, 15, 22], 'Test 45');
test(beautifulIndices("thisisaverylongstringwithmultiplesubstrings", "string", "multiplesubstrings", 20), [15, 36], 'Test 46');
test(beautifulIndices("abcdefghijabcdefghijabcdefghij", "ghi", "def", 3), [6, 16, 26], 'Test 47');
test(beautifulIndices("abababababababababababababababababababababababababab", "abab", "baba", 5), [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48], 'Test 48');
test(beautifulIndices("qwertyuiopqwertyuiopqwertyuiop", "qwe", "rty", 5), [0, 10, 20], 'Test 49');
test(beautifulIndices("mississippi", "issi", "ippi", 5), [4], 'Test 50');
test(beautifulIndices("bananaananabananana", "ana", "nana", 7), [1, 3, 6, 8, 12, 14, 16], 'Test 51');
test(beautifulIndices("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abc", "xyz", 20), [], 'Test 52');
test(beautifulIndices("hellohellohellohello", "llo", "hel", 7), [2, 7, 12, 17], 'Test 53');
test(beautifulIndices("bananaananabananabanana", "ana", "nan", 5), [1, 3, 6, 8, 12, 14, 18, 20], 'Test 54');
test(beautifulIndices("repeatedrepeatedrepeated", "repeated", "atedrepe", 9), [0, 8, 16], 'Test 55');
test(beautifulIndices("mississippi", "iss", "sip", 5), [1, 4], 'Test 56');
test(beautifulIndices("aabbccddeeffgghhiijj", "abcd", "bcde", 4), [], 'Test 57');
test(beautifulIndices("mississippi", "iss", "sis", 2), [1, 4], 'Test 58');
test(beautifulIndices("patternpatternpatternpattern", "pattern", "ternpat", 15), [0, 7, 14, 21], 'Test 59');
test(beautifulIndices("abcdefghijabcdefghij", "abc", "def", 10), [0, 10], 'Test 60');
test(beautifulIndices("mississippiississipi", "iss", "issi", 4), [1, 4, 11, 14], 'Test 61');
test(beautifulIndices("abacabadabacaba", "aba", "aca", 8), [0, 4, 8, 12], 'Test 62');
test(beautifulIndices("ababababababababab", "aba", "bab", 6), [0, 2, 4, 6, 8, 10, 12, 14], 'Test 63');
test(beautifulIndices("xyzxyzxyzxyzxyzxyz", "xyz", "zyx", 5), [], 'Test 64');
test(beautifulIndices("ababababababababab", "aba", "bab", 5), [0, 2, 4, 6, 8, 10, 12, 14], 'Test 65');
test(beautifulIndices("bananaananabanananananabanana", "ana", "nana", 8), [1, 3, 6, 8, 12, 14, 16, 18, 20, 24, 26], 'Test 66');
test(beautifulIndices("overlappingoverlapping", "over", "lap", 5), [0, 11], 'Test 67');
test(beautifulIndices("banana", "ana", "nan", 2), [1, 3], 'Test 68');
test(beautifulIndices("longstringwithsubstring", "with", "subs", 10), [10], 'Test 69');
test(beautifulIndices("abcdefghijklmnopqrstuvwxyz", "xyz", "uvw", 3), [23], 'Test 70');
test(beautifulIndices("mississippi", "iss", "issi", 3), [1, 4], 'Test 71');
test(beautifulIndices("aaaaabbbbbbbcccccc", "bbbb", "cccc", 6), [6, 7, 8], 'Test 72');
test(beautifulIndices("abcdefghijabcdefghij", "efgh", "ghij", 5), [4, 14], 'Test 73');
test(beautifulIndices("repeatedpatternrepeatedpattern", "repe", "atte", 8), [15], 'Test 74');
test(beautifulIndices("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "mnopqr", "ghijkl", 15), [12, 38], 'Test 75');
test(beautifulIndices("abracadabraabracadabra", "abra", "cad", 5), [0, 7, 11, 18], 'Test 76');
test(beautifulIndices("foobarfoobarfoobar", "foo", "bar", 6), [0, 6, 12], 'Test 77');
test(beautifulIndices("abcdefghijklmnopqrstuvwxyz", "def", "xyz", 15), [], 'Test 78');
test(beautifulIndices("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zz", "zz", 1), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], 'Test 79');
test(beautifulIndices("hellohellohellohello", "hel", "ell", 4), [0, 5, 10, 15], 'Test 80');
test(beautifulIndices("complexstringwithmultipleoverlaps", "over", "overlap", 12), [25], 'Test 81');
test(beautifulIndices("zzzzzzzzzzzzzzzzzzzz", "zzz", "zzzz", 3), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 'Test 82');
test(beautifulIndices("abracadabraabracadabra", "cad", "bra", 8), [4, 15], 'Test 83');
test(beautifulIndices("xyxyxyxyxyxyxyxyxyxyxy", "xyx", "yxy", 3), [0, 2, 4, 6, 8, 10, 12, 14, 16, 18], 'Test 84');
test(beautifulIndices("abcdefghijabcdefghij", "def", "ghi", 8), [3, 13], 'Test 85');
test(beautifulIndices("bananaananabanana", "ana", "naa", 7), [1, 3, 6, 8], 'Test 86');
test(beautifulIndices("racecaracecaracecaracecar", "ace", "cec", 4), [1, 7, 13, 19], 'Test 87');
test(beautifulIndices("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm", "qwerty", "zxcvbn", 10), [26], 'Test 88');
test(beautifulIndices("abcdabcdabcdabcdabcdabcdabcd", "abc", "bcd", 1), [0, 4, 8, 12, 16, 20, 24], 'Test 89');
test(beautifulIndices("abcdefghijabcdefghij", "abc", "cde", 10), [0, 10], 'Test 90');
test(beautifulIndices("mississippi", "issi", "issip", 2), [4], 'Test 91');
test(beautifulIndices("xyzxyzxyzxyzxyzxyz", "xyz", "zyx", 4), [], 'Test 92');
test(beautifulIndices("repeatedrepeatedrepeatedrepeated", "repeated", "eatedr", 18), [0, 8, 16, 24], 'Test 93');
test(beautifulIndices("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", "abcabc", "bcabca", 12), [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42], 'Test 94');
test(beautifulIndices("xyxyxyxyxyxyxyxyxy", "xyxy", "xyxyxy", 8), [0, 2, 4, 6, 8, 10, 12, 14], 'Test 95');
test(beautifulIndices("abababababababab", "ab", "ba", 2), [0, 2, 4, 6, 8, 10, 12, 14], 'Test 96');
test(beautifulIndices("abababababab", "aba", "bab", 5), [0, 2, 4, 6, 8], 'Test 97');
test(beautifulIndices("abcdefghijabcdefghijabcdefghijabcdefghij", "cde", "efg", 5), [2, 12, 22, 32], 'Test 98');
test(beautifulIndices("abcdefgabcdefgabcdefg", "def", "abc", 10), [3, 10, 17], 'Test 99');
test(beautifulIndices("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghij", "ghij", "efgh", 20), [6, 16, 26, 36, 46], 'Test 100');
test(beautifulIndices("hellohellohello", "hello", "ohell", 6), [0, 5, 10], 'Test 101');
test(beautifulIndices("aabbccddeeffaabbccddeeff", "abb", "bbc", 2), [1, 13], 'Test 102');
test(beautifulIndices("ababababababababab", "aba", "bab", 4), [0, 2, 4, 6, 8, 10, 12, 14], 'Test 103');
test(beautifulIndices("abcdefghijabcdefghijabcdefghij", "def", "ghi", 3), [3, 13, 23], 'Test 104');
test(beautifulIndices("repeatedsubstringrepeatedsubstring", "substring", "substr", 15), [8, 25], 'Test 105');
test(beautifulIndices("abcabcabcabcabcabc", "abc", "abcabc", 5), [0, 3, 6, 9, 12, 15], 'Test 106');
test(beautifulIndices("qwertyuiopasdfghjklzxcvbnmqwerty", "erty", "asdf", 10), [2], 'Test 107');
test(beautifulIndices("abcdefghijabcdefghijabcdefghij", "abc", "efg", 10), [0, 10, 20], 'Test 108');
test(beautifulIndices("abacabadabacaba", "aba", "aca", 5), [0, 4, 8, 12], 'Test 109');
test(beautifulIndices("hellohellohellohellohellohellohello", "hello", "elloh", 20), [0, 5, 10, 15, 20, 25, 30], 'Test 110');
test(beautifulIndices("abcabcabcabcabcabcabcabcabcabc", "abc", "cab", 2), [0, 3, 6, 9, 12, 15, 18, 21, 24, 27], 'Test 111');
test(beautifulIndices("mississippiississippiississippiississippiississippi", "issi", "issip", 15), [1, 4, 11, 14, 21, 24, 31, 34, 41, 44], 'Test 112');
test(beautifulIndices("hellohellohellohello", "hello", "lohel", 7), [0, 5, 10, 15], 'Test 113');
test(beautifulIndices("hellohellohellohello", "ell", "ell", 2), [1, 6, 11, 16], 'Test 114');
test(beautifulIndices("abcdefghijabcdefghijabcdefghij", "abc", "ghi", 7), [0, 10, 20], 'Test 115');
test(beautifulIndices("thisisaverylongstringwithmanywords", "very", "with", 15), [7], 'Test 116');
test(beautifulIndices("hellohellohellohello", "hello", "hello", 0), [0, 5, 10, 15], 'Test 117');
test(beautifulIndices("mississippiississippi", "issi", "ippi", 10), [1, 4, 11, 14], 'Test 118');
test(beautifulIndices("zzzzzzzzzzzzzzzzzzzz", "zzz", "zzzz", 8), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 'Test 119');
test(beautifulIndices("bananaanananabanananabanananabanananabananana", "anan", "nana", 8), [1, 6, 8, 14, 16, 22, 24, 30, 32, 38, 40], 'Test 120');
test(beautifulIndices("xyxxyxyxyxxyxyxyxyxyxy", "xyx", "xyxy", 4), [0, 3, 5, 7, 10, 12, 14, 16, 18], 'Test 121');
test(beautifulIndices("abcdefghijabcdefghijabcdefghij", "abc", "ghi", 5), [10, 20], 'Test 122');

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
