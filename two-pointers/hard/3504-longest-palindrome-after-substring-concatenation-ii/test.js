// Test: 3504. Longest Palindrome After Substring Concatenation Ii
// 122 test cases from LeetCodeDataset
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

console.log("\n3504. Longest Palindrome After Substring Concatenation Ii\n");

test(longestPalindrome("b", "aaaa"), 4, 'Test 1');
test(longestPalindrome("hello", "world"), 3, 'Test 2');
test(longestPalindrome("aaaa", "bbbb"), 4, 'Test 3');
test(longestPalindrome("abcde", "ecdba"), 5, 'Test 4');
test(longestPalindrome("noon", "moon"), 7, 'Test 5');
test(longestPalindrome("race", "care"), 7, 'Test 6');
test(longestPalindrome("a", "a"), 2, 'Test 7');
test(longestPalindrome("abcd", "dcba"), 8, 'Test 8');
test(longestPalindrome("xyz", "zyx"), 6, 'Test 9');
test(longestPalindrome("abc", "def"), 1, 'Test 10');
test(longestPalindrome("referrefer", "referref"), 16, 'Test 11');
test(longestPalindrome("abccba", "abcba"), 7, 'Test 12');
test(longestPalindrome("abcabc", "cbacba"), 12, 'Test 13');
test(longestPalindrome("mnopqr", "rqpomn"), 8, 'Test 14');
test(longestPalindrome("rotorrotor", "rotorrot"), 16, 'Test 15');
test(longestPalindrome("madam", "madammadam"), 15, 'Test 16');
test(longestPalindrome("aabbaabb", "bbaa"), 10, 'Test 17');
test(longestPalindrome("aaaaabbbbb", "bbbbbbaaaa"), 19, 'Test 18');
test(longestPalindrome("abccba", "bccbab"), 11, 'Test 19');
test(longestPalindrome("aabbcc", "ccbbaa"), 12, 'Test 20');
test(longestPalindrome("abcdef", "fedabc"), 6, 'Test 21');
test(longestPalindrome("xyxyxy", "yxyxyx"), 12, 'Test 22');
test(longestPalindrome("aba", "bab"), 5, 'Test 23');
test(longestPalindrome("abcdefg", "gfedcba"), 14, 'Test 24');
test(longestPalindrome("tatactatta", "tatattac"), 11, 'Test 25');
test(longestPalindrome("madam", "madam"), 10, 'Test 26');
test(longestPalindrome("aabaa", "bbabb"), 6, 'Test 27');
test(longestPalindrome("abcdef", "fedcbaghi"), 12, 'Test 28');
test(longestPalindrome("palindrome", "emordnilap"), 20, 'Test 29');
test(longestPalindrome("xyzaaayzx", "zyxxzyxzy"), 9, 'Test 30');
test(longestPalindrome("abcabcabc", "cbacbacba"), 18, 'Test 31');
test(longestPalindrome("pqr", "rqp"), 6, 'Test 32');
test(longestPalindrome("abcdcba", "abcdcba"), 14, 'Test 33');
test(longestPalindrome("deified", "deified"), 14, 'Test 34');
test(longestPalindrome("abracadabra", "abraccadabr"), 8, 'Test 35');
test(longestPalindrome("longestpalindrome", "emordnilapgnol"), 20, 'Test 36');
test(longestPalindrome("abcdefghijk", "kjihgfedcba"), 22, 'Test 37');
test(longestPalindrome("abacax", "xacaba"), 12, 'Test 38');
test(longestPalindrome("pqrstu", "utsrqponmlkjihgfedcba"), 12, 'Test 39');
test(longestPalindrome("abcdef", "gfedcbaa"), 13, 'Test 40');
test(longestPalindrome("civiccivic", "iviciciv"), 11, 'Test 41');
test(longestPalindrome("aabbccdd", "ddeeccbbaa"), 14, 'Test 42');
test(longestPalindrome("abcxyzdef", "fedxyzcba"), 7, 'Test 43');
test(longestPalindrome("civic", "civiccivic"), 15, 'Test 44');
test(longestPalindrome("banana", "nanaba"), 11, 'Test 45');
test(longestPalindrome("abacdfgdcaba", "abacdfgdcaba"), 11, 'Test 46');
test(longestPalindrome("tattarrattat", "tattarrattat"), 24, 'Test 47');
test(longestPalindrome("level", "levvel"), 7, 'Test 48');
test(longestPalindrome("xxyyyzzz", "zzzyyyxx"), 16, 'Test 49');
test(longestPalindrome("rotorrotor", "rotor"), 15, 'Test 50');
test(longestPalindrome("rotor", "rotator"), 7, 'Test 51');
test(longestPalindrome("abacaxbaca", "xacabacaba"), 13, 'Test 52');
test(longestPalindrome("mnopqrstu", "utsrqponmlkjihgfedcbazyxwvut"), 18, 'Test 53');
test(longestPalindrome("aabbccddeeffgg", "ggffeeeeddccbbaa"), 22, 'Test 54');
test(longestPalindrome("xyzyx", "yzyxxy"), 9, 'Test 55');
test(longestPalindrome("aaaaaa", "bbbbbb"), 6, 'Test 56');
test(longestPalindrome("abcdefg", "hijklmn"), 1, 'Test 57');
test(longestPalindrome("abcdef", "fedcbag"), 12, 'Test 58');
test(longestPalindrome("level", "leveleveleveleveleveleveleveleveleveleveleveleveleve"), 55, 'Test 59');
test(longestPalindrome("abcdabcd", "dcbaabcd"), 9, 'Test 60');
test(longestPalindrome("abcdeedcba", "fghijklkjihgf"), 13, 'Test 61');
test(longestPalindrome("aaaabb", "aabbaa"), 10, 'Test 62');
test(longestPalindrome("civic", "civic"), 10, 'Test 63');
test(longestPalindrome("level", "levevl"), 8, 'Test 64');
test(longestPalindrome("racecar", "madam"), 7, 'Test 65');
test(longestPalindrome("deifieddeified", "deifiededeif"), 21, 'Test 66');
test(longestPalindrome("noonhighnoon", "deifiedlevel"), 7, 'Test 67');
test(longestPalindrome("abracadabra", "aracabradab"), 7, 'Test 68');
test(longestPalindrome("level", "deified"), 7, 'Test 69');
test(longestPalindrome("mirror", "rimmom"), 9, 'Test 70');
test(longestPalindrome("abcdedcba", "zyxwxyzyx"), 9, 'Test 71');
test(longestPalindrome("pneumonoultramicroscopicsilicovolcanoconiosis", "osivicnoclovosicrepimicroscopultramaounep"), 11, 'Test 72');
test(longestPalindrome("xyzzyx", "abczyzyxcba"), 7, 'Test 73');
test(longestPalindrome("abcxyzyxcba", "xyzzyx"), 11, 'Test 74');
test(longestPalindrome("abcabcabc", "abcabcabc"), 3, 'Test 75');
test(longestPalindrome("mississippi", "ppissimms"), 13, 'Test 76');
test(longestPalindrome("abacaxaba", "abacaxaba"), 7, 'Test 77');
test(longestPalindrome("hello", "olleh"), 10, 'Test 78');
test(longestPalindrome("noonhighnoon", "noonlownoon"), 9, 'Test 79');
test(longestPalindrome("abaccadda", "addacca"), 14, 'Test 80');
test(longestPalindrome("refer", "repaper"), 7, 'Test 81');
test(longestPalindrome("mississippi", "ippississimm"), 22, 'Test 82');
test(longestPalindrome("abacaba", "bdcabdc"), 9, 'Test 83');
test(longestPalindrome("mississippi", "noon"), 7, 'Test 84');
test(longestPalindrome("noon", "noonnoonnoonnoon"), 20, 'Test 85');
test(longestPalindrome("abracadabra", "abacabadabrac"), 11, 'Test 86');
test(longestPalindrome("abcd", "abcdabcd"), 3, 'Test 87');
test(longestPalindrome("abc", "mnopqr"), 1, 'Test 88');
test(longestPalindrome("abccba", "xyzyx"), 6, 'Test 89');
test(longestPalindrome("zzzzzz", "zzzzzz"), 12, 'Test 90');
test(longestPalindrome("amanaplanacanalpanama", "amanaP lanac a nalp a namA"), 21, 'Test 91');
test(longestPalindrome("noonnoon", "moonmoon"), 8, 'Test 92');
test(longestPalindrome("noonhighnoon", "noon"), 9, 'Test 93');
test(longestPalindrome("xyzz", "zzxy"), 4, 'Test 94');
test(longestPalindrome("racecar", "civic"), 7, 'Test 95');
test(longestPalindrome("mnopqr", "rqponm"), 12, 'Test 96');
test(longestPalindrome("levellevellevel", "levevlevevlevevl"), 18, 'Test 97');
test(longestPalindrome("mammam", "mammam"), 12, 'Test 98');
test(longestPalindrome("kayak", "yakayk"), 7, 'Test 99');
test(longestPalindrome("radar", "radar"), 10, 'Test 100');
test(longestPalindrome("neveroddoreven", "levelmadamrotor"), 14, 'Test 101');
test(longestPalindrome("madam", "refer"), 5, 'Test 102');
test(longestPalindrome("hello", "ollehworld"), 10, 'Test 103');
test(longestPalindrome("xyzuvw", "vwxyz"), 3, 'Test 104');
test(longestPalindrome("zzzzzzzzzz", "zzzzzzzzzz"), 20, 'Test 105');
test(longestPalindrome("zzzzz", "zzzz"), 9, 'Test 106');
test(longestPalindrome("banana", "ananab"), 12, 'Test 107');
test(longestPalindrome("abacabadabacaba", "abacabadabacaba"), 30, 'Test 108');
test(longestPalindrome("rotor", "rotorrotorrotor"), 20, 'Test 109');
test(longestPalindrome("aabbccddeeff", "ffeeddccbbaa"), 24, 'Test 110');
test(longestPalindrome("abracadabra", "arbadacarba"), 22, 'Test 111');
test(longestPalindrome("aaaabbbb", "bbbbcccc"), 8, 'Test 112');
test(longestPalindrome("abacdfgdcaba", "abacdgfdcaba"), 24, 'Test 113');
test(longestPalindrome("repaper", "repaper"), 14, 'Test 114');
test(longestPalindrome("aabbccddeeffgg", "ggffeeddcbaabbccddeeffgg"), 18, 'Test 115');
test(longestPalindrome("racecar", "carrear"), 7, 'Test 116');
test(longestPalindrome("abcabcabcabc", "cbacbacbacba"), 24, 'Test 117');
test(longestPalindrome("racecar", "racecar"), 14, 'Test 118');
test(longestPalindrome("aabbccdd", "dccbbaaa"), 15, 'Test 119');
test(longestPalindrome("abcdefgfedcba", "ghijklimno"), 13, 'Test 120');
test(longestPalindrome("aabbccddeeaabbccddeeaabb", "ddeeaabbccddeeaabb"), 6, 'Test 121');
test(longestPalindrome("rotor", "rotor"), 10, 'Test 122');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

