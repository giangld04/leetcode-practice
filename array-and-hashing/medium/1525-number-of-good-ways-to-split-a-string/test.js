// Test: 1525. Number Of Good Ways To Split A String
// 81 test cases from LeetCodeDataset
// Run: node test.js

const { numSplits } = require("./solution");

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

console.log("\n1525. Number Of Good Ways To Split A String\n");

test(numSplits("xyzxyzxyz"), 4, 'Test 1');
test(numSplits("aabbcc"), 1, 'Test 2');
test(numSplits("abcde"), 0, 'Test 3');
test(numSplits("abcdefghij"), 1, 'Test 4');
test(numSplits("abcdefghijklmnopqrstuvwxyz"), 1, 'Test 5');
test(numSplits("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 1, 'Test 6');
test(numSplits("aabbccddeeffgghhiijj"), 1, 'Test 7');
test(numSplits("abacaba"), 0, 'Test 8');
test(numSplits("aacaba"), 2, 'Test 9');
test(numSplits("aabbbcc"), 2, 'Test 10');
test(numSplits("aaa"), 2, 'Test 11');
test(numSplits("abcd"), 1, 'Test 12');
test(numSplits("aaaaa"), 4, 'Test 13');
test(numSplits("xyz"), 0, 'Test 14');
test(numSplits("zyxwvutsrqponmlkjihgfedcba"), 1, 'Test 15');
test(numSplits("aabbccddeeff"), 1, 'Test 16');
test(numSplits("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 45, 'Test 17');
test(numSplits("abcdefghijklmnopqrstuvwxyzzxywvutsrqponmlkjihgfedcba"), 1, 'Test 18');
test(numSplits("aabacadaeafagahaiajakalalamanaoaopapaqaraasatauavaawaxayaza"), 0, 'Test 19');
test(numSplits("ababababababababababababababababababababababababab"), 47, 'Test 20');
test(numSplits("abacabadabacabadabacabad"), 12, 'Test 21');
test(numSplits("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzz"), 1, 'Test 22');
test(numSplits("aaaaaabbccdddeeffggghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 1, 'Test 23');
test(numSplits("abababababababababababababababababababababababababababababababababababababababab"), 77, 'Test 24');
test(numSplits("nnnnaaaaccccbbbbbddddnnnnaaaaccccbbbbbdddd"), 7, 'Test 25');
test(numSplits("thisisaverylongstringwithavarietyofcharactersandrepeatpatterns"), 3, 'Test 26');
test(numSplits("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 3, 'Test 27');
test(numSplits("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm"), 27, 'Test 28');
test(numSplits("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzqqqqqqqq"), 1, 'Test 29');
test(numSplits("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 30');
test(numSplits("abbaccddeeffaabbccddeeff"), 3, 'Test 31');
test(numSplits("aaabbbcccdddeeefffggghhhiiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz"), 1, 'Test 32');
test(numSplits("abacabadabacaba"), 0, 'Test 33');
test(numSplits("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadab"), 84, 'Test 34');
test(numSplits("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 89, 'Test 35');
test(numSplits("abracadabra"), 2, 'Test 36');
test(numSplits("abcabcabcabcabcabcabcabcabcabc"), 25, 'Test 37');
test(numSplits("pppppppppppppppppppppppppppppppppppppppppppppppp"), 47, 'Test 38');
test(numSplits("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 73, 'Test 39');
test(numSplits("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzyxwvutsrqponmlkjihgfedcba"), 2, 'Test 40');
test(numSplits("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 41');
test(numSplits("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 63, 'Test 42');
test(numSplits("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzyyxwwvvuutsrrqponmlkjihgfedcba"), 2, 'Test 43');
test(numSplits("abcdabcdabcdabcdabcdabcdabcdabcd"), 25, 'Test 44');
test(numSplits("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzabcdefghijklmnopqrstuvwxyz"), 2, 'Test 45');
test(numSplits("aaaaaaaaaabbbbbbbbbbccccccccccdddddddddd"), 1, 'Test 46');
test(numSplits("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyz"), 1, 'Test 47');
test(numSplits("mississississississippi"), 16, 'Test 48');
test(numSplits("abcdefghihgfedcba"), 0, 'Test 49');
test(numSplits("abracadabraabracadabraabracadabra"), 20, 'Test 50');
test(numSplits("pppppppppppppppppppppppppppppp"), 29, 'Test 51');
test(numSplits("11223344556677889900112233445566778899001122334455667788990011223344556677889900"), 43, 'Test 52');
test(numSplits("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 61, 'Test 53');
test(numSplits("mnbvcxzlkjhgfdsapoiuytrewqasdfghjklzxcvbnmmnbvcxzlkjhgfdsapoiuytrewq"), 17, 'Test 54');
test(numSplits("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), 68, 'Test 55');
test(numSplits("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 1, 'Test 56');
test(numSplits("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 1, 'Test 57');
test(numSplits("zyxwvutsrqponmlkjihgfedcbaedcba"), 1, 'Test 58');
test(numSplits("mississippimississippimississippimississippimississippi"), 36, 'Test 59');
test(numSplits("bacaabacababacaacbacaaacaaacaacbaaaacaacaaacaacaaacaaacaa"), 29, 'Test 60');
test(numSplits("abcdefghijklnmopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 1, 'Test 61');
test(numSplits("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 62');
test(numSplits("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 63');
test(numSplits("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 77, 'Test 64');
test(numSplits("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 51, 'Test 65');
test(numSplits("abracadabraabracadabraabracadabraabracadabraabracadabraabracadabra"), 53, 'Test 66');
test(numSplits("abbaccddeeffaabbccddeeffaabbccddeeff"), 15, 'Test 67');
test(numSplits("nnnnaaaaccccbbbbbdddd"), 3, 'Test 68');
test(numSplits("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 79, 'Test 69');
test(numSplits("mississippi"), 4, 'Test 70');
test(numSplits("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz"), 1, 'Test 71');
test(numSplits("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba"), 0, 'Test 72');
test(numSplits("aaabbbcccddd"), 1, 'Test 73');
test(numSplits("abababababababababababababababababababababababababababa"), 52, 'Test 74');
test(numSplits("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 81, 'Test 75');
test(numSplits("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcde"), 1, 'Test 76');
test(numSplits("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 73, 'Test 77');
test(numSplits("abcdabcdabcdabcdabcdabcdabcd"), 21, 'Test 78');
test(numSplits("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 49, 'Test 79');
test(numSplits("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 53, 'Test 80');
test(numSplits("aabbaabbaabbaabb"), 11, 'Test 81');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

