// Test: 1400. Construct K Palindrome Strings
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { canConstruct } = require("./solution");

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

console.log("\n1400. Construct K Palindrome Strings\n");

test(canConstruct("a", 2), false, 'Test 1');
test(canConstruct("aabbcc", 3), true, 'Test 2');
test(canConstruct("abcd", 2), false, 'Test 3');
test(canConstruct("yzyzyzyzyzyzyzy", 17), false, 'Test 4');
test(canConstruct("", 0), true, 'Test 5');
test(canConstruct("true", 4), true, 'Test 6');
test(canConstruct("aaaaa", 2), true, 'Test 7');
test(canConstruct("racecar", 1), true, 'Test 8');
test(canConstruct("abcd", 1), false, 'Test 9');
test(canConstruct("abacabadabacaba", 7), true, 'Test 10');
test(canConstruct("yzyzyzyzyzyzyzy", 2), true, 'Test 11');
test(canConstruct("aabbcc", 6), true, 'Test 12');
test(canConstruct("annabelle", 2), true, 'Test 13');
test(canConstruct("aabbc", 4), true, 'Test 14');
test(canConstruct("leetcode", 3), false, 'Test 15');
test(canConstruct("aabbccddeeffgghh", 8), true, 'Test 16');
test(canConstruct("aaa", 3), true, 'Test 17');
test(canConstruct("z", 1), true, 'Test 18');
test(canConstruct("abcabcabc", 3), true, 'Test 19');
test(canConstruct("aaaaaa", 1), true, 'Test 20');
test(canConstruct("a", 1), true, 'Test 21');
test(canConstruct("aabb", 2), true, 'Test 22');
test(canConstruct("aabbcc", 1), true, 'Test 23');
test(canConstruct("abcd", 4), true, 'Test 24');
test(canConstruct("aabbc", 3), true, 'Test 25');
test(canConstruct("palindrome", 2), false, 'Test 26');
test(canConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 50), true, 'Test 27');
test(canConstruct("mississippi", 4), true, 'Test 28');
test(canConstruct("abacabadabacabadabacabad", 10), true, 'Test 29');
test(canConstruct("racecar", 5), true, 'Test 30');
test(canConstruct("aaabbbccc", 5), true, 'Test 31');
test(canConstruct("zyxzyxzyx", 3), true, 'Test 32');
test(canConstruct("palindromicracecar", 7), false, 'Test 33');
test(canConstruct("level", 1), true, 'Test 34');
test(canConstruct("mamad", 3), true, 'Test 35');
test(canConstruct("ababababab", 5), true, 'Test 36');
test(canConstruct("amanaplanacanalpanama", 13), true, 'Test 37');
test(canConstruct("aabbccddeeffgg", 8), true, 'Test 38');
test(canConstruct("aabbccddeeffgghhiijj", 10), true, 'Test 39');
test(canConstruct("aabaaaacaabbaaaacaaba", 15), true, 'Test 40');
test(canConstruct("aabbccddeeefff", 6), true, 'Test 41');
test(canConstruct("abcdefghij", 10), true, 'Test 42');
test(canConstruct("aabaaa", 3), true, 'Test 43');
test(canConstruct("xyxxyxyxyxyxyx", 7), true, 'Test 44');
test(canConstruct("palindrome", 5), false, 'Test 45');
test(canConstruct("racecarannakayak", 5), true, 'Test 46');
test(canConstruct("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 20), true, 'Test 47');
test(canConstruct("abcdabcdabcdabcdabcdabcdabcdabcd", 16), true, 'Test 48');
test(canConstruct("zzzzzzzzzzzzzzzzzzzzzzzzzzz", 1), true, 'Test 49');
test(canConstruct("noonnoonnoon", 3), true, 'Test 50');
test(canConstruct("ababababababababababababababababababababababababababababababababababab", 100), false, 'Test 51');
test(canConstruct("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 26), true, 'Test 52');
test(canConstruct("bananaananabananaananabanana", 12), true, 'Test 53');
test(canConstruct("mississippi", 5), true, 'Test 54');
test(canConstruct("neupq", 5), true, 'Test 55');
test(canConstruct("babbabababababa", 11), true, 'Test 56');
test(canConstruct("abcabcabcabcabcabc", 9), true, 'Test 57');
test(canConstruct("aaaaaaaaaa", 10), true, 'Test 58');
test(canConstruct("noonnoonnoon", 6), true, 'Test 59');
test(canConstruct("racecarannakayak", 3), true, 'Test 60');
test(canConstruct("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 52), true, 'Test 61');
test(canConstruct("abcabcabc", 9), true, 'Test 62');
test(canConstruct("banana", 3), true, 'Test 63');
test(canConstruct("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 10), true, 'Test 64');
test(canConstruct("qwertyuiopasdfghjklzxcvbnm", 26), true, 'Test 65');
test(canConstruct("thisisaverylongstringwithvariouscharacters", 20), true, 'Test 66');
test(canConstruct("noon", 2), true, 'Test 67');
test(canConstruct("zzzzzzzzzzzzzzzzzzzz", 1), true, 'Test 68');
test(canConstruct("palindrome", 6), false, 'Test 69');
test(canConstruct("mississippiissim", 6), true, 'Test 70');
test(canConstruct("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 100), false, 'Test 71');
test(canConstruct("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1), true, 'Test 72');
test(canConstruct("abcdabcdeabcdabcdef", 7), true, 'Test 73');
test(canConstruct("abababababababababababababab", 12), true, 'Test 74');
test(canConstruct("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy", 20), true, 'Test 75');
test(canConstruct("abcdabcdabcdabcd", 8), true, 'Test 76');
test(canConstruct("aabbccccddeeeeffff", 7), true, 'Test 77');
test(canConstruct("xyzzycba", 6), true, 'Test 78');
test(canConstruct("aabbccddeeffgg", 14), true, 'Test 79');
test(canConstruct("noonmoon", 2), true, 'Test 80');
test(canConstruct("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 30), true, 'Test 81');
test(canConstruct("racecarr", 2), true, 'Test 82');
test(canConstruct("aabaaabbbbccccddddd", 11), true, 'Test 83');
test(canConstruct("zzzzzzyyyyxxxwwvvuuttssrrqqppoonnmmllkkjjiihhhgggffeeddccbbaa", 26), true, 'Test 84');
test(canConstruct("abracadabra", 5), true, 'Test 85');
test(canConstruct("abababababababababababababababababababababab", 20), true, 'Test 86');
test(canConstruct("mammamia", 2), true, 'Test 87');
test(canConstruct("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 100), false, 'Test 88');
test(canConstruct("zyxzyxzyxzyx", 12), true, 'Test 89');
test(canConstruct("abcdefghijklmnopqrstuvwxyz", 1), false, 'Test 90');
test(canConstruct("abcdabcdbabcdbcdbabcdabcdabcd", 10), true, 'Test 91');
test(canConstruct("thequickbrownfoxjumpsoverthelazydog", 26), true, 'Test 92');
test(canConstruct("aaabbbcccdddeeefffggghhhhiiiiiijjjjjjjkkkkkkkkkllllllllll", 25), true, 'Test 93');
test(canConstruct("pneumonoultramicroscopicsilicovolcanoconiosis", 10), true, 'Test 94');
test(canConstruct("thisisaverylongstringwithsomerepeatedcharacters", 15), true, 'Test 95');
test(canConstruct("aabbbccccdddddeeeeeffffffgggggghhhhhiiiiijjjjjkkkkklllllm", 14), true, 'Test 96');
test(canConstruct("xyzxyzxyz", 9), true, 'Test 97');
test(canConstruct("abcdefghijklmnopqrstuvwxyz", 26), true, 'Test 98');
test(canConstruct("abcdefghijklmnopqrstuvwxyzaaa", 27), true, 'Test 99');
test(canConstruct("zyxwvutsrqponmlkjihgfedcba", 26), true, 'Test 100');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

