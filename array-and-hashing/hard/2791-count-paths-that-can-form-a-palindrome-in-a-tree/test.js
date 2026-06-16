// Test: 2791. Count Paths That Can Form A Palindrome In A Tree
// 66 test cases from LeetCodeDataset
// Run: node test.js

const { countPalindromePaths } = require("./solution");

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

console.log("\n2791. Count Paths That Can Form A Palindrome In A Tree\n");

test(countPalindromePaths([-1,0,0,1,1,2,2,3,3], "abacabadaba"), 15, 'Test 1');
test(countPalindromePaths([-1,0,1,2,3,2], "abcba"), Error: string index out of range, 'Test 2');
test(countPalindromePaths([-1,0,0,1,1,2], "acaabc"), 8, 'Test 3');
test(countPalindromePaths([-1,0,0,0,1,2,3,4], "aabbccdd"), 10, 'Test 4');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4], "abcdefghij"), Error: string index out of range, 'Test 5');
test(countPalindromePaths([-1,0,0,0,1,2,3], "abcabc"), Error: string index out of range, 'Test 6');
test(countPalindromePaths([-1,0,0,1,1], "abac"), Error: string index out of range, 'Test 7');
test(countPalindromePaths([-1,0,0,0,0], "aaaaa"), 10, 'Test 8');
test(countPalindromePaths([-1,0,0,1,2], "aabb"), Error: string index out of range, 'Test 9');
test(countPalindromePaths([-1,0,1,2,3,4,5], "abcdefg"), 6, 'Test 10');
test(countPalindromePaths([-1,0,1,2,3], "abcde"), 4, 'Test 11');
test(countPalindromePaths([-1,0,0,1,2,2,3,4], "aabbccdd"), 10, 'Test 12');
test(countPalindromePaths([-1,0,0,0,1,2,3,3,4,4,5,5,6,6,7,7,8,8], "abacabadabacabada"), Error: string index out of range, 'Test 13');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "abcdefghijklmnopqrstuvwxyz"), 20, 'Test 14');
test(countPalindromePaths([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,0,20,21,22,23,24,25,26,27,28,29,0,31,32,33,34,35,36,37,38,39,40], "aaabbbcccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmttttnnnnooooppppqqqqrrrrssssvvvvwwwwxxxyyyyzzzz"), 296, 'Test 15');
test(countPalindromePaths([-1,0,1,0,2,3,1,3,1,4,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 496, 'Test 16');
test(countPalindromePaths([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], "abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacab"), 258, 'Test 17');
test(countPalindromePaths([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100], "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab"), 3851, 'Test 18');
test(countPalindromePaths([-1,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14], "abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacab"), 684, 'Test 19');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "abcdefghijabcdefghijabcdefghij"), 29, 'Test 20');
test(countPalindromePaths([-1,0,0,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 65, 'Test 21');
test(countPalindromePaths([-1,0,0,1,1,2,3,3,4,4,5,5], "abacabadabacaba"), 31, 'Test 22');
test(countPalindromePaths([-1,0,0,1,1,1,1,2,2,2,3,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14], "abacabadabacabadabacaba"), Error: string index out of range, 'Test 23');
test(countPalindromePaths([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], "abacabadabacabadabacabadabac"), 62, 'Test 24');
test(countPalindromePaths([-1,0,0,1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], "abcdefghijklmnopqrstuvwxyzabcdefghij"), 20, 'Test 25');
test(countPalindromePaths([-1,0,1,2,3,4,5,6,7,8], "abcdefghij"), 9, 'Test 26');
test(countPalindromePaths([-1,0,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,12,13,13,13,14,14,14], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 58, 'Test 27');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "aaaaaaaaaabbbbbbbbbbcccccccccc"), 145, 'Test 28');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 52, 'Test 29');
test(countPalindromePaths([-1,0,0,1,1,1,2,2,3,3,4,4,5,5,6,6], "abacabadabacaba"), Error: string index out of range, 'Test 30');
test(countPalindromePaths([-1,0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 28, 'Test 31');
test(countPalindromePaths([-1,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9], "abacabadabacabadabacaba"), Error: string index out of range, 'Test 32');
test(countPalindromePaths([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,0,20,21,22,23,24,25,26,27,28,29], "zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), 30, 'Test 33');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,40,40,41,41,42,42,43,43,44,44,45,45,46,46,47,47,48,48,49,49,50,50,51,51,52,52,53,53,54,54,55,55,56,56,57,57,58,58,59,59,60,60,61,61,62,62,63,63,64,64,65,65,66,66,67,67,68,68,69,69,70,70,71,71,72,72,73,73,74,74,75,75,76,76,77,77,78,78,79,79,80,80,81,81,82,82,83,83,84,84,85,85,86,86,87,87,88,88,89,89,90,90,91,91,92,92,93,93,94,94,95,95,96,96,97,97,98,98,99,99,100], "abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 266, 'Test 34');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 23, 'Test 35');
test(countPalindromePaths([-1,0,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 36, 'Test 36');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 43, 'Test 37');
test(countPalindromePaths([-1,0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14], "abcdefghijklmnopqrstuvwxyz"), Error: string index out of range, 'Test 38');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21], "abacabadabacabadabacabadabacabadabacabadabacabadabacabad"), 393, 'Test 39');
test(countPalindromePaths([-1,0,0,0,0,0,1,1,2,2,3,3,4,4,5,5], "abcdefghijklmnopqrstuvwxyz"), 15, 'Test 40');
test(countPalindromePaths([-1,0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23], "abacabadabacabadabacabadabacabadabacaba"), Error: string index out of range, 'Test 41');
test(countPalindromePaths([-1,0,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,12,13,13,13,14,14,14,15,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,21,21,21,22,22,22,23,23,23,24,24,24,25,25,25,26,26,26,27,27,27,28,28,28,29,29,29,30,30,30], "abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 2202, 'Test 42');
test(countPalindromePaths([-1,0,0,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "abcdefghabcdefgh"), Error: string index out of range, 'Test 43');
test(countPalindromePaths([-1,0,0,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 40, 'Test 44');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 65, 'Test 45');
test(countPalindromePaths([-1,0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "aabbaabbccdd"), Error: string index out of range, 'Test 46');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35], "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 2628, 'Test 47');
test(countPalindromePaths([-1,0,1,1,2,3,3,3,4,4,5,6,6,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22], "abacabadabacabadabacabadabacabadabacabad"), Error: string index out of range, 'Test 48');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 30, 'Test 49');
test(countPalindromePaths([-1,0,0,1,2,2,3,3,4,4], "aabbaabbcc"), 29, 'Test 50');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 47, 'Test 51');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19], "zyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyz"), 41, 'Test 52');
test(countPalindromePaths([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 1001, 'Test 53');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,40,40,41,41,42,42,43,43,44,44,45,45,46,46,47,47,48,48,49,49,50,50], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 126, 'Test 54');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24], "abcdefghigklmnopqrstuvwxyzabcdefghigklmnopqrstuvwxyzabcdefghigklmnopqrstuvwxyzabcdefghigklmnopqrstuvwxyz"), 55, 'Test 55');
test(countPalindromePaths([-1,0,0,0,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "abacabadabacabadabacab"), 88, 'Test 56');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 20, 'Test 57');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19], "abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), 319, 'Test 58');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "abacabadabacabadaba"), Error: string index out of range, 'Test 59');
test(countPalindromePaths([-1,0,0,1,1,2,3,4,5,6,7,8,9], "abcdefghijk"), Error: string index out of range, 'Test 60');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20], "abacabadabacabadabacabadabacabadabacabadabacabadaba"), 358, 'Test 61');
test(countPalindromePaths([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "zyxwvutsrqponmlkjihgfedcbazyxwvu"), 20, 'Test 62');
test(countPalindromePaths([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,0,20,21,22,23,24,25,26,27,28,29,0,31,32,33,34,35,36,37,38,39,40,0,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 99, 'Test 63');
test(countPalindromePaths([-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz"), 46, 'Test 64');
test(countPalindromePaths([-1,0,0,1,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20], "zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), 44, 'Test 65');
test(countPalindromePaths([-1,0,0,0,1,2,3,3,4,4], "ababababa"), Error: string index out of range, 'Test 66');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

