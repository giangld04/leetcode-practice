// Test: 3006. Find Beautiful Indices In The Given Array I
// 115 test cases from LeetCodeDataset
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

console.log("\n3006. Find Beautiful Indices In The Given Array I\n");

test(beautifulIndices("beautifulbeautifulbeautiful", "ful", "aut", 5), [6, 15, 24], 'Test 1');
test(beautifulIndices("hellobeautifulworld", "be", "autiful", 5), [5], 'Test 2');
test(beautifulIndices("beautifulbeautifulbeautiful", "ful", "uti", 5), [6, 15, 24], 'Test 3');
test(beautifulIndices("hellohellohello", "he", "lo", 3), [0, 5, 10], 'Test 4');
test(beautifulIndices("beautifulday", "day", "beat", 10), [], 'Test 5');
test(beautifulIndices("abababab", "ab", "ba", 2), [0, 2, 4, 6], 'Test 6');
test(beautifulIndices("abcabcabcabc", "ab", "bc", 3), [0, 3, 6, 9], 'Test 7');
test(beautifulIndices("hellohellohello", "he", "lo", 2), [5, 10], 'Test 8');
test(beautifulIndices("abcd", "a", "a", 4), [0], 'Test 9');
test(beautifulIndices("aaaaaa", "aa", "aaa", 2), [0, 1, 2, 3, 4], 'Test 10');
test(beautifulIndices("isawsquirrelnearmysquirrelhouseohmy", "my", "squirrel", 15), [16, 33], 'Test 11');
test(beautifulIndices("abababab", "ab", "ba", 1), [0, 2, 4, 6], 'Test 12');
test(beautifulIndices("hellotherehello", "he", "lo", 5), [0, 6, 10], 'Test 13');
test(beautifulIndices("teststringteststring", "test", "ing", 10), [0, 10], 'Test 14');
test(beautifulIndices("abcabcabcabc", "abc", "cab", 3), [0, 3, 6, 9], 'Test 15');
test(beautifulIndices("beautifulbeautiful", "ful", "uti", 5), [6, 15], 'Test 16');
test(beautifulIndices("hellobeautifulworld", "bea", "ful", 7), [5], 'Test 17');
test(beautifulIndices("overlappingoverlappingoverlapping", "over", "lapping", 10), [0, 11, 22], 'Test 18');
test(beautifulIndices("overlappingoverlappingoverlapping", "over", "lap", 5), [0, 11, 22], 'Test 19');
test(beautifulIndices("randomstringwithrandomstringinside", "random", "inside", 25), [16], 'Test 20');
test(beautifulIndices("qwertyuiopqwertyuiop", "erty", "rtyu", 8), [2, 12], 'Test 21');
test(beautifulIndices("abababababab", "aba", "bab", 2), [0, 2, 4, 6, 8], 'Test 22');
test(beautifulIndices("repeatedwordrepeatedwordrepeated", "word", "repeated", 10), [8, 20], 'Test 23');
test(beautifulIndices("xyxxyxyxyxyxxyxyxyxy", "xy", "yx", 4), [0, 3, 5, 7, 9, 12, 14, 16, 18], 'Test 24');
test(beautifulIndices("mississippi", "iss", "sis", 3), [1, 4], 'Test 25');
test(beautifulIndices("uniquestringswithvariouslengthsandcharacters", "strings", "length", 25), [6], 'Test 26');
test(beautifulIndices("longestsubstringhereandthere", "long", "here", 12), [], 'Test 27');
test(beautifulIndices("bananaananabanana", "ana", "nan", 4), [1, 3, 6, 8, 12, 14], 'Test 28');
test(beautifulIndices("mississippi", "issi", "sip", 4), [4], 'Test 29');
test(beautifulIndices("aaaaaabaaaaaabaaaaaabaaaaaabaaaaaabaaaaaabaaaaaab", "aa", "bb", 5), [], 'Test 30');
test(beautifulIndices("xylophonexylophonexylophone", "xylo", "phone", 7), [0, 9, 18], 'Test 31');
test(beautifulIndices("mississippi", "issi", "issi", 3), [1, 4], 'Test 32');
test(beautifulIndices("mississippi", "issi", "issi", 2), [1, 4], 'Test 33');
test(beautifulIndices("xyzxyzxyzxyzxyzxyzxyzxyz", "xyz", "zyx", 2), [], 'Test 34');
test(beautifulIndices("racecaracecaracecar", "ace", "cec", 7), [1, 7, 13], 'Test 35');
test(beautifulIndices("abababababababa", "aba", "bab", 3), [0, 2, 4, 6, 8, 10, 12], 'Test 36');
test(beautifulIndices("overlappingoverlappingoverlapping", "lapping", "over", 10), [4, 15, 26], 'Test 37');
test(beautifulIndices("thelongestwordinenglishdictionary", "word", "english", 15), [10], 'Test 38');
test(beautifulIndices("repeatthisstringmanytimesrepeatthisstringmanytimes", "this", "many", 25), [6, 31], 'Test 39');
test(beautifulIndices("bananaananabanana", "ana", "nana", 6), [1, 3, 6, 8, 12, 14], 'Test 40');
test(beautifulIndices("alibabaibabaibaba", "ali", "iba", 5), [0], 'Test 41');
test(beautifulIndices("bananaananabananananabanana", "ana", "nana", 5), [1, 3, 6, 8, 12, 14, 16, 18, 22, 24], 'Test 42');
test(beautifulIndices("overlappingstringsoverlapping", "lap", "ing", 10), [4, 22], 'Test 43');
test(beautifulIndices("squirrelmysquirrelhouseohmysquirrel", "squirrel", "house", 20), [0, 10, 27], 'Test 44');
test(beautifulIndices("thisisaverylongstringthatcontainsmultipleinstancesofthesamepattern", "this", "that", 25), [0], 'Test 45');
test(beautifulIndices("abcdefgabcdefgabcdefg", "abc", "defg", 15), [0, 7, 14], 'Test 46');
test(beautifulIndices("abababababababababab", "aba", "bab", 5), [0, 2, 4, 6, 8, 10, 12, 14, 16], 'Test 47');
test(beautifulIndices("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy", "xy", "yx", 2), [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32], 'Test 48');
test(beautifulIndices("abababababababababababababababababab", "aba", "bab", 2), [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32], 'Test 49');
test(beautifulIndices("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abc", "xyz", 20), [], 'Test 50');
test(beautifulIndices("complexexamplecomplexexample", "complex", "exam", 15), [0, 14], 'Test 51');
test(beautifulIndices("fuzzywuzzy", "fuz", "uzz", 3), [0], 'Test 52');
test(beautifulIndices("zzzzzzzzzzzzzzzzzzzz", "zzz", "zzz", 2), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 'Test 53');
test(beautifulIndices("findingbeautifulindices", "find", "ind", 7), [0], 'Test 54');
test(beautifulIndices("aaaaaaabaaaaaa", "aa", "aaa", 5), [0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12], 'Test 55');
test(beautifulIndices("repeatedsubstringsarecool", "are", "cool", 10), [18], 'Test 56');
test(beautifulIndices("longstringwithmultipleoccurrencesofaandb", "multiple", "occurrences", 30), [14], 'Test 57');
test(beautifulIndices("overlappingoverlapping", "over", "lap", 8), [0, 11], 'Test 58');
test(beautifulIndices("repeatedpatternsrepeatedpatternsrepeatedpatterns", "repeated", "patterns", 20), [0, 16, 32], 'Test 59');
test(beautifulIndices("mississippiissiisipiissipississippi", "issi", "ippi", 10), [1, 4, 11, 25, 28], 'Test 60');
test(beautifulIndices("ababababababababababababababababa", "aba", "bab", 4), [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 'Test 61');
test(beautifulIndices("mississippiississippiississippi", "issi", "miss", 12), [1, 4, 11], 'Test 62');
test(beautifulIndices("xyxyxyxyxyxy", "xyx", "yxy", 4), [0, 2, 4, 6, 8], 'Test 63');
test(beautifulIndices("abcdefghijabcdefghij", "def", "ghi", 10), [3, 13], 'Test 64');
test(beautifulIndices("mississippi", "iss", "issi", 4), [1, 4], 'Test 65');
test(beautifulIndices("onetwothreefourfivesixseveneightnine", "one", "two", 5), [0], 'Test 66');
test(beautifulIndices("aaaaaaaaaabaaaaaaaaaabaaaaaaaaaab", "aaaaaa", "aaab", 15), [0, 1, 2, 3, 4, 11, 12, 13, 14, 15, 22, 23, 24, 25, 26], 'Test 67');
test(beautifulIndices("programmingisfun", "fun", "ing", 10), [13], 'Test 68');
test(beautifulIndices("abracadabra", "abr", "cad", 8), [0, 7], 'Test 69');
test(beautifulIndices("abcdefghijabcdefghijabcdefghij", "cdef", "ghij", 5), [2, 12, 22], 'Test 70');
test(beautifulIndices("repeatedrepeatedrepeated", "peat", "peat", 3), [2, 10, 18], 'Test 71');
test(beautifulIndices("abcdefabcdefabcdefabcdefabcdef", "cdef", "ab", 8), [2, 8, 14, 20, 26], 'Test 72');
test(beautifulIndices("zzzzzzzzzzzzzzzzzzzz", "zzz", "zz", 1), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 'Test 73');
test(beautifulIndices("abcdefghijabcdefghijabcdefghij", "abc", "efg", 15), [0, 10, 20], 'Test 74');
test(beautifulIndices("abcdefghijabcdefghij", "abc", "efg", 12), [0, 10], 'Test 75');
test(beautifulIndices("thisisaverylongstringwithaverylongsubstring", "very", "long", 20), [7, 26], 'Test 76');
test(beautifulIndices("squirrelmysquirrelhouse", "my", "squirrel", 10), [8], 'Test 77');
test(beautifulIndices("bananaananabananananana", "ana", "nan", 5), [1, 3, 6, 8, 12, 14, 16, 18, 20], 'Test 78');
test(beautifulIndices("mississippi", "iss", "sip", 4), [4], 'Test 79');
test(beautifulIndices("abababababab", "aba", "bab", 3), [0, 2, 4, 6, 8], 'Test 80');
test(beautifulIndices("beautifulbeautifulbeautifulbeautiful", "bea", "ful", 15), [0, 9, 18, 27], 'Test 81');
test(beautifulIndices("thisisaverylongstringwithrepeatedsubstringsandlongoccurrencesofpatterns", "long", "pattern", 30), [46], 'Test 82');
test(beautifulIndices("beautifuldaybeautifulday", "day", "beau", 12), [9, 21], 'Test 83');
test(beautifulIndices("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyz", "xyz", "yzx", 2), [0, 3, 6, 9, 12, 15, 18, 21, 24, 27], 'Test 84');
test(beautifulIndices("thisisaverylongstringwithmultiplesubstrings", "very", "string", 20), [7], 'Test 85');
test(beautifulIndices("zzzzzzzzzzzzzzzzzzzz", "zz", "zzz", 5), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], 'Test 86');
test(beautifulIndices("xyxyxyxyxyxyxyxyxyxy", "xy", "yx", 3), [0, 2, 4, 6, 8, 10, 12, 14, 16, 18], 'Test 87');
test(beautifulIndices("aaaaabaaaabaaaaaaaba", "aa", "aaa", 5), [0, 1, 2, 3, 6, 7, 8, 11, 12, 13, 14, 15, 16], 'Test 88');
test(beautifulIndices("abcdefghijabcdefghijabcdefghij", "abc", "efg", 8), [0, 10, 20], 'Test 89');
test(beautifulIndices("repeatedrepeatedrepeated", "repe", "ated", 6), [0, 8, 16], 'Test 90');
test(beautifulIndices("racecar", "race", "car", 5), [0], 'Test 91');
test(beautifulIndices("thisissomereallylongstringwithsomerepetitions", "some", "long", 15), [6, 30], 'Test 92');
test(beautifulIndices("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abc", "xyz", 10), [], 'Test 93');
test(beautifulIndices("abcdefghijabcdefghijabcdefghijabcdefghij", "ghi", "def", 8), [6, 16, 26, 36], 'Test 94');
test(beautifulIndices("quickbrownfoxjumpsoverthelazydog", "quick", "lazy", 20), [], 'Test 95');
test(beautifulIndices("abcdefghijklmnopqrstuvwxyz", "mnop", "qrst", 10), [12], 'Test 96');
test(beautifulIndices("onetwothreefourfivesixseveneightnine", "two", "nine", 20), [], 'Test 97');
test(beautifulIndices("thisisaverylongstringwithmultiplesubstrings", "very", "string", 10), [7], 'Test 98');
test(beautifulIndices("complexstringwithmultipleoccurrences", "with", "occurrences", 28), [13], 'Test 99');
test(beautifulIndices("patternmatchingexamplepatternmatchingexamplepatternmatchingexample", "example", "pattern", 50), [15, 37, 59], 'Test 100');
test(beautifulIndices("aaabbbcccaaa", "aaa", "bbb", 5), [0], 'Test 101');
test(beautifulIndices("thisisaverylongstringfortesting", "very", "long", 12), [7], 'Test 102');
test(beautifulIndices("bananaananabay", "ana", "nana", 4), [1, 3, 6, 8], 'Test 103');
test(beautifulIndices("abababababababababab", "aba", "bab", 2), [0, 2, 4, 6, 8, 10, 12, 14, 16], 'Test 104');
test(beautifulIndices("bananaananabananananabanana", "ana", "nan", 5), [1, 3, 6, 8, 12, 14, 16, 18, 22, 24], 'Test 105');
test(beautifulIndices("thisissomethingreallylongthatshouldtestthelimits", "test", "limits", 25), [35], 'Test 106');
test(beautifulIndices("qwertyuiopasdfghjklzxcvbnmqwertyuiop", "qwerty", "poi", 15), [], 'Test 107');
test(beautifulIndices("bananaananabanana", "ana", "na", 5), [1, 3, 6, 8, 12, 14], 'Test 108');
test(beautifulIndices("abcdefghijabcdefghijabcdefghij", "def", "ghi", 10), [3, 13, 23], 'Test 109');
test(beautifulIndices("thisisaverylongstringwithmultiplesubstrings", "long", "string", 10), [11], 'Test 110');
test(beautifulIndices("qwertyuiopqwertyuiopqwertyuiop", "qwerty", "uiop", 6), [0, 10, 20], 'Test 111');
test(beautifulIndices("mississippi", "issi", "iss", 5), [1, 4], 'Test 112');
test(beautifulIndices("aabbccddeeffgghhiijjkk", "abc", "def", 10), [], 'Test 113');
test(beautifulIndices("abababababababababab", "aba", "bab", 4), [0, 2, 4, 6, 8, 10, 12, 14, 16], 'Test 114');
test(beautifulIndices("pneumonoultramicroscopicsilicovolcanoconiosis", "micro", "scopic", 30), [13], 'Test 115');

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
