// Test: 3138. Minimum Length Of Anagram Concatenation
// 73 test cases from LeetCodeDataset
// Run: node test.js

const { minAnagramLength } = require("./solution");

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

console.log("\n3138. Minimum Length Of Anagram Concatenation\n");

test(minAnagramLength("zzzzzzzzz"), 1, 'Test 1');
test(minAnagramLength("abcdefghijklmnopqrstuvwxyz"), 26, 'Test 2');
test(minAnagramLength("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 3');
test(minAnagramLength("abababab"), 2, 'Test 4');
test(minAnagramLength("a"), 1, 'Test 5');
test(minAnagramLength("abcabcabcabc"), 3, 'Test 6');
test(minAnagramLength("zzzzzzzzzzzzzzzzzzzz"), 1, 'Test 7');
test(minAnagramLength("aa"), 1, 'Test 8');
test(minAnagramLength("xyzxyzxyz"), 3, 'Test 9');
test(minAnagramLength("abba"), 2, 'Test 10');
test(minAnagramLength("abcdeedcba"), 5, 'Test 11');
test(minAnagramLength("abcdabcdabcd"), 4, 'Test 12');
test(minAnagramLength("abacabadabacabad"), 8, 'Test 13');
test(minAnagramLength("aabbccddeeffgghh"), 16, 'Test 14');
test(minAnagramLength("aaaa"), 1, 'Test 15');
test(minAnagramLength("abcbcacabbaccba"), 3, 'Test 16');
test(minAnagramLength("aabbcc"), 6, 'Test 17');
test(minAnagramLength("cdef"), 4, 'Test 18');
test(minAnagramLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 52, 'Test 19');
test(minAnagramLength("xyzxyzxyzxyz"), 3, 'Test 20');
test(minAnagramLength("abcdabcdabcdabcd"), 4, 'Test 21');
test(minAnagramLength("abcdefg"), 7, 'Test 22');
test(minAnagramLength("thisisaverylongstringthatwillrequireauniquestringtobeformedanditshouldbechecked"), 79, 'Test 23');
test(minAnagramLength("abacabadabacabadabacabadabacaba"), 31, 'Test 24');
test(minAnagramLength("abracadabrabracadabrabracadabrabracadabrabracadabraca"), 53, 'Test 25');
test(minAnagramLength("ninnininnininnininininininininininininininininininininininininin"), 64, 'Test 26');
test(minAnagramLength("abcdefghijabcdefghijabcdefghijabcdefghij"), 10, 'Test 27');
test(minAnagramLength("mnopqrstmnopqrstmnopqrstmnopqrstmnopqrstmnopqrstmnopqrst"), 8, 'Test 28');
test(minAnagramLength("abcabcabcabcaa"), 7, 'Test 29');
test(minAnagramLength("tomatotomatotomatotomatotomatotomatotomatotomatotomato"), 6, 'Test 30');
test(minAnagramLength("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 31');
test(minAnagramLength("abcabcabcabcabcabcabcabcabcabc"), 3, 'Test 32');
test(minAnagramLength("xyxxyxyxxyxxyxyxxyxxyxyxxyxxyxyxxyxxyxyxxyxxyxyxxyxxyxyxxyxxyxyxxyxxyxyx"), 8, 'Test 33');
test(minAnagramLength("mamamamamamamamamamamamamamamamamamamamamama"), 2, 'Test 34');
test(minAnagramLength("abracadabraacarbadrabracadabraacarbadrabracadabraacarbadrabracadabra"), 68, 'Test 35');
test(minAnagramLength("racecarracecarracecar"), 7, 'Test 36');
test(minAnagramLength("shortyetuniquestringwithanagramstestcase"), 40, 'Test 37');
test(minAnagramLength("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm"), 26, 'Test 38');
test(minAnagramLength("lollipoplollipoplollipoplollipoplollipoplollipoplollipoplollipop"), 8, 'Test 39');
test(minAnagramLength("abcdefgabcdefgabcdefgabcdefgabcdefgabcdefg"), 7, 'Test 40');
test(minAnagramLength("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 4, 'Test 41');
test(minAnagramLength("abcdabcdabcdabcdabcdabcdabcdabcd"), 4, 'Test 42');
test(minAnagramLength("mnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 66, 'Test 43');
test(minAnagramLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzabcdef"), 58, 'Test 44');
test(minAnagramLength("abcdefgabcdefgabcdefgabcdefg"), 7, 'Test 45');
test(minAnagramLength("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 46');
test(minAnagramLength("mnopqrstmnopqrstmnopqrstmnopqrstmnopqrstmnopqrstmnopqrstmnopqrstmnopqrstu"), 73, 'Test 47');
test(minAnagramLength("ppppeeeaaaallllllaaaabbbbcccdddd"), 32, 'Test 48');
test(minAnagramLength("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 26, 'Test 49');
test(minAnagramLength("abcdefghijklmnopqrstuvwxyza"), 27, 'Test 50');
test(minAnagramLength("abcdefghijabcdefghijabcdefghij"), 10, 'Test 51');
test(minAnagramLength("zyxzyxzyxzyxzyx"), 3, 'Test 52');
test(minAnagramLength("elephantelephantelephantelephantelephantelephant"), 8, 'Test 53');
test(minAnagramLength("abcdefabcdefabcdefabcdefabcdefabcdefabcdef"), 6, 'Test 54');
test(minAnagramLength("xyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyz"), 63, 'Test 55');
test(minAnagramLength("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"), 10, 'Test 56');
test(minAnagramLength("aaabbbcccdddaa"), 14, 'Test 57');
test(minAnagramLength("mmnnooppqqrrssttuuvvwwxxyyzz"), 28, 'Test 58');
test(minAnagramLength("aabbaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 56, 'Test 59');
test(minAnagramLength("qqwweerrttyyuuiiooppaassddffgg"), 30, 'Test 60');
test(minAnagramLength("abcabcabcabccbaabccbaabc"), 3, 'Test 61');
test(minAnagramLength("xyzxyzxyzxyzxyz"), 3, 'Test 62');
test(minAnagramLength("abcdefghijlmnopqrstuvwxyzmnopqrstuvwxyzabcdefghij"), 49, 'Test 63');
test(minAnagramLength("aaaaabbbbccccddddeeeeeffffffggggghhhhiiiiijjjjjkkkkklllllmmmmmnnnnnooooo"), 72, 'Test 64');
test(minAnagramLength("mississippimississippi"), 11, 'Test 65');
test(minAnagramLength("mnopqrstmnopqrstmnopqrstmnopqrst"), 8, 'Test 66');
test(minAnagramLength("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 4, 'Test 67');
test(minAnagramLength("abcabcabcabcabcabcabcabcabcabcabcabcabc"), 3, 'Test 68');
test(minAnagramLength("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 69');
test(minAnagramLength("abcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijkabcdefghijk"), 11, 'Test 70');
test(minAnagramLength("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 71');
test(minAnagramLength("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 72');
test(minAnagramLength("bananaananabanana"), 17, 'Test 73');

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
