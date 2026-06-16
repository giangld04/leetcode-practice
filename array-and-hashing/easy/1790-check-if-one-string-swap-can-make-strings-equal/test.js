// Test: 1790. Check If One String Swap Can Make Strings Equal
// 108 test cases from LeetCodeDataset
// Run: node test.js

const { areAlmostEqual } = require("./solution");

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

console.log("\n1790. Check If One String Swap Can Make Strings Equal\n");

test(areAlmostEqual("attack", "defend"), false, 'Test 1');
test(areAlmostEqual("bank", "kanb"), true, 'Test 2');
test(areAlmostEqual("abcde", "abced"), true, 'Test 3');
test(areAlmostEqual("abcd", "abdc"), true, 'Test 4');
test(areAlmostEqual("aaa", "aaa"), true, 'Test 5');
test(areAlmostEqual("kelb", "kelb"), true, 'Test 6');
test(areAlmostEqual("aabb", "abab"), true, 'Test 7');
test(areAlmostEqual("abcd", "dcba"), false, 'Test 8');
test(areAlmostEqual("algorithm", "logarithm"), false, 'Test 9');
test(areAlmostEqual("almost", "almost"), true, 'Test 10');
test(areAlmostEqual("abcdefg", "ghfedcb"), false, 'Test 11');
test(areAlmostEqual("xyzabc", "yzabxc"), false, 'Test 12');
test(areAlmostEqual("abcdefg", "fedcbag"), false, 'Test 13');
test(areAlmostEqual("abcdefg", "abcdefx"), false, 'Test 14');
test(areAlmostEqual("aaaaabbbb", "bbbbaaaa"), false, 'Test 15');
test(areAlmostEqual("aabbcc", "ccbaab"), false, 'Test 16');
test(areAlmostEqual("aabbcc", "aabbbc"), false, 'Test 17');
test(areAlmostEqual("abacabadabacaba", "babacabadabacab"), false, 'Test 18');
test(areAlmostEqual("mississippi", "missisppi"), false, 'Test 19');
test(areAlmostEqual("aabbcc", "ccbbaa"), false, 'Test 20');
test(areAlmostEqual("programming", "programminj"), false, 'Test 21');
test(areAlmostEqual("samestr", "strsame"), false, 'Test 22');
test(areAlmostEqual("hello", "hlelo"), true, 'Test 23');
test(areAlmostEqual("abcdefg", "gfedcba"), false, 'Test 24');
test(areAlmostEqual("abababab", "babababa"), false, 'Test 25');
test(areAlmostEqual("abracadabra", "abracadabrb"), false, 'Test 26');
test(areAlmostEqual("mississippi", "mississipsp"), false, 'Test 27');
test(areAlmostEqual("palindrome", "lpadnrimoe"), false, 'Test 28');
test(areAlmostEqual("aabbcc", "ccabba"), false, 'Test 29');
test(areAlmostEqual("mississippi", "mississipip"), true, 'Test 30');
test(areAlmostEqual("abcdefg", "abcdefg"), true, 'Test 31');
test(areAlmostEqual("aabbcc", "bbaacc"), false, 'Test 32');
test(areAlmostEqual("abcdexyz", "xyzabcde"), false, 'Test 33');
test(areAlmostEqual("abcdxyz", "abczyxd"), false, 'Test 34');
test(areAlmostEqual("abcdefgh", "hgfedcba"), false, 'Test 35');
test(areAlmostEqual("abcde", "abcde"), true, 'Test 36');
test(areAlmostEqual("banana", "anana"), false, 'Test 37');
test(areAlmostEqual("ab", "ba"), true, 'Test 38');
test(areAlmostEqual("hello", "olleh"), false, 'Test 39');
test(areAlmostEqual("hello", "hallo"), false, 'Test 40');
test(areAlmostEqual("abcdef", "abcfed"), true, 'Test 41');
test(areAlmostEqual("abcdefg", "abcdefgh"), true, 'Test 42');
test(areAlmostEqual("qwertyuiop", "qewrtyuipo"), false, 'Test 43');
test(areAlmostEqual("mississippi", "mississippa"), false, 'Test 44');
test(areAlmostEqual("programming", "prorgamming"), true, 'Test 45');
test(areAlmostEqual("abcdefg", "abdecfg"), false, 'Test 46');
test(areAlmostEqual("noon", "nnon"), false, 'Test 47');
test(areAlmostEqual("hello", "ohell"), false, 'Test 48');
test(areAlmostEqual("hello", "hxllo"), false, 'Test 49');
test(areAlmostEqual("aaaabbbb", "bbbbaaaa"), false, 'Test 50');
test(areAlmostEqual("abc", "acb"), true, 'Test 51');
test(areAlmostEqual("hello", "lehho"), false, 'Test 52');
test(areAlmostEqual("abcdexyz", "abcdefyz"), false, 'Test 53');
test(areAlmostEqual("python", "pythno"), true, 'Test 54');
test(areAlmostEqual("abracadabra", "abracadabra"), true, 'Test 55');
test(areAlmostEqual("abcdefgh", "bcadefgh"), false, 'Test 56');
test(areAlmostEqual("abacabadabacaba", "abacabadabacaba"), true, 'Test 57');
test(areAlmostEqual("hello", "bello"), false, 'Test 58');
test(areAlmostEqual("hello", "heoll"), true, 'Test 59');
test(areAlmostEqual("abcdefghij", "abcdefghjk"), false, 'Test 60');
test(areAlmostEqual("unique", "unqieu"), false, 'Test 61');
test(areAlmostEqual("abcdabcd", "dcbaabcd"), false, 'Test 62');
test(areAlmostEqual("abacax", "abacxa"), true, 'Test 63');
test(areAlmostEqual("abcdefghij", "abcdefghij"), true, 'Test 64');
test(areAlmostEqual("algorithm", "algorithn"), false, 'Test 65');
test(areAlmostEqual("algorithm", "aloritghm"), false, 'Test 66');
test(areAlmostEqual("abcdefg", "abcdegf"), true, 'Test 67');
test(areAlmostEqual("aabbcc", "aaccbb"), false, 'Test 68');
test(areAlmostEqual("almost", "alosmt"), false, 'Test 69');
test(areAlmostEqual("racecar", "racecar"), true, 'Test 70');
test(areAlmostEqual("mississippi", "mmissisippi"), false, 'Test 71');
test(areAlmostEqual("abcdefgh", "efghabcd"), false, 'Test 72');
test(areAlmostEqual("xyzz", "zzxy"), false, 'Test 73');
test(areAlmostEqual("palindrome", "palindorme"), true, 'Test 74');
test(areAlmostEqual("abcdef", "abcdef"), true, 'Test 75');
test(areAlmostEqual("ab", "ab"), true, 'Test 76');
test(areAlmostEqual("abcdef", "abcdeg"), false, 'Test 77');
test(areAlmostEqual("oneone", "noonoe"), false, 'Test 78');
test(areAlmostEqual("abcxyz", "xyzabc"), false, 'Test 79');
test(areAlmostEqual("abac", "caba"), false, 'Test 80');
test(areAlmostEqual("xyz", "zyx"), true, 'Test 81');
test(areAlmostEqual("abracadabra", "abracadbrba"), false, 'Test 82');
test(areAlmostEqual("abac", "abca"), true, 'Test 83');
test(areAlmostEqual("same", "same"), true, 'Test 84');
test(areAlmostEqual("abcdefgh", "abcdefgh"), true, 'Test 85');
test(areAlmostEqual("abcdef", "fedcba"), false, 'Test 86');
test(areAlmostEqual("abcdefghij", "abcdefghji"), true, 'Test 87');
test(areAlmostEqual("abcde", "edcba"), false, 'Test 88');
test(areAlmostEqual("swapping", "swapgnip"), false, 'Test 89');
test(areAlmostEqual("aabbccdd", "ddccbbaa"), false, 'Test 90');
test(areAlmostEqual("xyzz", "zyzz"), false, 'Test 91');
test(areAlmostEqual("algorithm", "algorjthm"), false, 'Test 92');
test(areAlmostEqual("xyzz", "zyxz"), true, 'Test 93');
test(areAlmostEqual("aabbcc", "aabbdc"), false, 'Test 94');
test(areAlmostEqual("abcdefghijk", "abcdefghijl"), false, 'Test 95');
test(areAlmostEqual("ababab", "bababa"), false, 'Test 96');
test(areAlmostEqual("abab", "baba"), false, 'Test 97');
test(areAlmostEqual("mambo", "mambp"), false, 'Test 98');
test(areAlmostEqual("abcdef", "abcdfe"), true, 'Test 99');
test(areAlmostEqual("abdc", "abcd"), true, 'Test 100');
test(areAlmostEqual("xyzz", "zyzx"), true, 'Test 101');
test(areAlmostEqual("aabb", "bbaa"), false, 'Test 102');
test(areAlmostEqual("same", "emsa"), false, 'Test 103');
test(areAlmostEqual("abcdxyz", "abcdzyx"), true, 'Test 104');
test(areAlmostEqual("mississippi", "mmississippi"), false, 'Test 105');
test(areAlmostEqual("python", "ytonph"), false, 'Test 106');
test(areAlmostEqual("xyzxyz", "zyxzyx"), false, 'Test 107');
test(areAlmostEqual("aaaa", "aaaa"), true, 'Test 108');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

