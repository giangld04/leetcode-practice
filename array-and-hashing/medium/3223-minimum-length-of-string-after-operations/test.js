// Test: 3223. Minimum Length Of String After Operations
// 47 test cases from LeetCodeDataset
// Run: node test.js

const { minimumLength } = require("./solution");

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

console.log("\n3223. Minimum Length Of String After Operations\n");

test(minimumLength("zzzzyzyzyyzzyzz"), 3, 'Test 1');
test(minimumLength("abcba"), 5, 'Test 2');
test(minimumLength("abcdefghijklmnopqrstuvwxyz"), 26, 'Test 3');
test(minimumLength("abaacbcbb"), 5, 'Test 4');
test(minimumLength("aabbaa"), 4, 'Test 5');
test(minimumLength("aabbccddeeeedddccbaa"), 8, 'Test 6');
test(minimumLength("abababab"), 4, 'Test 7');
test(minimumLength("a"), 1, 'Test 8');
test(minimumLength("abacabadabacaba"), 7, 'Test 9');
test(minimumLength("abcabcabc"), 3, 'Test 10');
test(minimumLength("abcabcabcabc"), 6, 'Test 11');
test(minimumLength("aa"), 2, 'Test 12');
test(minimumLength("abcddcba"), 8, 'Test 13');
test(minimumLength("zzzzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzzzz"), 3, 'Test 14');
test(minimumLength("abcde"), 5, 'Test 15');
test(minimumLength("aabb"), 4, 'Test 16');
test(minimumLength("aabbccddeeeedddccba"), 7, 'Test 17');
test(minimumLength("abcdeedcba"), 10, 'Test 18');
test(minimumLength("zzzzzzzzzz"), 2, 'Test 19');
test(minimumLength("abcdefgfedcba"), 13, 'Test 20');
test(minimumLength("abcdabcdabcd"), 4, 'Test 21');
test(minimumLength("zzzyzzyyzzyyzzzzzyyzyzyzyz"), 4, 'Test 22');
test(minimumLength("abacabad"), 6, 'Test 23');
test(minimumLength("aabbaaabbbaaa"), 3, 'Test 24');
test(minimumLength("abcd"), 4, 'Test 25');
test(minimumLength("aabbccddeeff"), 12, 'Test 26');
test(minimumLength("aabbcc"), 6, 'Test 27');
test(minimumLength("mississippi"), 7, 'Test 28');
test(minimumLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 52, 'Test 29');
test(minimumLength("aabbccddeeffgghhiijj"), 20, 'Test 30');
test(minimumLength("aabbccddeeaabbccddeeff"), 12, 'Test 31');
test(minimumLength("aabbccdd"), 8, 'Test 32');
test(minimumLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 52, 'Test 33');
test(minimumLength("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 2, 'Test 34');
test(minimumLength("qwertyuiopasdfghjklzxcvbnmnbvcxzlkjhgfdsapoiuytrewqqwertyuiopasdfghjklzxcvbnm"), 27, 'Test 35');
test(minimumLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzxyz"), 49, 'Test 36');
test(minimumLength("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 26, 'Test 37');
test(minimumLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzyxwvutsrqponmlkjihgfedcba"), 26, 'Test 38');
test(minimumLength("abababababababababababababababababababababababababababababababababababababababab"), 4, 'Test 39');
test(minimumLength("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 40');
test(minimumLength("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba"), 51, 'Test 41');
test(minimumLength("xyzzyxzyzxzyzyzyzyz"), 3, 'Test 42');
test(minimumLength("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 4, 'Test 43');
test(minimumLength("zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), 26, 'Test 44');
test(minimumLength("aaabbbbccccddddeeeeefffffggggghhhhhiiiiijjjjjkkkkklllllmmmmmnnnnnooooo"), 18, 'Test 45');
test(minimumLength("aaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaab"), 3, 'Test 46');
test(minimumLength("aabbaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 52, 'Test 47');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

