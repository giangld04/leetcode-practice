// Test: 664. Strange Printer
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { strangePrinter } = require("./solution");

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

console.log("\n664. Strange Printer\n");

test(strangePrinter("pppppppp"), 1, 'Test 1');
test(strangePrinter("abcba"), 3, 'Test 2');
test(strangePrinter("aabbaa"), 2, 'Test 3');
test(strangePrinter("zzzzy"), 2, 'Test 4');
test(strangePrinter("abababab"), 5, 'Test 5');
test(strangePrinter("ppqpqr"), 4, 'Test 6');
test(strangePrinter("a"), 1, 'Test 7');
test(strangePrinter("abcabcabc"), 7, 'Test 8');
test(strangePrinter("aabbc"), 3, 'Test 9');
test(strangePrinter("aabaa"), 2, 'Test 10');
test(strangePrinter("abcabc"), 5, 'Test 11');
test(strangePrinter("abcdabcd"), 7, 'Test 12');
test(strangePrinter("qwertyuiopasdfghjklzxcvbnm"), 26, 'Test 13');
test(strangePrinter("abcdabcdabcd"), 10, 'Test 14');
test(strangePrinter("abc"), 3, 'Test 15');
test(strangePrinter("abcd"), 4, 'Test 16');
test(strangePrinter("aaabbb"), 2, 'Test 17');
test(strangePrinter("zzzzyyyxx"), 3, 'Test 18');
test(strangePrinter("aabbccddeeff"), 6, 'Test 19');
test(strangePrinter("aba"), 2, 'Test 20');
test(strangePrinter("aabbcc"), 3, 'Test 21');
test(strangePrinter("abacaba"), 4, 'Test 22');
test(strangePrinter("abca"), 3, 'Test 23');
test(strangePrinter("abacabadabacabadabacaba"), 12, 'Test 24');
test(strangePrinter("aabbaabbaabb"), 4, 'Test 25');
test(strangePrinter("abababababaabababa"), 9, 'Test 26');
test(strangePrinter("abcabcabcabc"), 9, 'Test 27');
test(strangePrinter("abacabadabacabadabacabadabacabad"), 17, 'Test 28');
test(strangePrinter("abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg"), 43, 'Test 29');
test(strangePrinter("zzyzxzyzxzyzxzyzxzyzxzyzxzyz"), 14, 'Test 30');
test(strangePrinter("aabbccddeeaabbccddeeaabbcc"), 11, 'Test 31');
test(strangePrinter("aabbaaabbbaaa"), 3, 'Test 32');
test(strangePrinter("abcdefghabcdeghijklmno"), 21, 'Test 33');
test(strangePrinter("aaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbcccccccccccccccccc"), 3, 'Test 34');
test(strangePrinter("aabbccddeeaabbccddeeaabbccddeeaabbcc"), 15, 'Test 35');
test(strangePrinter("zzzzzyyyzzzzyyy"), 3, 'Test 36');
test(strangePrinter("ababababababababababababababababababababababababababababababababababababababababababababa"), 45, 'Test 37');
test(strangePrinter("abcabcabcabcabcabcabcabcabcabc"), 21, 'Test 38');
test(strangePrinter("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"), 46, 'Test 39');
test(strangePrinter("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 33, 'Test 40');
test(strangePrinter("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 26, 'Test 41');
test(strangePrinter("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzz"), 26, 'Test 42');
test(strangePrinter("abacabad"), 5, 'Test 43');
test(strangePrinter("aaaabbbbccccddddeeeeaabbcc"), 7, 'Test 44');
test(strangePrinter("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 45');
test(strangePrinter("abcabcabcabcabcabc"), 13, 'Test 46');
test(strangePrinter("zzzzzzzzzzzzzzy"), 2, 'Test 47');
test(strangePrinter("aabbccddeeffgghhii"), 9, 'Test 48');
test(strangePrinter("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzy"), 2, 'Test 49');
test(strangePrinter("abcdeffedcba"), 6, 'Test 50');
test(strangePrinter("aaaaaaaaaabbbbbbbbccccccccddddddddeeeeeeeefffffffff"), 6, 'Test 51');
test(strangePrinter("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 1, 'Test 52');
test(strangePrinter("abcdefedcba"), 6, 'Test 53');
test(strangePrinter("aabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabb"), 13, 'Test 54');
test(strangePrinter("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 1, 'Test 55');
test(strangePrinter("abababababababababababababab"), 15, 'Test 56');
test(strangePrinter("abcdeedcbaedcbaedcba"), 13, 'Test 57');
test(strangePrinter("abacabadabacaba"), 8, 'Test 58');
test(strangePrinter("abababababababababababababababababababababababab"), 25, 'Test 59');
test(strangePrinter("aaaaaaaaaabbbbbbbbbbcccccccccc"), 3, 'Test 60');
test(strangePrinter("aaabbbcccdddfffgggaaa"), 6, 'Test 61');
test(strangePrinter("aaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbccccccccccccccccccccdddddddddddddddddd"), 4, 'Test 62');
test(strangePrinter("zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccba"), 26, 'Test 63');
test(strangePrinter("aabbccddeeffaabbccddeeffaabbccddeeffaabbccddeeff"), 21, 'Test 64');
test(strangePrinter("abcdefghijihgfedcba"), 10, 'Test 65');
test(strangePrinter("aabbccddeeaabbccddeeaabbccddeeee"), 13, 'Test 66');
test(strangePrinter("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz"), 33, 'Test 67');
test(strangePrinter("abacabadabacabadabacabadabacabadabacabad"), 21, 'Test 68');
test(strangePrinter("aaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbccccccccccccccccccccddddddddddddddddddaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbcccccccccccccccccc"), 6, 'Test 69');
test(strangePrinter("zzzyyxxwvvuuttrrqqppoonnmmllkkjjiihhggffeeddccbbaa"), 25, 'Test 70');
test(strangePrinter("ababababababababababababab"), 14, 'Test 71');
test(strangePrinter("aabbccddeeffgg"), 7, 'Test 72');
test(strangePrinter("abacabadabacabadabacabadabacabadabacabadabacabadabacabad"), 29, 'Test 73');
test(strangePrinter("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 26, 'Test 74');
test(strangePrinter("aabbccddeeffgghhiijj"), 10, 'Test 75');
test(strangePrinter("abacabadabacabadabacabadabacabadabacabadabacabad"), 25, 'Test 76');
test(strangePrinter("abcdefg"), 7, 'Test 77');
test(strangePrinter("abcdefghijklmnopqrstuvwxyzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 26, 'Test 78');
test(strangePrinter("abcabcabcabcabcabcabcabcaabbcc"), 19, 'Test 79');
test(strangePrinter("abacabadabacabadabacabad"), 13, 'Test 80');
test(strangePrinter("aaabaaabaaabaaabaaabaaabaaabaaabaaabaaabaaabaaab"), 13, 'Test 81');
test(strangePrinter("abcdefghijklmnopqrstuvwxyz"), 26, 'Test 82');
test(strangePrinter("abcbaabcbaabcba"), 7, 'Test 83');
test(strangePrinter("aabbbcccdddaaabbccccddeee"), 8, 'Test 84');
test(strangePrinter("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllll"), 12, 'Test 85');
test(strangePrinter("ababababab"), 6, 'Test 86');
test(strangePrinter("abcddcba"), 4, 'Test 87');
test(strangePrinter("aabbaabbccddeeffaabb"), 8, 'Test 88');
test(strangePrinter("abcdabcdabcdabcdabcdabcdabcdabcd"), 25, 'Test 89');
test(strangePrinter("abcdefghihgfedcba"), 9, 'Test 90');
test(strangePrinter("abcabcabcabcabcabcabcabcabc"), 19, 'Test 91');
test(strangePrinter("abcabcabcabcabcabcabcabc"), 17, 'Test 92');
test(strangePrinter("abcdabcdbaba"), 8, 'Test 93');
test(strangePrinter("xyzyxzyzyxzyzyxzyz"), 11, 'Test 94');
test(strangePrinter("abcdefghijhgfedcba"), 10, 'Test 95');
test(strangePrinter("mississippi"), 5, 'Test 96');
test(strangePrinter("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 97');
test(strangePrinter("ababababababababababababababababababababababababababa"), 27, 'Test 98');
test(strangePrinter("abcabcabcabcabc"), 11, 'Test 99');
test(strangePrinter("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 37, 'Test 100');
test(strangePrinter("aabbccddeeaabbcc"), 7, 'Test 101');
test(strangePrinter("zzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 102');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

