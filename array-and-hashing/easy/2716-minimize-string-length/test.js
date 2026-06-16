// Test: 2716. Minimize String Length
// 112 test cases from LeetCodeDataset
// Run: node test.js

const { minimizedStringLength } = require("./solution");

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

console.log("\n2716. Minimize String Length\n");

test(minimizedStringLength("aaabc"), 3, 'Test 1');
test(minimizedStringLength("abcdefghijklmnopqrstuvwxyz"), 26, 'Test 2');
test(minimizedStringLength("a"), 1, 'Test 3');
test(minimizedStringLength("abacabadabacaba"), 4, 'Test 4');
test(minimizedStringLength("abcabcabc"), 3, 'Test 5');
test(minimizedStringLength("zzzz"), 1, 'Test 6');
test(minimizedStringLength("cbbd"), 3, 'Test 7');
test(minimizedStringLength("abcabc"), 3, 'Test 8');
test(minimizedStringLength("xyz"), 3, 'Test 9');
test(minimizedStringLength("aabb"), 2, 'Test 10');
test(minimizedStringLength("world"), 5, 'Test 11');
test(minimizedStringLength("zyxzyxzyx"), 3, 'Test 12');
test(minimizedStringLength("baadccab"), 4, 'Test 13');
test(minimizedStringLength("abcd"), 4, 'Test 14');
test(minimizedStringLength("hello"), 4, 'Test 15');
test(minimizedStringLength("abcdeabcde"), 5, 'Test 16');
test(minimizedStringLength("aabbcc"), 3, 'Test 17');
test(minimizedStringLength("zzzzz"), 1, 'Test 18');
test(minimizedStringLength("programming"), 8, 'Test 19');
test(minimizedStringLength("aabbccdd"), 4, 'Test 20');
test(minimizedStringLength("abcdefg"), 7, 'Test 21');
test(minimizedStringLength("aaaaaabbbbbcccccdddddeeeeeffffffggggg"), 7, 'Test 22');
test(minimizedStringLength("xyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzzxyzz"), 3, 'Test 23');
test(minimizedStringLength("abracadabra"), 5, 'Test 24');
test(minimizedStringLength("abcabcabcabc"), 3, 'Test 25');
test(minimizedStringLength("tattarrattat"), 3, 'Test 26');
test(minimizedStringLength("abcdefghigklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 26, 'Test 27');
test(minimizedStringLength("abracadabraabracadabraabracadabraabracadabra"), 5, 'Test 28');
test(minimizedStringLength("nervosysystem"), 9, 'Test 29');
test(minimizedStringLength("bbaaccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 26, 'Test 30');
test(minimizedStringLength("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), 3, 'Test 31');
test(minimizedStringLength("abcdefghijabcdefghijabcdefghij"), 10, 'Test 32');
test(minimizedStringLength("aaaaabbbbccccdddd"), 4, 'Test 33');
test(minimizedStringLength("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), 26, 'Test 34');
test(minimizedStringLength("xyzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxz"), 3, 'Test 35');
test(minimizedStringLength("fakemakesfakeakesakesakefake"), 6, 'Test 36');
test(minimizedStringLength("abcabcabcabcabcabcabc"), 3, 'Test 37');
test(minimizedStringLength("kayak"), 3, 'Test 38');
test(minimizedStringLength("aaaabbbbccccdddeeefffggghhhhiiijjjjkkkkllllmmmmmnnnnnooooo"), 15, 'Test 39');
test(minimizedStringLength("xyzzzxyyyxyxxxyyxx"), 3, 'Test 40');
test(minimizedStringLength("mnopqrspomnopqrspomnopqrspomnopqrspomnopqrspomnopqrspomnopqrspomn"), 7, 'Test 41');
test(minimizedStringLength("aabcccccaaaa"), 3, 'Test 42');
test(minimizedStringLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzyyyy"), 26, 'Test 43');
test(minimizedStringLength("abracadabraabracadabraabracadabra"), 5, 'Test 44');
test(minimizedStringLength("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 26, 'Test 45');
test(minimizedStringLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzz"), 26, 'Test 46');
test(minimizedStringLength("noon"), 2, 'Test 47');
test(minimizedStringLength("abcdefghijkabcdefghi"), 11, 'Test 48');
test(minimizedStringLength("ababababababababab"), 2, 'Test 49');
test(minimizedStringLength("abcdefghijkabcdefghijk"), 11, 'Test 50');
test(minimizedStringLength("nanaanananananananana"), 2, 'Test 51');
test(minimizedStringLength("abcdefghijkabcdefghijkabcdefghijk"), 11, 'Test 52');
test(minimizedStringLength("abcdabcdabcdabcd"), 4, 'Test 53');
test(minimizedStringLength("level"), 3, 'Test 54');
test(minimizedStringLength("abababababababababababababab"), 2, 'Test 55');
test(minimizedStringLength("aaaaabbbbbbccccccccdddddddd"), 4, 'Test 56');
test(minimizedStringLength("zzzyyyyyxxxxwwwvvvuuutttsssrrqqppoonnmmmlllkkkjjjiiihhggffeeddccbbaa"), 26, 'Test 57');
test(minimizedStringLength("xyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 3, 'Test 58');
test(minimizedStringLength("abababababababababab"), 2, 'Test 59');
test(minimizedStringLength("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 60');
test(minimizedStringLength("xyxyxyxyxyxyxyxyxyxy"), 2, 'Test 61');
test(minimizedStringLength("abcdefghijkabcdefg"), 11, 'Test 62');
test(minimizedStringLength("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 1, 'Test 63');
test(minimizedStringLength("zzzzzzzzzzzzzzzzzzzz"), 1, 'Test 64');
test(minimizedStringLength("xyzzzzyx"), 3, 'Test 65');
test(minimizedStringLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzabcdefghijklmnopqrstuvwxyz"), 26, 'Test 66');
test(minimizedStringLength("hellohellohellohellohellohellohellohellohellohello"), 4, 'Test 67');
test(minimizedStringLength("aabaaabbbcccddddeeeeffffgggghhhhiiiiijjjjkkkklllmmnnnnooopppqqrrrsssttttuuuuvvvvwwwwxxxxxyyyyzzzz"), 26, 'Test 68');
test(minimizedStringLength("abcdefgabcdefgabcdefgabcdefgabcdefg"), 7, 'Test 69');
test(minimizedStringLength("aabbccddeeefffggghhhhiiiiijjjjjkkkkklmmmmmnnnnnoooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz"), 26, 'Test 70');
test(minimizedStringLength("banana"), 3, 'Test 71');
test(minimizedStringLength("thisisaverylongstringwithseveralcharacters"), 15, 'Test 72');
test(minimizedStringLength("thisisaverylongstringwithmanyalphabetsandduplicates"), 20, 'Test 73');
test(minimizedStringLength("aaaaaabbbbbbccccccdddddeeeeeeffffffff"), 6, 'Test 74');
test(minimizedStringLength("ababababababababababababab"), 2, 'Test 75');
test(minimizedStringLength("elephant"), 7, 'Test 76');
test(minimizedStringLength("abcdefghijkab"), 11, 'Test 77');
test(minimizedStringLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 26, 'Test 78');
test(minimizedStringLength("nnnaaaabbbcccdddddeeefffgggghhhhiiiiijjjjjkkkkkkllllllmmmmmmmnnnnnnnnooooooooooppppppppppqrrrrrrrrrrsssssssssss"), 19, 'Test 79');
test(minimizedStringLength("zyxwvutsrqponmlkjihgfedcba"), 26, 'Test 80');
test(minimizedStringLength("aabbccddeeffaabbccddeeff"), 6, 'Test 81');
test(minimizedStringLength("thequickbrownfoxjumpsoverthelazydog"), 26, 'Test 82');
test(minimizedStringLength("aaaabbbbccccdddd"), 4, 'Test 83');
test(minimizedStringLength("zzyyxwwvvuuttssrrqqppoonnmlkjihgfedcba"), 26, 'Test 84');
test(minimizedStringLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzz"), 26, 'Test 85');
test(minimizedStringLength("deified"), 4, 'Test 86');
test(minimizedStringLength("repaper"), 4, 'Test 87');
test(minimizedStringLength("ppppqqqqrrrrssssttttuuuuvvvvwwwwwxxxxxyyyyyzzzzz"), 11, 'Test 88');
test(minimizedStringLength("aabbaabbccddeeffaabbccddeeff"), 6, 'Test 89');
test(minimizedStringLength("nolemonnomelon"), 5, 'Test 90');
test(minimizedStringLength("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm"), 26, 'Test 91');
test(minimizedStringLength("ababababab"), 2, 'Test 92');
test(minimizedStringLength("aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiiiiijjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkllllllllllllllllllmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnoooooookkkkkkkkkkkkkkkkkkkkkkppppppppppppppppppppqqqqqqqqqqqqqqqqqqqqqqrrrrrrrrrrrrrrrrrrrssssssssssssssssssssstttttttttttttttttttuuuuuuuuuuuuuuuuuuuvvvvvvvvvvvvvvvvvvvwwwwwwwwwwwwwwwwwwwxxxxxxxxxxxxxxxxxyyyyyyyyyyyyyyyyyyyzzzzzzzzzzzzzzzzzzz"), 26, 'Test 93');
test(minimizedStringLength("xyzxyzxyzxyzxyzxyzxyzxyz"), 3, 'Test 94');
test(minimizedStringLength("abcdefghijkabcde"), 11, 'Test 95');
test(minimizedStringLength("civic"), 3, 'Test 96');
test(minimizedStringLength("rotor"), 3, 'Test 97');
test(minimizedStringLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyz"), 26, 'Test 98');
test(minimizedStringLength("racecar"), 4, 'Test 99');
test(minimizedStringLength("abcabcabcabcabcabcabcabc"), 3, 'Test 100');
test(minimizedStringLength("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 26, 'Test 101');
test(minimizedStringLength("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy"), 2, 'Test 102');
test(minimizedStringLength("abbcccddddeeeee"), 5, 'Test 103');
test(minimizedStringLength("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 1, 'Test 104');
test(minimizedStringLength("aabbccddeeefff"), 6, 'Test 105');
test(minimizedStringLength("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzz"), 26, 'Test 106');
test(minimizedStringLength("abcdefghijkabcdefghijkabcdefghij"), 11, 'Test 107');
test(minimizedStringLength("mississippi"), 4, 'Test 108');
test(minimizedStringLength("unique"), 5, 'Test 109');
test(minimizedStringLength("abcabcabcabcabc"), 3, 'Test 110');
test(minimizedStringLength("aabbbcccddd"), 4, 'Test 111');
test(minimizedStringLength("abcdabcdabcdabcdabcdabcdabcd"), 4, 'Test 112');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

