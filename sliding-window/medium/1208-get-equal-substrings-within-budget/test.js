// Test: 1208. Get Equal Substrings Within Budget
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { equalSubstring } = require("./solution");

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

console.log("\n1208. Get Equal Substrings Within Budget\n");

test(equalSubstring("a", "b", 1), 1, 'Test 1');
test(equalSubstring("a", "a", 0), 1, 'Test 2');
test(equalSubstring("krrgw", "grkwa", 3), 1, 'Test 3');
test(equalSubstring("abcd", "abce", 1), 4, 'Test 4');
test(equalSubstring("abcdefgh", "efghabcd", 10), 2, 'Test 5');
test(equalSubstring("krrgw", "zjxss", 19), 2, 'Test 6');
test(equalSubstring("zzzzz", "bbbbb", 100), 4, 'Test 7');
test(equalSubstring("abcd", "cdef", 3), 1, 'Test 8');
test(equalSubstring("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", 26), 7, 'Test 9');
test(equalSubstring("pxezla", "sllerr", 5), 1, 'Test 10');
test(equalSubstring("abcde", "bcdef", 5), 5, 'Test 11');
test(equalSubstring("a", "b", 0), 0, 'Test 12');
test(equalSubstring("abcd", "abcd", 10), 4, 'Test 13');
test(equalSubstring("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", 25), 7, 'Test 14');
test(equalSubstring("abcdabcdabcd", "dddddddddddd", 10), 7, 'Test 15');
test(equalSubstring("abcd", "bcdf", 3), 3, 'Test 16');
test(equalSubstring("abcde", "fghij", 10), 2, 'Test 17');
test(equalSubstring("abcd", "acde", 0), 1, 'Test 18');
test(equalSubstring("aaabbbcccddd", "bbcccaaaadd", 20), Error: list index out of range, 'Test 19');
test(equalSubstring("zzzzzzzzzz", "aaaaaaaaaa", 25), 1, 'Test 20');
test(equalSubstring("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", 100), 14, 'Test 21');
test(equalSubstring("aaaaabbbbbccccc", "bbbbbccccdaaaaa", 15), 12, 'Test 22');
test(equalSubstring("a", "z", 25), 1, 'Test 23');
test(equalSubstring("thisisaverylongstring", "thisisaverylongstring", 50), 21, 'Test 24');
test(equalSubstring("abcde", "fghij", 15), 3, 'Test 25');
test(equalSubstring("zzzzzzzzzzzzzzzzzzzzzzzzz", "aaaaaaaaaaaaaaaaaaaaaaaaaaa", 130), 5, 'Test 26');
test(equalSubstring("abracadabra", "abracadabra", 5), 11, 'Test 27');
test(equalSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzz", "aaaaaaaaaaaaaaaaaaaaaaaaaaa", 100), 4, 'Test 28');
test(equalSubstring("xylophone", "pneumonia", 20), 5, 'Test 29');
test(equalSubstring("aabbaabbaabb", "bbaabbaabbab", 20), 12, 'Test 30');
test(equalSubstring("pneumonoultramicroscopicsilicovolcanoconiosis", "pneumonoultramicroscopicsilicovolcanoconiosis", 0), 45, 'Test 31');
test(equalSubstring("thisisaverylongstringthatwearetesting", "thatshastobemorecomplextohandle", 100), Error: list index out of range, 'Test 32');
test(equalSubstring("abcdefghij", "abcdefghij", 50), 10, 'Test 33');
test(equalSubstring("mississippi", "lollipop", 15), Error: list index out of range, 'Test 34');
test(equalSubstring("thisisaverylongstringthatweneedtocompare", "thisisaverylongstringthatweneedtoreplace", 50), 40, 'Test 35');
test(equalSubstring("xyzz", "zzyx", 10), 4, 'Test 36');
test(equalSubstring("abcdabcdabcdabcdabcdabcdabcdabcd", "dddddddddddddddddddddddddddddddd", 200), 32, 'Test 37');
test(equalSubstring("ababababababab", "bababababababa", 12), 12, 'Test 38');
test(equalSubstring("mnopqr", "qrstuv", 12), 3, 'Test 39');
test(equalSubstring("abacabadabacaba", "xyzxyzxyzxyzxyzxyzx", 30), 1, 'Test 40');
test(equalSubstring("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz", 0), 26, 'Test 41');
test(equalSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa", 1300), 52, 'Test 42');
test(equalSubstring("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", 50), 10, 'Test 43');
test(equalSubstring("aaaabbbbcccc", "ccccbbbbaaaa", 16), 12, 'Test 44');
test(equalSubstring("ababababab", "bababababa", 15), 10, 'Test 45');
test(equalSubstring("longerstringtocheck", "short", 10), Error: list index out of range, 'Test 46');
test(equalSubstring("abcabcabcabcabc", "abcabcabcabcabc", 0), 15, 'Test 47');
test(equalSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggeeffddccbbaa", 52), 14, 'Test 48');
test(equalSubstring("ababababababababababababababababababababababababab", "bababababababababababababababababababababababababa", 25), 25, 'Test 49');
test(equalSubstring("thisisaverylongstring", "thatshouldnotmatch", 20), Error: list index out of range, 'Test 50');
test(equalSubstring("mississippi", "abababababa", 10), 1, 'Test 51');
test(equalSubstring("abcdefghij", "abcdefghja", 9), 9, 'Test 52');
test(equalSubstring("abcdefghij", "abcdefghkj", 2), 10, 'Test 53');
test(equalSubstring("acabababcababcaba", "bacbababcababcaba", 25), 17, 'Test 54');
test(equalSubstring("oneonetwoonetwo", "twoonetwoonetwo", 8), 12, 'Test 55');
test(equalSubstring("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 200), 8, 'Test 56');
test(equalSubstring("xyzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzx", 50), 29, 'Test 57');
test(equalSubstring("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 0), 52, 'Test 58');
test(equalSubstring("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba", 100), 14, 'Test 59');
test(equalSubstring("abcdabcdabcdabcdabcd", "dddddddddddddddddddd", 15), 11, 'Test 60');
test(equalSubstring("abcdefghijklmnopqrstuvwxyz", "bcdefghijklmnopqrstuvwxyza", 51), 26, 'Test 61');
test(equalSubstring("thisisateststring", "jajajajajajajajaj", 50), 5, 'Test 62');
test(equalSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 100), 20, 'Test 63');
test(equalSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa", 200), 28, 'Test 64');
test(equalSubstring("aaaabbbbcccc", "ccccbbbbaaaaffff", 15), 11, 'Test 65');
test(equalSubstring("abcdefghij", "abcdefghij", 1), 10, 'Test 66');
test(equalSubstring("aaaaaaaaaaaaaaaaaaaaaaaaaa", "zzzzzzzzzzzzzzzzzzzzzzzzzz", 250), 10, 'Test 67');
test(equalSubstring("abcdefghij", "jihgfedcba", 100), 10, 'Test 68');
test(equalSubstring("abcdefghij", "jihgfedcba", 50), 10, 'Test 69');
test(equalSubstring("abcabcabcabcabcabcabcabc", "bcbcbcbcbcbcbcbcbcbcbcbcbcbc", 30), 24, 'Test 70');
test(equalSubstring("aaaaaaaaaaaaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbbbbbbbbbb", 100), 26, 'Test 71');
test(equalSubstring("abacabadabacaba", "xyzxyzxyzxyzxyz", 26), 1, 'Test 72');
test(equalSubstring("samecharacters", "samecharacters", 0), 14, 'Test 73');
test(equalSubstring("abcabcabcabcabcabcabcabcabcabc", "xyzxyzxyzxyzxyzxyzxyzxyzxyzxyz", 30), 1, 'Test 74');
test(equalSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa", 200), Error: list index out of range, 'Test 75');
test(equalSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbaa", 300), Error: list index out of range, 'Test 76');
test(equalSubstring("abcdefghij", "abcdefghjk", 1), 9, 'Test 77');
test(equalSubstring("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", "xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz", 500), 21, 'Test 78');
test(equalSubstring("aabbccddeeff", "zzeeffgghhii", 15), 5, 'Test 79');
test(equalSubstring("abcdefghijklmnopqrstuvwxyz", "bcdefghijklmnopqrstuvwxyza", 25), 25, 'Test 80');
test(equalSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 0), 48, 'Test 81');
test(equalSubstring("hellothereeverybody", "worldwideeveryone", 50), Error: list index out of range, 'Test 82');
test(equalSubstring("abcd", "acde", 2), 3, 'Test 83');
test(equalSubstring("abcabcabcabcabcabc", "defdefdefdefdefdef", 18), 6, 'Test 84');
test(equalSubstring("abcabcabcabcabcabcabcabcabcabc", "defdefdefdefdefdefdefdefdefdefdefdef", 27), 9, 'Test 85');
test(equalSubstring("aaaaabbbbbaaaa", "zzzzzaaaaazzzz", 40), 6, 'Test 86');
test(equalSubstring("zzzzzzzzzzzzzzzzzzzz", "aaaaaaaaaaaaaaaaaaa", 100), Error: list index out of range, 'Test 87');
test(equalSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 260), Error: list index out of range, 'Test 88');
test(equalSubstring("abcdabcdabcd", "abcdbacdabca", 15), 12, 'Test 89');
test(equalSubstring("abcdefghijklmnopqrstuvwxyz", "zabcdefghijklmnopqrstuvwxy", 25), 25, 'Test 90');
test(equalSubstring("ab", "ba", 100), 2, 'Test 91');
test(equalSubstring("zzzzyyyyxxxwwwwvvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbbaaa", "aaabbbcccdddeeefffggghhiijjkkllmmnnoopppqqrrssttuuvvvwwwxxxxyyyyzzzz", 200), 28, 'Test 92');
test(equalSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzyyxxwwvvuuttrrqqppoonnmmllkkjjiihhggffeeeeddccbaa", 50), Error: list index out of range, 'Test 93');
test(equalSubstring("aaaaaaaaaaaaaaaaaaaaaaaaaa", "zzzzzzzzzzzzzzzzzzzzzzzzzz", 100), 4, 'Test 94');
test(equalSubstring("abacabadabacaba", "zyxwzyxwzyxwzyx", 50), 2, 'Test 95');
test(equalSubstring("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", "mnopmnopmnopmnopmnopmnopmnopmnopmnop", 100), Error: list index out of range, 'Test 96');
test(equalSubstring("abcd", "xyzw", 12), 0, 'Test 97');
test(equalSubstring("aaaabbbbccccdddd", "ddddccccbbbbaaaa", 20), 12, 'Test 98');
test(equalSubstring("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", "zyxwzyxwzyxwzyxwzyxwzyxwzyxwzyxwzyxwzyxw", 50), 2, 'Test 99');
test(equalSubstring("abcdefghij", "jihgfedcba", 30), 7, 'Test 100');
test(equalSubstring("aaaaaaaaaa", "zzzzzzzzzz", 250), 10, 'Test 101');
test(equalSubstring("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", 150), 17, 'Test 102');
test(equalSubstring("aabbaabbaabbaabbaabbaabbaabbaabbaabbaabb", "zzyyzzyyzzyyzzyyzzyyzzyyzzyyzzyyzzyyzzyy", 150), 6, 'Test 103');
test(equalSubstring("qwertyuiopasdfghjklzxcvbnm", "qwertyuiopasdfghjklzxcvbnm", 0), 26, 'Test 104');
test(equalSubstring("qwertyuiopasdfghjklzxcvbnm", "mnbvcxzlkjhgfdsapoiuytrewq", 150), 25, 'Test 105');
test(equalSubstring("zzzzzzzzzz", "aaaaaaaaaa", 100), 4, 'Test 106');
test(equalSubstring("abcdefghijklmnopqrstuvwxyz", "zabcdefghijklmnopqrstuvwxy", 26), 25, 'Test 107');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

