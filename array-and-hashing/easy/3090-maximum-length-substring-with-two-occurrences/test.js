// Test: 3090. Maximum Length Substring With Two Occurrences
// 78 test cases from LeetCodeDataset
// Run: node test.js

const { maximumLengthSubstring } = require("./solution");

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

console.log("\n3090. Maximum Length Substring With Two Occurrences\n");

test(maximumLengthSubstring("zzzzzzzzz"), 2, 'Test 1');
test(maximumLengthSubstring("aaabbbccc"), 4, 'Test 2');
test(maximumLengthSubstring("aabbaa"), 4, 'Test 3');
test(maximumLengthSubstring("abababab"), 4, 'Test 4');
test(maximumLengthSubstring("aabacbebebe"), 6, 'Test 5');
test(maximumLengthSubstring("abacabadabacaba"), 5, 'Test 6');
test(maximumLengthSubstring("abab"), 4, 'Test 7');
test(maximumLengthSubstring("abcabcabc"), 6, 'Test 8');
test(maximumLengthSubstring("aabbc"), 5, 'Test 9');
test(maximumLengthSubstring("aabacbacbac"), 6, 'Test 10');
test(maximumLengthSubstring("ababababab"), 4, 'Test 11');
test(maximumLengthSubstring("abcabc"), 6, 'Test 12');
test(maximumLengthSubstring("aabb"), 4, 'Test 13');
test(maximumLengthSubstring("zzzzyyxx"), 6, 'Test 14');
test(maximumLengthSubstring("xyzxyzxyz"), 6, 'Test 15');
test(maximumLengthSubstring("bcbbbcba"), 4, 'Test 16');
test(maximumLengthSubstring("zzzzzzzzzz"), 2, 'Test 17');
test(maximumLengthSubstring("zzzzzzzzzzzz"), 2, 'Test 18');
test(maximumLengthSubstring("abacabad"), 5, 'Test 19');
test(maximumLengthSubstring("abababababab"), 4, 'Test 20');
test(maximumLengthSubstring("aabbccddeeffgg"), 14, 'Test 21');
test(maximumLengthSubstring("aaabbb"), 4, 'Test 22');
test(maximumLengthSubstring("aaaa"), 2, 'Test 23');
test(maximumLengthSubstring("aabbccddeeffgghh"), 16, 'Test 24');
test(maximumLengthSubstring("aabbccddeeff"), 12, 'Test 25');
test(maximumLengthSubstring("abcdeabcde"), 10, 'Test 26');
test(maximumLengthSubstring("aabbcc"), 6, 'Test 27');
test(maximumLengthSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 52, 'Test 28');
test(maximumLengthSubstring("aabbccddeeffgghhiijj"), 20, 'Test 29');
test(maximumLengthSubstring("abacaba"), 5, 'Test 30');
test(maximumLengthSubstring("abcdefg"), 7, 'Test 31');
test(maximumLengthSubstring("aaabbbaaabbbaaabbbaaabbbaaabbbaaabbbaaabbbaaabbbaaabbbaaabbbaaabbbaaabbbaaabbb"), 4, 'Test 32');
test(maximumLengthSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzz"), 52, 'Test 33');
test(maximumLengthSubstring("aabbaaabbbaaaabbbaaaa"), 4, 'Test 34');
test(maximumLengthSubstring("abacabadabacabadabacaba"), 5, 'Test 35');
test(maximumLengthSubstring("abcdefghijabcdefghijabcdefghijabcdefghij"), 20, 'Test 36');
test(maximumLengthSubstring("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 6, 'Test 37');
test(maximumLengthSubstring("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 6, 'Test 38');
test(maximumLengthSubstring("aaaabbbbccccaaaabbbbccccaaaabbbbccccaaaabbbbccccaaaabbbbcccc"), 4, 'Test 39');
test(maximumLengthSubstring("mnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrs"), 14, 'Test 40');
test(maximumLengthSubstring("abcdabcdeabcdabcdeabcdabcdeabcdabcdeabcdabcdeabcdabcdeabcdabcdeabcdabcdabcdabcd"), 10, 'Test 41');
test(maximumLengthSubstring("aaabbbcccdddeeefffggghhhiiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz"), 4, 'Test 42');
test(maximumLengthSubstring("aabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabb"), 4, 'Test 43');
test(maximumLengthSubstring("abcabcabcabcabcabcabcabcabcabc"), 6, 'Test 44');
test(maximumLengthSubstring("aabbaabbaabbaabbaabbaabbaabbaabb"), 4, 'Test 45');
test(maximumLengthSubstring("abcdefghijklaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 52, 'Test 46');
test(maximumLengthSubstring("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 52, 'Test 47');
test(maximumLengthSubstring("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"), 20, 'Test 48');
test(maximumLengthSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzyxwvutsrqponmlkjihgfedcba"), 52, 'Test 49');
test(maximumLengthSubstring("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 6, 'Test 50');
test(maximumLengthSubstring("zzzzzzzzzzzzzzzzzzzz"), 2, 'Test 51');
test(maximumLengthSubstring("aabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabb"), 4, 'Test 52');
test(maximumLengthSubstring("xyzzzyxyzzzyxyzzzyxyzzzyxyzzzyxyzzzyxyzzzyxyzzzyxyzzzyxyzzzyxyzzzyxyzzz"), 5, 'Test 53');
test(maximumLengthSubstring("abacabadabacabadabacabadabacabadabacabad"), 5, 'Test 54');
test(maximumLengthSubstring("aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnnoooppqqrrrsssttuuvvwwxxyyzz"), 16, 'Test 55');
test(maximumLengthSubstring("abcdefghijklmnopqrstuvwxyzzzzzzzzzzzzzzzzzzzz"), 27, 'Test 56');
test(maximumLengthSubstring("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 52, 'Test 57');
test(maximumLengthSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzz"), 52, 'Test 58');
test(maximumLengthSubstring("zzzzzyzyzyzyzyzyzy"), 4, 'Test 59');
test(maximumLengthSubstring("abcabcbacbacbabcabcabcabcabcabcabc"), 6, 'Test 60');
test(maximumLengthSubstring("abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef"), 12, 'Test 61');
test(maximumLengthSubstring("abcabcabcabcabcabc"), 6, 'Test 62');
test(maximumLengthSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 2, 'Test 63');
test(maximumLengthSubstring("aabbaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzz"), 52, 'Test 64');
test(maximumLengthSubstring("aabccddeeffaabbccddeeffaabbccddeeff"), 12, 'Test 65');
test(maximumLengthSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzyyxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa"), 52, 'Test 66');
test(maximumLengthSubstring("abcdefghijklmnopqrstuvabcdefghijklmnopqrstuv"), 44, 'Test 67');
test(maximumLengthSubstring("aabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabba"), 4, 'Test 68');
test(maximumLengthSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzz"), 52, 'Test 69');
test(maximumLengthSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzz"), 52, 'Test 70');
test(maximumLengthSubstring("aabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabb"), 4, 'Test 71');
test(maximumLengthSubstring("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 8, 'Test 72');
test(maximumLengthSubstring("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 6, 'Test 73');
test(maximumLengthSubstring("abcabcabcabcabc"), 6, 'Test 74');
test(maximumLengthSubstring("abcdaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzz"), 52, 'Test 75');
test(maximumLengthSubstring("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 8, 'Test 76');
test(maximumLengthSubstring("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 6, 'Test 77');
test(maximumLengthSubstring("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"), 20, 'Test 78');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

