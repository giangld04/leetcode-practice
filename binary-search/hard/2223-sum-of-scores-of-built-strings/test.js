// Test: 2223. Sum Of Scores Of Built Strings
// 123 test cases from LeetCodeDataset
// Run: node test.js

const { sumScores } = require("./solution");

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

console.log("\n2223. Sum Of Scores Of Built Strings\n");

test(sumScores("xyzxyzxyz"), 18, 'Test 1');
test(sumScores("abcabcabc"), 18, 'Test 2');
test(sumScores("aabbcc"), 7, 'Test 3');
test(sumScores("abacabadabacaba"), 32, 'Test 4');
test(sumScores("zzzzz"), 15, 'Test 5');
test(sumScores("abcdefghijklmnopqrstuvwxyz"), 26, 'Test 6');
test(sumScores("abacaba"), 12, 'Test 7');
test(sumScores("babab"), 9, 'Test 8');
test(sumScores("azbazbzaz"), 14, 'Test 9');
test(sumScores("abcde"), 5, 'Test 10');
test(sumScores("zazazaz"), 16, 'Test 11');
test(sumScores("aaaaa"), 15, 'Test 12');
test(sumScores("aabbaabb"), 14, 'Test 13');
test(sumScores("zyxwvutsrqponmlkjihgfedcba"), 26, 'Test 14');
test(sumScores("a"), 1, 'Test 15');
test(sumScores("abcdefg"), 7, 'Test 16');
test(sumScores("aabbccddeeff"), 13, 'Test 17');
test(sumScores("aaaaaaaaaabbbbbbbbbb"), 65, 'Test 18');
test(sumScores("abacabadabacabadabacaba"), 60, 'Test 19');
test(sumScores("abcdefgfedcbabcdefgfedcbabcdefgfedcbabcdefgfedcbabcdefgfedcb"), 180, 'Test 20');
test(sumScores("xyxyxyxyxyxyxyxy"), 72, 'Test 21');
test(sumScores("zxyzyxzyxzyxzyxzyxzyxzyx"), 31, 'Test 22');
test(sumScores("aaaabbbbccccaaaabbbbcccc"), 48, 'Test 23');
test(sumScores("mississippimississippimississippimississippi"), 110, 'Test 24');
test(sumScores("aaaaaaaaaabaaaa"), 70, 'Test 25');
test(sumScores("rotorrotor"), 17, 'Test 26');
test(sumScores("abracadabra"), 18, 'Test 27');
test(sumScores("abcabcabcabc"), 30, 'Test 28');
test(sumScores("abcabcabcabcabcd"), 46, 'Test 29');
test(sumScores("zzzzzzzzzzzzzzz"), 120, 'Test 30');
test(sumScores("zzyyxxwwvvuuttssrrqqppoonnmmllkkiijjhhggffeeddccbbbaaa"), 55, 'Test 31');
test(sumScores("aaaaaaaaaabaaaaaaaaab"), 111, 'Test 32');
test(sumScores("abcabcabcabcabcabca"), 70, 'Test 33');
test(sumScores("abcabcabcabca"), 35, 'Test 34');
test(sumScores("abcdabcdabcd"), 24, 'Test 35');
test(sumScores("abacabadabacabad"), 34, 'Test 36');
test(sumScores("abababababababababababababababab"), 272, 'Test 37');
test(sumScores("aaaaabbbbccccdddd"), 27, 'Test 38');
test(sumScores("aaaaabbbbbccccdddd"), 28, 'Test 39');
test(sumScores("aaaaabbbbb"), 20, 'Test 40');
test(sumScores("aaaaabbbbccccddddeeeee"), 32, 'Test 41');
test(sumScores("abcabcabcabcabcabcabcabcabcabcabcabc"), 234, 'Test 42');
test(sumScores("abcdefedcbafedcbafedcba"), 26, 'Test 43');
test(sumScores("mississippimississippi"), 33, 'Test 44');
test(sumScores("abcabcabcabcabcabcabcabcabcabcabcabcabc"), 273, 'Test 45');
test(sumScores("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 630, 'Test 46');
test(sumScores("aabbaabbaabbaabb"), 44, 'Test 47');
test(sumScores("bananaananabanana"), 23, 'Test 48');
test(sumScores("abcabcabcabcabcabcab"), 77, 'Test 49');
test(sumScores("abcabcabcabcabcabcabc"), 84, 'Test 50');
test(sumScores("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 612, 'Test 51');
test(sumScores("qwertyuiopqwertyuiop"), 30, 'Test 52');
test(sumScores("aabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccdd"), 145, 'Test 53');
test(sumScores("abcdefghjihgfedcba"), 19, 'Test 54');
test(sumScores("acabacabacabacabacabacabacabacabacabacab"), 230, 'Test 55');
test(sumScores("abcabcabcabcabcabcabcabcabcabc"), 165, 'Test 56');
test(sumScores("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 360, 'Test 57');
test(sumScores("abcabcabcab"), 26, 'Test 58');
test(sumScores("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 408, 'Test 59');
test(sumScores("qwertyuiopasdfghjklzxcvbnm"), 26, 'Test 60');
test(sumScores("abcdefedcbafedcbafedcbafedcbafedcbafedcbafedcbafedcbafedcbafedcba"), 75, 'Test 61');
test(sumScores("abcdeedcbaabcdeedcba"), 32, 'Test 62');
test(sumScores("ababababababab"), 56, 'Test 63');
test(sumScores("abcdeedcba"), 11, 'Test 64');
test(sumScores("abababababababab"), 72, 'Test 65');
test(sumScores("noon"), 5, 'Test 66');
test(sumScores("abababababab"), 42, 'Test 67');
test(sumScores("ababababababababab"), 90, 'Test 68');
test(sumScores("abcabcabcabcabcabc"), 63, 'Test 69');
test(sumScores("aabbccddeeffgghhii"), 19, 'Test 70');
test(sumScores("abcdabcdabcdabcd"), 40, 'Test 71');
test(sumScores("level"), 6, 'Test 72');
test(sumScores("levellevellevel"), 33, 'Test 73');
test(sumScores("abcdabcdabcdabcdabcd"), 60, 'Test 74');
test(sumScores("abcdefghijk"), 11, 'Test 75');
test(sumScores("aaaaaaaaaaa"), 66, 'Test 76');
test(sumScores("qwertyuiopqwertyuiopqwertyuiopqwertyuiop"), 100, 'Test 77');
test(sumScores("bananaananab"), 13, 'Test 78');
test(sumScores("zzzzzzzzzzzzzzzzzzzz"), 210, 'Test 79');
test(sumScores("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 666, 'Test 80');
test(sumScores("abcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 315, 'Test 81');
test(sumScores("banana"), 6, 'Test 82');
test(sumScores("zzyzxzyzxzyzxzyz"), 24, 'Test 83');
test(sumScores("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy"), 272, 'Test 84');
test(sumScores("zxyzyxzyxzyxzyxzyx"), 23, 'Test 85');
test(sumScores("abracadabraabracadabra"), 47, 'Test 86');
test(sumScores("abcdedcbaabcdedcba"), 29, 'Test 87');
test(sumScores("abcdefghij"), 10, 'Test 88');
test(sumScores("abcdedcbafedcbafedcbafedcbafedcba"), 38, 'Test 89');
test(sumScores("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 53, 'Test 90');
test(sumScores("aabbccddeeffgghhiijj"), 21, 'Test 91');
test(sumScores("aabbccddeeffaabbccddeeff"), 38, 'Test 92');
test(sumScores("aaaaaabbccddeeffgg"), 33, 'Test 93');
test(sumScores("aaaaabbbbbaaaaa"), 40, 'Test 94');
test(sumScores("racecarracecar"), 23, 'Test 95');
test(sumScores("abacabadabacabadabacabad"), 63, 'Test 96');
test(sumScores("deified"), 8, 'Test 97');
test(sumScores("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbb"), 525, 'Test 98');
test(sumScores("aaaaaabbbbbccccc"), 31, 'Test 99');
test(sumScores("aaaaaabbbbccccdddd"), 33, 'Test 100');
test(sumScores("abcbaabcbaabcba"), 33, 'Test 101');
test(sumScores("ababababcabababa"), 44, 'Test 102');
test(sumScores("abcdabcdbabc"), 19, 'Test 103');
test(sumScores("abababababababababababab"), 156, 'Test 104');
test(sumScores("ababababab"), 30, 'Test 105');
test(sumScores("abacabadabacabadabacab"), 55, 'Test 106');
test(sumScores("civic"), 6, 'Test 107');
test(sumScores("rotor"), 6, 'Test 108');
test(sumScores("racecar"), 8, 'Test 109');
test(sumScores("abcabcabcabcabcabcabcabcabc"), 135, 'Test 110');
test(sumScores("abcdefghijabcdefghij"), 30, 'Test 111');
test(sumScores("zazbzcbzazbzcb"), 25, 'Test 112');
test(sumScores("abcabcabcabcabcabcabcabc"), 108, 'Test 113');
test(sumScores("pneumonoultramicroscopicsilicovolcanoconiosis"), 46, 'Test 114');
test(sumScores("abcabcabcabcabcabcabcabcabcabcabc"), 198, 'Test 115');
test(sumScores("abcabcabcabcabcab"), 57, 'Test 116');
test(sumScores("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 2211, 'Test 117');
test(sumScores("abcdefabcdeabcdeabc"), 32, 'Test 118');
test(sumScores("mississippi"), 11, 'Test 119');
test(sumScores("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzz"), 71, 'Test 120');
test(sumScores("hellohellohellohello"), 50, 'Test 121');
test(sumScores("abcabcabcabcabc"), 45, 'Test 122');
test(sumScores("xyzzzyxyzzzyxyzzzyxyzzzy"), 60, 'Test 123');

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
