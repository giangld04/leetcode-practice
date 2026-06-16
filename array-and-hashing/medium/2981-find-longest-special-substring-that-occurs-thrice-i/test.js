// Test: 2981. Find Longest Special Substring That Occurs Thrice I
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { maximumLength } = require("./solution");

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

console.log("\n2981. Find Longest Special Substring That Occurs Thrice I\n");

test(maximumLength("zzzzzzzzz"), 7, 'Test 1');
test(maximumLength("abcabcabc"), 1, 'Test 2');
test(maximumLength("aaabbbccc"), 1, 'Test 3');
test(maximumLength("aabbcc"), -1, 'Test 4');
test(maximumLength("aaaabbbbcccc"), 2, 'Test 5');
test(maximumLength("abcabcabcabc"), 1, 'Test 6');
test(maximumLength("aaaaaa"), 4, 'Test 7');
test(maximumLength("ababab"), 1, 'Test 8');
test(maximumLength("zzzzzz"), 4, 'Test 9');
test(maximumLength("abcaba"), 1, 'Test 10');
test(maximumLength("zzzzyzzzz"), 3, 'Test 11');
test(maximumLength("abcdef"), -1, 'Test 12');
test(maximumLength("aabbaabbaa"), 2, 'Test 13');
test(maximumLength("abcabc"), -1, 'Test 14');
test(maximumLength("aaaabb"), 2, 'Test 15');
test(maximumLength("aaabbb"), 1, 'Test 16');
test(maximumLength("aaaa"), 2, 'Test 17');
test(maximumLength("aaaabaaa"), 3, 'Test 18');
test(maximumLength("mnopmnopmnopmnop"), 1, 'Test 19');
test(maximumLength("aaaaaaaabbaaaaaaabbaaaaaaa"), 7, 'Test 20');
test(maximumLength("aaabbbcccdddaaaabbbcccddd"), 3, 'Test 21');
test(maximumLength("aabbaaabaabb"), 2, 'Test 22');
test(maximumLength("abcdefabcdefabcdef"), 1, 'Test 23');
test(maximumLength("abacabadabacabadabacabadabacabad"), 1, 'Test 24');
test(maximumLength("aabbccddeeefffgggaaaabbbcccddd"), 2, 'Test 25');
test(maximumLength("zzzzzzzzzzzzzzz"), 13, 'Test 26');
test(maximumLength("aabbbcccaabbcccaa"), 2, 'Test 27');
test(maximumLength("aaaaaaaabbaaaaaaa"), 7, 'Test 28');
test(maximumLength("hhhhhhhhhhhhhhhhhiiiiiiiihhhhiiiiiii"), 15, 'Test 29');
test(maximumLength("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 30, 'Test 30');
test(maximumLength("abcddcbaabcddcba"), 1, 'Test 31');
test(maximumLength("cccccccccccccccccccc"), 18, 'Test 32');
test(maximumLength("ccccaaaabbbccc"), 3, 'Test 33');
test(maximumLength("aaabbbcccddd"), 1, 'Test 34');
test(maximumLength("abacabadabacab"), 1, 'Test 35');
test(maximumLength("zzzzyyyyxxxwwvvuuttrrssqqppoonnmmllkkjjiihhggffeeddccbbaaa"), 2, 'Test 36');
test(maximumLength("aabbaabbaabbaabb"), 2, 'Test 37');
test(maximumLength("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"), 44, 'Test 38');
test(maximumLength("aaabbbaaabbbaaabb"), 3, 'Test 39');
test(maximumLength("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 1, 'Test 40');
test(maximumLength("xxyyxxyyxxyy"), 2, 'Test 41');
test(maximumLength("ababababababababababababababab"), 1, 'Test 42');
test(maximumLength("zzzzzzyzzzzz"), 5, 'Test 43');
test(maximumLength("zzzzzzzzzzzz"), 10, 'Test 44');
test(maximumLength("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"), 44, 'Test 45');
test(maximumLength("abababababab"), 1, 'Test 46');
test(maximumLength("abcabcabcabcabcabc"), 1, 'Test 47');
test(maximumLength("xyzxyzzxyzyzyx"), 1, 'Test 48');
test(maximumLength("aabbbcccbbbccccccbbbaabbcc"), 4, 'Test 49');
test(maximumLength("aaaaaabaaaaabaaaaa"), 5, 'Test 50');
test(maximumLength("mnopqrstuvwxyzaaa"), 1, 'Test 51');
test(maximumLength("abcdabcdabcdabcd"), 1, 'Test 52');
test(maximumLength("aaaaaaa"), 5, 'Test 53');
test(maximumLength("ppppqqppqqqqqqpp"), 4, 'Test 54');
test(maximumLength("abcdabcdabcdabcdabcd"), 1, 'Test 55');
test(maximumLength("abababababababababab"), 1, 'Test 56');
test(maximumLength("abababab"), 1, 'Test 57');
test(maximumLength("nnnmmmnnnmmmnnnmmmm"), 3, 'Test 58');
test(maximumLength("aaaaaaaabbbbbbbbbb"), 8, 'Test 59');
test(maximumLength("abacabadabacaba"), 1, 'Test 60');
test(maximumLength("aabbaaabbbaaaabbb"), 3, 'Test 61');
test(maximumLength("aabbccddeeefffggg"), 1, 'Test 62');
test(maximumLength("aaaaaabbbcccaabb"), 4, 'Test 63');
test(maximumLength("aaaabbbbccccddddeeeeffff"), 2, 'Test 64');
test(maximumLength("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv"), 58, 'Test 65');
test(maximumLength("aaabbbcccaaaabbb"), 3, 'Test 66');
test(maximumLength("xyxyxyxyxyxyxyx"), 1, 'Test 67');
test(maximumLength("zzzzzzzzzzzzz"), 11, 'Test 68');
test(maximumLength("aaabbbaaabbbbaaabbbbaaabbb"), 3, 'Test 69');
test(maximumLength("tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt"), 74, 'Test 70');
test(maximumLength("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"), 48, 'Test 71');
test(maximumLength("aaaaabbbaaaaaaaaabbbaaaa"), 7, 'Test 72');
test(maximumLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), -1, 'Test 73');
test(maximumLength("pppppqqqqqrrrrrppqqrr"), 3, 'Test 74');
test(maximumLength("aaabbaaabbaa"), 2, 'Test 75');
test(maximumLength("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"), 62, 'Test 76');
test(maximumLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzz"), 8, 'Test 77');
test(maximumLength("kkkkkllllllmmmmm"), 4, 'Test 78');
test(maximumLength("lkllkkkklllllllllllkkk"), 9, 'Test 79');
test(maximumLength("ppppqpppqqqpppp"), 3, 'Test 80');
test(maximumLength("aaabbbcccdddcccbbbcccbbbcccaaacccaaa"), 3, 'Test 81');
test(maximumLength("aaabbbcccdddeeefffgggaaaabbbcccddd"), 3, 'Test 82');
test(maximumLength("abcddcba"), -1, 'Test 83');
test(maximumLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyz"), -1, 'Test 84');
test(maximumLength("cccccbbbbbbaaaaa"), 4, 'Test 85');
test(maximumLength("mmmmmnnnnooooo"), 3, 'Test 86');
test(maximumLength("abcabcabcabcabcab"), 1, 'Test 87');
test(maximumLength("tttttttttttttttttttttttttt"), 24, 'Test 88');
test(maximumLength("aaaaaaaabaaaaaa"), 6, 'Test 89');
test(maximumLength("aaaaabbbbcccc"), 3, 'Test 90');
test(maximumLength("xzyxzyxzyxzyxzyxzy"), 1, 'Test 91');
test(maximumLength("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"), 46, 'Test 92');
test(maximumLength("abcabcabcabcabc"), 1, 'Test 93');
test(maximumLength("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"), 52, 'Test 94');
test(maximumLength("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 48, 'Test 95');

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
