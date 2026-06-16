// Test: 1930. Unique Length 3 Palindromic Subsequences
// 75 test cases from LeetCodeDataset
// Run: node test.js

const { countPalindromicSubsequence } = require("./solution");

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

console.log("\n1930. Unique Length 3 Palindromic Subsequences\n");

test(countPalindromicSubsequence("abcba"), 3, 'Test 1');
test(countPalindromicSubsequence("madam"), 3, 'Test 2');
test(countPalindromicSubsequence("abcdedcba"), 10, 'Test 3');
test(countPalindromicSubsequence("aaaaa"), 1, 'Test 4');
test(countPalindromicSubsequence("adc"), 0, 'Test 5');
test(countPalindromicSubsequence("abcabcabc"), 9, 'Test 6');
test(countPalindromicSubsequence("abracadabra"), 13, 'Test 7');
test(countPalindromicSubsequence("aaa"), 1, 'Test 8');
test(countPalindromicSubsequence("racecar"), 6, 'Test 9');
test(countPalindromicSubsequence("abba"), 1, 'Test 10');
test(countPalindromicSubsequence("noon"), 1, 'Test 11');
test(countPalindromicSubsequence("abccba"), 3, 'Test 12');
test(countPalindromicSubsequence("aaaa"), 1, 'Test 13');
test(countPalindromicSubsequence("aabbcc"), 0, 'Test 14');
test(countPalindromicSubsequence("mississippi"), 5, 'Test 15');
test(countPalindromicSubsequence("aabca"), 3, 'Test 16');
test(countPalindromicSubsequence("bbcbaba"), 4, 'Test 17');
test(countPalindromicSubsequence("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 0, 'Test 18');
test(countPalindromicSubsequence("xyzzyx"), 3, 'Test 19');
test(countPalindromicSubsequence("level"), 3, 'Test 20');
test(countPalindromicSubsequence("abcdefg"), 0, 'Test 21');
test(countPalindromicSubsequence("aabacbaabacba"), 8, 'Test 22');
test(countPalindromicSubsequence("abcdefghijklmnopqrstuvwxyz"), 0, 'Test 23');
test(countPalindromicSubsequence("noonmoonnoonmoonnoonmoonnoonmoonnoonmoonnoonmoonnoon"), 9, 'Test 24');
test(countPalindromicSubsequence("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzyyxwwvvuuttssrrqqppoonnmmllkkjjiihhggeeffddccbbaa"), 352, 'Test 25');
test(countPalindromicSubsequence("zzzzzzzyyyyxxxwwvvuttsrrqqppoonnmmllkkjjiihhggffeeddccba"), 3, 'Test 26');
test(countPalindromicSubsequence("zzzazzaaz"), 4, 'Test 27');
test(countPalindromicSubsequence("abacabadabacaba"), 11, 'Test 28');
test(countPalindromicSubsequence("ababababababababababababababababababababab"), 4, 'Test 29');
test(countPalindromicSubsequence("abcabcabcabcabcabcabcabcabcabc"), 9, 'Test 30');
test(countPalindromicSubsequence("ababcab"), 6, 'Test 31');
test(countPalindromicSubsequence("abacabadabacabadabacabadabacabad"), 16, 'Test 32');
test(countPalindromicSubsequence("racecarcarcarecarracecarcarcarecarracecarcarcarecarracecar"), 16, 'Test 33');
test(countPalindromicSubsequence("abacdfgdcaba"), 16, 'Test 34');
test(countPalindromicSubsequence("aabbbaaabbbaaa"), 4, 'Test 35');
test(countPalindromicSubsequence("aaabaaaabaaaaabaaaabaaaaaabaaaa"), 4, 'Test 36');
test(countPalindromicSubsequence("aaaabaaaabaaaab"), 4, 'Test 37');
test(countPalindromicSubsequence("abcbabcbabcbabcbabcbabcbabcba"), 9, 'Test 38');
test(countPalindromicSubsequence("bababababababababababababababababababababa"), 4, 'Test 39');
test(countPalindromicSubsequence("abcbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbac"), 9, 'Test 40');
test(countPalindromicSubsequence("aaaaaaaaaabbbbbbbbbbccccccccccdddddddddd"), 4, 'Test 41');
test(countPalindromicSubsequence("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 42');
test(countPalindromicSubsequence("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 325, 'Test 43');
test(countPalindromicSubsequence("xyzyxyzyxyzyx"), 9, 'Test 44');
test(countPalindromicSubsequence("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 650, 'Test 45');
test(countPalindromicSubsequence("zyxwvutsrqponmlkjihgfedcbaedcba"), 20, 'Test 46');
test(countPalindromicSubsequence("abbaabbbaabbaabbbaabbaabbbaabbaabbbaabbaabbba"), 4, 'Test 47');
test(countPalindromicSubsequence("abcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 9, 'Test 48');
test(countPalindromicSubsequence("abcdefghihgfedcbaabcdefghihgfedcba"), 80, 'Test 49');
test(countPalindromicSubsequence("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz"), 26, 'Test 50');
test(countPalindromicSubsequence("aaabaaaabaaaabaaaabaaaabaaaabaaaabaaaabaaaab"), 4, 'Test 51');
test(countPalindromicSubsequence("abcbacbacbacbacbacbacbacbacbacbacbacbacb"), 9, 'Test 52');
test(countPalindromicSubsequence("zzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 53');
test(countPalindromicSubsequence("babababababababababababababababababababababababababababababa"), 4, 'Test 54');
test(countPalindromicSubsequence("aabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabba"), 4, 'Test 55');
test(countPalindromicSubsequence("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzzzz"), 26, 'Test 56');
test(countPalindromicSubsequence("mamamadadadmmadammaddada"), 9, 'Test 57');
test(countPalindromicSubsequence("aabbccddeeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 1, 'Test 58');
test(countPalindromicSubsequence("ababababababababababababababababababababababababababab"), 4, 'Test 59');
test(countPalindromicSubsequence("aaaaaaaaaaaabbbbbbbbbbbbccccccccccdddddddddd"), 4, 'Test 60');
test(countPalindromicSubsequence("racecarcarcarecarracecarcarcarecarracecar"), 16, 'Test 61');
test(countPalindromicSubsequence("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 9, 'Test 62');
test(countPalindromicSubsequence("abacbacbacbacba"), 9, 'Test 63');
test(countPalindromicSubsequence("ababababababababababababababababababababababababababababababab"), 4, 'Test 64');
test(countPalindromicSubsequence("mississippississippiississippiississippiississippiississippi"), 9, 'Test 65');
test(countPalindromicSubsequence("abcabcabcabcabc"), 9, 'Test 66');
test(countPalindromicSubsequence("noonmoonnoonmoon"), 8, 'Test 67');
test(countPalindromicSubsequence("noonmoonnoonmoonnoonmoonnoonmoonnoonmoonnoonmoonnoonnoonmoon"), 9, 'Test 68');
test(countPalindromicSubsequence("aaaaabbbbbccccc"), 3, 'Test 69');
test(countPalindromicSubsequence("mississippississippiississippiississippiississippi"), 9, 'Test 70');
test(countPalindromicSubsequence("abacabadabacabadabacabadabacabadabacabadabacabad"), 16, 'Test 71');
test(countPalindromicSubsequence("zzzzzyyyxxwwvvuttsrrqqppoonnmmllkkjjiihhggffeeddccba"), 2, 'Test 72');
test(countPalindromicSubsequence("zyxwvutsrqponmlkjihgfedcba"), 0, 'Test 73');
test(countPalindromicSubsequence("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 9, 'Test 74');
test(countPalindromicSubsequence("aabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabba"), 4, 'Test 75');

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
