// Test: 2645. Minimum Additions To Make Valid String
// 108 test cases from LeetCodeDataset
// Run: node test.js

const { addMinimum } = require("./solution");

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

console.log("\n2645. Minimum Additions To Make Valid String\n");

test(addMinimum("aab"), 3, 'Test 1');
test(addMinimum("abc"), 0, 'Test 2');
test(addMinimum("bacbac"), 6, 'Test 3');
test(addMinimum("aabbcc"), 6, 'Test 4');
test(addMinimum("acbac"), 4, 'Test 5');
test(addMinimum("aababacaba"), 8, 'Test 6');
test(addMinimum("abcabc"), 0, 'Test 7');
test(addMinimum("bbcc"), 5, 'Test 8');
test(addMinimum("cccc"), 8, 'Test 9');
test(addMinimum("aaaaa"), 10, 'Test 10');
test(addMinimum("cab"), 3, 'Test 11');
test(addMinimum("bb"), 4, 'Test 12');
test(addMinimum("aaa"), 6, 'Test 13');
test(addMinimum("b"), 2, 'Test 14');
test(addMinimum("ac"), 1, 'Test 15');
test(addMinimum("aaabbbccc"), 12, 'Test 16');
test(addMinimum("abac"), 2, 'Test 17');
test(addMinimum("bbbbbbb"), 14, 'Test 18');
test(addMinimum("aabccba"), 8, 'Test 19');
test(addMinimum("bbccaa"), 9, 'Test 20');
test(addMinimum("cba"), 6, 'Test 21');
test(addMinimum("ccbaab"), 9, 'Test 22');
test(addMinimum("ccc"), 6, 'Test 23');
test(addMinimum("bcab"), 2, 'Test 24');
test(addMinimum("ccccab"), 9, 'Test 25');
test(addMinimum("aababab"), 5, 'Test 26');
test(addMinimum("aaaaaabbbbbc"), 18, 'Test 27');
test(addMinimum("cccbbaaa"), 16, 'Test 28');
test(addMinimum("cbac"), 5, 'Test 29');
test(addMinimum("abcabcabc"), 0, 'Test 30');
test(addMinimum("ba"), 4, 'Test 31');
test(addMinimum("cccccccc"), 16, 'Test 32');
test(addMinimum("abbbccca"), 10, 'Test 33');
test(addMinimum("abcbac"), 3, 'Test 34');
test(addMinimum("bbbb"), 8, 'Test 35');
test(addMinimum("caabbac"), 8, 'Test 36');
test(addMinimum("babbabcabcbacbacbacb"), 16, 'Test 37');
test(addMinimum("aaaab"), 7, 'Test 38');
test(addMinimum("bcaabc"), 3, 'Test 39');
test(addMinimum("bbbbbb"), 12, 'Test 40');
test(addMinimum("cabababc"), 4, 'Test 41');
test(addMinimum("bacbacbac"), 9, 'Test 42');
test(addMinimum("bcaacb"), 6, 'Test 43');
test(addMinimum("abcababc"), 1, 'Test 44');
test(addMinimum("abacbacbac"), 8, 'Test 45');
test(addMinimum("bcbcbc"), 3, 'Test 46');
test(addMinimum("aaaaaaaa"), 16, 'Test 47');
test(addMinimum("bbbaccc"), 11, 'Test 48');
test(addMinimum("babcbcbcabc"), 4, 'Test 49');
test(addMinimum("bcbcb"), 4, 'Test 50');
test(addMinimum("aacaabbc"), 7, 'Test 51');
test(addMinimum("abacbac"), 5, 'Test 52');
test(addMinimum("aaaaaa"), 12, 'Test 53');
test(addMinimum("acb"), 3, 'Test 54');
test(addMinimum("ababab"), 3, 'Test 55');
test(addMinimum("cabcabc"), 2, 'Test 56');
test(addMinimum("aabbccabc"), 6, 'Test 57');
test(addMinimum("abab"), 2, 'Test 58');
test(addMinimum("abacab"), 3, 'Test 59');
test(addMinimum("bcabc"), 1, 'Test 60');
test(addMinimum("accba"), 7, 'Test 61');
test(addMinimum("aabacbac"), 7, 'Test 62');
test(addMinimum("bababab"), 5, 'Test 63');
test(addMinimum("bbbbbbbb"), 16, 'Test 64');
test(addMinimum("acbabc"), 3, 'Test 65');
test(addMinimum("aabcbc"), 3, 'Test 66');
test(addMinimum("abcaabcbacbacb"), 10, 'Test 67');
test(addMinimum("aabcbabccba"), 10, 'Test 68');
test(addMinimum("abccccba"), 10, 'Test 69');
test(addMinimum("baabbcc"), 8, 'Test 70');
test(addMinimum("cabcab"), 3, 'Test 71');
test(addMinimum("cbacba"), 9, 'Test 72');
test(addMinimum("bac"), 3, 'Test 73');
test(addMinimum("aaaa"), 8, 'Test 74');
test(addMinimum("abcbbca"), 5, 'Test 75');
test(addMinimum("bca"), 3, 'Test 76');
test(addMinimum("ababac"), 3, 'Test 77');
test(addMinimum("cbacbacb"), 10, 'Test 78');
test(addMinimum("abccba"), 6, 'Test 79');
test(addMinimum("cabcabcab"), 3, 'Test 80');
test(addMinimum("abcabcabcabcabc"), 0, 'Test 81');
test(addMinimum("bbbacabc"), 7, 'Test 82');
test(addMinimum("acbacbac"), 7, 'Test 83');
test(addMinimum("aaac"), 5, 'Test 84');
test(addMinimum("bbaaac"), 9, 'Test 85');
test(addMinimum("abcacbac"), 4, 'Test 86');
test(addMinimum("abacbc"), 3, 'Test 87');
test(addMinimum("ccca"), 8, 'Test 88');
test(addMinimum("cccccc"), 12, 'Test 89');
test(addMinimum("aabbaacc"), 10, 'Test 90');
test(addMinimum("acbacbacbac"), 10, 'Test 91');
test(addMinimum("abcba"), 4, 'Test 92');
test(addMinimum("acbacbacb"), 9, 'Test 93');
test(addMinimum("ccccbbbaaa"), 20, 'Test 94');
test(addMinimum("acabca"), 3, 'Test 95');
test(addMinimum("abbbcccaa"), 12, 'Test 96');
test(addMinimum("aabbbccc"), 10, 'Test 97');
test(addMinimum("abcabcbac"), 3, 'Test 98');
test(addMinimum("abcabca"), 2, 'Test 99');
test(addMinimum("ccababca"), 7, 'Test 100');
test(addMinimum("bababacbcabc"), 6, 'Test 101');
test(addMinimum("accab"), 4, 'Test 102');
test(addMinimum("abbbac"), 6, 'Test 103');
test(addMinimum("acbbca"), 6, 'Test 104');
test(addMinimum("bcabca"), 3, 'Test 105');
test(addMinimum("bcbcbcbc"), 4, 'Test 106');
test(addMinimum("aabcbcbc"), 4, 'Test 107');
test(addMinimum("abcabcabcabc"), 0, 'Test 108');

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
