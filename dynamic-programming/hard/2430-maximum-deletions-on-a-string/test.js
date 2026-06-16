// Test: 2430. Maximum Deletions On A String
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { deleteString } = require("./solution");

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

console.log("\n2430. Maximum Deletions On A String\n");

test(deleteString("abababababababababababababababababababababababababababababababababababababababababababababababab"), 48, 'Test 1');
test(deleteString("aaabaab"), 4, 'Test 2');
test(deleteString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 90, 'Test 3');
test(deleteString("abacabadabacaba"), 1, 'Test 4');
test(deleteString("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 29, 'Test 5');
test(deleteString("abcabcabcabc"), 4, 'Test 6');
test(deleteString("abcdabcdabcd"), 3, 'Test 7');
test(deleteString("abcdefghijklmnopqrstuvsuwxyzabcdefghijklmnopqrstuvsuwxyz"), 2, 'Test 8');
test(deleteString("abcabcdabc"), 2, 'Test 9');
test(deleteString("abcdefghijklmnopqrstuvwxyz"), 1, 'Test 10');
test(deleteString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 2, 'Test 11');
test(deleteString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 102, 'Test 12');
test(deleteString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 66, 'Test 13');
test(deleteString("abcdef"), 1, 'Test 14');
test(deleteString("abababab"), 4, 'Test 15');
test(deleteString("abcd"), 1, 'Test 16');
test(deleteString("aaaaa"), 5, 'Test 17');
test(deleteString("aabbccddeeff"), 2, 'Test 18');
test(deleteString("abacabadabacabadabacaba"), 2, 'Test 19');
test(deleteString("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 32, 'Test 20');
test(deleteString("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz"), 26, 'Test 21');
test(deleteString("aabbccddeeffaabbccddeeffaabbccddeeff"), 4, 'Test 22');
test(deleteString("abcababcababcababcababcababcababcababcababcababcababcab"), 11, 'Test 23');
test(deleteString("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), 13, 'Test 24');
test(deleteString("abacabadabacabadabacabadabacabad"), 4, 'Test 25');
test(deleteString("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 26, 'Test 26');
test(deleteString("abcdefabcdefabcdefabcdefabcdef"), 5, 'Test 27');
test(deleteString("abcdefghabcdefghabcdefghabcdefgh"), 4, 'Test 28');
test(deleteString("aabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeff"), 9, 'Test 29');
test(deleteString("aabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabb"), 19, 'Test 30');
test(deleteString("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), 10, 'Test 31');
test(deleteString("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 24, 'Test 32');
test(deleteString("abababababababababababababababababababababababababababababababab"), 32, 'Test 33');
test(deleteString("abababababababcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 20, 'Test 34');
test(deleteString("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 27, 'Test 35');
test(deleteString("ababccababccababccababccababcc"), 6, 'Test 36');
test(deleteString("aaaaabbbbbccccdddd"), 5, 'Test 37');
test(deleteString("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 28, 'Test 38');
test(deleteString("abcabcabcabcabcabcabcabcabcab"), 9, 'Test 39');
test(deleteString("abcdabcabcdabcabcd"), 2, 'Test 40');
test(deleteString("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 106, 'Test 41');
test(deleteString("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 20, 'Test 42');
test(deleteString("ababababababababababababababababababababababababababababababababababababab"), 37, 'Test 43');
test(deleteString("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 18, 'Test 44');
test(deleteString("abababababababababababababababababababc"), 19, 'Test 45');
test(deleteString("abacabacabacabacabacabacabacabacabacabacabacabacabacabacabacabacabacabacabacabac"), 20, 'Test 46');
test(deleteString("abcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefghabcdefgh"), 8, 'Test 47');
test(deleteString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzwwxxyyzzwwxxyyzz"), 2, 'Test 48');
test(deleteString("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), 12, 'Test 49');
test(deleteString("aaaaaaaaaaabaaaaaaaaaabaaaaaaaaaabaaaaaaaaaabaaaaaaaaaabaaaaaaaaaabaaaaaaaaaabaaaaaaaaaabaaaaaaaaaabaaaaaaaaaab"), 20, 'Test 50');
test(deleteString("abcabcabcabcabcabcabcabcabcabc"), 10, 'Test 51');
test(deleteString("aabbaabbaabbaabbaabbaabbaabbaabb"), 9, 'Test 52');
test(deleteString("abcdabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 1, 'Test 53');
test(deleteString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 94, 'Test 54');
test(deleteString("aaaaaaaaaabbbbbbbbbbccccccccccdddddddddd"), 10, 'Test 55');
test(deleteString("abracadabraabracadabraabracadabra"), 3, 'Test 56');
test(deleteString("aaabaaaabaaaaabaaaaaaaabaaaaaaaaabaaaaaaaaaabaaaaaaaaaaaabaaaaaaaaaaaaabaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaab"), 11, 'Test 57');
test(deleteString("aabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabb"), 24, 'Test 58');
test(deleteString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 110, 'Test 59');
test(deleteString("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 21, 'Test 60');
test(deleteString("abababababababababababababababababababababab"), 22, 'Test 61');
test(deleteString("ababababababababababababababababababababababababababababababababab"), 33, 'Test 62');
test(deleteString("ababccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 2, 'Test 63');
test(deleteString("aabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccdd"), 7, 'Test 64');
test(deleteString("ababababababababababababababababa"), 16, 'Test 65');
test(deleteString("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 25, 'Test 66');
test(deleteString("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), 14, 'Test 67');
test(deleteString("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), 11, 'Test 68');
test(deleteString("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), 18, 'Test 69');
test(deleteString("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), 9, 'Test 70');
test(deleteString("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz"), 16, 'Test 71');
test(deleteString("aabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeff"), 8, 'Test 72');
test(deleteString("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz"), 27, 'Test 73');
test(deleteString("abacabadabcaba"), 1, 'Test 74');
test(deleteString("banana"), 1, 'Test 75');
test(deleteString("abacabacabacabacabacabacabacabac"), 8, 'Test 76');
test(deleteString("aaabbbcccdddcccbbbcccaaa"), 3, 'Test 77');
test(deleteString("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 30, 'Test 78');
test(deleteString("aabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeff"), 6, 'Test 79');
test(deleteString("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 21, 'Test 80');
test(deleteString("abcdabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 1, 'Test 81');
test(deleteString("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), 8, 'Test 82');
test(deleteString("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 22, 'Test 83');
test(deleteString("ababcabcabcabcabcabc"), 7, 'Test 84');
test(deleteString("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 16, 'Test 85');
test(deleteString("abacabadabacabadabacabadabacabadabacabadabacabad"), 6, 'Test 86');
test(deleteString("abcabcabcabcabcabcabcabcabcabcd"), 10, 'Test 87');
test(deleteString("abacabadabacabadabacabad"), 3, 'Test 88');
test(deleteString("abababababababababababababababababababababababababababababababababababababababababababababab"), 46, 'Test 89');
test(deleteString("abababababababababababababababababababababababababababababababababababababababab"), 40, 'Test 90');
test(deleteString("ababccababccababccababccababccababccababccababccababccababccababccababccababccababccababcc"), 16, 'Test 91');
test(deleteString("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz"), 29, 'Test 92');
test(deleteString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzabcdabcdabcdabcdabcd"), 2, 'Test 93');
test(deleteString("abababababababababababababababababababababababababababababababababababcabcabc"), 37, 'Test 94');
test(deleteString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzwwxxyyzz"), 2, 'Test 95');
test(deleteString("abacabacabacabacabacabacabacabacabacabacabacabacabacabacabacabacabacabacabacabacabac"), 21, 'Test 96');
test(deleteString("abcabcabcabcabcabcabcabcabcabcabc"), 11, 'Test 97');
test(deleteString("ababccababccababccababccababccababccababccababccababccababccababccababccababcc"), 14, 'Test 98');
test(deleteString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzabacabadabacabadabacabadabacabad"), 2, 'Test 99');
test(deleteString("abacabacabacabacabacabacabacabacabac"), 9, 'Test 100');
test(deleteString("mississippi"), 1, 'Test 101');
test(deleteString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzabacabadabacabadabacabadabacabadabacabadabacabad"), 2, 'Test 102');
test(deleteString("ababababababababababababababababababababababababababababababababababababababababab"), 41, 'Test 103');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

