// Test: 1945. Sum Of Digits Of String After Convert
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { getLucky } = require("./solution");

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

console.log("\n1945. Sum Of Digits Of String After Convert\n");

test(getLucky("zzzz", 1), 32, 'Test 1');
test(getLucky("zzz", 10), 6, 'Test 2');
test(getLucky("programming", 1), 68, 'Test 3');
test(getLucky("abz", 5), 2, 'Test 4');
test(getLucky("a", 1), 1, 'Test 5');
test(getLucky("aaa", 3), 3, 'Test 6');
test(getLucky("challenge", 2), 4, 'Test 7');
test(getLucky("iiii", 1), 36, 'Test 8');
test(getLucky("abcdefghijklmnopqrstuvwxyz", 1), 135, 'Test 9');
test(getLucky("hello", 1), 25, 'Test 10');
test(getLucky("python", 2), 8, 'Test 11');
test(getLucky("abc", 3), 6, 'Test 12');
test(getLucky("zbax", 2), 8, 'Test 13');
test(getLucky("abcxyz", 3), 9, 'Test 14');
test(getLucky("leetcode", 2), 6, 'Test 15');
test(getLucky("a", 10), 1, 'Test 16');
test(getLucky("zzzz", 3), 5, 'Test 17');
test(getLucky("zzzzzzzzzz", 1), 80, 'Test 18');
test(getLucky("algorithms", 4), 5, 'Test 19');
test(getLucky("repeatthisoverandover", 7), 8, 'Test 20');
test(getLucky("zzzzzzzzzz", 6), 8, 'Test 21');
test(getLucky("interview", 5), 8, 'Test 22');
test(getLucky("artificialintelligence", 7), 5, 'Test 23');
test(getLucky("zzyxwvutsrqponmlkjihgfedcba", 4), 8, 'Test 24');
test(getLucky("singleletterx", 10), 8, 'Test 25');
test(getLucky("thisisaverylongstringwhichshouldbeconverted", 4), 2, 'Test 26');
test(getLucky("zzzzzzzzzz", 3), 8, 'Test 27');
test(getLucky("hippopotamus", 10), 7, 'Test 28');
test(getLucky("qwen", 5), 5, 'Test 29');
test(getLucky("datastructure", 4), 9, 'Test 30');
test(getLucky("quickbrownfoxjumpsoverthelazydog", 3), 8, 'Test 31');
test(getLucky("repeatedlettersqqqq", 6), 7, 'Test 32');
test(getLucky("abcdefghijklmnopqrstuvwxyz", 2), 9, 'Test 33');
test(getLucky("programming", 3), 5, 'Test 34');
test(getLucky("unbelievable", 9), 2, 'Test 35');
test(getLucky("mixedcaseLOWER", 3), Error: invalid literal for int[] with base 10: '-', 'Test 36');
test(getLucky("mississippi", 7), 4, 'Test 37');
test(getLucky("zebra", 6), 7, 'Test 38');
test(getLucky("zzzzzzzzzz", 10), 8, 'Test 39');
test(getLucky("xyzxyz", 3), 6, 'Test 40');
test(getLucky("supercalifragilisticexpialidocious", 5), 1, 'Test 41');
test(getLucky("onetwothreefourfivesixseveneightnine", 5), 8, 'Test 42');
test(getLucky("generateadditionalinputs", 8), 2, 'Test 43');
test(getLucky("quickbrownfoxjumpsoverthelazydog", 4), 8, 'Test 44');
test(getLucky("multifarious", 7), 2, 'Test 45');
test(getLucky("consecutivesimilar", 8), 1, 'Test 46');
test(getLucky("neuralnetwork", 8), 6, 'Test 47');
test(getLucky("developerslovepython", 9), 3, 'Test 48');
test(getLucky("algorithm", 1), 49, 'Test 49');
test(getLucky("wearethebestprogrammers", 7), 4, 'Test 50');
test(getLucky("xylophone", 3), 8, 'Test 51');
test(getLucky("alibabacloud", 7), 2, 'Test 52');
test(getLucky("aaaaaaaaaa", 10), 1, 'Test 53');
test(getLucky("abcdefghijklmnopqrstuvwxyz", 5), 9, 'Test 54');
test(getLucky("elephant", 8), 9, 'Test 55');
test(getLucky("supercalifragilisticexpialidocious", 4), 1, 'Test 56');
test(getLucky("abcdefghij", 5), 1, 'Test 57');
test(getLucky("repeatedletters", 4), 2, 'Test 58');
test(getLucky("datastructures", 5), 1, 'Test 59');
test(getLucky("abcdefghijklmnopqrstuvwxyz", 3), 9, 'Test 60');
test(getLucky("facetious", 8), 9, 'Test 61');
test(getLucky("numericalsum", 7), 5, 'Test 62');
test(getLucky("expertise", 2), 13, 'Test 63');
test(getLucky("codingcontest", 6), 4, 'Test 64');
test(getLucky("zyxwvutsrqponmlkjihgfedcba", 4), 9, 'Test 65');
test(getLucky("alibabacloud", 2), 11, 'Test 66');
test(getLucky("manytimesk", 10), 4, 'Test 67');
test(getLucky("quickbrownfoxjumpsoverthelazydog", 6), 8, 'Test 68');
test(getLucky("giraffe", 9), 7, 'Test 69');
test(getLucky("qwen", 10), 5, 'Test 70');
test(getLucky("mississippi", 8), 4, 'Test 71');
test(getLucky("abcdefghijklmnopqrstuvwxyz", 10), 9, 'Test 72');
test(getLucky("quickbrownfoxjumpsoverthelazydog", 10), 8, 'Test 73');
test(getLucky("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10), 4, 'Test 74');
test(getLucky("solution", 7), 8, 'Test 75');
test(getLucky("abacaxabacax", 5), 1, 'Test 76');
test(getLucky("algorithms", 5), 5, 'Test 77');
test(getLucky("zzzzzzzzzz", 5), 8, 'Test 78');
test(getLucky("transform", 8), 7, 'Test 79');
test(getLucky("congratulations", 5), 9, 'Test 80');
test(getLucky("xylophone", 4), 8, 'Test 81');
test(getLucky("quickbrownfoxjumpsoverthelazydog", 2), 8, 'Test 82');
test(getLucky("qwen", 4), 5, 'Test 83');
test(getLucky("leetcodeisfun", 9), 3, 'Test 84');
test(getLucky("programmingisfun", 3), 2, 'Test 85');
test(getLucky("machinelearning", 6), 7, 'Test 86');
test(getLucky("abcdefg", 10), 1, 'Test 87');
test(getLucky("thequickbrownfoxjumpsoverthelazydog", 6), 5, 'Test 88');
test(getLucky("thisisaverylongandcomplexstring", 6), 1, 'Test 89');
test(getLucky("xylophone", 5), 8, 'Test 90');
test(getLucky("thisisanexampletocheckthecomplexity", 4), 1, 'Test 91');
test(getLucky("datastructure", 5), 9, 'Test 92');
test(getLucky("abacaxi", 3), 5, 'Test 93');
test(getLucky("abcdabcdabcd", 4), 3, 'Test 94');

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
