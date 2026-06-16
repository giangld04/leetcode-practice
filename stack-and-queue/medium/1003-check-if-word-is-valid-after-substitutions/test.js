// Test: 1003. Check If Word Is Valid After Substitutions
// 140 test cases from LeetCodeDataset
// Run: node test.js

const { isValid } = require("./solution");

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

console.log("\n1003. Check If Word Is Valid After Substitutions\n");

test(isValid("aaabbbccc"), false, 'Test 1');
test(isValid("aababcbccabc"), false, 'Test 2');
test(isValid("cababc"), false, 'Test 3');
test(isValid("abcabcabc"), true, 'Test 4');
test(isValid("aababcbabc"), false, 'Test 5');
test(isValid("abcabcabcabc"), true, 'Test 6');
test(isValid("aabcbc"), true, 'Test 7');
test(isValid(""), true, 'Test 8');
test(isValid("abcabc"), true, 'Test 9');
test(isValid("abcabcababcc"), true, 'Test 10');
test(isValid("bcaabc"), false, 'Test 11');
test(isValid("aabcabcabc"), false, 'Test 12');
test(isValid("bca"), false, 'Test 13');
test(isValid("abc"), true, 'Test 14');
test(isValid("aabababc"), false, 'Test 15');
test(isValid("abcabcabcabcabcabc"), true, 'Test 16');
test(isValid("abcabcabacbc"), false, 'Test 17');
test(isValid("ababcabcababcc"), false, 'Test 18');
test(isValid("abccba"), false, 'Test 19');
test(isValid("cab"), false, 'Test 20');
test(isValid("aabbcc"), false, 'Test 21');
test(isValid("aabcbcababc"), false, 'Test 22');
test(isValid("aabcbabcbabc"), false, 'Test 23');
test(isValid("aabcbabcbabccba"), false, 'Test 24');
test(isValid("aababababababcabcabcabcabcabc"), false, 'Test 25');
test(isValid("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), true, 'Test 26');
test(isValid("aababababababcabcababc"), false, 'Test 27');
test(isValid("aabcbcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), true, 'Test 28');
test(isValid("ababcabcabcababcabcababcabc"), false, 'Test 29');
test(isValid("abcabcabababcabc"), false, 'Test 30');
test(isValid("ababcabcabcabcababc"), false, 'Test 31');
test(isValid("ababcababcababcababcababcc"), false, 'Test 32');
test(isValid("abcabababcababcabc"), false, 'Test 33');
test(isValid("aababababcbcbcbc"), false, 'Test 34');
test(isValid("aabbbccabcabcabcabcabcabcab"), false, 'Test 35');
test(isValid("aabbabccbababc"), false, 'Test 36');
test(isValid("aaaabbbbcccc"), false, 'Test 37');
test(isValid("abcabababababababc"), false, 'Test 38');
test(isValid("aababcabcbaabc"), false, 'Test 39');
test(isValid("aabcbabcbabcbabcbabcbabc"), false, 'Test 40');
test(isValid("abcabababababababcababababababc"), false, 'Test 41');
test(isValid("abcabccbaabc"), false, 'Test 42');
test(isValid("abcabcababababcabc"), false, 'Test 43');
test(isValid("aabcbcaabcab"), false, 'Test 44');
test(isValid("abcabcabcabcabcabcabcabcabcabcabcabc"), true, 'Test 45');
test(isValid("aabcbabcababcabcba"), false, 'Test 46');
test(isValid("aabcbcababcbcababc"), false, 'Test 47');
test(isValid("abcabcabcabcabcabcabcabcabcabcabcabcabc"), true, 'Test 48');
test(isValid("aabcbabcabcbabcabcbabcabcbabcabcbabcabc"), false, 'Test 49');
test(isValid("abccabccabccabccabccabccabccabccabcc"), false, 'Test 50');
test(isValid("aababcababcabcabcabcabcababcc"), false, 'Test 51');
test(isValid("aabcbcaabcbcaabcbcaabcbcaabc"), false, 'Test 52');
test(isValid("abcabcabcabcabcabcabc"), true, 'Test 53');
test(isValid("abcabcabcabcabcabcab"), false, 'Test 54');
test(isValid("abababcabcabcabc"), false, 'Test 55');
test(isValid("abababcabcabcabcabc"), false, 'Test 56');
test(isValid("abccababccababcc"), false, 'Test 57');
test(isValid("ababcabcababcabcabcabcabc"), false, 'Test 58');
test(isValid("abccbaabccbaabccba"), false, 'Test 59');
test(isValid("abcabcabcabcabcabcabcabcabcabc"), true, 'Test 60');
test(isValid("aabcbcabcabcabcabcbcaabbcc"), false, 'Test 61');
test(isValid("aabababababababcabcabc"), false, 'Test 62');
test(isValid("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), true, 'Test 63');
test(isValid("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), true, 'Test 64');
test(isValid("aabcbcababcbcababccba"), false, 'Test 65');
test(isValid("ababababcabcabc"), false, 'Test 66');
test(isValid("ababababababcabcabcababc"), false, 'Test 67');
test(isValid("abccabccabccabccabccabcc"), false, 'Test 68');
test(isValid("aabcbabcbababc"), false, 'Test 69');
test(isValid("abcabcababccabcabcab"), false, 'Test 70');
test(isValid("aabcbcabcabababcabcabcabababcabcab"), false, 'Test 71');
test(isValid("aabcbcaabcbcaabcbcaabc"), false, 'Test 72');
test(isValid("aabcbabcabcbabcabcbabcabc"), false, 'Test 73');
test(isValid("abcabababcabababc"), false, 'Test 74');
test(isValid("ababababababcabcabcabcabcabc"), false, 'Test 75');
test(isValid("aaabbbcccaabbbcccaabbbcccabcabcabc"), false, 'Test 76');
test(isValid("abcababccbaabc"), false, 'Test 77');
test(isValid("abcabcabcabcabcabcabccbaabccba"), false, 'Test 78');
test(isValid("aabcbabababcabcabc"), false, 'Test 79');
test(isValid("aabcbcababccbaabcbcbcabcababcababcbc"), false, 'Test 80');
test(isValid("abcabcabcabcabcabcabcabcabcabccba"), false, 'Test 81');
test(isValid("abcababababcabab"), false, 'Test 82');
test(isValid("abcababcababcababc"), false, 'Test 83');
test(isValid("aabcbcababccbaabccba"), false, 'Test 84');
test(isValid("abababababcabababcabc"), false, 'Test 85');
test(isValid("aabcbcababcbcababcbcabababcabcabccba"), false, 'Test 86');
test(isValid("aabcbabcbabcbabcbabcbabcbabcbabc"), false, 'Test 87');
test(isValid("aababababababababcabcababcababcc"), false, 'Test 88');
test(isValid("aabbccabcabcabcabcabcabcabc"), false, 'Test 89');
test(isValid("abababababababababababcabcabcabcabcabcabc"), false, 'Test 90');
test(isValid("aabcbcabcabcabcabcabccbaabc"), false, 'Test 91');
test(isValid("aaaaaaaaaabbbbbbbbbbcccccccccc"), false, 'Test 92');
test(isValid("abababababababababababc"), false, 'Test 93');
test(isValid("abababababababababababcabcabc"), false, 'Test 94');
test(isValid("aabcaabbccabcabcabc"), false, 'Test 95');
test(isValid("ababcababcababcababcababcababcababcabcabcc"), false, 'Test 96');
test(isValid("abcabcabcabcabcabcabcabcabcabcabcabcabcabc"), true, 'Test 97');
test(isValid("abcabababababababababababababcabcabcababcabc"), false, 'Test 98');
test(isValid("abcabcabcabcabccba"), false, 'Test 99');
test(isValid("aabcbcababccbaabcbcbcabcababcababcbcababccba"), false, 'Test 100');
test(isValid("abcabcababcabcabcabababc"), false, 'Test 101');
test(isValid("aaabbbbcccc"), false, 'Test 102');
test(isValid("abcabababcababababc"), false, 'Test 103');
test(isValid("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), true, 'Test 104');
test(isValid("ababababcabcabcababc"), false, 'Test 105');
test(isValid("abccabccabccabccabccabccabccabccabccabccabcc"), false, 'Test 106');
test(isValid("ababcababcababcababcababcababcababcababc"), false, 'Test 107');
test(isValid("abcababababababababababababcabcabcab"), false, 'Test 108');
test(isValid("abababababababababababababcabcabcabcabcabcabcabc"), false, 'Test 109');
test(isValid("abccabccabccabcabcabc"), false, 'Test 110');
test(isValid("aababcababcababcababcab"), false, 'Test 111');
test(isValid("abcabcabcabccbaabc"), false, 'Test 112');
test(isValid("aababcabcabcababcc"), false, 'Test 113');
test(isValid("aabcbcaabcbcaabc"), false, 'Test 114');
test(isValid("abcabcabcabababcababc"), false, 'Test 115');
test(isValid("abcababcababcababcababcab"), false, 'Test 116');
test(isValid("abcabcabcabcababcabc"), false, 'Test 117');
test(isValid("abacbabcbacbabcbabc"), false, 'Test 118');
test(isValid("aabccbaabcabcabc"), false, 'Test 119');
test(isValid("abccbaabcabcabcabcabc"), false, 'Test 120');
test(isValid("abababababcabcabcabc"), false, 'Test 121');
test(isValid("aabbabccbababcabcabc"), false, 'Test 122');
test(isValid("abcabcabcabcabcabcabcabcabc"), true, 'Test 123');
test(isValid("abcabcabcabcabcabccba"), false, 'Test 124');
test(isValid("abcabcabcabcabcabcabcabc"), true, 'Test 125');
test(isValid("abcabcababcababc"), false, 'Test 126');
test(isValid("aabcbcababcbcababcbcababcabc"), false, 'Test 127');
test(isValid("ababababababababc"), false, 'Test 128');
test(isValid("aabcbabcbabcbabc"), false, 'Test 129');
test(isValid("ababcababcababcababcababcababcabcabc"), false, 'Test 130');
test(isValid("abcabcabcabcabcabcabcabcabcabcabc"), true, 'Test 131');
test(isValid("aabcbcabcabcabcabcabcabcabcabcabcabcabc"), true, 'Test 132');
test(isValid("abcabcabcababccbaabc"), false, 'Test 133');
test(isValid("abcababababcabcabcab"), false, 'Test 134');
test(isValid("aabcbcabcabcabcabcabcabcabcbc"), false, 'Test 135');
test(isValid("aabababababababababababababababcabcabc"), false, 'Test 136');
test(isValid("aabcbcbcbcabcabcabc"), false, 'Test 137');
test(isValid("abccabcabcabcabcab"), false, 'Test 138');
test(isValid("abababababababababababababababababababcabcabc"), false, 'Test 139');
test(isValid("aabcbcababccbaabcbcbc"), false, 'Test 140');

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
