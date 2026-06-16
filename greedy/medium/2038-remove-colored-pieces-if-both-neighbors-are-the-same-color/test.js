// Test: 2038. Remove Colored Pieces If Both Neighbors Are The Same Color
// 182 test cases from LeetCodeDataset
// Run: node test.js

const { winnerOfGame } = require("./solution");

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

console.log("\n2038. Remove Colored Pieces If Both Neighbors Are The Same Color\n");

test(winnerOfGame("AABBAABB"), false, 'Test 1');
test(winnerOfGame("AAAAAAAAA"), true, 'Test 2');
test(winnerOfGame("AAABAAAAABBBB"), true, 'Test 3');
test(winnerOfGame("ABABABABAB"), false, 'Test 4');
test(winnerOfGame("AABBBBAAA"), false, 'Test 5');
test(winnerOfGame("BBBBB"), false, 'Test 6');
test(winnerOfGame("BBBAAAABB"), true, 'Test 7');
test(winnerOfGame("AAAAAAAA"), true, 'Test 8');
test(winnerOfGame("AAAAA"), true, 'Test 9');
test(winnerOfGame("AAABBBAAABBBA"), false, 'Test 10');
test(winnerOfGame("AAABABB"), true, 'Test 11');
test(winnerOfGame("AABBBBAA"), false, 'Test 12');
test(winnerOfGame("AAAABBBB"), false, 'Test 13');
test(winnerOfGame("BBBBBBBBB"), false, 'Test 14');
test(winnerOfGame("ABBBBBBBAAA"), false, 'Test 15');
test(winnerOfGame("ABABABABABA"), false, 'Test 16');
test(winnerOfGame("ABABABAB"), false, 'Test 17');
test(winnerOfGame("AAAAABBAAA"), true, 'Test 18');
test(winnerOfGame("AABAABBBBAAA"), false, 'Test 19');
test(winnerOfGame("ABABAB"), false, 'Test 20');
test(winnerOfGame("BBBAAABB"), false, 'Test 21');
test(winnerOfGame("ABAAABAA"), true, 'Test 22');
test(winnerOfGame("AA"), false, 'Test 23');
test(winnerOfGame("BBBBAAAABBB"), false, 'Test 24');
test(winnerOfGame("AAAABBBAA"), true, 'Test 25');
test(winnerOfGame("AABBBAAABBB"), false, 'Test 26');
test(winnerOfGame("ABABABABABABAB"), false, 'Test 27');
test(winnerOfGame("AAABBBAAABBBAABBBAAABBBAABBB"), false, 'Test 28');
test(winnerOfGame("AABBABBABBABBABBABBA"), false, 'Test 29');
test(winnerOfGame("ABAABAABAABAABAABA"), false, 'Test 30');
test(winnerOfGame("BBBBBBBBBBAAAABBB"), false, 'Test 31');
test(winnerOfGame("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"), false, 'Test 32');
test(winnerOfGame("AAABAAAABBAAABBBBAAAABBB"), true, 'Test 33');
test(winnerOfGame("AABAABAABAABAABAA"), false, 'Test 34');
test(winnerOfGame("AABBBAAABBBAABBAAABBBAABB"), false, 'Test 35');
test(winnerOfGame("BBBBBBBBBBABBBBBBBBB"), false, 'Test 36');
test(winnerOfGame("ABABABABABABABABABABAB"), false, 'Test 37');
test(winnerOfGame("ABABABABABABABABABABABABABABABABABAB"), false, 'Test 38');
test(winnerOfGame("AAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBB"), false, 'Test 39');
test(winnerOfGame("AABBBAAABBBAAABBB"), false, 'Test 40');
test(winnerOfGame("AABBAABBBAABBBAABBBAABBA"), false, 'Test 41');
test(winnerOfGame("ABABABABABABABABABABABABABABABABABABABABAB"), false, 'Test 42');
test(winnerOfGame("AAABAAAAAAAAABBBBBBB"), true, 'Test 43');
test(winnerOfGame("AAAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBB"), true, 'Test 44');
test(winnerOfGame("ABABABABABABABABA"), false, 'Test 45');
test(winnerOfGame("BBBBBBBBBBAAAAAAAAAAB"), false, 'Test 46');
test(winnerOfGame("BBBAAAABBBAAAABBBAAAABBBAAAABBBAAAABBB"), true, 'Test 47');
test(winnerOfGame("BBABBABBABBABBABB"), false, 'Test 48');
test(winnerOfGame("BAAAAAAAAAABBBBBBBBBB"), false, 'Test 49');
test(winnerOfGame("AAABAAABBBAAABBBBAA"), false, 'Test 50');
test(winnerOfGame("AABBBAAAABBBAAB"), false, 'Test 51');
test(winnerOfGame("AABBAAAABBAAAABB"), true, 'Test 52');
test(winnerOfGame("BBBAABBBAAABBBAABBB"), false, 'Test 53');
test(winnerOfGame("AAAABBBAAABBBAAABBBAAABBBAAABBBAAABBBAAABBB"), true, 'Test 54');
test(winnerOfGame("AAAAAAAAAABBBBBBBBBBB"), false, 'Test 55');
test(winnerOfGame("AAAABBBBBBAAAABBBBBB"), false, 'Test 56');
test(winnerOfGame("AAAAAABAAAAAABAAAAAAB"), true, 'Test 57');
test(winnerOfGame("BBBAAAAAAAAABBBBBB"), true, 'Test 58');
test(winnerOfGame("BBABABABABABABABABAB"), false, 'Test 59');
test(winnerOfGame("AAABBBAAABBBAAABBBAAABBBAAABBBAAABBB"), false, 'Test 60');
test(winnerOfGame("AAAAAAAAAAAAAAAAAAAAAAAAA"), true, 'Test 61');
test(winnerOfGame("AAAAAAAABBBBBBBBBB"), false, 'Test 62');
test(winnerOfGame("ABBBAAAAABBAAAAAAA"), true, 'Test 63');
test(winnerOfGame("BBBAAAABBAAAABBAAAABBAAAABBAAAABB"), true, 'Test 64');
test(winnerOfGame("AAAABAAAABBAAAABBAAAABBAAAABBAAAAB"), true, 'Test 65');
test(winnerOfGame("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"), true, 'Test 66');
test(winnerOfGame("AAAAAAAAAAAAAABBBBBBBBBBBB"), true, 'Test 67');
test(winnerOfGame("AAAAAAAAAAAAAAAAA"), true, 'Test 68');
test(winnerOfGame("AABBBAAAAABBBBAAA"), true, 'Test 69');
test(winnerOfGame("AAAAAAAAAABBBBBBBBBB"), false, 'Test 70');
test(winnerOfGame("AAABBBAAAABBBAAABBBAAABBBAA"), true, 'Test 71');
test(winnerOfGame("AAABAAAABAAABAAAABAA"), true, 'Test 72');
test(winnerOfGame("AAAAAAAAAAAAAAAAAA"), true, 'Test 73');
test(winnerOfGame("AAAAAAAAABBBBBBBBAABBBBBBBBA"), false, 'Test 74');
test(winnerOfGame("BBBAAAABBBAAAABBB"), true, 'Test 75');
test(winnerOfGame("ABABABAAAABBBABAABAB"), true, 'Test 76');
test(winnerOfGame("ABBBAAAABBAAAABBBA"), true, 'Test 77');
test(winnerOfGame("AAABBBAABBBAAABBBA"), false, 'Test 78');
test(winnerOfGame("AAABBBAABBBAABBBAAB"), false, 'Test 79');
test(winnerOfGame("AAABBBAAAABBBAAABBBAA"), true, 'Test 80');
test(winnerOfGame("ABABABABABABABABABABABABABABABAB"), false, 'Test 81');
test(winnerOfGame("BBBAAAABBBAAAABAA"), true, 'Test 82');
test(winnerOfGame("AAABBBAAAABBBAAAABBBAAA"), true, 'Test 83');
test(winnerOfGame("BBBBBAABAAAAAAABBB"), true, 'Test 84');
test(winnerOfGame("AAABBAAAABBAAAABBAAAABBBAAAABB"), true, 'Test 85');
test(winnerOfGame("BBBBBAAAAAAAAABBBBB"), true, 'Test 86');
test(winnerOfGame("AAAAAAAAABBBBBBBBBBBB"), false, 'Test 87');
test(winnerOfGame("BABAABABABABABABAB"), false, 'Test 88');
test(winnerOfGame("AAABBBBAABBBBAA"), false, 'Test 89');
test(winnerOfGame("BBAAABBBAAABBBAAABB"), true, 'Test 90');
test(winnerOfGame("AAABAAABAAABAAABA"), true, 'Test 91');
test(winnerOfGame("AAABBBAAABBBAAABBBAAABBBAAABBB"), false, 'Test 92');
test(winnerOfGame("BBBBBBBBBB"), false, 'Test 93');
test(winnerOfGame("BBAAAABBBAAABBBAAABB"), true, 'Test 94');
test(winnerOfGame("AAAAAAAAAABBBBBBBB"), true, 'Test 95');
test(winnerOfGame("BBBBBAAAABBBBBBBAAAAA"), false, 'Test 96');
test(winnerOfGame("BBBBBAAAABBBBBAAAABBBBBAAAABBBBB"), false, 'Test 97');
test(winnerOfGame("AAAAABBBBBAAAAABBBBBAAAAA"), true, 'Test 98');
test(winnerOfGame("ABBBAAAABBAAAABBBAABA"), true, 'Test 99');
test(winnerOfGame("AAAABBBBAAAABBBBAAAABBBB"), false, 'Test 100');
test(winnerOfGame("BBBBAAAABBBBBBBBAAA"), false, 'Test 101');
test(winnerOfGame("ABABABABABABABABABABABABABABABABAB"), false, 'Test 102');
test(winnerOfGame("BBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBB"), true, 'Test 103');
test(winnerOfGame("BBBBBBAAAABBBBBBBBAAA"), false, 'Test 104');
test(winnerOfGame("AABAAAAAAABBBBBBBBA"), false, 'Test 105');
test(winnerOfGame("BBBAABBBAAAABBBAAABBB"), false, 'Test 106');
test(winnerOfGame("ABABABABAAAAAAAABBBBBBBB"), false, 'Test 107');
test(winnerOfGame("BBAAAABBBAAAABBAAA"), true, 'Test 108');
test(winnerOfGame("BBAABBAAAABBAAAABBBB"), true, 'Test 109');
test(winnerOfGame("AAABBBAABBAAABBBAAAAAAABBBB"), true, 'Test 110');
test(winnerOfGame("AAAAABBAAAABBAAAAB"), true, 'Test 111');
test(winnerOfGame("ABBBAAAABBBBAAA"), false, 'Test 112');
test(winnerOfGame("BBBBBBBBBBBBBBBBB"), false, 'Test 113');
test(winnerOfGame("BBBBBBAAAAAAAAAA"), true, 'Test 114');
test(winnerOfGame("BBAAAABBBAAAABBBAAAABBB"), true, 'Test 115');
test(winnerOfGame("ABBBAAAABBBAAAABB"), true, 'Test 116');
test(winnerOfGame("BBBBBAABBBBAABBBBAABBBBA"), false, 'Test 117');
test(winnerOfGame("BBBBBBBBBBBBBBBBBBBBBBBBB"), false, 'Test 118');
test(winnerOfGame("BBBBBBBAAAAAAAAAAAABB"), true, 'Test 119');
test(winnerOfGame("AAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBB"), false, 'Test 120');
test(winnerOfGame("ABABABABABABABABABABABABABABABABABABABAB"), false, 'Test 121');
test(winnerOfGame("BBBBAAAABBBBBAAAABBBBBAAAABB"), false, 'Test 122');
test(winnerOfGame("AABAAABAABAAABAAA"), true, 'Test 123');
test(winnerOfGame("ABABABABABABABABAB"), false, 'Test 124');
test(winnerOfGame("BBBAAAABBAAAABBAAAABBB"), true, 'Test 125');
test(winnerOfGame("AAAAAAAAAAAAAAAAABBBBBBBBBBBAAAAAAAAAAAAAAAAABBBBBBBBBBB"), true, 'Test 126');
test(winnerOfGame("AABBBAAABBAAAABBAAAAB"), true, 'Test 127');
test(winnerOfGame("AAABAAABAAABAAABAAABAAAB"), true, 'Test 128');
test(winnerOfGame("ABABABABABABABABABABABABABAB"), false, 'Test 129');
test(winnerOfGame("AAAAAABBBBBBAAA"), true, 'Test 130');
test(winnerOfGame("BBBAAAABBBAAAABBBAAAABBB"), true, 'Test 131');
test(winnerOfGame("ABABABABABABABABABABA"), false, 'Test 132');
test(winnerOfGame("AAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBB"), false, 'Test 133');
test(winnerOfGame("AAAABBAABBABBAABBBAAA"), true, 'Test 134');
test(winnerOfGame("ABAAAABBBBAABBBBAA"), false, 'Test 135');
test(winnerOfGame("AAABAAAABBBBAAAABBBBAAAABBBBAAAABBB"), true, 'Test 136');
test(winnerOfGame("AAAAAAAAAAAAABBBBBBBBBBBBB"), false, 'Test 137');
test(winnerOfGame("AAAAAAAAAAAAAAAABBBBBBBBBBBBBBBB"), false, 'Test 138');
test(winnerOfGame("BABAABBAABBBBAAAABBBB"), false, 'Test 139');
test(winnerOfGame("AABBAABBAABBAAA"), true, 'Test 140');
test(winnerOfGame("AAAAAAAAABBBBBBBB"), true, 'Test 141');
test(winnerOfGame("BBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAA"), true, 'Test 142');
test(winnerOfGame("BBAABBAAAABBBBAAAAABBBAAABBBAAABBBB"), true, 'Test 143');
test(winnerOfGame("AAAAAAAAABBAAAAAAAAA"), true, 'Test 144');
test(winnerOfGame("AAAABBBAAAABBB"), true, 'Test 145');
test(winnerOfGame("AABBAAAABBBAAAABBB"), true, 'Test 146');
test(winnerOfGame("AAAAAAAABBBBBBBBBBAAA"), false, 'Test 147');
test(winnerOfGame("AAAABBBAAAABBBAAAABBB"), true, 'Test 148');
test(winnerOfGame("AAAAAAAAABBBBBBB"), true, 'Test 149');
test(winnerOfGame("BBAAAABBAAAABBAAAABBAAAABBB"), true, 'Test 150');
test(winnerOfGame("AABBBAAAABBBAAA"), true, 'Test 151');
test(winnerOfGame("BBBBBBBBAAAABBBBBBB"), false, 'Test 152');
test(winnerOfGame("BBBBBAAAABBBBBAAAABBBBBAAAABBBBBAAAABBBBBAAAABBBBB"), false, 'Test 153');
test(winnerOfGame("BBABABABBABABABBABABABBB"), false, 'Test 154');
test(winnerOfGame("BBAABBAAAABBAAAABBAAAABBB"), true, 'Test 155');
test(winnerOfGame("BBBAAAABBAAAABBB"), true, 'Test 156');
test(winnerOfGame("BBBBBBBBBBBBBBBBBB"), false, 'Test 157');
test(winnerOfGame("AAAABBBBAAAA"), true, 'Test 158');
test(winnerOfGame("BBBBAABBBAABBBAAB"), false, 'Test 159');
test(winnerOfGame("AAAAAAAAAA"), true, 'Test 160');
test(winnerOfGame("BBBBBBAAAABBBBBBAAAABBBBBB"), false, 'Test 161');
test(winnerOfGame("BAAABAAABAAABBB"), true, 'Test 162');
test(winnerOfGame("AAABBBAAAABBBAAAABBB"), true, 'Test 163');
test(winnerOfGame("AAAAAABBBBAAAABBBBAAAAA"), true, 'Test 164');
test(winnerOfGame("BBBAAAAAAAABBBBBB"), true, 'Test 165');
test(winnerOfGame("AAABBBAABBBAAABBBAABBB"), false, 'Test 166');
test(winnerOfGame("BABABABABABABABAB"), false, 'Test 167');
test(winnerOfGame("AABAAAAABBAAABAAAAABB"), true, 'Test 168');
test(winnerOfGame("BBBBBAAAABBBBBAAAABBBBBAAAABBBBBAAAABBBBB"), false, 'Test 169');
test(winnerOfGame("BBBAAABBBAAABBBAAA"), false, 'Test 170');
test(winnerOfGame("AAABAAAAAAAABBBBBBB"), true, 'Test 171');
test(winnerOfGame("BBBBBBBBAAAAAAAAAA"), true, 'Test 172');
test(winnerOfGame("ABABABABABABABABABAB"), false, 'Test 173');
test(winnerOfGame("ABBBBAAAAAABBBBBAAA"), false, 'Test 174');
test(winnerOfGame("AAABAAABBBABBAAA"), true, 'Test 175');
test(winnerOfGame("AABBBAAAAAAAAABBBBB"), true, 'Test 176');
test(winnerOfGame("BBAAAABBBAAAABBBAAAABBBAAA"), true, 'Test 177');
test(winnerOfGame("BBBBBBBAAAAAAAAAA"), true, 'Test 178');
test(winnerOfGame("AABBBAAAABBBAAAABBB"), true, 'Test 179');
test(winnerOfGame("AAAAAAAAAABBBBBBBBAAAAAAAAAABBBBBBBB"), true, 'Test 180');
test(winnerOfGame("AABAAABAAABAAABAAABAAABAAABAAABAAAB"), true, 'Test 181');
test(winnerOfGame("BBBBBAAAABBBBBAAAAABBBBBAAABBBAAAB"), false, 'Test 182');

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
