// Test: 392. Is Subsequence
// 69 test cases from LeetCodeDataset
// Run: node test.js

const { isSubsequence } = require("./solution");

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

console.log("\n392. Is Subsequence\n");

test(isSubsequence("abc", "abdc"), true, 'Test 1');
test(isSubsequence("ab", "baab"), false, 'Test 2');
test(isSubsequence("xyz", "abcdefghijklmnopqrstuvwxyz"), true, 'Test 3');
test(isSubsequence("aec", "abcde"), false, 'Test 4');
test(isSubsequence("", "ahbgdc"), true, 'Test 5');
test(isSubsequence("", ""), true, 'Test 6');
test(isSubsequence("zyx", "abcdefghijklmnopqrstuvwxyz"), false, 'Test 7');
test(isSubsequence("abcd", "abcde"), true, 'Test 8');
test(isSubsequence("abc", "abcbc"), true, 'Test 9');
test(isSubsequence("bb", "aabbb"), true, 'Test 10');
test(isSubsequence("aaaaaa", "bbaaaa"), false, 'Test 11');
test(isSubsequence("abc", "bahbgdca"), true, 'Test 12');
test(isSubsequence("ab", "baab"), true, 'Test 13');
test(isSubsequence("bd", "abcde"), true, 'Test 14');
test(isSubsequence("bd", "abcd"), true, 'Test 15');
test(isSubsequence("axc", "ahbgdc"), false, 'Test 16');
test(isSubsequence("a", "ahbgdc"), true, 'Test 17');
test(isSubsequence("a", "a"), true, 'Test 18');
test(isSubsequence("abc", "ahbgdc"), true, 'Test 19');
test(isSubsequence("acb", "ahbgdc"), false, 'Test 20');
test(isSubsequence("bcd", "ahbgdc"), false, 'Test 21');
test(isSubsequence("abc", ""), false, 'Test 22');
test(isSubsequence("ahbgdc", "ahbgdc"), true, 'Test 23');
test(isSubsequence("abcd", "abbbcd"), true, 'Test 24');
test(isSubsequence("b", "abcde"), true, 'Test 25');
test(isSubsequence("abc", "abc"), true, 'Test 26');
test(isSubsequence("abc", "abcde"), true, 'Test 27');
test(isSubsequence("test", "ttttteeeesstttt"), true, 'Test 28');
test(isSubsequence("challenge", "chllenge"), false, 'Test 29');
test(isSubsequence("leetcode", "lleettccooddee"), true, 'Test 30');
test(isSubsequence("consecutive", "consecutivve"), true, 'Test 31');
test(isSubsequence("example", "exxample"), true, 'Test 32');
test(isSubsequence("interview", "intrvw"), false, 'Test 33');
test(isSubsequence("substring", "subtrring"), false, 'Test 34');
test(isSubsequence("hello", "ohellomyworld"), true, 'Test 35');
test(isSubsequence("characters", "characttrrs"), false, 'Test 36');
test(isSubsequence("python", "pyyyynntthhoonn"), true, 'Test 37');
test(isSubsequence("challenge", "cchhaalllleennnggggeee"), true, 'Test 38');
test(isSubsequence("algorithm", "aggglllllllllooooooorrrrrriiiiiiiiiimmmmmm"), false, 'Test 39');
test(isSubsequence("a", ""), false, 'Test 40');
test(isSubsequence("complexity", "ccllllcooooooommmppppppllllleeeeeexxxxxxyyyyyyytttttttt"), false, 'Test 41');
test(isSubsequence("", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), true, 'Test 42');
test(isSubsequence("word", "wwwooorrrrdddd"), true, 'Test 43');
test(isSubsequence("algorithm", "algotihm"), false, 'Test 44');
test(isSubsequence("repeated", "reppeted"), false, 'Test 45');
test(isSubsequence("dynamic", "dyyyyynnaaaaaammmmcccciiiiiiiiinnnnnnnnggggggg"), false, 'Test 46');
test(isSubsequence("abcd", "abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), true, 'Test 47');
test(isSubsequence("abcdabcd", "abxycdxeyzabcd"), true, 'Test 48');
test(isSubsequence("complex", "complxc"), false, 'Test 49');
test(isSubsequence("interview", "iiiiinnnnnttttttterrrrrrrrreevvvvvvvvvw"), false, 'Test 50');
test(isSubsequence("mississippi", "mmissiissippiissippississippi"), true, 'Test 51');
test(isSubsequence("substrings", "sssssuuuuubbstrrrrrriiiiinnnggggggsss"), true, 'Test 52');
test(isSubsequence("substring", "ssssuusssubbssssttrrrriiiinnngggggg"), true, 'Test 53');
test(isSubsequence("sequence", "seqqqqquuuuueeeennnnccceeeeee"), true, 'Test 54');
test(isSubsequence("programming", "ppppprrogggggggrrrrrroooooogggggggaaaaammmmiiiiinnnnnggggggg"), true, 'Test 55');
test(isSubsequence("repeated", "reeeepppeeeaaaatteeedd"), true, 'Test 56');
test(isSubsequence("abcabcabc", "aabbccabcabcabc"), true, 'Test 57');
test(isSubsequence("z", "abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), true, 'Test 58');
test(isSubsequence("consecutive", "ccoonnnsseecccccoooooonnnsssccceeeeeevvvvvvvveeeennnnnnncccccccceeeeeee"), false, 'Test 59');
test(isSubsequence("", "a"), true, 'Test 60');
test(isSubsequence("hello", "hhelllllooooworld"), true, 'Test 61');
test(isSubsequence("example", "eeeexxaample"), true, 'Test 62');
test(isSubsequence("subsequence", "ssubsuuubbbbsssseeeeeqqqqqqqqqqccceeeennnnneeeeee"), false, 'Test 63');
test(isSubsequence("characters", "ccccchhhhaaaaaarrrrrrrtttteeeeeeccchhhhaaaaaarrrrrrrtttteeeeee"), false, 'Test 64');
test(isSubsequence("abcdef", "fedcbazyxwvutsrqponmlkjihgfedcba"), false, 'Test 65');
test(isSubsequence("subsequence", "substringsequence"), true, 'Test 66');
test(isSubsequence("abcdefg", "axbxcxdxexfxgx"), true, 'Test 67');
test(isSubsequence("abcdefg", "azbycxdwevfug"), true, 'Test 68');
test(isSubsequence("sequence", "sqeuences"), false, 'Test 69');

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
