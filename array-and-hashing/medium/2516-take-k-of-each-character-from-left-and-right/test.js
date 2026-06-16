// Test: 2516. Take K Of Each Character From Left And Right
// 131 test cases from LeetCodeDataset
// Run: node test.js

const { takeCharacters } = require("./solution");

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

console.log("\n2516. Take K Of Each Character From Left And Right\n");

test(takeCharacters("abacbacbacb", 2), 6, 'Test 1');
test(takeCharacters("baccbaccbacc", 2), 6, 'Test 2');
test(takeCharacters("abcabcabcabcabc", 3), 9, 'Test 3');
test(takeCharacters("aabbaacc", 2), 6, 'Test 4');
test(takeCharacters("", 0), 0, 'Test 5');
test(takeCharacters("abc", 0), 0, 'Test 6');
test(takeCharacters("abcabcabcabcabcabc", 3), 9, 'Test 7');
test(takeCharacters("abacabadabcacba", 3), Error: string index out of range, 'Test 8');
test(takeCharacters("cccbbaaaa", 2), 7, 'Test 9');
test(takeCharacters("abacbcabc", 0), 0, 'Test 10');
test(takeCharacters("ccccccc", 2), -1, 'Test 11');
test(takeCharacters("aabbbccc", 2), 6, 'Test 12');
test(takeCharacters("aaaabbbbcccc", 4), 12, 'Test 13');
test(takeCharacters("aabaaaacaabc", 2), 8, 'Test 14');
test(takeCharacters("abcabcabc", 1), 3, 'Test 15');
test(takeCharacters("abcabcabc", 3), 9, 'Test 16');
test(takeCharacters("ccccccc", 3), -1, 'Test 17');
test(takeCharacters("a", 1), -1, 'Test 18');
test(takeCharacters("cccaaaabbb", 2), 7, 'Test 19');
test(takeCharacters("aabbcc", 1), 4, 'Test 20');
test(takeCharacters("aaabbbccc", 3), 9, 'Test 21');
test(takeCharacters("abcabcabcabcabcabcabcabcabcabc", 4), 12, 'Test 22');
test(takeCharacters("abacabadabacabadabacaba", 3), Error: string index out of range, 'Test 23');
test(takeCharacters("ccccccbbbaaa", 3), 9, 'Test 24');
test(takeCharacters("abacbacbacb", 3), 9, 'Test 25');
test(takeCharacters("aabbccaaabbcc", 2), 6, 'Test 26');
test(takeCharacters("abacbacbacbac", 2), 6, 'Test 27');
test(takeCharacters("baacababacbacbacbacbacb", 3), 9, 'Test 28');
test(takeCharacters("ababababababcabcabc", 3), 9, 'Test 29');
test(takeCharacters("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", 5), 15, 'Test 30');
test(takeCharacters("bababababababa", 5), -1, 'Test 31');
test(takeCharacters("aaaabbbbccccaaaabbbbccccaaaabbbbcccc", 4), 12, 'Test 32');
test(takeCharacters("abcabcabcabcabcabcabcabcabcabcabcabc", 4), 12, 'Test 33');
test(takeCharacters("bbbbbaaaaaccccaaaabbbbccccaaaa", 5), 18, 'Test 34');
test(takeCharacters("aabbbbccccaa", 2), 8, 'Test 35');
test(takeCharacters("abacabacabc", 2), 6, 'Test 36');
test(takeCharacters("aabacbacbacbac", 3), 9, 'Test 37');
test(takeCharacters("aabaaaabbbcccaabbcccaabbccc", 3), 9, 'Test 38');
test(takeCharacters("aabbbcccaaa", 3), 9, 'Test 39');
test(takeCharacters("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", 6), 18, 'Test 40');
test(takeCharacters("ccccbbbaaaa", 3), 10, 'Test 41');
test(takeCharacters("bbbbbcccccc", 2), -1, 'Test 42');
test(takeCharacters("cccaaaabbbccc", 3), 9, 'Test 43');
test(takeCharacters("abcbaabcbaabcba", 2), 6, 'Test 44');
test(takeCharacters("aaaaaaaaaabbbbbbbbcccccccc", 4), 16, 'Test 45');
test(takeCharacters("abacbacbacbacbacbacbacbacb", 3), 9, 'Test 46');
test(takeCharacters("ccbbbaaa", 2), 6, 'Test 47');
test(takeCharacters("aabbccaaaabbcc", 3), 10, 'Test 48');
test(takeCharacters("abccbaabccba", 2), 6, 'Test 49');
test(takeCharacters("aaaaaaaaaabbbbbbbbbbbcccccc", 5), 16, 'Test 50');
test(takeCharacters("baccbaabccba", 2), 6, 'Test 51');
test(takeCharacters("abcabcabcabcabcabcabc", 3), 9, 'Test 52');
test(takeCharacters("abcabcabcabcabc", 2), 6, 'Test 53');
test(takeCharacters("cccccccccccccccccc", 5), -1, 'Test 54');
test(takeCharacters("cccccccccccaabbbbbb", 3), -1, 'Test 55');
test(takeCharacters("abacabacabac", 3), 11, 'Test 56');
test(takeCharacters("abacabaacaba", 3), -1, 'Test 57');
test(takeCharacters("aabbbcccbbbcccaaa", 3), 9, 'Test 58');
test(takeCharacters("abcabcabcabcabcabcabcabcabc", 4), 12, 'Test 59');
test(takeCharacters("abccbaabcbaabc", 3), 9, 'Test 60');
test(takeCharacters("ccccccbbbbaaa", 2), 7, 'Test 61');
test(takeCharacters("aaaaabbbbbcccc", 1), 6, 'Test 62');
test(takeCharacters("aaaaaaabbbccc", 2), 7, 'Test 63');
test(takeCharacters("abcabcabcabcabcabcabcabcabcabc", 5), 15, 'Test 64');
test(takeCharacters("aaabbbcccbbbcccaaaccc", 4), 14, 'Test 65');
test(takeCharacters("cccbbbbaaa", 2), 7, 'Test 66');
test(takeCharacters("aabbccabcabcabcabcabcabc", 4), 12, 'Test 67');
test(takeCharacters("aabaaaacaabc", 5), -1, 'Test 68');
test(takeCharacters("aabccbaabccbaabccba", 3), 9, 'Test 69');
test(takeCharacters("bbbbbbbccccaaa", 2), 7, 'Test 70');
test(takeCharacters("aaabbbcccaaa", 2), 8, 'Test 71');
test(takeCharacters("bbbaaabbbcccaaa", 2), 7, 'Test 72');
test(takeCharacters("abcabcabcabcabcabcabcabc", 3), 9, 'Test 73');
test(takeCharacters("abacbacbacbacbacbac", 5), 15, 'Test 74');
test(takeCharacters("aabaaabccbbccaa", 3), 10, 'Test 75');
test(takeCharacters("bacbacbacbacbac", 4), 12, 'Test 76');
test(takeCharacters("ccccaaabbb", 2), 7, 'Test 77');
test(takeCharacters("acbbacaabcbab", 2), 6, 'Test 78');
test(takeCharacters("abcabcabcabcabcabcabcabcabcabc", 3), 9, 'Test 79');
test(takeCharacters("abababababababababcabcabcabc", 4), 12, 'Test 80');
test(takeCharacters("bcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcb", 3), -1, 'Test 81');
test(takeCharacters("abababababababababababababababababababababababab", 5), -1, 'Test 82');
test(takeCharacters("ccbaabacabcabcabcabcabcabcabcabcabcabc", 4), 12, 'Test 83');
test(takeCharacters("acbacbacbacbacbac", 2), 6, 'Test 84');
test(takeCharacters("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", 10), 30, 'Test 85');
test(takeCharacters("cccccccccccccccccccccccccccccccccccccccccccccc", 15), -1, 'Test 86');
test(takeCharacters("cccbaaaaabbccc", 3), 11, 'Test 87');
test(takeCharacters("aababababababababababababa", 2), -1, 'Test 88');
test(takeCharacters("aabbcccaabbcccaabbccc", 5), 16, 'Test 89');
test(takeCharacters("ccababacabac", 2), 6, 'Test 90');
test(takeCharacters("aabbaabbaabbaabbcc", 4), -1, 'Test 91');
test(takeCharacters("ccbacababacba", 4), 12, 'Test 92');
test(takeCharacters("aabaaaabbbcccaabbcccaabbccc", 4), 14, 'Test 93');
test(takeCharacters("abcabcabcabcabcabcabcabcabcabcabc", 5), 15, 'Test 94');
test(takeCharacters("cccccccccbaaaabbbccc", 3), 9, 'Test 95');
test(takeCharacters("bbaaccaabbbb", 2), 6, 'Test 96');
test(takeCharacters("abacbacbacbacbac", 4), 12, 'Test 97');
test(takeCharacters("caacbbacabcabc", 2), 6, 'Test 98');
test(takeCharacters("aabbccbaaabbccbaaabbcc", 2), 6, 'Test 99');
test(takeCharacters("cccccccccccbcccccccccc", 3), -1, 'Test 100');
test(takeCharacters("aabbcc", 0), 0, 'Test 101');
test(takeCharacters("cabcabcabcabcabcabcabcabcabcabcabc", 5), 15, 'Test 102');
test(takeCharacters("aabcaabcbaabcbaabcba", 4), 16, 'Test 103');
test(takeCharacters("ccccccbbbaaaaaaacccccccbbbaaaaaa", 4), 16, 'Test 104');
test(takeCharacters("abacabadabacaba", 3), -1, 'Test 105');
test(takeCharacters("bcccccccccccba", 3), -1, 'Test 106');
test(takeCharacters("aaabbbccc", 0), 0, 'Test 107');
test(takeCharacters("bcbcbcbcbcbc", 2), -1, 'Test 108');
test(takeCharacters("abcabcabcabcabcabc", 2), 6, 'Test 109');
test(takeCharacters("bacbacbacbacbacbacbacbacbacbacbacbac", 4), 12, 'Test 110');
test(takeCharacters("cccccccccccccccccccccccccc", 10), -1, 'Test 111');
test(takeCharacters("aabbbcccddd", 1), 7, 'Test 112');
test(takeCharacters("ccbaabccbaabccba", 3), 9, 'Test 113');
test(takeCharacters("ababababababababababababababababababababababababab", 6), -1, 'Test 114');
test(takeCharacters("ccccccaaaabbbb", 2), 8, 'Test 115');
test(takeCharacters("ccccbbbbaaaaccccbbaaaccccbbaa", 4), 12, 'Test 116');
test(takeCharacters("aabaaaacaabc", 3), -1, 'Test 117');
test(takeCharacters("bbbbbbbaaaaaaaccccccc", 3), 13, 'Test 118');
test(takeCharacters("cacacacacacaca", 2), -1, 'Test 119');
test(takeCharacters("bbacccbaaa", 2), 6, 'Test 120');
test(takeCharacters("bbbaaacccbbbaaacccbbbaaacccbbbaaaccc", 3), 9, 'Test 121');
test(takeCharacters("aabaaaacaabcbbbccc", 3), 9, 'Test 122');
test(takeCharacters("abcabcabcabcabcabcabc", 4), 12, 'Test 123');
test(takeCharacters("aabccccbaa", 1), 4, 'Test 124');
test(takeCharacters("aaaaabbbbbccccc", 2), 9, 'Test 125');
test(takeCharacters("abacabadabacabadabacabad", 4), -1, 'Test 126');
test(takeCharacters("ccccbbbaaa", 2), 7, 'Test 127');
test(takeCharacters("aaaaaaaaaaa", 1), -1, 'Test 128');
test(takeCharacters("abacabacabacabacabacabacabacabacabacabac", 5), 19, 'Test 129');
test(takeCharacters("aabbcc", 2), 6, 'Test 130');
test(takeCharacters("aabcaaacbbacabcabc", 4), 12, 'Test 131');

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
