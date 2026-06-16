// Test: 3503. Longest Palindrome After Substring Concatenation I
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { longestPalindrome } = require("./solution");

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

console.log("\n3503. Longest Palindrome After Substring Concatenation I\n");

test(longestPalindrome("b", "aaaa"), 4, 'Test 1');
test(longestPalindrome("hello", "world"), 3, 'Test 2');
test(longestPalindrome("different", "entirely"), 5, 'Test 3');
test(longestPalindrome("level", "deified"), 7, 'Test 4');
test(longestPalindrome("xyza", "azxy"), 4, 'Test 5');
test(longestPalindrome("abcabc", "cbacba"), 12, 'Test 6');
test(longestPalindrome("race", "ecar"), 8, 'Test 7');
test(longestPalindrome("abcde", "ecdba"), 5, 'Test 8');
test(longestPalindrome("noon", "moon"), 7, 'Test 9');
test(longestPalindrome("race", "care"), 7, 'Test 10');
test(longestPalindrome("a", "a"), 2, 'Test 11');
test(longestPalindrome("hello", "olleh"), 10, 'Test 12');
test(longestPalindrome("abcd", "dcba"), 8, 'Test 13');
test(longestPalindrome("xyz", "zyx"), 6, 'Test 14');
test(longestPalindrome("same", "same"), 3, 'Test 15');
test(longestPalindrome("abc", "def"), 1, 'Test 16');
test(longestPalindrome("abac", "cab"), 6, 'Test 17');
test(longestPalindrome("ab", "ba"), 4, 'Test 18');
test(longestPalindrome("mississippi", "pip"), 7, 'Test 19');
test(longestPalindrome("aabbcc", "ccbbaa"), 12, 'Test 20');
test(longestPalindrome("rotor", "rotorrotor"), 15, 'Test 21');
test(longestPalindrome("xyxyxyxy", "yxyxyxyx"), 16, 'Test 22');
test(longestPalindrome("noonracecar", "racecarnoon"), 22, 'Test 23');
test(longestPalindrome("aaaaabbbbbaaaa", "bbbbbaaaaabbbb"), 24, 'Test 24');
test(longestPalindrome("abcdefg", "gfedcba"), 14, 'Test 25');
test(longestPalindrome("step", "pots"), 5, 'Test 26');
test(longestPalindrome("madam", "madame"), 10, 'Test 27');
test(longestPalindrome("abababab", "babababa"), 16, 'Test 28');
test(longestPalindrome("madam", "madam"), 10, 'Test 29');
test(longestPalindrome("xyzxyzxyz", "zyxzyxzyx"), 18, 'Test 30');
test(longestPalindrome("palindrome", "emordnilap"), 20, 'Test 31');
test(longestPalindrome("zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyz"), 52, 'Test 32');
test(longestPalindrome("pneumonoultramicroscopicsilicovolcanoconiosis", "coniosisvolcanosilicovolcanoultramicroscopicneumo"), 7, 'Test 33');
test(longestPalindrome("noonrace", "carenood"), 7, 'Test 34');
test(longestPalindrome("abccba", "abcabc"), 7, 'Test 35');
test(longestPalindrome("anana", "ananana"), 11, 'Test 36');
test(longestPalindrome("xyzzzzxy", "zzzz"), 9, 'Test 37');
test(longestPalindrome("madam", "madamracecar"), 10, 'Test 38');
test(longestPalindrome("detartrated", "deified"), 11, 'Test 39');
test(longestPalindrome("abccba", "xyzzyx"), 6, 'Test 40');
test(longestPalindrome("civic", "reviver"), 7, 'Test 41');
test(longestPalindrome("abacdfgdcaba", "abacdfgdcaba"), 11, 'Test 42');
test(longestPalindrome("abacabadaba", "babadacaba"), 15, 'Test 43');
test(longestPalindrome("abba", "bbaa"), 7, 'Test 44');
test(longestPalindrome("refer", "refer"), 10, 'Test 45');
test(longestPalindrome("aabbccddeeff", "ffeeddccbaab"), 18, 'Test 46');
test(longestPalindrome("xyzzyx", "zyxyzyx"), 9, 'Test 47');
test(longestPalindrome("abcdabcd", "dcbaabcd"), 9, 'Test 48');
test(longestPalindrome("abcba", "abcba"), 10, 'Test 49');
test(longestPalindrome("xyx", "yxyyxyx"), 8, 'Test 50');
test(longestPalindrome("deified", "deifiedlevel"), 14, 'Test 51');
test(longestPalindrome("refer", "referrefer"), 15, 'Test 52');
test(longestPalindrome("deified", "madam"), 7, 'Test 53');
test(longestPalindrome("longerstring", "stringlonger"), 3, 'Test 54');
test(longestPalindrome("testset", "tset"), 9, 'Test 55');
test(longestPalindrome("abacaxaba", "abcdeab"), 5, 'Test 56');
test(longestPalindrome("xyzabcabc", "cbabczyx"), 11, 'Test 57');
test(longestPalindrome("abcdxyz", "zyxcba"), 7, 'Test 58');
test(longestPalindrome("noonhighnoon", "noonlownoon"), 9, 'Test 59');
test(longestPalindrome("zzzzz", "yyyyy"), 5, 'Test 60');
test(longestPalindrome("abcdefghijk", "zyxwvutsrqp"), 1, 'Test 61');
test(longestPalindrome("civic", "refer"), 5, 'Test 62');
test(longestPalindrome("madamimadam", "madaminimadam"), 17, 'Test 63');
test(longestPalindrome("kayak", "tenet"), 5, 'Test 64');
test(longestPalindrome("aaabaaa", "aaaaaaa"), 10, 'Test 65');
test(longestPalindrome("abccba", "baccab"), 6, 'Test 66');
test(longestPalindrome("pqrstu", "utrspq"), 4, 'Test 67');
test(longestPalindrome("abcdefghi", "ihgfedcba"), 18, 'Test 68');
test(longestPalindrome("abacdfgdcaba", "bagxacdgadb"), 9, 'Test 69');
test(longestPalindrome("noonnoon", "noonnoon"), 16, 'Test 70');
test(longestPalindrome("abacaba", "badacab"), 9, 'Test 71');
test(longestPalindrome("mississippi", "pississim"), 19, 'Test 72');
test(longestPalindrome("noonhighnoon", "noon"), 9, 'Test 73');
test(longestPalindrome("mnopqrstuv", "vutsrqponm"), 20, 'Test 74');
test(longestPalindrome("aabbccddeeffgghhiijjkkll", "llkkjjiihhggffeeeeddccbaab"), 32, 'Test 75');
test(longestPalindrome("mnopqr", "rqponm"), 12, 'Test 76');
test(longestPalindrome("aaaaaaab", "bbbaaaaa"), 14, 'Test 77');
test(longestPalindrome("radar", "level"), 5, 'Test 78');
test(longestPalindrome("mississippi", "ppississimm"), 21, 'Test 79');
test(longestPalindrome("pqrstu", "utsrpq"), 8, 'Test 80');
test(longestPalindrome("racecar", "carrace"), 9, 'Test 81');
test(longestPalindrome("abacabadabacaba", "badacabadacab"), 15, 'Test 82');
test(longestPalindrome("aaabaaa", "bbbabb"), 7, 'Test 83');
test(longestPalindrome("banana", "ananab"), 12, 'Test 84');
test(longestPalindrome("noon", "moonnoon"), 9, 'Test 85');
test(longestPalindrome("wow", "wowow"), 7, 'Test 86');
test(longestPalindrome("aabbccddeeff", "ffeeddccbbaa"), 24, 'Test 87');
test(longestPalindrome("abracadabra", "arbadacarba"), 22, 'Test 88');
test(longestPalindrome("mom", "momom"), 7, 'Test 89');
test(longestPalindrome("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), 52, 'Test 90');
test(longestPalindrome("ananab", "banana"), 12, 'Test 91');
test(longestPalindrome("abcxyz", "zyxcba"), 12, 'Test 92');
test(longestPalindrome("abacdfgdcaba", "abacdgfdcaba"), 24, 'Test 93');
test(longestPalindrome("racecar", "civicracecar"), 19, 'Test 94');
test(longestPalindrome("madam", "detartrated"), 11, 'Test 95');
test(longestPalindrome("aaaaaaa", "bbbbbbb"), 7, 'Test 96');
test(longestPalindrome("aabaaaabbbaa", "bbbaaaaabbaa"), 16, 'Test 97');
test(longestPalindrome("racecar", "racecar"), 14, 'Test 98');
test(longestPalindrome("aabbccddeeff", "ffeeddccbaa"), 18, 'Test 99');
test(longestPalindrome("pqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), 22, 'Test 100');
test(longestPalindrome("rotor", "rotor"), 10, 'Test 101');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

