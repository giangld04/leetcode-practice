// Test: 3458. Select K Disjoint Special Substrings
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { maxSubstringLength } = require("./solution");

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

console.log("\n3458. Select K Disjoint Special Substrings\n");

test(maxSubstringLength("single", 0), true, 'Test 1');
test(maxSubstringLength("abeabe", 0), true, 'Test 2');
test(maxSubstringLength("cdefdc", 3), false, 'Test 3');
test(maxSubstringLength("abacabadabacaba", 3), false, 'Test 4');
test(maxSubstringLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 2), true, 'Test 5');
test(maxSubstringLength("abcdbaefab", 2), true, 'Test 6');
test(maxSubstringLength("unique", 6), false, 'Test 7');
test(maxSubstringLength("xyzzxyzz", 1), false, 'Test 8');
test(maxSubstringLength("abcdefghijklmnopqrstuvwxyz", 26), true, 'Test 9');
test(maxSubstringLength("repeatedletters", 3), true, 'Test 10');
test(maxSubstringLength("mississippi", 1), true, 'Test 11');
test(maxSubstringLength("aaaaabbbbccccdddddeeeeeffffffggggghhhhhh", 6), true, 'Test 12');
test(maxSubstringLength("abcdefgabcdefgabcdefg", 3), false, 'Test 13');
test(maxSubstringLength("abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg", 7), false, 'Test 14');
test(maxSubstringLength("alphabet", 0), true, 'Test 15');
test(maxSubstringLength("xyzxyzxyzxyz", 1), false, 'Test 16');
test(maxSubstringLength("xyzxyzxyzxyzxyzxyzxyzxyz", 2), false, 'Test 17');
test(maxSubstringLength("zzzzzzzzzzzzzzzzzzzzzzzzzz", 0), true, 'Test 18');
test(maxSubstringLength("abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg", 7), false, 'Test 19');
test(maxSubstringLength("specialsubstringsspecialsubstring", 1), false, 'Test 20');
test(maxSubstringLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 13), true, 'Test 21');
test(maxSubstringLength("mnopqrstuvwxyzabcdefghijkl", 13), true, 'Test 22');
test(maxSubstringLength("banana", 2), true, 'Test 23');
test(maxSubstringLength("thisisanexamplestringwithnospacetospare", 0), true, 'Test 24');
test(maxSubstringLength("uniquecharactersaregreat", 5), true, 'Test 25');
test(maxSubstringLength("mnopqrspomn", 1), true, 'Test 26');
test(maxSubstringLength("zzzzzzzzzzzzzzzzzzzz", 0), true, 'Test 27');
test(maxSubstringLength("xyzxyzxyzxyzxyz", 5), false, 'Test 28');
test(maxSubstringLength("verylongstringwithvariouscharactersvariouscharactersvariouscharacters", 5), false, 'Test 29');
test(maxSubstringLength("qwertyuiopasdfghjklzxcvbnmqwerty", 10), true, 'Test 30');
test(maxSubstringLength("mississippi", 2), true, 'Test 31');
test(maxSubstringLength("qwertypoiuytrewqasdfghjklzxcvbnmasdfghjklzxcvbnm", 5), true, 'Test 32');
test(maxSubstringLength("abcdefghijklmnopqrstuvwxyza", 26), false, 'Test 33');
test(maxSubstringLength("pppppppppppppppppppp", 1), false, 'Test 34');
test(maxSubstringLength("abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef", 20), false, 'Test 35');
test(maxSubstringLength("mnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopq", 10), false, 'Test 36');
test(maxSubstringLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 26), true, 'Test 37');
test(maxSubstringLength("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyz", 1), false, 'Test 38');
test(maxSubstringLength("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", 4), false, 'Test 39');
test(maxSubstringLength("uniquecharactershere", 3), true, 'Test 40');
test(maxSubstringLength("thisisaverylongstringwithuniquecharacters", 15), false, 'Test 41');
test(maxSubstringLength("abcabcabcabcabcabcabcabcabcabcabc", 10), false, 'Test 42');
test(maxSubstringLength("verylongstringwithsomeuniquecharsandmanyrepeatsababababab", 4), true, 'Test 43');
test(maxSubstringLength("abcdeabcdeabcde", 5), false, 'Test 44');
test(maxSubstringLength("abacabadabacaba", 2), false, 'Test 45');
test(maxSubstringLength("abcdef", 0), true, 'Test 46');
test(maxSubstringLength("abracadabra", 3), false, 'Test 47');
test(maxSubstringLength("abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde", 5), false, 'Test 48');
test(maxSubstringLength("abcabcabc", 3), false, 'Test 49');
test(maxSubstringLength("abcabcabcabcabcabcabcabc", 3), false, 'Test 50');
test(maxSubstringLength("abcdabcdabcdabcdabcdabcd", 12), false, 'Test 51');
test(maxSubstringLength("abcdefghijabcdefghijabcdefghijabcdefghij", 5), false, 'Test 52');
test(maxSubstringLength("abacabadabacabadabacabad", 1), false, 'Test 53');
test(maxSubstringLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 10), true, 'Test 54');
test(maxSubstringLength("abcabcabcabcabcabc", 1), false, 'Test 55');
test(maxSubstringLength("aabbccddeeffgg", 7), true, 'Test 56');
test(maxSubstringLength("aaaaabbbbccccdddd", 4), true, 'Test 57');
test(maxSubstringLength("abacabadabacabad", 4), false, 'Test 58');
test(maxSubstringLength("onlyoneuniquecharx", 1), true, 'Test 59');
test(maxSubstringLength("abcdefghijklimnopqrstuvwxyz", 25), true, 'Test 60');
test(maxSubstringLength("aabbaaccdd", 2), true, 'Test 61');
test(maxSubstringLength("aaaabbbbccccdddd", 2), true, 'Test 62');
test(maxSubstringLength("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1), false, 'Test 63');
test(maxSubstringLength("abcdefgabcdefg", 7), false, 'Test 64');
test(maxSubstringLength("thisisaverylongstringwithnoseparatespecialsubstrings", 0), true, 'Test 65');
test(maxSubstringLength("abcdabcdabcdabcdabcdabcdabcdabcd", 4), false, 'Test 66');
test(maxSubstringLength("abababababababab", 1), false, 'Test 67');
test(maxSubstringLength("aaabbbcccdddeeefffggghhhiiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz", 13), true, 'Test 68');
test(maxSubstringLength("abcdefg", 3), true, 'Test 69');
test(maxSubstringLength("thisisaverylongstringwithsomeuniquerandomcharacters", 8), false, 'Test 70');
test(maxSubstringLength("abacabadabacaba", 1), true, 'Test 71');
test(maxSubstringLength("aaabbbccc", 3), true, 'Test 72');
test(maxSubstringLength("nooverlapstring", 0), true, 'Test 73');
test(maxSubstringLength("aaaaabbbbbcccccdddddeeeeee", 5), true, 'Test 74');
test(maxSubstringLength("abacabadaba", 3), false, 'Test 75');
test(maxSubstringLength("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad", 3), false, 'Test 76');
test(maxSubstringLength("abababababababababab", 10), false, 'Test 77');
test(maxSubstringLength("abacabadabacabad", 3), false, 'Test 78');
test(maxSubstringLength("abcabcabcabcabcabcabcabc", 1), false, 'Test 79');
test(maxSubstringLength("abcdabcdabcdabcdabcd", 4), false, 'Test 80');
test(maxSubstringLength("abcdefghiabcdefghij", 5), false, 'Test 81');
test(maxSubstringLength("mnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrstuvmnopqrs", 13), false, 'Test 82');
test(maxSubstringLength("abcdefghijabcdefghijabcdefghij", 9), false, 'Test 83');
test(maxSubstringLength("abcdabcdabcdabcdabcdabcdabcd", 4), false, 'Test 84');
test(maxSubstringLength("zzzyyyxxxwwwvvvuuutttsssrqqppoonnmmlkkkjjjiiihhhgggfffeeedddcccbbaaa", 13), true, 'Test 85');
test(maxSubstringLength("abcdabcdabcdabcdabcdabcd", 3), false, 'Test 86');
test(maxSubstringLength("mnopqrspqomn", 6), false, 'Test 87');
test(maxSubstringLength("xyxyxyxyxyxyxy", 1), false, 'Test 88');
test(maxSubstringLength("uniquelettersarehere", 10), false, 'Test 89');
test(maxSubstringLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 0), true, 'Test 90');
test(maxSubstringLength("abcdabcdeabcdefabcdefgabcdefgabcdef", 5), false, 'Test 91');
test(maxSubstringLength("hellotherehellothere", 3), false, 'Test 92');
test(maxSubstringLength("thisisaverylongstringwithrepeatedcharactersaaaaaaaaa", 5), true, 'Test 93');
test(maxSubstringLength("abcdefgabcdefgabcdefgabcdefgabcdefg", 7), false, 'Test 94');
test(maxSubstringLength("zyxwvutsrqponmlkjihgfedcba", 26), true, 'Test 95');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

