// Test: 1531. String Compression Ii
// 84 test cases from LeetCodeDataset
// Run: node test.js

const { getLengthOfOptimalCompression } = require("./solution");

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

console.log("\n1531. String Compression Ii\n");

test(getLengthOfOptimalCompression("abcabcabc", 5), 3, 'Test 1');
test(getLengthOfOptimalCompression("aaabcccd", 2), 4, 'Test 2');
test(getLengthOfOptimalCompression("aabcc", 1), 4, 'Test 3');
test(getLengthOfOptimalCompression("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 20), 32, 'Test 4');
test(getLengthOfOptimalCompression("aabccabcc", 2), 5, 'Test 5');
test(getLengthOfOptimalCompression("nnnhoorq", 2), 5, 'Test 6');
test(getLengthOfOptimalCompression("aaaaaaaaaaa", 0), 3, 'Test 7');
test(getLengthOfOptimalCompression("aabbaa", 2), 2, 'Test 8');
test(getLengthOfOptimalCompression("abbbcccaaaa", 3), 5, 'Test 9');
test(getLengthOfOptimalCompression("abbbabbbcabbbabbbb", 3), 6, 'Test 10');
test(getLengthOfOptimalCompression("aabbccddeeff", 6), 6, 'Test 11');
test(getLengthOfOptimalCompression("abababababababababababababababababababab", 15), 12, 'Test 12');
test(getLengthOfOptimalCompression("a", 0), 1, 'Test 13');
test(getLengthOfOptimalCompression("zzzzzzzzzzzzzzzzzzzz", 10), 3, 'Test 14');
test(getLengthOfOptimalCompression("aabbbcccbbaa", 3), 6, 'Test 15');
test(getLengthOfOptimalCompression("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10), 3, 'Test 16');
test(getLengthOfOptimalCompression("abcdabcdabcd", 6), 5, 'Test 17');
test(getLengthOfOptimalCompression("a", 1), 0, 'Test 18');
test(getLengthOfOptimalCompression("aabbcc", 1), 5, 'Test 19');
test(getLengthOfOptimalCompression("aabcccccaaa", 2), 5, 'Test 20');
test(getLengthOfOptimalCompression("abcde", 2), 3, 'Test 21');
test(getLengthOfOptimalCompression("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 15), 21, 'Test 22');
test(getLengthOfOptimalCompression("aabbccddeeff", 4), 8, 'Test 23');
test(getLengthOfOptimalCompression("abcdefghijaaaaaaaaaaaaaa", 5), 8, 'Test 24');
test(getLengthOfOptimalCompression("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzz", 30), 23, 'Test 25');
test(getLengthOfOptimalCompression("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij", 25), 64, 'Test 26');
test(getLengthOfOptimalCompression("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 30), 14, 'Test 27');
test(getLengthOfOptimalCompression("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", 35), 18, 'Test 28');
test(getLengthOfOptimalCompression("mississippi", 3), 6, 'Test 29');
test(getLengthOfOptimalCompression("aaaaaabbbbccccddddeeeeffffgggghhhh", 8), 12, 'Test 30');
test(getLengthOfOptimalCompression("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy", 15), 58, 'Test 31');
test(getLengthOfOptimalCompression("abacabadabacaba", 5), 6, 'Test 32');
test(getLengthOfOptimalCompression("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyx", 30), 25, 'Test 33');
test(getLengthOfOptimalCompression("xyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 25), 3, 'Test 34');
test(getLengthOfOptimalCompression("aaabbbcccddddeeefffggghhhiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwww", 30), 26, 'Test 35');
test(getLengthOfOptimalCompression("aabbaabbaabbaabbaabbaabbcccccccccccdddddddddd", 20), 6, 'Test 36');
test(getLengthOfOptimalCompression("aaaaaaaaaabbbbbbbbbbccccccccccdddddddddd", 5), 8, 'Test 37');
test(getLengthOfOptimalCompression("mnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopq", 10), 75, 'Test 38');
test(getLengthOfOptimalCompression("abcdefghijklmnopqrstuvwxyzzzzzzzzzzzzzz", 10), 18, 'Test 39');
test(getLengthOfOptimalCompression("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 25), 53, 'Test 40');
test(getLengthOfOptimalCompression("aaabaaaacaaadaaaeaaafaaagaaahaaaiaaa", 10), 3, 'Test 41');
test(getLengthOfOptimalCompression("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy", 25), 26, 'Test 42');
test(getLengthOfOptimalCompression("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 30), 3, 'Test 43');
test(getLengthOfOptimalCompression("abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcde", 25), 60, 'Test 44');
test(getLengthOfOptimalCompression("qwertyuiopasdfghjklzxcvbnm", 10), 16, 'Test 45');
test(getLengthOfOptimalCompression("abababababab", 3), 7, 'Test 46');
test(getLengthOfOptimalCompression("zzzzzyyyyyxxxyyyxxxxzzzzzzz", 15), 3, 'Test 47');
test(getLengthOfOptimalCompression("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 20), 55, 'Test 48');
test(getLengthOfOptimalCompression("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 26), 26, 'Test 49');
test(getLengthOfOptimalCompression("abcabcabcabcabcabcabcabcabcabcabcabc", 15), 15, 'Test 50');
test(getLengthOfOptimalCompression("ppppppppppqqqqqqqqqqrrrrrrrrrrsssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", 50), 3, 'Test 51');
test(getLengthOfOptimalCompression("abbbcccdddeeeeeffgggghhhiiijjjjj", 10), 12, 'Test 52');
test(getLengthOfOptimalCompression("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 25), 3, 'Test 53');
test(getLengthOfOptimalCompression("aabbaacccaaadd", 4), 6, 'Test 54');
test(getLengthOfOptimalCompression("abbbccccddee", 4), 5, 'Test 55');
test(getLengthOfOptimalCompression("abababababababababababababababababababababababababababababababababababababababababababab", 20), 50, 'Test 56');
test(getLengthOfOptimalCompression("aaaaaaaaaabbbbbbbbbccccccccddddddddeeeeeeeeeffffffffgggggggghhhhhhhhiiiiiiiiijjjjjjj", 25), 14, 'Test 57');
test(getLengthOfOptimalCompression("pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp", 30), 3, 'Test 58');
test(getLengthOfOptimalCompression("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 25), 27, 'Test 59');
test(getLengthOfOptimalCompression("ababababababababababababababababababababab", 10), 24, 'Test 60');
test(getLengthOfOptimalCompression("aaaaaaaaaabbbbbbbbbbccccccccccdddddddddd", 15), 6, 'Test 61');
test(getLengthOfOptimalCompression("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 30), 3, 'Test 62');
test(getLengthOfOptimalCompression("abcabcabcabcabcabcabcabcabcabc", 5), 24, 'Test 63');
test(getLengthOfOptimalCompression("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy", 30), 26, 'Test 64');
test(getLengthOfOptimalCompression("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij", 20), 59, 'Test 65');
test(getLengthOfOptimalCompression("abcdabcdabcdabcdabcdabcdabcd", 12), 13, 'Test 66');
test(getLengthOfOptimalCompression("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", 45), 3, 'Test 67');
test(getLengthOfOptimalCompression("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 0), 52, 'Test 68');
test(getLengthOfOptimalCompression("abcdefg", 3), 4, 'Test 69');
test(getLengthOfOptimalCompression("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10), 3, 'Test 70');
test(getLengthOfOptimalCompression("aabbaabbaabbaabbaabbaabb", 10), 4, 'Test 71');
test(getLengthOfOptimalCompression("xyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 50), 0, 'Test 72');
test(getLengthOfOptimalCompression("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy", 20), 52, 'Test 73');
test(getLengthOfOptimalCompression("abababababababababababababab", 10), 10, 'Test 74');
test(getLengthOfOptimalCompression("pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp", 50), 3, 'Test 75');
test(getLengthOfOptimalCompression("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzz", 40), 13, 'Test 76');
test(getLengthOfOptimalCompression("aaaaabbbbbaaaaabbbbbaaaaabbbbbaaaaabbbbbaaaaa", 10), 11, 'Test 77');
test(getLengthOfOptimalCompression("aaaaaaaaaabbbbbbbbbcccccdddddeeeeeeeeeeee", 20), 5, 'Test 78');
test(getLengthOfOptimalCompression("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 15), 37, 'Test 79');
test(getLengthOfOptimalCompression("aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee", 10), 10, 'Test 80');
test(getLengthOfOptimalCompression("ppppppqqqqqqqqqqqqqqqqqqqqqqrrrrrrrrrrrrrrrrsssssssssssttttttttttt", 30), 6, 'Test 81');
test(getLengthOfOptimalCompression("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10), 3, 'Test 82');
test(getLengthOfOptimalCompression("aaaaaaaaaaabbbbbbbbbbbccccccccccdddddddddd", 10), 8, 'Test 83');
test(getLengthOfOptimalCompression("aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggg", 25), 10, 'Test 84');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

