// Test: 3325. Count Substrings With K Frequency Characters I
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfSubstrings } = require("./solution");

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

console.log("\n3325. Count Substrings With K Frequency Characters I\n");

test(numberOfSubstrings("pqr", 1), 6, 'Test 1');
test(numberOfSubstrings("aabbccc", 3), 5, 'Test 2');
test(numberOfSubstrings("aaabb", 3), 3, 'Test 3');
test(numberOfSubstrings("zzzzzz", 4), 6, 'Test 4');
test(numberOfSubstrings("abcde", 1), 15, 'Test 5');
test(numberOfSubstrings("abcdabc", 2), 6, 'Test 6');
test(numberOfSubstrings("abcdabcd", 1), 36, 'Test 7');
test(numberOfSubstrings("xyz", 1), 6, 'Test 8');
test(numberOfSubstrings("abcdefg", 2), 0, 'Test 9');
test(numberOfSubstrings("zzzz", 2), 6, 'Test 10');
test(numberOfSubstrings("aaaa", 2), 6, 'Test 11');
test(numberOfSubstrings("a", 1), 1, 'Test 12');
test(numberOfSubstrings("xyzxyz", 2), 6, 'Test 13');
test(numberOfSubstrings("abacb", 2), 4, 'Test 14');
test(numberOfSubstrings("pqrqpq", 2), 8, 'Test 15');
test(numberOfSubstrings("zzzzzzzz", 4), 15, 'Test 16');
test(numberOfSubstrings("aaaaa", 3), 6, 'Test 17');
test(numberOfSubstrings("xyzxyzxyz", 3), 6, 'Test 18');
test(numberOfSubstrings("aabbcc", 2), 13, 'Test 19');
test(numberOfSubstrings("ababab", 3), 3, 'Test 20');
test(numberOfSubstrings("abacbacbacb", 2), 37, 'Test 21');
test(numberOfSubstrings("aaaabbbbcccc", 3), 49, 'Test 22');
test(numberOfSubstrings("aaaabbbbccccddddeeeeffff", 4), 201, 'Test 23');
test(numberOfSubstrings("aaabbbcccdddfffggghhhiiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz", 4), 1144, 'Test 24');
test(numberOfSubstrings("abacbacbacb", 3), 16, 'Test 25');
test(numberOfSubstrings("abcdabcdabcdabcd", 4), 10, 'Test 26');
test(numberOfSubstrings("abcdefabcdefabcdef", 3), 21, 'Test 27');
test(numberOfSubstrings("aaaaabbbbbcccccdddddeeeeeffffffggggg", 4), 525, 'Test 28');
test(numberOfSubstrings("aabbaabbaabbaabbccddccddccddeeffeegghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 2), 2665, 'Test 29');
test(numberOfSubstrings("zzzzzzzzzzz", 5), 28, 'Test 30');
test(numberOfSubstrings("banana", 2), 9, 'Test 31');
test(numberOfSubstrings("zzzzzzzzzz", 3), 36, 'Test 32');
test(numberOfSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10), 1431, 'Test 33');
test(numberOfSubstrings("zzzzzzzzzzzzzzzzzzzz", 5), 136, 'Test 34');
test(numberOfSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 1), 1378, 'Test 35');
test(numberOfSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10), 4753, 'Test 36');
test(numberOfSubstrings("aabacbebebebebebebebebebebebebebebebebebebebebebebebe", 3), 1220, 'Test 37');
test(numberOfSubstrings("thisisaverylongstringthatweneedtocheck", 2), 542, 'Test 38');
test(numberOfSubstrings("ababababababababababababababababababababababababababababababab", 3), 1711, 'Test 39');
test(numberOfSubstrings("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllll", 4), 969, 'Test 40');
test(numberOfSubstrings("abcdefabcdefabcdefabcdef", 2), 171, 'Test 41');
test(numberOfSubstrings("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", 5), 1275, 'Test 42');
test(numberOfSubstrings("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", 5), 1326, 'Test 43');
test(numberOfSubstrings("mississippi", 2), 46, 'Test 44');
test(numberOfSubstrings("aaaaaaaaaabbbbbbbbccccccccdddddddd", 5), 435, 'Test 45');
test(numberOfSubstrings("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 3), 528, 'Test 46');
test(numberOfSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 15), 741, 'Test 47');
test(numberOfSubstrings("abcdefabcdefabcdef", 2), 78, 'Test 48');
test(numberOfSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 25), 55, 'Test 49');
test(numberOfSubstrings("mnopqrspqrstuvspqrstuvwspqrstuvwxspqrstuvwxy", 3), 549, 'Test 50');
test(numberOfSubstrings("mmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz", 4), 1353, 'Test 51');
test(numberOfSubstrings("ababababab", 2), 36, 'Test 52');
test(numberOfSubstrings("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 10), 861, 'Test 53');
test(numberOfSubstrings("thisisaverylongstringwithseveralcharacters", 2), 669, 'Test 54');
test(numberOfSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 26), 0, 'Test 55');
test(numberOfSubstrings("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 2), 351, 'Test 56');
test(numberOfSubstrings("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz", 3), 1830, 'Test 57');
test(numberOfSubstrings("ababcbacadefegdehijhklij", 2), 219, 'Test 58');
test(numberOfSubstrings("abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg", 2), 903, 'Test 59');
test(numberOfSubstrings("abcabcabc", 3), 6, 'Test 60');
test(numberOfSubstrings("abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef", 2), 1176, 'Test 61');
test(numberOfSubstrings("thefastbrownfoxjumpsoverthelazydog", 1), 595, 'Test 62');
test(numberOfSubstrings("ababababababababababababababababa", 2), 496, 'Test 63');
test(numberOfSubstrings("banana", 3), 2, 'Test 64');
test(numberOfSubstrings("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy", 3), 528, 'Test 65');
test(numberOfSubstrings("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 5), 990, 'Test 66');
test(numberOfSubstrings("xzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzy", 5), 561, 'Test 67');
test(numberOfSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzxyzabc", 2), 1611, 'Test 68');
test(numberOfSubstrings("abcdefghijklmnopqrstuvxyzabcdefghijklmnopqrstuvxyz", 2), 325, 'Test 69');
test(numberOfSubstrings("abcabcabcabcabcabcabcabcabcabc", 3), 300, 'Test 70');
test(numberOfSubstrings("loremipsumloremipsumloremipsum", 2), 275, 'Test 71');
test(numberOfSubstrings("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", 10), 561, 'Test 72');
test(numberOfSubstrings("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 3), 351, 'Test 73');
test(numberOfSubstrings("thisisaverylongstringwithvariouscharactersandfrequencies", 3), 919, 'Test 74');
test(numberOfSubstrings("ababababababababababababababababababababababababa", 2), 1128, 'Test 75');
test(numberOfSubstrings("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", 15), 231, 'Test 76');
test(numberOfSubstrings("abcdefg", 1), 28, 'Test 77');
test(numberOfSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10), 3655, 'Test 78');
test(numberOfSubstrings("abcdeabcdeabcde", 3), 15, 'Test 79');
test(numberOfSubstrings("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", 4), 2016, 'Test 80');
test(numberOfSubstrings("aabbaabbaabbcccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 2), 1801, 'Test 81');
test(numberOfSubstrings("xyzzzzxyzzzzxyzzzz", 4), 99, 'Test 82');
test(numberOfSubstrings("abcdefghijklmnopqrstuvwxyz", 1), 351, 'Test 83');
test(numberOfSubstrings("abacabadabacaba", 3), 61, 'Test 84');
test(numberOfSubstrings("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", 5), 903, 'Test 85');
test(numberOfSubstrings("aaaaaaaaaabbbbbbbbbbccccccccccdddddddddd", 5), 636, 'Test 86');
test(numberOfSubstrings("xxyyzzxxyyzzxxyyzz", 3), 78, 'Test 87');
test(numberOfSubstrings("xyxyxyxyxyxyxyxy", 4), 55, 'Test 88');
test(numberOfSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 3), 0, 'Test 89');
test(numberOfSubstrings("ababababababababababababababababababababababababababab", 4), 1176, 'Test 90');
test(numberOfSubstrings("xxyyzzxxyyzzxxyyzzxxyyzzxxyyzzxxyyzzxxyyzz", 4), 613, 'Test 91');
test(numberOfSubstrings("abcdefabcdefabcdefabcdefabcdef", 1), 465, 'Test 92');
test(numberOfSubstrings("aaaaaaaaabbbbbbbbb", 5), 95, 'Test 93');
test(numberOfSubstrings("aaaaaaaaaabbbbbbbbbbcccccccccc", 3), 400, 'Test 94');
test(numberOfSubstrings("mnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuv", 3), 1830, 'Test 95');
test(numberOfSubstrings("aabacbbcc", 2), 29, 'Test 96');
test(numberOfSubstrings("abababababababab", 2), 105, 'Test 97');
test(numberOfSubstrings("amazingracecar", 2), 45, 'Test 98');
test(numberOfSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 2), 1301, 'Test 99');
test(numberOfSubstrings("aabbbcccdddeee", 3), 66, 'Test 100');
test(numberOfSubstrings("zzzzzzzzz", 5), 15, 'Test 101');
test(numberOfSubstrings("xyzyxyzyxyzyxyzy", 2), 98, 'Test 102');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

