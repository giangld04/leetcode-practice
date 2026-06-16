// Test: 1312. Minimum Insertion Steps To Make A String Palindrome
// 123 test cases from LeetCodeDataset
// Run: node test.js

const { minInsertions } = require("./solution");

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

console.log("\n1312. Minimum Insertion Steps To Make A String Palindrome\n");

test(minInsertions("race"), 3, 'Test 1');
test(minInsertions("noon"), 0, 'Test 2');
test(minInsertions("abcba"), 0, 'Test 3');
test(minInsertions("abcdef"), 5, 'Test 4');
test(minInsertions("zzazz"), 0, 'Test 5');
test(minInsertions("google"), 2, 'Test 6');
test(minInsertions("mbadm"), 2, 'Test 7');
test(minInsertions("abcd"), 3, 'Test 8');
test(minInsertions("algorithm"), 8, 'Test 9');
test(minInsertions("leetcode"), 5, 'Test 10');
test(minInsertions("aabb"), 2, 'Test 11');
test(minInsertions("abacabadabacabadabacaba"), 0, 'Test 12');
test(minInsertions("noonappa"), 4, 'Test 13');
test(minInsertions("wasitacaroracatisawwasitacaroracatisaw"), 0, 'Test 14');
test(minInsertions("amanaplanacanalpanamanaplanacanalpanama"), 0, 'Test 15');
test(minInsertions("aaaabaaaa"), 0, 'Test 16');
test(minInsertions("aabaa"), 0, 'Test 17');
test(minInsertions("abcde"), 4, 'Test 18');
test(minInsertions("abcdabcdabcd"), 7, 'Test 19');
test(minInsertions("racecarrace"), 3, 'Test 20');
test(minInsertions("rotorlevel"), 5, 'Test 21');
test(minInsertions("flzxrpfr"), 5, 'Test 22');
test(minInsertions("geeksforgeeks"), 8, 'Test 23');
test(minInsertions("abcdefghijklijklkjihgfedcba"), 2, 'Test 24');
test(minInsertions("aaaaabbbbb"), 5, 'Test 25');
test(minInsertions("flasflasflas"), 7, 'Test 26');
test(minInsertions("abcdefghikjlmnopqrstuvwxyzzyxwvutnmlkjihgfedcba"), 7, 'Test 27');
test(minInsertions("noonnoonnoonnoon"), 0, 'Test 28');
test(minInsertions("mississippimississippi"), 6, 'Test 29');
test(minInsertions("jglkhflhfl"), 5, 'Test 30');
test(minInsertions("abca"), 1, 'Test 31');
test(minInsertions("verylongstringthatneedsmanyinsertionstopalindrome"), 27, 'Test 32');
test(minInsertions("bananaananabanana"), 2, 'Test 33');
test(minInsertions("abcdxyzzyxwvutrdcba"), 5, 'Test 34');
test(minInsertions("abcdxyzzyxdcba"), 0, 'Test 35');
test(minInsertions("qzihxknhzvqt"), 5, 'Test 36');
test(minInsertions("triplepletriple"), 10, 'Test 37');
test(minInsertions("xyxzzxyxyxyxyxyx"), 3, 'Test 38');
test(minInsertions("abcdbca"), 2, 'Test 39');
test(minInsertions("kayak"), 0, 'Test 40');
test(minInsertions("flrif"), 2, 'Test 41');
test(minInsertions("abcdefghijjiuhgfedcba"), 1, 'Test 42');
test(minInsertions("aabaaabaabaaa"), 2, 'Test 43');
test(minInsertions("pqrstuabutsrqp"), 1, 'Test 44');
test(minInsertions("xyxz"), 1, 'Test 45');
test(minInsertions("abcda"), 2, 'Test 46');
test(minInsertions("ababababababab"), 1, 'Test 47');
test(minInsertions("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 0, 'Test 48');
test(minInsertions("abababababa"), 0, 'Test 49');
test(minInsertions("deeee"), 1, 'Test 50');
test(minInsertions("abcbabc"), 2, 'Test 51');
test(minInsertions("abcdefedcbafedcba"), 4, 'Test 52');
test(minInsertions("randomstring"), 9, 'Test 53');
test(minInsertions("thisisaverylongstringthatneedsmuchinsertionstobecomeapalindrome"), 42, 'Test 54');
test(minInsertions("abbaabbaba"), 2, 'Test 55');
test(minInsertions("wasitacaroracatisaw"), 0, 'Test 56');
test(minInsertions("trinitrotoluene"), 8, 'Test 57');
test(minInsertions("xyxxyxyxyxyx"), 1, 'Test 58');
test(minInsertions("aibohphobia"), 0, 'Test 59');
test(minInsertions("abcdefedcba"), 0, 'Test 60');
test(minInsertions("level"), 0, 'Test 61');
test(minInsertions("aabbccdd"), 6, 'Test 62');
test(minInsertions("stats"), 0, 'Test 63');
test(minInsertions("levellevellevel"), 0, 'Test 64');
test(minInsertions("fdlhdlf"), 2, 'Test 65');
test(minInsertions("abccbaabc"), 3, 'Test 66');
test(minInsertions("abababab"), 1, 'Test 67');
test(minInsertions("abacaxabaycabacaxaba"), 5, 'Test 68');
test(minInsertions("radar"), 0, 'Test 69');
test(minInsertions("xyxzxy"), 1, 'Test 70');
test(minInsertions("abacabadabacaba"), 0, 'Test 71');
test(minInsertions("pwwkew"), 3, 'Test 72');
test(minInsertions("redivider"), 0, 'Test 73');
test(minInsertions("abcdabcd"), 5, 'Test 74');
test(minInsertions("banana"), 1, 'Test 75');
test(minInsertions("noonnoonnoonnoonnoon"), 0, 'Test 76');
test(minInsertions("anana"), 0, 'Test 77');
test(minInsertions("noonabbada"), 6, 'Test 78');
test(minInsertions("agbdba"), 1, 'Test 79');
test(minInsertions("ananana"), 0, 'Test 80');
test(minInsertions("detartrated"), 0, 'Test 81');
test(minInsertions("abcdedcbaabcdedcba"), 0, 'Test 82');
test(minInsertions("hellohello"), 5, 'Test 83');
test(minInsertions("abccba"), 0, 'Test 84');
test(minInsertions("aabbccddeeff"), 10, 'Test 85');
test(minInsertions("xyxzxyxyyzz"), 4, 'Test 86');
test(minInsertions("madamimadam"), 0, 'Test 87');
test(minInsertions("abcdefghikjlmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba"), 2, 'Test 88');
test(minInsertions("bbbbabc"), 2, 'Test 89');
test(minInsertions("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 50, 'Test 90');
test(minInsertions("cabbbbb"), 2, 'Test 91');
test(minInsertions("amanaplanacanalpanama"), 0, 'Test 92');
test(minInsertions("aebcbda"), 2, 'Test 93');
test(minInsertions("zyxwvutsrqponmlkjihgfedcba"), 25, 'Test 94');
test(minInsertions("abcdefg"), 6, 'Test 95');
test(minInsertions("zyelkx"), 5, 'Test 96');
test(minInsertions("aaaaabbbbbaaaaa"), 0, 'Test 97');
test(minInsertions("abbbbac"), 1, 'Test 98');
test(minInsertions("abcbbbb"), 2, 'Test 99');
test(minInsertions("abcdefghijklmnopqrstuvwxyz"), 25, 'Test 100');
test(minInsertions("noonoonnoon"), 1, 'Test 101');
test(minInsertions("repaper"), 0, 'Test 102');
test(minInsertions("xyzxyz"), 3, 'Test 103');
test(minInsertions("abcdedcba"), 0, 'Test 104');
test(minInsertions("mamad"), 2, 'Test 105');
test(minInsertions("noonhighnoon"), 1, 'Test 106');
test(minInsertions("abacdfgdcaba"), 1, 'Test 107');
test(minInsertions("abcabc"), 3, 'Test 108');
test(minInsertions("rotor"), 0, 'Test 109');
test(minInsertions("abcdefghihgfedcba"), 0, 'Test 110');
test(minInsertions("racecar"), 0, 'Test 111');
test(minInsertions("racecarrracecar"), 0, 'Test 112');
test(minInsertions("madamimadamimadam"), 0, 'Test 113');
test(minInsertions("aabbccddeeefff"), 11, 'Test 114');
test(minInsertions("xyzyxyzyx"), 0, 'Test 115');
test(minInsertions("aabbcc"), 4, 'Test 116');
test(minInsertions("mississippi"), 4, 'Test 117');
test(minInsertions("flamingo"), 7, 'Test 118');
test(minInsertions("zxcvbnmasdfghjkloiuytrewq"), 24, 'Test 119');
test(minInsertions("amcelkpal"), 6, 'Test 120');
test(minInsertions("abbababa"), 1, 'Test 121');
test(minInsertions("aaabaaaa"), 1, 'Test 122');
test(minInsertions("abcdabcda"), 4, 'Test 123');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

