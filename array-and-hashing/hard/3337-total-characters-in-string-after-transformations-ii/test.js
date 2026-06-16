// Test: 3337. Total Characters In String After Transformations Ii
// 112 test cases from LeetCodeDataset
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

console.log("\n3337. Total Characters In String After Transformations Ii\n");

test(lengthAfterTransformations("xyz", 3, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3]), 11, 'Test 1');
test(lengthAfterTransformations("a", 1000000000, [25,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 733765265, 'Test 2');
test(lengthAfterTransformations("zzzz", 10, [25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25]), 723892217, 'Test 3');
test(lengthAfterTransformations("zzzzz", 3, [25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25]), 78125, 'Test 4');
test(lengthAfterTransformations('azbk', 1, [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 8, 'Test 5');
test(lengthAfterTransformations("a", 5, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 1, 'Test 6');
test(lengthAfterTransformations("abcdefghijklmnopqrstuvwxyz", 2, [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,1]), 2650, 'Test 7');
test(lengthAfterTransformations("a", 1000000000, [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1,2]), 766691191, 'Test 8');
test(lengthAfterTransformations('zzzz', 5, [25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25]), 39062500, 'Test 9');
test(lengthAfterTransformations("abcdefghijklmnopqrstuvwxyz", 3, [25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25]), 406250, 'Test 10');
test(lengthAfterTransformations("azbk", 1, [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 8, 'Test 11');
test(lengthAfterTransformations('abcyy', 2, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 7, 'Test 12');
test(lengthAfterTransformations("abcyy", 2, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 7, 'Test 13');
test(lengthAfterTransformations("a", 5, [5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 5, 'Test 14');
test(lengthAfterTransformations("zzzzz", 5, [25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25]), 48828125, 'Test 15');
test(lengthAfterTransformations('abcdefghijklmnopqrstuvwxyz', 3, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1]), 50799, 'Test 16');
test(lengthAfterTransformations("abcdefghijklmnopqrstuvwxyz", 1, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1]), 326, 'Test 17');
test(lengthAfterTransformations('a', 1000000000, [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 140625001, 'Test 18');
test(lengthAfterTransformations("abcdefghijklmnopqrstuvwxyz", 3, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1]), 50799, 'Test 19');
test(lengthAfterTransformations('mnopqrstuvwxyzabcdefghijkl', 3, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 1, 3]), 45976, 'Test 20');
test(lengthAfterTransformations('aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz', 100, [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1,2]), 978587949, 'Test 21');
test(lengthAfterTransformations('abcdefghijklmnopqrstuvwxyz', 3, [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,1]), 16176, 'Test 22');
test(lengthAfterTransformations('xyzabc', 7, [25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25]), 621093498, 'Test 23');
test(lengthAfterTransformations('abcdefghijklmnopqrstuvwxyzzzzz', 15, [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 983040, 'Test 24');
test(lengthAfterTransformations('thequickbrownfoxjumpsoverthelazydog', 5, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 35, 'Test 25');
test(lengthAfterTransformations('mnopqr', 3, [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 162, 'Test 26');
test(lengthAfterTransformations('zzzzz', 1, [25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25]), 125, 'Test 27');
test(lengthAfterTransformations('abcdefghi', 20, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 9, 'Test 28');
test(lengthAfterTransformations('abc', 1000000000, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 3, 'Test 29');
test(lengthAfterTransformations('zyxwvutsrqponmlkjihgfedcba', 1000000, [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,1]), 213224894, 'Test 30');
test(lengthAfterTransformations('zzzzzzzzzz', 10, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 10, 'Test 31');
test(lengthAfterTransformations('aaa', 2000000000, [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 530301990, 'Test 32');
test(lengthAfterTransformations('abcde', 500000000, [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1]), 451290791, 'Test 33');
test(lengthAfterTransformations('aaaaa', 1000000000, [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 703125005, 'Test 34');
test(lengthAfterTransformations('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz', 50, [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,2]), 519936060, 'Test 35');
test(lengthAfterTransformations('aaaabbbbcccc', 10, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 12, 'Test 36');
test(lengthAfterTransformations('repeatedstring', 10, [10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5]), 272399172, 'Test 37');
test(lengthAfterTransformations('abcdefghijklmnopqrstuvwxyz', 1, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1]), 326, 'Test 38');
test(lengthAfterTransformations('abacaba', 7, [5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]), 538835, 'Test 39');
test(lengthAfterTransformations('hello', 100, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 5, 'Test 40');
test(lengthAfterTransformations('zzzzzzzzzz', 1000000000, [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 406250003, 'Test 41');
test(lengthAfterTransformations('abcdefghijklmnopqrstuvwxyz', 10, [25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25]), 205299379, 'Test 42');
test(lengthAfterTransformations('yyyyyyzzzzzz', 1000000000, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 338941336, 'Test 43');
test(lengthAfterTransformations('abcabcabcabcabc', 10, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 15, 'Test 44');
test(lengthAfterTransformations('abcdefghijklmnopqrstuvwxyz', 1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 1]), 326, 'Test 45');
test(lengthAfterTransformations('aaa', 50, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1]), 996125601, 'Test 46');
test(lengthAfterTransformations('zzzzzzzzzz', 10, [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 10240, 'Test 47');
test(lengthAfterTransformations('abcdxyz', 5, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,2]), 1226473, 'Test 48');
test(lengthAfterTransformations('abc', 1000000000, [3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 922706600, 'Test 49');
test(lengthAfterTransformations('zyxwvutsrqponmlkjihgfedcba', 3, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,24]), 62454, 'Test 50');
test(lengthAfterTransformations('zyxwvutsrqponmlkjihgfedcba', 100, [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 0, 'Test 51');
test(lengthAfterTransformations('zzzzzzzzzz', 10, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 20, 'Test 52');
test(lengthAfterTransformations('abcdefghijklmnopqrstuvwxyz', 3, [25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25]), 406250, 'Test 53');
test(lengthAfterTransformations('abacabadabacaba', 10, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1]), 36341961, 'Test 54');
test(lengthAfterTransformations('abcdefghijklmnopqrstuvwxyz', 1, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 325, 'Test 55');
test(lengthAfterTransformations('zyxwvutsrqponmlkjihgfedcba', 7, [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,25]), 330666075, 'Test 56');
test(lengthAfterTransformations('aabbaa', 5, [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 192, 'Test 57');
test(lengthAfterTransformations('xyz', 3, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2]), 8, 'Test 58');
test(lengthAfterTransformations('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 1000000000, [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 593750005, 'Test 59');
test(lengthAfterTransformations('programming', 1000000, [10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]), 717168881, 'Test 60');
test(lengthAfterTransformations('mnopqrstu', 10, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1]), 658101870, 'Test 61');
test(lengthAfterTransformations('mississippi', 3, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 88, 'Test 62');
test(lengthAfterTransformations('qwertyuiopasdfghjklzxcvbnm', 7, [2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 715, 'Test 63');
test(lengthAfterTransformations('abcdefghijklmnopqrstuvwxyza', 100, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 164629702, 'Test 64');
test(lengthAfterTransformations('aaaaabbbbccccc', 5, [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1,1]), 401819, 'Test 65');
test(lengthAfterTransformations('abcdefghijklmnopqrstuvwxyz', 3, [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,2]), 17355, 'Test 66');
test(lengthAfterTransformations('abcdef', 20, [5,4,3,2,1,25,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 457825808, 'Test 67');
test(lengthAfterTransformations('xyzzzz', 20, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1]), 394646815, 'Test 68');
test(lengthAfterTransformations('abcdefghijklmnopqrstuvwxyza', 100, [24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,1]), 717986210, 'Test 69');
test(lengthAfterTransformations('zzzzzzzzzzzzzzzzzzzzzzzz', 5, [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,1]), 331848, 'Test 70');
test(lengthAfterTransformations('z', 1000000000, [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]), 912793154, 'Test 71');
test(lengthAfterTransformations('xyzabc', 10, [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 354294, 'Test 72');
test(lengthAfterTransformations('abracadabra', 2, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]), 11, 'Test 73');
test(lengthAfterTransformations('thisisaverylongstringthatwillbetherepeatedmanytimesthishastomanymorecharacters', 100000000, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1]), 150847441, 'Test 74');
test(lengthAfterTransformations('abcdefghijklmnopqrstuvwxyz', 3, [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,25,25]), 76998, 'Test 75');
test(lengthAfterTransformations('aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz', 5, [2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3]), 4394, 'Test 76');
test(lengthAfterTransformations('abcdefg', 5, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 518820, 'Test 77');
test(lengthAfterTransformations('abcabcabcabc', 25, [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 402653184, 'Test 78');
test(lengthAfterTransformations('aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz', 5, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 52, 'Test 79');
test(lengthAfterTransformations('abcdefghijklmnopqrstuvwxyz', 1, [25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25]), 650, 'Test 80');
test(lengthAfterTransformations('aaaaaaaabbbbbbbbbbcccccccccc', 50, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 86, 'Test 81');
test(lengthAfterTransformations('abcdefghijklmnopqrstuvwxyz', 10, [25,1,24,2,23,3,22,4,21,5,20,6,19,7,18,8,17,9,16,10,15,11,14,12,13]), 398129003, 'Test 82');
test(lengthAfterTransformations('zzzzzzzzzzzzzzzzzzzzzzzzzzz', 1000, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 312212496, 'Test 83');
test(lengthAfterTransformations('zzzzzzzzzz', 3, [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,25]), 32250, 'Test 84');
test(lengthAfterTransformations('zzzzzzzzzz', 1000000000, [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25]), 468571426, 'Test 85');
test(lengthAfterTransformations('aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz', 5, [5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5]), 14122, 'Test 86');
test(lengthAfterTransformations('a', 1000000000, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1]), 67211258, 'Test 87');
test(lengthAfterTransformations('aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz', 1, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1]), 652, 'Test 88');
test(lengthAfterTransformations('thisisaverylongstringthatwewillusetotesttheboundaryconditions', 1, [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 122, 'Test 89');
test(lengthAfterTransformations('quickbrownfoxjumpsoverthelazydog', 5, [5,4,3,2,1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]), 1959693, 'Test 90');
test(lengthAfterTransformations('aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz', 3, [1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2]), 384, 'Test 91');
test(lengthAfterTransformations('a', 10, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1]), 149523428, 'Test 92');
test(lengthAfterTransformations('short', 1000000000, [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 703125005, 'Test 93');
test(lengthAfterTransformations('abcdefghijklmnopqrstuvwxyz', 10, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,25]), 687678854, 'Test 94');
test(lengthAfterTransformations('codingisfun', 1000000000, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 1, 2]), 50465618, 'Test 95');
test(lengthAfterTransformations('xyzzxyzzxyzz', 100000000, [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 933999341, 'Test 96');
test(lengthAfterTransformations('zzzzzzzzzzzzzzzzzzzzzzzzz', 10, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,25]), 33025, 'Test 97');
test(lengthAfterTransformations('aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz', 100, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 792, 'Test 98');
test(lengthAfterTransformations('zzzzz', 5, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,25]), 605, 'Test 99');
test(lengthAfterTransformations('abcdefghijklmnopqrstuvwxyz', 10, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,2]), 651860760, 'Test 100');
test(lengthAfterTransformations('abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba', 7, [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,25]), 631109725, 'Test 101');
test(lengthAfterTransformations('aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz', 5, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 52, 'Test 102');
test(lengthAfterTransformations('abcdefghijklmnopqrstuvwxyz', 1000000000, [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]), 660643780, 'Test 103');
test(lengthAfterTransformations('racecar', 100, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 1]), 22718947, 'Test 104');
test(lengthAfterTransformations('zyxwvutsrqponmlkjihgfedcba', 1000000000, [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,2]), 849975046, 'Test 105');
test(lengthAfterTransformations('aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz', 10, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,1]), 766770780, 'Test 106');
test(lengthAfterTransformations('z', 1000000000, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 90224760, 'Test 107');
test(lengthAfterTransformations('abcabcabcabcabcabc', 500000000, [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 592000004, 'Test 108');
test(lengthAfterTransformations('b', 1, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,26]), 1, 'Test 109');
test(lengthAfterTransformations('zzzzzzzzzzzzzzzzzzzzzzzzzzz', 1000000000, [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]), 879103706, 'Test 110');
test(lengthAfterTransformations('xyzz', 10, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,25]), 3964, 'Test 111');
test(lengthAfterTransformations('xylophone', 10, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 9, 'Test 112');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

