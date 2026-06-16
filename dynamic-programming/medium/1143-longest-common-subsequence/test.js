// Test: 1143. Longest Common Subsequence
// 146 test cases from LeetCodeDataset
// Run: node test.js

const { longestCommonSubsequence } = require("./solution");

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

console.log("\n1143. Longest Common Subsequence\n");

test(longestCommonSubsequence("a", "b"), 0, 'Test 1');
test(longestCommonSubsequence("xyz", "zyx"), 1, 'Test 2');
test(longestCommonSubsequence("ezupkr", "ubmrapg"), 2, 'Test 3');
test(longestCommonSubsequence("abcde", "ace"), 3, 'Test 4');
test(longestCommonSubsequence("abc", "def"), 0, 'Test 5');
test(longestCommonSubsequence("aabcc", "dbbca"), 2, 'Test 6');
test(longestCommonSubsequence("programming", "gaming"), 6, 'Test 7');
test(longestCommonSubsequence("ylqpfxxqy", "wxqxalnnsow"), 2, 'Test 8');
test(longestCommonSubsequence("pqr", "stu"), 0, 'Test 9');
test(longestCommonSubsequence("abcdgh", "aedfhr"), 3, 'Test 10');
test(longestCommonSubsequence("hofubmnyg", "hvmpywxck"), 3, 'Test 11');
test(longestCommonSubsequence("abcdef", "z"), 0, 'Test 12');
test(longestCommonSubsequence("mhunuzqrkz", "dhlmfpnqjk"), 4, 'Test 13');
test(longestCommonSubsequence("abcdefg", "abdfg"), 5, 'Test 14');
test(longestCommonSubsequence("a", "a"), 1, 'Test 15');
test(longestCommonSubsequence("abc", ""), 0, 'Test 16');
test(longestCommonSubsequence("xyz", "abc"), 0, 'Test 17');
test(longestCommonSubsequence("", "abc"), 0, 'Test 18');
test(longestCommonSubsequence("psnw", "vozbbmloqjbpbprqs"), 2, 'Test 19');
test(longestCommonSubsequence("abcxyz", "xyzabc"), 3, 'Test 20');
test(longestCommonSubsequence("abc", "abc"), 3, 'Test 21');
test(longestCommonSubsequence("abcdef", "zabcf"), 4, 'Test 22');
test(longestCommonSubsequence("oxcpqrsvwf", "shmtulqrypy"), 2, 'Test 23');
test(longestCommonSubsequence("", ""), 0, 'Test 24');
test(longestCommonSubsequence("abcdxyz", "xyzabcd"), 4, 'Test 25');
test(longestCommonSubsequence("aaaa", "aa"), 2, 'Test 26');
test(longestCommonSubsequence("aggtab", "gxtxayb"), 4, 'Test 27');
test(longestCommonSubsequence("abcxyzabc", "xyzabcxyz"), 6, 'Test 28');
test(longestCommonSubsequence("aaaaaa", "aaaaaa"), 6, 'Test 29');
test(longestCommonSubsequence("abacdfgdcaba", "abacdgfdcaba"), 11, 'Test 30');
test(longestCommonSubsequence("aabccbb", "dbbcbab"), 4, 'Test 31');
test(longestCommonSubsequence("longerstringone", "short"), 3, 'Test 32');
test(longestCommonSubsequence("mississippi", "pississippi"), 10, 'Test 33');
test(longestCommonSubsequence("abracadabra", "avadakedavra"), 7, 'Test 34');
test(longestCommonSubsequence("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"), 0, 'Test 35');
test(longestCommonSubsequence("aquickbrownfoxjumpsoverthelazydog", "lazydog"), 7, 'Test 36');
test(longestCommonSubsequence("abcdefghij", "acegik"), 5, 'Test 37');
test(longestCommonSubsequence("abcdpqrs", "efghijkl"), 0, 'Test 38');
test(longestCommonSubsequence("aaaabbbbccccddddeeeeffffgggghhhhiiii", "abcdefghi"), 9, 'Test 39');
test(longestCommonSubsequence("xyzxyzxyz", "zyxzyxzyx"), 5, 'Test 40');
test(longestCommonSubsequence("zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyz"), 1, 'Test 41');
test(longestCommonSubsequence("abcdabcdabcdabcdabcdabcdabcdabcd", "zyxwvutsrqponmlkjihgfedcba"), 4, 'Test 42');
test(longestCommonSubsequence("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), 1, 'Test 43');
test(longestCommonSubsequence("longestcommonsubsequence", "shortestsub"), 7, 'Test 44');
test(longestCommonSubsequence("mississippi", "ississippi"), 10, 'Test 45');
test(longestCommonSubsequence("aaaaabaaaabaaaabaaaa", "bbbaabbaabbaabbaab"), 11, 'Test 46');
test(longestCommonSubsequence("abcdeabcdeabcde", "deabcdea"), 8, 'Test 47');
test(longestCommonSubsequence("interpersonal", "personality"), 8, 'Test 48');
test(longestCommonSubsequence("aaaaabbbb", "ababababab"), 6, 'Test 49');
test(longestCommonSubsequence("abcdefg", "hijklmn"), 0, 'Test 50');
test(longestCommonSubsequence("pqrstuvwxyzabcdefghijklmno", "mnopqrstuvwxyzabcdefghijkl"), 23, 'Test 51');
test(longestCommonSubsequence("pwwkew", "wkepwkew"), 5, 'Test 52');
test(longestCommonSubsequence("aaaaaaab", "bbbbbaaa"), 3, 'Test 53');
test(longestCommonSubsequence("abcdexyz", "zyxeabcd"), 4, 'Test 54');
test(longestCommonSubsequence("abcdefghij", "0123456789abcdefghij"), 10, 'Test 55');
test(longestCommonSubsequence("thisisaverylongstring", "shisivaverylongstring"), 19, 'Test 56');
test(longestCommonSubsequence("acbdefgh", "bdfg"), 4, 'Test 57');
test(longestCommonSubsequence("abc", "cba"), 1, 'Test 58');
test(longestCommonSubsequence("abacabadabacaba", "abacabadabacab"), 14, 'Test 59');
test(longestCommonSubsequence("abcabcabcabcabcabcabcabcabcabcabc", "abcabcabcabc"), 12, 'Test 60');
test(longestCommonSubsequence("aaaabbbbcccc", "bbcccaabbbccc"), 8, 'Test 61');
test(longestCommonSubsequence("aaaaabbbbbbccccccdddddeeeeeeeeeffffff", "dddddeeeeeeeeeccccccbbbbaaaaaa"), 14, 'Test 62');
test(longestCommonSubsequence("aaaaaaaaaa", "aaaaaaaaaa"), 10, 'Test 63');
test(longestCommonSubsequence("ab", "ba"), 1, 'Test 64');
test(longestCommonSubsequence("aaaaaaabbbbbbbccccccdddddd", "abcde"), 4, 'Test 65');
test(longestCommonSubsequence("ababcabcabc", "abcabcabc"), 9, 'Test 66');
test(longestCommonSubsequence("abcdefghijk", "lmnopqrstuvwxyz"), 0, 'Test 67');
test(longestCommonSubsequence("aabccba", "abcabcabc"), 5, 'Test 68');
test(longestCommonSubsequence("abcdefghijlkmnopqrstuvwxyz", "zxywvutsrqponmlkjihgfedcba"), 2, 'Test 69');
test(longestCommonSubsequence("repeatedrepeated", "repeated"), 8, 'Test 70');
test(longestCommonSubsequence("abcdefghij", "acegikmopq"), 5, 'Test 71');
test(longestCommonSubsequence("aabbccddeeffgghhiijj", "jjiihhggffeeddccbbaa"), 2, 'Test 72');
test(longestCommonSubsequence("supercalifragilisticexpialidocious", "superfragilistic"), 16, 'Test 73');
test(longestCommonSubsequence("aaaaaaabbbbbbbcccccc", "bbbbbbccccccdddddd"), 12, 'Test 74');
test(longestCommonSubsequence("abcdefghigklmnopqrstuvwxyz", "zzzyyxxwwvvuuttrrqqppoonnmmllkkjjiihhggeeffddeeccbbbaa"), 2, 'Test 75');
test(longestCommonSubsequence("abracadabraabracadabra", "alacazamalacazam"), 10, 'Test 76');
test(longestCommonSubsequence("abcabcabcabcabcabcabcabcabcabc", "abcabcabc"), 9, 'Test 77');
test(longestCommonSubsequence("abababababababababababababababab", "babababababababababababababababa"), 31, 'Test 78');
test(longestCommonSubsequence("randomsequence", "sequence"), 8, 'Test 79');
test(longestCommonSubsequence("abcdeabcdeabcde", "cdecdecdecde"), 9, 'Test 80');
test(longestCommonSubsequence("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "mnopqrstuvwxyz"), 14, 'Test 81');
test(longestCommonSubsequence("aaaaaaabaaaaaa", "bbbbbbbbaaaaaa"), 7, 'Test 82');
test(longestCommonSubsequence("aaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaa"), 26, 'Test 83');
test(longestCommonSubsequence("abcdeabcdeabcde", "deabcdeabcdeabcdeab"), 15, 'Test 84');
test(longestCommonSubsequence("abcdexyz", "xyzabcd"), 4, 'Test 85');
test(longestCommonSubsequence("aaaabbbb", "bbaaaa"), 4, 'Test 86');
test(longestCommonSubsequence("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 29, 'Test 87');
test(longestCommonSubsequence("pneumonoultramicroscopicsilicovolcanoconiosis", "ultramicroscopically"), 18, 'Test 88');
test(longestCommonSubsequence("dynamicprogramming", "rhythmprogramming"), 13, 'Test 89');
test(longestCommonSubsequence("aaaa", "bbbb"), 0, 'Test 90');
test(longestCommonSubsequence("abcdpqrsabcd", "dcbapqrscba"), 6, 'Test 91');
test(longestCommonSubsequence("longestcommonsubsequence", "shortestsubsequence"), 15, 'Test 92');
test(longestCommonSubsequence("abacabadabacaba", "abacabadabacaba"), 15, 'Test 93');
test(longestCommonSubsequence("findlongestcommonsubsequence", "longestsubsequence"), 18, 'Test 94');
test(longestCommonSubsequence("xyxzyzyxyzyx", "zyzyxzyxzyzyxzyzyx"), 12, 'Test 95');
test(longestCommonSubsequence("abcdefghijklnmopqrstuvwxyz", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 25, 'Test 96');
test(longestCommonSubsequence("abcdefghigklmnopqrstuvwxyz", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 25, 'Test 97');
test(longestCommonSubsequence("abcde", ""), 0, 'Test 98');
test(longestCommonSubsequence("pneumonoultramicroscopicsilicovolcanoconiosis", "supercalifragilisticexpialidocious"), 17, 'Test 99');
test(longestCommonSubsequence("papiermuh", "leidermuz"), 5, 'Test 100');
test(longestCommonSubsequence("abcdabcdabcdabcdabcdabcdabcdabcd", "cdabcdabcdabcdabcdabcdabcdabcdabc"), 31, 'Test 101');
test(longestCommonSubsequence("pwwkew", "wkep"), 3, 'Test 102');
test(longestCommonSubsequence("xyxzyxyxzyx", "zyxzyxzyxzyx"), 10, 'Test 103');
test(longestCommonSubsequence("xyzzaz", "yza"), 3, 'Test 104');
test(longestCommonSubsequence("commonsubstring", "substring"), 9, 'Test 105');
test(longestCommonSubsequence("abcde", "edcba"), 1, 'Test 106');
test(longestCommonSubsequence("aabbaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "ababababcabcacacacaddaddaeaeaeafaafagagahaiai"), 20, 'Test 107');
test(longestCommonSubsequence("abcdabcdabcd", "dcbaabcd"), 6, 'Test 108');
test(longestCommonSubsequence("", "abcde"), 0, 'Test 109');
test(longestCommonSubsequence("aaaaabaaaacaaaaadaaaaa", "aaabaaaaaaacaaaaaa"), 17, 'Test 110');
test(longestCommonSubsequence("thisisaverylongstringthatshouldtestthelimits", "stringthatshouldtest"), 20, 'Test 111');
test(longestCommonSubsequence("mississippi", "issipi"), 6, 'Test 112');
test(longestCommonSubsequence("longestcommonsubsequence", "shortcommonsequence"), 16, 'Test 113');
test(longestCommonSubsequence("abcdabcdabcd", "ddd"), 3, 'Test 114');
test(longestCommonSubsequence("longestcommonsubsequence", "commonsubsequences"), 17, 'Test 115');
test(longestCommonSubsequence("longstringwithnocommonsubsequence", "anotherlongstringwithoutcommonsubsequence"), 32, 'Test 116');
test(longestCommonSubsequence("abcdefghijabcdefghijabcdefghij", "abcdefghijabcdefghij"), 20, 'Test 117');
test(longestCommonSubsequence("lclcl", "clcl"), 4, 'Test 118');
test(longestCommonSubsequence("thequickbrownfoxjumpsoverthelazydog", "quickbrownfoxjumpsoverthelazydo"), 31, 'Test 119');
test(longestCommonSubsequence("longestcommonsubsequenceproblem", "programmingproblemsolving"), 12, 'Test 120');
test(longestCommonSubsequence("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "azbycxdwevfugthsirjqkplohnmgpfnoreqmtpslknjihgfedcba"), 17, 'Test 121');
test(longestCommonSubsequence("abcabcabcabc", "cbacbacbacba"), 7, 'Test 122');
test(longestCommonSubsequence("abcdeabcdeabcdeabcdeabcdeabcdeabcde", "abcdeabcde"), 10, 'Test 123');
test(longestCommonSubsequence("xyzxyzxyzxyz", "zyxzyxzyxzyx"), 7, 'Test 124');
test(longestCommonSubsequence("aabaaaabaaaaabaaaabaaabaaa", "abaababaabaaaaabaaabaaaaabaaaab"), 24, 'Test 125');
test(longestCommonSubsequence("qwertypasdfghjklzxcvbnm", "qwertyuiopasdfghjklzxcvbnm"), 23, 'Test 126');
test(longestCommonSubsequence("aabbccddeeff", "abcdefabcdef"), 7, 'Test 127');
test(longestCommonSubsequence("abcxyzdefghijklmnopqrstuvwxyz", "xyzabcghijklmnopqrstuvwxyzdef"), 23, 'Test 128');
test(longestCommonSubsequence("abcdabcdabcdabcd", "abcabcabcabc"), 12, 'Test 129');
test(longestCommonSubsequence("thisisatestcase", "testingthestcase"), 11, 'Test 130');
test(longestCommonSubsequence("abacabadabacaba", "cabacabacabaca"), 12, 'Test 131');
test(longestCommonSubsequence("dynamicprogramming", "longestincreasingsubsequence"), 8, 'Test 132');
test(longestCommonSubsequence("abcdefg", "xyz"), 0, 'Test 133');
test(longestCommonSubsequence("1234567890", "0987654321"), 1, 'Test 134');
test(longestCommonSubsequence("thisisatest", "testingthest"), 7, 'Test 135');
test(longestCommonSubsequence("aaaaaaa", "aaaaaaaaa"), 7, 'Test 136');
test(longestCommonSubsequence("longestcommonsubsequence", "commonsequences"), 14, 'Test 137');
test(longestCommonSubsequence("abracadabra", "alacazam"), 5, 'Test 138');
test(longestCommonSubsequence("mississippi", "issip"), 5, 'Test 139');
test(longestCommonSubsequence("1234567890", "9876543210"), 2, 'Test 140');
test(longestCommonSubsequence("thisisareallylongstringthatweneedtocheck", "thisstringislong"), 11, 'Test 141');
test(longestCommonSubsequence("abcdabcde", "abcde"), 5, 'Test 142');
test(longestCommonSubsequence("abcdefghij", "jihgfedcba"), 1, 'Test 143');
test(longestCommonSubsequence("abababababababab", "babababababababa"), 15, 'Test 144');
test(longestCommonSubsequence("mississippi", "mississsippississippi"), 11, 'Test 145');
test(longestCommonSubsequence("aaaaabbbbbcccc", "cccbbaaaa"), 4, 'Test 146');

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
