// Test: 387. First Unique Character In A String
// 91 test cases from LeetCodeDataset
// Run: node test.js

const { firstUniqChar } = require("./solution");

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

console.log("\n387. First Unique Character In A String\n");

test(firstUniqChar("aabbbccccddeeeeeffffffgggggghhhhhhiiiiiiiijjjjjjjjjkkkkkkkkkkklllllllllllllmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnooooooooollllllllllllllllmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnp"), 165, 'Test 1');
test(firstUniqChar("abcdefghijklmnopqrstuvwxyz"), 0, 'Test 2');
test(firstUniqChar("abcdef"), 0, 'Test 3');
test(firstUniqChar("aabbccddee"), -1, 'Test 4');
test(firstUniqChar("a"), 0, 'Test 5');
test(firstUniqChar("abacabadabacaba"), 7, 'Test 6');
test(firstUniqChar("abcdabcde"), 8, 'Test 7');
test(firstUniqChar("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), -1, 'Test 8');
test(firstUniqChar("swiss"), 1, 'Test 9');
test(firstUniqChar("abacabadabc"), 7, 'Test 10');
test(firstUniqChar(""), -1, 'Test 11');
test(firstUniqChar("repetition"), 0, 'Test 12');
test(firstUniqChar("zzz"), -1, 'Test 13');
test(firstUniqChar("aabbccddeeffg"), 12, 'Test 14');
test(firstUniqChar("leetcode"), 0, 'Test 15');
test(firstUniqChar("aabb"), -1, 'Test 16');
test(firstUniqChar("loveleetcode"), 2, 'Test 17');
test(firstUniqChar("abcdabcdf"), 8, 'Test 18');
test(firstUniqChar("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyz"), -1, 'Test 19');
test(firstUniqChar("development"), 0, 'Test 20');
test(firstUniqChar("aabbcceeff"), -1, 'Test 21');
test(firstUniqChar("zzyyxxwwvvuuttrrqqppoonnmmllkkjjiihhggffeeddccbbaa"), -1, 'Test 22');
test(firstUniqChar("algorithm"), 0, 'Test 23');
test(firstUniqChar("unique"), 1, 'Test 24');
test(firstUniqChar("z"), 0, 'Test 25');
test(firstUniqChar("abbacd"), 4, 'Test 26');
test(firstUniqChar("aabbcceeffgghhiijjklmnopqrstuvwxyz"), 18, 'Test 27');
test(firstUniqChar("character"), 1, 'Test 28');
test(firstUniqChar("bba"), 2, 'Test 29');
test(firstUniqChar("zyxwvutsrqponmlkjihgfedcba"), 0, 'Test 30');
test(firstUniqChar("abcdefg"), 0, 'Test 31');
test(firstUniqChar("thisisjustafancysentence"), 1, 'Test 32');
test(firstUniqChar("almostunique"), 0, 'Test 33');
test(firstUniqChar("repetitionsofletters"), 2, 'Test 34');
test(firstUniqChar("abacabadabacabadabacabad"), -1, 'Test 35');
test(firstUniqChar("xyzzyzxyz"), -1, 'Test 36');
test(firstUniqChar("almosteverycharacterisunique"), 1, 'Test 37');
test(firstUniqChar("uniquecharactersarecool"), 1, 'Test 38');
test(firstUniqChar("abcdedcba"), 4, 'Test 39');
test(firstUniqChar("verylongstringwithmanyanonymouscharacterssssssssssssssssssssssss"), 0, 'Test 40');
test(firstUniqChar("uniqueidentifier"), 3, 'Test 41');
test(firstUniqChar("abracadabra"), 4, 'Test 42');
test(firstUniqChar("allcharactersrepeatmorethanonce"), 12, 'Test 43');
test(firstUniqChar("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), -1, 'Test 44');
test(firstUniqChar("xylophone"), 0, 'Test 45');
test(firstUniqChar("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), -1, 'Test 46');
test(firstUniqChar("unrepeatedcharacterstring"), 0, 'Test 47');
test(firstUniqChar("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzyxwvutsrqponmlkjihgfedcba"), -1, 'Test 48');
test(firstUniqChar("bbaaccddeeffgghhiijjkkllmmnnoopqrrssttuuvvwwxxyyzz"), 30, 'Test 49');
test(firstUniqChar("zzzzzyyyyxxxxwwvvvttrrssqqppoonnmmlkkjjiihhggffeedcba"), 34, 'Test 50');
test(firstUniqChar("thisisaverylongstringwithnomanynonrepeatingcharacters"), 7, 'Test 51');
test(firstUniqChar("xyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 52');
test(firstUniqChar("firstuniquicharacter"), 0, 'Test 53');
test(firstUniqChar("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyz"), 50, 'Test 54');
test(firstUniqChar("nocharactersrepeat"), 0, 'Test 55');
test(firstUniqChar("wovwovwov"), -1, 'Test 56');
test(firstUniqChar("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), -1, 'Test 57');
test(firstUniqChar("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), -1, 'Test 58');
test(firstUniqChar("abcdefghijabcdefghijabcdefghij"), -1, 'Test 59');
test(firstUniqChar("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzz"), -1, 'Test 60');
test(firstUniqChar("aabbaaccddeeffaabbccddeeffaabbccddeeff"), -1, 'Test 61');
test(firstUniqChar("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwooxxyyzz"), -1, 'Test 62');
test(firstUniqChar("banana"), 0, 'Test 63');
test(firstUniqChar("thisisaverylongstringwithseveralcharacters"), 10, 'Test 64');
test(firstUniqChar("aaaaabbbbbcccccdddddeeeeefffffggggghhhhiiiiijjjjkkkkklllllmmmmmnnnnnooooo"), -1, 'Test 65');
test(firstUniqChar("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwxyzz"), 44, 'Test 66');
test(firstUniqChar("s"), 0, 'Test 67');
test(firstUniqChar("swissknife"), 1, 'Test 68');
test(firstUniqChar("abacaxabacayabacaza"), 5, 'Test 69');
test(firstUniqChar("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwxyz"), 44, 'Test 70');
test(firstUniqChar("thisproblemhasaveryunusalcharacterdistribution"), 4, 'Test 71');
test(firstUniqChar("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzz"), -1, 'Test 72');
test(firstUniqChar("aabbcdeef"), 4, 'Test 73');
test(firstUniqChar("aabbcdeeffgg"), 4, 'Test 74');
test(firstUniqChar("abcdefghijhgfedcba"), 8, 'Test 75');
test(firstUniqChar("single"), 0, 'Test 76');
test(firstUniqChar("uniquecharacter"), 1, 'Test 77');
test(firstUniqChar("mississippi"), 0, 'Test 78');
test(firstUniqChar("hashmapimplementation"), 2, 'Test 79');
test(firstUniqChar("abcdabcdbacd"), -1, 'Test 80');
test(firstUniqChar("zyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyz"), -1, 'Test 81');
test(firstUniqChar("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), -1, 'Test 82');
test(firstUniqChar("supercalifragilisticexpialidocious"), 9, 'Test 83');
test(firstUniqChar("firstnonrepeatingcharacter"), 0, 'Test 84');
test(firstUniqChar("zzzzyyyyyxxxxxwwwwvvvvuuuuttttssssrrrrqqqqpppooooonnnnmmmmllllkkkkjjjjiiiihhhhggggffffeeeeddddccccbbbbaaaa"), -1, 'Test 85');
test(firstUniqChar("onlyonecharacterrepeats"), 2, 'Test 86');
test(firstUniqChar("ababababababababababababababababababab"), -1, 'Test 87');
test(firstUniqChar("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwooxxyyzzzz"), -1, 'Test 88');
test(firstUniqChar("thequickbrownfoxjumpsoverthelazydog"), 3, 'Test 89');
test(firstUniqChar("bbaaccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzza"), -1, 'Test 90');
test(firstUniqChar("almostuniquecharacter"), 1, 'Test 91');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

