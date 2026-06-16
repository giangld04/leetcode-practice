// Test: 3298. Count Substrings That Can Be Rearranged To Contain A String Ii
// 68 test cases from LeetCodeDataset
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

console.log("\n3298. Count Substrings That Can Be Rearranged To Contain A String Ii\n");

test(validSubstringCount("bcca", "abc"), 1, 'Test 1');
test(validSubstringCount("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), 1, 'Test 2');
test(validSubstringCount("aabbcc", "abc"), 4, 'Test 3');
test(validSubstringCount("abcabcabcabc", "abcabc"), 28, 'Test 4');
test(validSubstringCount("hellothere", "oth"), 21, 'Test 5');
test(validSubstringCount("abcabc", "aaabc"), 0, 'Test 6');
test(validSubstringCount("aaaaaaa", "a"), 28, 'Test 7');
test(validSubstringCount("abcabc", "abc"), 10, 'Test 8');
test(validSubstringCount("mississippi", "issi"), 27, 'Test 9');
test(validSubstringCount("teststring", "ttt"), 5, 'Test 10');
test(validSubstringCount("abcabcabcabcabcabcabcabcabcabc", "abcabc"), 325, 'Test 11');
test(validSubstringCount("abacabadabacabadabacabadabacabad", "abacabad"), 325, 'Test 12');
test(validSubstringCount("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "mnopqrstuv"), 260, 'Test 13');
test(validSubstringCount("hellohellohellohellohello", "hello"), 231, 'Test 14');
test(validSubstringCount("xyzyzyzyzyzyzyzyzy", "zyx"), 16, 'Test 15');
test(validSubstringCount("cccccccaaaaaaaabbbbbbb", "abc"), 49, 'Test 16');
test(validSubstringCount("hellohellohellohello", "lohel"), 136, 'Test 17');
test(validSubstringCount("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc", "abcabcabc"), 1225, 'Test 18');
test(validSubstringCount("xyzzxyzzxyzz", "zzxy"), 45, 'Test 19');
test(validSubstringCount("abcdefghijabcdefghijabcdefghij", "abcdefghij"), 231, 'Test 20');
test(validSubstringCount("abcabcabcabcabcabcabc", "abcabc"), 136, 'Test 21');
test(validSubstringCount("longstringwithmanyvowelsaeiou", "aeiou"), 25, 'Test 22');
test(validSubstringCount("aaaabbbbcccc", "bbbaaccc"), 6, 'Test 23');
test(validSubstringCount("abcdabcdabcdabcd", "dcba"), 91, 'Test 24');
test(validSubstringCount("patternpatternpattern", "ternpat"), 120, 'Test 25');
test(validSubstringCount("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxy", "xyxyxyxy"), 276, 'Test 26');
test(validSubstringCount("abracadabra", "abra"), 25, 'Test 27');
test(validSubstringCount("abababababababababababab", "ab"), 276, 'Test 28');
test(validSubstringCount("xyzabcdexyzabcdef", "abcdef"), 12, 'Test 29');
test(validSubstringCount("xzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzy", "xzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzy"), 325, 'Test 30');
test(validSubstringCount("bbaaccdd", "abcd"), 4, 'Test 31');
test(validSubstringCount("thisisanotherexample", "another"), 61, 'Test 32');
test(validSubstringCount("aabbaabbaabbaabb", "aabb"), 91, 'Test 33');
test(validSubstringCount("banana", "nan"), 6, 'Test 34');
test(validSubstringCount("abcdefghijabcdefghij", "jihgfedcba"), 66, 'Test 35');
test(validSubstringCount("hellohellohello", "hello"), 66, 'Test 36');
test(validSubstringCount("aaaaaabbbbccccdddd", "bbbcccdddd"), 8, 'Test 37');
test(validSubstringCount("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"), 378, 'Test 38');
test(validSubstringCount("mnopqrlmnopqrlmnopqr", "mnopqr"), 108, 'Test 39');
test(validSubstringCount("abracadabra", "aca"), 29, 'Test 40');
test(validSubstringCount("randomstringwithsomerepeatedcharacters", "som"), 402, 'Test 41');
test(validSubstringCount("longwordwithmanysamecharactersllllllllllllllllllllllllllllllllllllllll", "lllllllll"), 1489, 'Test 42');
test(validSubstringCount("thisisaverylongstringthatneedsmanyvalidsubstrings", "this"), 565, 'Test 43');
test(validSubstringCount("abcdefghijklmnopqrstuvwxyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "z"), 1445, 'Test 44');
test(validSubstringCount("abababababababababab", "ab"), 190, 'Test 45');
test(validSubstringCount("pppppqqqqqrrrrrsssss", "pqrs"), 25, 'Test 46');
test(validSubstringCount("uniquestringwithoutrepeatedcharacters", "que"), 128, 'Test 47');
test(validSubstringCount("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "mnop"), 572, 'Test 48');
test(validSubstringCount("abcdefghijk", "jki"), 9, 'Test 49');
test(validSubstringCount("mississippiissi", "iss"), 76, 'Test 50');
test(validSubstringCount("xyzzxyzzxyzz", "xyzz"), 45, 'Test 51');
test(validSubstringCount("aaabbbccc", "abc"), 9, 'Test 52');
test(validSubstringCount("repeatedrepeatedrepeated", "repeated"), 153, 'Test 53');
test(validSubstringCount("repeatedpatternsrepeatedpatterns", "pattern"), 237, 'Test 54');
test(validSubstringCount("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zyxwvutsrqponmlkjihgfedcba"), 4, 'Test 55');
test(validSubstringCount("thisisaverylongstringthatcontainsmanywords", "word"), 76, 'Test 56');
test(validSubstringCount("repeatedrepeatedrepeated", "atedrep"), 159, 'Test 57');
test(validSubstringCount("thisisaverylongwordthatcontainsmanyletters", "verylong"), 224, 'Test 58');
test(validSubstringCount("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaa"), 595, 'Test 59');
test(validSubstringCount("ababababababababab", "ab"), 153, 'Test 60');
test(validSubstringCount("zzzzzzzzzzzzzzzzzzzzzzz", "zzzz"), 210, 'Test 61');
test(validSubstringCount("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "zzzzz"), 465, 'Test 62');
test(validSubstringCount("mississippiississim", "issi"), 117, 'Test 63');
test(validSubstringCount("abracadabra", "abr"), 31, 'Test 64');
test(validSubstringCount("oneonetwoonetwoone", "twoone"), 86, 'Test 65');
test(validSubstringCount("xyxyxyxyxyxyxyxyxyxy", "xyx"), 162, 'Test 66');
test(validSubstringCount("bbaaccaabbaaccaabbaaccaabb", "aabbaacc"), 190, 'Test 67');
test(validSubstringCount("zyxzyxzyxzyxzyx", "zyxzyx"), 55, 'Test 68');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

