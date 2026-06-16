// Test: 3327. Check If Dfs Strings Are Palindromes
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { findAnswer } = require("./solution");

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

console.log("\n3327. Check If Dfs Strings Are Palindromes\n");

test(findAnswer([-1,0,1,2,3,4], "abcdefg"), Error: list index out of range, 'Test 1');
test(findAnswer([-1,0,1,2,2], "abcba"), [false, false, false, true, true], 'Test 2');
test(findAnswer([-1,0,0,1,2], "aaaab"), [true, true, false, true, true], 'Test 3');
test(findAnswer([-1,0,0,1,1,2,2], "aabbcc"), [false, false, false, true, true, true], 'Test 4');
test(findAnswer([-1,0,0,1,2,2], "ababa"), [false, true, true, true, true], 'Test 5');
test(findAnswer([-1,0,0,0,0,0,0], "aaaaaaa"), [true, true, true, true, true, true, true], 'Test 6');
test(findAnswer([-1,0,0,0,1,1], "abcabc"), [false, true, true, true, true, true], 'Test 7');
test(findAnswer([-1,0,1,0,2], "abaca"), [false, false, true, true, true], 'Test 8');
test(findAnswer([-1,0,0,0,1,2,3,4], "abcdefghhgfedcba"), Error: list index out of range, 'Test 9');
test(findAnswer([-1,0,0,1,1,2], "aababa"), [true, true, false, true, true, true], 'Test 10');
test(findAnswer([-1,0,1,2,2], "abcde"), [false, false, false, true, true], 'Test 11');
test(findAnswer([-1,0,0,0,0], "aabcb"), [true, true, true, true, true], 'Test 12');
test(findAnswer([-1,0,1], "aa"), [true, true], 'Test 13');
test(findAnswer([-1,0,0,1,2,2], "abcbaaa"), Error: list index out of range, 'Test 14');
test(findAnswer([-1,0,1,2], "abcd"), [false, false, false, true], 'Test 15');
test(findAnswer([-1,0,1,2,3], "abcde"), [false, false, false, false, true], 'Test 16');
test(findAnswer([-1,0,1,2,3,4], "aaaaa"), [true, true, true, true, true], 'Test 17');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15], "aaaaaaaaaaaaaaaaaabbbbbbbbbbbaaaaaaaaaaaaaaaaa"), Error: list index out of range, 'Test 18');
test(findAnswer([-1,0,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12], "abcdexyzzyxdcba"), [false, false, false, false, false, false, false, false, true, true, true, true, true, true, true], 'Test 19');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5], "aabbccccbbdd"), [false, false, false, false, false, false, true, true, true, true, true, true], 'Test 20');
test(findAnswer([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], "zyxwvutsrqponmlkjihgfedcba"), Error: list index out of range, 'Test 21');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6], "aabbccddeeffgghhii"), Error: list index out of range, 'Test 22');
test(findAnswer([-1,0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8], "abcdefghijklmnopqrstuvwxzy"), Error: list index out of range, 'Test 23');
test(findAnswer([-1,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "abcdefghijihgfedcba"), [false, false, false, false, false, false, true, false, false, false, true, true, true, true, true, true, true, true, true], 'Test 24');
test(findAnswer([-1,0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), Error: list index out of range, 'Test 25');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzab"), Error: list index out of range, 'Test 26');
test(findAnswer([-1,0,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), Error: list index out of range, 'Test 27');
test(findAnswer([-1,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12], "abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), Error: list index out of range, 'Test 28');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4], "aabacbacb"), [false, false, true, false, true, true, true, true, true], 'Test 29');
test(findAnswer([-1,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20], "abacabadabacabadabacabadabacabadabacabadabacabadabacaba"), Error: list index out of range, 'Test 30');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), Error: list index out of range, 'Test 31');
test(findAnswer([-1,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), Error: list index out of range, 'Test 32');
test(findAnswer([-1,0,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8], "abcdefghgfedcba"), [false, false, false, false, false, true, false, false, true, true, true, true, true, true, true], 'Test 33');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12], "abcdefghijklmnopqrstuvwxyzab"), Error: list index out of range, 'Test 34');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "aaaaaaaaaaaaaaaaaaaa"), [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], 'Test 35');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13], "abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), Error: list index out of range, 'Test 36');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), Error: list index out of range, 'Test 37');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20], "zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), Error: list index out of range, 'Test 38');
test(findAnswer([-1,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,12,13,13,13,14,14,14], "abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), Error: list index out of range, 'Test 39');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11], "aabbccddeeffgghhii"), [false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true], 'Test 40');
test(findAnswer([-1,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7], "aabbccddeeffgghhiijjkkllmmnnoopqrrstuvvwxyzz"), Error: list index out of range, 'Test 41');
test(findAnswer([-1,0,0,0,1,1,2,2,3,3], "abacabadabacaba"), Error: list index out of range, 'Test 42');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "ababababababababababab"), Error: list index out of range, 'Test 43');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4], "abacabadabacaba"), Error: list index out of range, 'Test 44');
test(findAnswer([-1,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6], "aabbccddeeffgghhii"), [false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true], 'Test 45');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14], "abcdefghijklmnopqponmlkjihgfedcba"), Error: list index out of range, 'Test 46');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16], "abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), Error: list index out of range, 'Test 47');
test(findAnswer([-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], 'Test 48');
test(findAnswer([-1,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3], "aaaaaaaaaa"), [true, true, true, true, true, true, true, true, true, true], 'Test 49');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16], "abacabadabacabadabacabadabacabad"), [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], 'Test 50');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14], "abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), Error: list index out of range, 'Test 51');
test(findAnswer([-1,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4], "abacabadabacabad"), [false, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true], 'Test 52');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5], "aabbccddeeff"), [false, false, false, false, false, false, true, true, true, true, true, true], 'Test 53');
test(findAnswer([-1,0,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], "abcdefghijjihgfedcba"), [false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true], 'Test 54');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,40,40,41,41,42,42,43,43,44,44,45,45,46,46,47,47,48,48,49,49,50,50,51,51,52,52,53,53,54,54,55,55,56,56,57,57,58,58,59,59,60,60,61,61,62,62,63,63,64,64,65,65,66,66,67,67,68,68,69,69,70,70,71,71,72,72,73,73,74,74,75,75,76,76,77,77,78,78,79,79,80,80,81,81,82,82,83,83,84,84,85,85,86,86,87,87,88,88,89,89,90,90], "abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaab"), Error: list index out of range, 'Test 55');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5], "abccbaabccba"), [false, false, false, false, false, true, true, true, true, true, true, true], 'Test 56');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,40,40], "abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacaba"), Error: list index out of range, 'Test 57');
test(findAnswer([-1,0,1,1,2,2,3,3,3,4,4,4,4,5,5,6,6,6,6], "aaaaaaaaaaaaaaaaaaaaaaaa"), Error: list index out of range, 'Test 58');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19], "abacabadabacabadabacabadabacabadabacabadabacabad"), Error: list index out of range, 'Test 59');
test(findAnswer([-1,0,0,0,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29], "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), Error: list index out of range, 'Test 60');
test(findAnswer([-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "abcdefghijklmnop"), Error: list index out of range, 'Test 61');
test(findAnswer([-1,0,1,2,3,4,5,6,7,8], "zzzzzzzzz"), [true, true, true, true, true, true, true, true, true], 'Test 62');
test(findAnswer([-1,0,0,0,1,2,2,2,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10], "abacabadabacabadabacabadabacabadabacabadabacabadabacaba"), Error: list index out of range, 'Test 63');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7], "abcdefghihgfedcba"), [false, false, false, false, false, true, false, false, true, true, true, true, true, true, true, true, true], 'Test 64');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15], "abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), Error: list index out of range, 'Test 65');
test(findAnswer([-1,0,0,1,1,1,2,2,2,3,3,4,4,5,5], "abcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 66');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), Error: list index out of range, 'Test 67');
test(findAnswer([-1,0,1,2,2,3,3,4,4,5,5,6,6], "aabbccddeeffgg"), Error: list index out of range, 'Test 68');
test(findAnswer([-1,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8], "abacabadabacaba"), [false, false, false, false, true, false, true, false, true, true, true, true, true, true, true], 'Test 69');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), Error: list index out of range, 'Test 70');
test(findAnswer([-1,0,0,1,2,2,3,4,5], "abacabadaca"), Error: list index out of range, 'Test 71');
test(findAnswer([-1,0,0,0,0,0,0,0,0,0], "abcdefghij"), [false, true, true, true, true, true, true, true, true, true], 'Test 72');
test(findAnswer([-1,0,0,1,2,2,3,3,4,4,5,5], "abcdefghijab"), [false, false, false, false, false, false, true, true, true, true, true, true], 'Test 73');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,40,40,41,41,42,42,43,43,44,44,45,45,46,46,47,47,48,48,49,49,50,50,51,51,52,52,53,53,54,54,55,55,56,56,57,57,58,58,59,59], "abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabaab"), Error: list index out of range, 'Test 74');
test(findAnswer([-1,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), Error: list index out of range, 'Test 75');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21], "abababababababababababababababababababababababa"), Error: list index out of range, 'Test 76');
test(findAnswer([-1,0,0,1,2,1,3,4], "abcdefg"), [false, false, false, false, true, true, true], 'Test 77');
test(findAnswer([-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzz"), Error: list index out of range, 'Test 78');
test(findAnswer([-1,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29], "zyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), Error: list index out of range, 'Test 79');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,40,40,41,41,42,42,43,43,44,44,45,45,46,46,47,47,48,48,49,49,50,50], "aabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccdd"), Error: list index out of range, 'Test 80');
test(findAnswer([-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), Error: list index out of range, 'Test 81');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15], "abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), Error: list index out of range, 'Test 82');
test(findAnswer([-1,0,0,0,1,1,1,2,2,3,3,4,4,5,5], "abcdefghihgfedcba"), Error: list index out of range, 'Test 83');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15], "abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), Error: list index out of range, 'Test 84');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5], "abcdefghijjihgfedcba"), Error: list index out of range, 'Test 85');
test(findAnswer([-1,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7], "abcdefghijklmnopqrstuvwxwvutsrqponmlkjihgfedcba"), Error: list index out of range, 'Test 86');
test(findAnswer([-1,0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20], "abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba"), Error: list index out of range, 'Test 87');
test(findAnswer([-1,0,0,1,1,2,3,3,4,4,5,5], "aaabbbccc"), [false, false, false, false, false, true, true, true, true], 'Test 88');
test(findAnswer([-1,0,0,1,2,3,4,5,6,7,8,9], "abcdeedcba"), [true, false, false, false, false, false, false, false, true, true], 'Test 89');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), Error: list index out of range, 'Test 90');
test(findAnswer([-1,0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], "abacabadabacabadabacabadabacabadabacabad"), Error: list index out of range, 'Test 91');
test(findAnswer([-1,0,0,0,1,1,1,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,12,13,13,13,14,14,14,15,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20], "ababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab"), Error: list index out of range, 'Test 92');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24], "abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba"), [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], 'Test 93');
test(findAnswer([-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15], "aabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccdd"), Error: list index out of range, 'Test 94');
test(findAnswer([-1,0,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7], "abababababababababababab"), [false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], 'Test 95');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

