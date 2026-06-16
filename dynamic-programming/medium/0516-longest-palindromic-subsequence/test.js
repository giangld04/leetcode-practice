// Test: 516. Longest Palindromic Subsequence
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { longestPalindromeSubseq } = require("./solution");

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

console.log("\n516. Longest Palindromic Subsequence\n");

test(longestPalindromeSubseq("abcba"), 5, 'Test 1');
test(longestPalindromeSubseq("abcdefghijklmnopqrstuvwxyz"), 1, 'Test 2');
test(longestPalindromeSubseq("abcdcba"), 7, 'Test 3');
test(longestPalindromeSubseq("abcdedcba"), 9, 'Test 4');
test(longestPalindromeSubseq("noonhighnoon"), 11, 'Test 5');
test(longestPalindromeSubseq("a"), 1, 'Test 6');
test(longestPalindromeSubseq("cbbd"), 2, 'Test 7');
test(longestPalindromeSubseq("ab"), 1, 'Test 8');
test(longestPalindromeSubseq("aabaa"), 5, 'Test 9');
test(longestPalindromeSubseq("abcde"), 1, 'Test 10');
test(longestPalindromeSubseq("racecar"), 7, 'Test 11');
test(longestPalindromeSubseq("abcb"), 3, 'Test 12');
test(longestPalindromeSubseq("bcbab"), 3, 'Test 13');
test(longestPalindromeSubseq("noon"), 4, 'Test 14');
test(longestPalindromeSubseq("banana"), 5, 'Test 15');
test(longestPalindromeSubseq("deeee"), 4, 'Test 16');
test(longestPalindromeSubseq("agbdba"), 5, 'Test 17');
test(longestPalindromeSubseq("abccba"), 6, 'Test 18');
test(longestPalindromeSubseq("aaaa"), 4, 'Test 19');
test(longestPalindromeSubseq("character"), 5, 'Test 20');
test(longestPalindromeSubseq("level"), 5, 'Test 21');
test(longestPalindromeSubseq("bbbab"), 4, 'Test 22');
test(longestPalindromeSubseq("zyxwvutsrqponmlkjihgfedcba"), 1, 'Test 23');
test(longestPalindromeSubseq("abcdefg"), 1, 'Test 24');
test(longestPalindromeSubseq("aabcdefggfedcbagfedcba"), 16, 'Test 25');
test(longestPalindromeSubseq("noonappa"), 4, 'Test 26');
test(longestPalindromeSubseq("aacaagttaccagtcacaagttaacaagttaccagtcacaagttaac"), 33, 'Test 27');
test(longestPalindromeSubseq("abbdbba"), 7, 'Test 28');
test(longestPalindromeSubseq("abracadabra"), 7, 'Test 29');
test(longestPalindromeSubseq("abcabcabcabc"), 7, 'Test 30');
test(longestPalindromeSubseq("levelmadam"), 5, 'Test 31');
test(longestPalindromeSubseq("abbaababa"), 8, 'Test 32');
test(longestPalindromeSubseq("abcdaedcba"), 9, 'Test 33');
test(longestPalindromeSubseq("babbbabbbbabbb"), 12, 'Test 34');
test(longestPalindromeSubseq("tattarrattat"), 12, 'Test 35');
test(longestPalindromeSubseq("aaaabaaaa"), 9, 'Test 36');
test(longestPalindromeSubseq("noonnoon"), 8, 'Test 37');
test(longestPalindromeSubseq("abccbaabccba"), 12, 'Test 38');
test(longestPalindromeSubseq("elrmenmet"), 1, 'Test 39');
test(longestPalindromeSubseq("aabbccddeeaabbccddeeff"), 6, 'Test 40');
test(longestPalindromeSubseq("madamracecar"), 7, 'Test 41');
test(longestPalindromeSubseq("nogood"), 3, 'Test 42');
test(longestPalindromeSubseq("abcdcbazxyzyxcba"), 11, 'Test 43');
test(longestPalindromeSubseq("epelppel"), 5, 'Test 44');
test(longestPalindromeSubseq("aabaaabbabaaabbbaabaa"), 19, 'Test 45');
test(longestPalindromeSubseq("abcdaabcd"), 4, 'Test 46');
test(longestPalindromeSubseq("zazalxlkjlkjlkjljlkjljlkjlkjljlkjljlkjljlkjljlkjljlkjljlkjljlkjlkjljlkjljlkjljlkjljlkjljlkjlkjljlkjljlkjljlkjl"), 81, 'Test 47');
test(longestPalindromeSubseq("xyzabcba"), 5, 'Test 48');
test(longestPalindromeSubseq("aabacbebebe"), 5, 'Test 49');
test(longestPalindromeSubseq("kayak"), 5, 'Test 50');
test(longestPalindromeSubseq("rotorotor"), 9, 'Test 51');
test(longestPalindromeSubseq("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 52, 'Test 52');
test(longestPalindromeSubseq("zyxzyxzyxzyxzyx"), 9, 'Test 53');
test(longestPalindromeSubseq("elkfaodfnofowefwaefewfafwefawfawfawfawfawfawfawfawfawfawfaw"), 35, 'Test 54');
test(longestPalindromeSubseq("abcdefggfedcba"), 14, 'Test 55');
test(longestPalindromeSubseq("attacking"), 4, 'Test 56');
test(longestPalindromeSubseq("nursesrun"), 9, 'Test 57');
test(longestPalindromeSubseq("aabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccdd"), 26, 'Test 58');
test(longestPalindromeSubseq("aibohphobia"), 11, 'Test 59');
test(longestPalindromeSubseq("abcaebcabcbcabcbc"), 11, 'Test 60');
test(longestPalindromeSubseq("deeeeved"), 7, 'Test 61');
test(longestPalindromeSubseq("madam"), 5, 'Test 62');
test(longestPalindromeSubseq("ababababababa"), 13, 'Test 63');
test(longestPalindromeSubseq("radar"), 5, 'Test 64');
test(longestPalindromeSubseq("pwwkew"), 3, 'Test 65');
test(longestPalindromeSubseq("aabbccddeeeffggghhhhiiii"), 4, 'Test 66');
test(longestPalindromeSubseq("bcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbc"), 109, 'Test 67');
test(longestPalindromeSubseq("abcdefghikjlmnopqrstuvwxyz"), 1, 'Test 68');
test(longestPalindromeSubseq("xyzabcdedcbazyx"), 15, 'Test 69');
test(longestPalindromeSubseq("aabcbab"), 5, 'Test 70');
test(longestPalindromeSubseq("abcadacaabc"), 7, 'Test 71');
test(longestPalindromeSubseq("aabaaa"), 5, 'Test 72');
test(longestPalindromeSubseq("anana"), 5, 'Test 73');
test(longestPalindromeSubseq("aabbabbaaabbabbaaabbabbaaabbabba"), 31, 'Test 74');
test(longestPalindromeSubseq("aabbccddeeffgg"), 2, 'Test 75');
test(longestPalindromeSubseq("xyzyxzyxzyxzyxzyx"), 13, 'Test 76');
test(longestPalindromeSubseq("aabaaaabaaabaaaba"), 15, 'Test 77');
test(longestPalindromeSubseq("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 2, 'Test 78');
test(longestPalindromeSubseq("longestpalindromicsubsequence"), 9, 'Test 79');
test(longestPalindromeSubseq("zxcvbnnbvxcz"), 10, 'Test 80');
test(longestPalindromeSubseq("racecarannakayak"), 8, 'Test 81');
test(longestPalindromeSubseq("abcdefghgfedcba"), 15, 'Test 82');
test(longestPalindromeSubseq("abcdefghiijkmlkjihgfedcba"), 23, 'Test 83');
test(longestPalindromeSubseq("mimimum"), 5, 'Test 84');
test(longestPalindromeSubseq("aannnaaaa"), 7, 'Test 85');
test(longestPalindromeSubseq("repaper"), 7, 'Test 86');
test(longestPalindromeSubseq("mamadmim"), 5, 'Test 87');
test(longestPalindromeSubseq("mamad"), 3, 'Test 88');
test(longestPalindromeSubseq("abacdfgdcaba"), 11, 'Test 89');
test(longestPalindromeSubseq("abcddcba"), 8, 'Test 90');
test(longestPalindromeSubseq("civic"), 5, 'Test 91');
test(longestPalindromeSubseq("rotor"), 5, 'Test 92');
test(longestPalindromeSubseq("abcdefghihgfedcba"), 17, 'Test 93');
test(longestPalindromeSubseq("intersubjective"), 7, 'Test 94');
test(longestPalindromeSubseq("lrfipxxl"), 4, 'Test 95');
test(longestPalindromeSubseq("mississippi"), 7, 'Test 96');
test(longestPalindromeSubseq("madaminnadamsandnoon"), 10, 'Test 97');
test(longestPalindromeSubseq("forgeeksskeegfor"), 12, 'Test 98');
test(longestPalindromeSubseq("aaaaabbbbbccccc"), 5, 'Test 99');
test(longestPalindromeSubseq("refer"), 5, 'Test 100');

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
