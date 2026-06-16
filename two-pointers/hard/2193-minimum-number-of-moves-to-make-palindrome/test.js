// Test: 2193. Minimum Number Of Moves To Make Palindrome
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { minMovesToMakePalindrome } = require("./solution");

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

console.log("\n2193. Minimum Number Of Moves To Make Palindrome\n");

test(minMovesToMakePalindrome("abcba"), 0, 'Test 1');
test(minMovesToMakePalindrome("letelt"), 2, 'Test 2');
test(minMovesToMakePalindrome("abcdcba"), 0, 'Test 3');
test(minMovesToMakePalindrome("aabbaa"), 0, 'Test 4');
test(minMovesToMakePalindrome("abcdedcba"), 0, 'Test 5');
test(minMovesToMakePalindrome("mamad"), 3, 'Test 6');
test(minMovesToMakePalindrome("aabbc"), 4, 'Test 7');
test(minMovesToMakePalindrome("aabb"), 2, 'Test 8');
test(minMovesToMakePalindrome("racecar"), 0, 'Test 9');
test(minMovesToMakePalindrome("abcdefgfedcba"), 0, 'Test 10');
test(minMovesToMakePalindrome("noon"), 0, 'Test 11');
test(minMovesToMakePalindrome("deeee"), 2, 'Test 12');
test(minMovesToMakePalindrome("nnnnn"), 0, 'Test 13');
test(minMovesToMakePalindrome("aabbcc"), 6, 'Test 14');
test(minMovesToMakePalindrome("elvtoelvtoe"), 6, 'Test 15');
test(minMovesToMakePalindrome("aabbab"), 3, 'Test 16');
test(minMovesToMakePalindrome("asflkj"), 5, 'Test 17');
test(minMovesToMakePalindrome("abca"), 1, 'Test 18');
test(minMovesToMakePalindrome("abcdefghgfedcba"), 0, 'Test 19');
test(minMovesToMakePalindrome("zzzyzzyzz"), 1, 'Test 20');
test(minMovesToMakePalindrome("noonappa"), 8, 'Test 21');
test(minMovesToMakePalindrome("abcdcbad"), 3, 'Test 22');
test(minMovesToMakePalindrome("aabaaabbaaaaaabbbbaa"), 11, 'Test 23');
test(minMovesToMakePalindrome("aabbaabbaabb"), 6, 'Test 24');
test(minMovesToMakePalindrome("jlvaj"), 1, 'Test 25');
test(minMovesToMakePalindrome("xyzyzyzyzyx"), 0, 'Test 26');
test(minMovesToMakePalindrome("qpwoeirutoip"), 12, 'Test 27');
test(minMovesToMakePalindrome("abbbacaba"), 3, 'Test 28');
test(minMovesToMakePalindrome("abcabcabcabc"), 6, 'Test 29');
test(minMovesToMakePalindrome("noonnoon"), 0, 'Test 30');
test(minMovesToMakePalindrome("aaaaabbbb"), 10, 'Test 31');
test(minMovesToMakePalindrome("mnopqponmlkjihgfedcbaaaabbbccc"), 161, 'Test 32');
test(minMovesToMakePalindrome("aabbccddeeefffgggggffffeeeeddccbaaabb"), 37, 'Test 33');
test(minMovesToMakePalindrome("lplllp"), 1, 'Test 34');
test(minMovesToMakePalindrome("aabbbbaaa"), 2, 'Test 35');
test(minMovesToMakePalindrome("aaabbbcccdddcccbbaaa"), 5, 'Test 36');
test(minMovesToMakePalindrome("mmnmm"), 0, 'Test 37');
test(minMovesToMakePalindrome("mnvovnm"), 0, 'Test 38');
test(minMovesToMakePalindrome("aabbccddeee"), 24, 'Test 39');
test(minMovesToMakePalindrome("xyzzyx"), 0, 'Test 40');
test(minMovesToMakePalindrome("qwertyuiopasdfghjklzxcvbnmmlkjhgfdsapoiuytrewq"), 9, 'Test 41');
test(minMovesToMakePalindrome("aabbaabbaabbaabb"), 8, 'Test 42');
test(minMovesToMakePalindrome("abcdddcb"), 4, 'Test 43');
test(minMovesToMakePalindrome("abcdxyzzyxcba"), 3, 'Test 44');
test(minMovesToMakePalindrome("aabbccddeeeeddcbaabbaa"), 22, 'Test 45');
test(minMovesToMakePalindrome("aabbccddeeefffgggghhhggggfffeeeedddccbbaa"), 20, 'Test 46');
test(minMovesToMakePalindrome("aaaabbbbccccddddeeeeffffggggggg"), 204, 'Test 47');
test(minMovesToMakePalindrome("ppqqrrssrqqpp"), 1, 'Test 48');
test(minMovesToMakePalindrome("aaabbbb"), 6, 'Test 49');
test(minMovesToMakePalindrome("abcdedcbaa"), 4, 'Test 50');
test(minMovesToMakePalindrome("aabbccddeeffeecdccbbaa"), 7, 'Test 51');
test(minMovesToMakePalindrome("aabbccddeeefffggggffffeeeeddccbaaabb"), 38, 'Test 52');
test(minMovesToMakePalindrome("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 0, 'Test 53');
test(minMovesToMakePalindrome("abcdeedcba"), 0, 'Test 54');
test(minMovesToMakePalindrome("abacabad"), 4, 'Test 55');
test(minMovesToMakePalindrome("xyzyxzyxzyxzyx"), 2, 'Test 56');
test(minMovesToMakePalindrome("aaabbbaaa"), 0, 'Test 57');
test(minMovesToMakePalindrome("aabbabaa"), 1, 'Test 58');
test(minMovesToMakePalindrome("abcbaabcba"), 0, 'Test 59');
test(minMovesToMakePalindrome("zazbzazbzaz"), 0, 'Test 60');
test(minMovesToMakePalindrome("abcdeffedcba"), 0, 'Test 61');
test(minMovesToMakePalindrome("abcbca"), 1, 'Test 62');
test(minMovesToMakePalindrome("abcdefedcba"), 0, 'Test 63');
test(minMovesToMakePalindrome("aabbccdd"), 12, 'Test 64');
test(minMovesToMakePalindrome("level"), 0, 'Test 65');
test(minMovesToMakePalindrome("abcabcba"), 1, 'Test 66');
test(minMovesToMakePalindrome("aaaabbbb"), 8, 'Test 67');
test(minMovesToMakePalindrome("madam"), 0, 'Test 68');
test(minMovesToMakePalindrome("aabababaab"), 3, 'Test 69');
test(minMovesToMakePalindrome("aabccbaa"), 0, 'Test 70');
test(minMovesToMakePalindrome("abacabadabacaba"), 0, 'Test 71');
test(minMovesToMakePalindrome("aabbccddeeeffffgggghhhiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwxxyyzz"), 1192, 'Test 72');
test(minMovesToMakePalindrome("qwertewq"), 1, 'Test 73');
test(minMovesToMakePalindrome("qwertytrewq"), 0, 'Test 74');
test(minMovesToMakePalindrome("abcbad"), 3, 'Test 75');
test(minMovesToMakePalindrome("abbaaccdaabb"), 5, 'Test 76');
test(minMovesToMakePalindrome("aababbaaabbbbbaaaaa"), 8, 'Test 77');
test(minMovesToMakePalindrome("aabaaa"), 1, 'Test 78');
test(minMovesToMakePalindrome("aaabaaaabbaa"), 4, 'Test 79');
test(minMovesToMakePalindrome("xyzyzyx"), 0, 'Test 80');
test(minMovesToMakePalindrome("abccba"), 0, 'Test 81');
test(minMovesToMakePalindrome("zxcvbnmlkjhgfdasqwertyuiopoiuytrewqasdfghjklmnbvcxz"), 1, 'Test 82');
test(minMovesToMakePalindrome("aaaaaaaaaabbbbbbbbbbbaaaaaaaaa"), 6, 'Test 83');
test(minMovesToMakePalindrome("aabbccddeeeeddcbbbaa"), 10, 'Test 84');
test(minMovesToMakePalindrome("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 650, 'Test 85');
test(minMovesToMakePalindrome("aabbabba"), 2, 'Test 86');
test(minMovesToMakePalindrome("mmnnllkkjjiihhggffeeddccbbaa"), 182, 'Test 87');
test(minMovesToMakePalindrome("aaaaabbbaaaa"), 2, 'Test 88');
test(minMovesToMakePalindrome("zyxwvutsrqponmlkjihgfedcba"), 25, 'Test 89');
test(minMovesToMakePalindrome("nnnmmmnnn"), 0, 'Test 90');
test(minMovesToMakePalindrome("repaper"), 0, 'Test 91');
test(minMovesToMakePalindrome("abacdfgdcaba"), 1, 'Test 92');
test(minMovesToMakePalindrome("aabbccddeeefffgggfhheeeddccbaa"), 22, 'Test 93');
test(minMovesToMakePalindrome("abbaabba"), 0, 'Test 94');
test(minMovesToMakePalindrome("zyxzyzyx"), 4, 'Test 95');
test(minMovesToMakePalindrome("abcddcba"), 0, 'Test 96');
test(minMovesToMakePalindrome("rotor"), 0, 'Test 97');
test(minMovesToMakePalindrome("abcdefghihgfedcba"), 0, 'Test 98');
test(minMovesToMakePalindrome("aabbccddeeeffggffeeddccbbaa"), 3, 'Test 99');
test(minMovesToMakePalindrome("zyxwvutsrqponmlkjihgfedcbaedcba"), 115, 'Test 100');
test(minMovesToMakePalindrome("aabbccddeeeffffgggghhhiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz"), 1311, 'Test 101');
test(minMovesToMakePalindrome("levellol"), 6, 'Test 102');
test(minMovesToMakePalindrome("mississippi"), 13, 'Test 103');
test(minMovesToMakePalindrome("abcdeffgfedcba"), 1, 'Test 104');
test(minMovesToMakePalindrome("aabbccddeedcbaa"), 6, 'Test 105');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

