// Test: 712. Minimum Ascii Delete Sum For Two Strings
// 115 test cases from LeetCodeDataset
// Run: node test.js

const { minimumDeleteSum } = require("./solution");

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

console.log("\n712. Minimum Ascii Delete Sum For Two Strings\n");

test(minimumDeleteSum("delete", "leet"), 403, 'Test 1');
test(minimumDeleteSum("aaa", "aa"), 97, 'Test 2');
test(minimumDeleteSum("abc", "abcde"), 201, 'Test 3');
test(minimumDeleteSum("", "abc"), 294, 'Test 4');
test(minimumDeleteSum("abc", ""), 294, 'Test 5');
test(minimumDeleteSum("abc", "def"), 597, 'Test 6');
test(minimumDeleteSum("pqr", "pqr"), 0, 'Test 7');
test(minimumDeleteSum("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), 5450, 'Test 8');
test(minimumDeleteSum("aaa", "aaa"), 0, 'Test 9');
test(minimumDeleteSum("sea", "eat"), 231, 'Test 10');
test(minimumDeleteSum("a", "b"), 195, 'Test 11');
test(minimumDeleteSum("abcabcabc", "abc"), 588, 'Test 12');
test(minimumDeleteSum("abcdef", "fedcba"), 990, 'Test 13');
test(minimumDeleteSum("xyz", "zyxwv"), 719, 'Test 14');
test(minimumDeleteSum("a", "a"), 0, 'Test 15');
test(minimumDeleteSum("", ""), 0, 'Test 16');
test(minimumDeleteSum("algorithm", "rhythm"), 749, 'Test 17');
test(minimumDeleteSum("abcdefgh", "ijklmnop"), 1672, 'Test 18');
test(minimumDeleteSum("algorithm", "logarithm"), 400, 'Test 19');
test(minimumDeleteSum("abcdxyz", "xyzabcd"), 726, 'Test 20');
test(minimumDeleteSum("interview", "interference"), 969, 'Test 21');
test(minimumDeleteSum("sequencealignment", "simple"), 1606, 'Test 22');
test(minimumDeleteSum("abcdeabcdeabcde", "decadecadecade"), 1077, 'Test 23');
test(minimumDeleteSum("aaaaabbbb", "bbbbbbaaa"), 972, 'Test 24');
test(minimumDeleteSum("aaaabbbbccccdddd", "bbbbaaaaccccdddd"), 776, 'Test 25');
test(minimumDeleteSum("short", "longerstring"), 1188, 'Test 26');
test(minimumDeleteSum("abracadabra", "avocado"), 1055, 'Test 27');
test(minimumDeleteSum("aabbccddeeff", "ffeeddccba"), 1785, 'Test 28');
test(minimumDeleteSum("abcdabcdabcdabcdabcdabcdabcdabcd", "abcd"), 2758, 'Test 29');
test(minimumDeleteSum("supercalifragilisticexpialidocious", "supercalifragilistic"), 1506, 'Test 30');
test(minimumDeleteSum("abcdefg", "xyzabc"), 769, 'Test 31');
test(minimumDeleteSum("abcdefg", "gfedcba"), 1194, 'Test 32');
test(minimumDeleteSum("ababababab", "babababa"), 195, 'Test 33');
test(minimumDeleteSum("racecar", "carrace"), 620, 'Test 34');
test(minimumDeleteSum("programming", "algorithm"), 1486, 'Test 35');
test(minimumDeleteSum("longstringfortesting", "anotherlongstringfortesting"), 753, 'Test 36');
test(minimumDeleteSum("programming", "programmer"), 533, 'Test 37');
test(minimumDeleteSum("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqppoonnmmllkkiijjhhhgggffeeeeddccbbaa"), 10953, 'Test 38');
test(minimumDeleteSum("abcdabcdabcd", "dcba"), 982, 'Test 39');
test(minimumDeleteSum("ababcabcabc", "abcabcabc"), 195, 'Test 40');
test(minimumDeleteSum("elephant", "hippopotamus"), 1714, 'Test 41');
test(minimumDeleteSum("recursion", "iteration"), 879, 'Test 42');
test(minimumDeleteSum("aabbcc", "ababab"), 393, 'Test 43');
test(minimumDeleteSum("abacaxbab", "abcabc"), 511, 'Test 44');
test(minimumDeleteSum("abcde", "fghij"), 1015, 'Test 45');
test(minimumDeleteSum("dynamicprogramming", "dynamictimeprogramming"), 431, 'Test 46');
test(minimumDeleteSum("programming", "prognosis"), 1083, 'Test 47');
test(minimumDeleteSum("sunshine", "shinesun"), 684, 'Test 48');
test(minimumDeleteSum("interviewquestion", "interviewquery"), 792, 'Test 49');
test(minimumDeleteSum("aabbccddeeffgg", "abcdfg"), 801, 'Test 50');
test(minimumDeleteSum("mississippi", "missisipi"), 227, 'Test 51');
test(minimumDeleteSum("hello", "yellow"), 344, 'Test 52');
test(minimumDeleteSum("xylophone", "xylophone"), 0, 'Test 53');
test(minimumDeleteSum("aaaaabbbbbbbbaaa", "aaaaaaaaaabbbbbba"), 875, 'Test 54');
test(minimumDeleteSum("abcdexyz", "xyzabcd"), 827, 'Test 55');
test(minimumDeleteSum("abcd", "dcba"), 588, 'Test 56');
test(minimumDeleteSum("mississippi", "mississippi"), 0, 'Test 57');
test(minimumDeleteSum("xyzzxyzzxyzz", "zzxyzzxyzzxy"), 482, 'Test 58');
test(minimumDeleteSum("sequence", "subsequence"), 330, 'Test 59');
test(minimumDeleteSum("abcdabcdabcd", "abcabcabcabc"), 594, 'Test 60');
test(minimumDeleteSum("abcdefghikjlmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), 5268, 'Test 61');
test(minimumDeleteSum("kitten", "sitting"), 531, 'Test 62');
test(minimumDeleteSum("abcdef", "ghijkl"), 1230, 'Test 63');
test(minimumDeleteSum("abcdexyz", "defghijk"), 1284, 'Test 64');
test(minimumDeleteSum("aaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbb"), 2925, 'Test 65');
test(minimumDeleteSum("kshdfjkhewriukhweriukhweriukhwer", "wriukhweriukhwer"), 1713, 'Test 66');
test(minimumDeleteSum("aaaaabbbbb", "bbbbbcccc"), 881, 'Test 67');
test(minimumDeleteSum("abcdefg", "xyz"), 1063, 'Test 68');
test(minimumDeleteSum("aaaaaa", "bbbbbb"), 1170, 'Test 69');
test(minimumDeleteSum("programming", "remmargorp"), 1401, 'Test 70');
test(minimumDeleteSum("abcdefghij", "jihgfedcba"), 1818, 'Test 71');
test(minimumDeleteSum("programming", "program"), 427, 'Test 72');
test(minimumDeleteSum("leetcode", "codeleet"), 822, 'Test 73');
test(minimumDeleteSum("zzzzz", "zzzzzzzz"), 366, 'Test 74');
test(minimumDeleteSum("mississippi", "pississippi"), 221, 'Test 75');
test(minimumDeleteSum("samestring", "samestring"), 0, 'Test 76');
test(minimumDeleteSum("aabbccddeeffgghhii", "iihhggffeeddccbbaa"), 3216, 'Test 77');
test(minimumDeleteSum("mississippi", "missisippi"), 115, 'Test 78');
test(minimumDeleteSum("dynamicprogramming", "longestcommonsubsequence"), 3232, 'Test 79');
test(minimumDeleteSum("abcxyz", "xyzabc"), 588, 'Test 80');
test(minimumDeleteSum("abcdabcdabcd", "xyzxyzxyz"), 2271, 'Test 81');
test(minimumDeleteSum("qwertyuiopasdfghjklzxcvbnm", "mnbvcxzlkjhgfdsapoiuytrewq"), 5450, 'Test 82');
test(minimumDeleteSum("dynamicprogramming", "recursion"), 2028, 'Test 83');
test(minimumDeleteSum("ababababab", "bababababa"), 194, 'Test 84');
test(minimumDeleteSum("xyzzyxzyxzyxz", "zyxzyxzyxzyx"), 604, 'Test 85');
test(minimumDeleteSum("abcd", "efgh"), 804, 'Test 86');
test(minimumDeleteSum("xylophone", "polyphonexy"), 911, 'Test 87');
test(minimumDeleteSum("longstringwithvariouscharacters", "anotherstringwithdifferentcharacters"), 2463, 'Test 88');
test(minimumDeleteSum("repeatedcharacters", "repeatedcharactersrepeatedcharacters"), 1898, 'Test 89');
test(minimumDeleteSum("minimum", "maximum"), 432, 'Test 90');
test(minimumDeleteSum("abcde", "edcba"), 788, 'Test 91');
test(minimumDeleteSum("abcdefghij", "abcdefghijk"), 107, 'Test 92');
test(minimumDeleteSum("mississippi", "basketball"), 2028, 'Test 93');
test(minimumDeleteSum("mississippi", "pisissip"), 553, 'Test 94');
test(minimumDeleteSum("abcdabcdabcd", "abcd"), 788, 'Test 95');
test(minimumDeleteSum("aaaaabbbbb", "bbbbbbaaaa"), 971, 'Test 96');
test(minimumDeleteSum("abcdabcdabcd", "abc"), 888, 'Test 97');
test(minimumDeleteSum("ascii", "unicode"), 1054, 'Test 98');
test(minimumDeleteSum("supercalifragilisticexpialidocious", "supercalifragilisticexpialidocious"), 0, 'Test 99');
test(minimumDeleteSum("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttsrrqqppoonnmlkkjjiihhggffeeeeddccbbaa"), 10770, 'Test 100');
test(minimumDeleteSum("interspecies", "interstellar"), 1075, 'Test 101');
test(minimumDeleteSum("waterbottle", "erbottlewat"), 664, 'Test 102');
test(minimumDeleteSum("lalalalala", "alalalalal"), 194, 'Test 103');
test(minimumDeleteSum("abracadabra", "avadakedavra"), 953, 'Test 104');
test(minimumDeleteSum("xyz", "zyxzyxzyx"), 726, 'Test 105');
test(minimumDeleteSum("longerstring", "short"), 1188, 'Test 106');
test(minimumDeleteSum("mississippi", "mississippimiss"), 444, 'Test 107');
test(minimumDeleteSum("elephant", "elephant"), 0, 'Test 108');
test(minimumDeleteSum("programming", "ogramming"), 226, 'Test 109');
test(minimumDeleteSum("abcdabcdabcd", "abcabcabc"), 300, 'Test 110');
test(minimumDeleteSum("longest", "commonsubsequence"), 1928, 'Test 111');
test(minimumDeleteSum("abcdefghijk", "fedcbaolmijkpqrstuvwxyz"), 2812, 'Test 112');
test(minimumDeleteSum("programming", "development"), 1712, 'Test 113');
test(minimumDeleteSum("transformation", "transformation"), 0, 'Test 114');
test(minimumDeleteSum("longestcommonsubsequence", "shortestcommonsubsequence"), 770, 'Test 115');

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
