// Test: 1433. Check If A String Can Break Another String
// 120 test cases from LeetCodeDataset
// Run: node test.js

const { checkIfCanBreak } = require("./solution");

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

console.log("\n1433. Check If A String Can Break Another String\n");

test(checkIfCanBreak("same", "same"), true, 'Test 1');
test(checkIfCanBreak("abc", "bca"), true, 'Test 2');
test(checkIfCanBreak("hello", "bello"), true, 'Test 3');
test(checkIfCanBreak("aazz", "zzaa"), true, 'Test 4');
test(checkIfCanBreak("abac", "baca"), true, 'Test 5');
test(checkIfCanBreak("xyz", "wvu"), true, 'Test 6');
test(checkIfCanBreak("abc", "xya"), true, 'Test 7');
test(checkIfCanBreak("aabbcc", "abcabc"), true, 'Test 8');
test(checkIfCanBreak("pqrs", "rstu"), true, 'Test 9');
test(checkIfCanBreak("zyx", "wvu"), true, 'Test 10');
test(checkIfCanBreak("abcd", "adcb"), true, 'Test 11');
test(checkIfCanBreak("aaa", "bbb"), true, 'Test 12');
test(checkIfCanBreak("abcd", "dcba"), true, 'Test 13');
test(checkIfCanBreak("abe", "acd"), false, 'Test 14');
test(checkIfCanBreak("leetcodee", "interview"), true, 'Test 15');
test(checkIfCanBreak("python", "typhon"), true, 'Test 16');
test(checkIfCanBreak("abcdxyz", "zyxwvut"), true, 'Test 17');
test(checkIfCanBreak("zzzz", "zzzz"), true, 'Test 18');
test(checkIfCanBreak("xyz", "zyx"), true, 'Test 19');
test(checkIfCanBreak("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttrrssqqpponnmlkkjjiihhggeeffddaabbcc"), true, 'Test 20');
test(checkIfCanBreak("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), true, 'Test 21');
test(checkIfCanBreak("algorithm", "logarithm"), true, 'Test 22');
test(checkIfCanBreak("longerstringwithvariouscharacters", "variouscharacterswithlongerstring"), true, 'Test 23');
test(checkIfCanBreak("zzzzzz", "aaaaaa"), true, 'Test 24');
test(checkIfCanBreak("unbreakable", "rebreakable"), true, 'Test 25');
test(checkIfCanBreak("abcdabcdabcd", "ddddcccbbbbaaa"), true, 'Test 26');
test(checkIfCanBreak("aabbcc", "ccbbaa"), true, 'Test 27');
test(checkIfCanBreak("mississippi", "pippiimissi"), true, 'Test 28');
test(checkIfCanBreak("almostsame", "almostsane"), true, 'Test 29');
test(checkIfCanBreak("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzzyyxwwvvuutssrrqqponnmmllkkjjiihhggeeffdccbaaab"), false, 'Test 30');
test(checkIfCanBreak("racecar", "carrace"), true, 'Test 31');
test(checkIfCanBreak("thisisaverylongstringthatneedstobecomparesothattwostingsareofthesamelength", "somuchlongeranddifferentsomenecessarypaddingletterssotheyareofthesame"), false, 'Test 32');
test(checkIfCanBreak("abacabadabacaba", "zyzxzyzyzxzyzyz"), true, 'Test 33');
test(checkIfCanBreak("abracadabra", "cadabrabara"), true, 'Test 34');
test(checkIfCanBreak("zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyz"), true, 'Test 35');
test(checkIfCanBreak("abcdefghijk", "fghijklmno"), true, 'Test 36');
test(checkIfCanBreak("abracadabra", "alakazamazam"), false, 'Test 37');
test(checkIfCanBreak("randomstringhere", "somestringrandom"), true, 'Test 38');
test(checkIfCanBreak("uniquechars", "distinctset"), false, 'Test 39');
test(checkIfCanBreak("aazzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzaa"), true, 'Test 40');
test(checkIfCanBreak("zzzzzzzz", "zzzzzzzz"), true, 'Test 41');
test(checkIfCanBreak("aabbbccc", "bbbcccaaa"), true, 'Test 42');
test(checkIfCanBreak("zzzzzzzzzz", "zzzzzzzzzz"), true, 'Test 43');
test(checkIfCanBreak("complex", "lexicom"), true, 'Test 44');
test(checkIfCanBreak("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqppoonnmlkkjjiihhggffeeddccbbaa"), true, 'Test 45');
test(checkIfCanBreak("abcdxyzabcdxyz", "xyzabcdxyzabcd"), true, 'Test 46');
test(checkIfCanBreak("abcdefgh", "hgfedcba"), true, 'Test 47');
test(checkIfCanBreak("pppppppppp", "qqqqqqqqqq"), true, 'Test 48');
test(checkIfCanBreak("abcdefghij", "fedcbaghij"), true, 'Test 49');
test(checkIfCanBreak("aaaaabbbbcccccddeeefffffgggghhhiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxxxyyyyyzzzzz", "zzzzzyyyyyxxxwwwvvvuuutttsssrqqppoonnmlkkkjjjiiihgggfffffeeedddccccbbbaaaa"), true, 'Test 50');
test(checkIfCanBreak("programming", "gnimmargorp"), true, 'Test 51');
test(checkIfCanBreak("permutation", "reupmttinao"), true, 'Test 52');
test(checkIfCanBreak("mississippi", "pppnnnnmsssssiiii"), true, 'Test 53');
test(checkIfCanBreak("aabbccddeeffgghhii", "iihhggeeffddccbbaa"), true, 'Test 54');
test(checkIfCanBreak("abcdefghijk", "jihgfedcbaa"), true, 'Test 55');
test(checkIfCanBreak("xyzzzz", "zzzzxy"), true, 'Test 56');
test(checkIfCanBreak("medium", "median"), true, 'Test 57');
test(checkIfCanBreak("mnopqr", "qrstuv"), true, 'Test 58');
test(checkIfCanBreak("xyzyzyzyzyzyzyzyz", "zyxzyxzyxzyxzyxzy"), true, 'Test 59');
test(checkIfCanBreak("abcdefghijklnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), true, 'Test 60');
test(checkIfCanBreak("aaaabbbbccccdddd", "ddddccccbbbbaaaa"), true, 'Test 61');
test(checkIfCanBreak("thisisalongstring", "stringlongthisisalo"), true, 'Test 62');
test(checkIfCanBreak("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijklmnopqrstuvwxyzzzyxwvutsrqponmlkjihgfedcbaaabb"), true, 'Test 63');
test(checkIfCanBreak("algorithm", "thmalogri"), true, 'Test 64');
test(checkIfCanBreak("xyzz", "yyzz"), true, 'Test 65');
test(checkIfCanBreak("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzzyyxwwvvuttsrrqqponnmlkkjjiihhggffeeeeddccbbaa"), false, 'Test 66');
test(checkIfCanBreak("aabbcc", "bbccaa"), true, 'Test 67');
test(checkIfCanBreak("aaaaabbbbbcccccc", "bbbbbaaaaacccccb"), true, 'Test 68');
test(checkIfCanBreak("abcdefghijklmnop", "ponmlkjihgfedcba"), true, 'Test 69');
test(checkIfCanBreak("mississippi", "ppssiiimmm"), false, 'Test 70');
test(checkIfCanBreak("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa"), true, 'Test 71');
test(checkIfCanBreak("abacabadabacaba", "zxyzyxzyxzyxzyxzyx"), true, 'Test 72');
test(checkIfCanBreak("abcdef", "ghijkl"), true, 'Test 73');
test(checkIfCanBreak("aabbbcccddddeeeeffffgggghhhhiiiiiijjjjjjkkkkkkllllllmmmmmmmnnnnnnnooooooooppppppppqqqqqqqqrrrrrrrrssssssssstttttttttuuuuuuuuuvvvvvvvvvwwwwwwwwwxxxxxxxxxyyyyyyyyyzzzzzzzzz", "zzzzzzzzzyyyyyyyyyxxxxxxxxxwwwwwwwwwvvvvvvvvvuuuuuuuuutttttttttssssssssrrrrrrrrqqqqqqqqppppppppooooooonnnnnnnmmmmmmmllllllkkkkkkjjjjjjiiiiiiggggffffeeeeeeeeeddddddccccbbbaaa"), true, 'Test 74');
test(checkIfCanBreak("aaaabbbbcccc", "ccccbbbbaaaa"), true, 'Test 75');
test(checkIfCanBreak("aabcc", "bbdda"), true, 'Test 76');
test(checkIfCanBreak("congratulations", "stucgnioalort"), true, 'Test 77');
test(checkIfCanBreak("abcdabcdabcd", "dcbaabcddcba"), true, 'Test 78');
test(checkIfCanBreak("permutation", "nutationspr"), true, 'Test 79');
test(checkIfCanBreak("abcdefghijklmnopqrstuvwxyzz", "zzzzzyzyxwvutsrqponmlkjihgfedcba"), true, 'Test 80');
test(checkIfCanBreak("aaaaaaab", "baaaaaaa"), true, 'Test 81');
test(checkIfCanBreak("equalstring", "equalstring"), true, 'Test 82');
test(checkIfCanBreak("abcdefghijk", "zyxwvutsrqz"), true, 'Test 83');
test(checkIfCanBreak("aaaaaa", "bbbbbb"), true, 'Test 84');
test(checkIfCanBreak("abcdabcd", "dcbaabcd"), true, 'Test 85');
test(checkIfCanBreak("abcdefghij", "jihgfedcba"), true, 'Test 86');
test(checkIfCanBreak("abcdabcdabcdabcdabcd", "dcbaabdcbaabdcbaabdcba"), true, 'Test 87');
test(checkIfCanBreak("optimization", "nttimzpiaoos"), true, 'Test 88');
test(checkIfCanBreak("optimization", "izationoptim"), true, 'Test 89');
test(checkIfCanBreak("abcdefghij", "abcdefghij"), true, 'Test 90');
test(checkIfCanBreak("leetcodeleetcode", "interviewinterview"), true, 'Test 91');
test(checkIfCanBreak("qwertypoiuytrewq", "mnbvcxzlkjhgfd"), false, 'Test 92');
test(checkIfCanBreak("abacabadabacaba", "zyxzyxzyxzyxzyx"), true, 'Test 93');
test(checkIfCanBreak("mississippi", "pississippi"), true, 'Test 94');
test(checkIfCanBreak("aaaaaaaaaabbbbbbbbbbcccccccccc", "ccccccccccbbbbbbbbbbaaaaaaaaaa"), true, 'Test 95');
test(checkIfCanBreak("longerstringexample", "examplelongerstring"), true, 'Test 96');
test(checkIfCanBreak("abacabacabacabac", "zyxzyxzyxzyxzyxzyx"), true, 'Test 97');
test(checkIfCanBreak("abcabcabc", "xyzxyzxyz"), true, 'Test 98');
test(checkIfCanBreak("pqrstuvw", "qrstuvwp"), true, 'Test 99');
test(checkIfCanBreak("abcdef", "fedcba"), true, 'Test 100');
test(checkIfCanBreak("pqrsrpqrsrpqrsr", "zyxwzyxwzyxwzyx"), true, 'Test 101');
test(checkIfCanBreak("abcde", "edcba"), true, 'Test 102');
test(checkIfCanBreak("abcdefghijklnmopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), true, 'Test 103');
test(checkIfCanBreak("abcdefghijabcdefghijabcdefghij", "zyxwvutsrqzyxwvutsrqzyxwvutsrq"), true, 'Test 104');
test(checkIfCanBreak("interview", "terviewin"), true, 'Test 105');
test(checkIfCanBreak("mnopqr", "rstuvw"), true, 'Test 106');
test(checkIfCanBreak("abacabadabacaba", "zzzzzzzzzzzzzzz"), true, 'Test 107');
test(checkIfCanBreak("break", "maker"), true, 'Test 108');
test(checkIfCanBreak("qrstuv", "vwxyza"), false, 'Test 109');
test(checkIfCanBreak("permutation", "interwoven"), true, 'Test 110');
test(checkIfCanBreak("abcdxyz", "zyxcbaa"), true, 'Test 111');
test(checkIfCanBreak("zzzzz", "aaaaa"), true, 'Test 112');
test(checkIfCanBreak("aabbbccc", "cccbbbaa"), true, 'Test 113');
test(checkIfCanBreak("abcdefg", "ghijklm"), true, 'Test 114');
test(checkIfCanBreak("leetcode", "docodele"), true, 'Test 115');
test(checkIfCanBreak("xyzz", "wxyz"), true, 'Test 116');
test(checkIfCanBreak("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), true, 'Test 117');
test(checkIfCanBreak("zzzzzzzzzzzzzzzzzz", "aaaaaaaaaaaaaaaaaa"), true, 'Test 118');
test(checkIfCanBreak("banana", "anabna"), true, 'Test 119');
test(checkIfCanBreak("mississippi", "ppissimiss"), true, 'Test 120');

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
