// Test: 1960. Maximum Product Of The Length Of Two Palindromic Substrings
// 173 test cases from LeetCodeDataset
// Run: node test.js

const { maxProduct } = require("./solution");

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

console.log("\n1960. Maximum Product Of The Length Of Two Palindromic Substrings\n");

test(maxProduct("mnoonmmon"), 1, 'Test 1');
test(maxProduct("mamadmim"), 9, 'Test 2');
test(maxProduct("abcdcba"), 5, 'Test 3');
test(maxProduct("abcdedcba"), 7, 'Test 4');
test(maxProduct("mamad"), 3, 'Test 5');
test(maxProduct("aaaaa"), 3, 'Test 6');
test(maxProduct("abcdefghi"), 1, 'Test 7');
test(maxProduct("abacdfgdcaba"), 9, 'Test 8');
test(maxProduct("zaaaxbbby"), 9, 'Test 9');
test(maxProduct("noonnoon"), 1, 'Test 10');
test(maxProduct("abcde"), 1, 'Test 11');
test(maxProduct("racecar"), 5, 'Test 12');
test(maxProduct("abcdeedcba"), 1, 'Test 13');
test(maxProduct("banana"), 5, 'Test 14');
test(maxProduct("ababbb"), 9, 'Test 15');
test(maxProduct("abc"), 1, 'Test 16');
test(maxProduct("abcbabcbabcba"), 35, 'Test 17');
test(maxProduct("abcdefgh"), 1, 'Test 18');
test(maxProduct("abcd"), 1, 'Test 19');
test(maxProduct("mississippi"), 7, 'Test 20');
test(maxProduct("aabbccddeeffgghhiijj"), 1, 'Test 21');
test(maxProduct("mnoonmnonoomnm"), 15, 'Test 22');
test(maxProduct("abcdefg"), 1, 'Test 23');
test(maxProduct("aabbccddeeeffgg"), 3, 'Test 24');
test(maxProduct("abccbaabccbaabccbaabccba"), 1, 'Test 25');
test(maxProduct("aaaaaabbaaaaa"), 25, 'Test 26');
test(maxProduct("nunrunrunrun"), 3, 'Test 27');
test(maxProduct("abaaacbaaaaba"), 9, 'Test 28');
test(maxProduct("racecarlevelnoonracecar"), 49, 'Test 29');
test(maxProduct("deeeeefedeeeed"), 15, 'Test 30');
test(maxProduct("rotorrotor"), 25, 'Test 31');
test(maxProduct("abracadabra"), 3, 'Test 32');
test(maxProduct("abcabcabcabc"), 1, 'Test 33');
test(maxProduct("abcbaacbabcba"), 25, 'Test 34');
test(maxProduct("abcbacbacbacb"), 5, 'Test 35');
test(maxProduct("tattarrattat"), 9, 'Test 36');
test(maxProduct("repaperrelevelrepeepr"), 35, 'Test 37');
test(maxProduct("babadabababa"), 25, 'Test 38');
test(maxProduct("madaminnadammadam"), 25, 'Test 39');
test(maxProduct("abccbaabcdcba"), 7, 'Test 40');
test(maxProduct("aabaaaabaaaabaa"), 25, 'Test 41');
test(maxProduct("abcdeffedcbaffedcba"), 1, 'Test 42');
test(maxProduct("abccbaabccba"), 1, 'Test 43');
test(maxProduct("xyzabcbaedcbaxyz"), 5, 'Test 44');
test(maxProduct("levellevellevellevel"), 75, 'Test 45');
test(maxProduct("noonnoonnoonnoon"), 1, 'Test 46');
test(maxProduct("mississippimississippi"), 49, 'Test 47');
test(maxProduct("xyzxyzxyzxyz"), 1, 'Test 48');
test(maxProduct("abacdfgdcabaxyzzyzyzyzyzx"), 27, 'Test 49');
test(maxProduct("aabbbaabbbaabbbaaa"), 49, 'Test 50');
test(maxProduct("abacadaeafagahagaha"), 21, 'Test 51');
test(maxProduct("noonracecarnoon"), 13, 'Test 52');
test(maxProduct("aabbbaaabbbaaabbbaaabbbaaabbba"), 221, 'Test 53');
test(maxProduct("ababababababababa"), 63, 'Test 54');
test(maxProduct("abacabaabacabaabacaba"), 49, 'Test 55');
test(maxProduct("repel"), 3, 'Test 56');
test(maxProduct("levelnoonlevel"), 25, 'Test 57');
test(maxProduct("rotorlevelmadamracecar"), 35, 'Test 58');
test(maxProduct("noonnoonnoonnoonnoonnoon"), 1, 'Test 59');
test(maxProduct("kayak"), 3, 'Test 60');
test(maxProduct("mnopqrstuvuvwxyzyx"), 15, 'Test 61');
test(maxProduct("madamlevelmadam"), 25, 'Test 62');
test(maxProduct("babcbabcbabcba"), 35, 'Test 63');
test(maxProduct("abacadaeafagaha"), 9, 'Test 64');
test(maxProduct("leveloneleveleleveldoneleveldot"), 55, 'Test 65');
test(maxProduct("xyzzzzyzyzyzx"), 21, 'Test 66');
test(maxProduct("madaminnadam"), 15, 'Test 67');
test(maxProduct("abababababababab"), 63, 'Test 68');
test(maxProduct("racecarabcdeedcbacar"), 21, 'Test 69');
test(maxProduct("noon"), 1, 'Test 70');
test(maxProduct("abcbacbacb"), 5, 'Test 71');
test(maxProduct("ababababababababab"), 81, 'Test 72');
test(maxProduct("deeee"), 3, 'Test 73');
test(maxProduct("leveloneleveltwo"), 25, 'Test 74');
test(maxProduct("abcabcabcabcabcabc"), 1, 'Test 75');
test(maxProduct("xyzbcbzxyxzyzyzyz"), 35, 'Test 76');
test(maxProduct("abcdefggfedcba"), 1, 'Test 77');
test(maxProduct("aaaaabbbbbbaaaa"), 25, 'Test 78');
test(maxProduct("abcdeffedcba"), 1, 'Test 79');
test(maxProduct("ababcbaababcbaababcba"), 25, 'Test 80');
test(maxProduct("babcbabcbabcbabcbabcbabcbabcbabcbabcbabcba"), 399, 'Test 81');
test(maxProduct("ababaababaababa"), 27, 'Test 82');
test(maxProduct("abcbabcbaabcbabcba"), 81, 'Test 83');
test(maxProduct("mmabccbaakak"), 3, 'Test 84');
test(maxProduct("abcdefedcba"), 9, 'Test 85');
test(maxProduct("palindromeemordnilap"), 1, 'Test 86');
test(maxProduct("level"), 3, 'Test 87');
test(maxProduct("racecarlevelracecar"), 49, 'Test 88');
test(maxProduct("levellevellevel"), 25, 'Test 89');
test(maxProduct("aaaaabaaaaabaaaaabaaaaab"), 143, 'Test 90');
test(maxProduct("xyxzyxzyxzyx"), 3, 'Test 91');
test(maxProduct("nunabannun"), 15, 'Test 92');
test(maxProduct("deeeeefeeeed"), 15, 'Test 93');
test(maxProduct("zzzzzzzzzzzzzzzzzzzzzzzz"), 143, 'Test 94');
test(maxProduct("abababababababababab"), 99, 'Test 95');
test(maxProduct("madamimadamracecar"), 77, 'Test 96');
test(maxProduct("abbbbabbbaaaaaaaabbba"), 49, 'Test 97');
test(maxProduct("radar"), 3, 'Test 98');
test(maxProduct("abababa"), 9, 'Test 99');
test(maxProduct("abacabadabacaba"), 49, 'Test 100');
test(maxProduct("abacabadabacabada"), 63, 'Test 101');
test(maxProduct("bananaananab"), 25, 'Test 102');
test(maxProduct("aabbccddeeefffggg"), 9, 'Test 103');
test(maxProduct("redivider"), 7, 'Test 104');
test(maxProduct("zzzzzzzzzzzzzzzzzzzz"), 99, 'Test 105');
test(maxProduct("abcabccbaabcabccba"), 1, 'Test 106');
test(maxProduct("mnbvcxzlkjhgfdsapoiuytrewq"), 1, 'Test 107');
test(maxProduct("deedlevel"), 5, 'Test 108');
test(maxProduct("abcbabcba"), 15, 'Test 109');
test(maxProduct("deifiedrotatordeified"), 49, 'Test 110');
test(maxProduct("noonnoonnoonnoonnoon"), 1, 'Test 111');
test(maxProduct("abcbadefgfe"), 25, 'Test 112');
test(maxProduct("anana"), 3, 'Test 113');
test(maxProduct("ababaabababababa"), 55, 'Test 114');
test(maxProduct("abracadabraabracadabra"), 9, 'Test 115');
test(maxProduct("detartrated"), 9, 'Test 116');
test(maxProduct("manamzzamanaplanacanalpanamazzamanaplanacanalpanamazzzzzz"), 529, 'Test 117');
test(maxProduct("xyxyxyxyxyxyxyxyx"), 63, 'Test 118');
test(maxProduct("madamimadam"), 25, 'Test 119');
test(maxProduct("levelonelevelonelevel"), 25, 'Test 120');
test(maxProduct("madamracecaramadam"), 35, 'Test 121');
test(maxProduct("aaabbaaabbaaa"), 21, 'Test 122');
test(maxProduct("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 1, 'Test 123');
test(maxProduct("xylophonepiponolyx"), 9, 'Test 124');
test(maxProduct("racecarandracecar"), 49, 'Test 125');
test(maxProduct("aabaaaabaaba"), 25, 'Test 126');
test(maxProduct("racecarannakayak"), 35, 'Test 127');
test(maxProduct("kayakkayakkayakkayak"), 75, 'Test 128');
test(maxProduct("aaaaabbbbbaaaaa"), 27, 'Test 129');
test(maxProduct("mammadmooommom"), 15, 'Test 130');
test(maxProduct("aaaaabbbbbaaaaaabbbbaaaaa"), 75, 'Test 131');
test(maxProduct("racecarracecar"), 49, 'Test 132');
test(maxProduct("noonnoonnoon"), 1, 'Test 133');
test(maxProduct("repaper"), 5, 'Test 134');
test(maxProduct("racecarlevelrotorkayak"), 35, 'Test 135');
test(maxProduct("rotorrotorrotor"), 25, 'Test 136');
test(maxProduct("aaaaabaaabaaaabaaaaabaaaa"), 99, 'Test 137');
test(maxProduct("ababaababab"), 25, 'Test 138');
test(maxProduct("noonhighnoon"), 1, 'Test 139');
test(maxProduct("tacocattacocattaco"), 49, 'Test 140');
test(maxProduct("rotorrotorrotorrotor"), 75, 'Test 141');
test(maxProduct("bananaananananab"), 45, 'Test 142');
test(maxProduct("zzzyzyzyzyzyzyzyzyzyzyzyz"), 121, 'Test 143');
test(maxProduct("deeddeeddeed"), 1, 'Test 144');
test(maxProduct("aaaaaabbbbbaaaa"), 35, 'Test 145');
test(maxProduct("rotorresistor"), 15, 'Test 146');
test(maxProduct("xylophonelevel"), 5, 'Test 147');
test(maxProduct("aaabaaaabaaaaabaaaaaaab"), 77, 'Test 148');
test(maxProduct("aabbccddeeefffgggzzzzzzzzzzzzzzzzzzzz"), 99, 'Test 149');
test(maxProduct("abcdedcbaabcdedcbaabcdedcba"), 81, 'Test 150');
test(maxProduct("civic"), 3, 'Test 151');
test(maxProduct("rotor"), 3, 'Test 152');
test(maxProduct("qwertyuioplkjhgfdsazxcvbnmnbvcxzasdfghjklpoiuytrewq"), 49, 'Test 153');
test(maxProduct("abbaabbbaabba"), 11, 'Test 154');
test(maxProduct("abcdefghihgfedcba"), 15, 'Test 155');
test(maxProduct("tacocattaco"), 7, 'Test 156');
test(maxProduct("repaperrepaperrepaper"), 49, 'Test 157');
test(maxProduct("aabaaaabaa"), 25, 'Test 158');
test(maxProduct("reviled"), 1, 'Test 159');
test(maxProduct("amoreroma"), 7, 'Test 160');
test(maxProduct("aabbccddeeefffggghhhiiiijjjjkkkkllllmmmnnnooopppqqqqrrrrssssttttuuuuvvvvwwwwwxxxxxyyyyyzzzzzzyyyyyxxxwwvvuuttrrqqppoonnmlkkjjiihhggffeeddccbbaa"), 25, 'Test 161');
test(maxProduct("xyzyzyzyzyzyzyzyz"), 63, 'Test 162');
test(maxProduct("xyxzyzyzyzyzyzyx"), 35, 'Test 163');
test(maxProduct("zzzzzzyyyyyxxxwwvvuuttrrqqppoonnmlkkjjiihhggffeeddccbbaa"), 25, 'Test 164');
test(maxProduct("rotorabcdrotor"), 25, 'Test 165');
test(maxProduct("aabbccddeeeffgghhiii"), 9, 'Test 166');
test(maxProduct("abcdedcbabcdedcbabcdedcb"), 135, 'Test 167');
test(maxProduct("aabbccddeeefffggghhhiiiijjjjkkkkllllmmmnnnooopppqqqqrrrrssssttttuuuuvvvvwwwwwxxxxxyyyyyzzzzz"), 25, 'Test 168');
test(maxProduct("abcabcabcabcabc"), 1, 'Test 169');
test(maxProduct("deed"), 1, 'Test 170');
test(maxProduct("aaaaabbbbbbaaaaa"), 25, 'Test 171');
test(maxProduct("levelwasracecar"), 35, 'Test 172');
test(maxProduct("racecarabcdeedcba"), 9, 'Test 173');

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
