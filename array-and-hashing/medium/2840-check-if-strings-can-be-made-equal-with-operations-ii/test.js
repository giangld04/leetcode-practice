// Test: 2840. Check If Strings Can Be Made Equal With Operations Ii
// 127 test cases from LeetCodeDataset
// Run: node test.js

const { checkStrings } = require("./solution");

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

console.log("\n2840. Check If Strings Can Be Made Equal With Operations Ii\n");

test(checkStrings("aabbcc", "bbaacc"), true, 'Test 1');
test(checkStrings("abcdabcd", "dcbadcba"), false, 'Test 2');
test(checkStrings("abcdba", "cabdab"), true, 'Test 3');
test(checkStrings("a", "a"), true, 'Test 4');
test(checkStrings("hello", "olelh"), false, 'Test 5');
test(checkStrings("aabbcc", "acbbca"), true, 'Test 6');
test(checkStrings("abcd", "cdab"), true, 'Test 7');
test(checkStrings("abcdef", "fedcba"), false, 'Test 8');
test(checkStrings("xyz", "zyx"), true, 'Test 9');
test(checkStrings("ab", "ba"), false, 'Test 10');
test(checkStrings("abe", "bea"), false, 'Test 11');
test(checkStrings("abcd", "dcba"), false, 'Test 12');
test(checkStrings("aabbccddeeff", "ffeeddccbbaa"), true, 'Test 13');
test(checkStrings("mississippi", "ssimmppiiss"), false, 'Test 14');
test(checkStrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzyyxwwvvuuttrrssqqppoonnmmllkkjjiihhggffeeeeddccbbaa"), false, 'Test 15');
test(checkStrings("palindrome", "paldinrome"), false, 'Test 16');
test(checkStrings("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), false, 'Test 17');
test(checkStrings("racecar", "acecarr"), false, 'Test 18');
test(checkStrings("aaabbbccc", "bbbaaacc"), false, 'Test 19');
test(checkStrings("oddindexedswap", "doidndexswpoa"), false, 'Test 20');
test(checkStrings("abcdefghijabcdefghijabcdefghij", "abcdefghijabcdefghijabcdefghjk"), false, 'Test 21');
test(checkStrings("level", "level"), true, 'Test 22');
test(checkStrings("deified", "deified"), true, 'Test 23');
test(checkStrings("evenlydistributedstring", "elvnyeedisutrdstrign"), false, 'Test 24');
test(checkStrings("aabbcc", "ccbbaa"), true, 'Test 25');
test(checkStrings("pqrstuv", "upqrsvt"), false, 'Test 26');
test(checkStrings("rotor", "rotar"), false, 'Test 27');
test(checkStrings("abcdefg", "gfedcba"), true, 'Test 28');
test(checkStrings("racecar", "carrace"), false, 'Test 29');
test(checkStrings("abababab", "babababa"), false, 'Test 30');
test(checkStrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), true, 'Test 31');
test(checkStrings("zxcvbnm", "mnbvcxz"), true, 'Test 32');
test(checkStrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxwwvvuuttssrrqppoonnllkkjjiihhggeeffdccbbbaa"), false, 'Test 33');
test(checkStrings("abcdefgh", "gfehdcba"), false, 'Test 34');
test(checkStrings("abcdefghijabcdefghijabcdefghij", "bacdfegihjbacdfegihjbacdfegihj"), false, 'Test 35');
test(checkStrings("aaaabbbbccccddddeeeeffffgggghhhh", "hhhhggggffffeeeeddddbbbbccccaaaa"), true, 'Test 36');
test(checkStrings("hellohello", "ehlolhloel"), false, 'Test 37');
test(checkStrings("abacabadabacaba", "abaabacabadabaaba"), false, 'Test 38');
test(checkStrings("abcdabcdabcdabcd", "bacdbacdbacdbacd"), false, 'Test 39');
test(checkStrings("banana", "ananab"), false, 'Test 40');
test(checkStrings("abcabcabcabcabcabcabcabcabcabc", "bababababababababababababababababa"), false, 'Test 41');
test(checkStrings("zzzzzzzzzz", "zzzzzzzzzz"), true, 'Test 42');
test(checkStrings("abacabadabacabad", "babaacabadabacab"), false, 'Test 43');
test(checkStrings("abcdabcdabcdabcd", "ddddccccbbbbaaaa"), false, 'Test 44');
test(checkStrings("aabbccddeeff", "abbaccddffee"), true, 'Test 45');
test(checkStrings("xyzxyzxyzxyz", "zyxzyxzyxzyx"), true, 'Test 46');
test(checkStrings("abcdefghijklmnopqrstuvwxyzz", "zzabcdefghijklmnopqrstuvwxy"), true, 'Test 47');
test(checkStrings("thisisaverylongstring", "tihisrasevylnsgtrnogi"), false, 'Test 48');
test(checkStrings("mississippi", "ppissimissi"), true, 'Test 49');
test(checkStrings("aaaaaabbbbbb", "bbbbbaaaaaa"), false, 'Test 50');
test(checkStrings("abacabadabacaba", "aabacabadabacab"), false, 'Test 51');
test(checkStrings("abcdefghijkmnopqrstuvwxyz", "bacdfeghijkmnopqrstvwxyz"), false, 'Test 52');
test(checkStrings("abacabadabacabad", "babaacabdacaba"), false, 'Test 53');
test(checkStrings("abcdef", "fdecba"), false, 'Test 54');
test(checkStrings("abcdefghijk", "jihgfedcbaa"), false, 'Test 55');
test(checkStrings("mississippi", "imississipp"), false, 'Test 56');
test(checkStrings("qwertqwert", "wqerqewtqw"), false, 'Test 57');
test(checkStrings("mississippi", "ssissimippi"), true, 'Test 58');
test(checkStrings("almostsame", "lmostsae"), false, 'Test 59');
test(checkStrings("abcdefgabcdefg", "gfedcbagfedcba"), true, 'Test 60');
test(checkStrings("abcdefghijklmnopqrstuvwx", "bacdfeghijklmnopqrstuvxw"), false, 'Test 61');
test(checkStrings("abcdefghijkll", "llijkgfhecdba"), false, 'Test 62');
test(checkStrings("abcabcabc", "bcabcbaca"), false, 'Test 63');
test(checkStrings("zaybzcyd", "dzbyazcy"), false, 'Test 64');
test(checkStrings("abcdefghef", "gdefhabcef"), false, 'Test 65');
test(checkStrings("aabbcc", "bbccaa"), true, 'Test 66');
test(checkStrings("abcabcabc", "cbacbacba"), true, 'Test 67');
test(checkStrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "bbbbccccddddeeeeffffgggghhhhiiijjjkkkllmmnnooppqqrrssttuuvvwwxxyyzz"), false, 'Test 68');
test(checkStrings("abcdefghijklmnop", "ponmlkjihgfedcba"), false, 'Test 69');
test(checkStrings("programming", "pgmrnomggin"), false, 'Test 70');
test(checkStrings("repaper", "repaper"), true, 'Test 71');
test(checkStrings("abcdefgihjklmnopqrstuvwxyz", "bacdfegihjklmnopqrstuvwxzy"), false, 'Test 72');
test(checkStrings("abcdeffedcba", "fedcbaffedcba"), false, 'Test 73');
test(checkStrings("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), false, 'Test 74');
test(checkStrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeeeddccbbbaa"), false, 'Test 75');
test(checkStrings("sameorder", "sameorder"), true, 'Test 76');
test(checkStrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "bbaaccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), true, 'Test 77');
test(checkStrings("abcdabcd", "dcbaabcd"), false, 'Test 78');
test(checkStrings("abcdefghij", "jihgfedcba"), false, 'Test 79');
test(checkStrings("pqrstuvw", "wvutsrqp"), false, 'Test 80');
test(checkStrings("zyxwvutsrqponmlkjihgfedcba", "yxwvuztsrqponmlkjihgfedcba"), false, 'Test 81');
test(checkStrings("abcdefghij", "aecgbdfhij"), false, 'Test 82');
test(checkStrings("acdbegfh", "bfegacdh"), false, 'Test 83');
test(checkStrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), false, 'Test 84');
test(checkStrings("abadecafagbahbbhacdg", "bdacegafabchbahbadcg"), false, 'Test 85');
test(checkStrings("abcdefghij", "abcdefghij"), true, 'Test 86');
test(checkStrings("aabbaabb", "bbaabbaa"), true, 'Test 87');
test(checkStrings("xyzzyxzyxzyx", "zyxzyxzyxzyx"), true, 'Test 88');
test(checkStrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzzyyyxxxwwvvuuttssrrqqppoonnllkkjjiihhggeeffddeebbcaaa"), false, 'Test 89');
test(checkStrings("abcabcabcabc", "cbacbacbacba"), true, 'Test 90');
test(checkStrings("racecar", "racecar"), true, 'Test 91');
test(checkStrings("abacabadabacabad", "badcbadcbadcba"), false, 'Test 92');
test(checkStrings("abacabadabacaba", "abacabaabacabada"), false, 'Test 93');
test(checkStrings("aabbccddeeff", "fbeeccddbaaa"), false, 'Test 94');
test(checkStrings("noon", "noon"), true, 'Test 95');
test(checkStrings("aaabbbcccddd", "dddcccbbbaaa"), false, 'Test 96');
test(checkStrings("zxyxzyzyx", "yxzyxzyxq"), false, 'Test 97');
test(checkStrings("mississippi", "ppimississi"), false, 'Test 98');
test(checkStrings("abcdefghij", "gbihfedcja"), false, 'Test 99');
test(checkStrings("aabbccddeeffgghhiijj", "jjiihhggffeeeddccbaa"), false, 'Test 100');
test(checkStrings("zzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzz"), true, 'Test 101');
test(checkStrings("aabbaabbaabb", "bbaabbaabbba"), false, 'Test 102');
test(checkStrings("abcdefg", "afedcba"), false, 'Test 103');
test(checkStrings("abacabad", "dcadcbab"), false, 'Test 104');
test(checkStrings("aabbccdd", "ddccbbaa"), true, 'Test 105');
test(checkStrings("ababababababababababababab", "bababababababababababababa"), false, 'Test 106');
test(checkStrings("noonnoon", "nnoonnou"), false, 'Test 107');
test(checkStrings("ababab", "bababa"), false, 'Test 108');
test(checkStrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abbaccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), true, 'Test 109');
test(checkStrings("abcdefgihjklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), false, 'Test 110');
test(checkStrings("abcdefghij", "jeihgfedcb"), false, 'Test 111');
test(checkStrings("abcdefghijk", "jihgfedcbak"), false, 'Test 112');
test(checkStrings("qwertypoiuytrewq", "qwertyuiytrewpoi"), false, 'Test 113');
test(checkStrings("rotor", "rotor"), true, 'Test 114');
test(checkStrings("pneumonoultramicroscopicsilicovolcanoconiosis", "pneumonoultramicroscopicsilicovolcanoconiosis"), true, 'Test 115');
test(checkStrings("noonoon", "nooouon"), false, 'Test 116');
test(checkStrings("detartrated", "detartrated"), true, 'Test 117');
test(checkStrings("abcdabcdabcd", "dcbaabcdabcd"), false, 'Test 118');
test(checkStrings("aabbaabbaabbaabb", "bbaabbaabbaabbaa"), true, 'Test 119');
test(checkStrings("mnopqrstuvwxyzabcdefghijkl", "onmpqrstuvwxyzabcdefghijkl"), true, 'Test 120');
test(checkStrings("abcdabcd", "cdabcdab"), true, 'Test 121');
test(checkStrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttrrqqppoonnllkkjjiihhggeeffddeeaabbcc"), false, 'Test 122');
test(checkStrings("xyxzyzyx", "yxzyxzyz"), false, 'Test 123');
test(checkStrings("pqrstuvwx", "vutsrqpwx"), true, 'Test 124');
test(checkStrings("abacabadabacabaa", "abaabacabadabaab"), false, 'Test 125');
test(checkStrings("abcdefghijklmnopqrstuvwxyz", "zabcdefghijklmnopqrstuvwxy"), false, 'Test 126');
test(checkStrings("aabbccddeeff", "bbccddeeffaa"), true, 'Test 127');

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
