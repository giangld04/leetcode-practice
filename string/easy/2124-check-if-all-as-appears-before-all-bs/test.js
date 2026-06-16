// Test: 2124. Check If All As Appears Before All Bs
// 152 test cases from LeetCodeDataset
// Run: node test.js

const { checkString } = require("./solution");

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

console.log("\n2124. Check If All As Appears Before All Bs\n");

test(checkString("b"), true, 'Test 1');
test(checkString("aaaaabbbbb"), true, 'Test 2');
test(checkString("bbb"), true, 'Test 3');
test(checkString("ab"), true, 'Test 4');
test(checkString("aabbaa"), false, 'Test 5');
test(checkString("ba"), false, 'Test 6');
test(checkString("bba"), false, 'Test 7');
test(checkString("aaa"), true, 'Test 8');
test(checkString("aabbaabb"), false, 'Test 9');
test(checkString("aaabbb"), true, 'Test 10');
test(checkString("a"), true, 'Test 11');
test(checkString("aabbabbb"), false, 'Test 12');
test(checkString("abab"), false, 'Test 13');
test(checkString("abbb"), true, 'Test 14');
test(checkString("aaaaaaaaaabbbbbbbbbb"), true, 'Test 15');
test(checkString("abababbabababbab"), false, 'Test 16');
test(checkString("baaa"), false, 'Test 17');
test(checkString("bbbbbbbbbb"), true, 'Test 18');
test(checkString("aabababababbb"), false, 'Test 19');
test(checkString("bbbbbaaaaaaaaa"), false, 'Test 20');
test(checkString("ababbab"), false, 'Test 21');
test(checkString("aaaabbbbbaaabb"), false, 'Test 22');
test(checkString("baaabbb"), false, 'Test 23');
test(checkString("bbaaabbb"), false, 'Test 24');
test(checkString("abbbab"), false, 'Test 25');
test(checkString("aabbbbbba"), false, 'Test 26');
test(checkString("aabbbbbaaab"), false, 'Test 27');
test(checkString("aabaa"), false, 'Test 28');
test(checkString("aabaaabba"), false, 'Test 29');
test(checkString("aabbbbabbab"), false, 'Test 30');
test(checkString("aaaaaaaaaa"), true, 'Test 31');
test(checkString("babbaabbaabbaabb"), false, 'Test 32');
test(checkString("baaabaaa"), false, 'Test 33');
test(checkString("bbbbbbbaaaaaa"), false, 'Test 34');
test(checkString("aaaababbbb"), false, 'Test 35');
test(checkString("aabbbbaaa"), false, 'Test 36');
test(checkString("aaaa"), true, 'Test 37');
test(checkString("bbbbbbbbbaaaaaaaaa"), false, 'Test 38');
test(checkString("bbbbbaaaa"), false, 'Test 39');
test(checkString("aabbaabbabba"), false, 'Test 40');
test(checkString("aaaaaaaaa"), true, 'Test 41');
test(checkString("aaabbaabbb"), false, 'Test 42');
test(checkString("bbbbbaaaaa"), false, 'Test 43');
test(checkString("aaabba"), false, 'Test 44');
test(checkString("bbbbaaab"), false, 'Test 45');
test(checkString("aabbabb"), false, 'Test 46');
test(checkString("bbab"), false, 'Test 47');
test(checkString("baaaab"), false, 'Test 48');
test(checkString("bbbbabaa"), false, 'Test 49');
test(checkString("aabbbbba"), false, 'Test 50');
test(checkString("baaabbbb"), false, 'Test 51');
test(checkString("bbbaaa"), false, 'Test 52');
test(checkString("abbbbaaaaa"), false, 'Test 53');
test(checkString("aaaaaabbbbbb"), true, 'Test 54');
test(checkString("aaabbbaa"), false, 'Test 55');
test(checkString("bbbbba"), false, 'Test 56');
test(checkString("aaaabbbbaaaa"), false, 'Test 57');
test(checkString("bab"), false, 'Test 58');
test(checkString("bbaabbba"), false, 'Test 59');
test(checkString("aaaaabbbbbaaa"), false, 'Test 60');
test(checkString("baaaabbb"), false, 'Test 61');
test(checkString("aabbaabbb"), false, 'Test 62');
test(checkString("aaaabbbbba"), false, 'Test 63');
test(checkString("bababababa"), false, 'Test 64');
test(checkString("abbbbaaa"), false, 'Test 65');
test(checkString("bbaaaabbb"), false, 'Test 66');
test(checkString("aabbbbbbaaaa"), false, 'Test 67');
test(checkString("aaabb"), true, 'Test 68');
test(checkString("aabaaaabbb"), false, 'Test 69');
test(checkString("aaaaaaaaaabbbbbbbb"), true, 'Test 70');
test(checkString("aaabbbaaab"), false, 'Test 71');
test(checkString("ababababababab"), false, 'Test 72');
test(checkString("aabbabaa"), false, 'Test 73');
test(checkString("bbbbaa"), false, 'Test 74');
test(checkString("aaaaaaaaaaabbbbbbbbbbb"), true, 'Test 75');
test(checkString("bbbbbaab"), false, 'Test 76');
test(checkString("bbbbbaaabbaabbaabb"), false, 'Test 77');
test(checkString("abbbbbba"), false, 'Test 78');
test(checkString("aaaaaaaaabbbbbbbb"), true, 'Test 79');
test(checkString("bbbaaaaa"), false, 'Test 80');
test(checkString("abbbba"), false, 'Test 81');
test(checkString("aaaabbbbbbba"), false, 'Test 82');
test(checkString("aaaaaab"), true, 'Test 83');
test(checkString("babababaab"), false, 'Test 84');
test(checkString("abababab"), false, 'Test 85');
test(checkString("aaaaa"), true, 'Test 86');
test(checkString("bbaaaa"), false, 'Test 87');
test(checkString("aabbbbaa"), false, 'Test 88');
test(checkString("aababbaa"), false, 'Test 89');
test(checkString("aabbbbbaa"), false, 'Test 90');
test(checkString("abbbbbbaaaaa"), false, 'Test 91');
test(checkString("aaabbbbbba"), false, 'Test 92');
test(checkString("bbbbbbbbaaaa"), false, 'Test 93');
test(checkString("aaaaaaaaaabbbbbbbbbbb"), true, 'Test 94');
test(checkString("bbbbbaaaaabbb"), false, 'Test 95');
test(checkString("bbaabbabaa"), false, 'Test 96');
test(checkString("aabb"), true, 'Test 97');
test(checkString("ababbabababbab"), false, 'Test 98');
test(checkString("bbbbbbbbbaaaaa"), false, 'Test 99');
test(checkString("aaaabbbaaabb"), false, 'Test 100');
test(checkString("bababaaaabbbb"), false, 'Test 101');
test(checkString("bbaaa"), false, 'Test 102');
test(checkString("aabbaaabaaaabbbb"), false, 'Test 103');
test(checkString("aabababb"), false, 'Test 104');
test(checkString("bbbb"), true, 'Test 105');
test(checkString("aabbaabbbb"), false, 'Test 106');
test(checkString("baaaaa"), false, 'Test 107');
test(checkString("bbbbbaaaaabbbb"), false, 'Test 108');
test(checkString("aabbaaa"), false, 'Test 109');
test(checkString("ababab"), false, 'Test 110');
test(checkString("babbba"), false, 'Test 111');
test(checkString("bbbbbbbb"), true, 'Test 112');
test(checkString("aaabbbab"), false, 'Test 113');
test(checkString("bbaaaaaaab"), false, 'Test 114');
test(checkString("aaaaabbbbbbbba"), false, 'Test 115');
test(checkString("bbbbaaaaaa"), false, 'Test 116');
test(checkString("aabbabbbaabbb"), false, 'Test 117');
test(checkString("bababababab"), false, 'Test 118');
test(checkString("bbbaa"), false, 'Test 119');
test(checkString("bbbbbbbbb"), true, 'Test 120');
test(checkString("baaaabbbb"), false, 'Test 121');
test(checkString("aaaaabbbbbbbbb"), true, 'Test 122');
test(checkString("aabbba"), false, 'Test 123');
test(checkString("bababbababababab"), false, 'Test 124');
test(checkString("bbbbbbbbbaaab"), false, 'Test 125');
test(checkString("baab"), false, 'Test 126');
test(checkString("baaabb"), false, 'Test 127');
test(checkString("ababababbabababb"), false, 'Test 128');
test(checkString("bababbab"), false, 'Test 129');
test(checkString("ababababab"), false, 'Test 130');
test(checkString("bbbaaaaabbbbbbbbaaaa"), false, 'Test 131');
test(checkString("aabbbbbaaaa"), false, 'Test 132');
test(checkString("aabbbbb"), true, 'Test 133');
test(checkString("bbaa"), false, 'Test 134');
test(checkString("bbbaababbb"), false, 'Test 135');
test(checkString("bbbbaaaa"), false, 'Test 136');
test(checkString("baaab"), false, 'Test 137');
test(checkString("aaaaaabbbbba"), false, 'Test 138');
test(checkString("abaaa"), false, 'Test 139');
test(checkString("bbbaaabbb"), false, 'Test 140');
test(checkString("babababa"), false, 'Test 141');
test(checkString("aab"), true, 'Test 142');
test(checkString("bbbbbbbaaaaaaaaa"), false, 'Test 143');
test(checkString("abbbabab"), false, 'Test 144');
test(checkString("bbbbaabbaabb"), false, 'Test 145');
test(checkString("aabbbba"), false, 'Test 146');
test(checkString("aaaaaaaa"), true, 'Test 147');
test(checkString("aababbababaa"), false, 'Test 148');
test(checkString("aabbababab"), false, 'Test 149');
test(checkString("abbbbaaaab"), false, 'Test 150');
test(checkString("bbaaabbaaab"), false, 'Test 151');
test(checkString("aabbaab"), false, 'Test 152');

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
