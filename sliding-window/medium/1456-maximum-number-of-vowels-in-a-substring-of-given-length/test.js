// Test: 1456. Maximum Number Of Vowels In A Substring Of Given Length
// 80 test cases from LeetCodeDataset
// Run: node test.js

const { maxVowels } = require("./solution");

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

console.log("\n1456. Maximum Number Of Vowels In A Substring Of Given Length\n");

test(maxVowels("aooiiieeec", 6), 6, 'Test 1');
test(maxVowels("a", 1), 1, 'Test 2');
test(maxVowels("happy", 2), 1, 'Test 3');
test(maxVowels("rhythms", 5), 0, 'Test 4');
test(maxVowels("fluffy", 2), 1, 'Test 5');
test(maxVowels("leetcode", 3), 2, 'Test 6');
test(maxVowels("aeiou", 2), 2, 'Test 7');
test(maxVowels("beautiful", 4), 3, 'Test 8');
test(maxVowels("rhythms", 4), 0, 'Test 9');
test(maxVowels("bbbb", 2), 0, 'Test 10');
test(maxVowels("aaaaaa", 5), 5, 'Test 11');
test(maxVowels("abciiidef", 3), 3, 'Test 12');
test(maxVowels("aabbccddeeff", 4), 2, 'Test 13');
test(maxVowels("quartz", 3), 2, 'Test 14');
test(maxVowels("uuuuuuuuuuuuuuuuuuuuuuuuuu", 5), 5, 'Test 15');
test(maxVowels("eiuaooeiuaooeiuaooeiuaoo", 8), 8, 'Test 16');
test(maxVowels("bcdfghjklmnpqrstvwxyz", 3), 0, 'Test 17');
test(maxVowels("understanding", 4), 2, 'Test 18');
test(maxVowels("abacabadabacaba", 5), 3, 'Test 19');
test(maxVowels("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu", 100), 50, 'Test 20');
test(maxVowels("aeiouaeiou", 1), 1, 'Test 21');
test(maxVowels("bbbbbbaaaaa", 5), 5, 'Test 22');
test(maxVowels("bbaeixixixixxxeiiixieeiix", 15), 10, 'Test 23');
test(maxVowels("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 50), 0, 'Test 24');
test(maxVowels("uoieaouieaouieaouieaouieaouieao", 15), 15, 'Test 25');
test(maxVowels("mississippi", 4), 2, 'Test 26');
test(maxVowels("aeiouaeiouaeiouaeiouaeiouaeiou", 20), 20, 'Test 27');
test(maxVowels("iouaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 50), 50, 'Test 28');
test(maxVowels("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 12), 4, 'Test 29');
test(maxVowels("xyzvowelsabcdefg", 5), 2, 'Test 30');
test(maxVowels("leetcodeisawesome", 5), 3, 'Test 31');
test(maxVowels("lovelaceeinstein", 7), 5, 'Test 32');
test(maxVowels("abcdefghijklmnopqrstuvwxyz", 13), 3, 'Test 33');
test(maxVowels("thisisaverylongstringwithsomevowelsinside", 20), 8, 'Test 34');
test(maxVowels("aaaaaaaabbbbbbbbcccccccc", 12), 8, 'Test 35');
test(maxVowels("bbaeiooacaioiiceiue", 11), 10, 'Test 36');
test(maxVowels("zzzzzzzzzzzzzzzzzzzzzzzzzz", 20), 0, 'Test 37');
test(maxVowels("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 26), 6, 'Test 38');
test(maxVowels("aeiouaeiouaeiouaeiouaeiou", 10), 10, 'Test 39');
test(maxVowels("zzzzzzzzzzzzzzzzzzzzz", 20), 0, 'Test 40');
test(maxVowels("uvvwxyz", 3), 1, 'Test 41');
test(maxVowels("abcdeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou", 15), 15, 'Test 42');
test(maxVowels("uoieaouieaouieaouieaouieaouiea", 7), 7, 'Test 43');
test(maxVowels("mnoabcdeioufghijkl", 7), 4, 'Test 44');
test(maxVowels("zyxwvutsrqponmlkjihgfedcba", 15), 4, 'Test 45');
test(maxVowels("leetcodeisaverygoodplatform", 10), 6, 'Test 46');
test(maxVowels("ababababab", 5), 3, 'Test 47');
test(maxVowels("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu", 30), 30, 'Test 48');
test(maxVowels("bcdafg", 6), 1, 'Test 49');
test(maxVowels("aaaaaaaaaaaaaaaaaaaaaa", 10), 10, 'Test 50');
test(maxVowels("bcdfghjklmnpqrstvwxyz", 1), 0, 'Test 51');
test(maxVowels("thisisaverylongstringwithseveralvowelsinside", 15), 6, 'Test 52');
test(maxVowels("aiaioieiaioieiaioieiaioieiaioieiaioieiaioieiaioieiaioieiaioieiaioieiaioieiaioieiaioiei", 20), 20, 'Test 53');
test(maxVowels("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou", 15), 15, 'Test 54');
test(maxVowels("uoieaouioeaouioeaouioe", 12), 12, 'Test 55');
test(maxVowels("aeiouaeiouaeiouaeiou", 7), 7, 'Test 56');
test(maxVowels("bcbcbcbcbcbcbcbcbcbcbcbc", 7), 0, 'Test 57');
test(maxVowels("uqeiouqeiouqeiouqeiouqeiouqe", 11), 9, 'Test 58');
test(maxVowels("abcdefghijklmnopqrstuvwxyz", 10), 3, 'Test 59');
test(maxVowels("qqqwwweee", 4), 3, 'Test 60');
test(maxVowels("bbaeixoubb", 5), 4, 'Test 61');
test(maxVowels("abcdefghijklmnopqrstuvwxyz", 26), 5, 'Test 62');
test(maxVowels("aeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeiioooooooouuuuuuuuuuuaaaaaaaa", 25), 25, 'Test 63');
test(maxVowels("bvflkqmbvkjgnqmfqlqjflvngqnvfkvnqjvfbvmqjbfvmlkjbfnvqjgbfnvqjbngfjkqnvbmfkqjbgfnjkbv", 10), 0, 'Test 64');
test(maxVowels("vowelsarebeautiful", 10), 6, 'Test 65');
test(maxVowels("zzzzzzzzzzzzzzzzzzzz", 15), 0, 'Test 66');
test(maxVowels("bcbcbcbcbcbaaaaaa", 10), 6, 'Test 67');
test(maxVowels("aeiaaioaaaaeiiiiiiooooaauuaeiu", 15), 15, 'Test 68');
test(maxVowels("xyzxyzxyzxyzxyzxyzxyzxyz", 8), 0, 'Test 69');
test(maxVowels("thisisaverylongstringwithlotsofvowelsandconsonants", 18), 7, 'Test 70');
test(maxVowels("environmentally", 10), 4, 'Test 71');
test(maxVowels("leetcodeisacommunityforcoders", 8), 5, 'Test 72');
test(maxVowels("leetcodeisfun", 7), 4, 'Test 73');
test(maxVowels("leetcodeisawesome", 7), 4, 'Test 74');
test(maxVowels("bcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbc", 10), 0, 'Test 75');
test(maxVowels("aaabbbcccdddeeefffggghhhiii", 5), 3, 'Test 76');
test(maxVowels("bcbcbcbcbcbcbcbcbcbcbcbcbcbc", 3), 0, 'Test 77');
test(maxVowels("uoieaooooieau", 7), 7, 'Test 78');
test(maxVowels("abecidofugihanukleomnonuopqrstuvwxyz", 20), 10, 'Test 79');
test(maxVowels("aeiaaioaaaaeiiiiouuuu", 12), 12, 'Test 80');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

