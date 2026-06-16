// Test: 3297. Count Substrings That Can Be Rearranged To Contain A String I
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { validSubstringCount } = require("./solution");

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

console.log("\n3297. Count Substrings That Can Be Rearranged To Contain A String I\n");

test(validSubstringCount("banana", "ban"), 4, 'Test 1');
test(validSubstringCount("abc", "abcd"), 0, 'Test 2');
test(validSubstringCount("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), 1, 'Test 3');
test(validSubstringCount("aaaabc", "aaa"), 7, 'Test 4');
test(validSubstringCount("mississippi", "issi"), 27, 'Test 5');
test(validSubstringCount("abcabc", "aaabc"), 0, 'Test 6');
test(validSubstringCount("abababab", "aba"), 18, 'Test 7');
test(validSubstringCount("abcabc", "abc"), 10, 'Test 8');
test(validSubstringCount("aaaaaaaaaaa", "aaaa"), 36, 'Test 9');
test(validSubstringCount("zzzzzzzz", "zzz"), 21, 'Test 10');
test(validSubstringCount("a", ""), Error: string index out of range, 'Test 11');
test(validSubstringCount("abcdeabcde", "abc"), 26, 'Test 12');
test(validSubstringCount("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zyxwvutsrqponmlkjihgfedcba"), 4, 'Test 13');
test(validSubstringCount("", "a"), 0, 'Test 14');
test(validSubstringCount("bcca", "abc"), 1, 'Test 15');
test(validSubstringCount("aaa", "a"), 6, 'Test 16');
test(validSubstringCount("aabbcc", "abc"), 4, 'Test 17');
test(validSubstringCount("xyz", "xyz"), 1, 'Test 18');
test(validSubstringCount("abcabcabcabc", "abcabc"), 28, 'Test 19');
test(validSubstringCount("aaaa", "aa"), 6, 'Test 20');
test(validSubstringCount("abcdabcd", "abcd"), 15, 'Test 21');
test(validSubstringCount("zzzzzzzzzzzzzzzzzzzz", "zzz"), 171, 'Test 22');
test(validSubstringCount("abababababababababab", "ababab"), 120, 'Test 23');
test(validSubstringCount("abcabcabcabcabcabc", "abcabc"), 91, 'Test 24');
test(validSubstringCount("overlappingprefixoverlappingprefix", "overlappingprefix"), 171, 'Test 25');
test(validSubstringCount("supercalifragilisticexpialidocious", "califragilisticexpialidocious"), 8, 'Test 26');
test(validSubstringCount("xzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzy", "xyz"), 5356, 'Test 27');
test(validSubstringCount("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "mnopqrstuvwxyzaabbccddeeff"), 2, 'Test 28');
test(validSubstringCount("abracadabra", "abra"), 25, 'Test 29');
test(validSubstringCount("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzz"), 1176, 'Test 30');
test(validSubstringCount("ababababababababababababababababab", "ababab"), 435, 'Test 31');
test(validSubstringCount("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", "abcabc"), 1081, 'Test 32');
test(validSubstringCount("aabbccddeeff", "abcdef"), 4, 'Test 33');
test(validSubstringCount("thisisaverylongstringtocheck", "verylong"), 112, 'Test 34');
test(validSubstringCount("aaaaabaaaabaaaaaaaabaaaabaaaaabaaaabaaaaabaaaabaaaaabaaaaabaaaaabaaaabaaaaabaaaaabaaaaabaaaaaab", "aaab"), 4225, 'Test 35');
test(validSubstringCount("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), 378, 'Test 36');
test(validSubstringCount("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", "abcdabcd"), 561, 'Test 37');
test(validSubstringCount("abcdabcdabcdabcdabcdabcdabcdabcdabcd", "abcdabcd"), 435, 'Test 38');
test(validSubstringCount("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm", "qwertyuiopasdfghjklzxcvbnm"), 378, 'Test 39');
test(validSubstringCount("aaaaaaaaaabbbbbbbbbbccccccccccdddddddddd", "abcd"), 100, 'Test 40');
test(validSubstringCount("xyxxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyx", "xyxy"), 1538, 'Test 41');
test(validSubstringCount("repeatedprefixprefixprefixprefix", "prefix"), 342, 'Test 42');
test(validSubstringCount("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijklmnopqrstuv"), 20, 'Test 43');
test(validSubstringCount("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm", "qwerty"), 608, 'Test 44');
test(validSubstringCount("abcabcabcabcabcabcabcabc", "abcabc"), 190, 'Test 45');
test(validSubstringCount("repeatedrepeatedrepeated", "repeatedrepeated"), 45, 'Test 46');
test(validSubstringCount("thisisaverylongwordthatcontainsmultipleoccurrencesofthesubstring", "substring"), 146, 'Test 47');
test(validSubstringCount("ababababab", "abab"), 28, 'Test 48');
test(validSubstringCount("aabbccddeeffaabbccddeeffaabbccddeeff", "aabbccdd"), 349, 'Test 49');
test(validSubstringCount("mississippimississippi", "issi"), 161, 'Test 50');
test(validSubstringCount("racecar", "race"), 7, 'Test 51');
test(validSubstringCount("hellohellohello", "hell"), 69, 'Test 52');
test(validSubstringCount("zzzzzzzzzz", "zzz"), 36, 'Test 53');
test(validSubstringCount("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "mnopqrstuvwxzy"), 52, 'Test 54');
test(validSubstringCount("twoprefixtwoprefixtwoprefix", "twoprefix"), 190, 'Test 55');
test(validSubstringCount("shortword", "word"), 6, 'Test 56');
test(validSubstringCount("threeprefixthreeprefixthreeprefix", "threeprefix"), 276, 'Test 57');
test(validSubstringCount("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijklmnopqrstuvwxyz"), 4, 'Test 58');
test(validSubstringCount("abababababababababababababababababababababababababababababa", "bab"), 1624, 'Test 59');
test(validSubstringCount("abcdeabcdeabcdeabcdeabcde", "abcde"), 231, 'Test 60');
test(validSubstringCount("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "mnopqrstuvwxyz"), 52, 'Test 61');
test(validSubstringCount("hellohellohellohellohello", "lohel"), 231, 'Test 62');
test(validSubstringCount("abcabcabcabcabcabcabcabcabcabc", "abcabc"), 325, 'Test 63');
test(validSubstringCount("ababababababababababab", "bababa"), 153, 'Test 64');
test(validSubstringCount("oneprefixoneprefixoneprefix", "oneprefix"), 190, 'Test 65');
test(validSubstringCount("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzz"), 946, 'Test 66');
test(validSubstringCount("aaaaaaaaaa", "aa"), 45, 'Test 67');
test(validSubstringCount("ababababababababababababababababababababababababa", "ab"), 1176, 'Test 68');
test(validSubstringCount("xylophone", "phone"), 5, 'Test 69');
test(validSubstringCount("qwertyuiopasdfghjklzxcvbnm", "zxcvbnm"), 20, 'Test 70');
test(validSubstringCount("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaa"), 1176, 'Test 71');
test(validSubstringCount("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "zyxcba"), 588, 'Test 72');
test(validSubstringCount("abracadabraabracadabraabracadabra", "abrac"), 375, 'Test 73');
test(validSubstringCount("thisisaverylongstringwithrepeatingcharacters", "repeating"), 391, 'Test 74');
test(validSubstringCount("xyzzxyzzxyzz", "xyzz"), 45, 'Test 75');
test(validSubstringCount("abcdefghijabcdefghij", "abcdefghij"), 66, 'Test 76');
test(validSubstringCount("abracadabraabracadabra", "abracadabra"), 78, 'Test 77');
test(validSubstringCount("testingtestingtestingtesting", "testingtesting"), 120, 'Test 78');
test(validSubstringCount("thisisaverylongstringthatcontainssomeprefixsomewhere", "somewhere"), 183, 'Test 79');
test(validSubstringCount("mississippi", "iss"), 38, 'Test 80');
test(validSubstringCount("thisisanexamplestringfortesting", "example"), 159, 'Test 81');
test(validSubstringCount("hellohellohellohellohellohellohellohello", "hellohello"), 496, 'Test 82');
test(validSubstringCount("alphabet", "beta"), 5, 'Test 83');
test(validSubstringCount("zyxwvutsrqponmlkjihgfedcba", "abcdefghijklmnopqrstuvwxyz"), 1, 'Test 84');
test(validSubstringCount("xyzxyzxyzxyzxyzxyz", "zyxzyx"), 91, 'Test 85');
test(validSubstringCount("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", "abc"), 4465, 'Test 86');
test(validSubstringCount("hellohellohellohellohellohellohellohellohellohellohello", "hello"), 1326, 'Test 87');
test(validSubstringCount("abacabadabacaba", "abaca"), 56, 'Test 88');
test(validSubstringCount("verylongstringwithmanymatchingprefixes", "prefix"), 93, 'Test 89');
test(validSubstringCount("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzz"), 1431, 'Test 90');
test(validSubstringCount("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzz"), 5151, 'Test 91');
test(validSubstringCount("pppppppppppppppppppppppppppppppppppppppppppppppppppppppppp", "ppppppp"), 1378, 'Test 92');
test(validSubstringCount("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcde"), 88, 'Test 93');
test(validSubstringCount("onetwothreefourfivesixseveneightnine", "threefour"), 164, 'Test 94');
test(validSubstringCount("abababababababababababababababababab", "aba"), 578, 'Test 95');
test(validSubstringCount("aaabbbcccdddeeefffggghhhiiiijjjjkkkkllllmmmmnnnnooopppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz", "mnopqrstuvwxyz"), 176, 'Test 96');
test(validSubstringCount("aaaaaaaaaa", "aaaaa"), 21, 'Test 97');
test(validSubstringCount("abcabcabcabcabcabcabcabcabcabc", "abcabcabc"), 253, 'Test 98');
test(validSubstringCount("qwertyuiopasdfghjklzxcvbnm", "abcdefghijklmnopqrstuvwxyz"), 1, 'Test 99');
test(validSubstringCount("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd", "abcdabcdabcd"), 1431, 'Test 100');
test(validSubstringCount("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "mnop"), 572, 'Test 101');
test(validSubstringCount("loooooooooooooooooooongwordwithrepeatedletters", "oooooo"), 557, 'Test 102');
test(validSubstringCount("almostmatchingprefixalmostmatchingprefix", "almostmatching"), 259, 'Test 103');
test(validSubstringCount("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz", "xyzxyz"), 496, 'Test 104');
test(validSubstringCount("12345678901234567890", "9087654321"), 66, 'Test 105');
test(validSubstringCount("uniquecharacters", "characters"), 7, 'Test 106');
test(validSubstringCount("abcdefghijklmnopqrstuvwxyz", "zyx"), 24, 'Test 107');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

