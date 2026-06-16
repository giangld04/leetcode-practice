// Test: 132. Palindrome Partitioning Ii
// 158 test cases from LeetCodeDataset
// Run: node test.js

const { minCut } = require("./solution");

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

console.log("\n132. Palindrome Partitioning Ii\n");

test(minCut("abcba"), 0, 'Test 1');
test(minCut("aabbaa"), 0, 'Test 2');
test(minCut("abcdcba"), 0, 'Test 3');
test(minCut("abababab"), 1, 'Test 4');
test(minCut("a"), 0, 'Test 5');
test(minCut("ab"), 1, 'Test 6');
test(minCut("noonnoon"), 0, 'Test 7');
test(minCut("aabaa"), 0, 'Test 8');
test(minCut("aabb"), 1, 'Test 9');
test(minCut("racecar"), 0, 'Test 10');
test(minCut("abba"), 0, 'Test 11');
test(minCut("abcdabcdabcd"), 11, 'Test 12');
test(minCut("abc"), 2, 'Test 13');
test(minCut("abcd"), 3, 'Test 14');
test(minCut("abccba"), 0, 'Test 15');
test(minCut("aab"), 1, 'Test 16');
test(minCut("abcbm"), 2, 'Test 17');
test(minCut("aabbcc"), 2, 'Test 18');
test(minCut("mississippi"), 3, 'Test 19');
test(minCut("leet"), 2, 'Test 20');
test(minCut("abcdefg"), 6, 'Test 21');
test(minCut("ababcbabcba"), 2, 'Test 22');
test(minCut("abacdcbaabcdeedcba"), 4, 'Test 23');
test(minCut("abacdfgdcabaedcba"), 12, 'Test 24');
test(minCut("aabcbabcbabcba"), 1, 'Test 25');
test(minCut("abaaabaaabaaab"), 1, 'Test 26');
test(minCut("abcabcabcabc"), 11, 'Test 27');
test(minCut("abcdeedcbaeedcba"), 5, 'Test 28');
test(minCut("acbbccaaa"), 3, 'Test 29');
test(minCut("aaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbb"), 1, 'Test 30');
test(minCut("aabaaabaaabaaa"), 1, 'Test 31');
test(minCut("abacdbacabcbaabcbaabcba"), 6, 'Test 32');
test(minCut("aabbababaabbaabb"), 4, 'Test 33');
test(minCut("abacdbacabcbaab"), 5, 'Test 34');
test(minCut("abacba"), 3, 'Test 35');
test(minCut("aaaaabaaaabaaabaaa"), 2, 'Test 36');
test(minCut("abacdbacabcbaabcbaabcbaabcbaabcba"), 6, 'Test 37');
test(minCut("abacdcbaabcdeedcbaabcdeedcba"), 4, 'Test 38');
test(minCut("aaaabaaaaa"), 1, 'Test 39');
test(minCut("noonmoonnoon"), 3, 'Test 40');
test(minCut("abccbaabccba"), 0, 'Test 41');
test(minCut("abacabacaba"), 0, 'Test 42');
test(minCut("aaaaabbbbb"), 1, 'Test 43');
test(minCut("abbbabbabbbabbabbbabbabbbabbbabbb"), 1, 'Test 44');
test(minCut("abbaabbabbabba"), 1, 'Test 45');
test(minCut("noonnoonnoonnoon"), 0, 'Test 46');
test(minCut("abcdcbe"), 2, 'Test 47');
test(minCut("ababbbababbbaba"), 0, 'Test 48');
test(minCut("abacaba"), 0, 'Test 49');
test(minCut("madamracecar"), 1, 'Test 50');
test(minCut("abcbac"), 1, 'Test 51');
test(minCut("abcdedcbafedcbabcd"), 3, 'Test 52');
test(minCut("aaaabaaa"), 1, 'Test 53');
test(minCut("aabbaabbaabbaabb"), 1, 'Test 54');
test(minCut("abbbabbabbbabbabbbabbabbb"), 1, 'Test 55');
test(minCut("abcbaababcba"), 3, 'Test 56');
test(minCut("abbabbaabbabba"), 0, 'Test 57');
test(minCut("abacabadabacabadabacabadabacaba"), 0, 'Test 58');
test(minCut("abab"), 1, 'Test 59');
test(minCut("abcdcbaefghfeabcdcba"), 7, 'Test 60');
test(minCut("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 61');
test(minCut("racecarabcba"), 1, 'Test 62');
test(minCut("xyzyxzyxyzyx"), 3, 'Test 63');
test(minCut("aabbccddeeeffffggg"), 6, 'Test 64');
test(minCut("levelup"), 2, 'Test 65');
test(minCut("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 0, 'Test 66');
test(minCut("abababababababab"), 1, 'Test 67');
test(minCut("abcdeedcba"), 0, 'Test 68');
test(minCut("ababababababab"), 1, 'Test 69');
test(minCut("noon"), 0, 'Test 70');
test(minCut("aaaaaa"), 0, 'Test 71');
test(minCut("xyxzyzyxzyxzyx"), 9, 'Test 72');
test(minCut("abababababab"), 1, 'Test 73');
test(minCut("deeee"), 1, 'Test 74');
test(minCut("abcbaabcba"), 0, 'Test 75');
test(minCut("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 0, 'Test 76');
test(minCut("xyzyxzyzyxzyx"), 6, 'Test 77');
test(minCut("abcdeedcbaabcdeedcbaabcdeedcbaabcdeedcba"), 0, 'Test 78');
test(minCut("zyxxyzyxyzyx"), 2, 'Test 79');
test(minCut("abcdabcdabcdabcd"), 15, 'Test 80');
test(minCut("level"), 0, 'Test 81');
test(minCut("bananaabananabana"), 4, 'Test 82');
test(minCut("abcdefghiijihgfedcba"), 17, 'Test 83');
test(minCut("aabaabaaa"), 1, 'Test 84');
test(minCut("abacdbacabcbaabcbaabcbaabcbaab"), 5, 'Test 85');
test(minCut("abcdabcdabcdabcdabcd"), 19, 'Test 86');
test(minCut("madam"), 0, 'Test 87');
test(minCut("abbbba"), 0, 'Test 88');
test(minCut("aaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaa"), 0, 'Test 89');
test(minCut("ababababcba"), 2, 'Test 90');
test(minCut("rotorcarcarecat"), 10, 'Test 91');
test(minCut("abacabadabacaba"), 0, 'Test 92');
test(minCut("abababa"), 0, 'Test 93');
test(minCut("aabbccddeeefffggg"), 6, 'Test 94');
test(minCut("ababbabaababbabaababbab"), 1, 'Test 95');
test(minCut("zzzzzzzzzzzzzzzzzzzz"), 0, 'Test 96');
test(minCut("abacdbacabcbaabcbaabcbaabcba"), 6, 'Test 97');
test(minCut("abbabbabb"), 1, 'Test 98');
test(minCut("abbbabbbbabb"), 2, 'Test 99');
test(minCut("abcbabcba"), 0, 'Test 100');
test(minCut("banana"), 1, 'Test 101');
test(minCut("abcbddcba"), 5, 'Test 102');
test(minCut("abcbaeabcdedcba"), 2, 'Test 103');
test(minCut("abcbabcbabcba"), 0, 'Test 104');
test(minCut("bcbabbc"), 3, 'Test 105');
test(minCut("ababababababababababababab"), 1, 'Test 106');
test(minCut("anana"), 0, 'Test 107');
test(minCut("aababababababababababababababababababababababababababababababababababababab"), 1, 'Test 108');
test(minCut("aabbccddeeffgg"), 6, 'Test 109');
test(minCut("abbacdcba"), 3, 'Test 110');
test(minCut("aabbccddeeff"), 5, 'Test 111');
test(minCut("abaca"), 2, 'Test 112');
test(minCut("abacdbacaba"), 4, 'Test 113');
test(minCut("madamimadam"), 0, 'Test 114');
test(minCut("abcdefghij"), 9, 'Test 115');
test(minCut("abcbaabcbaabcbaabcbaabcbaabcba"), 0, 'Test 116');
test(minCut("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 25, 'Test 117');
test(minCut("aabbabba"), 1, 'Test 118');
test(minCut("bananaabananabananaabananabanana"), 6, 'Test 119');
test(minCut("aabbccddeeefffgggbbb"), 7, 'Test 120');
test(minCut("abacdbacabcbaabcbaab"), 5, 'Test 121');
test(minCut("racecarannakayak"), 2, 'Test 122');
test(minCut("amanaplanacanalpanama"), 0, 'Test 123');
test(minCut("aaaaaaaaaaaaaaaaaab"), 1, 'Test 124');
test(minCut("noonracecar"), 1, 'Test 125');
test(minCut("noonnoonnoon"), 0, 'Test 126');
test(minCut("abacdbacabcba"), 6, 'Test 127');
test(minCut("noonmoonnoonnoonnoonnoonnoon"), 3, 'Test 128');
test(minCut("abcdedcba"), 0, 'Test 129');
test(minCut("abcdeedcbabacdcba"), 5, 'Test 130');
test(minCut("mamad"), 2, 'Test 131');
test(minCut("aaaaaaaaaabbbbbbbbbccccccccc"), 2, 'Test 132');
test(minCut("abcdefgfedcbamnoponmabcdedcba"), 2, 'Test 133');
test(minCut("noonhighnoon"), 5, 'Test 134');
test(minCut("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 0, 'Test 135');
test(minCut("racecarlevelmadamracecar"), 3, 'Test 136');
test(minCut("abacdfgdcaba"), 7, 'Test 137');
test(minCut("aabaaabbaabbaabb"), 2, 'Test 138');
test(minCut("abcdabcabcde"), 11, 'Test 139');
test(minCut("ababababab"), 1, 'Test 140');
test(minCut("abcdedcbaabcdedcbaabcdedcba"), 0, 'Test 141');
test(minCut("abacdbacabcbaabcba"), 6, 'Test 142');
test(minCut("rotor"), 0, 'Test 143');
test(minCut("abcadacbdb"), 3, 'Test 144');
test(minCut("xyzzazxzyx"), 6, 'Test 145');
test(minCut("aabba"), 1, 'Test 146');
test(minCut("abcabcabcabcabcabcabcabc"), 23, 'Test 147');
test(minCut("ababbbababbbababb"), 1, 'Test 148');
test(minCut("aabbccddeeefff"), 5, 'Test 149');
test(minCut("abacdbacabcbaabcbaabcbaab"), 5, 'Test 150');
test(minCut("abcdcbabcdcbabcdcbabcdcb"), 1, 'Test 151');
test(minCut("aabbccddeeefffggghhhhiiiii"), 8, 'Test 152');
test(minCut("abcabcabcabcabc"), 14, 'Test 153');
test(minCut("abacdcaba"), 0, 'Test 154');
test(minCut("aaaaabbbbbccccc"), 2, 'Test 155');
test(minCut("aabbababab"), 2, 'Test 156');
test(minCut("xyxzyzyx"), 3, 'Test 157');
test(minCut("abbab"), 1, 'Test 158');

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
