// Test: 2068. Check Whether Two Strings Are Almost Equivalent
// 148 test cases from LeetCodeDataset
// Run: node test.js

const { checkAlmostEquivalent } = require("./solution");

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

console.log("\n2068. Check Whether Two Strings Are Almost Equivalent\n");

test(checkAlmostEquivalent("cccddabba", "babababab"), true, 'Test 1');
test(checkAlmostEquivalent("aaa", "bbb"), true, 'Test 2');
test(checkAlmostEquivalent("aabbcc", "ccbbaa"), true, 'Test 3');
test(checkAlmostEquivalent("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"), true, 'Test 4');
test(checkAlmostEquivalent("pqrstu", "utsrpq"), true, 'Test 5');
test(checkAlmostEquivalent("mnop", "ponm"), true, 'Test 6');
test(checkAlmostEquivalent("abcabcabc", "bcbcbcbcb"), true, 'Test 7');
test(checkAlmostEquivalent("aaaa", "bccb"), false, 'Test 8');
test(checkAlmostEquivalent("xyz", "zyx"), true, 'Test 9');
test(checkAlmostEquivalent("abcdeef", "abaaacc"), true, 'Test 10');
test(checkAlmostEquivalent("abc", "abc"), true, 'Test 11');
test(checkAlmostEquivalent("hello", "world"), true, 'Test 12');
test(checkAlmostEquivalent("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggeeffddccbbaa"), true, 'Test 13');
test(checkAlmostEquivalent("abcabcabc", "abcabcabc"), true, 'Test 14');
test(checkAlmostEquivalent("zzzz", "zzzz"), true, 'Test 15');
test(checkAlmostEquivalent("aabbcc", "bbccdd"), true, 'Test 16');
test(checkAlmostEquivalent("abc", "xyz"), true, 'Test 17');
test(checkAlmostEquivalent("zzz", "zzz"), true, 'Test 18');
test(checkAlmostEquivalent("aabbcc", "abcabc"), true, 'Test 19');
test(checkAlmostEquivalent("abcdef", "fedcba"), true, 'Test 20');
test(checkAlmostEquivalent("aabbcc", "abc"), true, 'Test 21');
test(checkAlmostEquivalent("abcd", "dcba"), true, 'Test 22');
test(checkAlmostEquivalent("abc", "def"), true, 'Test 23');
test(checkAlmostEquivalent("abcdefg", "gfedcba"), true, 'Test 24');
test(checkAlmostEquivalent("almostequivalent", "equivalentalmost"), true, 'Test 25');
test(checkAlmostEquivalent("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), true, 'Test 26');
test(checkAlmostEquivalent("abacabadabacabad", "babaabacabacabac"), true, 'Test 27');
test(checkAlmostEquivalent("abcdefghijl", "abcdefghijllll"), true, 'Test 28');
test(checkAlmostEquivalent("aabbaabbaabb", "bbaabbaabbab"), true, 'Test 29');
test(checkAlmostEquivalent("hello world", "world hello"), true, 'Test 30');
test(checkAlmostEquivalent("frequency", "requeency"), true, 'Test 31');
test(checkAlmostEquivalent("aaaabbbbccccddddeeeffffggghhhiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz", "zzzyyyxxxwwvvvuuuutttsssrqqqpppoonnmmlllkkkjjjiiihhhgggfffffeeedddccccbbbbaaaa"), true, 'Test 32');
test(checkAlmostEquivalent("xyzxyzxyzxyzxyz", "zyxzyxzyxzyxzyx"), true, 'Test 33');
test(checkAlmostEquivalent("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), true, 'Test 34');
test(checkAlmostEquivalent("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzxxwwvvttrrppoonnmmllkkjjiihhggeeddbbccaabb"), true, 'Test 35');
test(checkAlmostEquivalent("mississippi", "ssipimisip"), true, 'Test 36');
test(checkAlmostEquivalent("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzza"), true, 'Test 37');
test(checkAlmostEquivalent("abcdefghijklmnopqrstuvwxyz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzz"), false, 'Test 38');
test(checkAlmostEquivalent("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzzyyyxxxwwvvuuttrrssqqpponnmlkkjjiihhggffeeddccbbaa"), true, 'Test 39');
test(checkAlmostEquivalent("xyzxyzxyzxyzxyzxyz", "xyzxyzxyzxyzxyzxyx"), true, 'Test 40');
test(checkAlmostEquivalent("xylophone", "polyxhnon"), true, 'Test 41');
test(checkAlmostEquivalent("almost", "almosttttt"), false, 'Test 42');
test(checkAlmostEquivalent("aaaabbbb", "bbbbaaaa"), true, 'Test 43');
test(checkAlmostEquivalent("almostequivalent", "almostequivalen"), true, 'Test 44');
test(checkAlmostEquivalent("testtesttest", "setttestsett"), true, 'Test 45');
test(checkAlmostEquivalent("abcdefghij", "jihgfedcba"), true, 'Test 46');
test(checkAlmostEquivalent("aaaaabbbbcccc", "bbbbbccccddddd"), false, 'Test 47');
test(checkAlmostEquivalent("aaabbbccc", "bbcccaaa"), true, 'Test 48');
test(checkAlmostEquivalent("abababababababababababababababababababab", "babababababababababababababababababababaa"), true, 'Test 49');
test(checkAlmostEquivalent("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnoooo", "bbbbaaaaccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooo"), true, 'Test 50');
test(checkAlmostEquivalent("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzxxwvwuvttsrqpqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), true, 'Test 51');
test(checkAlmostEquivalent("banana", "nanaba"), true, 'Test 52');
test(checkAlmostEquivalent("python", "pythooon"), true, 'Test 53');
test(checkAlmostEquivalent("abacabadabacabad", "bacadabacadaba"), true, 'Test 54');
test(checkAlmostEquivalent("almostequivalent", "quivalentalmosta"), true, 'Test 55');
test(checkAlmostEquivalent("frequency", "frequncey"), true, 'Test 56');
test(checkAlmostEquivalent("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqz"), true, 'Test 57');
test(checkAlmostEquivalent("frequencycheck", "checkfrequency"), true, 'Test 58');
test(checkAlmostEquivalent("aabbbcccddddeee", "eeeeddddccccbbbbaaa"), true, 'Test 59');
test(checkAlmostEquivalent("abracadabra", "alakazam"), true, 'Test 60');
test(checkAlmostEquivalent("aabbbccc", "bbaaccdd"), true, 'Test 61');
test(checkAlmostEquivalent("abcdefghijlll", "abcdefghijllll"), true, 'Test 62');
test(checkAlmostEquivalent("abcdefghijabcdefghij", "abcdefghijabcdefghii"), true, 'Test 63');
test(checkAlmostEquivalent("ppppqqqqrrrrssss", "ttttuuuuvvvv"), false, 'Test 64');
test(checkAlmostEquivalent("abababababababab", "babababababababa"), true, 'Test 65');
test(checkAlmostEquivalent("aaaaaaaabbbbbbbbbbcccccccccc", "ccccccccccbbbbbbbbbbaaaaaaaabbbb"), false, 'Test 66');
test(checkAlmostEquivalent("aaabbbccc", "bbbaacccd"), true, 'Test 67');
test(checkAlmostEquivalent("abcabcabcabc", "bcbcbcbcbcbc"), false, 'Test 68');
test(checkAlmostEquivalent("mississippi", "pississim"), true, 'Test 69');
test(checkAlmostEquivalent("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzxxwwvvttrrssqqppoonnmmllkkjjiihhggffeeddccbbaa"), true, 'Test 70');
test(checkAlmostEquivalent("aaaaabbbbccccdddd", "bbbbbccccddddaaaaa"), true, 'Test 71');
test(checkAlmostEquivalent("xylophone", "polynomial"), true, 'Test 72');
test(checkAlmostEquivalent("aaaabbbbcccc", "cccbbbbaaa"), true, 'Test 73');
test(checkAlmostEquivalent("asdfghjkl", "lkjhgfdsa"), true, 'Test 74');
test(checkAlmostEquivalent("hello", "yellow"), true, 'Test 75');
test(checkAlmostEquivalent("almostequivalent", "quivalentalmost"), true, 'Test 76');
test(checkAlmostEquivalent("abcdefghij", "abcdefghijk"), true, 'Test 77');
test(checkAlmostEquivalent("abacabadabacaba", "acabacabacababa"), true, 'Test 78');
test(checkAlmostEquivalent("abcdefgabcdefgabcdefgabcdefg", "gfedcbagfedcbagfedcbagfedcb"), true, 'Test 79');
test(checkAlmostEquivalent("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzxxwwvvttrrqqppoonnmmllkkjjiihhggeeffeeddccbbaa"), true, 'Test 80');
test(checkAlmostEquivalent("hellothere", "heellooerr"), true, 'Test 81');
test(checkAlmostEquivalent("abcdeffghijklmnopqrstuvwxyz", "mnopqrstuvwxyzabcdefghijkl"), true, 'Test 82');
test(checkAlmostEquivalent("abcabcabc", "bcabcbac"), true, 'Test 83');
test(checkAlmostEquivalent("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijklmnopqrstuvwxyz"), true, 'Test 84');
test(checkAlmostEquivalent("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), true, 'Test 85');
test(checkAlmostEquivalent("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), true, 'Test 86');
test(checkAlmostEquivalent("equaldiffffe", "equaldifffff"), true, 'Test 87');
test(checkAlmostEquivalent("racecar", "carrace"), true, 'Test 88');
test(checkAlmostEquivalent("mississippi", "bississippi"), true, 'Test 89');
test(checkAlmostEquivalent("abacabadabacabad", "abcabcabcabc"), false, 'Test 90');
test(checkAlmostEquivalent("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkk", "ffffgggghhhhiiiijjjjkkkkaaaabbbbccccddddeeee"), true, 'Test 91');
test(checkAlmostEquivalent("abcdefg", "ghfedcba"), true, 'Test 92');
test(checkAlmostEquivalent("pythonprogramming", "programmingpython"), true, 'Test 93');
test(checkAlmostEquivalent("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), true, 'Test 94');
test(checkAlmostEquivalent("abcdabcdabcdabcdabcdabcd", "abcdabcdabcdabcdabcdabc"), true, 'Test 95');
test(checkAlmostEquivalent("abcdefghijk", "abcdefghijl"), true, 'Test 96');
test(checkAlmostEquivalent("aaaaaaaaaaa", "bbbbbbbbbbb"), false, 'Test 97');
test(checkAlmostEquivalent("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), true, 'Test 98');
test(checkAlmostEquivalent("ababababababababababababababababababababab", "bababababababababababababababababababababa"), true, 'Test 99');
test(checkAlmostEquivalent("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa"), true, 'Test 100');
test(checkAlmostEquivalent("aabbbcccddd", "aaabbbcc"), true, 'Test 101');
test(checkAlmostEquivalent("mississippi", "ssissippi"), true, 'Test 102');
test(checkAlmostEquivalent("programming", "mmprogain"), true, 'Test 103');
test(checkAlmostEquivalent("aaabbbccc", "bbbaaacc"), true, 'Test 104');
test(checkAlmostEquivalent("aaaaabbbbcccccddddd", "aaabbbcccdddd"), true, 'Test 105');
test(checkAlmostEquivalent("banana", "ananaa"), true, 'Test 106');
test(checkAlmostEquivalent("abacabadabacaba", "cbacabacabacabc"), true, 'Test 107');
test(checkAlmostEquivalent("abcabcabcabc", "bcdbcdabcdabcd"), false, 'Test 108');
test(checkAlmostEquivalent("aaaaaaaabbbbbbbccccccdddddeeeeeffffff", "ffffffeeeeeee/ddddddccccbbbbbbaaaaaa"), true, 'Test 109');
test(checkAlmostEquivalent("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa"), true, 'Test 110');
test(checkAlmostEquivalent("abcdabcdabcdabcd", "bcdbcdbcdbcdbcdb"), false, 'Test 111');
test(checkAlmostEquivalent("abcdabcdabcdabcd", "dcbaabcdabcdabcd"), true, 'Test 112');
test(checkAlmostEquivalent("abcdefghij", "abcdefghix"), true, 'Test 113');
test(checkAlmostEquivalent("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttsrqpponnml lkjihgfedcba"), true, 'Test 114');
test(checkAlmostEquivalent("abcdefghi", "ihgfedcba"), true, 'Test 115');
test(checkAlmostEquivalent("abcdefghijklmnopqrstuvwxyza", "bcdefghijklmnopqrstuvwxyzzz"), true, 'Test 116');
test(checkAlmostEquivalent("frequency", "frequnecy"), true, 'Test 117');
test(checkAlmostEquivalent("aaabbbcccddd", "aaaabbbbccccdddd"), true, 'Test 118');
test(checkAlmostEquivalent("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), true, 'Test 119');
test(checkAlmostEquivalent("abcde", "fghij"), true, 'Test 120');
test(checkAlmostEquivalent("abcabcabcabcabc", "bcbcbcbcbcbcb"), false, 'Test 121');
test(checkAlmostEquivalent("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), false, 'Test 122');
test(checkAlmostEquivalent("abcdabcdabcdabcd", "abcdeabcdeabcdeabcde"), false, 'Test 123');
test(checkAlmostEquivalent("abcdefghijklmnopqrstuvwxyzz", "abcdefghijklmnopqrstuvwxyyz"), true, 'Test 124');
test(checkAlmostEquivalent("aabbbcccdddee", "eeedddcccbbaa"), true, 'Test 125');
test(checkAlmostEquivalent("uvwxyz", "vwxyz"), true, 'Test 126');
test(checkAlmostEquivalent("aaaaabbbbccccc", "bbbaaaaaccccc"), true, 'Test 127');
test(checkAlmostEquivalent("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzzyyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa"), true, 'Test 128');
test(checkAlmostEquivalent("pythonprogramming", "rogrammingpython"), true, 'Test 129');
test(checkAlmostEquivalent("abacabadabacaba", "abacabadabacaba"), true, 'Test 130');
test(checkAlmostEquivalent("aaaaaabbbbbbccccccdddddeeeeee", "eeeeeeaaaaaabbbbbbccccccddddde"), true, 'Test 131');
test(checkAlmostEquivalent("abcabcabcabcabc", "cccbbbbaaaabcabc"), true, 'Test 132');
test(checkAlmostEquivalent("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttrrssqqppoonnmlkkjjiihhggffeeddccbbaa"), true, 'Test 133');
test(checkAlmostEquivalent("abacabadabacaba", "abcabcabcabcabc"), true, 'Test 134');
test(checkAlmostEquivalent("qwerasdfzxcv", "asdfzxcvqwer"), true, 'Test 135');
test(checkAlmostEquivalent("mnopqr", "mnopqz"), true, 'Test 136');
test(checkAlmostEquivalent("mnopqr", "rqponm"), true, 'Test 137');
test(checkAlmostEquivalent("abcdefg", "ghijklm"), true, 'Test 138');
test(checkAlmostEquivalent("abcdefghijllll", "abcdefghijlll"), true, 'Test 139');
test(checkAlmostEquivalent("aaaaaaaaabbbbbbbbbbccccccccccdddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxxyyyyyyyyyyzzzzzzzzzz", "zzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqpppppppppooooooooollllllllllkkkkkkkkkkjjjjjjjjjiiiiiiiiiijjjjjjjjjjhhhhhhhhhhhggggggggggffffffffeeeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbbbaaaaaaaaaa"), false, 'Test 140');
test(checkAlmostEquivalent("abcdabcdabcd", "dcbaefghefgh"), true, 'Test 141');
test(checkAlmostEquivalent("mississippi", "missiisssipp"), true, 'Test 142');
test(checkAlmostEquivalent("aaaabbbbccccdddd", "bbbaaaacccddde"), true, 'Test 143');
test(checkAlmostEquivalent("qwert", "qwerty"), true, 'Test 144');
test(checkAlmostEquivalent("aaaabbbbcccc", "ddddeeeeffff"), false, 'Test 145');
test(checkAlmostEquivalent("programming", "grammipnorg"), true, 'Test 146');
test(checkAlmostEquivalent("aaaabbbbccccdddd", "ddddccccbbbbaaaa"), true, 'Test 147');
test(checkAlmostEquivalent("aabccddeeff", "abccddeeffggh"), true, 'Test 148');

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
