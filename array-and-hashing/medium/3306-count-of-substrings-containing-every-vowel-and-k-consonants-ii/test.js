// Test: 3306. Count Of Substrings Containing Every Vowel And K Consonants Ii
// 68 test cases from LeetCodeDataset
// Run: node test.js

const { countOfSubstrings } = require("./solution");

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

console.log("\n3306. Count Of Substrings Containing Every Vowel And K Consonants Ii\n");

test(countOfSubstrings("qwertyuiopasdfghjklzxcvbnmaeiou", 10), 4, 'Test 1');
test(countOfSubstrings("uoieaouoieaouoieaouoieaoiueaouieaouieaouieao", 4), 0, 'Test 2');
test(countOfSubstrings("aeiouzzzzz", 5), 1, 'Test 3');
test(countOfSubstrings("aeioqq", 1), 0, 'Test 4');
test(countOfSubstrings("abcdefghijklmnopqrstuvwxyz", 5), 0, 'Test 5');
test(countOfSubstrings("aaaaaeeeeiiioooouuuu", 0), 20, 'Test 6');
test(countOfSubstrings("aeiou", 0), 1, 'Test 7');
test(countOfSubstrings("abcdefghijklmnopqrstuvwxyz", 2), 0, 'Test 8');
test(countOfSubstrings("uuuuuaeiouuuuuu", 3), 0, 'Test 9');
test(countOfSubstrings("abcdefghijklmnopqrstuvwxyz", 3), 0, 'Test 10');
test(countOfSubstrings("uuiiooeaa", 2), 0, 'Test 11');
test(countOfSubstrings("aeiouaeiou", 1), 0, 'Test 12');
test(countOfSubstrings("aaaaaeeeeeeiiiiioooooouuuuuu", 5), 0, 'Test 13');
test(countOfSubstrings("aeiouaeiouaeiou", 2), 0, 'Test 14');
test(countOfSubstrings("aeeiiouu", 0), 2, 'Test 15');
test(countOfSubstrings("uaeiouaeiouaeeioouioiaeaou", 3), 0, 'Test 16');
test(countOfSubstrings("aeiaeaouaeiou", 2), 0, 'Test 17');
test(countOfSubstrings("zzzaeiouzzz", 3), 4, 'Test 18');
test(countOfSubstrings("uuuuuaeiouuuuu", 2), 0, 'Test 19');
test(countOfSubstrings("abcdefghijklmnopqrstuvwxyz", 20), 1, 'Test 20');
test(countOfSubstrings("uoiea", 0), 1, 'Test 21');
test(countOfSubstrings("ieaouqqieaouqq", 1), 3, 'Test 22');
test(countOfSubstrings("aeiaaioeaou", 1), 0, 'Test 23');
test(countOfSubstrings("aeiouaeiou", 2), 0, 'Test 24');
test(countOfSubstrings("aeiouzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 3), 1, 'Test 25');
test(countOfSubstrings("vwxyzaeiouvwxyz", 3), 4, 'Test 26');
test(countOfSubstrings("bcdfgahijklmnopqrstuevwxyoz", 10), 0, 'Test 27');
test(countOfSubstrings("abcdefghijklaeioumnopqrstuvw", 15), 7, 'Test 28');
test(countOfSubstrings("aeiouzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzaeiou", 10), 2, 'Test 29');
test(countOfSubstrings("aeiouzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 0), 1, 'Test 30');
test(countOfSubstrings("aeiouabcdeiouaeioufghijaeiouklmnoaeiou", 7), 61, 'Test 31');
test(countOfSubstrings("eiouaieouaieouaieouaieouaieouaieouaieouaieouaieou", 2), 0, 'Test 32');
test(countOfSubstrings("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou", 10), 0, 'Test 33');
test(countOfSubstrings("uoieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieao", 0), 1952, 'Test 34');
test(countOfSubstrings("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou", 5), 0, 'Test 35');
test(countOfSubstrings("aeioubcdfghijklmnopqrstuvwxyz", 20), 1, 'Test 36');
test(countOfSubstrings("aeiouabcde", 2), 2, 'Test 37');
test(countOfSubstrings("uoieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieaouieao", 20), 0, 'Test 38');
test(countOfSubstrings("aeiouaaaaaeiouaaaaaeiouaaaaaeiouaaaaaeiouaaaaaeiou", 5), 0, 'Test 39');
test(countOfSubstrings("aeiouuioeuaoieuaeiou", 0), 117, 'Test 40');
test(countOfSubstrings("uoieaouoieaouoieaouoieaoiueaouieaouieaouieao", 10), 0, 'Test 41');
test(countOfSubstrings("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou", 0), 666, 'Test 42');
test(countOfSubstrings("bcdfgqqqqqqqqqaeiouqqqqqqqqqbcdfgqqqqqqqqqaeiou", 5), 7, 'Test 43');
test(countOfSubstrings("aaaeeeeiiioouuuuaaaeeeeiiioouuuuaaaeeeeiiioouuuu", 10), 0, 'Test 44');
test(countOfSubstrings("abcdefghijaeiouklmnopqrstuvwxyz", 5), 10, 'Test 45');
test(countOfSubstrings("qazwsxedcrfvtgbyhnujmikolpaeiouaeiou", 8), 9, 'Test 46');
test(countOfSubstrings("aeiouzzzzzzzzzzzzzzzzzzzzzzzzzz", 0), 1, 'Test 47');
test(countOfSubstrings("aueioayuieoayuieoayuieoayuieoayuieoay", 3), 120, 'Test 48');
test(countOfSubstrings("aeiouzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 0), 1, 'Test 49');
test(countOfSubstrings("aeiouabcdefghijklmnopqrstuvwxyzaeiou", 15), 12, 'Test 50');
test(countOfSubstrings("xyzabcdeaeiouaeiouaeiouaeiouxyz", 3), 51, 'Test 51');
test(countOfSubstrings("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou", 5), 0, 'Test 52');
test(countOfSubstrings("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 15), 0, 'Test 53');
test(countOfSubstrings("aeiouaeiouaeiouaeiouaeiou", 0), 231, 'Test 54');
test(countOfSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 0), 0, 'Test 55');
test(countOfSubstrings("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou", 0), 1596, 'Test 56');
test(countOfSubstrings("aeiouaeiouaeiouaeiou", 3), 0, 'Test 57');
test(countOfSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzaeiou", 0), 1, 'Test 58');
test(countOfSubstrings("aeioaeioaeioaeioaeiouuuoieaouieaoieaouieaoieaouieaoieaoieaouieao", 7), 0, 'Test 59');
test(countOfSubstrings("zxcvbnmlkjhgfdsapoiuytrewqaeiouqwertyuiopasdfghjklzxcvbnmaeiou", 15), 42, 'Test 60');
test(countOfSubstrings("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 20), 43, 'Test 61');
test(countOfSubstrings("ieaouqqieaouqqieaouqqieaouqqieaouqqieaouqqieaouqq", 2), 133, 'Test 62');
test(countOfSubstrings("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 10), 0, 'Test 63');
test(countOfSubstrings("zzzzzaeiouzzzzzzzz", 5), 6, 'Test 64');
test(countOfSubstrings("zzzzzuaaaaaeeeeiiioouuuuuuaaaaaeeeeiiioouuuuuu", 5), 28, 'Test 65');
test(countOfSubstrings("ieaouqieaouqieaouqieaouqieaouqieaouqieaouqieaouqieaouqieaouqieaouq", 3), 294, 'Test 66');
test(countOfSubstrings("aeiouaeiouaeiouzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10), 11, 'Test 67');
test(countOfSubstrings("qweqrtyuiopasdlkjfhgyxcvbnmaeiouqwertyuiopaesd", 8), 23, 'Test 68');

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
