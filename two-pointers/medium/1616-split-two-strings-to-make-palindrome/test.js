// Test: 1616. Split Two Strings To Make Palindrome
// 126 test cases from LeetCodeDataset
// Run: node test.js

const { checkPalindromeFormation } = require("./solution");

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

console.log("\n1616. Split Two Strings To Make Palindrome\n");

test(checkPalindromeFormation("abcdefg", "gfedcba"), true, 'Test 1');
test(checkPalindromeFormation("abcxxcba", "abcdcba"), true, 'Test 2');
test(checkPalindromeFormation("aabbcc", "ccbbdd"), true, 'Test 3');
test(checkPalindromeFormation("ulacfd", "jizalu"), true, 'Test 4');
test(checkPalindromeFormation("aabbaa", "aabbaa"), true, 'Test 5');
test(checkPalindromeFormation("abba", "abba"), true, 'Test 6');
test(checkPalindromeFormation("abcba", "abcba"), true, 'Test 7');
test(checkPalindromeFormation("x", "y"), true, 'Test 8');
test(checkPalindromeFormation("xbdef", "xecab"), false, 'Test 9');
test(checkPalindromeFormation("abccba", "abccba"), true, 'Test 10');
test(checkPalindromeFormation("noon", "noon"), true, 'Test 11');
test(checkPalindromeFormation("race", "ecar"), true, 'Test 12');
test(checkPalindromeFormation("abcd", "dcba"), true, 'Test 13');
test(checkPalindromeFormation("aabbcc", "ccbbaa"), true, 'Test 14');
test(checkPalindromeFormation("abc", "def"), false, 'Test 15');
test(checkPalindromeFormation("abcde", "edcba"), true, 'Test 16');
test(checkPalindromeFormation("abacaba", "bacabab"), true, 'Test 17');
test(checkPalindromeFormation("rotor", "rotor"), true, 'Test 18');
test(checkPalindromeFormation("noonappapoon", "poongggnop"), false, 'Test 19');
test(checkPalindromeFormation("abacax", "xananaba"), false, 'Test 20');
test(checkPalindromeFormation("abcdedcba", "afghihgfa"), true, 'Test 21');
test(checkPalindromeFormation("abcdefghijk", "kjihgfedcba"), true, 'Test 22');
test(checkPalindromeFormation("xyzzzzzxy", "yxzzzzzxy"), true, 'Test 23');
test(checkPalindromeFormation("abcdabcdabcd", "dcbaedcbadcb"), false, 'Test 24');
test(checkPalindromeFormation("aaaaabaaaa", "bbbbabbbbb"), false, 'Test 25');
test(checkPalindromeFormation("abcdeedcba", "fghijijihgf"), true, 'Test 26');
test(checkPalindromeFormation("rotorabc", "abcrotor"), true, 'Test 27');
test(checkPalindromeFormation("abcdeffedcba", "mnopqrstsrqponm"), true, 'Test 28');
test(checkPalindromeFormation("abac", "cab"), true, 'Test 29');
test(checkPalindromeFormation("abcdexyzabc", "cbazyxcdeba"), true, 'Test 30');
test(checkPalindromeFormation("abcdefgxyz", "zyxgfedcba"), true, 'Test 31');
test(checkPalindromeFormation("abcdef", "fedcba"), true, 'Test 32');
test(checkPalindromeFormation("aabbccddeeffgghhiijj", "jjiihhggfeeddccbaa"), true, 'Test 33');
test(checkPalindromeFormation("abcdefgh", "hgfedcba"), true, 'Test 34');
test(checkPalindromeFormation("xyzzxy", "yxzzyx"), true, 'Test 35');
test(checkPalindromeFormation("mnopqr", "rqponm"), true, 'Test 36');
test(checkPalindromeFormation("abcdefghij", "utvwxzyabc"), false, 'Test 37');
test(checkPalindromeFormation("levelupx", "xyzlevol"), false, 'Test 38');
test(checkPalindromeFormation("abcdefghijkjihgfedcba", "nopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), true, 'Test 39');
test(checkPalindromeFormation("abcdefggfedcba", "xyzzyxzyxzyx"), true, 'Test 40');
test(checkPalindromeFormation("aabbccddeeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqponnmmllkkjjiihhggffeeddccbaabb"), false, 'Test 41');
test(checkPalindromeFormation("abcdxyzabc", "cbazyxdcba"), true, 'Test 42');
test(checkPalindromeFormation("abcxxy", "yxxcba"), true, 'Test 43');
test(checkPalindromeFormation("abcdeedcba", "zzzzzzzzzz"), true, 'Test 44');
test(checkPalindromeFormation("xyzzzzyx", "abcdef"), true, 'Test 45');
test(checkPalindromeFormation("abcdefghijabc", "cbazyxwvut"), false, 'Test 46');
test(checkPalindromeFormation("abcdedcba", "xyzdedcba"), true, 'Test 47');
test(checkPalindromeFormation("abcdefg", "hgfedcb"), false, 'Test 48');
test(checkPalindromeFormation("aabbccddeeefffggg", "gggfffeeeddccbbaa"), true, 'Test 49');
test(checkPalindromeFormation("abcdefghij", "jihgfedcba"), true, 'Test 50');
test(checkPalindromeFormation("abcdabcdeedcba", "zzzzzzzzzzzzzzzzzzzz"), true, 'Test 51');
test(checkPalindromeFormation("abcdeffedcba", "xyzzyxwvutsrqponmlkjihgfedcba"), true, 'Test 52');
test(checkPalindromeFormation("racecarx", "xmadam"), true, 'Test 53');
test(checkPalindromeFormation("xyzzzzzyx", "abcdcba"), true, 'Test 54');
test(checkPalindromeFormation("redivider", "repaidred"), true, 'Test 55');
test(checkPalindromeFormation("aabbccddeeaabbccddee", "eeddccbbaaeeddccbbaa"), true, 'Test 56');
test(checkPalindromeFormation("noon", "moon"), true, 'Test 57');
test(checkPalindromeFormation("abababab", "babababa"), true, 'Test 58');
test(checkPalindromeFormation("abacabadabacaba", "fedcbadcba"), true, 'Test 59');
test(checkPalindromeFormation("zxcvbnm", "mlkjihg"), false, 'Test 60');
test(checkPalindromeFormation("abcdefggfedcba", "abcdggfedcba"), true, 'Test 61');
test(checkPalindromeFormation("qwertyuiop", "poiuytrewq"), true, 'Test 62');
test(checkPalindromeFormation("zzzzzzzzzzz", "aaaaaaaaaaa"), true, 'Test 63');
test(checkPalindromeFormation("aabbccddeeffgghhiijjkk", "kkjjiihhggfeeddccbaa"), true, 'Test 64');
test(checkPalindromeFormation("noon", "racecar"), true, 'Test 65');
test(checkPalindromeFormation("abcdex", "xcdeba"), false, 'Test 66');
test(checkPalindromeFormation("zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyz"), true, 'Test 67');
test(checkPalindromeFormation("abccba", "abcdef"), true, 'Test 68');
test(checkPalindromeFormation("abccba", "xyzzyx"), true, 'Test 69');
test(checkPalindromeFormation("aabbccdd", "aabbccdd"), false, 'Test 70');
test(checkPalindromeFormation("abcdabc", "cbadacb"), true, 'Test 71');
test(checkPalindromeFormation("xyxzyxzyx", "yzxzyxzyz"), false, 'Test 72');
test(checkPalindromeFormation("abcdexyz", "zyxcdeba"), false, 'Test 73');
test(checkPalindromeFormation("abacaxbacad", "dadcabaxbacba"), false, 'Test 74');
test(checkPalindromeFormation("abacaba", "zzzazzz"), true, 'Test 75');
test(checkPalindromeFormation("aabbccdd", "ddeebbaa"), true, 'Test 76');
test(checkPalindromeFormation("racecar", "level"), true, 'Test 77');
test(checkPalindromeFormation("abcdefghij", "abcdefghij"), false, 'Test 78');
test(checkPalindromeFormation("aaaa", "bbbb"), true, 'Test 79');
test(checkPalindromeFormation("level", "deified"), true, 'Test 80');
test(checkPalindromeFormation("abacdfgdcaba", "abacdgfdcaba"), true, 'Test 81');
test(checkPalindromeFormation("abcdeabcde", "edcbaedcba"), true, 'Test 82');
test(checkPalindromeFormation("abcdexyzzyxcdeba", "mnopqrstuutsrqpomn"), false, 'Test 83');
test(checkPalindromeFormation("abxyzyxcba", "cdyxzyxdc"), false, 'Test 84');
test(checkPalindromeFormation("madam", "refer"), true, 'Test 85');
test(checkPalindromeFormation("aabbcc", "ccbaab"), true, 'Test 86');
test(checkPalindromeFormation("abcddcba", "xyzzyx"), true, 'Test 87');
test(checkPalindromeFormation("abracadabra", "arbadacarba"), true, 'Test 88');
test(checkPalindromeFormation("abcddcba", "efghihgf"), true, 'Test 89');
test(checkPalindromeFormation("abcdefxyzzyxcba", "pqrstuvwzyxwvutsrqp"), false, 'Test 90');
test(checkPalindromeFormation("aaaabaaa", "bbbbbabb"), false, 'Test 91');
test(checkPalindromeFormation("abacdfgdcaba", "abaffghffaba"), false, 'Test 92');
test(checkPalindromeFormation("abacabad", "daadacab"), false, 'Test 93');
test(checkPalindromeFormation("abcdexyz", "zyxeabcd"), true, 'Test 94');
test(checkPalindromeFormation("abcdef", "xyzzzzyx"), true, 'Test 95');
test(checkPalindromeFormation("abacdfgdcaba", "abcdcba"), true, 'Test 96');
test(checkPalindromeFormation("abccba", "defedf"), true, 'Test 97');
test(checkPalindromeFormation("xyzyx", "xzyzx"), true, 'Test 98');
test(checkPalindromeFormation("palindrome", "emordnilap"), true, 'Test 99');
test(checkPalindromeFormation("zzzzzzzzzzzzzzzzzz", "aaaaaaaaaaaaaaaa"), true, 'Test 100');
test(checkPalindromeFormation("abccba", "defed"), true, 'Test 101');
test(checkPalindromeFormation("abccba", "fghihgf"), true, 'Test 102');
test(checkPalindromeFormation("tacocat", "racecar"), true, 'Test 103');
test(checkPalindromeFormation("abcdef", "ghijkl"), false, 'Test 104');
test(checkPalindromeFormation("aaaabbbb", "bbbbaaaa"), true, 'Test 105');
test(checkPalindromeFormation("abcdefghihgfedcba", "abcdefghihgfedcba"), true, 'Test 106');
test(checkPalindromeFormation("aabbccddeeff", "ffeeddccbbaa"), true, 'Test 107');
test(checkPalindromeFormation("abcdexyzabcd", "dcbaxyzedcba"), false, 'Test 108');
test(checkPalindromeFormation("abacabadabacaba", "abacabadabacaba"), true, 'Test 109');
test(checkPalindromeFormation("abcxyzz", "zzzyxcba"), true, 'Test 110');
test(checkPalindromeFormation("abacabadabacaba", "zzzzzzzzzzzzzzzzz"), true, 'Test 111');
test(checkPalindromeFormation("abcabcabcabc", "cbacbacbacba"), true, 'Test 112');
test(checkPalindromeFormation("abcxxa", "bxxcba"), true, 'Test 113');
test(checkPalindromeFormation("racecar", "madam"), true, 'Test 114');
test(checkPalindromeFormation("aaaaaaabbbbb", "bbbbbaaaaaaa"), true, 'Test 115');
test(checkPalindromeFormation("abcdabcdabcd", "dcbaabcdabcd"), false, 'Test 116');
test(checkPalindromeFormation("deifiedxx", "yytefified"), true, 'Test 117');
test(checkPalindromeFormation("aaaaaaa", "bbbbbbb"), true, 'Test 118');
test(checkPalindromeFormation("abab", "baba"), true, 'Test 119');
test(checkPalindromeFormation("abcdeffedcba", "xyzzyxwxyzzyx"), true, 'Test 120');
test(checkPalindromeFormation("abcdabcd", "dcbaabcd"), true, 'Test 121');
test(checkPalindromeFormation("abcdeffedcba", "xyzzyxwvut"), true, 'Test 122');
test(checkPalindromeFormation("abcdedcba", "mnopqrstuv"), true, 'Test 123');
test(checkPalindromeFormation("abcdefghihgfedcba", "ijklmnopponmlkjihgf"), true, 'Test 124');
test(checkPalindromeFormation("aabbcc", "zzxxzz"), true, 'Test 125');
test(checkPalindromeFormation("abcdexyz", "zyxwvuts"), false, 'Test 126');

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
