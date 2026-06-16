// Test: 3331. Find Subtree Sizes After Changes
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { findSubtreeSizes } = require("./solution");

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

console.log("\n3331. Find Subtree Sizes After Changes\n");

test(findSubtreeSizes([-1,0,1,2,3,4], "aaaaa"), [5, 4, 3, 2, 1], 'Test 1');
test(findSubtreeSizes([-1,0,0,0,0], "abcde"), [5, 1, 1, 1, 1], 'Test 2');
test(findSubtreeSizes([-1,0,4,0,1], "abbba"), [5, 2, 1, 1, 1], 'Test 3');
test(findSubtreeSizes([-1,0,1,2,3,0,2], "abacaba"), [7, 1, 4, 1, 1, 1, 1], 'Test 4');
test(findSubtreeSizes([-1,0,0,1,1,1], "abaabc"), [6, 3, 1, 1, 1, 1], 'Test 5');
test(findSubtreeSizes([-1,0,1,1,2,2,3,3,4,4], "aabbaabbaa"), [10, 9, 1, 3, 3, 1, 1, 1, 1, 1], 'Test 6');
test(findSubtreeSizes([-1,0,1,2,3], "aaaaa"), [5, 4, 3, 2, 1], 'Test 7');
test(findSubtreeSizes([-1,0,1,2,3,4], "abcde"), [5, 4, 3, 2, 1], 'Test 8');
test(findSubtreeSizes([-1,0,0,2,2], "aaaba"), [5, 1, 3, 1, 1], 'Test 9');
test(findSubtreeSizes([-1,0,0,0,0,0], "abcabc"), [6, 1, 1, 1, 1, 1], 'Test 10');
test(findSubtreeSizes([-1,0,0,2,2], "aaaaa"), [5, 1, 3, 1, 1], 'Test 11');
test(findSubtreeSizes([-1,0,0,2,2], "abcde"), [5, 1, 3, 1, 1], 'Test 12');
test(findSubtreeSizes([-1,0,0,0], "aaaa"), [4, 1, 1, 1], 'Test 13');
test(findSubtreeSizes([-1,0,1,2,3,4,5], "aaaaaaa"), [7, 6, 5, 4, 3, 2, 1], 'Test 14');
test(findSubtreeSizes([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,0,0,1,1,2,2,3,3,4,4], "abcabcabcabcabcabcabcabcabcabc"), [30, 19, 9, 7, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 15');
test(findSubtreeSizes([-1,0,0,1,1,1,2,2,2,3,3,3,4,4,4], "abcdefabcdef"), [12, 7, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 16');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8], "aaaaaaaaaaaaaaaa"), [16, 8, 7, 4, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 17');
test(findSubtreeSizes([-1,0,1,2,3,2,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 18');
test(findSubtreeSizes([-1,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 19');
test(findSubtreeSizes([-1,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10], "aababababaabababababaababababaababababaababababaababababa"), Error: list index out of range, 'Test 20');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6], "abacabadabacabad"), Error: list index out of range, 'Test 21');
test(findSubtreeSizes([-1,0,0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15], "ababababababababababababababababababababababab"), Error: list index out of range, 'Test 22');
test(findSubtreeSizes([-1,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "abcdefghijabcdefghij"), [20, 18, 9, 7, 7, 1, 2, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 23');
test(findSubtreeSizes([-1,0,1,0,2,3,3,2,4,5,6,7,8], "aabbccddeee"), [11, 5, 4, 5, 2, 2, 2, 1, 1, 1, 1], 'Test 24');
test(findSubtreeSizes([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 25');
test(findSubtreeSizes([-1,0,0,1,1,1,2,2,2,3,3,3], "aabaaaabbb"), [10, 5, 3, 2, 1, 1, 1, 1, 1, 1], 'Test 26');
test(findSubtreeSizes([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], "aabababababababab"), Error: list index out of range, 'Test 27');
test(findSubtreeSizes([-1,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 28');
test(findSubtreeSizes([-1,0,1,2,2,1,0], "abacaba"), [7, 2, 3, 1, 1, 1, 1], 'Test 29');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "abcdefghijklmnopqrst"), [20, 12, 7, 7, 4, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 30');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16], "abacabadabeabacabadabeabacabadabe"), [33, 7, 15, 2, 5, 4, 7, 1, 3, 2, 2, 2, 2, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 31');
test(findSubtreeSizes([-1,0,1,2,1,4,3,3,2,8], "abacabadab"), [10, 3, 5, 2, 1, 1, 1, 1, 1, 1], 'Test 32');
test(findSubtreeSizes([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 33');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3,4,4,5,5], "aaaaaaaaaaa"), [11, 7, 3, 3, 3, 1, 1, 1, 1, 1, 1], 'Test 34');
test(findSubtreeSizes([-1,0,1,2,3,2,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17], "aababababababababababababababababa"), [34, 33, 16, 11, 8, 5, 4, 4, 4, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 35');
test(findSubtreeSizes([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], "abcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 36');
test(findSubtreeSizes([-1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 37');
test(findSubtreeSizes([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], "abcdefghijabcdefghij"), [20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 38');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "aabbbccddeeffgghhiijj"), [21, 13, 7, 7, 5, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 39');
test(findSubtreeSizes([-1,0,0,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7], "abababababababababababababab"), Error: list index out of range, 'Test 40');
test(findSubtreeSizes([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), Error: list index out of range, 'Test 41');
test(findSubtreeSizes([-1,0,1,2,3,3,2,1,0], "aabacabc"), [8, 7, 2, 3, 1, 1, 1, 1], 'Test 42');
test(findSubtreeSizes([-1,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "abacabadabacabad"), [16, 8, 4, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 43');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8], "abacabadabacabadabacaba"), Error: list index out of range, 'Test 44');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3], "aabbaabbaba"), Error: list index out of range, 'Test 45');
test(findSubtreeSizes([-1,0,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 46');
test(findSubtreeSizes([-1,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "abcdefghiabcdefghi"), [18, 7, 7, 2, 2, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 47');
test(findSubtreeSizes([-1,0,1,1,2,2,3,3,4,4,5,5,6,6], "abacabadabacab"), [14, 7, 4, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1], 'Test 48');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19], "abacabadabacabadabacabadabacabad"), [32, 9, 15, 4, 4, 4, 7, 3, 2, 2, 2, 2, 2, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 49');
test(findSubtreeSizes([-1,0,0,0,0,0,0,0,0], "abcdefghi"), [9, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 50');
test(findSubtreeSizes([-1,0,0,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12], "abcabcabcabcabcabcabcabcabcabc"), Error: list index out of range, 'Test 51');
test(findSubtreeSizes([-1,0,0,1,2,1,2,3,3,4,4,5,5,6,6], "abcdefghijabcdefghij"), Error: list index out of range, 'Test 52');
test(findSubtreeSizes([-1,0,0,1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,0,0,1,1,2,2,3,3,4,4], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 53');
test(findSubtreeSizes([-1,0,0,2,2,4,5,5,4,6,9], "aabbabbaac"), [10, 1, 5, 1, 3, 3, 2, 1, 1, 1], 'Test 54');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3,4,4], "abcdefghij"), [10, 6, 3, 3, 2, 1, 1, 1, 1, 1], 'Test 55');
test(findSubtreeSizes([-1,0,1,2,3,4,5,6,7,8], "abcdefghi"), [9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 56');
test(findSubtreeSizes([-1,0,1,2,1,2,3,3,4,5], "abacabacab"), [10, 3, 4, 2, 2, 2, 1, 1, 1, 1], 'Test 57');
test(findSubtreeSizes([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13], "abcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 58');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "aabacaddaebacadd"), [16, 8, 3, 4, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 59');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3,4], "aabbaacab"), [9, 5, 2, 2, 1, 1, 1, 1, 1], 'Test 60');
test(findSubtreeSizes([-1,0,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5], "abcdefghijklmnop"), [16, 4, 4, 4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 61');
test(findSubtreeSizes([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49], "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), [40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 62');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 63');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), [52, 31, 19, 15, 15, 11, 6, 7, 7, 7, 7, 7, 3, 2, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 64');
test(findSubtreeSizes([-1,0,1,2,3,4,5,6,7,8], "abcdefghij"), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 65');
test(findSubtreeSizes([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49], "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), Error: list index out of range, 'Test 66');
test(findSubtreeSizes([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28], "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), Error: list index out of range, 'Test 67');
test(findSubtreeSizes([-1,0,1,2,3,4,5], "abcdefg"), [7, 6, 5, 4, 3, 2, 1], 'Test 68');
test(findSubtreeSizes([-1,0,0,1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 69');
test(findSubtreeSizes([-1,0,0,1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,9], "abcabcabcabcabcabc"), [18, 1, 10, 4, 4, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 70');
test(findSubtreeSizes([-1,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20], "aabacabaabacabaabacabaabacabaabacaba"), [36, 35, 9, 15, 3, 5, 3, 7, 4, 1, 2, 1, 3, 2, 3, 3, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 71');
test(findSubtreeSizes([-1,0,0,0,1,1,2,2,3,3,4,4,5,5], "abcabcabcabc"), [12, 5, 2, 3, 3, 1, 1, 1, 1, 1, 1, 1], 'Test 72');
test(findSubtreeSizes([-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "aaaaaaaaaaaaaaaab"), Error: list index out of range, 'Test 73');
test(findSubtreeSizes([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], "aaaaaabbbbbcccccc"), Error: list index out of range, 'Test 74');
test(findSubtreeSizes([-1,0,0,1,2,2,3,4,4,5], "abacbabca"), [9, 3, 5, 1, 2, 1, 1, 1, 1], 'Test 75');
test(findSubtreeSizes([-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], "abcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvwxy"), Error: list index out of range, 'Test 76');
test(findSubtreeSizes([-1,0,0,2,2,4,5,5,4,6,7,11,11,11,6,14], "xyzxyzxyxzyzyxzyx"), Error: list index out of range, 'Test 77');
test(findSubtreeSizes([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28], "abacabadabacabadabacabadabacabad"), Error: list index out of range, 'Test 78');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "abcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 79');
test(findSubtreeSizes([-1,0,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11], "aaaaaaaaaaaaaaaaaaaaaaaaa"), Error: list index out of range, 'Test 80');
test(findSubtreeSizes([-1,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "aaabbbcccddd"), [12, 5, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1], 'Test 81');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14], "abcdefghijklmnopqrstuvwxzywxzywxzywxzywxzywxzy"), Error: list index out of range, 'Test 82');
test(findSubtreeSizes([-1,0,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9], "abababababababababababab"), [24, 7, 4, 3, 4, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 83');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3,4,5,5], "aabbaabbaaba"), [12, 6, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1], 'Test 84');
test(findSubtreeSizes([-1,0,0,0,0,1,1,1,2,2,3,3,4,4,5,5], "abcdefghijklmnop"), [16, 6, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 85');
test(findSubtreeSizes([-1,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,12,13,13,13,14,14,14,15,15,15,16,16,16], "abababababababababababababababababababababababababababababababababababab"), Error: list index out of range, 'Test 86');
test(findSubtreeSizes([-1,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10], "abcdefghijabcdefghijabcdefghij"), [30, 15, 12, 5, 4, 4, 3, 3, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 87');
test(findSubtreeSizes([-1,0,1,2,2,3,3,4,4,5,5,6,6], "abacabadabacaba"), Error: list index out of range, 'Test 88');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3,4,4], "aabbbcccc"), [9, 5, 3, 3, 1, 1, 1, 1, 1], 'Test 89');
test(findSubtreeSizes([-1,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9], "aabbaabbaabbaabbaabbaabbaabbaabb"), Error: list index out of range, 'Test 90');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "ababababababababab"), [18, 6, 7, 4, 2, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 91');
test(findSubtreeSizes([-1,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7], "aaaaabbbbccccdddddeeeeeffffffggggghhhh"), Error: list index out of range, 'Test 92');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3,4,4], "abacabacaba"), [11, 4, 3, 2, 2, 1, 1, 1, 1, 1, 1], 'Test 93');
test(findSubtreeSizes([-1,0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9], "aaaaabbbbbcccccdddddeeeee"), [25, 6, 6, 6, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 94');
test(findSubtreeSizes([-1,0,0,0,1,1,1,2,2,3,3,4,4], "abcdefgabcdefg"), Error: list index out of range, 'Test 95');
test(findSubtreeSizes([-1,0,0,1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12], "aaaabbbbccccddddeeeeffffggghhhiiijjjkkklllmmmnnooopppqqqrrrssstttuuuvvvwwwxxxxyyyzzz"), Error: list index out of range, 'Test 96');
test(findSubtreeSizes([-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "abcdefghijklllll"), [16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 97');
test(findSubtreeSizes([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14], "aabbaabbaabbaabbaabbaabbaabbaabbaabb"), Error: list index out of range, 'Test 98');
test(findSubtreeSizes([-1,0,0,0,1,1,1,2,2,3,3,3,4,4,4], "ababababababab"), [14, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 99');
test(findSubtreeSizes([-1,0,0,0,1,2,1,2,3,4,4,5,6,7,7,8,8], "aaaabbbbbbccccdddd"), Error: list index out of range, 'Test 100');
test(findSubtreeSizes([-1,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4], "aabbaabbccddeeff"), [16, 5, 5, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 101');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

