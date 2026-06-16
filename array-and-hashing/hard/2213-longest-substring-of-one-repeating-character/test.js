// Test: 2213. Longest Substring Of One Repeating Character
// 89 test cases from LeetCodeDataset
// Run: node test.js

const { longestRepeating } = require("./solution");

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

console.log("\n2213. Longest Substring Of One Repeating Character\n");

test(longestRepeating("abcde", "aaaaa", [0,1,2,3,4]), [1, 2, 3, 4, 5], 'Test 1');
test(longestRepeating("abyzz", "aa", [2,1]), [2, 3], 'Test 2');
test(longestRepeating("abcde", "ee", [2,4]), [1, 1], 'Test 3');
test(longestRepeating("zzzzz", "abcd", [0,1,2,3]), [4, 3, 2, 1], 'Test 4');
test(longestRepeating("babacc", "bcb", [1,3,3]), [3, 3, 4], 'Test 5');
test(longestRepeating("abcde", "ee", [0,4]), [1, 1], 'Test 6');
test(longestRepeating("aaaaa", "bb", [1,3]), [3, 1], 'Test 7');
test(longestRepeating("z", "z", [0]), [1], 'Test 8');
test(longestRepeating("zzzzz", "xy", [0,4]), [4, 3], 'Test 9');
test(longestRepeating("aaaaa", "b", [2]), [2], 'Test 10');
test(longestRepeating("zzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzz", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], 'Test 11');
test(longestRepeating("ababababab", "aaaaaaaaaa", [0,1,2,3,4,5,6,7,8,9]), [1, 3, 3, 5, 5, 7, 7, 9, 9, 10], 'Test 12');
test(longestRepeating("abcdefghij", "jjjjjjjjjj", [0,1,2,3,4,5,6,7,8,9]), [1, 2, 3, 4, 5, 6, 7, 8, 10, 10], 'Test 13');
test(longestRepeating("abcdefg", "hijklmn", [0,1,2,3,4,5,6]), [1, 1, 1, 1, 1, 1, 1], 'Test 14');
test(longestRepeating("abacabadabacaba", "aaaaaaaaaaaaaaa", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), [1, 3, 3, 5, 5, 7, 7, 9, 9, 11, 11, 13, 13, 15, 15], 'Test 15');
test(longestRepeating("zzzaaabbbccc", "aaabbbccc", [2,3,4,5,6,7,8]), [4, 4, 4, 4, 4, 4, 4], 'Test 16');
test(longestRepeating("aabbccddeeffgghhiijjkk", "llll", [2,4,6,8]), [2, 2, 2, 2], 'Test 17');
test(longestRepeating("zzzzzzzzzz", "yyyyyyyyyy", [0,1,2,3,4,5,6,7,8,9]), [9, 8, 7, 6, 5, 6, 7, 8, 9, 10], 'Test 18');
test(longestRepeating("aabbaabb", "cccc", [1,3,5,7]), [2, 2, 2, 1], 'Test 19');
test(longestRepeating("aaabbbcccdddeeefffggghhhiii", "ggghhhiiiiaaabbcccdddeeefffggghhhiii", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), Error: list assignment index out of range, 'Test 20');
test(longestRepeating("pppqqqrrrsssttt", "uuuuuuuuuuuuuuu", [2,5,8,11,14,2,5,8,11,14,2,5,8,11,14]), [3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 'Test 21');
test(longestRepeating("abacabadabacabadabacabadabacabad", "abacabadabacabadabacabadabacabad", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 22');
test(longestRepeating("xyzzxxxyyy", "zzz", [1,3,5]), [3, 3, 3], 'Test 23');
test(longestRepeating("abababababababab", "cccccccc", [0,2,4,6,8,10,12,14]), [1, 1, 1, 1, 1, 1, 1, 1], 'Test 24');
test(longestRepeating("mnopqrstu", "aaaaaaaaa", [0,1,2,3,4,5,6,7,8]), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 25');
test(longestRepeating("abcdefghij", "z", [5]), [1], 'Test 26');
test(longestRepeating("abcabcabcabcabcabcabc", "aaaaaaaaaaaaaaa", [0, 3, 6, 9, 12, 15, 18, 1, 4, 7, 10, 13, 16, 19, 22, 2, 5, 8, 11, 14, 17, 20, 23, 25]), Error: list assignment index out of range, 'Test 27');
test(longestRepeating("aaaaaaaaaabbbbbbbbbbcccccccccc", "dddddddddddddddddddddddddddd", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]), [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], 'Test 28');
test(longestRepeating("aaabbbccc", "dddddd", [0, 3, 6, 1, 4, 7]), [3, 3, 2, 2, 2, 2], 'Test 29');
test(longestRepeating("aabaaa", "bbccc", [1,1,3,3,4]), [3, 3, 2, 2, 2], 'Test 30');
test(longestRepeating("abcabcabc", "aaa", [0,3,6]), [1, 1, 1], 'Test 31');
test(longestRepeating("abcabcabc", "ddddddd", [0, 3, 6, 1, 4, 7, 2]), [1, 1, 1, 2, 2, 2, 5], 'Test 32');
test(longestRepeating("aabbaa", "bb", [0,4]), [2, 3], 'Test 33');
test(longestRepeating("abcdabcdabcdabcd", "zzzz", [1,3,5,7]), [1, 1, 1, 1], 'Test 34');
test(longestRepeating("abcabcabcabc", "dddddddddddd", [0,1,2,3,4,5,6,7,8,9,10,11]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'Test 35');
test(longestRepeating("aaaaabbbbbccccc", "dddddeeee", [1,3,5,7,9]), [5, 5, 5, 5, 5], 'Test 36');
test(longestRepeating("mississippi", "llll", [0, 1, 2, 3]), [2, 2, 3, 4], 'Test 37');
test(longestRepeating("xyxxyxyxyx", "zzzzzzzzzz", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [2, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 38');
test(longestRepeating("mnononononononononononononononono", "mmmmmmmmmmmmmmmmmmmmmmmmmm", [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51]), Error: list assignment index out of range, 'Test 39');
test(longestRepeating("aabbbccccc", "bbb", [2,3,7]), [5, 5, 3], 'Test 40');
test(longestRepeating("abccba", "bbccc", [2, 3, 2, 3, 4]), [2, 4, 2, 2, 3], 'Test 41');
test(longestRepeating("xyxyxyxyxyxy", "zzzzzzzzzzzz", [0,1,2,3,4,5,6,7,8,9,10,11]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'Test 42');
test(longestRepeating("aaaaaaaaaa", "bbbbbbbbbb", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [9, 8, 7, 6, 5, 6, 7, 8, 9, 10], 'Test 43');
test(longestRepeating("abcdefg", "zzzzzzz", [6, 5, 4, 3, 2, 1, 0]), [1, 2, 3, 4, 5, 6, 7], 'Test 44');
test(longestRepeating("abcdefghijklmnopqrstuvwxyz", "zzzzzzzzzzzzzzzzzzzzzzzzzz", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 26], 'Test 45');
test(longestRepeating("mmmmnnnnoooo", "ppppqqqqrrrr", [0,1,2,3,4,5,6,7,8,9,10,11]), [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 'Test 46');
test(longestRepeating("abccba", "cccccc", [1,2,3,4,5,0]), [3, 3, 3, 4, 5, 6], 'Test 47');
test(longestRepeating("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "abcdefghijklmnopqrstuvwxyz", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]), [43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 19], 'Test 48');
test(longestRepeating("abcdefghij", "abcdefghij", [0,1,2,3,4,5,6,7,8,9]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 49');
test(longestRepeating("abcdeabcdeabcdeabcde", "abcdeabcdeabcdeabcde", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 50');
test(longestRepeating("xyzyxzyxzyxzyx", "zzzzzzzz", [1,3,5,7,9,11,13,15]), Error: list assignment index out of range, 'Test 51');
test(longestRepeating("aabbccddeeffgg", "hhhhhhhh", [0, 1, 2, 3, 4, 5, 6, 7]), [2, 2, 3, 4, 5, 6, 7, 8], 'Test 52');
test(longestRepeating("aabbcc", "ffffff", [0, 1, 2, 3, 4, 5]), [2, 2, 3, 4, 5, 6], 'Test 53');
test(longestRepeating("ppppqqqqrrrrssss", "ttttuuuuvvvv", [0,1,2,3,4,5,6,7,8,9,10,11,12,13]), [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 'Test 54');
test(longestRepeating("mmmmmmmmmm", "llllllllll", [0,1,2,3,4,5,6,7,8,9]), [9, 8, 7, 6, 5, 6, 7, 8, 9, 10], 'Test 55');
test(longestRepeating("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 56');
test(longestRepeating("aaaaaaaabbbbbbbbccccccccdddddddd", "ddddddddccccccccbbbbbbbbaaaaaaaa", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]), [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8], 'Test 57');
test(longestRepeating("xyxyxyxyxyx", "yyyyy", [1, 3, 5, 7, 9]), [1, 1, 1, 1, 1], 'Test 58');
test(longestRepeating("abcdefghij", "jjjjj", [8,7,6,5,4]), [2, 3, 4, 5, 6], 'Test 59');
test(longestRepeating("abcdefghij", "aaaaaaaaaa", [0,1,2,3,4,5,6,7,8,9]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 60');
test(longestRepeating("aaaaaaaaaabbbbbbbbbbccccccccccdddddddddd", "eeeeeeeeeeffffffffffffgggggggggg", [0,11,22,33,44,55,66,77,88,99]), Error: list assignment index out of range, 'Test 61');
test(longestRepeating("abcdefghijabcdefghij", "jjjjjjjjjj", [10,11,12,13,14,15,16,17,18,19]), [2, 3, 4, 5, 6, 7, 8, 9, 11, 11], 'Test 62');
test(longestRepeating("abababababab", "cccc", [0,2,4,6]), [1, 1, 1, 1], 'Test 63');
test(longestRepeating("aabbccddeeff", "abcdef", [1,3,5,7,9,11]), [2, 2, 2, 2, 2, 2], 'Test 64');
test(longestRepeating("abacaba", "aaaaa", [1,2,3,4,5]), [3, 3, 5, 5, 7], 'Test 65');
test(longestRepeating("aaaabbbbccccdddd", "ddddccccbbbbaaaaff", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), [4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 4], 'Test 66');
test(longestRepeating("xyzxyzxyzxyz", "zzzz", [0,1,2,3]), [1, 3, 3, 4], 'Test 67');
test(longestRepeating("zzzzzzzzzz", "aaaaaaaaaa", [0,1,2,3,4,5,6,7,8,9]), [9, 8, 7, 6, 5, 6, 7, 8, 9, 10], 'Test 68');
test(longestRepeating("abcdabcdabcd", "aaaabbbb", [0,1,8,9,4,5,10,11]), [1, 2, 2, 2, 2, 2, 2, 2], 'Test 69');
test(longestRepeating("aabbccddeeff", "hhhhhhh", [1,3,5,7,9,11,1]), [2, 2, 2, 2, 2, 1, 1], 'Test 70');
test(longestRepeating("ababababababab", "bbbbbbaaaaaa", [0,2,4,6,8,10,12,14,16,18]), Error: list assignment index out of range, 'Test 71');
test(longestRepeating("aabbccddeeff", "zzzzzz", [1, 3, 5, 7, 9, 11]), [2, 2, 2, 2, 2, 1], 'Test 72');
test(longestRepeating("abcdefghijklmnopqrstuvwxyz", "zzzzzzzzzzzzzzzzzzzzzzzzzz", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 26], 'Test 73');
test(longestRepeating("aabbaa", "cccccc", [0, 1, 2, 3, 4, 5]), [2, 2, 3, 4, 5, 6], 'Test 74');
test(longestRepeating("zzzzzzyyyyy", "xyyxz", [0, 5, 6, 7, 10]), [5, 6, 6, 4, 4], 'Test 75');
test(longestRepeating("aaaaaaaaaaabbbbbbbbbbbcccccccccc", "dddddddddd", [10,11,12,13,14,15,16,17,18,19]), [11, 10, 10, 10, 10, 10, 10, 10, 10, 10], 'Test 76');
test(longestRepeating("aaaaabbbbccccdddddeeeee", "pppppqqqqqrrrrrsssssttttt", [4, 8, 12, 16, 20, 0, 1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15, 17, 18, 19, 21, 22, 23, 24, 25]), Error: list assignment index out of range, 'Test 77');
test(longestRepeating("abacabadabacaba", "zzzzzzzzzzz", [0,1,2,3,4,5,6,7,8,9,10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 'Test 78');
test(longestRepeating("abababab", "bbbbbbbb", [0,1,2,3,4,5,6,7]), [2, 2, 4, 4, 6, 6, 8, 8], 'Test 79');
test(longestRepeating("abacabadabacaba", "ccccccc", [0, 1, 2, 3, 4, 5, 6]), [1, 2, 4, 4, 5, 6, 7], 'Test 80');
test(longestRepeating("aabbccddeeff", "gggggg", [0,1,2,3,4,5]), [2, 2, 3, 4, 5, 6], 'Test 81');
test(longestRepeating("zzzzzzzzzzzz", "aaaaaaaaaa", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [11, 10, 9, 8, 7, 6, 7, 8, 9, 10], 'Test 82');
test(longestRepeating("abccbaabc", "cccc", [2,3,5,6]), [2, 2, 2, 2], 'Test 83');
test(longestRepeating("xyxyxyxyxyx", "aaaaaa", [0,2,4,6,8,10]), [1, 1, 1, 1, 1, 1], 'Test 84');
test(longestRepeating("acacacacacacacacacacacaca", "bbbbbbbbbbbbbbbbbbbbbbb", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 'Test 85');
test(longestRepeating("zzzzyyyxxxxwwwwvvvuuutttsssrrrqqqppponnmlkkjjjiii", "abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 'Test 86');
test(longestRepeating("abcabcabcabcabcabcabcabcabcabc", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", [0,3,6,9,12,15,18,21,24,27,0,3,6,9,12,15,18,21,24,27]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 87');
test(longestRepeating("aabbccddeeeeffff", "ghijklmnop", [2,5,8,10,12,13,14,15,16,17]), Error: list assignment index out of range, 'Test 88');
test(longestRepeating("abcabcabcabc", "dddd", [0,4,8,12]), Error: list assignment index out of range, 'Test 89');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

