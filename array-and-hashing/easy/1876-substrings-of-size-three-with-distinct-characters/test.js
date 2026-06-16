// Test: 1876. Substrings Of Size Three With Distinct Characters
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { countGoodSubstrings } = require("./solution");

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

console.log("\n1876. Substrings Of Size Three With Distinct Characters\n");

test(countGoodSubstrings("xyzxyzxyz"), 7, 'Test 1');
test(countGoodSubstrings("abcabcabc"), 7, 'Test 2');
test(countGoodSubstrings("xyzzaz"), 1, 'Test 3');
test(countGoodSubstrings("aabbcc"), 0, 'Test 4');
test(countGoodSubstrings("abacab"), 2, 'Test 5');
test(countGoodSubstrings("qqqppprrr"), 0, 'Test 6');
test(countGoodSubstrings("abac"), 1, 'Test 7');
test(countGoodSubstrings("abc"), 1, 'Test 8');
test(countGoodSubstrings("xyzxyz"), 4, 'Test 9');
test(countGoodSubstrings("abcdcba"), 4, 'Test 10');
test(countGoodSubstrings("aababcabc"), 4, 'Test 11');
test(countGoodSubstrings("abacaba"), 2, 'Test 12');
test(countGoodSubstrings("abca"), 2, 'Test 13');
test(countGoodSubstrings("pqr"), 1, 'Test 14');
test(countGoodSubstrings("aaa"), 0, 'Test 15');
test(countGoodSubstrings("aaaaa"), 0, 'Test 16');
test(countGoodSubstrings("xyz"), 1, 'Test 17');
test(countGoodSubstrings("abcdefg"), 5, 'Test 18');
test(countGoodSubstrings("pqrspqrs"), 6, 'Test 19');
test(countGoodSubstrings("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 49, 'Test 20');
test(countGoodSubstrings("abcdefghijkabcdefghijkabcdefghijkabcdefghijk"), 42, 'Test 21');
test(countGoodSubstrings("abcdabcdeabcdefabcdefg"), 20, 'Test 22');
test(countGoodSubstrings("abcdefghtijklmnopqrstuvwxyz"), 25, 'Test 23');
test(countGoodSubstrings("abcdefghijklijkijklmnopqrstuvwxyz"), 31, 'Test 24');
test(countGoodSubstrings("abcdefabcdefabcdef"), 16, 'Test 25');
test(countGoodSubstrings("abcabcabcabc"), 10, 'Test 26');
test(countGoodSubstrings("uniquecharacters"), 13, 'Test 27');
test(countGoodSubstrings("thisisateststringforcountinggoodsubstrings"), 32, 'Test 28');
test(countGoodSubstrings("mnopqrspqrspqrspqr"), 16, 'Test 29');
test(countGoodSubstrings("aaaabbbbcccc"), 0, 'Test 30');
test(countGoodSubstrings("zzzzzzzzzz"), 0, 'Test 31');
test(countGoodSubstrings("abacabadabacabad"), 7, 'Test 32');
test(countGoodSubstrings("abababababababababababababababababab"), 0, 'Test 33');
test(countGoodSubstrings("mnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopq"), 73, 'Test 34');
test(countGoodSubstrings("abcabcabcabcabcabcabcabcabcabcabcabc"), 34, 'Test 35');
test(countGoodSubstrings("xyzzyxzyxzyxzyxzyxzyxzyxzyx"), 23, 'Test 36');
test(countGoodSubstrings("aaabbbcccddd"), 0, 'Test 37');
test(countGoodSubstrings("abcdbcefg"), 7, 'Test 38');
test(countGoodSubstrings("abacabadabcabcabcabc"), 14, 'Test 39');
test(countGoodSubstrings("pqrstuvwxyza"), 10, 'Test 40');
test(countGoodSubstrings("mnopqrstuvwxyzabcdefghijkl"), 24, 'Test 41');
test(countGoodSubstrings("abcdbca"), 5, 'Test 42');
test(countGoodSubstrings("abcabcabcabcabcabcabcabcabcabc"), 28, 'Test 43');
test(countGoodSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzxyz"), 2, 'Test 44');
test(countGoodSubstrings("xyzabxyzabxyzabxyz"), 16, 'Test 45');
test(countGoodSubstrings("abcdefgabcdefgabcdefgabcdefgabcdefgabcdefg"), 40, 'Test 46');
test(countGoodSubstrings("abcababcbacbacbabc"), 12, 'Test 47');
test(countGoodSubstrings("qwertyuiopasdfghjklzxcvbnm"), 24, 'Test 48');
test(countGoodSubstrings("ababababababababab"), 0, 'Test 49');
test(countGoodSubstrings("abcabcabcabcabcabc"), 16, 'Test 50');
test(countGoodSubstrings("aabbccddeeffgghhii"), 0, 'Test 51');
test(countGoodSubstrings("abacabacabacabacabacabacabacabacabacabac"), 19, 'Test 52');
test(countGoodSubstrings("abcdeffedcbaabcdeffedcbaabcdeffedcbaabcdeffedcba"), 32, 'Test 53');
test(countGoodSubstrings("abcdefgheijklmnopqrstuvwxyz"), 25, 'Test 54');
test(countGoodSubstrings("xyzzyxzyxzyxzyxzyx"), 14, 'Test 55');
test(countGoodSubstrings("zzzzzzzzz"), 0, 'Test 56');
test(countGoodSubstrings("xyzzyzzxyzzxyzzxyzzx"), 7, 'Test 57');
test(countGoodSubstrings("abcdexyz"), 6, 'Test 58');
test(countGoodSubstrings("abcdefghijklmnopqrstuvwxyzaaa"), 25, 'Test 59');
test(countGoodSubstrings("abacabadabacaba"), 6, 'Test 60');
test(countGoodSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzz"), 0, 'Test 61');
test(countGoodSubstrings("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 76, 'Test 62');
test(countGoodSubstrings("zzzzzzzzzzzzzzzzzzzz"), 0, 'Test 63');
test(countGoodSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzabcdefghijklmnopqrstuvwxyz"), 25, 'Test 64');
test(countGoodSubstrings("abcdefgabcdefgabcdefgabcdefg"), 26, 'Test 65');
test(countGoodSubstrings("aabbccddeeffgghhiii"), 0, 'Test 66');
test(countGoodSubstrings("abacabadabcaba"), 7, 'Test 67');
test(countGoodSubstrings("mnopqmnopqmnopq"), 13, 'Test 68');
test(countGoodSubstrings("aabbccddeeffgg"), 0, 'Test 69');
test(countGoodSubstrings("uniquecharactersinthisstringareunique"), 32, 'Test 70');
test(countGoodSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 0, 'Test 71');
test(countGoodSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzyyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggeeffddbbaa"), 0, 'Test 72');
test(countGoodSubstrings("aabcaabcdaabcaabcdaabc"), 11, 'Test 73');
test(countGoodSubstrings("abcdefghijklmnopqrstuvwxyz"), 24, 'Test 74');
test(countGoodSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 75');
test(countGoodSubstrings("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnoooo"), 0, 'Test 76');
test(countGoodSubstrings("abcdeabcdeabcde"), 13, 'Test 77');
test(countGoodSubstrings("ababababab"), 0, 'Test 78');
test(countGoodSubstrings("aaaaaaaaaaaaaaaaaaa"), 0, 'Test 79');
test(countGoodSubstrings("abcdefgabcdefgabcdefg"), 19, 'Test 80');
test(countGoodSubstrings("abacdefghijklmnopqrstuvwxyz"), 24, 'Test 81');
test(countGoodSubstrings("xyzzazxyzzazxyzzaz"), 7, 'Test 82');
test(countGoodSubstrings("abababababababababababababababababababab"), 0, 'Test 83');
test(countGoodSubstrings("abcabcabcabcabcabcabcabcabc"), 25, 'Test 84');
test(countGoodSubstrings("abcabcabcabcabcabcabcabc"), 22, 'Test 85');
test(countGoodSubstrings("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 50, 'Test 86');
test(countGoodSubstrings("abacabadabcabc"), 8, 'Test 87');
test(countGoodSubstrings("abacabadaba"), 4, 'Test 88');
test(countGoodSubstrings("abcabcabcabcabcabcabcabcabcabcabc"), 31, 'Test 89');
test(countGoodSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 90');
test(countGoodSubstrings("thisisaverylongstringwithvariouscharacters"), 37, 'Test 91');
test(countGoodSubstrings("mississippi"), 2, 'Test 92');
test(countGoodSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 93');
test(countGoodSubstrings("repeatedrepeatedrepeatedrepeatedrepeated"), 33, 'Test 94');
test(countGoodSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 95');
test(countGoodSubstrings("allcharactersareuniquehere"), 19, 'Test 96');

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
