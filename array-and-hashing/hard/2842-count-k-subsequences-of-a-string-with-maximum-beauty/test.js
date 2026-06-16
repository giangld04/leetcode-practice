// Test: 2842. Count K Subsequences Of A String With Maximum Beauty
// 46 test cases from LeetCodeDataset
// Run: node test.js

const { countKSubsequencesWithMaxBeauty } = require("./solution");

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

console.log("\n2842. Count K Subsequences Of A String With Maximum Beauty\n");

test(countKSubsequencesWithMaxBeauty("aabbcc", 3), Error: pow expected 2 arguments, got 3, 'Test 1');
test(countKSubsequencesWithMaxBeauty("mississippi", 3), Error: pow expected 2 arguments, got 3, 'Test 2');
test(countKSubsequencesWithMaxBeauty("abbcd", 4), Error: pow expected 2 arguments, got 3, 'Test 3');
test(countKSubsequencesWithMaxBeauty("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 5), Error: pow expected 2 arguments, got 3, 'Test 4');
test(countKSubsequencesWithMaxBeauty("abcde", 3), Error: pow expected 2 arguments, got 3, 'Test 5');
test(countKSubsequencesWithMaxBeauty("zzzzzzzzzzzzzzzzzzzz", 1), Error: pow expected 2 arguments, got 3, 'Test 6');
test(countKSubsequencesWithMaxBeauty("aabbccddeeffgghhiijj", 5), Error: pow expected 2 arguments, got 3, 'Test 7');
test(countKSubsequencesWithMaxBeauty("abcd", 3), Error: pow expected 2 arguments, got 3, 'Test 8');
test(countKSubsequencesWithMaxBeauty("aabbccddeeff", 3), Error: pow expected 2 arguments, got 3, 'Test 9');
test(countKSubsequencesWithMaxBeauty("aaaaaaaabbbbcccc", 3), Error: pow expected 2 arguments, got 3, 'Test 10');
test(countKSubsequencesWithMaxBeauty("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 26), Error: pow expected 2 arguments, got 3, 'Test 11');
test(countKSubsequencesWithMaxBeauty("abcdefg", 7), Error: pow expected 2 arguments, got 3, 'Test 12');
test(countKSubsequencesWithMaxBeauty("aabbcccddd", 2), Error: pow expected 2 arguments, got 3, 'Test 13');
test(countKSubsequencesWithMaxBeauty("abcdefghijklmnopqrstuvwxyz", 26), Error: pow expected 2 arguments, got 3, 'Test 14');
test(countKSubsequencesWithMaxBeauty("leetcode", 2), Error: pow expected 2 arguments, got 3, 'Test 15');
test(countKSubsequencesWithMaxBeauty("bcca", 2), Error: pow expected 2 arguments, got 3, 'Test 16');
test(countKSubsequencesWithMaxBeauty("abcdefghijklmnopqrstuv", 10), Error: pow expected 2 arguments, got 3, 'Test 17');
test(countKSubsequencesWithMaxBeauty("abcdefg", 3), Error: pow expected 2 arguments, got 3, 'Test 18');
test(countKSubsequencesWithMaxBeauty("abcdefghijklmnopqrstuvwxyz", 5), Error: pow expected 2 arguments, got 3, 'Test 19');
test(countKSubsequencesWithMaxBeauty("zzzz", 1), Error: pow expected 2 arguments, got 3, 'Test 20');
test(countKSubsequencesWithMaxBeauty("abcdefghij", 5), Error: pow expected 2 arguments, got 3, 'Test 21');
test(countKSubsequencesWithMaxBeauty("a", 1), Error: pow expected 2 arguments, got 3, 'Test 22');
test(countKSubsequencesWithMaxBeauty("abcd", 4), Error: pow expected 2 arguments, got 3, 'Test 23');
test(countKSubsequencesWithMaxBeauty("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 26), 0, 'Test 24');
test(countKSubsequencesWithMaxBeauty("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 10), Error: pow expected 2 arguments, got 3, 'Test 25');
test(countKSubsequencesWithMaxBeauty("aabbcc", 2), Error: pow expected 2 arguments, got 3, 'Test 26');
test(countKSubsequencesWithMaxBeauty("abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg", 7), Error: pow expected 2 arguments, got 3, 'Test 27');
test(countKSubsequencesWithMaxBeauty("abcdeabcdeabcdeabcdeabcdeabcde", 5), Error: pow expected 2 arguments, got 3, 'Test 28');
test(countKSubsequencesWithMaxBeauty("nnnnooooooppppppqqqqqqqrrrrrrrrssssssssstttttttttuuuuuuuuuuuuuuuvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv", 5), Error: pow expected 2 arguments, got 3, 'Test 29');
test(countKSubsequencesWithMaxBeauty("mississippi", 4), Error: pow expected 2 arguments, got 3, 'Test 30');
test(countKSubsequencesWithMaxBeauty("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzz", 15), Error: pow expected 2 arguments, got 3, 'Test 31');
test(countKSubsequencesWithMaxBeauty("abcdefghijklmnopqrstuvwxyzaaabbbbccc", 4), Error: pow expected 2 arguments, got 3, 'Test 32');
test(countKSubsequencesWithMaxBeauty("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 13), Error: pow expected 2 arguments, got 3, 'Test 33');
test(countKSubsequencesWithMaxBeauty("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 20), Error: pow expected 2 arguments, got 3, 'Test 34');
test(countKSubsequencesWithMaxBeauty("aabbbcccddddeeeeffffgggg", 2), Error: pow expected 2 arguments, got 3, 'Test 35');
test(countKSubsequencesWithMaxBeauty("abcdefghijklmnopqrstuvwxyzaaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 26), Error: pow expected 2 arguments, got 3, 'Test 36');
test(countKSubsequencesWithMaxBeauty("abcdefghijklmnopqrstuuvwxyzaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 10), Error: pow expected 2 arguments, got 3, 'Test 37');
test(countKSubsequencesWithMaxBeauty("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 3), Error: pow expected 2 arguments, got 3, 'Test 38');
test(countKSubsequencesWithMaxBeauty("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz", 20), Error: pow expected 2 arguments, got 3, 'Test 39');
test(countKSubsequencesWithMaxBeauty("abracadabra", 3), Error: pow expected 2 arguments, got 3, 'Test 40');
test(countKSubsequencesWithMaxBeauty("xylophone", 5), Error: pow expected 2 arguments, got 3, 'Test 41');
test(countKSubsequencesWithMaxBeauty("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 25), Error: pow expected 2 arguments, got 3, 'Test 42');
test(countKSubsequencesWithMaxBeauty("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 2), 0, 'Test 43');
test(countKSubsequencesWithMaxBeauty("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 15), Error: pow expected 2 arguments, got 3, 'Test 44');
test(countKSubsequencesWithMaxBeauty("zzzzzzzzzzzzzzzzzzzzzzzzzz", 1), Error: pow expected 2 arguments, got 3, 'Test 45');
test(countKSubsequencesWithMaxBeauty("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1), Error: pow expected 2 arguments, got 3, 'Test 46');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

