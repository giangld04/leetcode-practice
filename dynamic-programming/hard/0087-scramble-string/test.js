// Test: 87. Scramble String
// 113 test cases from LeetCodeDataset
// Run: node test.js

const { isScramble } = require("./solution");

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

console.log("\n87. Scramble String\n");

test(isScramble("abcdefghij", "ihgfedcbaj"), true, 'Test 1');
test(isScramble("noon", "onon"), true, 'Test 2');
test(isScramble("abc", "cab"), true, 'Test 3');
test(isScramble("abcdefghijklmnop", "ponmlkjihgfedcba"), true, 'Test 4');
test(isScramble("abcde", "caebd"), false, 'Test 5');
test(isScramble("abcdefghijk", "abcdefghijk"), true, 'Test 6');
test(isScramble("abc", "bca"), true, 'Test 7');
test(isScramble("abcdefgh", "hgfedcba"), true, 'Test 8');
test(isScramble("abcdefghij", "ijabcdefgh"), true, 'Test 9');
test(isScramble("eebaacbcbcadaaedceaaacadccd", "eadcaacabaddaceacbceaabe"), false, 'Test 10');
test(isScramble("ab", "ba"), true, 'Test 11');
test(isScramble("abcdefghij", "jihgfedcba"), true, 'Test 12');
test(isScramble("aabbcc", "abcabc"), true, 'Test 13');
test(isScramble("aabbcc", "ccbbaa"), true, 'Test 14');
test(isScramble("great", "rgeat"), true, 'Test 15');
test(isScramble("abcd", "abcd"), true, 'Test 16');
test(isScramble("abcd", "bdac"), false, 'Test 17');
test(isScramble("hello", "lohel"), true, 'Test 18');
test(isScramble("abcd", "dcba"), true, 'Test 19');
test(isScramble("aabb", "baba"), true, 'Test 20');
test(isScramble("abcdefgh", "efghabcd"), true, 'Test 21');
test(isScramble("eebaacb", "aceebbb"), false, 'Test 22');
test(isScramble("xstjzkfpqczbdy", "bdyxzcqpzkjfst"), true, 'Test 23');
test(isScramble("hello", "olelh"), true, 'Test 24');
test(isScramble("xyzz", "zzyx"), true, 'Test 25');
test(isScramble("xyz", "zyx"), true, 'Test 26');
test(isScramble("abcdefg", "efgabcd"), true, 'Test 27');
test(isScramble("abcdefghijk", "kabcdefghij"), true, 'Test 28');
test(isScramble("a", "a"), true, 'Test 29');
test(isScramble("algorithm", "logarithm"), true, 'Test 30');
test(isScramble("introduction", "oitrnuduinc"), false, 'Test 31');
test(isScramble("abcdabcd", "ddddcccc"), false, 'Test 32');
test(isScramble("abcdexyz", "zyxdecba"), true, 'Test 33');
test(isScramble("abcdxyz", "yzabcdx"), true, 'Test 34');
test(isScramble("abcdefghij", "efghijklabdc"), false, 'Test 35');
test(isScramble("recursion", "rursiicno"), false, 'Test 36');
test(isScramble("abcdefghij", "jihgfecdba"), true, 'Test 37');
test(isScramble("abcdefgh", "abcdghfe"), true, 'Test 38');
test(isScramble("abcdefghij", "abijhgfedc"), true, 'Test 39');
test(isScramble("xylophone", "eponhloxy"), true, 'Test 40');
test(isScramble("abcdefg", "gfedcba"), true, 'Test 41');
test(isScramble("scramble", "elmacrbs"), true, 'Test 42');
test(isScramble("interview", "wetneivrt"), false, 'Test 43');
test(isScramble("abababab", "babababa"), true, 'Test 44');
test(isScramble("backtracking", "tcgakknbirn"), false, 'Test 45');
test(isScramble("abcdefgh", "ghfedcba"), true, 'Test 46');
test(isScramble("abcdexyz", "xyzexbcd"), false, 'Test 47');
test(isScramble("abcdefgh", "cdabefgh"), true, 'Test 48');
test(isScramble("qwertyuiop", "yuiopqwert"), true, 'Test 49');
test(isScramble("intention", "tennotiin"), true, 'Test 50');
test(isScramble("abcdefghij", "jihgfedabc"), true, 'Test 51');
test(isScramble("abcd", "cdab"), true, 'Test 52');
test(isScramble("scramble", "melbrcsa"), true, 'Test 53');
test(isScramble("abcdexyz", "xyzabcde"), true, 'Test 54');
test(isScramble("algorithm", "rhtaglmoi"), false, 'Test 55');
test(isScramble("dynamicprogramming", "nmmagorpdynci"), Error: string index out of range, 'Test 56');
test(isScramble("optimization", "tivioonpmzas"), false, 'Test 57');
test(isScramble("interview", "ewrotnive"), false, 'Test 58');
test(isScramble("programming", "gnimmargorp"), true, 'Test 59');
test(isScramble("abcdefghij", "efghabcdij"), true, 'Test 60');
test(isScramble("recursion", "suoncire"), false, 'Test 61');
test(isScramble("abcdefghij", "abcdjihgfe"), true, 'Test 62');
test(isScramble("abcdefghij", "fedcbaighj"), true, 'Test 63');
test(isScramble("waterbottle", "elbottlewat"), false, 'Test 64');
test(isScramble("abcdefghij", "ghfedcbaab"), false, 'Test 65');
test(isScramble("scramble", "leacrbms"), true, 'Test 66');
test(isScramble("mississippi", "ppiimssiss"), Error: string index out of range, 'Test 67');
test(isScramble("scramble", "rscmable"), true, 'Test 68');
test(isScramble("abcdefghij", "ihgfedcba"), Error: string index out of range, 'Test 69');
test(isScramble("algorithm", "rhtlgmaoi"), false, 'Test 70');
test(isScramble("scrambledstring", "stgimrebldstring"), false, 'Test 71');
test(isScramble("abcdefghij", "ijklmnopqr", "mnopqrjkl"), false, 'Test 72');
test(isScramble("abcdefghij", "hgfecdba"), Error: string index out of range, 'Test 73');
test(isScramble("abcdefghijk", "efghijkabcd"), true, 'Test 74');
test(isScramble("abracadabra", "carrabbadaba"), false, 'Test 75');
test(isScramble("abcdefghij", "ihgfedcbaa"), false, 'Test 76');
test(isScramble("abcdefghij", "hgfedcbaij"), true, 'Test 77');
test(isScramble("abcdefghij", "abcdghfjie"), true, 'Test 78');
test(isScramble("abcdefghij", "abcdefghij"), true, 'Test 79');
test(isScramble("abcdefghij", "ihgfjedcba"), true, 'Test 80');
test(isScramble("abcdefghij", "ijklabefgh"), false, 'Test 81');
test(isScramble("abcdefghij", "ghijefabcd"), true, 'Test 82');
test(isScramble("abcdefghij", "ihgfjklmno"), false, 'Test 83');
test(isScramble("interview", "reterivne"), false, 'Test 84');
test(isScramble("python", "nohtyp"), true, 'Test 85');
test(isScramble("abcdefghij", "bcdefghiaj"), true, 'Test 86');
test(isScramble("abcdefghij", "cdabefghij"), true, 'Test 87');
test(isScramble("abcdabcd", "dcbacabd"), true, 'Test 88');
test(isScramble("scramble", "blecrmas"), true, 'Test 89');
test(isScramble("abcdefghij", "cbadefghij"), true, 'Test 90');
test(isScramble("optimization", "nizationopti"), false, 'Test 91');
test(isScramble("intvw", "nvtiw"), true, 'Test 92');
test(isScramble("abcdefghij", "cdefghijab"), true, 'Test 93');
test(isScramble("intervw", "wvnreit"), false, 'Test 94');
test(isScramble("abcdefghij", "efghijabcd"), true, 'Test 95');
test(isScramble("optimization", "nizaitpmosio"), false, 'Test 96');
test(isScramble("algorithm", "rhtgmialo"), false, 'Test 97');
test(isScramble("interview", "terviewin"), true, 'Test 98');
test(isScramble("abcdabcd", "abcdabcd"), true, 'Test 99');
test(isScramble("abcdefghij", "jabcdefghi"), true, 'Test 100');
test(isScramble("abcdefghijk", "kjiabcdefgh"), true, 'Test 101');
test(isScramble("abab", "baba"), true, 'Test 102');
test(isScramble("scramble", "melcarbs"), false, 'Test 103');
test(isScramble("thisisatest", "tsaistestihis"), true, 'Test 104');
test(isScramble("abcdefghij", "fghebacijd"), false, 'Test 105');
test(isScramble("abcdefghij", "ijklabcdefgh"), false, 'Test 106');
test(isScramble("scramble", "ercmsbal"), false, 'Test 107');
test(isScramble("scramblestring", "gterinmbscrl"), false, 'Test 108');
test(isScramble("abcdefghij", "cbadefghji"), true, 'Test 109');
test(isScramble("introduction", "ntrioduicton"), true, 'Test 110');
test(isScramble("abcdefghij", "abjihgfedc"), true, 'Test 111');
test(isScramble("abcdefghij", "abcdefghijab"), true, 'Test 112');
test(isScramble("recursion", "insrucero"), false, 'Test 113');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

