// Test: 1638. Count Substrings That Differ By One Character
// 156 test cases from LeetCodeDataset
// Run: node test.js

const { countSubstrings } = require("./solution");

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

console.log("\n1638. Count Substrings That Differ By One Character\n");

test(countSubstrings("abc", "abcd"), 9, 'Test 1');
test(countSubstrings("abcde", "bcdef"), 21, 'Test 2');
test(countSubstrings("aaaa", "bbbb"), 16, 'Test 3');
test(countSubstrings("xyz", "xya"), 9, 'Test 4');
test(countSubstrings("python", "typhon"), 40, 'Test 5');
test(countSubstrings("xyz", "xyy"), 9, 'Test 6');
test(countSubstrings("zzz", "zzz"), 0, 'Test 7');
test(countSubstrings("same", "same"), 12, 'Test 8');
test(countSubstrings("abcd", "abcf"), 16, 'Test 9');
test(countSubstrings("abcde", "fghij"), 25, 'Test 10');
test(countSubstrings("abcabc", "abcabc"), 24, 'Test 11');
test(countSubstrings("aaaa", "aaab"), 10, 'Test 12');
test(countSubstrings("mississippi", "misissippi"), 126, 'Test 13');
test(countSubstrings("xyz", "xyw"), 9, 'Test 14');
test(countSubstrings("a", "a"), 0, 'Test 15');
test(countSubstrings("abcd", "dcba"), 16, 'Test 16');
test(countSubstrings("abc", "def"), 9, 'Test 17');
test(countSubstrings("a", "b"), 1, 'Test 18');
test(countSubstrings("test", "tast"), 16, 'Test 19');
test(countSubstrings("aba", "baba"), 6, 'Test 20');
test(countSubstrings("aaa", "aaa"), 0, 'Test 21');
test(countSubstrings("test", "text"), 16, 'Test 22');
test(countSubstrings("abcd", "abce"), 16, 'Test 23');
test(countSubstrings("hello", "hallo"), 30, 'Test 24');
test(countSubstrings("code", "cide"), 18, 'Test 25');
test(countSubstrings("ab", "bb"), 3, 'Test 26');
test(countSubstrings("same", "sane"), 18, 'Test 27');
test(countSubstrings("abcdefg", "abcdxyz"), 49, 'Test 28');
test(countSubstrings("aaaaaab", "aaaaaac"), 49, 'Test 29');
test(countSubstrings("qwertyuiop", "qwertuiopq"), 99, 'Test 30');
test(countSubstrings("banana", "banane"), 38, 'Test 31');
test(countSubstrings("asdfghjkl", "asdfghjkl"), 72, 'Test 32');
test(countSubstrings("substring", "substrung"), 94, 'Test 33');
test(countSubstrings("aaaaabbbbb", "bbbbbbaaaa"), 91, 'Test 34');
test(countSubstrings("banana", "anana"), 21, 'Test 35');
test(countSubstrings("algorithm", "algorihm"), 72, 'Test 36');
test(countSubstrings("racecar", "racecdr"), 55, 'Test 37');
test(countSubstrings("abacaba", "abacabb"), 50, 'Test 38');
test(countSubstrings("aabbcc", "aabbcz"), 41, 'Test 39');
test(countSubstrings("abcdefg", "gfedcba"), 52, 'Test 40');
test(countSubstrings("aabbccddeeff", "aaabccddeeff"), 177, 'Test 41');
test(countSubstrings("hellohello", "hellohelll"), 101, 'Test 42');
test(countSubstrings("aabbccdd", "bbccddaa"), 64, 'Test 43');
test(countSubstrings("racecar", "racecars"), 52, 'Test 44');
test(countSubstrings("xyzxyzxyz", "zyxzyxzyx"), 96, 'Test 45');
test(countSubstrings("programming", "programminh"), 125, 'Test 46');
test(countSubstrings("banana", "bandana"), 44, 'Test 47');
test(countSubstrings("abcdefg", "abcdefgh"), 49, 'Test 48');
test(countSubstrings("qwert", "qwqrt"), 29, 'Test 49');
test(countSubstrings("abcdefg", "abcdeff"), 49, 'Test 50');
test(countSubstrings("abcdefghij", "abcdefghjk"), 100, 'Test 51');
test(countSubstrings("abcabcabc", "abcabcabd"), 72, 'Test 52');
test(countSubstrings("aaaaabbbbb", "aaaabbbbbb"), 123, 'Test 53');
test(countSubstrings("abcdefghij", "abcdefghib"), 100, 'Test 54');
test(countSubstrings("abcdefghi", "abcfghi"), 63, 'Test 55');
test(countSubstrings("hellohello", "hallohallo"), 134, 'Test 56');
test(countSubstrings("abcdefgh", "abcdefgha"), 63, 'Test 57');
test(countSubstrings("qwert", "qwera"), 25, 'Test 58');
test(countSubstrings("programming", "progrcmming"), 150, 'Test 59');
test(countSubstrings("banana", "banama"), 42, 'Test 60');
test(countSubstrings("pneumonoultramicroscopicsilicovolcanoconiosis", "pneumonoultramicroscopicsilicovolcanoconiosus"), 2250, 'Test 61');
test(countSubstrings("abcdabcd", "abceabcd"), 72, 'Test 62');
test(countSubstrings("abcdefghij", "abcdefghix"), 100, 'Test 63');
test(countSubstrings("example", "exampel"), 48, 'Test 64');
test(countSubstrings("abcdefgh", "abxdefgh"), 74, 'Test 65');
test(countSubstrings("abcabcabc", "defdefdef"), 81, 'Test 66');
test(countSubstrings("programming", "prognamming"), 149, 'Test 67');
test(countSubstrings("abcdefghij", "jihgfedcba"), 106, 'Test 68');
test(countSubstrings("pneumonoultramicroscopicsilicovolcanoconiosis", "pneumonoultramicroscopicsilicovolcanoconiosi"), 2118, 'Test 69');
test(countSubstrings("abcdef", "fedcba"), 38, 'Test 70');
test(countSubstrings("abcdabcd", "dcbaabcd"), 66, 'Test 71');
test(countSubstrings("abcdefgh", "fedcbagh"), 68, 'Test 72');
test(countSubstrings("abcdefgh", "abcdexyz"), 64, 'Test 73');
test(countSubstrings("abcdefg", "fghijkl"), 47, 'Test 74');
test(countSubstrings("abcdefg", "abcdefh"), 49, 'Test 75');
test(countSubstrings("abcdefghij", "abcdefghia"), 99, 'Test 76');
test(countSubstrings("abcdef", "abcxef"), 42, 'Test 77');
test(countSubstrings("abcdeabcde", "abcdeabcda"), 94, 'Test 78');
test(countSubstrings("xyzzyx", "zyxzyx"), 38, 'Test 79');
test(countSubstrings("zxcvbnm", "zxsvbnm"), 57, 'Test 80');
test(countSubstrings("abcdabcd", "abxdabcd"), 72, 'Test 81');
test(countSubstrings("mississippi", "misssissippi"), 155, 'Test 82');
test(countSubstrings("longerstring", "longerstirng"), 148, 'Test 83');
test(countSubstrings("pqrstuvw", "pqrsvwxy"), 64, 'Test 84');
test(countSubstrings("zzzzzzzzzz", "zzzzzzzzza"), 55, 'Test 85');
test(countSubstrings("abcdefg", "abcdefi"), 49, 'Test 86');
test(countSubstrings("substring", "substrang"), 93, 'Test 87');
test(countSubstrings("abacaba", "abaxaba"), 56, 'Test 88');
test(countSubstrings("abcabcabc", "abcabcab"), 48, 'Test 89');
test(countSubstrings("abcdefgh", "abcefgih"), 67, 'Test 90');
test(countSubstrings("abcdefgabcdefg", "abcdefgabcdeff"), 189, 'Test 91');
test(countSubstrings("python", "pythpn"), 40, 'Test 92');
test(countSubstrings("abcdabcd", "abcddcba"), 66, 'Test 93');
test(countSubstrings("abcdefg", "abcdefj"), 49, 'Test 94');
test(countSubstrings("testtest", "tasttest"), 68, 'Test 95');
test(countSubstrings("algorithm", "algorithr"), 81, 'Test 96');
test(countSubstrings("aaaaab", "aaaabb"), 35, 'Test 97');
test(countSubstrings("programming", "programming"), 114, 'Test 98');
test(countSubstrings("banana", "bananas"), 40, 'Test 99');
test(countSubstrings("testcase", "tastcase"), 73, 'Test 100');
test(countSubstrings("aabbcc", "aabbbcc"), 54, 'Test 101');
test(countSubstrings("qwertyuiop", "qwertuiop"), 90, 'Test 102');
test(countSubstrings("programming", "programmimg"), 136, 'Test 103');
test(countSubstrings("aabbccddeeff", "aabbccddeegg"), 160, 'Test 104');
test(countSubstrings("abcdefg", "abcdefa"), 48, 'Test 105');
test(countSubstrings("abcabcabc", "abcababc"), 66, 'Test 106');
test(countSubstrings("abcabcabc", "abcabcbca"), 71, 'Test 107');
test(countSubstrings("abcdefghij", "abcdefghja"), 99, 'Test 108');
test(countSubstrings("testtest", "settsett"), 83, 'Test 109');
test(countSubstrings("abcdefgh", "efghabcd"), 56, 'Test 110');
test(countSubstrings("abacaba", "abacaba"), 40, 'Test 111');
test(countSubstrings("abcdxyz", "xyzabcd"), 42, 'Test 112');
test(countSubstrings("zzzzzz", "zzzzzz"), 0, 'Test 113');
test(countSubstrings("pqrstuv", "qrsuvwp"), 48, 'Test 114');
test(countSubstrings("abcabcabc", "ababcabc"), 63, 'Test 115');
test(countSubstrings("abcdefghijk", "abcdefghijx"), 121, 'Test 116');
test(countSubstrings("algorithm", "algorihtm"), 83, 'Test 117');
test(countSubstrings("abcdabcd", "abacabad"), 74, 'Test 118');
test(countSubstrings("zzzzz", "zzzzz"), 0, 'Test 119');
test(countSubstrings("xyzz", "xyyz"), 18, 'Test 120');
test(countSubstrings("banana", "bananna"), 44, 'Test 121');
test(countSubstrings("programming", "progrMming"), 118, 'Test 122');
test(countSubstrings("aaaaabbbb", "aaaabbbbb"), 98, 'Test 123');
test(countSubstrings("pattern", "patterr"), 51, 'Test 124');
test(countSubstrings("abacax", "abacay"), 40, 'Test 125');
test(countSubstrings("mississippi", "mississippa"), 141, 'Test 126');
test(countSubstrings("programming", "progranning"), 125, 'Test 127');
test(countSubstrings("substrings", "substraings"), 108, 'Test 128');
test(countSubstrings("abcdefgh", "abcdefga"), 63, 'Test 129');
test(countSubstrings("mississippi", "mississipp"), 119, 'Test 130');
test(countSubstrings("zzzzzzzzzz", "zzzzzzzzzz"), 0, 'Test 131');
test(countSubstrings("abcdefghij", "abcegijhif"), 104, 'Test 132');
test(countSubstrings("aaaaaaaaaa", "bbbbbbbbbb"), 100, 'Test 133');
test(countSubstrings("programming", "programminq"), 125, 'Test 134');
test(countSubstrings("xyzzyx", "zyxzyz"), 39, 'Test 135');
test(countSubstrings("aabbcc", "bbaacc"), 38, 'Test 136');
test(countSubstrings("abcabcabcabc", "abababababab"), 166, 'Test 137');
test(countSubstrings("mnopqr", "mnopqs"), 36, 'Test 138');
test(countSubstrings("abacabadabacaba", "abacabadabacaba"), 272, 'Test 139');
test(countSubstrings("racecar", "racecer"), 56, 'Test 140');
test(countSubstrings("abacaba", "babcaba"), 47, 'Test 141');
test(countSubstrings("abcdefgh", "abcdefgi"), 64, 'Test 142');
test(countSubstrings("abababa", "bababab"), 25, 'Test 143');
test(countSubstrings("abcd", "abdc"), 16, 'Test 144');
test(countSubstrings("qwerty", "qwertyuiop"), 54, 'Test 145');
test(countSubstrings("interview", "interviww"), 89, 'Test 146');
test(countSubstrings("mississippi", "mississipxy"), 140, 'Test 147');
test(countSubstrings("qwertyuiop", "poiuytrewq"), 106, 'Test 148');
test(countSubstrings("abcdefg", "abacdef"), 49, 'Test 149');
test(countSubstrings("abcdefg", "abcxefg"), 58, 'Test 150');
test(countSubstrings("aaaaabbbbb", "aaaabbbbba"), 128, 'Test 151');
test(countSubstrings("aaaaab", "aaabaa"), 39, 'Test 152');
test(countSubstrings("aaaaaaab", "aaaaaaax"), 64, 'Test 153');
test(countSubstrings("abcdefgh", "hgfedcba"), 68, 'Test 154');
test(countSubstrings("abababab", "babababa"), 32, 'Test 155');
test(countSubstrings("abcdef", "abcdeg"), 36, 'Test 156');

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
