// Test: 2983. Palindrome Rearrangement Queries
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { canMakePalindromeQueries } = require("./solution");

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

console.log("\n2983. Palindrome Rearrangement Queries\n");

test(canMakePalindromeQueries("abbcdecbba", [[0,2,7,9]]), [false], 'Test 1');
test(canMakePalindromeQueries("abcabc", [[1,1,3,5],[0,2,5,5]]), [true, true], 'Test 2');
test(canMakePalindromeQueries("abcdefgfedcba", [[1,2,11,12],[3,4,8,9]]), [true, true], 'Test 3');
test(canMakePalindromeQueries("acbcab", [[1,2,4,5]]), [true], 'Test 4');
test(canMakePalindromeQueries("aabbaa", [[0,2,3,5]]), [true], 'Test 5');
test(canMakePalindromeQueries("abcdefgihgfedcba", [[0,3,8,11],[1,2,6,7]]), Error: list index out of range, 'Test 6');
test(canMakePalindromeQueries("abcdedcba", [[0,1,7,8],[2,3,5,6]]), [true, true], 'Test 7');
test(canMakePalindromeQueries("aabbccdd", [[0,1,6,7],[2,3,4,5]]), [false, false], 'Test 8');
test(canMakePalindromeQueries("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,19,38,57],[1,18,39,56],[2,17,40,55]]), [false, false, false], 'Test 9');
test(canMakePalindromeQueries("abcdefghijkllkjihgfedcba", [[0,4,11,15],[5,9,6,10]]), Error: list index out of range, 'Test 10');
test(canMakePalindromeQueries("levellevel", [[0,2,5,7],[1,3,4,6]]), Error: list index out of range, 'Test 11');
test(canMakePalindromeQueries("aaabbbcccdddeeefffggghhhiiiijjjkkklllmmmnnnoooppqqrrrsssttuuvvwwxxyyzz", [[0,30,31,60],[10,20,40,50]]), Error: list index out of range, 'Test 12');
test(canMakePalindromeQueries("qwertyuiopoiuytrewq", [[0,4,10,14],[5,7,8,12],[1,3,11,13]]), Error: list index out of range, 'Test 13');
test(canMakePalindromeQueries("abcdexyzwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba", [[0,1,38,39],[2,3,36,37],[4,5,34,35]]), [false, false, false], 'Test 14');
test(canMakePalindromeQueries("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,9,32,41],[1,5,28,37],[2,7,25,34]]), [false, false, false], 'Test 15');
test(canMakePalindromeQueries("racecaracercar", [[0,2,10,12],[3,5,8,10],[1,4,7,9]]), [false, false, false], 'Test 16');
test(canMakePalindromeQueries("abacaxbaxaba", [[0,1,9,10],[2,3,7,8],[4,5,5,6]]), [false, false, false], 'Test 17');
test(canMakePalindromeQueries("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba", [[0,12,12,24],[4,8,16,20],[6,10,10,14]]), Error: list index out of range, 'Test 18');
test(canMakePalindromeQueries("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba", [[0,12,13,25],[1,10,15,24]]), Error: list index out of range, 'Test 19');
test(canMakePalindromeQueries("abacabadabacaba", [[0,4,11,15],[1,3,12,14],[2,2,13,13]]), [true, true, true], 'Test 20');
test(canMakePalindromeQueries("aabbccddeeffgg", [[0,5,7,12],[2,3,10,11]]), [false, false], 'Test 21');
test(canMakePalindromeQueries("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,15,16,29],[1,14,17,28],[2,13,18,27]]), Error: list index out of range, 'Test 22');
test(canMakePalindromeQueries("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", [[0,14,15,29],[1,13,16,28]]), Error: list index out of range, 'Test 23');
test(canMakePalindromeQueries("racecaracecar", [[0,2,8,10],[1,4,6,9]]), Error: list index out of range, 'Test 24');
test(canMakePalindromeQueries("zxcvbnmasdfghjklqwertyuiopoiuytrewqlkjhgfdasbvncxz", [[0,14,15,29],[1,13,16,28],[2,12,17,27]]), Error: list index out of range, 'Test 25');
test(canMakePalindromeQueries("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,5,20,25],[6,10,15,19]]), Error: list index out of range, 'Test 26');
test(canMakePalindromeQueries("mississippiissippi", [[0,4,10,14],[1,3,11,13]]), [false, false], 'Test 27');
test(canMakePalindromeQueries("abcdefghijklmnopqrstuvwxyz", [[0,24,24,48],[1,23,25,47],[2,22,26,46]]), Error: list index out of range, 'Test 28');
test(canMakePalindromeQueries("abcdefghijhgfedcba", [[0,4,14,18],[1,3,15,17],[2,2,16,16]]), [false, false, false], 'Test 29');
test(canMakePalindromeQueries("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,11,34,45],[12,22,23,33]]), [false, false], 'Test 30');
test(canMakePalindromeQueries("mississippiissippi", [[0,4,10,14],[2,6,8,12]]), [false, false], 'Test 31');
test(canMakePalindromeQueries("abacabadabacaba", [[0,6,11,17],[1,5,12,16],[2,4,13,15]]), [true, true, true], 'Test 32');
test(canMakePalindromeQueries("xyzyxzyzyxzyzyxzyz", [[0,3,9,12],[4,7,13,16],[1,2,17,18]]), [false, false, false], 'Test 33');
test(canMakePalindromeQueries("levellevel", [[1,2,5,6],[0,3,3,6],[2,4,4,5]]), Error: list index out of range, 'Test 34');
test(canMakePalindromeQueries("aaaabbbbccccdddd", [[0,3,12,15],[1,2,13,14],[2,3,14,15]]), [false, false, false], 'Test 35');
test(canMakePalindromeQueries("levellevellevellevel", [[0,4,8,12],[1,3,9,11]]), Error: list index out of range, 'Test 36');
test(canMakePalindromeQueries("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba", [[0,12,12,24],[5,9,15,19]]), Error: list index out of range, 'Test 37');
test(canMakePalindromeQueries("racecarannakayak", [[0,6,8,13],[1,5,9,12]]), [false, false], 'Test 38');
test(canMakePalindromeQueries("noonnoon", [[0,2,5,7],[1,3,4,6]]), [true, true], 'Test 39');
test(canMakePalindromeQueries("abcdeedcba", [[0,4,5,9],[1,3,6,8],[2,2,7,7]]), [true, true, true], 'Test 40');
test(canMakePalindromeQueries("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyz", [[0,3,15,18],[1,4,14,17],[2,5,13,16],[3,6,12,15],[4,7,11,14]]), [false, false, false, false, false], 'Test 41');
test(canMakePalindromeQueries("mississippiissippi", [[0,2,9,11],[1,3,8,10],[2,4,7,9]]), [false, false, false], 'Test 42');
test(canMakePalindromeQueries("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", [[0,5,26,31],[6,10,22,26],[11,15,17,21],[16,20,12,16]]), Error: list index out of range, 'Test 43');
test(canMakePalindromeQueries("rotorrotorrotorrotor", [[0,4,12,16],[2,5,10,14],[3,6,11,15]]), [true, true, true], 'Test 44');
test(canMakePalindromeQueries("abacabadabacabad", [[0,7,8,15],[1,6,9,14],[2,5,10,13],[3,4,11,12]]), [true, false, false, false], 'Test 45');
test(canMakePalindromeQueries("abcdefghijzyxwvutsrqponmlkjihgfedcba", [[0,9,20,29],[1,8,21,28],[2,7,22,27],[3,6,23,26],[4,5,24,25]]), [false, false, false, false, false], 'Test 46');
test(canMakePalindromeQueries("rotorrotor", [[0,2,7,9],[3,5,4,6]]), Error: list index out of range, 'Test 47');
test(canMakePalindromeQueries("rotorrotor", [[0,2,6,8],[1,4,5,7]]), [true, true], 'Test 48');
test(canMakePalindromeQueries("levellevel", [[0,1,6,7],[2,3,4,5],[1,2,5,6]]), Error: list index out of range, 'Test 49');
test(canMakePalindromeQueries("racecar", [[1,3,2,4]]), Error: list index out of range, 'Test 50');
test(canMakePalindromeQueries("thisisanoddlengthstring", [[0,4,14,19]]), [false], 'Test 51');
test(canMakePalindromeQueries("abcdeffedcba", [[0,2,7,9],[1,3,6,8],[2,4,5,7]]), Error: list index out of range, 'Test 52');
test(canMakePalindromeQueries("abcdefghijklmnoponmlkjihgfedcba", [[0,15,15,30],[10,20,10,20]]), Error: list index out of range, 'Test 53');
test(canMakePalindromeQueries("aabbccddeeff", [[0,2,9,11],[1,3,8,10],[2,4,7,9]]), [false, false, false], 'Test 54');
test(canMakePalindromeQueries("abcdefghihgfedcba", [[0,1,12,13],[3,3,8,8],[5,5,6,6]]), Error: list index out of range, 'Test 55');
test(canMakePalindromeQueries("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,20,21,41],[1,19,22,40]]), Error: list index out of range, 'Test 56');
test(canMakePalindromeQueries("mississippiissim", [[0,3,11,14],[2,4,9,12],[1,5,8,11]]), [false, false, false], 'Test 57');
test(canMakePalindromeQueries("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba", [[0,12,13,25],[6,18,7,19]]), Error: list index out of range, 'Test 58');
test(canMakePalindromeQueries("abacabadabacabad", [[0,3,8,11],[1,2,6,7],[4,5,12,13]]), [false, false, false], 'Test 59');
test(canMakePalindromeQueries("abcdefghihgfedcba", [[0,4,7,10],[2,3,6,7],[1,3,5,8]]), Error: list index out of range, 'Test 60');
test(canMakePalindromeQueries("mississippi", [[1,2,7,8],[0,1,10,11],[3,4,6,7]]), [false, false, false], 'Test 61');
test(canMakePalindromeQueries("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,20,21,40],[5,15,26,36]]), Error: list index out of range, 'Test 62');
test(canMakePalindromeQueries("abcdedcbaabcdedcba", [[0,4,9,13],[2,5,8,12],[1,3,7,11]]), Error: list index out of range, 'Test 63');
test(canMakePalindromeQueries("rotorrotor", [[0,2,5,7],[1,3,4,6],[2,4,3,5]]), Error: list index out of range, 'Test 64');
test(canMakePalindromeQueries("abcdedcbaa", [[0,1,8,9],[2,3,6,7],[1,4,5,8]]), [false, false, false], 'Test 65');
test(canMakePalindromeQueries("zzzzzzzzzz", [[0,4,5,9],[1,3,6,8],[2,2,7,7]]), [true, true, true], 'Test 66');
test(canMakePalindromeQueries("abcabcabcabcabcabcabcabcabcabc", [[0,1,28,29],[1,2,27,28],[2,3,26,27],[3,4,25,26],[4,5,24,25],[5,6,23,24]]), [false, false, false, false, false, false], 'Test 67');
test(canMakePalindromeQueries("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba", [[0,12,12,24],[5,10,14,19]]), Error: list index out of range, 'Test 68');
test(canMakePalindromeQueries("qwertyuiopasdfghjklzxcvbnmlkjhgfdsapoiuytrewq", [[0,9,12,21],[3,6,18,23],[5,8,14,19]]), Error: list index out of range, 'Test 69');
test(canMakePalindromeQueries("abacabadabacabad", [[0,3,8,11],[1,4,9,12],[2,5,10,13]]), [false, false, false], 'Test 70');
test(canMakePalindromeQueries("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba", [[0,9,20,29],[1,8,21,28]]), Error: list index out of range, 'Test 71');
test(canMakePalindromeQueries("amanaplanacanalpanama", [[0,4,23,27],[5,9,17,21],[10,14,13,18]]), Error: list index out of range, 'Test 72');
test(canMakePalindromeQueries("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba", [[0,25,25,0],[10,15,10,15]]), Error: list index out of range, 'Test 73');
test(canMakePalindromeQueries("noonnoon", [[0,2,3,5],[1,3,2,4],[0,1,4,5]]), Error: list index out of range, 'Test 74');
test(canMakePalindromeQueries("aaabbbcccdddeeefffggg", [[0,4,11,15],[1,2,9,10]]), [false, false], 'Test 75');
test(canMakePalindromeQueries("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,24,25,49],[1,23,26,48],[2,22,27,47]]), Error: list index out of range, 'Test 76');
test(canMakePalindromeQueries("racecarannakayak", [[0,2,9,11],[1,3,8,10],[2,4,7,9]]), [false, false, false], 'Test 77');
test(canMakePalindromeQueries("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,5,26,31],[6,10,22,26],[11,15,17,21]]), [false, false, false], 'Test 78');
test(canMakePalindromeQueries("noonnoon", [[0,1,5,6],[2,3,4,5]]), [true, true], 'Test 79');
test(canMakePalindromeQueries("zyxzyxzyxzyx", [[0,2,9,11],[3,5,6,8]]), [false, false], 'Test 80');
test(canMakePalindromeQueries("ababababababababab", [[0,1,8,9],[2,3,10,11],[4,5,12,13]]), Error: list index out of range, 'Test 81');
test(canMakePalindromeQueries("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", [[0,12,13,25],[1,11,14,24],[2,10,15,23]]), Error: list index out of range, 'Test 82');
test(canMakePalindromeQueries("abcabcabcabcabcabcabcabc", [[0,5,21,26],[6,11,15,20],[12,17,9,14]]), [false, false, false], 'Test 83');
test(canMakePalindromeQueries("noonnoonnoon", [[1,3,9,11],[2,4,8,10],[0,2,6,8]]), [true, true, true], 'Test 84');
test(canMakePalindromeQueries("abacabadabacaba", [[0,3,10,13],[1,4,9,12],[2,5,8,11],[3,6,7,10]]), Error: list index out of range, 'Test 85');
test(canMakePalindromeQueries("abcdefghihgfedcba", [[1,3,6,8],[2,4,5,7]]), Error: list index out of range, 'Test 86');
test(canMakePalindromeQueries("abacaxabacax", [[0,2,8,10],[1,3,6,8]]), [false, false], 'Test 87');
test(canMakePalindromeQueries("abcdefghijkzyxwvutsrqponml", [[0,4,19,23],[2,3,17,18]]), [false, false], 'Test 88');
test(canMakePalindromeQueries("noonnoonnoonnoon", [[0,3,12,15],[1,2,13,14]]), [true, true], 'Test 89');
test(canMakePalindromeQueries("mississippiississippi", [[0,5,10,15],[3,8,7,12]]), Error: list index out of range, 'Test 90');
test(canMakePalindromeQueries("xyzzyxzyxzyx", [[0,1,10,11],[2,3,8,9],[4,5,6,7]]), [false, false, false], 'Test 91');
test(canMakePalindromeQueries("aabccbaabccba", [[0,2,7,9],[1,3,6,8],[2,4,5,7]]), Error: list index out of range, 'Test 92');
test(canMakePalindromeQueries("abacabadabacaba", [[0,2,9,11],[1,3,10,12],[2,4,8,10]]), [true, true, true], 'Test 93');
test(canMakePalindromeQueries("abababababab", [[0,1,5,6],[2,3,4,5],[1,2,3,4]]), Error: list index out of range, 'Test 94');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

