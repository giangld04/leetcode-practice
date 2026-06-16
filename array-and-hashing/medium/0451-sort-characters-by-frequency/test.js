// Test: 451. Sort Characters By Frequency
// 59 test cases from LeetCodeDataset
// Run: node test.js

const { frequencySort } = require("./solution");

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

console.log("\n451. Sort Characters By Frequency\n");

test(frequencySort("aA"), aA, 'Test 1');
test(frequencySort("2a554442f544asf"), 4444455522aaffs, 'Test 2');
test(frequencySort("2a554442f544asfasss"), 44444ssssaaa55522ff, 'Test 3');
test(frequencySort("zzzzZZZZ"), zzzzZZZZ, 'Test 4');
test(frequencySort("bbaaccdd"), bbaaccdd, 'Test 5');
test(frequencySort("1223334444"), 4444333221, 'Test 6');
test(frequencySort("cccaaa"), cccaaa, 'Test 7');
test(frequencySort("tree"), eetr, 'Test 8');
test(frequencySort("aAaaaAaA"), aaaaaAAA, 'Test 9');
test(frequencySort("a"), a, 'Test 10');
test(frequencySort("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 11');
test(frequencySort(""), , 'Test 12');
test(frequencySort("aAaaaAaaAAaAa"), aaaaaaaaAAAAA, 'Test 13');
test(frequencySort("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 14');
test(frequencySort("aAaaaAaaAA"), aaaaaaAAAA, 'Test 15');
test(frequencySort("Aabb"), bbAa, 'Test 16');
test(frequencySort("1234567890"), 1234567890, 'Test 17');
test(frequencySort("bbaacc"), bbaacc, 'Test 18');
test(frequencySort("aabbccddeeffgghhiiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), iiiaabbccddeeffgghhjjkkllmmnnooppqqrrssttuuvvwwxxyyzz, 'Test 19');
test(frequencySort("aaaabbbbccccddddeeeeffffgggghhhhiiiiiiijjjjjjjjjkkkkkkkkkkllllllllllllmmmmmmmmmmmmm"), mmmmmmmmmmmmmllllllllllllkkkkkkkkkkjjjjjjjjjiiiiiiiaaaabbbbccccddddeeeeffffgggghhhh, 'Test 20');
test(frequencySort("!@#$%^&*[]_+{}|:"<>?abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"), Error: Solution.frequencySort[] missing 1 required positional argument: 's', 'Test 21');
test(frequencySort("abcdefghijklmnopqrstuvwxyz"), abcdefghijklmnopqrstuvwxyz, 'Test 22');
test(frequencySort("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 23');
test(frequencySort("aabbccddeeffgghhiiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz!@#$%^&*[]_+~`|}{[]\:";'?><,./-=0987654321"), Error: Solution.frequencySort[] missing 1 required positional argument: 's', 'Test 24');
test(frequencySort("aabbccddeeffgghhiiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzAA"), iiiaabbccddeeffgghhjjkkllmmnnooppqqrrssttuuvvwwxxyyzzAA, 'Test 25');
test(frequencySort("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"), AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz, 'Test 26');
test(frequencySort("a1b2c3d4e5f6g7h8i9j0a1b2c3d4e5f6g7h8i9j0a1b2c3d4e5f6g7h8i9j0"), aaa111bbb222ccc333ddd444eee555fff666ggg777hhh888iii999jjj000, 'Test 27');
test(frequencySort("eLeetCoDe"), eeeeLtCoD, 'Test 28');
test(frequencySort("!!!!!!@@@@@@########$$$$$$$&&&&&&&&&&[[[[[[]]]]]]]"), &&&&&&&&&&########$$$$$$$]]]]]]]!!!!!!@@@@@@[[[[[[, 'Test 29');
test(frequencySort("112233445566778899001122334455"), 111122223333444455556677889900, 'Test 30');
test(frequencySort("abcABC123abcABC123abcABC"), aaabbbcccAAABBBCCC112233, 'Test 31');
test(frequencySort("anagram"), aaangrm, 'Test 32');
test(frequencySort("a1b2c3d4e5f6g7h8i9j0A1B2C3D4E5F6G7H8I9J0"), 11223344556677889900abcdefghijABCDEFGHIJ, 'Test 33');
test(frequencySort("frequencysorttestcase"), eeeessstttrrccfqunyoa, 'Test 34');
test(frequencySort("frequencySort"), rreefquncySot, 'Test 35');
test(frequencySort("aaaaaaaaaabbccccdddd"), aaaaaaaaaaccccddddbb, 'Test 36');
test(frequencySort("leetcode"), eeeltcod, 'Test 37');
test(frequencySort("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzAABBCCDDEEFFGGHHIİJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ"), aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzAABBCCDDEEFFGGHHKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZIİJ, 'Test 38');
test(frequencySort("thisisaverylongtestcasewithmixedcharacters1234567890!@#$%^&*[]"), tttttssssseeeeeiiiiaaaahhhrrrcccvylongwmxd1234567890!@#$%^&*[], 'Test 39');
test(frequencySort("ZzYyXxWwVvUuTtSsRrQqPpOoNnMmLlKkJjIiHhGgFfEeDdCcBbAa1234567890"), ZzYyXxWwVvUuTtSsRrQqPpOoNnMmLlKkJjIiHhGgFfEeDdCcBbAa1234567890, 'Test 40');
test(frequencySort("abcABC123xyzXYZ!@#"), abcABC123xyzXYZ!@#, 'Test 41');
test(frequencySort("01233210"), 00112233, 'Test 42');
test(frequencySort("!@#$%^&*[]_+~`|}{[]\:";'?><,./-=0987654321"), Error: Solution.frequencySort[] missing 1 required positional argument: 's', 'Test 43');
test(frequencySort("aabbccddeeffgghhiiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzABCDEFGHIJKLMNOPQRSTUVWXYZ"), iiiaabbccddeeffgghhjjkkllmmnnooppqqrrssttuuvvwwxxyyzzABCDEFGHIJKLMNOPQRSTUVWXYZ, 'Test 44');
test(frequencySort("111222333444555666777888999000"), 111222333444555666777888999000, 'Test 45');
test(frequencySort("repeatedcharactersaretestedhere"), eeeeeeeeerrrrraaaattttddcchhssp, 'Test 46');
test(frequencySort("aaAAbbBBccCCddDDeeEEffFFggGGhhHHiiIIjjJJkkKKllLLmmMMnnNNooppQQrrSSttUUvvWWxxYYzzZZ"), aaAAbbBBccCCddDDeeEEffFFggGGhhHHiiIIjjJJkkKKllLLmmMMnnNNooppQQrrSSttUUvvWWxxYYzzZZ, 'Test 47');
test(frequencySort("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ, 'Test 48');
test(frequencySort("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*[]_+{}|:"<>?"), Error: Solution.frequencySort[] missing 1 required positional argument: 's', 'Test 49');
test(frequencySort("mississippi"), iiiissssppm, 'Test 50');
test(frequencySort("bbaaccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz!@#$%^&*[]_+{}|:"<>?"), Error: Solution.frequencySort[] missing 1 required positional argument: 's', 'Test 51');
test(frequencySort("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz1234567890"), aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz1234567890, 'Test 52');
test(frequencySort("aabbccddeeffgghhiiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz1234567890"), iiiaabbccddeeffgghhjjkkllmmnnooppqqrrssttuuvvwwxxyyzz1234567890, 'Test 53');
test(frequencySort("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz, 'Test 54');
test(frequencySort("Mississippi"), iiiissssppM, 'Test 55');
test(frequencySort("aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA"), aaaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAAAA, 'Test 56');
test(frequencySort("123456789012345678901234567890"), 111222333444555666777888999000, 'Test 57');
test(frequencySort("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 58');
test(frequencySort("zyxwvutsrqponmlkjihgfedcba"), zyxwvutsrqponmlkjihgfedcba, 'Test 59');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

