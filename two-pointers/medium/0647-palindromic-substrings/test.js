// Test: 647. Palindromic Substrings
// 140 test cases from LeetCodeDataset
// Run: node test.js

const { countSubstrings } = require("./solution");

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

console.log("\n647. Palindromic Substrings\n");

test(countSubstrings("abba"), 6, 'Test 1');
test(countSubstrings("aaaaa"), 15, 'Test 2');
test(countSubstrings("babad"), 7, 'Test 3');
test(countSubstrings("noon"), 6, 'Test 4');
test(countSubstrings("banana"), 10, 'Test 5');
test(countSubstrings("aabbbaa"), 14, 'Test 6');
test(countSubstrings("abc"), 3, 'Test 7');
test(countSubstrings("level"), 7, 'Test 8');
test(countSubstrings(""), 0, 'Test 9');
test(countSubstrings("aaa"), 6, 'Test 10');
test(countSubstrings("civic"), 7, 'Test 11');
test(countSubstrings("rotor"), 7, 'Test 12');
test(countSubstrings("racecar"), 10, 'Test 13');
test(countSubstrings("a"), 1, 'Test 14');
test(countSubstrings("abcdefg"), 7, 'Test 15');
test(countSubstrings("zxcvbnmmlkjhgfdsapoiuytrewq"), 28, 'Test 16');
test(countSubstrings("abcbaabccbaabcba"), 34, 'Test 17');
test(countSubstrings("amoreinimorac"), 14, 'Test 18');
test(countSubstrings("atoyota"), 10, 'Test 19');
test(countSubstrings("aabbcccbbbaa"), 23, 'Test 20');
test(countSubstrings("abccbaabcbaabc"), 28, 'Test 21');
test(countSubstrings("rotorrotor"), 19, 'Test 22');
test(countSubstrings("abracadabra"), 13, 'Test 23');
test(countSubstrings("levelmadam"), 14, 'Test 24');
test(countSubstrings("ab"), 2, 'Test 25');
test(countSubstrings("steponnopets"), 18, 'Test 26');
test(countSubstrings("noonnoon"), 16, 'Test 27');
test(countSubstrings("aaaaabbbb"), 25, 'Test 28');
test(countSubstrings("aaaaaaaaaa"), 55, 'Test 29');
test(countSubstrings("abcddcbaabcddcba"), 32, 'Test 30');
test(countSubstrings("racecarracecarracecarracecar"), 82, 'Test 31');
test(countSubstrings("madaminnadammadam"), 27, 'Test 32');
test(countSubstrings("xyxzyzyzyxzyzyxzyzyxzyx"), 34, 'Test 33');
test(countSubstrings("noonabnoon"), 14, 'Test 34');
test(countSubstrings("bbaabbccddeebbaabbccddee"), 40, 'Test 35');
test(countSubstrings("qwertyuiopoiuytrewq"), 28, 'Test 36');
test(countSubstrings("abccbaabccba"), 24, 'Test 37');
test(countSubstrings("aba"), 4, 'Test 38');
test(countSubstrings("xyzyzyzyzyzyzyzy"), 65, 'Test 39');
test(countSubstrings("abacbacbacbacba"), 16, 'Test 40');
test(countSubstrings("noonnoonnoonnoon"), 48, 'Test 41');
test(countSubstrings("aabbccddeee"), 18, 'Test 42');
test(countSubstrings("abacaba"), 12, 'Test 43');
test(countSubstrings("madamracecar"), 17, 'Test 44');
test(countSubstrings("rotorcarrot"), 14, 'Test 45');
test(countSubstrings("abca"), 4, 'Test 46');
test(countSubstrings("aabbcccbbbbaaa"), 30, 'Test 47');
test(countSubstrings("aabbccddeeeeeddccbbaa"), 47, 'Test 48');
test(countSubstrings("aaaaaabbbb"), 31, 'Test 49');
test(countSubstrings("aabbabaabbaa"), 23, 'Test 50');
test(countSubstrings("abcba"), 7, 'Test 51');
test(countSubstrings("abcdcba"), 10, 'Test 52');
test(countSubstrings("xyzzyxzyxzyzyxzyz"), 23, 'Test 53');
test(countSubstrings("madaminnakayak"), 20, 'Test 54');
test(countSubstrings("abccbaabccbaabccba"), 45, 'Test 55');
test(countSubstrings("aabbccccbbaa"), 26, 'Test 56');
test(countSubstrings("rotorcentralrotor"), 21, 'Test 57');
test(countSubstrings("racecarracecarracecar"), 51, 'Test 58');
test(countSubstrings("aabbbaaabbbaaa"), 37, 'Test 59');
test(countSubstrings("xxyyyxyxx"), 17, 'Test 60');
test(countSubstrings("aabbccddeeefffggghhhh"), 40, 'Test 61');
test(countSubstrings("abacdfgdcabaabacdfgdcaba"), 33, 'Test 62');
test(countSubstrings("racecarbanana"), 20, 'Test 63');
test(countSubstrings("levelup"), 9, 'Test 64');
test(countSubstrings("abcdeedcba"), 15, 'Test 65');
test(countSubstrings("deeee"), 11, 'Test 66');
test(countSubstrings("abaaabaaab"), 24, 'Test 67');
test(countSubstrings("abbaabbaba"), 20, 'Test 68');
test(countSubstrings("abcbaabcbaabcbaabcba"), 58, 'Test 69');
test(countSubstrings("bcbcbcbcbcbcbc"), 56, 'Test 70');
test(countSubstrings("abaaabbaaabaaa"), 35, 'Test 71');
test(countSubstrings("abcababcababc"), 17, 'Test 72');
test(countSubstrings("levellevel"), 19, 'Test 73');
test(countSubstrings("abcdefedcba"), 16, 'Test 74');
test(countSubstrings("abcdefgfedcbafedcbagfedcbafedcbagfedcba"), 45, 'Test 75');
test(countSubstrings("acdcacdcacdc"), 27, 'Test 76');
test(countSubstrings("zxcvbnmmnbvcxz"), 21, 'Test 77');
test(countSubstrings("thisisnotapalindrome"), 23, 'Test 78');
test(countSubstrings("abbaeae"), 11, 'Test 79');
test(countSubstrings("aaaaaaa"), 28, 'Test 80');
test(countSubstrings("levellevellevel"), 36, 'Test 81');
test(countSubstrings("abcdcbaabcdcba"), 27, 'Test 82');
test(countSubstrings("abccbaabc"), 15, 'Test 83');
test(countSubstrings("xyzyzyxzyzyzyx"), 25, 'Test 84');
test(countSubstrings("abacdfgdcabaabacdfgdcabaabacdfgdcaba"), 52, 'Test 85');
test(countSubstrings("leveloneeleven"), 19, 'Test 86');
test(countSubstrings("babcbabcba"), 20, 'Test 87');
test(countSubstrings("zyzzyzzyzyzy"), 29, 'Test 88');
test(countSubstrings("abababa"), 16, 'Test 89');
test(countSubstrings("xyxzyxyzyx"), 15, 'Test 90');
test(countSubstrings("abacabadabacaba"), 32, 'Test 91');
test(countSubstrings("civicciviccivicciviccivic"), 85, 'Test 92');
test(countSubstrings("zzzzzzzzzzzzzzzzzzzz"), 210, 'Test 93');
test(countSubstrings("abcbaba"), 11, 'Test 94');
test(countSubstrings("abcbabcba"), 17, 'Test 95');
test(countSubstrings("deifiedrotor"), 17, 'Test 96');
test(countSubstrings("noonracecarrace"), 24, 'Test 97');
test(countSubstrings("civiccivic"), 19, 'Test 98');
test(countSubstrings("aabbccddeeffgg"), 21, 'Test 99');
test(countSubstrings("abccba"), 9, 'Test 100');
test(countSubstrings("aabbccddeeff"), 18, 'Test 101');
test(countSubstrings("madamimadam"), 20, 'Test 102');
test(countSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 78, 'Test 103');
test(countSubstrings("racecarannakayak"), 25, 'Test 104');
test(countSubstrings("amanaplanacanalpanama"), 37, 'Test 105');
test(countSubstrings("abbabababa"), 24, 'Test 106');
test(countSubstrings("abcdefgfeijklmmlkjihgf"), 29, 'Test 107');
test(countSubstrings("racecarracecar"), 27, 'Test 108');
test(countSubstrings("noonnoonnoon"), 30, 'Test 109');
test(countSubstrings("deified"), 10, 'Test 110');
test(countSubstrings("bcbcbcbcb"), 25, 'Test 111');
test(countSubstrings("abcdef"), 6, 'Test 112');
test(countSubstrings("rotorrotorrotor"), 36, 'Test 113');
test(countSubstrings("abcdedcba"), 13, 'Test 114');
test(countSubstrings("noonhighnoon"), 16, 'Test 115');
test(countSubstrings("abcbaabcbaabcba"), 36, 'Test 116');
test(countSubstrings("rotorrotorrotorrotor"), 58, 'Test 117');
test(countSubstrings("abacdfgdcaba"), 14, 'Test 118');
test(countSubstrings("abbaabba"), 16, 'Test 119');
test(countSubstrings("ababababab"), 30, 'Test 120');
test(countSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzz"), 141, 'Test 121');
test(countSubstrings("abcddcba"), 12, 'Test 122');
test(countSubstrings("aaaaabaaa"), 25, 'Test 123');
test(countSubstrings("abcdefghihgfedcba"), 25, 'Test 124');
test(countSubstrings("xyzyxzyzyx"), 14, 'Test 125');
test(countSubstrings("xyxxyxyxxyxyxyx"), 40, 'Test 126');
test(countSubstrings("xyzzzyzx"), 13, 'Test 127');
test(countSubstrings("abcdefgfedcbafedcbagfedcba"), 32, 'Test 128');
test(countSubstrings("aabbccddeeaabbccddee"), 30, 'Test 129');
test(countSubstrings("abacdfgdcababa"), 19, 'Test 130');
test(countSubstrings("civicciviccivic"), 36, 'Test 131');
test(countSubstrings("aabbcc"), 9, 'Test 132');
test(countSubstrings("mississippi"), 20, 'Test 133');
test(countSubstrings("xyzyxyzyx"), 17, 'Test 134');
test(countSubstrings("abbababaabbaba"), 28, 'Test 135');
test(countSubstrings("xyxzyzyxzyzyzyxzyxzyzyzyxzyzyzyzyx"), 61, 'Test 136');
test(countSubstrings("forgeeksskeegfor"), 23, 'Test 137');
test(countSubstrings("bananaabababa"), 27, 'Test 138');
test(countSubstrings("abcbba"), 8, 'Test 139');
test(countSubstrings("zzzzzzzzzzz"), 66, 'Test 140');

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
