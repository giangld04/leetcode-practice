// Test: 680. Valid Palindrome Ii
// 108 test cases from LeetCodeDataset
// Run: node test.js

const { validPalindrome } = require("./solution");

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

console.log("\n680. Valid Palindrome Ii\n");

test(validPalindrome("raceecar"), true, 'Test 1');
test(validPalindrome("abcba"), true, 'Test 2');
test(validPalindrome("deeee"), true, 'Test 3');
test(validPalindrome("ab"), true, 'Test 4');
test(validPalindrome("abc"), false, 'Test 5');
test(validPalindrome("racecarx"), true, 'Test 6');
test(validPalindrome("abca"), true, 'Test 7');
test(validPalindrome("abcdedcba"), true, 'Test 8');
test(validPalindrome("abcdefgihgfedcba"), true, 'Test 9');
test(validPalindrome("abcdefdba"), false, 'Test 10');
test(validPalindrome("aabaa"), true, 'Test 11');
test(validPalindrome("racecar"), true, 'Test 12');
test(validPalindrome("a"), true, 'Test 13');
test(validPalindrome("abcdefg"), false, 'Test 14');
test(validPalindrome("aba"), true, 'Test 15');
test(validPalindrome("aabbbbaaabbb"), false, 'Test 16');
test(validPalindrome("abcdefghijklnkjihgfedcba"), true, 'Test 17');
test(validPalindrome("abcdefghikjlmnopqrstuvutsrqponmlkjihgfedcba"), false, 'Test 18');
test(validPalindrome("aabbaa"), true, 'Test 19');
test(validPalindrome("noonappa"), false, 'Test 20');
test(validPalindrome("zxcvbnmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), false, 'Test 21');
test(validPalindrome("abcdexyzzyxedcba"), true, 'Test 22');
test(validPalindrome("aaaabbbbccccddddcccccccddddbbbbbbaaaaa"), false, 'Test 23');
test(validPalindrome("aabbcccbbbaa"), true, 'Test 24');
test(validPalindrome("flgfgldad"), false, 'Test 25');
test(validPalindrome("tattarrattat"), true, 'Test 26');
test(validPalindrome("aabbccddeeeedcba"), false, 'Test 27');
test(validPalindrome("aabbacdfgfddcabbaa"), true, 'Test 28');
test(validPalindrome("zzzzzzzzzz"), true, 'Test 29');
test(validPalindrome("aabbccddeeeffgggghhhiiiijjjjkkoollmmnnnnooppqqrrsstttuuuvvvvwwxxyyyzzzzyyyyxwvvvvuuutttsrrrqpnoonmlkkkiiihhhhggggfffeeedddccbbaa"), false, 'Test 30');
test(validPalindrome("aabbccddeeeffgggihhii"), false, 'Test 31');
test(validPalindrome("qwertyuiopoiuytrewq"), true, 'Test 32');
test(validPalindrome("zxcvbnmasdfghjklqwertyuiopasdfghjklzxcvbnm"), false, 'Test 33');
test(validPalindrome("aabbccddeeffgghhiaahhgffeeddccbbaa"), false, 'Test 34');
test(validPalindrome("abcdefghihgfeddcba"), true, 'Test 35');
test(validPalindrome("abcdabc"), false, 'Test 36');
test(validPalindrome("aabbcddcbbbaa"), true, 'Test 37');
test(validPalindrome("aabbbbbaaabbbb"), false, 'Test 38');
test(validPalindrome("aabbaabbaa"), true, 'Test 39');
test(validPalindrome("aabcaaba"), false, 'Test 40');
test(validPalindrome("aabbccddeeffgghhijjihhgffeeddccbbaa"), true, 'Test 41');
test(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucmlmgqfvnbgtapekouga"), false, 'Test 42');
test(validPalindrome("abcdcba"), true, 'Test 43');
test(validPalindrome("abcdexyzxedcba"), true, 'Test 44');
test(validPalindrome("aabbccddee"), false, 'Test 45');
test(validPalindrome("abbaabbaabbaabba"), true, 'Test 46');
test(validPalindrome("racecarwitharacecarinitt"), false, 'Test 47');
test(validPalindrome("racecarxracecar"), true, 'Test 48');
test(validPalindrome("aabbacdfgdcabbaa"), true, 'Test 49');
test(validPalindrome("abbaaaabba"), true, 'Test 50');
test(validPalindrome("aabbccddeedccbbaa"), true, 'Test 51');
test(validPalindrome("aabbccddeeeffgggghhhhiiiijjjjkkkkllmmnnnnooppqqrrsstttuuuvvvvvwwxxyyyzzzzzzzyyyyxwvvvvuuutttsrrrqpnoonmlkkkiiihhhhggggfffeeedddccbbaa"), false, 'Test 52');
test(validPalindrome("abcaabcba"), true, 'Test 53');
test(validPalindrome("raceacar"), true, 'Test 54');
test(validPalindrome("noon"), true, 'Test 55');
test(validPalindrome("abcdeffedcba"), true, 'Test 56');
test(validPalindrome("level"), true, 'Test 57');
test(validPalindrome("aabbbbbbbaaabbbbbb"), false, 'Test 58');
test(validPalindrome("aaaaabbaaaaa"), true, 'Test 59');
test(validPalindrome("abcdefghhgfedcba"), true, 'Test 60');
test(validPalindrome("aabbccddeeeffggghhiiii"), false, 'Test 61');
test(validPalindrome("ababababababa"), true, 'Test 62');
test(validPalindrome("zxcvbnmasdfghjklqwertyuiopplkjhgfdsazxcvbnm"), false, 'Test 63');
test(validPalindrome("abcdefghijkjihgfedcba"), true, 'Test 64');
test(validPalindrome("aabbccddeedcba"), false, 'Test 65');
test(validPalindrome("aabbccddeeefffggg"), false, 'Test 66');
test(validPalindrome("levelwithoneleveldropped"), false, 'Test 67');
test(validPalindrome("noonwithanothernoon"), false, 'Test 68');
test(validPalindrome("abzcdedcba"), true, 'Test 69');
test(validPalindrome("acbbbca"), true, 'Test 70');
test(validPalindrome("lcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuc"), true, 'Test 71');
test(validPalindrome("abcbad"), true, 'Test 72');
test(validPalindrome("abcdefghijkmlkjihgfedcba"), true, 'Test 73');
test(validPalindrome("abcdexyzzyxdecba"), false, 'Test 74');
test(validPalindrome("abccba"), true, 'Test 75');
test(validPalindrome("abcdxzyxcba"), false, 'Test 76');
test(validPalindrome("madamimadam"), true, 'Test 77');
test(validPalindrome("aabbabba"), true, 'Test 78');
test(validPalindrome("abcdefghihgfedcbai"), true, 'Test 79');
test(validPalindrome("amanaplanacanalpanama"), true, 'Test 80');
test(validPalindrome("aabbccddeedccbaa"), false, 'Test 81');
test(validPalindrome("aebcbda"), false, 'Test 82');
test(validPalindrome("deified"), true, 'Test 83');
test(validPalindrome("repaper"), true, 'Test 84');
test(validPalindrome("eedede"), true, 'Test 85');
test(validPalindrome("abcdeffgedcba"), true, 'Test 86');
test(validPalindrome("acbbcdcba"), false, 'Test 87');
test(validPalindrome("aabbaaabbaa"), true, 'Test 88');
test(validPalindrome("abcdefghijkllkjihgfedcba"), true, 'Test 89');
test(validPalindrome("abacdfgdcaba"), true, 'Test 90');
test(validPalindrome("abcdefghijklmnopqrrponmlkjihgfedcba"), true, 'Test 91');
test(validPalindrome("abacdfgdfcba"), false, 'Test 92');
test(validPalindrome("aabbccdddccbaa"), true, 'Test 93');
test(validPalindrome("abcddcba"), true, 'Test 94');
test(validPalindrome("aaaaabaaa"), true, 'Test 95');
test(validPalindrome("rotor"), true, 'Test 96');
test(validPalindrome("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyz"), false, 'Test 97');
test(validPalindrome("abcdefghihgfedcba"), true, 'Test 98');
test(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucmlgqfvnbgtapekouga"), false, 'Test 99');
test(validPalindrome("detartratedwithanotherdetartrated"), false, 'Test 100');
test(validPalindrome("aabbccddeeffggahhigghhffeeddccbbaa"), false, 'Test 101');
test(validPalindrome("zzazz"), true, 'Test 102');
test(validPalindrome("rotorwithatinyrotor"), false, 'Test 103');
test(validPalindrome("mississippi"), false, 'Test 104');
test(validPalindrome("e race car e"), true, 'Test 105');
test(validPalindrome("abcdefghihgfedcbaj"), true, 'Test 106');
test(validPalindrome("ebcbbececabbacecbbcbe"), true, 'Test 107');
test(validPalindrome("acbbba"), true, 'Test 108');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

