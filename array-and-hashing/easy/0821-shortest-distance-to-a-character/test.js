// Test: 821. Shortest Distance To A Character
// 118 test cases from LeetCodeDataset
// Run: node test.js

const { shortestToChar } = require("./solution");

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

console.log("\n821. Shortest Distance To A Character\n");

test(shortestToChar("abba", "a"), [0, 1, 1, 0], 'Test 1');
test(shortestToChar("loveleetcode", "e"), [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0], 'Test 2');
test(shortestToChar("abcde", "e"), [4, 3, 2, 1, 0], 'Test 3');
test(shortestToChar("abcabcabc", "b"), [1, 0, 1, 1, 0, 1, 1, 0, 1], 'Test 4');
test(shortestToChar("abcdabcabcde", "c"), [2, 1, 0, 1, 2, 1, 0, 1, 1, 0, 1, 2], 'Test 5');
test(shortestToChar("eccdccccdcccdcced", "e"), [0, 1, 2, 3, 4, 5, 6, 7, 7, 6, 5, 4, 3, 2, 1, 0, 1], 'Test 6');
test(shortestToChar("abcdabc", "a"), [0, 1, 2, 1, 0, 1, 2], 'Test 7');
test(shortestToChar("aabbcc", "b"), [2, 1, 0, 0, 1, 2], 'Test 8');
test(shortestToChar("zzzz", "z"), [0, 0, 0, 0], 'Test 9');
test(shortestToChar("bbaacc", "c"), [4, 3, 2, 1, 0, 0], 'Test 10');
test(shortestToChar("ababab", "a"), [0, 1, 0, 1, 0, 1], 'Test 11');
test(shortestToChar("aabbccddeeff", "d"), [6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4], 'Test 12');
test(shortestToChar("abcdefg", "a"), [0, 1, 2, 3, 4, 5, 6], 'Test 13');
test(shortestToChar("aabaabaaa", "b"), [2, 1, 0, 1, 1, 0, 1, 2, 3], 'Test 14');
test(shortestToChar("aaab", "b"), [3, 2, 1, 0], 'Test 15');
test(shortestToChar("abcde", "a"), [0, 1, 2, 3, 4], 'Test 16');
test(shortestToChar("mississippi", "i"), [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0], 'Test 17');
test(shortestToChar("abcdefg", "g"), [6, 5, 4, 3, 2, 1, 0], 'Test 18');
test(shortestToChar("abba", "b"), [1, 0, 0, 1], 'Test 19');
test(shortestToChar("aaaa", "a"), [0, 0, 0, 0], 'Test 20');
test(shortestToChar("aaaaabbbbbccccc", "b"), [5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5], 'Test 21');
test(shortestToChar("a", "a"), [0], 'Test 22');
test(shortestToChar("mnopqrstuvwxyzmnpqrstuvwxyzmnpqrstuvwxyzmnpqrstuvwxyzmnpqrstuvwxyz", "z"), [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 6, 5, 4, 3, 2, 1, 0], 'Test 23');
test(shortestToChar("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "m"), [24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], 'Test 24');
test(shortestToChar("hellohellohello", "h"), [0, 1, 2, 2, 1, 0, 1, 2, 2, 1, 0, 1, 2, 3, 4], 'Test 25');
test(shortestToChar("abracadabraabracadabraabracadabra", "a"), [0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0], 'Test 26');
test(shortestToChar("zzzxxxyyyzzz", "y"), [6, 5, 4, 3, 2, 1, 0, 0, 0, 1, 2, 3], 'Test 27');
test(shortestToChar("qwertyuiopasdfghjklzxcvbnmqwertyuiop", "o"), [8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1], 'Test 28');
test(shortestToChar("abcdefghijabcdefghij", "f"), [5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4], 'Test 29');
test(shortestToChar("leetcodeleetcodeleetcode", "e"), [1, 0, 0, 1, 2, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0], 'Test 30');
test(shortestToChar("zzzzzzzzz", "z"), [0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 31');
test(shortestToChar("allaboutthatbass", "a"), [0, 1, 1, 0, 1, 2, 3, 3, 2, 1, 0, 1, 1, 0, 1, 2], 'Test 32');
test(shortestToChar("alibabaibabaibabaibabaibabaibabaibabaibaba", "b"), [3, 2, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1], 'Test 33');
test(shortestToChar("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "z"), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 34');
test(shortestToChar("bbaabbaabbaabbaabbaa", "b"), [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 2], 'Test 35');
test(shortestToChar("xyxzyzyxzyxzyzyx", "z"), [3, 2, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 2], 'Test 36');
test(shortestToChar("banana", "n"), [2, 1, 0, 1, 0, 1], 'Test 37');
test(shortestToChar("antidisestablishmentarianism", "a"), [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 1, 0, 1, 2, 3, 4], 'Test 38');
test(shortestToChar("bcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbc", "b"), [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 'Test 39');
test(shortestToChar("banana", "a"), [1, 0, 1, 0, 1, 0], 'Test 40');
test(shortestToChar("ababababababababababa", "b"), [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 'Test 41');
test(shortestToChar("xyxxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyx", "x"), [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 'Test 42');
test(shortestToChar("aaaaaaaabaaaaaaaa", "b"), [8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8], 'Test 43');
test(shortestToChar("aaaaaabbbaaaa", "b"), [6, 5, 4, 3, 2, 1, 0, 0, 0, 1, 2, 3, 4], 'Test 44');
test(shortestToChar("helloworld", "o"), [4, 3, 2, 1, 0, 1, 0, 1, 2, 3], 'Test 45');
test(shortestToChar("abababababababababab", "a"), [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 'Test 46');
test(shortestToChar("zzzxyzxxzyzxzzzxzyzxzyzxzyzxzyz", "x"), [3, 2, 1, 0, 1, 1, 0, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3], 'Test 47');
test(shortestToChar("zzzzzzzzzzzzzzzzzzzz", "z"), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 48');
test(shortestToChar("ababababab", "b"), [1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 'Test 49');
test(shortestToChar("abcdefghij", "a"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 50');
test(shortestToChar("ababababababababababababababababababababa", "a"), [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 'Test 51');
test(shortestToChar("abcdefgabcdefg", "c"), [2, 1, 0, 1, 2, 3, 3, 2, 1, 0, 1, 2, 3, 4], 'Test 52');
test(shortestToChar("ababababababababababababababababababababab", "a"), [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 'Test 53');
test(shortestToChar("honorificabilitudinitatibus", "i"), [5, 4, 3, 2, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 1, 2, 1, 0, 1, 2, 3], 'Test 54');
test(shortestToChar("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyz", "y"), [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], 'Test 55');
test(shortestToChar("leetcodeleetcodeleetcode", "o"), [5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 3, 2, 1, 0, 1, 2, 3, 4, 3, 2, 1, 0, 1, 2], 'Test 56');
test(shortestToChar("mississippi", "p"), [8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1], 'Test 57');
test(shortestToChar("bababababababababababababababababababababa", "b"), [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 'Test 58');
test(shortestToChar("abcdefghijklmnopqrstuvwxyz", "m"), [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 'Test 59');
test(shortestToChar("abcdefghij", "c"), [2, 1, 0, 1, 2, 3, 4, 5, 6, 7], 'Test 60');
test(shortestToChar("longstringwithvariouscharacters", "r"), [6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 3, 2, 1, 0, 1, 2, 2, 1, 0, 1], 'Test 61');
test(shortestToChar("bbbbbbaaaabbbbbbaaaabbbbbbaaaabbbbbb", "a"), [6, 5, 4, 3, 2, 1, 0, 0, 0, 0, 1, 2, 3, 3, 2, 1, 0, 0, 0, 0, 1, 2, 3, 3, 2, 1, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6], 'Test 62');
test(shortestToChar("abcdefghij", "h"), [7, 6, 5, 4, 3, 2, 1, 0, 1, 2], 'Test 63');
test(shortestToChar("abcdefghijklmnopqrstuvwxyz", "a"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 'Test 64');
test(shortestToChar("abcdefghijabcdefghijabcdefghij", "d"), [3, 2, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6], 'Test 65');
test(shortestToChar("xyxzyzyzxzyzxzyzx", "z"), [3, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 'Test 66');
test(shortestToChar("aaabbbcccdddeee", "c"), [6, 5, 4, 3, 2, 1, 0, 0, 0, 1, 2, 3, 4, 5, 6], 'Test 67');
test(shortestToChar("qwertyuiopasdfghjklzxcvbnmqwertyuiop", "q"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 68');
test(shortestToChar("abcdefghij", "j"), [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 69');
test(shortestToChar("pneumonoultramicroscopicsilicovolcanoconiosis", "o"), [5, 4, 3, 2, 1, 0, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 1, 0, 1, 2, 3, 4, 4, 3, 2, 1, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0, 1, 1, 0, 1, 2, 3], 'Test 70');
test(shortestToChar("thequickbrownfoxjumpsoverthelazydog", "o"), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 0, 1], 'Test 71');
test(shortestToChar("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "a"), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 72');
test(shortestToChar("zxyxzyxzyxz", "y"), [2, 1, 0, 1, 1, 0, 1, 1, 0, 1, 2], 'Test 73');
test(shortestToChar("abcdefghijklmnopqrstuvwxyz", "z"), [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 74');
test(shortestToChar("zzzzzzzzzz", "z"), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 75');
test(shortestToChar("longwordwithmanyletters", "w"), [4, 3, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 76');
test(shortestToChar("racecar", "e"), [3, 2, 1, 0, 1, 2, 3], 'Test 77');
test(shortestToChar("abacabadabacaba", "c"), [3, 2, 1, 0, 1, 2, 3, 4, 3, 2, 1, 0, 1, 2, 3], 'Test 78');
test(shortestToChar("programming", "m"), [6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3], 'Test 79');
test(shortestToChar("abcabcabcabcabc", "b"), [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], 'Test 80');
test(shortestToChar("abacabadabacaba", "b"), [1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1], 'Test 81');
test(shortestToChar("aaaaabaaaabaaaaabaaa", "b"), [5, 4, 3, 2, 1, 0, 1, 2, 2, 1, 0, 1, 2, 3, 2, 1, 0, 1, 2, 3], 'Test 82');
test(shortestToChar("abcdefghijabcdefghijabcdefghij", "f"), [5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4], 'Test 83');
test(shortestToChar("pppppppppp", "p"), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 84');
test(shortestToChar("xxyyzzxxxyyzz", "z"), [4, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0, 0], 'Test 85');
test(shortestToChar("aaaaaaaaaaaaaaaab", "b"), [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 86');
test(shortestToChar("bbaabbaabbaa", "a"), [2, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], 'Test 87');
test(shortestToChar("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "p"), [30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'Test 88');
test(shortestToChar("civicciviccivic", "v"), [2, 1, 0, 1, 2, 2, 1, 0, 1, 2, 2, 1, 0, 1, 2], 'Test 89');
test(shortestToChar("xyzxyzxyz", "z"), [2, 1, 0, 1, 1, 0, 1, 1, 0], 'Test 90');
test(shortestToChar("zzzzzzz", "z"), [0, 0, 0, 0, 0, 0, 0], 'Test 91');
test(shortestToChar("abababababababababab", "b"), [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 'Test 92');
test(shortestToChar("abcdefgabcdefg", "d"), [3, 2, 1, 0, 1, 2, 3, 3, 2, 1, 0, 1, 2, 3], 'Test 93');
test(shortestToChar("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "c"), [4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], 'Test 94');
test(shortestToChar("thequickbrownfoxjumpsoverthelazydog", "q"), [3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], 'Test 95');
test(shortestToChar("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", "n"), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 96');
test(shortestToChar("abcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcb", "b"), [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 'Test 97');
test(shortestToChar("xylophone", "o"), [3, 2, 1, 0, 1, 1, 0, 1, 2], 'Test 98');
test(shortestToChar("abababababababababababababab", "b"), [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], 'Test 99');
test(shortestToChar("racecar", "a"), [1, 0, 1, 2, 1, 0, 1], 'Test 100');
test(shortestToChar("aaabbaaa", "b"), [3, 2, 1, 0, 0, 1, 2, 3], 'Test 101');
test(shortestToChar("floccinaucinihilipilification", "f"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7], 'Test 102');
test(shortestToChar("elephantelephant", "e"), [0, 1, 0, 1, 2, 3, 2, 1, 0, 1, 0, 1, 2, 3, 4, 5], 'Test 103');
test(shortestToChar("thisisaverylongstringwithsomerepeatedcharacters", "s"), [3, 2, 1, 0, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 'Test 104');
test(shortestToChar("abacabadabacaba", "d"), [7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7], 'Test 105');
test(shortestToChar("aaaaaaaaaabbbbcccc", "b"), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0, 1, 2, 3, 4], 'Test 106');
test(shortestToChar("abcdefghigklmnopqrstuvwxyz", "m"), [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 'Test 107');
test(shortestToChar("abracadabra", "a"), [0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0], 'Test 108');
test(shortestToChar("leetcodeisnice", "e"), [1, 0, 0, 1, 2, 2, 1, 0, 1, 2, 3, 2, 1, 0], 'Test 109');
test(shortestToChar("abcdefgabcdefgabcdefg", "g"), [6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 3, 2, 1, 0, 1, 2, 3, 3, 2, 1, 0], 'Test 110');
test(shortestToChar("ababababa", "a"), [0, 1, 0, 1, 0, 1, 0, 1, 0], 'Test 111');
test(shortestToChar("lkhfjldshgflsjghljsfgljsdgfljsgdfjlsghsflkghsflkl", "l"), [0, 1, 2, 2, 1, 0, 1, 2, 3, 2, 1, 0, 1, 2, 2, 1, 0, 1, 2, 2, 1, 0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 3, 2, 1, 0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 2, 1, 0, 1, 0], 'Test 112');
test(shortestToChar("supercalifragilisticexpialidocious", "i"), [8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 2, 1, 0, 1, 0, 1, 1, 0, 1, 2, 2, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 2, 3], 'Test 113');
test(shortestToChar("hellohellohellohello", "l"), [2, 1, 0, 0, 1, 2, 1, 0, 0, 1, 2, 1, 0, 0, 1, 2, 1, 0, 0, 1], 'Test 114');
test(shortestToChar("elephant", "e"), [0, 1, 0, 1, 2, 3, 4, 5], 'Test 115');
test(shortestToChar("thisisaverylongstringwithmultiplescharacters", "s"), [3, 2, 1, 0, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0], 'Test 116');
test(shortestToChar("llllllllllllllllllllllllllllllllllllllllllllllllllllll", "l"), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 117');
test(shortestToChar("supercalifragilisticexpialidocious", "x"), [21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'Test 118');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

