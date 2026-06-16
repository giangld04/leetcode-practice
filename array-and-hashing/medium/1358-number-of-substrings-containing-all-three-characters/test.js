// Test: 1358. Number Of Substrings Containing All Three Characters
// 130 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfSubstrings } = require("./solution");

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

console.log("\n1358. Number Of Substrings Containing All Three Characters\n");

test(numberOfSubstrings("aaabbbccc"), 9, 'Test 1');
test(numberOfSubstrings("abcba"), 5, 'Test 2');
test(numberOfSubstrings("cba"), 1, 'Test 3');
test(numberOfSubstrings("cbaacb"), 8, 'Test 4');
test(numberOfSubstrings("bbbacbac"), 18, 'Test 5');
test(numberOfSubstrings("ccccabc"), 9, 'Test 6');
test(numberOfSubstrings("abcabcabc"), 28, 'Test 7');
test(numberOfSubstrings("abcabcabcabc"), 55, 'Test 8');
test(numberOfSubstrings("aabbc"), 2, 'Test 9');
test(numberOfSubstrings("cccbaab"), 9, 'Test 10');
test(numberOfSubstrings("aabbbc"), 2, 'Test 11');
test(numberOfSubstrings("aabcbc"), 6, 'Test 12');
test(numberOfSubstrings("abcabc"), 10, 'Test 13');
test(numberOfSubstrings("aabbaacc"), 8, 'Test 14');
test(numberOfSubstrings("abacbc"), 8, 'Test 15');
test(numberOfSubstrings("abacabacabc"), 41, 'Test 16');
test(numberOfSubstrings("aaaabbbbcccc"), 16, 'Test 17');
test(numberOfSubstrings("ccbaaabb"), 10, 'Test 18');
test(numberOfSubstrings("baccab"), 7, 'Test 19');
test(numberOfSubstrings("bca"), 1, 'Test 20');
test(numberOfSubstrings("abc"), 1, 'Test 21');
test(numberOfSubstrings("ccccbaaa"), 12, 'Test 22');
test(numberOfSubstrings("aaacb"), 3, 'Test 23');
test(numberOfSubstrings("ccccbaab"), 12, 'Test 24');
test(numberOfSubstrings("abcababc"), 18, 'Test 25');
test(numberOfSubstrings("aabbcc"), 4, 'Test 26');
test(numberOfSubstrings("aaaabbbccc"), 12, 'Test 27');
test(numberOfSubstrings("abacbac"), 14, 'Test 28');
test(numberOfSubstrings("abcacbacbacbabc"), 89, 'Test 29');
test(numberOfSubstrings("aabbcacabcabc"), 59, 'Test 30');
test(numberOfSubstrings("ccabababc"), 17, 'Test 31');
test(numberOfSubstrings("abacbabacbabacbab"), 112, 'Test 32');
test(numberOfSubstrings("aabccbabcbacbac"), 85, 'Test 33');
test(numberOfSubstrings("abcabcabccba"), 52, 'Test 34');
test(numberOfSubstrings("aabbccbaa"), 18, 'Test 35');
test(numberOfSubstrings("aaabbbcccbbbccc"), 27, 'Test 36');
test(numberOfSubstrings("acbacbacbacbacb"), 91, 'Test 37');
test(numberOfSubstrings("abacbacbacb"), 44, 'Test 38');
test(numberOfSubstrings("aabcbacbacbabc"), 75, 'Test 39');
test(numberOfSubstrings("bcabcabcabcabc"), 78, 'Test 40');
test(numberOfSubstrings("aaabbbcccabcabcabc"), 115, 'Test 41');
test(numberOfSubstrings("abacbacbacbacbabcababcabc"), 271, 'Test 42');
test(numberOfSubstrings("acbacbacbacb"), 55, 'Test 43');
test(numberOfSubstrings("abacbacbacbabc"), 76, 'Test 44');
test(numberOfSubstrings("cccbbbaaa"), 9, 'Test 45');
test(numberOfSubstrings("caabcbacbacb"), 52, 'Test 46');
test(numberOfSubstrings("abbbcccaabbbabc"), 59, 'Test 47');
test(numberOfSubstrings("abacbcabc"), 26, 'Test 48');
test(numberOfSubstrings("aaabbbcccbbbaaa"), 45, 'Test 49');
test(numberOfSubstrings("bacbacbacbacb"), 66, 'Test 50');
test(numberOfSubstrings("cabcbacbacbabcb"), 88, 'Test 51');
test(numberOfSubstrings("abacbcacab"), 31, 'Test 52');
test(numberOfSubstrings("bbbbbbcccaaa"), 18, 'Test 53');
test(numberOfSubstrings("aaaaaaaaaabbbccc"), 30, 'Test 54');
test(numberOfSubstrings("ccbbbaaabbbccc"), 36, 'Test 55');
test(numberOfSubstrings("abcabcabcabcabcabcabcabcabcabc"), 406, 'Test 56');
test(numberOfSubstrings("abcabcabcab"), 45, 'Test 57');
test(numberOfSubstrings("aabbaaccabcabcabc"), 104, 'Test 58');
test(numberOfSubstrings("bacbacbacbacbacba"), 120, 'Test 59');
test(numberOfSubstrings("ccccbbbaaaaa"), 20, 'Test 60');
test(numberOfSubstrings("abababababababab"), 0, 'Test 61');
test(numberOfSubstrings("abacbcabcabcab"), 76, 'Test 62');
test(numberOfSubstrings("abababababab"), 0, 'Test 63');
test(numberOfSubstrings("cacbacbacbac"), 54, 'Test 64');
test(numberOfSubstrings("cabbacbac"), 25, 'Test 65');
test(numberOfSubstrings("aabbaacccbaab"), 45, 'Test 66');
test(numberOfSubstrings("abcabcabcabcabcabc"), 136, 'Test 67');
test(numberOfSubstrings("cbacbacbacbac"), 66, 'Test 68');
test(numberOfSubstrings("aabbbcccaaaabbbccc"), 86, 'Test 69');
test(numberOfSubstrings("bacbacbacbacba"), 78, 'Test 70');
test(numberOfSubstrings("aabacababaac"), 40, 'Test 71');
test(numberOfSubstrings("abcababccbaabc"), 69, 'Test 72');
test(numberOfSubstrings("ababababcabcab"), 57, 'Test 73');
test(numberOfSubstrings("aaabbbcccbbb"), 18, 'Test 74');
test(numberOfSubstrings("abcabcabcabcababc"), 117, 'Test 75');
test(numberOfSubstrings("abccbaabccbaab"), 66, 'Test 76');
test(numberOfSubstrings("baccabaccabacc"), 69, 'Test 77');
test(numberOfSubstrings("abacbcacbacb"), 52, 'Test 78');
test(numberOfSubstrings("cccccbbaaaabbbccc"), 68, 'Test 79');
test(numberOfSubstrings("bbcccaabbcccaab"), 65, 'Test 80');
test(numberOfSubstrings("aabbbccccaaaabbbbccc"), 103, 'Test 81');
test(numberOfSubstrings("abababab"), 0, 'Test 82');
test(numberOfSubstrings("cbacbacbacbacbacbacbacbacbacbacb"), 465, 'Test 83');
test(numberOfSubstrings("abcbaabcbaabc"), 58, 'Test 84');
test(numberOfSubstrings("aabcbabacabc"), 49, 'Test 85');
test(numberOfSubstrings("aabacbacbacbac"), 75, 'Test 86');
test(numberOfSubstrings("aabbaaccbbacbbacaacabcbacbacbacbac"), 498, 'Test 87');
test(numberOfSubstrings("abacbabacbabac"), 71, 'Test 88');
test(numberOfSubstrings("aabbbcccaabbbabc"), 70, 'Test 89');
test(numberOfSubstrings("aaaabbccccabbbccc"), 85, 'Test 90');
test(numberOfSubstrings("cccaaaabbbcccbbb"), 51, 'Test 91');
test(numberOfSubstrings("ccccbbaaaabc"), 30, 'Test 92');
test(numberOfSubstrings("acbacbacbacbacbacbacbacbacbacbac"), 465, 'Test 93');
test(numberOfSubstrings("abcbbccaaa"), 20, 'Test 94');
test(numberOfSubstrings("cccaabbbaaacc"), 34, 'Test 95');
test(numberOfSubstrings("ccccccccabbaabbcbbb"), 100, 'Test 96');
test(numberOfSubstrings("cccbababac"), 23, 'Test 97');
test(numberOfSubstrings("ccccabcabcabc"), 60, 'Test 98');
test(numberOfSubstrings("aabacbababcabc"), 69, 'Test 99');
test(numberOfSubstrings("aaabbbcccbbbaaabbbc"), 87, 'Test 100');
test(numberOfSubstrings("abccabccabccabc"), 85, 'Test 101');
test(numberOfSubstrings("abcbacbacbacbaca"), 103, 'Test 102');
test(numberOfSubstrings("abcabcabcabacbacb"), 119, 'Test 103');
test(numberOfSubstrings("aabbbcccabcabcabc"), 103, 'Test 104');
test(numberOfSubstrings("abacbcabcabc"), 53, 'Test 105');
test(numberOfSubstrings("aabbaaccaabbcc"), 52, 'Test 106');
test(numberOfSubstrings("abcabcabacbcab"), 76, 'Test 107');
test(numberOfSubstrings("aabbbccc"), 6, 'Test 108');
test(numberOfSubstrings("aabbaacccbbcabab"), 77, 'Test 109');
test(numberOfSubstrings("babababacacacacbcbbcbcbcbacbacbacb"), 441, 'Test 110');
test(numberOfSubstrings("cacbacbacbacbacbac"), 135, 'Test 111');
test(numberOfSubstrings("cccbbaaaabacbacb"), 78, 'Test 112');
test(numberOfSubstrings("ccccbbbaaa"), 12, 'Test 113');
test(numberOfSubstrings("aaaaaaaaaabcabcabcabcabc"), 208, 'Test 114');
test(numberOfSubstrings("aabbbccccaaa"), 23, 'Test 115');
test(numberOfSubstrings("abacbacbac"), 35, 'Test 116');
test(numberOfSubstrings("aabbbaccccba"), 36, 'Test 117');
test(numberOfSubstrings("ccbaabccababab"), 62, 'Test 118');
test(numberOfSubstrings("ccccbaabccc"), 33, 'Test 119');
test(numberOfSubstrings("ccccbaa"), 8, 'Test 120');
test(numberOfSubstrings("bacabcabcabcabcabcabcabc"), 252, 'Test 121');
test(numberOfSubstrings("ccccccaaaabbbccc"), 48, 'Test 122');
test(numberOfSubstrings("abcabcabcabcabcabcabcabcabcabcabc"), 496, 'Test 123');
test(numberOfSubstrings("abacbabcc"), 25, 'Test 124');
test(numberOfSubstrings("abacbacbacbacb"), 77, 'Test 125');
test(numberOfSubstrings("bacbacbacbacbacbacbac"), 190, 'Test 126');
test(numberOfSubstrings("abcabcabcabcabc"), 91, 'Test 127');
test(numberOfSubstrings("bbaacccaaaabbccba"), 76, 'Test 128');
test(numberOfSubstrings("aaaaabbbbbccccc"), 25, 'Test 129');
test(numberOfSubstrings("aaabbbcccabc"), 34, 'Test 130');

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
