// Test: 3146. Permutation Difference Between Two Strings
// 106 test cases from LeetCodeDataset
// Run: node test.js

const { findPermutationDifference } = require("./solution");

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

console.log("\n3146. Permutation Difference Between Two Strings\n");

test(findPermutationDifference("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), 338, 'Test 1');
test(findPermutationDifference("mnopqr", "qrpmno"), 18, 'Test 2');
test(findPermutationDifference("abcde", "edbac"), 12, 'Test 3');
test(findPermutationDifference("abcxyz", "xyzabc"), 18, 'Test 4');
test(findPermutationDifference("qrstuv", "vutsrq"), 18, 'Test 5');
test(findPermutationDifference("abc", "bac"), 2, 'Test 6');
test(findPermutationDifference("mnopqr", "rqponm"), 18, 'Test 7');
test(findPermutationDifference("uvwxy", "yxuvw"), 12, 'Test 8');
test(findPermutationDifference("mnopqr", "qrponm"), 18, 'Test 9');
test(findPermutationDifference("a", "a"), 0, 'Test 10');
test(findPermutationDifference("abcd", "dcba"), 8, 'Test 11');
test(findPermutationDifference("xyz", "zyx"), 4, 'Test 12');
test(findPermutationDifference("ab", "ba"), 2, 'Test 13');
test(findPermutationDifference("mnopqrstuvwxyzabcdefghijkl", "qrstuvwxyzabcdefghijklmno"), 154, 'Test 14');
test(findPermutationDifference("abcdpqrs", "srqpdcba"), 32, 'Test 15');
test(findPermutationDifference("abcdefghijknopq", "qponljihgfedcba"), Error: 'l', 'Test 16');
test(findPermutationDifference("qazwsxedcrfvtgbyhnujmiklop", "plokmijnuhbygvtfcrdxeszwaq"), 338, 'Test 17');
test(findPermutationDifference("opqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), Error: 'n', 'Test 18');
test(findPermutationDifference("fedcba", "abcdef"), 18, 'Test 19');
test(findPermutationDifference("lkjhgfedcba", "abcdefghjkl"), 60, 'Test 20');
test(findPermutationDifference("abcdefg", "gfedcba"), 24, 'Test 21');
test(findPermutationDifference("abcdfghijklmnopqrstuvwxyzef", "efghijklmnopqrstuvwxyzabcd"), 198, 'Test 22');
test(findPermutationDifference("lmnopqrstuvwxy", "yxwvutsrqponml"), 98, 'Test 23');
test(findPermutationDifference("mnopqrstu", "tusrqpmon"), 40, 'Test 24');
test(findPermutationDifference("ijklmnopqr", "rqponmlkji"), 50, 'Test 25');
test(findPermutationDifference("abcdefghijl", "ljihgfedcba"), 60, 'Test 26');
test(findPermutationDifference("fghjklmno", "onmlkjihgf"), Error: 'i', 'Test 27');
test(findPermutationDifference("hijklmnop", "ponmlkjih"), 40, 'Test 28');
test(findPermutationDifference("qzjrwbyfc", "bfywzcrjq"), 38, 'Test 29');
test(findPermutationDifference("abcdefghijknopqrstu", "ustsrqpnljihgfedcba"), Error: 'l', 'Test 30');
test(findPermutationDifference("xyzabcdefghijklmnopqrstuvw", "wvutsrqponmlkjihgfedcbazyx"), 338, 'Test 31');
test(findPermutationDifference("abcdefghijklmnop", "ponmlkjihgfedcba"), 128, 'Test 32');
test(findPermutationDifference("abcdefghijkno", "onljihgfedcba"), Error: 'l', 'Test 33');
test(findPermutationDifference("nopqrstuvwxyzabcde", "edcbaonmlkjihgfptsrqvuwxzy"), Error: 'm', 'Test 34');
test(findPermutationDifference("abcdefghijknopqrs", "srqpnljihgfedcba"), Error: 'l', 'Test 35');
test(findPermutationDifference("abcdefghijknopqrstuvwx", "xwvustsrqpnljihgfedcba"), Error: 'l', 'Test 36');
test(findPermutationDifference("abcdefghij", "ghijabcdfe"), 48, 'Test 37');
test(findPermutationDifference("abcdefghijk", "kjihgfedcba"), 60, 'Test 38');
test(findPermutationDifference("zabcdefghijklmnopqrstuvwxy", "yzxwvutsrqponmlkjihgfedcba"), 314, 'Test 39');
test(findPermutationDifference("jklmnopqrabcdefghistuvwxy", "tuvxyabcdefghistuvwklmnoj"), 267, 'Test 40');
test(findPermutationDifference("abcdefghij", "jabcdefghi"), 18, 'Test 41');
test(findPermutationDifference("pqrstuv", "vutsrqp"), 24, 'Test 42');
test(findPermutationDifference("vwxyzabcdefghijklmnopqrst", "rstqponmlkjihgfedcbazyxwv"), 312, 'Test 43');
test(findPermutationDifference("mnopqrlkjihgfedcba", "abcdefghijklmnopqrstuvwxzyml"), Error: 's', 'Test 44');
test(findPermutationDifference("asdfghjkl", "lkjhgfdsa"), 40, 'Test 45');
test(findPermutationDifference("abcdefghij", "ihgfedcbaj"), 40, 'Test 46');
test(findPermutationDifference("abcdefghij", "jihgfedcba"), 50, 'Test 47');
test(findPermutationDifference("abcdef", "fedcba"), 18, 'Test 48');
test(findPermutationDifference("abcdefghklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), Error: 'j', 'Test 49');
test(findPermutationDifference("pqrstuvw", "vutsrqwp"), 26, 'Test 50');
test(findPermutationDifference("abcdefghijk", "fedcbaghijk"), 18, 'Test 51');
test(findPermutationDifference("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyza"), 26, 'Test 52');
test(findPermutationDifference("qrstuvwxyza", "azyxwvutsrqponmlkjihgfe"), Error: 'p', 'Test 53');
test(findPermutationDifference("xyzabcdefghijklmnopqrstuvw", "vutsrqponmlkjihgfedcbazyxw"), 312, 'Test 54');
test(findPermutationDifference("thequickbrown", "nkbrohwiqctue"), 82, 'Test 55');
test(findPermutationDifference("lmnopqrt", "tqrponml"), 32, 'Test 56');
test(findPermutationDifference("mnopqrstuvwxyz", "zzyxwvutsrqponmlkjihgfedcba"), Error: 'l', 'Test 57');
test(findPermutationDifference("abcdefghijkmnopqrstuvwxyzl", "lmnopqrstuvwxyzabcdefghijk"), 330, 'Test 58');
test(findPermutationDifference("xyzuvw", "uvwzyx"), 18, 'Test 59');
test(findPermutationDifference("aquickbrownfoxjumped", "xqjumoifpvwkenrdcba"), Error: 'v', 'Test 60');
test(findPermutationDifference("abcdefghilmnopqrstuvwxyzjk", "jklmnopqrstuvwxyzabcdefghi"), 306, 'Test 61');
test(findPermutationDifference("abc", "cba"), 4, 'Test 62');
test(findPermutationDifference("abcdefghij", "ijklmnopab"), Error: 'k', 'Test 63');
test(findPermutationDifference("abcdefghijkmnopqrstvuwxyz", "xyzuvwtpqrsmnkjihgfedcba"), 297, 'Test 64');
test(findPermutationDifference("acdefghijklmnopqrstuvwxyzb", "bzabcdefghijklmnopqrstuvwxy"), 141, 'Test 65');
test(findPermutationDifference("abcdefghijklmnopqrstuvwxyz", "qpjohuxivtnrckdsmgflweazyb"), 246, 'Test 66');
test(findPermutationDifference("abcdefghijknop", "ponljihgfedcba"), Error: 'l', 'Test 67');
test(findPermutationDifference("abcdxyz", "zyxcba"), 21, 'Test 68');
test(findPermutationDifference("abcdefghijknopqrstuvw", "wvustsrqpnljihgfedcba"), Error: 'l', 'Test 69');
test(findPermutationDifference("abcdefghijklmnopqrstuvwxyz", "qrstuvwxyabcdefghijklmnop"), 288, 'Test 70');
test(findPermutationDifference("abcdefghijkmnopqrstuvwxyz", "zyxwvustsrqpnljihgfedcba"), Error: 'l', 'Test 71');
test(findPermutationDifference("abcdefghijknopqrstuv", "vustsrqpnljihgfedcba"), Error: 'l', 'Test 72');
test(findPermutationDifference("abcdefghijkmnopqrstuvwxyzl", "lnopqrstuvwxyzabcdefghijkml"), 337, 'Test 73');
test(findPermutationDifference("qrstuv", "tvusqr"), 18, 'Test 74');
test(findPermutationDifference("abcdefghijk", "kabcdefghij"), 20, 'Test 75');
test(findPermutationDifference("mnopqrstvuwxyz", "zyxwvuprstqomnkljihgfedcba"), Error: 'k', 'Test 76');
test(findPermutationDifference("rplumabc", "mucrlpba"), 22, 'Test 77');
test(findPermutationDifference("abcdefghijknopqr", "rqpnljihgfedcba"), Error: 'l', 'Test 78');
test(findPermutationDifference("mnopqrstuvwxyzabcde", "edcbamnopqrstuvwxyz"), 140, 'Test 79');
test(findPermutationDifference("aeiouy", "uyioea"), 16, 'Test 80');
test(findPermutationDifference("abcdefghijklmnopqrstuvwxyz", "bacdefghijklmnopqrstuvwxyza"), 28, 'Test 81');
test(findPermutationDifference("abcdefghijklmnopqrstuvwxy", "yxwvutsrqponmlkjihgfedcba"), 312, 'Test 82');
test(findPermutationDifference("zxcvbnm", "mnbvcxz"), 24, 'Test 83');
test(findPermutationDifference("abcdefghijknopqrstuvwxy", "yxwvustsrqpnljihgfedcba"), Error: 'l', 'Test 84');
test(findPermutationDifference("abcdefghijknopqrst", "tsrqpnljihgfedcba"), Error: 'l', 'Test 85');
test(findPermutationDifference("lkjhgfdsapoiuytrewqmnbvcxz", "xcvbnmqwertypoiuytsdfghjkl"), 318, 'Test 86');
test(findPermutationDifference("xyzxyz", "zzzyyx"), 15, 'Test 87');
test(findPermutationDifference("abcdefghij", "efghijklab"), Error: 'k', 'Test 88');
test(findPermutationDifference("xyzabcdefghijklmnopqrstuvw", "stuvwxabcdefghijklmnopqrzy"), 210, 'Test 89');
test(findPermutationDifference("abcdefghijkmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), Error: 'l', 'Test 90');
test(findPermutationDifference("abcdefghij", "ijhgfedcba"), 50, 'Test 91');
test(findPermutationDifference("qwertyuiopasdfghjklzxcvbnm", "mnbvcxzlkjhgfdsapoiuytrewq"), 338, 'Test 92');
test(findPermutationDifference("abcdefghijklmnopqrstuvwxyz", "bcazdefghijklmnopqrstuvwxy"), 48, 'Test 93');
test(findPermutationDifference("tuvrstxyzwqpomnlkjihgfedcba", "cabfedghijklmnopqrstuvwxyz"), 338, 'Test 94');
test(findPermutationDifference("abcxyz", "zyxcba"), 18, 'Test 95');
test(findPermutationDifference("qwertyuiop", "poiuytrewq"), 50, 'Test 96');
test(findPermutationDifference("abcdefghijn", "nljihgfedcba"), Error: 'l', 'Test 97');
test(findPermutationDifference("abcdefghijk", "kijhgfedcba"), 60, 'Test 98');
test(findPermutationDifference("abcdefghijlm", "mljihgfedcba"), 72, 'Test 99');
test(findPermutationDifference("mnopqrstu", "ustqrpmno"), 40, 'Test 100');
test(findPermutationDifference("abcdefgh", "hgfedcba"), 32, 'Test 101');
test(findPermutationDifference("qrstuvw", "tuvwsrq"), 24, 'Test 102');
test(findPermutationDifference("hijklmnopqrstuvwxyzabcde", "mnopqrstuvwxyzabcdefghijkl"), Error: 'f', 'Test 103');
test(findPermutationDifference("abcdefghijklm", "mlkjihgfedcba"), 84, 'Test 104');
test(findPermutationDifference("abcdefghij", "abcdefghij"), 0, 'Test 105');
test(findPermutationDifference("ghijklmn", "nmlkjihg"), 32, 'Test 106');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

