// Test: 2002. Maximum Product Of The Length Of Two Palindromic Subsequences
// 86 test cases from LeetCodeDataset
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

console.log("\n2002. Maximum Product Of The Length Of Two Palindromic Subsequences\n");

test(maxProduct("xyzyx"), 6, 'Test 1');
test(maxProduct("aabbcc"), 4, 'Test 2');
test(maxProduct("aaaa"), 4, 'Test 3');
test(maxProduct("accbcaxxcxx"), 25, 'Test 4');
test(maxProduct("madam"), 6, 'Test 5');
test(maxProduct("noon"), 4, 'Test 6');
test(maxProduct("racecar"), 12, 'Test 7');
test(maxProduct("deified"), 12, 'Test 8');
test(maxProduct("noonhighnoon"), 35, 'Test 9');
test(maxProduct("abcdcba"), 12, 'Test 10');
test(maxProduct("abacaba"), 12, 'Test 11');
test(maxProduct("level"), 6, 'Test 12');
test(maxProduct("abcdedcba"), 20, 'Test 13');
test(maxProduct("abcde"), 1, 'Test 14');
test(maxProduct("rotor"), 6, 'Test 15');
test(maxProduct("leetcodecom"), 9, 'Test 16');
test(maxProduct("bb"), 1, 'Test 17');
test(maxProduct("refer"), 6, 'Test 18');
test(maxProduct("palindromeabcdcba"), 20, 'Test 19');
test(maxProduct("aaabbbccc"), 9, 'Test 20');
test(maxProduct("xxyyzzxxyyzz"), 36, 'Test 21');
test(maxProduct("xyxzyxzyxzyxzyxzyxzyx"), Execution timed out, 'Test 22');
test(maxProduct("noonnoonnoon"), 36, 'Test 23');
test(maxProduct("abbaabbababaabbabababa"), Execution timed out, 'Test 24');
test(maxProduct("repaper"), 12, 'Test 25');
test(maxProduct("abbaabbaabba"), 36, 'Test 26');
test(maxProduct("xyzzyxzyxz"), 25, 'Test 27');
test(maxProduct("aababababab"), 30, 'Test 28');
test(maxProduct("xyzyzyzyzyzy"), 30, 'Test 29');
test(maxProduct("racecarlevelmadam"), 45, 'Test 30');
test(maxProduct("aabbbbaa"), 16, 'Test 31');
test(maxProduct("abababa"), 12, 'Test 32');
test(maxProduct("babadab"), 9, 'Test 33');
test(maxProduct("referrefer"), 25, 'Test 34');
test(maxProduct("rotorrotor"), 25, 'Test 35');
test(maxProduct("abracadabra"), 25, 'Test 36');
test(maxProduct("racecarlevelmadamracecar"), Execution timed out, 'Test 37');
test(maxProduct("abacdfgdcaba"), 35, 'Test 38');
test(maxProduct("mammam"), 9, 'Test 39');
test(maxProduct("noonbedalabamoon"), 35, 'Test 40');
test(maxProduct("levelonelevel"), 35, 'Test 41');
test(maxProduct("abccbaabcba"), 30, 'Test 42');
test(maxProduct("redderredder"), 36, 'Test 43');
test(maxProduct("redivider"), 20, 'Test 44');
test(maxProduct("zzzyzzyyzzyzz"), 42, 'Test 45');
test(maxProduct("racecarabc"), 15, 'Test 46');
test(maxProduct("noonabbadammadam"), 32, 'Test 47');
test(maxProduct("noonnoon"), 16, 'Test 48');
test(maxProduct("abcdzdcba"), 20, 'Test 49');
test(maxProduct("abcdefghihgfedcba"), 72, 'Test 50');
test(maxProduct("levelup"), 6, 'Test 51');
test(maxProduct("rotorositor"), 25, 'Test 52');
test(maxProduct("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), null, 'Test 53');
test(maxProduct("madamracecarmadam"), 72, 'Test 54');
test(maxProduct("abcddcbaabcddcba"), 64, 'Test 55');
test(maxProduct("abcdefgfedcba"), 42, 'Test 56');
test(maxProduct("zyxzyxzyxzyxzyx"), 49, 'Test 57');
test(maxProduct("zzzzzzzzzzzz"), 36, 'Test 58');
test(maxProduct("xyzyxzyzyx"), 25, 'Test 59');
test(maxProduct("deeee"), 4, 'Test 60');
test(maxProduct("noonappaloopnoon"), 56, 'Test 61');
test(maxProduct("abcabcabcabcabcabc"), 81, 'Test 62');
test(maxProduct("abcbaabcba"), 25, 'Test 63');
test(maxProduct("aabbbaaaabbbb"), 42, 'Test 64');
test(maxProduct("aabbccddeeffgg"), 4, 'Test 65');
test(maxProduct("aabbccddeeefff"), 9, 'Test 66');
test(maxProduct("deeeevee"), 12, 'Test 67');
test(maxProduct("aaabaaa"), 12, 'Test 68');
test(maxProduct("aabbccddeeff"), 4, 'Test 69');
test(maxProduct("levellevel"), 25, 'Test 70');
test(maxProduct("madamimadam"), 30, 'Test 71');
test(maxProduct("mississippi"), 24, 'Test 72');
test(maxProduct("madamatadammadamada"), 81, 'Test 73');
test(maxProduct("xyzzazxy"), 15, 'Test 74');
test(maxProduct("xyxxyxyxyxyx"), 35, 'Test 75');
test(maxProduct("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), null, 'Test 76');
test(maxProduct("levelracecarlevel"), 72, 'Test 77');
test(maxProduct("programming"), 12, 'Test 78');
test(maxProduct("zyxzyxzyxzyx"), 36, 'Test 79');
test(maxProduct("levelracecara"), 35, 'Test 80');
test(maxProduct("zzzzzyzzzz"), 25, 'Test 81');
test(maxProduct("racecarannakayak"), 40, 'Test 82');
test(maxProduct("aabbaabbaa"), 25, 'Test 83');
test(maxProduct("xyzabcdcba"), 12, 'Test 84');
test(maxProduct("optimization"), 15, 'Test 85');
test(maxProduct("abccbaabc"), 15, 'Test 86');

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
