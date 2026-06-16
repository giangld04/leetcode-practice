// Test: 1771. Maximize Palindrome Length From Subsequences
// 120 test cases from LeetCodeDataset
// Run: node test.js

const { longestPalindrome } = require("./solution");

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

console.log("\n1771. Maximize Palindrome Length From Subsequences\n");

test(longestPalindrome("race", "car"), 7, 'Test 1');
test(longestPalindrome("a", "a"), 2, 'Test 2');
test(longestPalindrome("aabb", "bbcc"), 4, 'Test 3');
test(longestPalindrome("race", "care"), 7, 'Test 4');
test(longestPalindrome("abcde", "edcba"), 10, 'Test 5');
test(longestPalindrome("madam", "madam"), 10, 'Test 6');
test(longestPalindrome("aabb", "bbaa"), 8, 'Test 7');
test(longestPalindrome("xyz", "zyx"), 6, 'Test 8');
test(longestPalindrome("palindrome", "emordnilap"), 20, 'Test 9');
test(longestPalindrome("abcabc", "cbacba"), 12, 'Test 10');
test(longestPalindrome("aa", "bb"), 0, 'Test 11');
test(longestPalindrome("hello", "world"), 5, 'Test 12');
test(longestPalindrome("abcdxyz", "zyxcba"), 12, 'Test 13');
test(longestPalindrome("cacb", "cbba"), 5, 'Test 14');
test(longestPalindrome("mnop", "pqrs"), 2, 'Test 15');
test(longestPalindrome("noon", "noon"), 8, 'Test 16');
test(longestPalindrome("level", "deified"), 5, 'Test 17');
test(longestPalindrome("a", "b"), 0, 'Test 18');
test(longestPalindrome("noon", "moon"), 7, 'Test 19');
test(longestPalindrome("abcba", "abcba"), 10, 'Test 20');
test(longestPalindrome("abcd", "dcba"), 8, 'Test 21');
test(longestPalindrome("abc", "def"), 0, 'Test 22');
test(longestPalindrome("ab", "ab"), 3, 'Test 23');
test(longestPalindrome("xyzzxyzzxyzz", "zzzyzxzzzyzxzzzyx"), 25, 'Test 24');
test(longestPalindrome("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), 52, 'Test 25');
test(longestPalindrome("abacax", "xcabab"), 10, 'Test 26');
test(longestPalindrome("deeee", "eee"), 7, 'Test 27');
test(longestPalindrome("abcdefghij", "jihgfedcbajihgfedcba"), 21, 'Test 28');
test(longestPalindrome("madam", "rotor"), 0, 'Test 29');
test(longestPalindrome("aabbccddeeff", "ffeeddccbbaa"), 24, 'Test 30');
test(longestPalindrome("level", "leve"), 8, 'Test 31');
test(longestPalindrome("palindrome", "emordnilapracecar"), 20, 'Test 32');
test(longestPalindrome("longestpalindrome", "emordnilapstgnol"), 30, 'Test 33');
test(longestPalindrome("racecar", "level"), 3, 'Test 34');
test(longestPalindrome("step on no pets", "step on no pets"), 30, 'Test 35');
test(longestPalindrome("aabbaa", "ccddeee"), 0, 'Test 36');
test(longestPalindrome("abc", "cba"), 6, 'Test 37');
test(longestPalindrome("xyzzyx", "zyxzyz"), 7, 'Test 38');
test(longestPalindrome("abcdxyz", "zyxcdb"), 10, 'Test 39');
test(longestPalindrome("xyx", "xyx"), 6, 'Test 40');
test(longestPalindrome("abcdefghij", "jihgfedcba"), 20, 'Test 41');
test(longestPalindrome("racecar", "racecar"), 14, 'Test 42');
test(longestPalindrome("b", "b"), 2, 'Test 43');
test(longestPalindrome("abcdefgh", "hgfedcba"), 16, 'Test 44');
test(longestPalindrome("level", "level"), 10, 'Test 45');
test(longestPalindrome("aabbccddeeffgg", "ggffeeddccbbaa"), 28, 'Test 46');
test(longestPalindrome("aabaaa", "aaabaa"), 12, 'Test 47');
test(longestPalindrome("abacaxaba", "xyzzyx"), 6, 'Test 48');
test(longestPalindrome("abcdefg", "gfedcba"), 14, 'Test 49');
test(longestPalindrome("uniqueletters", "stretteleunik"), 20, 'Test 50');
test(longestPalindrome("aaa", "bbb"), 0, 'Test 51');
test(longestPalindrome("abcxyz", "zyxcba"), 12, 'Test 52');
test(longestPalindrome("abacdfgdcaba", "abacdfgdcaba"), 22, 'Test 53');
test(longestPalindrome("abcdabcdabcd", "dcbaabcdabcd"), 14, 'Test 54');
test(longestPalindrome("aabbaa", "aaabba"), 11, 'Test 55');
test(longestPalindrome("aabbccdd", "ddccbbaa"), 16, 'Test 56');
test(longestPalindrome("aaaaaa", "bbbbbb"), 0, 'Test 57');
test(longestPalindrome("ababababab", "bababababa"), 20, 'Test 58');
test(longestPalindrome("step", "onests"), 7, 'Test 59');
test(longestPalindrome("abcd", "zyxw"), 0, 'Test 60');
test(longestPalindrome("ababab", "bababa"), 12, 'Test 61');
test(longestPalindrome("abacaba", "bcbcbcb"), 9, 'Test 62');
test(longestPalindrome("palindromeconstruction", "noitcitsnocemordnilap"), 40, 'Test 63');
test(longestPalindrome("abcd", "dcbaabcd"), 8, 'Test 64');
test(longestPalindrome("racecar", "car"), 7, 'Test 65');
test(longestPalindrome("deified", "deified"), 14, 'Test 66');
test(longestPalindrome("abcdefg", "hgfedcba"), 15, 'Test 67');
test(longestPalindrome("complexstring", "gnirtsxlpmoc"), 24, 'Test 68');
test(longestPalindrome("noonnoon", "noonnoon"), 16, 'Test 69');
test(longestPalindrome("thisisatest", "tsetasitisth"), 18, 'Test 70');
test(longestPalindrome("abcdxyz", "zyxwvut"), 6, 'Test 71');
test(longestPalindrome("mnopqr", "rstuvw"), 2, 'Test 72');
test(longestPalindrome("racecar", "carrace"), 9, 'Test 73');
test(longestPalindrome("aabbccdd", "aabbccdd"), 6, 'Test 74');
test(longestPalindrome("abababa", "bababab"), 13, 'Test 75');
test(longestPalindrome("aaaaabbbbb", "bbbbbbaaaa"), 19, 'Test 76');
test(longestPalindrome("xyzz", "zzxy"), 6, 'Test 77');
test(longestPalindrome("abcabcabcabc", "cbacbacbacba"), 24, 'Test 78');
test(longestPalindrome("ab", "bbaa"), 5, 'Test 79');
test(longestPalindrome("qwertyuiop", "poiuytrewq"), 20, 'Test 80');
test(longestPalindrome("aaaaabbbbb", "bbbbbbaaaaa"), 21, 'Test 81');
test(longestPalindrome("zzzz", "zzzz"), 8, 'Test 82');
test(longestPalindrome("xyx", "yxy"), 5, 'Test 83');
test(longestPalindrome("repaper", "repaper"), 14, 'Test 84');
test(longestPalindrome("reviled", "devil"), 6, 'Test 85');
test(longestPalindrome("abcdef", "fedcbaxyz"), 12, 'Test 86');
test(longestPalindrome("mississippi", "ississippim"), 18, 'Test 87');
test(longestPalindrome("abcdabc", "cbadcbad"), 14, 'Test 88');
test(longestPalindrome("rotor", "rotor"), 10, 'Test 89');
test(longestPalindrome("abcdabc", "cbadacb"), 12, 'Test 90');
test(longestPalindrome("zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyz"), 52, 'Test 91');
test(longestPalindrome("aabbccddeeffgg", "ggffeeddccbaa"), 26, 'Test 92');
test(longestPalindrome("xxyyzz", "zzxyyx"), 10, 'Test 93');
test(longestPalindrome("xyzyx", "xzyyx"), 8, 'Test 94');
test(longestPalindrome("aabbcc", "ccbbaa"), 12, 'Test 95');
test(longestPalindrome("pneumonoultramicroscopicsilicovolcanoconiosis", "sinoconiovacolcosilicropicoviscounmoneup"), 49, 'Test 96');
test(longestPalindrome("aaaabbbb", "bbbbcccc"), 8, 'Test 97');
test(longestPalindrome("pqrstu", "utsrqp"), 12, 'Test 98');
test(longestPalindrome("mamad", "adam"), 7, 'Test 99');
test(longestPalindrome("abcabcabc", "cbacbacba"), 18, 'Test 100');
test(longestPalindrome("abacabadabacaba", "abacabadabacaba"), 30, 'Test 101');
test(longestPalindrome("refer", "refer"), 10, 'Test 102');
test(longestPalindrome("redder", "redder"), 12, 'Test 103');
test(longestPalindrome("abacdfgdcaba", "gfdcbba"), 15, 'Test 104');
test(longestPalindrome("abcdefghijk", "kjihgfedcba"), 22, 'Test 105');
test(longestPalindrome("mnopqr", "rqponm"), 12, 'Test 106');
test(longestPalindrome("aabbaa", "bbccbb"), 6, 'Test 107');
test(longestPalindrome("thisisaverylongwordtoseetifthelongestpalindrome", "emordnilapelongethtofeesavaloydnevasiht"), 58, 'Test 108');
test(longestPalindrome("xyzzxy", "zyxzyxzyx"), 13, 'Test 109');
test(longestPalindrome("overlappingword", "drowgnalppero"), 20, 'Test 110');
test(longestPalindrome("ab", "ba"), 4, 'Test 111');
test(longestPalindrome("zxcvbnmasdfghjkl", "lkjhgfdsamnbvcxz"), 32, 'Test 112');
test(longestPalindrome("aaaaa", "bbbbb"), 0, 'Test 113');
test(longestPalindrome("racecar", "civic"), 5, 'Test 114');
test(longestPalindrome("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zz yy xx ww vv uu tt ss rr qq pp oo nn mm ll kk jj ii hh gg ff ee dd cc bb aa"), 104, 'Test 115');
test(longestPalindrome("abcdef", "fedcba"), 12, 'Test 116');
test(longestPalindrome("pqr", "rstuv"), 2, 'Test 117');
test(longestPalindrome("xyz", "zyxcba"), 6, 'Test 118');
test(longestPalindrome("c", "c"), 2, 'Test 119');
test(longestPalindrome("abcabcabcabcabc", "cbacbacbacbacba"), 30, 'Test 120');

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
