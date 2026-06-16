// Test: 1657. Determine If Two Strings Are Close
// 106 test cases from LeetCodeDataset
// Run: node test.js

const { closeStrings } = require("./solution");

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

console.log("\n1657. Determine If Two Strings Are Close\n");

test(closeStrings("leetcode", "coeddlet"), false, 'Test 1');
test(closeStrings("aaa", "bbb"), false, 'Test 2');
test(closeStrings("aaabbbbccdddd", "bbbbaacdddd"), false, 'Test 3');
test(closeStrings("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), true, 'Test 4');
test(closeStrings("aabbcc", "ccbbaa"), true, 'Test 5');
test(closeStrings("abc", "bca"), true, 'Test 6');
test(closeStrings("abcabcabc", "bcbcbcbcb"), false, 'Test 7');
test(closeStrings("abcde", "edcba"), true, 'Test 8');
test(closeStrings("cabbba", "abbccc"), true, 'Test 9');
test(closeStrings("xyzz", "zzxy"), true, 'Test 10');
test(closeStrings("xyz", "zyx"), true, 'Test 11');
test(closeStrings("abcd", "abce"), false, 'Test 12');
test(closeStrings("aaabbbbcc", "bbbcccaaa"), false, 'Test 13');
test(closeStrings("uau", "ssx"), false, 'Test 14');
test(closeStrings("aaabbbbccddd", "bbbccdddcccc"), false, 'Test 15');
test(closeStrings("aabbbbccc", "bbcccaaaa"), true, 'Test 16');
test(closeStrings("abab", "baba"), true, 'Test 17');
test(closeStrings("aaabbbbcc", "aaaabbbcc"), true, 'Test 18');
test(closeStrings("a", "aa"), false, 'Test 19');
test(closeStrings("aab", "bba"), true, 'Test 20');
test(closeStrings("abcd", "dcba"), true, 'Test 21');
test(closeStrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"), false, 'Test 22');
test(closeStrings("aaaabbbbccccdddd", "ddddeeeeffffgggg"), false, 'Test 23');
test(closeStrings("aaabbcccddeeefffggghhhhiiiii", "iiiiihhhgggfffeeedddcccbbaaa"), false, 'Test 24');
test(closeStrings("xyzxyzxyz", "zyxzyxzyx"), true, 'Test 25');
test(closeStrings("abacabadabacaba", "bbacabadabacaba"), false, 'Test 26');
test(closeStrings("aaabbcccddddeeeeeffffffgggggghhhhhiiiijjjjkkkkklllllmmmmnnooooppqqrrsstttuuuuuvvvvvvvwwxxxxxyyyyzzzzz", "zzzzzyyyyxxxwwwvvvvvvuuuuutttssrrqqppoonnmmllkkjjiihhhgggfffddddccccbbbbaaa"), false, 'Test 27');
test(closeStrings("aabbccddeeff", "ffeeddccbbaa"), true, 'Test 28');
test(closeStrings("aaabbbcccdddeeefff", "ffeeeedddcccbbbaaa"), false, 'Test 29');
test(closeStrings("mississippi", "ppissimissi"), true, 'Test 30');
test(closeStrings("abcdabcabcabcd", "dcbaababdcbaabab"), false, 'Test 31');
test(closeStrings("abacabadabacaba", "bacabacababacab"), false, 'Test 32');
test(closeStrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzxxyywwvvuuttssrrqqppoonnmmllkkjjiihhggffeeeeddccbbaa"), false, 'Test 33');
test(closeStrings("ppppoooonnnnmmmlllkkeeeeeddcccbbbaaa", "aaaaaaaaabbbbbbccccdddddeeeeeeeekkkkkklllllmmmmmmmnnnnnnnnoooooooooppppppp"), false, 'Test 34');
test(closeStrings("qqqwwwweeerrrttt", "tttwwweerrrqqq"), false, 'Test 35');
test(closeStrings("abcabcabc", "ccbbbaaa"), false, 'Test 36');
test(closeStrings("qwertypoiuytrewq", "poiuytrewqqwertypo"), false, 'Test 37');
test(closeStrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), false, 'Test 38');
test(closeStrings("abcdefabcdefabcdef", "fedcbafedcbafedcba"), true, 'Test 39');
test(closeStrings("abcdefghij", "jihgfedcba"), true, 'Test 40');
test(closeStrings("abcdefgh", "hgfedcba"), true, 'Test 41');
test(closeStrings("abacabadabacaba", "cbacbacbcacbacb"), false, 'Test 42');
test(closeStrings("abcdefg", "gfedcba"), true, 'Test 43');
test(closeStrings("loooooonnnngggggwwwoooorrrrddddsssaaammmmeeeerrttttyyyyyyyyyyyynnnnnnnnnn", "nnnnnnnnnnyyyyyyyyyyyttttyyyyymmmeeraatttddddsssaaawwwggggnnnllllloooooo"), false, 'Test 44');
test(closeStrings("xylophone", "phonexylo"), true, 'Test 45');
test(closeStrings("abcdefghijklopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), false, 'Test 46');
test(closeStrings("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"), true, 'Test 47');
test(closeStrings("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), true, 'Test 48');
test(closeStrings("abcdefabcabc", "abcabcabcdef"), true, 'Test 49');
test(closeStrings("aaaaabbbbcccccccdddddddd", "ddddddddcccccccbbbbaaaaa"), true, 'Test 50');
test(closeStrings("mnopqr", "rpqomn"), true, 'Test 51');
test(closeStrings("mississippi", "ppiimssisss"), false, 'Test 52');
test(closeStrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqppoonnmlkkjjiihhggffeeeeddccbbaa"), false, 'Test 53');
test(closeStrings("anotherexample", "mpleaxarnothee"), true, 'Test 54');
test(closeStrings("aaaaabbbbbccccc", "bbbbbcccccaaaaa"), true, 'Test 55');
test(closeStrings("zzzzzzyyyxxx", "yyyxxxzzzzzy"), false, 'Test 56');
test(closeStrings("xyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "yzxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy"), false, 'Test 57');
test(closeStrings("xyzxyzxyzxyzxyzxyzxyz", "zyxzyxzyxzyxzyxzyxzyxzyxzyx"), false, 'Test 58');
test(closeStrings("aabccddddeeeeefffffff", "eeeeeeffffffdddddcccbaaa"), false, 'Test 59');
test(closeStrings("mnopqr", "rstuvw"), false, 'Test 60');
test(closeStrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), false, 'Test 61');
test(closeStrings("aabbccddeeff", "abcdeffedcba"), true, 'Test 62');
test(closeStrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijklmnopqrstuvxyzmnopqrstuvwxyzabcdefg"), false, 'Test 63');
test(closeStrings("uniqueletters", "letterniquesu"), true, 'Test 64');
test(closeStrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzxxyywwvvuuttssrrqqlloonnmmllkkjjiihhggeeddbbaa"), false, 'Test 65');
test(closeStrings("abcabcabcabcabcabcabcabcabcabc", "bcabacabcabacabcabacabcabacabcabac"), false, 'Test 66');
test(closeStrings("abcdefghijk", "abcdefghijl"), false, 'Test 67');
test(closeStrings("thisisatest", "esttasisthi"), true, 'Test 68');
test(closeStrings("qqwweerrttyyuuiiooppllaaassddffgg", "ggffddssaallooppuiiyyttreeewwqq"), false, 'Test 69');
test(closeStrings("abacabadaba", "dabacababad"), false, 'Test 70');
test(closeStrings("pneumonoultramicroscopicsilicovolcanoconiosis", "oconsinolpnacirosccvilcooimmutapernovulcrosmicn"), false, 'Test 71');
test(closeStrings("abcabcabcabc", "cccbbbaaabbb"), false, 'Test 72');
test(closeStrings("leetcode", "codeleet"), true, 'Test 73');
test(closeStrings("z", "z"), true, 'Test 74');
test(closeStrings("aabbaa", "bbaabb"), true, 'Test 75');
test(closeStrings("aaabbbccc", "bbbaaacc"), false, 'Test 76');
test(closeStrings("transform", "rmorfnapt"), false, 'Test 77');
test(closeStrings("aaaabbbbccccddddeeeeeffffffgggggg", "ggggggffffffeeeeeeeeeccccbbbbaaaa"), false, 'Test 78');
test(closeStrings("abacabadabacabad", "badacabdacabad"), false, 'Test 79');
test(closeStrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa"), true, 'Test 80');
test(closeStrings("hello", "ollhe"), true, 'Test 81');
test(closeStrings("uniquestring", "stringunique"), true, 'Test 82');
test(closeStrings("abcdef", "gfedcb"), false, 'Test 83');
test(closeStrings("xyxyxyxyxyxyxyxyxyxy", "yyxyxyxyxyxyxyxyxyxxyx"), false, 'Test 84');
test(closeStrings("aaaaabbbbccccdddd", "ddddccccbbbbaaa"), false, 'Test 85');
test(closeStrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), true, 'Test 86');
test(closeStrings("abcde", "fghij"), false, 'Test 87');
test(closeStrings("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", "ddddccccbbbbaaaaaaddddccccbbbbaaaaaa"), false, 'Test 88');
test(closeStrings("aabbbcccc", "cccbbbaaa"), false, 'Test 89');
test(closeStrings("aabbccddeee", "eeeedddccbbbaaa"), false, 'Test 90');
test(closeStrings("thisisatest", "esttisita"), false, 'Test 91');
test(closeStrings("aaabbbcccddd", "ddddcccbbbbaaa"), false, 'Test 92');
test(closeStrings("abcdefghijabcdefghijabcdefghij", "abcdefghijabcdefghijabcdefghij"), true, 'Test 93');
test(closeStrings("zzzzzzzzzz", "zzzzzzzzzz"), true, 'Test 94');
test(closeStrings("abcdeabcde", "edcbaedcba"), true, 'Test 95');
test(closeStrings("abcdabcdabcdabcdabcdabcd", "dcbaabcdabcdabcdabcdabcd"), true, 'Test 96');
test(closeStrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzyyxwwvvuuttrrqqppoonnmmllkkiijjgghhffeeeeddccbbaa"), false, 'Test 97');
test(closeStrings("abcdexyz", "zyxwvuts"), false, 'Test 98');
test(closeStrings("qqwweerrttyyuuiiooppaassddffgg", "ggffddssaappoouuiittyyerrrwwqq"), false, 'Test 99');
test(closeStrings("abcdefg", "ghijklm"), false, 'Test 100');
test(closeStrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzxxwwvvuuttssrrqqlloonnmmllkkjjiihhggeeddbbaa"), false, 'Test 101');
test(closeStrings("aaaabbbbccccddddeee", "eeedddccccbbbbaaaa"), false, 'Test 102');
test(closeStrings("abcdabcd", "dcbaabcd"), true, 'Test 103');
test(closeStrings("closestrings", "stringsclose"), true, 'Test 104');
test(closeStrings("aaaabbbbccccdddd", "ddddccccbbbbaaaa"), true, 'Test 105');
test(closeStrings("xyzzzz", "zzzzxy"), true, 'Test 106');

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
