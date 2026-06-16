// Test: 3335. Total Characters In String After Transformations I
// 87 test cases from LeetCodeDataset
// Run: node test.js

const { lengthAfterTransformations } = require("./solution");

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

console.log("\n3335. Total Characters In String After Transformations I\n");

test(lengthAfterTransformations("abcd", 5), 4, 'Test 1');
test(lengthAfterTransformations("abcdefghijklmnopqrstuvwxyz", 5), 31, 'Test 2');
test(lengthAfterTransformations("azbk", 1), 5, 'Test 3');
test(lengthAfterTransformations("abcdef", 5), 6, 'Test 4');
test(lengthAfterTransformations("abcdefg", 5), 7, 'Test 5');
test(lengthAfterTransformations("abcyy", 2), 7, 'Test 6');
test(lengthAfterTransformations("a", 100000), 413966020, 'Test 7');
test(lengthAfterTransformations("zzzz", 3), 8, 'Test 8');
test(lengthAfterTransformations("zzz", 3), 6, 'Test 9');
test(lengthAfterTransformations("yzxyzz", 5), 12, 'Test 10');
test(lengthAfterTransformations("zyxwvutsrqponmlkjihgfedcba", 50000), 970042322, 'Test 11');
test(lengthAfterTransformations("zzzzzzzzzz", 10), 20, 'Test 12');
test(lengthAfterTransformations("ababababab", 100000), 249107450, 'Test 13');
test(lengthAfterTransformations("aaaabbbbccccddddeeeeffffgggghhhhiiii", 50000), 584847311, 'Test 14');
test(lengthAfterTransformations("zzzzzzzzzz", 7), 20, 'Test 15');
test(lengthAfterTransformations("abczyz", 100000), 717149713, 'Test 16');
test(lengthAfterTransformations("zzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10000), 295436100, 'Test 17');
test(lengthAfterTransformations("zzzzzzzzzzzzzzzzzzzzzzzzzz", 10), 52, 'Test 18');
test(lengthAfterTransformations("zazazazazazazazazaza", 20), 30, 'Test 19');
test(lengthAfterTransformations("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 1), 54, 'Test 20');
test(lengthAfterTransformations("zyxwvutsrqponmlkjihgfedcba", 15), 41, 'Test 21');
test(lengthAfterTransformations("abcdxyz", 100000), 673034982, 'Test 22');
test(lengthAfterTransformations("aaaazzz", 5), 10, 'Test 23');
test(lengthAfterTransformations("abcdefghijklmnopqrstuvwxyz", 100000), 704103930, 'Test 24');
test(lengthAfterTransformations("azazazazaz", 5), 15, 'Test 25');
test(lengthAfterTransformations("z", 1000000), 560162355, 'Test 26');
test(lengthAfterTransformations("zyx", 100), 48, 'Test 27');
test(lengthAfterTransformations("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 50000), 57514287, 'Test 28');
test(lengthAfterTransformations("zzzzzzzzzz", 50000), 811502863, 'Test 29');
test(lengthAfterTransformations("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 100000), 249063434, 'Test 30');
test(lengthAfterTransformations("mnbvcxzlkjhgfdsapoiuytrewq", 50), 101, 'Test 31');
test(lengthAfterTransformations("zabzabzabz", 10), 14, 'Test 32');
test(lengthAfterTransformations("zzzzzzzzzzzzzzzzzzzzzzzzzz", 100000), 327364041, 'Test 33');
test(lengthAfterTransformations("azazazazaz", 50), 30, 'Test 34');
test(lengthAfterTransformations("zyxwvutsrqponmlkjihgfedcba", 1), 27, 'Test 35');
test(lengthAfterTransformations("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10000), 850623003, 'Test 36');
test(lengthAfterTransformations("zyxwvutsrqponmlkjihgfedcba", 10), 36, 'Test 37');
test(lengthAfterTransformations("bzzzzzzzzz", 50000), 35738956, 'Test 38');
test(lengthAfterTransformations("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 100000), 14161613, 'Test 39');
test(lengthAfterTransformations("zzzzz", 10), 10, 'Test 40');
test(lengthAfterTransformations("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 2), 64, 'Test 41');
test(lengthAfterTransformations("aaaaaaaaaaaabbbbbbbbbbbbbbcccccccccccc", 10), 38, 'Test 42');
test(lengthAfterTransformations("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 100000), 408207853, 'Test 43');
test(lengthAfterTransformations("abzabzabzabz", 3), 16, 'Test 44');
test(lengthAfterTransformations("zyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyx", 25000), 102001027, 'Test 45');
test(lengthAfterTransformations("yyyyyyyyyy", 10), 20, 'Test 46');
test(lengthAfterTransformations("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 1), 30, 'Test 47');
test(lengthAfterTransformations("zzzazazazzzz", 10), 21, 'Test 48');
test(lengthAfterTransformations("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 100000), 408207853, 'Test 49');
test(lengthAfterTransformations("abcdz", 100), 60, 'Test 50');
test(lengthAfterTransformations("abcdefghijklmnopqrstuvwxyz", 26), 53, 'Test 51');
test(lengthAfterTransformations("abxyzz", 20), 10, 'Test 52');
test(lengthAfterTransformations("abcdefghijklmnopqrstuvwxyz", 1), 27, 'Test 53');
test(lengthAfterTransformations("abcdefghijklmnopqrstuvwxyz", 10), 36, 'Test 54');
test(lengthAfterTransformations("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1), 64, 'Test 55');
test(lengthAfterTransformations("abzabzabz", 10), 12, 'Test 56');
test(lengthAfterTransformations("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 100000), 451895758, 'Test 57');
test(lengthAfterTransformations("aaaaaaaaaa", 100000), 139660172, 'Test 58');
test(lengthAfterTransformations("bababababa", 20), 10, 'Test 59');
test(lengthAfterTransformations("zaabccdd", 5), 9, 'Test 60');
test(lengthAfterTransformations("zyzzyx", 5), 12, 'Test 61');
test(lengthAfterTransformations("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 100), 792, 'Test 62');
test(lengthAfterTransformations("zzzzzzzzzzzzzzzzzzzzzzzzzz", 1), 52, 'Test 63');
test(lengthAfterTransformations("abzaz", 10), 7, 'Test 64');
test(lengthAfterTransformations("bzz", 10), 5, 'Test 65');
test(lengthAfterTransformations("yzyzyzyzyz", 7), 20, 'Test 66');
test(lengthAfterTransformations("zzzz", 20), 8, 'Test 67');
test(lengthAfterTransformations("abczzzzyx", 50), 33, 'Test 68');
test(lengthAfterTransformations("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 5000), 333013051, 'Test 69');
test(lengthAfterTransformations("zzzzzzzzzz", 100000), 202832324, 'Test 70');
test(lengthAfterTransformations("azazazazaz", 20), 15, 'Test 71');
test(lengthAfterTransformations("bbbbbbbbbbbbbbbbbb", 5000), 282316300, 'Test 72');
test(lengthAfterTransformations("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 99999), 941360394, 'Test 73');
test(lengthAfterTransformations("zyzx", 5), 8, 'Test 74');
test(lengthAfterTransformations("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 100000), 309456157, 'Test 75');
test(lengthAfterTransformations("abababababababababababababababab", 25000), 651990487, 'Test 76');
test(lengthAfterTransformations("z", 100000), 820283238, 'Test 77');
test(lengthAfterTransformations("aaaaaaaaaazzzzzzzzzz", 50), 60, 'Test 78');
test(lengthAfterTransformations("zyxwvutsrqponmlkjihgfedcba", 100000), 704103930, 'Test 79');
test(lengthAfterTransformations("aazzbbyy", 20), 12, 'Test 80');
test(lengthAfterTransformations("zyzzyzzyzzyzzyzzyzzyzzyzzyzzyz", 50000), 266826870, 'Test 81');
test(lengthAfterTransformations("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 50000), 796809149, 'Test 82');
test(lengthAfterTransformations("zabcyz", 5), 9, 'Test 83');
test(lengthAfterTransformations("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 50000), 940084637, 'Test 84');
test(lengthAfterTransformations("zzzzzzzzzz", 5), 20, 'Test 85');
test(lengthAfterTransformations("abcdefghijklmnopqrstuvwxyz", 1000), 836719952, 'Test 86');
test(lengthAfterTransformations("mnbvcxzlkjhgfdsapoiuytrewq", 100), 396, 'Test 87');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

