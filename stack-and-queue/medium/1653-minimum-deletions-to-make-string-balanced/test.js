// Test: 1653. Minimum Deletions To Make String Balanced
// 190 test cases from LeetCodeDataset
// Run: node test.js

const { minimumDeletions } = require("./solution");

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

console.log("\n1653. Minimum Deletions To Make String Balanced\n");

test(minimumDeletions("aaaaaabbbb"), 0, 'Test 1');
test(minimumDeletions("bbbaaaaa"), 3, 'Test 2');
test(minimumDeletions("bbbaaaaabbbb"), 3, 'Test 3');
test(minimumDeletions("aabbaa"), 2, 'Test 4');
test(minimumDeletions("abababab"), 3, 'Test 5');
test(minimumDeletions("aaaaa"), 0, 'Test 6');
test(minimumDeletions("aabbaabb"), 2, 'Test 7');
test(minimumDeletions("aababbaa"), 3, 'Test 8');
test(minimumDeletions("baabbaab"), 3, 'Test 9');
test(minimumDeletions("abababa"), 3, 'Test 10');
test(minimumDeletions("aabbaaab"), 2, 'Test 11');
test(minimumDeletions("aabbbbbaa"), 2, 'Test 12');
test(minimumDeletions("bbaabb"), 2, 'Test 13');
test(minimumDeletions("babababababababab"), 8, 'Test 14');
test(minimumDeletions("bbbbb"), 0, 'Test 15');
test(minimumDeletions("bababab"), 3, 'Test 16');
test(minimumDeletions("aababbab"), 2, 'Test 17');
test(minimumDeletions("ababababa"), 4, 'Test 18');
test(minimumDeletions("baabbaabba"), 4, 'Test 19');
test(minimumDeletions("bbaaaaabb"), 2, 'Test 20');
test(minimumDeletions("bbbbaaaa"), 4, 'Test 21');
test(minimumDeletions("aabbaaabbbaaabbb"), 5, 'Test 22');
test(minimumDeletions("baababababa"), 5, 'Test 23');
test(minimumDeletions("aaaa"), 0, 'Test 24');
test(minimumDeletions("bbbb"), 0, 'Test 25');
test(minimumDeletions("bbaabbaabbaa"), 6, 'Test 26');
test(minimumDeletions("aabbaaabbbaa"), 4, 'Test 27');
test(minimumDeletions("baba"), 2, 'Test 28');
test(minimumDeletions("abbaaabbbbba"), 3, 'Test 29');
test(minimumDeletions("aabbabba"), 2, 'Test 30');
test(minimumDeletions("bbbbbaaaaa"), 5, 'Test 31');
test(minimumDeletions("bbabbaab"), 3, 'Test 32');
test(minimumDeletions("aaabbbba"), 1, 'Test 33');
test(minimumDeletions("aaaaaaaa"), 0, 'Test 34');
test(minimumDeletions("bbbbbbbb"), 0, 'Test 35');
test(minimumDeletions("baabaa"), 2, 'Test 36');
test(minimumDeletions("bbbbbaaaaaabbbbaaaaabbbbbbaaaabbbaaaaabbbb"), 18, 'Test 37');
test(minimumDeletions("aaaaaaaaaabbbaaabbbbaaaaaaaaa"), 7, 'Test 38');
test(minimumDeletions("aaaaaaaaaabbbbbbbbbb"), 0, 'Test 39');
test(minimumDeletions("aaaaabbbbaaaaabbbb"), 4, 'Test 40');
test(minimumDeletions("abababababababababababababababababababababababababababababababababababababababababababababababababababababab"), 53, 'Test 41');
test(minimumDeletions("babababababababa"), 8, 'Test 42');
test(minimumDeletions("abbbbbaaaabbbab"), 5, 'Test 43');
test(minimumDeletions("abbbabbaabbbaabaaabababbbaaabbbaaaabbbabbbaaabbabbaabbaabaabbabbaabbabbaabbbaabb"), 36, 'Test 44');
test(minimumDeletions("abbbbbaaaabbbb"), 4, 'Test 45');
test(minimumDeletions("abababababababa"), 7, 'Test 46');
test(minimumDeletions("bbbbaaaaabbbbbbbba"), 5, 'Test 47');
test(minimumDeletions("aaaaaaaaaabbbabb"), 1, 'Test 48');
test(minimumDeletions("bababababababababab"), 9, 'Test 49');
test(minimumDeletions("ababababaababababa"), 8, 'Test 50');
test(minimumDeletions("baabbabababaabbabababaabbabababaabb"), 16, 'Test 51');
test(minimumDeletions("bbbbbbaaaaaa"), 6, 'Test 52');
test(minimumDeletions("bbbbbbaaaaaabbbb"), 6, 'Test 53');
test(minimumDeletions("aaaabbbaaaaabbbb"), 3, 'Test 54');
test(minimumDeletions("aaaaabbbbbbbbbaaaa"), 4, 'Test 55');
test(minimumDeletions("abbaabbaabbaabbaabbaabba"), 11, 'Test 56');
test(minimumDeletions("baabbaabbaabbaabba"), 8, 'Test 57');
test(minimumDeletions("baaaabbbbaaabbbbaaaaabbbbbaaaaaabbbbbbaaaaabbbbbaaaaaabbbbbbaaaaabbbbbaaaaaabbbbbbaaaaabbbbbaaaaaabbbbbbaaaaabbbbbaaaaaabbbbbbaaaaabb"), 63, 'Test 58');
test(minimumDeletions("baaabbaaabbaabab"), 6, 'Test 59');
test(minimumDeletions("abababababababababababababababababababababababababababababababab"), 31, 'Test 60');
test(minimumDeletions("abbbabbbabbbabbbabbbabbbabbbabbbab"), 8, 'Test 61');
test(minimumDeletions("baaaababababbbabba"), 6, 'Test 62');
test(minimumDeletions("abbbabaaaababbbaaaabbaaababbabaaaabbabaaaaabaa"), 18, 'Test 63');
test(minimumDeletions("bbbbbaaaaabbbbbaaaa"), 9, 'Test 64');
test(minimumDeletions("abababababbababb"), 6, 'Test 65');
test(minimumDeletions("bababababababababababababababababababa"), 19, 'Test 66');
test(minimumDeletions("aaaaaaaaaabbbbbbbbbbbbb"), 0, 'Test 67');
test(minimumDeletions("bbbbabbaaababbaaababbaaababbaaababbaaab"), 18, 'Test 68');
test(minimumDeletions("bbbbbbbbbaaaaaaaaa"), 9, 'Test 69');
test(minimumDeletions("aaaaaaaaaabbbbbbbbbbbbbaaaaaaabbbbaaaaaaa"), 14, 'Test 70');
test(minimumDeletions("aaaaaabbbbbbaaaaaaabbbbbaaaaabbbbb"), 11, 'Test 71');
test(minimumDeletions("aaabbaabbaabbaabbaabbaabbaabbaabbaa"), 16, 'Test 72');
test(minimumDeletions("baaaaaabbbbbbb"), 1, 'Test 73');
test(minimumDeletions("bbbbbaaaabbbbaaabbbbaa"), 9, 'Test 74');
test(minimumDeletions("aabbbbaaaabbbbbb"), 4, 'Test 75');
test(minimumDeletions("aababbabbaababba"), 6, 'Test 76');
test(minimumDeletions("bbaabbabbaabbabbaa"), 8, 'Test 77');
test(minimumDeletions("abababbababababa"), 7, 'Test 78');
test(minimumDeletions("aabbaaababababba"), 6, 'Test 79');
test(minimumDeletions("aabbaabbaabbaabb"), 6, 'Test 80');
test(minimumDeletions("aaaaaabbbbbbaaabbb"), 3, 'Test 81');
test(minimumDeletions("bbbbbaaaaaabbbbbbaaaaaaabbbbbbbaaaaaaaaa"), 18, 'Test 82');
test(minimumDeletions("bbbaaabbaaabbaabbaaabbaaabbaabbaabbaa"), 17, 'Test 83');
test(minimumDeletions("bbaababbabababbababaababababababaababababababaababababababaababababababaababababababaabababaabababa"), 47, 'Test 84');
test(minimumDeletions("bbaaaaabaaaaabaaaaabaaaaabaaaaabaaaa"), 7, 'Test 85');
test(minimumDeletions("aabbaaabbbaaabbbaaabbbaaabbbaaabbbaaabbbaaabbbaaabbbaa"), 25, 'Test 86');
test(minimumDeletions("abbaabbaabbaabba"), 7, 'Test 87');
test(minimumDeletions("bbbbbbbaaaabbbbbbbaa"), 6, 'Test 88');
test(minimumDeletions("aaaaaaaaaabbbbbbbbbaabbbbaaaaaaaaa"), 11, 'Test 89');
test(minimumDeletions("bbabbababbaaab"), 6, 'Test 90');
test(minimumDeletions("bababababa"), 5, 'Test 91');
test(minimumDeletions("ababababababab"), 6, 'Test 92');
test(minimumDeletions("aabbbabbbabbbabbbabba"), 5, 'Test 93');
test(minimumDeletions("abababababab"), 5, 'Test 94');
test(minimumDeletions("ababababababababab"), 8, 'Test 95');
test(minimumDeletions("bbbbbaaaaabbbbb"), 5, 'Test 96');
test(minimumDeletions("aaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaa"), 17, 'Test 97');
test(minimumDeletions("aaaaaaaaaabbbbbb"), 0, 'Test 98');
test(minimumDeletions("baaaaaaaaaaaaaaaaaab"), 1, 'Test 99');
test(minimumDeletions("bbbbaaaabaaaab"), 5, 'Test 100');
test(minimumDeletions("baaaaaabbbbb"), 1, 'Test 101');
test(minimumDeletions("bbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaa"), 21, 'Test 102');
test(minimumDeletions("bbbbbbbbbaaaaaa"), 6, 'Test 103');
test(minimumDeletions("aaaaaaaaabbbbbbbbbbbaa"), 2, 'Test 104');
test(minimumDeletions("bbbbbaaaaabbaaab"), 7, 'Test 105');
test(minimumDeletions("abbaababbaababbaababbaababbaababbaabab"), 18, 'Test 106');
test(minimumDeletions("aaaaaabbbbbbaaaaaabbbbbbaaaaaabbbbbb"), 12, 'Test 107');
test(minimumDeletions("bbbbaaaabbbbba"), 5, 'Test 108');
test(minimumDeletions("bbbbbbbbbaaaabbb"), 4, 'Test 109');
test(minimumDeletions("baababababaabbaa"), 7, 'Test 110');
test(minimumDeletions("aaaaaaaaaabbbbba"), 1, 'Test 111');
test(minimumDeletions("aabbaaabbaaabbaaabbaaabbaaabbaaabbaaabbb"), 14, 'Test 112');
test(minimumDeletions("abababababababababab"), 9, 'Test 113');
test(minimumDeletions("aaaaabbbbaaaaabbbbbaaa"), 7, 'Test 114');
test(minimumDeletions("aaaaaaaaaabbbaaaaaaaaa"), 3, 'Test 115');
test(minimumDeletions("aababababababababa"), 8, 'Test 116');
test(minimumDeletions("bababababababa"), 7, 'Test 117');
test(minimumDeletions("babbaabbbaabbaabbbaabbaabbbaabbaabba"), 16, 'Test 118');
test(minimumDeletions("aaabbaabbaabbbbb"), 4, 'Test 119');
test(minimumDeletions("aabbaaabbbabbaaabb"), 6, 'Test 120');
test(minimumDeletions("bbbbbbbbbaaaaaaaaaaa"), 9, 'Test 121');
test(minimumDeletions("aaabbbbaaaaabba"), 5, 'Test 122');
test(minimumDeletions("baaaaaabbaaabbbaaa"), 6, 'Test 123');
test(minimumDeletions("bbbaaaaabbbaaaa"), 6, 'Test 124');
test(minimumDeletions("aaaaaaaaaabbbbbbbbbbb"), 0, 'Test 125');
test(minimumDeletions("aabbaabbbaaabb"), 5, 'Test 126');
test(minimumDeletions("babababababababababa"), 10, 'Test 127');
test(minimumDeletions("bababababababababababababababab"), 15, 'Test 128');
test(minimumDeletions("baaababbababab"), 5, 'Test 129');
test(minimumDeletions("baabababababababababab"), 10, 'Test 130');
test(minimumDeletions("bbbbbbbbbaaaaaaaaaa"), 9, 'Test 131');
test(minimumDeletions("bbbbbbbbbaaaaa"), 5, 'Test 132');
test(minimumDeletions("bbbbbbbbbbbbbaaaaaaaaa"), 9, 'Test 133');
test(minimumDeletions("baaaaaabbbbbbbaaaaaaaaaabbbbbbbaaaaaaaaaaabbbbbbbaaaaaaaaaaabbbbbbbaaaaaaaaaa"), 29, 'Test 134');
test(minimumDeletions("baaaaaabbbbbbbbba"), 2, 'Test 135');
test(minimumDeletions("abbaabbaabbaabbaab"), 8, 'Test 136');
test(minimumDeletions("babbabbabbabbabbabba"), 7, 'Test 137');
test(minimumDeletions("aababababababababababababababababababababababa"), 22, 'Test 138');
test(minimumDeletions("bbbbbaaaaabbbb"), 5, 'Test 139');
test(minimumDeletions("baabababaabababa"), 7, 'Test 140');
test(minimumDeletions("aaaaabbbbbabbbbb"), 1, 'Test 141');
test(minimumDeletions("babababababababaab"), 8, 'Test 142');
test(minimumDeletions("bbbbbbbbbaaaaaaabbbbbbbbbaaaaaaa"), 14, 'Test 143');
test(minimumDeletions("aaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"), 0, 'Test 144');
test(minimumDeletions("bbbbaaaaabbaaabb"), 6, 'Test 145');
test(minimumDeletions("aaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaa"), 36, 'Test 146');
test(minimumDeletions("bbbbbbaaabaaabbaab"), 8, 'Test 147');
test(minimumDeletions("aabbaabbbaabba"), 5, 'Test 148');
test(minimumDeletions("abbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabb"), 46, 'Test 149');
test(minimumDeletions("abbaabbaabba"), 5, 'Test 150');
test(minimumDeletions("baaabbbbaaabbbbaaabbbbaaabbbbaaabbb"), 13, 'Test 151');
test(minimumDeletions("aaaaaaaaaabbbbbbaa"), 2, 'Test 152');
test(minimumDeletions("aabbaaabbaabbaa"), 6, 'Test 153');
test(minimumDeletions("ababbababbabab"), 5, 'Test 154');
test(minimumDeletions("bbbbbaaabbaabb"), 5, 'Test 155');
test(minimumDeletions("abababababababababa"), 9, 'Test 156');
test(minimumDeletions("babbbbbaaabbbbaabb"), 6, 'Test 157');
test(minimumDeletions("bbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaa"), 20, 'Test 158');
test(minimumDeletions("abbbbaaababaaaabbaaabaaabbaaaabbbaaabbaaaabbaaabbaaabbbbaaaaa"), 24, 'Test 159');
test(minimumDeletions("bbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbaaaaaaaaa"), 26, 'Test 160');
test(minimumDeletions("bbaaabbaaabbaaabbaaabbaaabbaaabbaaab"), 14, 'Test 161');
test(minimumDeletions("aaabbbaaababba"), 5, 'Test 162');
test(minimumDeletions("ababababab"), 4, 'Test 163');
test(minimumDeletions("aaaaabbbbaaaabbbba"), 5, 'Test 164');
test(minimumDeletions("bbbbaaaaabbaaaab"), 6, 'Test 165');
test(minimumDeletions("aabbaaabbaaabbaaabbaa"), 8, 'Test 166');
test(minimumDeletions("bbbbbbaaabbbbaaaa"), 7, 'Test 167');
test(minimumDeletions("bbbbbaaaaaaaaaaa"), 5, 'Test 168');
test(minimumDeletions("baabaaabbaabaaabbaabaa"), 8, 'Test 169');
test(minimumDeletions("aabbbbbbaabbaaaabb"), 6, 'Test 170');
test(minimumDeletions("aababbbaaababbab"), 6, 'Test 171');
test(minimumDeletions("bbbbabbbbbaaaaa"), 6, 'Test 172');
test(minimumDeletions("bbaaaaaaaaaabbbbaaaabbbba"), 7, 'Test 173');
test(minimumDeletions("aabbaabbabbaabbabbbaaabbaa"), 11, 'Test 174');
test(minimumDeletions("aaaaaaaaaabbbaaa"), 3, 'Test 175');
test(minimumDeletions("aaaaaaaaaabbbaaaabbbbbaaabbbbaaabbbbbaaa"), 12, 'Test 176');
test(minimumDeletions("babababaabab"), 5, 'Test 177');
test(minimumDeletions("bbbbbbbbbaaaaabbbb"), 5, 'Test 178');
test(minimumDeletions("aabbaaabbbaaabbbaaabbbaaabbaa"), 13, 'Test 179');
test(minimumDeletions("aaaabababababbbbba"), 5, 'Test 180');
test(minimumDeletions("aaabbaaabbaaabba"), 5, 'Test 181');
test(minimumDeletions("bbbbbbaaaaaabbbbaaa"), 9, 'Test 182');
test(minimumDeletions("bbbbbbbbaaaaabaaaaabbaaaabbaaaabbbaaaabbbbbbb"), 16, 'Test 183');
test(minimumDeletions("baaaaabbbbaaaaabba"), 6, 'Test 184');
test(minimumDeletions("abababaabababaab"), 6, 'Test 185');
test(minimumDeletions("bbbaaabbaaabbaab"), 7, 'Test 186');
test(minimumDeletions("aaaabaaaabaaaa"), 2, 'Test 187');
test(minimumDeletions("ababababababababababababababababababab"), 18, 'Test 188');
test(minimumDeletions("bbabbbbaaabbbbaaab"), 7, 'Test 189');
test(minimumDeletions("abbaabbaabbbaabb"), 6, 'Test 190');

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
