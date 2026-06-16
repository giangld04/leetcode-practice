// Test: 2062. Count Vowel Substrings Of A String
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { countVowelSubstrings } = require("./solution");

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

console.log("\n2062. Count Vowel Substrings Of A String\n");

test(countVowelSubstrings("aeiou"), 1, 'Test 1');
test(countVowelSubstrings("aeiofvuaeiou"), 3, 'Test 2');
test(countVowelSubstrings("uoiea"), 1, 'Test 3');
test(countVowelSubstrings("aeiouxaeeiaouoieua"), 28, 'Test 4');
test(countVowelSubstrings("aeiaaioaaaaeiiiiouuuooaauuaeiu"), 175, 'Test 5');
test(countVowelSubstrings("aeiaaioaaaaeiiiiouuuoo"), 55, 'Test 6');
test(countVowelSubstrings("aeiouaeiouaeiou"), 66, 'Test 7');
test(countVowelSubstrings("unicornarihan"), 0, 'Test 8');
test(countVowelSubstrings("aaaaaeeeeeeiiiiioooooouuuuu"), 25, 'Test 9');
test(countVowelSubstrings("aeiouu"), 2, 'Test 10');
test(countVowelSubstrings("a"), 0, 'Test 11');
test(countVowelSubstrings("abcdefghijklmnopqrstuvwxyz"), 0, 'Test 12');
test(countVowelSubstrings("vowelsaeiou"), 1, 'Test 13');
test(countVowelSubstrings("cuaieuouac"), 7, 'Test 14');
test(countVowelSubstrings("aeiooauuieoiau"), 41, 'Test 15');
test(countVowelSubstrings("bcdfeioau"), 1, 'Test 16');
test(countVowelSubstrings("zzzzzaeiouzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 17');
test(countVowelSubstrings("aeiouaeiouxyzaeiouaeiouxyzaeiou"), 43, 'Test 18');
test(countVowelSubstrings("aeiouaeiouaeiouaeiouaeiouaeiouaeiou"), 496, 'Test 19');
test(countVowelSubstrings("aeiouxyzaeiouaeiou"), 22, 'Test 20');
test(countVowelSubstrings("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou"), 1326, 'Test 21');
test(countVowelSubstrings("aeiouxyzaeiou"), 2, 'Test 22');
test(countVowelSubstrings("xyzaeiouaeiouxyzaeiouaeiouxyzaeiouaeiouxyz"), 63, 'Test 23');
test(countVowelSubstrings("aeiouuuueeiooiaaaeeoioioiaaaeeuuuiooiiuaeiouaeiouaeiouaeiouaeiou"), 1565, 'Test 24');
test(countVowelSubstrings("aeiouaeiouaeiouaeiouaeiou"), 231, 'Test 25');
test(countVowelSubstrings("aeiouaeiouxyzaeiouaeiouxyzaeiouaeiou"), 63, 'Test 26');
test(countVowelSubstrings("uoieaueoiaueoiaueoiaueoi"), 208, 'Test 27');
test(countVowelSubstrings("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou"), 666, 'Test 28');
test(countVowelSubstrings("aeioubcdfghjklmnpqrstvwxyzaeiou"), 2, 'Test 29');
test(countVowelSubstrings("aeiouaeiouxyzaeiouaeiouxyzaeiouaeiouxyz"), 63, 'Test 30');
test(countVowelSubstrings("aeioubaeioucaeioudeaeioufaeioubaeioucaeioudeaeioufaeioubaeioucaeioudeaeiouf"), 15, 'Test 31');
test(countVowelSubstrings("bcdaeioufghijklmnopqrstuvwxyz"), 1, 'Test 32');
test(countVowelSubstrings("aeiouwxyzaeiouwxyzaeiouwxyzaeiouwxyz"), 4, 'Test 33');
test(countVowelSubstrings("xayaioeoiuaueoieoiauiouio"), 139, 'Test 34');
test(countVowelSubstrings("aeioubaeiouaeioubaeiouxyzaeiouaeiouaeioubaeiou"), 90, 'Test 35');
test(countVowelSubstrings("aeioubaeioucaeiou"), 3, 'Test 36');
test(countVowelSubstrings("bcaeiouaeiouaieouacb"), 77, 'Test 37');
test(countVowelSubstrings("aeiouaeiouxyzaeiouaeiouxyz"), 42, 'Test 38');
test(countVowelSubstrings("aieouaeiouaieouaeiouaieouaeiouaieou"), 490, 'Test 39');
test(countVowelSubstrings("aeiouuueeiooiaaaeeoioioiaaaeeuuuiooiiu"), 348, 'Test 40');
test(countVowelSubstrings("aeioubaeiouaeioucaeiou"), 23, 'Test 41');
test(countVowelSubstrings("aeiouaeiouaeiouaeiouaeiouzzzzzzzzz"), 231, 'Test 42');
test(countVowelSubstrings("aeiouxyzaeiouxyzaeiouxyzaeiouxyzaeiouxyzaeiouxyzaeiouxyzaeiouxyz"), 8, 'Test 43');
test(countVowelSubstrings("aeiouxyzzyxwvutsrqponmlkjihgfedcbaeiouaeiou"), 22, 'Test 44');
test(countVowelSubstrings("aeiouxyaeiouaeiou"), 22, 'Test 45');
test(countVowelSubstrings("aeeeeiiiioouuuaeiouaaaeioueee"), 247, 'Test 46');
test(countVowelSubstrings("aeiouxyzaeiouxyzaeiouxyzaeiouxyzaeiouxyz"), 5, 'Test 47');
test(countVowelSubstrings("aeioucaeioubaeiouaeiou"), 23, 'Test 48');
test(countVowelSubstrings("aeiouxyzaeiouxyzaeiouxyzaeiouxyzaeiou"), 5, 'Test 49');
test(countVowelSubstrings("xyzaeiouaeiouxyzaeiouaeiouxyz"), 42, 'Test 50');
test(countVowelSubstrings("mnopqrstuvwxyaeiouaeiouxyzaeiouxyzzyxwvutsrqponmlkjihgfedcbaeiou"), 23, 'Test 51');
test(countVowelSubstrings("bcaeiouc"), 1, 'Test 52');
test(countVowelSubstrings("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou"), 4656, 'Test 53');
test(countVowelSubstrings("aeioueoiuaeiouaeioua"), 125, 'Test 54');
test(countVowelSubstrings("aabbccddeeeffgghhiijjkkllmmnnooouuupppqqrrsstttuuuvvvwwxxyyzz"), 0, 'Test 55');
test(countVowelSubstrings("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou"), 1081, 'Test 56');
test(countVowelSubstrings("aeiouaeiouxyzaeiouaeiouxyzaeiouaeiouxyzaeiouaeiouxyzaeiouaeiouxyz"), 105, 'Test 57');
test(countVowelSubstrings("aeiouaeiouxxxaeiouaeiou"), 42, 'Test 58');
test(countVowelSubstrings("aebcioudfeiauoceioua"), 2, 'Test 59');
test(countVowelSubstrings("aouieaeioueaouieaeiou"), 139, 'Test 60');
test(countVowelSubstrings("aeiouaeiouabcdeiouaeiouabcdeiouaeiou"), 64, 'Test 61');
test(countVowelSubstrings("zzzzzvvvvvaeeeiioouuuaeiou"), 44, 'Test 62');
test(countVowelSubstrings("uoieaueoiaueoiaueoiaueoiaeiou"), 317, 'Test 63');
test(countVowelSubstrings("bcdfeaioueaiouaeioueaioueaiou"), 229, 'Test 64');
test(countVowelSubstrings("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou"), 1596, 'Test 65');
test(countVowelSubstrings("ueaiaoueoiuaeiouaeiouaeiou"), 245, 'Test 66');
test(countVowelSubstrings("aeiaeiouoieiouaeiou"), 93, 'Test 67');
test(countVowelSubstrings("aeioubaeioucaeioudaeioufaeioubaeioucaeioudaeioufaeioubaeioucaeioudaeioufxyzaeioubaeioucaeioudaeioufaeioubaeioucaeioudaeiouf"), 20, 'Test 68');
test(countVowelSubstrings("uoieaueoiaueoiaueoiaueoiaeiouaeiouaeiouaeiouaeiou"), 1027, 'Test 69');
test(countVowelSubstrings("aeiooouiaeiouaeiou"), 92, 'Test 70');
test(countVowelSubstrings("aeioubaeiouaeioubaeiouxyzaeiouaeiouaeioubaeiouxyzaeiouaeioubaeiou"), 112, 'Test 71');
test(countVowelSubstrings("aabbccddeeffggahhiiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 0, 'Test 72');
test(countVowelSubstrings("xyzaeiouaeiouxyz"), 21, 'Test 73');
test(countVowelSubstrings("aeioueoiuaeiouaeioueoiuaeiouaeioueoiu"), 529, 'Test 74');
test(countVowelSubstrings("zzzzzaeiouzzzzzzzzzz"), 1, 'Test 75');
test(countVowelSubstrings("zbcdefghijklmnopqrstuvwxyaeiou"), 1, 'Test 76');
test(countVowelSubstrings("bcdfgohueaioeuncdfeoiu"), 5, 'Test 77');
test(countVowelSubstrings("aeioubaeioucaeioudaeioubaeioucaeioudaeioubaeioucaeiou"), 9, 'Test 78');
test(countVowelSubstrings("xaaaeeeiiiiooooouuuuuaaaeiiiou"), 131, 'Test 79');
test(countVowelSubstrings("eiaouoieaueioaeioaeiaoueioea"), 253, 'Test 80');
test(countVowelSubstrings("aeiouaeiouaeiouxyzaeiouaeiouaeiouxyzaeiouaeiou"), 153, 'Test 81');
test(countVowelSubstrings("aeiouxyzaeiouxyzaeiouxyz"), 3, 'Test 82');
test(countVowelSubstrings("mnopqrstuvwxyaeiouaeiouxyz"), 21, 'Test 83');
test(countVowelSubstrings("aeiouaeiouxyzaeiouaeiouxyzaeiouaeiouxyzaeiouaeiouxyz"), 84, 'Test 84');
test(countVowelSubstrings("xyzaeiouaeiouaeiouaeiouaeiouaeiouxyz"), 351, 'Test 85');
test(countVowelSubstrings("baeiouaeiouaeiouaeiouaeiou"), 231, 'Test 86');
test(countVowelSubstrings("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 0, 'Test 87');
test(countVowelSubstrings("aeioubaeioucaeioudeaeiouf"), 5, 'Test 88');
test(countVowelSubstrings("oiueaeiouaeiouaeiouaeiouaeiouaeiou"), 461, 'Test 89');
test(countVowelSubstrings("aeioubaeiouaeiouaeiouaeiou"), 137, 'Test 90');
test(countVowelSubstrings("zzzzzaeiouzzzzz"), 1, 'Test 91');
test(countVowelSubstrings("baeioucaeiouaeioucb"), 22, 'Test 92');
test(countVowelSubstrings("eiouaeioua"), 21, 'Test 93');
test(countVowelSubstrings("aeioubaeiouaeioubaeiou"), 23, 'Test 94');
test(countVowelSubstrings("xyzabcdeioufghijklmnopqrstuvwaeiou"), 1, 'Test 95');
test(countVowelSubstrings("aeiouaeeeeeiioouuuuuaeiou"), 146, 'Test 96');
test(countVowelSubstrings("abcdeioua"), 1, 'Test 97');
test(countVowelSubstrings("aeioubaeioucaeioudeaeioufaeioubaeioucaeioudeaeiouf"), 10, 'Test 98');
test(countVowelSubstrings("aeioueaioueaioueaioueaioueaiou"), 350, 'Test 99');
test(countVowelSubstrings("aeioubaeiouaeioubaeiouaeiou"), 43, 'Test 100');
test(countVowelSubstrings("aeiouaeiouaebcdeaeiouaeiou"), 63, 'Test 101');
test(countVowelSubstrings("aeiouaeiouaeiouaeiouaeiouaeiou"), 351, 'Test 102');
test(countVowelSubstrings("aeiouaeiouaeiouaeiou"), 136, 'Test 103');
test(countVowelSubstrings("xyzaeiouaeiouxyzaeiouaeiouxyzaeiouaeiouxyzaeiouaeiou"), 84, 'Test 104');
test(countVowelSubstrings("aeiouzyxwvutsrqponmlkjihgfedcbaeiou"), 2, 'Test 105');
test(countVowelSubstrings("aeiouzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 106');
test(countVowelSubstrings("aeiouxyzzyxwvutsrqponmlkjihgfedcbaeiouaeiouaeiouxyzaeiouxyzzyxwvutsrqponmlkjihgfedcbaeiou"), 69, 'Test 107');
test(countVowelSubstrings("eiouaeiouaeiouaeiouaeiouaeiou"), 325, 'Test 108');
test(countVowelSubstrings("aeiouaeiouxyzaeiouaeiouxyzaeiouaeiouxyzaeiouaeiouxyzaeiouaeiouxyzaeiouaeiouxyzaeiouaeiouxyz"), 147, 'Test 109');
test(countVowelSubstrings("xzaeiouaeiouaeiouaeiouaeioux"), 231, 'Test 110');

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
