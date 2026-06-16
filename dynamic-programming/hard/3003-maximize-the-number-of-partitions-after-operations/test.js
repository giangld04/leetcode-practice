// Test: 3003. Maximize The Number Of Partitions After Operations
// 113 test cases from LeetCodeDataset
// Run: node test.js

const { maxPartitionsAfterOperations } = require("./solution");

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

console.log("\n3003. Maximize The Number Of Partitions After Operations\n");

test(maxPartitionsAfterOperations("zzzzzzz", 1), 3, 'Test 1');
test(maxPartitionsAfterOperations("abcdef", 6), 1, 'Test 2');
test(maxPartitionsAfterOperations("aaaaaaa", 1), 3, 'Test 3');
test(maxPartitionsAfterOperations("abcdefghijklmnop", 5), 4, 'Test 4');
test(maxPartitionsAfterOperations("aabacbebebe", 3), 2, 'Test 5');
test(maxPartitionsAfterOperations("aaaabbbbcccc", 3), 2, 'Test 6');
test(maxPartitionsAfterOperations("zzzzzzzzzz", 1), 3, 'Test 7');
test(maxPartitionsAfterOperations("abcd", 2), 2, 'Test 8');
test(maxPartitionsAfterOperations("abacabadabacaba", 3), 4, 'Test 9');
test(maxPartitionsAfterOperations("aabaab", 3), 1, 'Test 10');
test(maxPartitionsAfterOperations("aabbccddeeffgg", 2), 4, 'Test 11');
test(maxPartitionsAfterOperations("accca", 2), 3, 'Test 12');
test(maxPartitionsAfterOperations("aabbaa", 2), 2, 'Test 13');
test(maxPartitionsAfterOperations("zzzzz", 1), 3, 'Test 14');
test(maxPartitionsAfterOperations("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 10), 3, 'Test 15');
test(maxPartitionsAfterOperations("aabbccddeeff", 3), 3, 'Test 16');
test(maxPartitionsAfterOperations("xxyz", 1), 4, 'Test 17');
test(maxPartitionsAfterOperations("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 26), 1, 'Test 18');
test(maxPartitionsAfterOperations("abcdabcd", 4), 2, 'Test 19');
test(maxPartitionsAfterOperations("zzzzzzzzzzzzzzzzzzzzzzzz", 1), 3, 'Test 20');
test(maxPartitionsAfterOperations("abcdefg", 7), 1, 'Test 21');
test(maxPartitionsAfterOperations("aabbaabb", 2), 3, 'Test 22');
test(maxPartitionsAfterOperations("zzzzzzzzz", 1), 3, 'Test 23');
test(maxPartitionsAfterOperations("abacabadabacaba", 2), 7, 'Test 24');
test(maxPartitionsAfterOperations("abcdefghijklmnopqrstuvwxyz", 26), 1, 'Test 25');
test(maxPartitionsAfterOperations("abcdefabcdef", 4), 3, 'Test 26');
test(maxPartitionsAfterOperations("aabbccddeeff", 2), 4, 'Test 27');
test(maxPartitionsAfterOperations("abcabcabcabcabcabcabcabcabcabc", 2), 15, 'Test 28');
test(maxPartitionsAfterOperations("abcdefg", 3), 3, 'Test 29');
test(maxPartitionsAfterOperations("abcabcabc", 3), 3, 'Test 30');
test(maxPartitionsAfterOperations("abacabad", 2), 4, 'Test 31');
test(maxPartitionsAfterOperations("aaaa", 1), 3, 'Test 32');
test(maxPartitionsAfterOperations("abcabcabcabc", 3), 3, 'Test 33');
test(maxPartitionsAfterOperations("aabcccccaabaab", 2), 4, 'Test 34');
test(maxPartitionsAfterOperations("mnopqrstuvw", 6), 2, 'Test 35');
test(maxPartitionsAfterOperations("abcdabcdabcdabcd", 4), 3, 'Test 36');
test(maxPartitionsAfterOperations("xyzxyzxyzxyzxyz", 3), 3, 'Test 37');
test(maxPartitionsAfterOperations("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", 5), 1, 'Test 38');
test(maxPartitionsAfterOperations("qwertyuiopasdfghjklzxcvbnm", 10), 3, 'Test 39');
test(maxPartitionsAfterOperations("ababababababab", 2), 3, 'Test 40');
test(maxPartitionsAfterOperations("banana", 2), 3, 'Test 41');
test(maxPartitionsAfterOperations("aaaaabbbbbaaaaabbbbb", 2), 3, 'Test 42');
test(maxPartitionsAfterOperations("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 1), 27, 'Test 43');
test(maxPartitionsAfterOperations("aaabbbcccdddeeefffggghhh", 2), 5, 'Test 44');
test(maxPartitionsAfterOperations("abcdefghijklaaaa", 4), 4, 'Test 45');
test(maxPartitionsAfterOperations("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1), 3, 'Test 46');
test(maxPartitionsAfterOperations("zzzzzzzzzzzz", 1), 3, 'Test 47');
test(maxPartitionsAfterOperations("ababababababababab", 2), 3, 'Test 48');
test(maxPartitionsAfterOperations("abcdefgabcdefg", 4), 4, 'Test 49');
test(maxPartitionsAfterOperations("mississippi", 2), 4, 'Test 50');
test(maxPartitionsAfterOperations("zzzzzzzzzzzzzzzzzz", 1), 3, 'Test 51');
test(maxPartitionsAfterOperations("llllllllllllllllllllllllll", 1), 3, 'Test 52');
test(maxPartitionsAfterOperations("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 5), 6, 'Test 53');
test(maxPartitionsAfterOperations("abcabcabcabcabc", 2), 8, 'Test 54');
test(maxPartitionsAfterOperations("xyxyxyxyxyxyxyxy", 2), 3, 'Test 55');
test(maxPartitionsAfterOperations("abcdefghijklmnopqrstuvwxyza", 10), 3, 'Test 56');
test(maxPartitionsAfterOperations("abcabcabcabcabcabc", 3), 3, 'Test 57');
test(maxPartitionsAfterOperations("zzzzzzzzzzzzzzzzz", 1), 3, 'Test 58');
test(maxPartitionsAfterOperations("xyzzzzxyzzzz", 2), 4, 'Test 59');
test(maxPartitionsAfterOperations("abcabcaabbccbbaccc", 2), 7, 'Test 60');
test(maxPartitionsAfterOperations("abcdeabcdeabcde", 5), 3, 'Test 61');
test(maxPartitionsAfterOperations("abcdefghijabcdefghijabcdefghij", 5), 6, 'Test 62');
test(maxPartitionsAfterOperations("abcabcabcabcabcabcabcabc", 2), 12, 'Test 63');
test(maxPartitionsAfterOperations("abcdefabcdefabcdef", 5), 4, 'Test 64');
test(maxPartitionsAfterOperations("aabbaabbaabbaabbaabbaabb", 2), 3, 'Test 65');
test(maxPartitionsAfterOperations("abcdabcdabcd", 3), 4, 'Test 66');
test(maxPartitionsAfterOperations("abcdefghij", 5), 2, 'Test 67');
test(maxPartitionsAfterOperations("aaabbbcccddd", 3), 2, 'Test 68');
test(maxPartitionsAfterOperations("aabbccddeeffgghhii", 26), 1, 'Test 69');
test(maxPartitionsAfterOperations("abcabcabcabc", 2), 6, 'Test 70');
test(maxPartitionsAfterOperations("abcdefghijklmnopqrstuvwxyza", 25), 2, 'Test 71');
test(maxPartitionsAfterOperations("abababababababababababababababababababababababababababababab", 2), 3, 'Test 72');
test(maxPartitionsAfterOperations("ababababababababababababababab", 2), 3, 'Test 73');
test(maxPartitionsAfterOperations("zzzzzzzzzzzzzzzzzzzz", 1), 3, 'Test 74');
test(maxPartitionsAfterOperations("abcabcabcabcabcabcabcabcabcabc", 3), 3, 'Test 75');
test(maxPartitionsAfterOperations("zzzzzzzzzzzzzzzz", 1), 3, 'Test 76');
test(maxPartitionsAfterOperations("abcdefghij", 1), 10, 'Test 77');
test(maxPartitionsAfterOperations("aabbbcccccdddd", 3), 2, 'Test 78');
test(maxPartitionsAfterOperations("aaaaaaaaabbbbbbb", 2), 2, 'Test 79');
test(maxPartitionsAfterOperations("aabbaabbaabbaabb", 2), 3, 'Test 80');
test(maxPartitionsAfterOperations("abcdabcdabcdabcdabcdabcdabcdabcd", 4), 3, 'Test 81');
test(maxPartitionsAfterOperations("abcdefghijklmnopqrstuvwxyz", 10), 3, 'Test 82');
test(maxPartitionsAfterOperations("aabccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 5), 6, 'Test 83');
test(maxPartitionsAfterOperations("abcdefg", 1), 7, 'Test 84');
test(maxPartitionsAfterOperations("abbaabbaabba", 2), 3, 'Test 85');
test(maxPartitionsAfterOperations("abracadabra", 4), 3, 'Test 86');
test(maxPartitionsAfterOperations("aabbaabbccddeeffgg", 3), 3, 'Test 87');
test(maxPartitionsAfterOperations("zzzzzzzzzzzzzzzzzzzzzzzzzz", 1), 3, 'Test 88');
test(maxPartitionsAfterOperations("abcabcabc", 2), 5, 'Test 89');
test(maxPartitionsAfterOperations("xyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzz", 2), 16, 'Test 90');
test(maxPartitionsAfterOperations("aabbccddeeffgghhii", 5), 2, 'Test 91');
test(maxPartitionsAfterOperations("abababababab", 2), 3, 'Test 92');
test(maxPartitionsAfterOperations("ababababababababababababab", 2), 3, 'Test 93');
test(maxPartitionsAfterOperations("xyzzxyzzxyzz", 3), 3, 'Test 94');
test(maxPartitionsAfterOperations("aaaaaaaaaabbbbbbbbccccccccdddddddd", 4), 2, 'Test 95');
test(maxPartitionsAfterOperations("mississippi", 3), 3, 'Test 96');
test(maxPartitionsAfterOperations("abcdefghijklmnopqrstuvwxyz", 1), 26, 'Test 97');
test(maxPartitionsAfterOperations("lalalalalala", 2), 3, 'Test 98');
test(maxPartitionsAfterOperations("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 3), 9, 'Test 99');
test(maxPartitionsAfterOperations("aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxxyyyyzzzz", 4), 7, 'Test 100');
test(maxPartitionsAfterOperations("aaaaaabbbbbbbccc", 2), 3, 'Test 101');
test(maxPartitionsAfterOperations("xyzxyzxyzxyzxyzxyz", 3), 3, 'Test 102');
test(maxPartitionsAfterOperations("xyzzzxyzzzxyzzz", 3), 3, 'Test 103');
test(maxPartitionsAfterOperations("abracadabra", 2), 6, 'Test 104');
test(maxPartitionsAfterOperations("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", 3), 3, 'Test 105');
test(maxPartitionsAfterOperations("abacbacbacbacba", 4), 1, 'Test 106');
test(maxPartitionsAfterOperations("abcdefg", 2), 4, 'Test 107');
test(maxPartitionsAfterOperations("abababababababab", 2), 3, 'Test 108');
test(maxPartitionsAfterOperations("xyzzzxyzzzxyzzz", 2), 6, 'Test 109');
test(maxPartitionsAfterOperations("abracadabraabracadabraabracadabra", 3), 8, 'Test 110');
test(maxPartitionsAfterOperations("abcdabcdbca", 3), 4, 'Test 111');
test(maxPartitionsAfterOperations("zzzzzabczzzzzdefzzzzzghizzzzzjklzzzzzmnopzzzzzqrstzzzzzuvwxyz", 26), 1, 'Test 112');
test(maxPartitionsAfterOperations("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 13), 4, 'Test 113');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

