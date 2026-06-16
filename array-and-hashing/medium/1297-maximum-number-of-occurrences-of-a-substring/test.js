// Test: 1297. Maximum Number Of Occurrences Of A Substring
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { maxFreq } = require("./solution");

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

console.log("\n1297. Maximum Number Of Occurrences Of A Substring\n");

test(maxFreq("aaaa", 1, 3, 3), 2, 'Test 1');
test(maxFreq("abacabadabacaba", 3, 3, 5), 4, 'Test 2');
test(maxFreq("xyzxyzxyz", 3, 3, 3), 3, 'Test 3');
test(maxFreq("abacaba", 2, 2, 5), 2, 'Test 4');
test(maxFreq("aabcabcabc", 2, 2, 3), 3, 'Test 5');
test(maxFreq("xyzxyz", 3, 2, 4), 2, 'Test 6');
test(maxFreq("abcde", 3, 2, 3), 1, 'Test 7');
test(maxFreq("xyzxyzxyz", 3, 1, 2), 3, 'Test 8');
test(maxFreq("abcde", 3, 2, 4), 1, 'Test 9');
test(maxFreq("abcde", 5, 1, 5), 1, 'Test 10');
test(maxFreq("abacabadabacaba", 2, 2, 3), 4, 'Test 11');
test(maxFreq("abacabadaba", 2, 2, 3), 3, 'Test 12');
test(maxFreq("aababcaab", 2, 3, 4), 2, 'Test 13');
test(maxFreq("abcabcabc", 3, 3, 9), 3, 'Test 14');
test(maxFreq("mnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopq", 5, 10, 15), 0, 'Test 15');
test(maxFreq("thisisjustatest", 4, 4, 5), 1, 'Test 16');
test(maxFreq("abababababababababababab", 2, 2, 4), 12, 'Test 17');
test(maxFreq("abcdefabcdefabcdef", 3, 5, 6), 0, 'Test 18');
test(maxFreq("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 15, 7, 14), 1, 'Test 19');
test(maxFreq("zzzzzzzzzzzz", 1, 5, 7), 8, 'Test 20');
test(maxFreq("abcdefabcdefabcdef", 3, 3, 3), 3, 'Test 21');
test(maxFreq("abcabcabcabc", 3, 3, 9), 4, 'Test 22');
test(maxFreq("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 3, 3, 5), 1, 'Test 23');
test(maxFreq("xyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzz", 3, 4, 8), 17, 'Test 24');
test(maxFreq("xyzxyzxyzxyz", 2, 1, 3), 4, 'Test 25');
test(maxFreq("abcabcabcabcabcabc", 3, 3, 6), 6, 'Test 26');
test(maxFreq("aabbccddeeffgg", 3, 2, 4), 1, 'Test 27');
test(maxFreq("xyxyxyxyxyxyxy", 2, 3, 6), 6, 'Test 28');
test(maxFreq("mnopmnopmnop", 4, 5, 7), 2, 'Test 29');
test(maxFreq("abababababababab", 2, 3, 6), 7, 'Test 30');
test(maxFreq("abcdefghij", 5, 3, 4), 1, 'Test 31');
test(maxFreq("abcdefghijklmnopqrstuvwxyz", 10, 5, 10), 1, 'Test 32');
test(maxFreq("abcdabcdabcd", 4, 4, 4), 3, 'Test 33');
test(maxFreq("mississippiissi", 3, 2, 5), 3, 'Test 34');
test(maxFreq("abcdefgabcdefg", 2, 4, 5), 0, 'Test 35');
test(maxFreq("pneumonoultramicroscopicsilicovolcanoconiosis", 10, 10, 20), 1, 'Test 36');
test(maxFreq("aabbccddeeaabbccddeeaabb", 3, 4, 5), 3, 'Test 37');
test(maxFreq("mnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuv", 10, 10, 15), 9, 'Test 38');
test(maxFreq("abacabadabacabadabacabadabacaba", 3, 5, 7), 4, 'Test 39');
test(maxFreq("abacabadabacaba", 2, 4, 4), 0, 'Test 40');
test(maxFreq("abacabadabacabadabacaba", 3, 3, 7), 6, 'Test 41');
test(maxFreq("abcabcabcabc", 1, 1, 1), 4, 'Test 42');
test(maxFreq("abcabcabcabc", 3, 2, 5), 4, 'Test 43');
test(maxFreq("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 26, 1, 10), 2, 'Test 44');
test(maxFreq("pqrstuvwpqrstu", 7, 5, 8), 2, 'Test 45');
test(maxFreq("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 4, 8, 12), 13, 'Test 46');
test(maxFreq("abcdefabcdefabcdef", 6, 6, 6), 3, 'Test 47');
test(maxFreq("abcdabcdabcdabcdabcdabcdabcdabcd", 4, 4, 8), 8, 'Test 48');
test(maxFreq("abcdefghijklmnopqrstuvwxyz", 5, 5, 10), 1, 'Test 49');
test(maxFreq("abcabcabcabc", 3, 2, 4), 4, 'Test 50');
test(maxFreq("abracadabraabracadabra", 4, 5, 7), 2, 'Test 51');
test(maxFreq("mnopqr", 6, 1, 6), 1, 'Test 52');
test(maxFreq("aabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabb", 2, 3, 4), 18, 'Test 53');
test(maxFreq("xyzyzyzyzyz", 2, 3, 4), 4, 'Test 54');
test(maxFreq("abcabcabcabc", 3, 4, 6), 3, 'Test 55');
test(maxFreq("pppppppppppppppppppppppppppppppppppppppppp", 1, 50, 100), 0, 'Test 56');
test(maxFreq("zzzzzzzzzzzzzz", 1, 5, 10), 10, 'Test 57');
test(maxFreq("ababababababab", 2, 4, 6), 6, 'Test 58');
test(maxFreq("xyzxyzxyz", 3, 2, 5), 3, 'Test 59');
test(maxFreq("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 4, 4, 8), 29, 'Test 60');
test(maxFreq("aabbccddeeffaabbccddeeffaabbccddeeff", 3, 6, 12), 3, 'Test 61');
test(maxFreq("abcdefghijklmnopqrstuvwxyz", 26, 1, 26), 1, 'Test 62');
test(maxFreq("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 26, 15, 20), 1, 'Test 63');
test(maxFreq("xyxzyxzyxzyxzyxzyxzyxz", 3, 3, 4), 7, 'Test 64');
test(maxFreq("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 10, 10, 20), 1, 'Test 65');
test(maxFreq("zzzzzzzzzzzzzzzzzzzz", 1, 5, 10), 16, 'Test 66');
test(maxFreq("abcdabcdabcd", 4, 3, 3), 3, 'Test 67');
test(maxFreq("bananaananabanananaanananana", 3, 3, 6), 11, 'Test 68');
test(maxFreq("cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc", 1, 25000, 25000), 0, 'Test 69');
test(maxFreq("thisisaverylongstringthatwilltestthelimits", 10, 5, 15), 1, 'Test 70');
test(maxFreq("xyzxyzxyzxyz", 3, 4, 6), 3, 'Test 71');
test(maxFreq("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij", 5, 10, 15), 0, 'Test 72');
test(maxFreq("ababababababababababababababababababababababababababababababababababab", 2, 4, 8), 34, 'Test 73');
test(maxFreq("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 26, 1, 26), 2, 'Test 74');
test(maxFreq("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", 3, 3, 6), 31, 'Test 75');
test(maxFreq("abcdefabcdefabcdef", 6, 6, 12), 3, 'Test 76');
test(maxFreq("tuvwxyzuvwxy", 10, 4, 7), 2, 'Test 77');
test(maxFreq("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad", 4, 4, 8), 8, 'Test 78');
test(maxFreq("mnopqrsmnopqr", 7, 5, 8), 2, 'Test 79');
test(maxFreq("abcabcabcabcabcabcabcabcabcabc", 3, 3, 6), 10, 'Test 80');
test(maxFreq("xxyxxxyxyxyxyxyxyxyxyxyxyxyxyxyxyx", 2, 5, 10), 13, 'Test 81');
test(maxFreq("aabbccddeeff", 3, 3, 5), 1, 'Test 82');
test(maxFreq("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1, 5, 10), 54, 'Test 83');
test(maxFreq("mnopqrstuvmnopqrstuvmnopqrstuvmn", 10, 5, 15), 3, 'Test 84');
test(maxFreq("abcdabcdabcdabcdabcdabcdabcdabcd", 4, 6, 8), 7, 'Test 85');
test(maxFreq("abcdefabcdefabcdef", 6, 3, 6), 3, 'Test 86');
test(maxFreq("mississippiississippiississi", 4, 5, 8), 3, 'Test 87');
test(maxFreq("abcdefabcdef", 6, 3, 6), 2, 'Test 88');
test(maxFreq("zzzzzzzzzzzzzzzzzzzzzzzz", 1, 5, 10), 20, 'Test 89');
test(maxFreq("abracadabraabracadabra", 5, 5, 10), 2, 'Test 90');
test(maxFreq("xyxxyxyxyx", 2, 1, 3), 6, 'Test 91');
test(maxFreq("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 10, 5, 8), 1, 'Test 92');
test(maxFreq("ababababababababababababababababababababababababababababababababababab", 2, 2, 4), 35, 'Test 93');
test(maxFreq("ababababababababababababababab", 2, 4, 8), 14, 'Test 94');
test(maxFreq("abababababab", 2, 2, 3), 6, 'Test 95');
test(maxFreq("llllllllllllll", 1, 6, 8), 9, 'Test 96');
test(maxFreq("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1, 10, 20), 21, 'Test 97');
test(maxFreq("xyzxyzxyz", 3, 3, 6), 3, 'Test 98');
test(maxFreq("ababababababababababababababab", 2, 2, 2), 15, 'Test 99');
test(maxFreq("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad", 4, 5, 10), 8, 'Test 100');
test(maxFreq("abababababababababab", 2, 4, 6), 9, 'Test 101');
test(maxFreq("zzzzzzzzzzzzzzzzzzzz", 1, 10, 15), 11, 'Test 102');
test(maxFreq("abcabcabcabc", 3, 3, 4), 4, 'Test 103');
test(maxFreq("qwertyuiopasdfghjklzxcvbnm", 10, 5, 10), 1, 'Test 104');
test(maxFreq("abababababababab", 2, 2, 4), 8, 'Test 105');
test(maxFreq("pqrspqrspqrspqrs", 4, 5, 8), 3, 'Test 106');
test(maxFreq("abcabcabcabc", 3, 1, 10), 4, 'Test 107');
test(maxFreq("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm", 10, 5, 10), 2, 'Test 108');
test(maxFreq("aabbccddeeff", 3, 4, 6), 1, 'Test 109');
test(maxFreq("aaabbbcccdddeee", 2, 2, 3), 2, 'Test 110');
test(maxFreq("abcabcabcabcabcabc", 3, 2, 4), 6, 'Test 111');
test(maxFreq("aabbccddeeff", 3, 2, 6), 1, 'Test 112');
test(maxFreq("zzzzzzzzzzzzzzzzzzzzzzzzzz", 1, 5, 10), 22, 'Test 113');
test(maxFreq("zzzzzzzzzzzz", 1, 5, 6), 8, 'Test 114');
test(maxFreq("zzzzzzzzzzzzzzzzzzzzzzzzz", 1, 50000, 50000), 0, 'Test 115');
test(maxFreq("abababababababababababababab", 2, 3, 5), 13, 'Test 116');
test(maxFreq("abcdefghijklmnopqrstuvwxyz", 5, 10, 15), 0, 'Test 117');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

