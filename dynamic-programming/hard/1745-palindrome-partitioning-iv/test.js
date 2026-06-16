// Test: 1745. Palindrome Partitioning Iv
// 165 test cases from LeetCodeDataset
// Run: node test.js

const { checkPartitioning } = require("./solution");

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

console.log("\n1745. Palindrome Partitioning Iv\n");

test(checkPartitioning("abcba"), true, 'Test 1');
test(checkPartitioning("abcdcba"), true, 'Test 2');
test(checkPartitioning("aabbaa"), true, 'Test 3');
test(checkPartitioning("aaaaa"), true, 'Test 4');
test(checkPartitioning("abacdfgdcaba"), false, 'Test 5');
test(checkPartitioning("aabbbaa"), true, 'Test 6');
test(checkPartitioning("noonnoon"), true, 'Test 7');
test(checkPartitioning("aaa"), true, 'Test 8');
test(checkPartitioning("aabb"), true, 'Test 9');
test(checkPartitioning("racecar"), true, 'Test 10');
test(checkPartitioning("abba"), true, 'Test 11');
test(checkPartitioning("noon"), true, 'Test 12');
test(checkPartitioning("deeee"), true, 'Test 13');
test(checkPartitioning("abc"), true, 'Test 14');
test(checkPartitioning("abcbdd"), true, 'Test 15');
test(checkPartitioning("abcd"), false, 'Test 16');
test(checkPartitioning("aabbcc"), true, 'Test 17');
test(checkPartitioning("madamimadam"), true, 'Test 18');
test(checkPartitioning("aabaacaab"), true, 'Test 19');
test(checkPartitioning("bcbddxy"), false, 'Test 20');
test(checkPartitioning("aabbccddeeeffgghhii"), false, 'Test 21');
test(checkPartitioning("aabbccddeeefffggghhhiiii"), false, 'Test 22');
test(checkPartitioning("kayakmadamracecar"), true, 'Test 23');
test(checkPartitioning("levelracecar"), false, 'Test 24');
test(checkPartitioning("civicnooncivicnoon"), false, 'Test 25');
test(checkPartitioning("aaaaaabbaaaaa"), true, 'Test 26');
test(checkPartitioning("madamnoonmadamnoonmadam"), true, 'Test 27');
test(checkPartitioning("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), true, 'Test 28');
test(checkPartitioning("rotordetartratedrotor"), true, 'Test 29');
test(checkPartitioning("tattarrattatmadamracecar"), true, 'Test 30');
test(checkPartitioning("abcabcabc"), false, 'Test 31');
test(checkPartitioning("rotorlevelrotor"), true, 'Test 32');
test(checkPartitioning("deifiedcivicdeified"), true, 'Test 33');
test(checkPartitioning("rotorrefer"), false, 'Test 34');
test(checkPartitioning("madamadam"), true, 'Test 35');
test(checkPartitioning("aaaabbbbcccc"), true, 'Test 36');
test(checkPartitioning("levellevellevellevellevellevel"), true, 'Test 37');
test(checkPartitioning("deifieddeifieddeified"), true, 'Test 38');
test(checkPartitioning("xyzzyxabcba"), false, 'Test 39');
test(checkPartitioning("tacocatdeified"), false, 'Test 40');
test(checkPartitioning("leveloneone"), false, 'Test 41');
test(checkPartitioning("aabbccddeeefffggghhhhiiiiijjjjkkkkllllmmmmnnnnoooo"), false, 'Test 42');
test(checkPartitioning("levelmadamrotor"), true, 'Test 43');
test(checkPartitioning("abccbaabccba"), true, 'Test 44');
test(checkPartitioning("abcdmadamracecar"), false, 'Test 45');
test(checkPartitioning("levellevellevellevel"), true, 'Test 46');
test(checkPartitioning("repaperdeified"), false, 'Test 47');
test(checkPartitioning("noonnoonnoonnoon"), true, 'Test 48');
test(checkPartitioning("racecarlevel"), false, 'Test 49');
test(checkPartitioning("revilerleveldeified"), false, 'Test 50');
test(checkPartitioning("aabbaabbaa"), true, 'Test 51');
test(checkPartitioning("deifieddeifieddeifieddeifieddeified"), true, 'Test 52');
test(checkPartitioning("kayakracecarkayak"), true, 'Test 53');
test(checkPartitioning("abbbcbbaabbcbba"), false, 'Test 54');
test(checkPartitioning("levelrotorabcddcba"), true, 'Test 55');
test(checkPartitioning("aabbccddeeeffgghhiiiii"), false, 'Test 56');
test(checkPartitioning("leveldeifiedlevel"), true, 'Test 57');
test(checkPartitioning("noonnoonnoonnoonnoonnoon"), true, 'Test 58');
test(checkPartitioning("abacabaabacabaabacabaabacaba"), true, 'Test 59');
test(checkPartitioning("rotorreferrotorrefer"), false, 'Test 60');
test(checkPartitioning("abccbaabccbaabccba"), true, 'Test 61');
test(checkPartitioning("abacdfgdcabaaa"), false, 'Test 62');
test(checkPartitioning("aabbaccd"), false, 'Test 63');
test(checkPartitioning("aabbccddeeefffggghhhiiiiijjjjkkkkllllmmmmnnnnooooppppqqqrrrssstttuuuuvvvwwwxxxxyyyyzzzz"), false, 'Test 64');
test(checkPartitioning("madammadammadam"), true, 'Test 65');
test(checkPartitioning("racecarracecarracecar"), true, 'Test 66');
test(checkPartitioning("madammadam"), true, 'Test 67');
test(checkPartitioning("aibohphobiamadamaibohphobia"), true, 'Test 68');
test(checkPartitioning("racecarbanana"), true, 'Test 69');
test(checkPartitioning("abaabbab"), true, 'Test 70');
test(checkPartitioning("racecarabacaba"), false, 'Test 71');
test(checkPartitioning("abcdeedcba"), true, 'Test 72');
test(checkPartitioning("aabbccddeeeeddcbaabbccdd"), false, 'Test 73');
test(checkPartitioning("deeeeefeee"), true, 'Test 74');
test(checkPartitioning("rotorleveldeifiedleveldeifiedrotor"), false, 'Test 75');
test(checkPartitioning("aabbccddeeeeedddccbbaa"), false, 'Test 76');
test(checkPartitioning("abccbaabccbaabccbaabccbaabccbaabccbaabccbaabccba"), true, 'Test 77');
test(checkPartitioning("deifiedcivic"), false, 'Test 78');
test(checkPartitioning("abcbaabcbabcba"), true, 'Test 79');
test(checkPartitioning("civicracecar"), false, 'Test 80');
test(checkPartitioning("wasitacaroracatisaw"), true, 'Test 81');
test(checkPartitioning("rotorcentralpalindromerotor"), false, 'Test 82');
test(checkPartitioning("abcdcbaabdcbaabcdcba"), false, 'Test 83');
test(checkPartitioning("aibohphobia"), true, 'Test 84');
test(checkPartitioning("leveldeifiedcivic"), true, 'Test 85');
test(checkPartitioning("referredder"), false, 'Test 86');
test(checkPartitioning("level"), true, 'Test 87');
test(checkPartitioning("aabbccdd"), false, 'Test 88');
test(checkPartitioning("rotorleveltwol"), false, 'Test 89');
test(checkPartitioning("levellevellevel"), true, 'Test 90');
test(checkPartitioning("rotorpusher"), false, 'Test 91');
test(checkPartitioning("abccbaabc"), false, 'Test 92');
test(checkPartitioning("referreferrefer"), true, 'Test 93');
test(checkPartitioning("xyzyzyxyz"), true, 'Test 94');
test(checkPartitioning("madamrotorlevel"), true, 'Test 95');
test(checkPartitioning("madam"), true, 'Test 96');
test(checkPartitioning("mammadmam"), false, 'Test 97');
test(checkPartitioning("ababababababa"), true, 'Test 98');
test(checkPartitioning("racecarlevelmadam"), true, 'Test 99');
test(checkPartitioning("abababab"), false, 'Test 100');
test(checkPartitioning("civiccivicciviccivicciviccivic"), true, 'Test 101');
test(checkPartitioning("wasitacaroracitisawreferredder"), false, 'Test 102');
test(checkPartitioning("xxyyxyyxxyyxyyxxyyxyy"), true, 'Test 103');
test(checkPartitioning("abababa"), true, 'Test 104');
test(checkPartitioning("racecarracecarracecarracecarracecar"), true, 'Test 105');
test(checkPartitioning("referredderreferredderreferredder"), false, 'Test 106');
test(checkPartitioning("levelonevenflow"), false, 'Test 107');
test(checkPartitioning("referreferreferreferreferrefer"), true, 'Test 108');
test(checkPartitioning("deifiedrotor"), false, 'Test 109');
test(checkPartitioning("abcbaababcbcabcba"), false, 'Test 110');
test(checkPartitioning("banana"), false, 'Test 111');
test(checkPartitioning("levelonevenone"), false, 'Test 112');
test(checkPartitioning("rotorrotorrotorrotorrotor"), true, 'Test 113');
test(checkPartitioning("aabbccddeeffgg"), false, 'Test 114');
test(checkPartitioning("detartrated"), true, 'Test 115');
test(checkPartitioning("abbcbba"), true, 'Test 116');
test(checkPartitioning("aabbabba"), true, 'Test 117');
test(checkPartitioning("racecarannakayak"), true, 'Test 118');
test(checkPartitioning("amanaplanacanalpanama"), true, 'Test 119');
test(checkPartitioning("refermadamrefermadam"), false, 'Test 120');
test(checkPartitioning("racecarleveldadlevel"), false, 'Test 121');
test(checkPartitioning("abbaeaeabba"), true, 'Test 122');
test(checkPartitioning("racecarracecar"), true, 'Test 123');
test(checkPartitioning("rotorreferredder"), true, 'Test 124');
test(checkPartitioning("noonnoonnoon"), true, 'Test 125');
test(checkPartitioning("levelrefercivic"), true, 'Test 126');
test(checkPartitioning("deified"), true, 'Test 127');
test(checkPartitioning("abbaabbaabba"), true, 'Test 128');
test(checkPartitioning("levelmadamatadammadam"), false, 'Test 129');
test(checkPartitioning("abcdedcba"), true, 'Test 130');
test(checkPartitioning("rotormadamrotor"), true, 'Test 131');
test(checkPartitioning("rotorrotorrotor"), true, 'Test 132');
test(checkPartitioning("xyxzyxyxzyx"), false, 'Test 133');
test(checkPartitioning("rotorresistor"), false, 'Test 134');
test(checkPartitioning("xylophonelevel"), false, 'Test 135');
test(checkPartitioning("deifiedrotordeified"), true, 'Test 136');
test(checkPartitioning("racecarrotorrotorcarcerac"), false, 'Test 137');
test(checkPartitioning("abccbaabcba"), false, 'Test 138');
test(checkPartitioning("noonnoonnoonnoonnoonnoonnoonnoonnoonnoonnoonnoonnoon"), true, 'Test 139');
test(checkPartitioning("abcddcba"), true, 'Test 140');
test(checkPartitioning("civic"), true, 'Test 141');
test(checkPartitioning("rotor"), true, 'Test 142');
test(checkPartitioning("civicnoon"), false, 'Test 143');
test(checkPartitioning("madamatadammadam"), false, 'Test 144');
test(checkPartitioning("repaperrepaperrepaper"), true, 'Test 145');
test(checkPartitioning("rotorracecarracecar"), true, 'Test 146');
test(checkPartitioning("civicciviccivic"), true, 'Test 147');
test(checkPartitioning("rotorabanana"), false, 'Test 148');
test(checkPartitioning("aabbccddeeefff"), false, 'Test 149');
test(checkPartitioning("referdeifiedrefer"), true, 'Test 150');
test(checkPartitioning("rotorotator"), true, 'Test 151');
test(checkPartitioning("aabbccddeeffgghh"), false, 'Test 152');
test(checkPartitioning("leveltwol"), false, 'Test 153');
test(checkPartitioning("rotorresistorresistor"), false, 'Test 154');
test(checkPartitioning("levelracecarlevel"), true, 'Test 155');
test(checkPartitioning("rotordetartratedleveldeifiedrotor"), false, 'Test 156');
test(checkPartitioning("madammadammadammadammadam"), true, 'Test 157');
test(checkPartitioning("deifiedrotorlevel"), true, 'Test 158');
test(checkPartitioning("refercivicrefer"), true, 'Test 159');
test(checkPartitioning("abccbaabccbaabccbaabccbaabccba"), true, 'Test 160');
test(checkPartitioning("leveldeified"), false, 'Test 161');
test(checkPartitioning("rotorlevelmadam"), true, 'Test 162');
test(checkPartitioning("neveroddoreven"), true, 'Test 163');
test(checkPartitioning("redividerleveldeified"), true, 'Test 164');
test(checkPartitioning("refer"), true, 'Test 165');

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
