// Test: 2911. Minimum Changes To Make K Semi Palindromes
// 119 test cases from LeetCodeDataset
// Run: node test.js

const { minimumChanges } = require("./solution");

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

console.log("\n2911. Minimum Changes To Make K Semi Palindromes\n");

test(minimumChanges("aabbcc", 3), 0, 'Test 1');
test(minimumChanges("abccba", 2), 2, 'Test 2');
test(minimumChanges("aabbccdd", 4), 0, 'Test 3');
test(minimumChanges("abcabcabc", 4), 4, 'Test 4');
test(minimumChanges("aaaaaa", 2), 0, 'Test 5');
test(minimumChanges("abcabcabcabc", 4), 3, 'Test 6');
test(minimumChanges("abccba", 1), 0, 'Test 7');
test(minimumChanges("aabbaa", 3), 0, 'Test 8');
test(minimumChanges("racecar", 1), 0, 'Test 9');
test(minimumChanges("abcac", 2), 1, 'Test 10');
test(minimumChanges("zzzzzz", 2), 0, 'Test 11');
test(minimumChanges("abcdabc", 2), 2, 'Test 12');
test(minimumChanges("abcdefg", 2), 3, 'Test 13');
test(minimumChanges("abcdcba", 3), 2, 'Test 14');
test(minimumChanges("abcdefg", 3), 3, 'Test 15');
test(minimumChanges("abcabcabc", 3), 3, 'Test 16');
test(minimumChanges("aaaa", 2), 0, 'Test 17');
test(minimumChanges("abcdabc", 3), 3, 'Test 18');
test(minimumChanges("abcabc", 3), 3, 'Test 19');
test(minimumChanges("abcdef", 2), 2, 'Test 20');
test(minimumChanges("abccba", 3), 2, 'Test 21');
test(minimumChanges("ababab", 3), 3, 'Test 22');
test(minimumChanges("qwertyuiopqwertyuiopqwertyuiop", 6), 5, 'Test 23');
test(minimumChanges("aabbccddeeaabbccddeeaabbccdd", 6), 2, 'Test 24');
test(minimumChanges("abcdefedcbafedcba", 3), 1, 'Test 25');
test(minimumChanges("abcdabcdabcdabcdabcdabcd", 5), 2, 'Test 26');
test(minimumChanges("abcdabcdabcdabcd", 4), 2, 'Test 27');
test(minimumChanges("xyzxyzxyzxyz", 4), 3, 'Test 28');
test(minimumChanges("xyzxyzxyzxyzxyz", 3), 1, 'Test 29');
test(minimumChanges("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba", 5), 4, 'Test 30');
test(minimumChanges("abcdeabcdeabcde", 4), 5, 'Test 31');
test(minimumChanges("level", 1), 0, 'Test 32');
test(minimumChanges("banana", 2), 1, 'Test 33');
test(minimumChanges("aabbaabbaabbaabb", 4), 0, 'Test 34');
test(minimumChanges("aabbccddeeffgghhiijjkkllmmlloo", 5), 6, 'Test 35');
test(minimumChanges("abccbaabccbaabccba", 4), 2, 'Test 36');
test(minimumChanges("abracadabraabracadabra", 4), 5, 'Test 37');
test(minimumChanges("redder", 2), 2, 'Test 38');
test(minimumChanges("repaper", 2), 3, 'Test 39');
test(minimumChanges("abababaabab", 3), 0, 'Test 40');
test(minimumChanges("abcdefghij", 2), 4, 'Test 41');
test(minimumChanges("abcdefabcdef", 4), 4, 'Test 42');
test(minimumChanges("abcdefghiabcdefghiabcdefghi", 4), 3, 'Test 43');
test(minimumChanges("xyzxyzxyzxyzxyz", 5), 4, 'Test 44');
test(minimumChanges("aabbaaabbbaa", 3), 1, 'Test 45');
test(minimumChanges("aaabbbcccdddaaa", 4), 2, 'Test 46');
test(minimumChanges("abcdefgabcdefg", 4), 5, 'Test 47');
test(minimumChanges("xyxzyxzyxzyxzyxzyx", 4), 1, 'Test 48');
test(minimumChanges("xyxyxyxyxyxyxy", 3), 0, 'Test 49');
test(minimumChanges("aaaaabbbbbcccc", 3), 0, 'Test 50');
test(minimumChanges("ababababababab", 3), 0, 'Test 51');
test(minimumChanges("abcdefghabcdefghabcdefgh", 6), 5, 'Test 52');
test(minimumChanges("mississippi", 2), 2, 'Test 53');
test(minimumChanges("abccbaabccba", 2), 0, 'Test 54');
test(minimumChanges("abcdefabcdefabcdef", 6), 6, 'Test 55');
test(minimumChanges("abcdefggfedcba", 2), 5, 'Test 56');
test(minimumChanges("noonnoonnoon", 3), 0, 'Test 57');
test(minimumChanges("aabbccddeeffgghhiijj", 5), 4, 'Test 58');
test(minimumChanges("aabbccddeeffgghhiijjkkllmmnnoopp", 6), 8, 'Test 59');
test(minimumChanges("aaabaaabaaabaaab", 5), 1, 'Test 60');
test(minimumChanges("aabbccddeeff", 3), 4, 'Test 61');
test(minimumChanges("abcdefgabcdefg", 2), 5, 'Test 62');
test(minimumChanges("racecar", 3), 2, 'Test 63');
test(minimumChanges("abababab", 3), 1, 'Test 64');
test(minimumChanges("ababababababab", 5), 1, 'Test 65');
test(minimumChanges("abcabcabcabcabcabc", 6), 5, 'Test 66');
test(minimumChanges("mnopqrnopqr", 3), 4, 'Test 67');
test(minimumChanges("deified", 1), 0, 'Test 68');
test(minimumChanges("abcdefghijabcdefghijabcdefghij", 5), 4, 'Test 69');
test(minimumChanges("abcabcabcabcabcabcabc", 7), 6, 'Test 70');
test(minimumChanges("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 7), 0, 'Test 71');
test(minimumChanges("abcdefghij", 5), 5, 'Test 72');
test(minimumChanges("noon", 1), 0, 'Test 73');
test(minimumChanges("aaaaaaaaaa", 5), 0, 'Test 74');
test(minimumChanges("abcdefghijklnmopqrstuvwxyz", 5), 9, 'Test 75');
test(minimumChanges("abcdefghij", 3), 4, 'Test 76');
test(minimumChanges("racecar", 2), 3, 'Test 77');
test(minimumChanges("rotor", 1), 0, 'Test 78');
test(minimumChanges("abracadabraabracadabra", 5), 4, 'Test 79');
test(minimumChanges("xyzyxzyxzyx", 4), 3, 'Test 80');
test(minimumChanges("aaaaabbbbccccdddd", 4), 0, 'Test 81');
test(minimumChanges("aaabbbcccdddeeefffggg", 5), 3, 'Test 82');
test(minimumChanges("aaaabbbbccccdddd", 4), 0, 'Test 83');
test(minimumChanges("abcabcabcabcabcabcabcabc", 6), 3, 'Test 84');
test(minimumChanges("ababababab", 3), 0, 'Test 85');
test(minimumChanges("aabaaabaaabaaa", 4), 1, 'Test 86');
test(minimumChanges("aabbccddeeffgg", 4), 4, 'Test 87');
test(minimumChanges("aaaaabbbbcccc", 3), 0, 'Test 88');
test(minimumChanges("mnopqrsmnopqrsmno", 3), 6, 'Test 89');
test(minimumChanges("aabbccddeeffgg", 6), 2, 'Test 90');
test(minimumChanges("zzzaaaabbbccc", 4), 0, 'Test 91');
test(minimumChanges("abcdefghijklmnopqrstuvwxyz", 10), 10, 'Test 92');
test(minimumChanges("abababababababab", 4), 0, 'Test 93');
test(minimumChanges("mnopqrspqrspqr", 3), 2, 'Test 94');
test(minimumChanges("abacabadaba", 3), 1, 'Test 95');
test(minimumChanges("mississippi", 3), 1, 'Test 96');
test(minimumChanges("abacabadabacaba", 5), 2, 'Test 97');
test(minimumChanges("abacabadabacaba", 3), 0, 'Test 98');
test(minimumChanges("zzzzzyzzzzzz", 5), 0, 'Test 99');
test(minimumChanges("xyxyxyxyxyxy", 6), 6, 'Test 100');
test(minimumChanges("abcdeedcba", 2), 4, 'Test 101');
test(minimumChanges("abcdabcdabcdabcdabcd", 4), 1, 'Test 102');
test(minimumChanges("abcdefedcba", 5), 4, 'Test 103');
test(minimumChanges("aaaaaaaaaaaaaaaaaaaa", 5), 0, 'Test 104');
test(minimumChanges("zzzzzyzzzzz", 2), 0, 'Test 105');
test(minimumChanges("abcabcabcabcabc", 5), 4, 'Test 106');
test(minimumChanges("abcdefabcdef", 2), 1, 'Test 107');
test(minimumChanges("abcdefabcdefabcdefabcdef", 5), 3, 'Test 108');
test(minimumChanges("anana", 1), 0, 'Test 109');
test(minimumChanges("abcdefghijabcdefghij", 5), 7, 'Test 110');
test(minimumChanges("aaaabbbb", 2), 0, 'Test 111');
test(minimumChanges("xyzyzyzyz", 4), 3, 'Test 112');
test(minimumChanges("mnopqrstuvwx", 4), 4, 'Test 113');
test(minimumChanges("zzzzzzyyyzzzzzyyy", 2), 0, 'Test 114');
test(minimumChanges("reviled", 2), 3, 'Test 115');
test(minimumChanges("aaabbbbccccaaa", 3), 3, 'Test 116');
test(minimumChanges("abacabadabacaba", 4), 1, 'Test 117');
test(minimumChanges("aabbccddeeff", 4), 2, 'Test 118');
test(minimumChanges("xyzxyzxyzxyzxyz", 4), 3, 'Test 119');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

