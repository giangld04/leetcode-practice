// Test: 1781. Sum Of Beauty Of All Substrings
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { beautySum } = require("./solution");

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

console.log("\n1781. Sum Of Beauty Of All Substrings\n");

test(beautySum("xyzzxyzzxyzz"), 87, 'Test 1');
test(beautySum("aaabbbccc"), 29, 'Test 2');
test(beautySum("aabcb"), 5, 'Test 3');
test(beautySum("abcdefghijklmnopqrstuvwxyz"), 0, 'Test 4');
test(beautySum("abcdedcba"), 16, 'Test 5');
test(beautySum("a"), 0, 'Test 6');
test(beautySum("abcabcabc"), 16, 'Test 7');
test(beautySum("zzzz"), 0, 'Test 8');
test(beautySum("aabcbaa"), 17, 'Test 9');
test(beautySum("pqrspqrspqrspqrs"), 63, 'Test 10');
test(beautySum("qwertyuiopasdfghjklzxcvbnm"), 0, 'Test 11');
test(beautySum("xyzxyzxyz"), 16, 'Test 12');
test(beautySum("abcdabcdabcd"), 30, 'Test 13');
test(beautySum("abc"), 0, 'Test 14');
test(beautySum("xyzzxyzz"), 25, 'Test 15');
test(beautySum("abcd"), 0, 'Test 16');
test(beautySum("aabbccddeeff"), 40, 'Test 17');
test(beautySum("zzzzz"), 0, 'Test 18');
test(beautySum("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 950, 'Test 19');
test(beautySum("abcdefg"), 0, 'Test 20');
test(beautySum("aaaabbbbccccddddeeeeffffgggghhhhiiii"), 1112, 'Test 21');
test(beautySum("abcdefghijabcdefghijabcdefghijabcdefghij"), 432, 'Test 22');
test(beautySum("pqrstuvwxyzabcdefghijklmno"), 0, 'Test 23');
test(beautySum("abccbaabccbaabccbaabccba"), 222, 'Test 24');
test(beautySum("verycomplicatedstringwithrepeatedcharactersrepeatedrepeated"), 5556, 'Test 25');
test(beautySum("mississippimississippimississippimississippi"), 4387, 'Test 26');
test(beautySum("abracadabra"), 64, 'Test 27');
test(beautySum("abacabadabacabadabacabadabacabad"), 2236, 'Test 28');
test(beautySum("abacabadabacabadabacabadabacabadabacabadabacabadabacaba"), 11131, 'Test 29');
test(beautySum("abcabcabcabc"), 33, 'Test 30');
test(beautySum("xzyxzxyzxyz"), 34, 'Test 31');
test(beautySum("abcdefabcdeabcdeabcde"), 183, 'Test 32');
test(beautySum("aabacababa"), 66, 'Test 33');
test(beautySum("zzzzzzzzzz"), 0, 'Test 34');
test(beautySum("abcdefghijklmabcdefghijklm"), 90, 'Test 35');
test(beautySum("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"), 1170, 'Test 36');
test(beautySum("abababababababababababababababab"), 240, 'Test 37');
test(beautySum("abcabcabcabcabcabcabcabcabcabcabcabcabc"), 456, 'Test 38');
test(beautySum("mississippiissiippiisppiiiiiiii"), 1732, 'Test 39');
test(beautySum("abacabadabacabadabacabadabacaba"), 2047, 'Test 40');
test(beautySum("thisisaverylongandcomplicatedstringwithvariouscharacters"), 2645, 'Test 41');
test(beautySum("mnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba"), 325, 'Test 42');
test(beautySum("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 513, 'Test 43');
test(beautySum("kayak"), 4, 'Test 44');
test(beautySum("abcabcabcabcabcabcabcabcabcabc"), 261, 'Test 45');
test(beautySum("xyzzzzxyzzzzxyzzzzxyzzzz"), 1254, 'Test 46');
test(beautySum("ababababababab"), 42, 'Test 47');
test(beautySum("abcdefghijklmnopqrstuvwxyza"), 1, 'Test 48');
test(beautySum("abcdefabcdefabcdefabcdefabcdefabcdef"), 400, 'Test 49');
test(beautySum("abcdabcdabcdabcd"), 63, 'Test 50');
test(beautySum("level"), 4, 'Test 51');
test(beautySum("ppppppppppppppppppppppppppppppppppqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"), 13090, 'Test 52');
test(beautySum("xyzzyxzyxzyzyx"), 87, 'Test 53');
test(beautySum("pqrsrstsrqpqrs"), 102, 'Test 54');
test(beautySum("madam"), 4, 'Test 55');
test(beautySum("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 1053, 'Test 56');
test(beautySum("qwertyuiopasdfghjklzxcvbnmqwerty"), 21, 'Test 57');
test(beautySum("xyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 2450, 'Test 58');
test(beautySum("aaaabbbbccccddddeeeeffffgggg"), 630, 'Test 59');
test(beautySum("abacabadabacaba"), 231, 'Test 60');
test(beautySum("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy"), 702, 'Test 61');
test(beautySum("abacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabadabacabad"), 44628, 'Test 62');
test(beautySum("xyzzazxzy"), 45, 'Test 63');
test(beautySum("abababababababababababababababababababababababab"), 552, 'Test 64');
test(beautySum("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 65');
test(beautySum("aaaaaaaaaabbbbbbbbbbcccccccccc"), 1275, 'Test 66');
test(beautySum("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 1350, 'Test 67');
test(beautySum("zzzzzzzzzzzzzzzzzzzz"), 0, 'Test 68');
test(beautySum("aabbccddeeffgghhiijjaabbccddeeffgghhiijjaabbccddeeffgghhiijj"), 2118, 'Test 69');
test(beautySum("bananaananabananananabananananananananananananana"), 7610, 'Test 70');
test(beautySum("mnbvcxzlkjhgfdsapoiuytrewq"), 0, 'Test 71');
test(beautySum("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 72');
test(beautySum("banana"), 8, 'Test 73');
test(beautySum("xyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzz"), 11722, 'Test 74');
test(beautySum("mnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrsmnopqrs"), 1071, 'Test 75');
test(beautySum("aabbccddeeefffggghhhiiijjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxxyyyzzz"), 4312, 'Test 76');
test(beautySum("aaaaabbbbccccddddeeeffffggghhh"), 782, 'Test 77');
test(beautySum("nnnnoonnmnmlmllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll"), 33629, 'Test 78');
test(beautySum("aaaabbbbccccdddd"), 162, 'Test 79');
test(beautySum("abacabadabacabadabacabad"), 948, 'Test 80');
test(beautySum("deified"), 9, 'Test 81');
test(beautySum("zzzzzzzzzzzzzzzzz"), 0, 'Test 82');
test(beautySum("repaper"), 9, 'Test 83');
test(beautySum("xyzzzzzxyzzzzzxyzzzzzxyzzzzzxyzzzzzxyzzzzzxyzzzzzxyzzzzz"), 17541, 'Test 84');
test(beautySum("aabbaaabbbaaabbaaaabbbaaabbaaaabbbaaabbaaaabbbaaabbaaaab"), 5129, 'Test 85');
test(beautySum("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzz"), 11950, 'Test 86');
test(beautySum("aabbccddeeffgghhiijjanmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), 1979, 'Test 87');
test(beautySum("abababababababababababab"), 132, 'Test 88');
test(beautySum("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm"), 350, 'Test 89');
test(beautySum("rotor"), 4, 'Test 90');
test(beautySum("racecar"), 9, 'Test 91');
test(beautySum("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz"), 320, 'Test 92');
test(beautySum("abcabcabcabcabcabcabcabc"), 161, 'Test 93');
test(beautySum("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 350, 'Test 94');
test(beautySum("reviled"), 4, 'Test 95');
test(beautySum("mnopqrnopqmonmnopq"), 145, 'Test 96');
test(beautySum("abacabadaba"), 85, 'Test 97');
test(beautySum("mississippi"), 64, 'Test 98');
test(beautySum("aaaaabbbbccccddddeeeffffgggghhhhiiiiijjjjkkkkllllmmmmmnnnnnooooo"), 4941, 'Test 99');
test(beautySum("abcabcabcabcabc"), 56, 'Test 100');
test(beautySum("xyzzzzzxyzzzzzxyzzzzz"), 936, 'Test 101');
test(beautySum("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 0, 'Test 102');
test(beautySum("refer"), 4, 'Test 103');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

