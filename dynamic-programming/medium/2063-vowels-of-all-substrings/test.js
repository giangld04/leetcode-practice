// Test: 2063. Vowels Of All Substrings
// 84 test cases from LeetCodeDataset
// Run: node test.js

const { countVowels } = require("./solution");

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

console.log("\n2063. Vowels Of All Substrings\n");

test(countVowels("e"), 1, 'Test 1');
test(countVowels("aeiou"), 35, 'Test 2');
test(countVowels("abc"), 3, 'Test 3');
test(countVowels("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 4');
test(countVowels("aeiaaioaaaaeiiiiouuuooaauuaeiuiauuuuaeioaaaaeaiaioieoieiieoioioieouieiiaiaeiieoieouuiooaoaaiiaeiieeiooieiei"), 209934, 'Test 5');
test(countVowels("bcbcbcbcbc"), 0, 'Test 6');
test(countVowels("aeiaaioaaaaeiiiiouuuooaauuaeiu"), 4960, 'Test 7');
test(countVowels("aeiaaioaaaaeiiiiouuuooaauuaeiuiaoiuuaeiuuaieiiaaaeeiuuoiuuuuuuu"), 43680, 'Test 8');
test(countVowels("ltcd"), 0, 'Test 9');
test(countVowels("aba"), 6, 'Test 10');
test(countVowels("u"), 1, 'Test 11');
test(countVowels("abcdefghijklmnopqrstuvwxyz"), 604, 'Test 12');
test(countVowels("a"), 1, 'Test 13');
test(countVowels("o"), 1, 'Test 14');
test(countVowels("b"), 0, 'Test 15');
test(countVowels("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 16');
test(countVowels("i"), 1, 'Test 17');
test(countVowels(""), 0, 'Test 18');
test(countVowels("bbaaeekkeeaabbaaeekkeeaabbaaeekkeeaabb"), 6576, 'Test 19');
test(countVowels("uvijqet"), 34, 'Test 20');
test(countVowels("aieouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou"), 16215, 'Test 21');
test(countVowels("uuygqijetbvrcw"), 150, 'Test 22');
test(countVowels("mississippi"), 98, 'Test 23');
test(countVowels("vowels"), 22, 'Test 24');
test(countVowels("aeiouaeiouaeiou"), 680, 'Test 25');
test(countVowels("a" * 100000), Error: Solution.countVowels[] missing 1 required positional argument: 'word', 'Test 26');
test(countVowels("abcdefghijabcdefghijabcdefghijabcdefghij"), 3412, 'Test 27');
test(countVowels("cccccdcccc"), 0, 'Test 28');
test(countVowels("aovnwqoeirqoweoirqoweoirquw"), 1949, 'Test 29');
test(countVowels("congratulations"), 299, 'Test 30');
test(countVowels("xyzaeiouxyzaeiouxyz"), 820, 'Test 31');
test(countVowels("bcbcbcbcbcbcbcbcbcbc"), 0, 'Test 32');
test(countVowels("vvvuuuooooiiiaaaaeeeee"), 1900, 'Test 33');
test(countVowels("consonants"), 76, 'Test 34');
test(countVowels("vowelvowelvowel"), 278, 'Test 35');
test(countVowels("supercalifragilisticexpialidocious"), 3282, 'Test 36');
test(countVowels("b" * 50000 + "a" + "b" * 50000), Error: Solution.countVowels[] missing 1 required positional argument: 'word', 'Test 37');
test(countVowels("aquickbrownfoxjumpsoverthelazydog"), 2016, 'Test 38');
test(countVowels("leetcode"), 58, 'Test 39');
test(countVowels("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 3860, 'Test 40');
test(countVowels("sequence"), 62, 'Test 41');
test(countVowels("aovvoaoaueuioeaueoaiouaoieaouioeaouioiea"), 11218, 'Test 42');
test(countVowels("aeeee"), 35, 'Test 43');
test(countVowels("aeioouaeiou"), 286, 'Test 44');
test(countVowels("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 45');
test(countVowels("bbbbbbbbbbbbbbbbbbbbbbba"), 24, 'Test 46');
test(countVowels("hello"), 13, 'Test 47');
test(countVowels("uoiea"), 35, 'Test 48');
test(countVowels("bcdfghjklmnpqrstvwxyz"), 0, 'Test 49');
test(countVowels("ffaaabbbccc"), 94, 'Test 50');
test(countVowels("zzzzzzzzzzzzzzzzzzzz"), 0, 'Test 51');
test(countVowels("aeiouaeiouaeiouaeiouaeiou"), 2925, 'Test 52');
test(countVowels("qweoiauoieqweoiauoieqweoiauoie"), 4016, 'Test 53');
test(countVowels("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 4562, 'Test 54');
test(countVowels("rhythms"), 0, 'Test 55');
test(countVowels("bbbbbebbbb"), 30, 'Test 56');
test(countVowels("aabbccddeeeffgg"), 221, 'Test 57');
test(countVowels(""bcrptvxcj"), Error: Solution.countVowels[] missing 1 required positional argument: 'word', 'Test 58');
test(countVowels("beautiful"), 101, 'Test 59');
test(countVowels("aeiouaeiouaeiouaeiouaeiouaeiou"), 4960, 'Test 60');
test(countVowels("dddddeoeddd"), 103, 'Test 61');
test(countVowels("aeiouaeiouaeiouaeiou"), 1540, 'Test 62');
test(countVowels("vowel"), 16, 'Test 63');
test(countVowels("xylophone"), 54, 'Test 64');
test(countVowels("repetitiveeeee"), 350, 'Test 65');
test(countVowels("repetition"), 118, 'Test 66');
test(countVowels("characters"), 78, 'Test 67');
test(countVowels("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"), 13244, 'Test 68');
test(countVowels("uvaeiouz"), 98, 'Test 69');
test(countVowels("aovylqjwhepfuciphg"), 280, 'Test 70');
test(countVowels("aeiou" * 20000), Error: Solution.countVowels[] missing 1 required positional argument: 'word', 'Test 71');
test(countVowels("uoieaoueioauoiea"), 816, 'Test 72');
test(countVowels("zzzzzzzzzzz"), 0, 'Test 73');
test(countVowels("eeeeeaeeee"), 220, 'Test 74');
test(countVowels("aaaaabaaaaa"), 250, 'Test 75');
test(countVowels("abacaxabayabac"), 280, 'Test 76');
test(countVowels("aeiouaeiou"), 220, 'Test 77');
test(countVowels("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 78');
test(countVowels("programming"), 90, 'Test 79');
test(countVowels("aeiaoeiaoeiaoeiaoeiaoeiaoeiaoeiaoeiaoei"), 10660, 'Test 80');
test(countVowels("ouqofyrcjgz"), 63, 'Test 81');
test(countVowels("aeiaeaieaa"), 220, 'Test 82');
test(countVowels("vowelsarefun"), 158, 'Test 83');
test(countVowels("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 4718, 'Test 84');

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
