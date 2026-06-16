// Test: 2182. Construct String With Repeat Limit
// 66 test cases from LeetCodeDataset
// Run: node test.js

const { repeatLimitedString } = require("./solution");

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

console.log("\n2182. Construct String With Repeat Limit\n");

test(repeatLimitedString("aabbccddeeff", 1), fefedcdcbaba, 'Test 1');
test(repeatLimitedString("aabbccddeeff", 3), ffeeddccbbaa, 'Test 2');
test(repeatLimitedString("cczazcc", 3), zzcccac, 'Test 3');
test(repeatLimitedString("zzzzzzyyy", 2), zzyzzyzzy, 'Test 4');
test(repeatLimitedString("zzzzzzzzz", 3), zzz, 'Test 5');
test(repeatLimitedString("aababab", 2), bbabaa, 'Test 6');
test(repeatLimitedString("leetcode", 3), toleeedc, 'Test 7');
test(repeatLimitedString("a", 1), a, 'Test 8');
test(repeatLimitedString("aabbcc", 1), cbcba, 'Test 9');
test(repeatLimitedString("bbccddeee", 2), eededccbb, 'Test 10');
test(repeatLimitedString("abcd", 1), dcba, 'Test 11');
test(repeatLimitedString("zzzzzzzzzz", 2), zz, 'Test 12');
test(repeatLimitedString("zzzzzzzzzzzzzzzzzzzz", 2), zz, 'Test 13');
test(repeatLimitedString("abcabcabc", 1), cbcbcba, 'Test 14');
test(repeatLimitedString("aaaaaabbbccc", 1), cbcbcba, 'Test 15');
test(repeatLimitedString("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpppppppppppppppppppppppppppppppp", 5), qqqqqpqqqqqpqqqqqpqqqqqpqqqqqpqqqqqpqqppppp, 'Test 16');
test(repeatLimitedString("aaaaaaaaaabbbbbbbbccccccccddddddddeeeeeeeeeffffffffggggggggghhhhhhhhhiiiiiiiiijjjjjjjjkkkkkkkkklllllllllmmmmmmmmmnnnnnnnnnoooooooooppppppppqqqqqqqqqrrrrrrrrrssssssssstttttttttuuuuuuuuuvvvvvvvvvwwwwwwwwwxxxxxxxxxyyyyyyyyzzzzzzzzz", 4), zzzzyzzzzyzyyyyxyyxxxxwxxxxwwwwvwwwwvvvvuvvvvuuuutuuuuttttsttttssssrssssrrrrqrrrrqqqqpqqqqppppopppoooonoooonnnnmnnnnmmmmlmmmmllllkllllkkkkjkkkkjjjjijjjiiiihiiiihhhhghhhhggggfggggffffefffeeeedeeeeddddcdddccccbcccbbbbabbbaaaa, 'Test 17');
test(repeatLimitedString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 5), zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa, 'Test 18');
test(repeatLimitedString("mmmmmmmllllllkkkkkkjjjjjjiiiiiihhhhhhggggggffffffeeeeee", 4), mmmmlmmmllllklkkkkjkjjjjijiiiihihhhhghggggfgffffefeeee, 'Test 19');
test(repeatLimitedString("mnbvcxzlkjhgfdsapoiuytrewq", 1), zyxwvutsrqponmlkjihgfedcba, 'Test 20');
test(repeatLimitedString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10), zzzzzzzzzz, 'Test 21');
test(repeatLimitedString("aabbbccccddeeeffffgggghhhhiiiiijjjjkkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxxyyyyyzzzzzzzzzzzz", 4), zzzzyzzzzyzzzzyyyxxxxwxwwwvvvvuuuuttttssssrrrrqqqqppppoooonnnnmmmmllllkkkkjkjjjiiiihihhhggggffffeeeddccccbbbaa, 'Test 22');
test(repeatLimitedString("zyxwvutsrqponmlkjihgfedcba", 2), zyxwvutsrqponmlkjihgfedcba, 'Test 23');
test(repeatLimitedString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 1), zyzyxwxwvuvutstsrqrqpoponmnmlklkjijihghgfefedcdcbaba, 'Test 24');
test(repeatLimitedString("aaaabbbbccccddddeeeeffffgggg", 4), ggggffffeeeeddddccccbbbbaaaa, 'Test 25');
test(repeatLimitedString("zzzzzzzzzzzzzzzyyyyyyyyyyyxxxxxxxxwwwwwwvvvvvvuuuuuuutttttttttssssrrrrqqqqqqqqpppponnnnmmmmlllkkkjjjiiiihhggggffffffeedddcccbba", 1), zyzyzyzyzyzyzyzyzyzyzyzxzxzxzxwxwxwxwxwvwvuvuvuvuvutututststststrtrtrqrqpqpqpqpqoqnqnmnmnmlmlklkjkjijihihigfgfgfgfefefdcdcdcbab, 'Test 26');
test(repeatLimitedString("aaabbbcccdddeeefffggghhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxxyyyyyzzzzz", 2), zzyzzyzyyxyxxwxxwwvwvvuvuututtstssrsrrqrqqpqppopoononnmnmmlmllklkkjkjjijiihihhggfgffeededdccbcbbaa, 'Test 27');
test(repeatLimitedString("pppppppppooooooonnnnmmmllllkkkkjjjjiiiihhhhhggggfffffeeeee", 4), ppppoppppopoooononnnmmmllllkkkkjjjjiiiihhhhghgggffffefeeee, 'Test 28');
test(repeatLimitedString("abcdefghijklmnopqrstuvwxyz", 2), zyxwvutsrqponmlkjihgfedcba, 'Test 29');
test(repeatLimitedString("zzzzzzzzzzzzzzzyyyyyyyyyyyxxxxxxxxwwwwwwvvvvvvuuuuuuutttttttttssssrrrrqqqqqqqqpppponnnnmmmmlllkkkjjjiiiihhggggffffffeedddcccbba", 5), zzzzzyzzzzzyzzzzzyyyyyxyyyyxxxxxwxxwwwwwvvvvvuvuuuuututttttstttsssrrrrqqqqqpqqqppponnnnmmmmlllkkkjjjiiiihhggggfffffefedddcccbba, 'Test 30');
test(repeatLimitedString("abcdefghijklmnopqrstuvwxyza", 1), zyxwvutsrqponmlkjihgfedcba, 'Test 31');
test(repeatLimitedString("aaaaaaaaaabbbbbbbbccccccccddddddddeeeeeeeeefffffff", 3), fffefffefeeedeeededddcdddcccbcccbcbbbabbbaaa, 'Test 32');
test(repeatLimitedString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1), z, 'Test 33');
test(repeatLimitedString("zzzzzzzzzzzzzzzyyyyyyyyyyyxxxxxxxxwwwwwwvvvvvvuuuuuuutttttttttssssrrrrqqqqqqqqpppponnnnmmmmlllkkkjjjiiiihhggggffffffeedddcccbba", 3), zzzyzzzyzzzyzzzyzzzyyyxyyyxyxxxwxxxwwwvwwvvvuvvuuutuuutttstttsttssrrrqrqqqpqqqpqpponnnmnmmmlllkkkjjjiiihihgggfgfffeffedddcccbba, 'Test 34');
test(repeatLimitedString("zzzzzzzzzzzzzzzyyyyyyyyyyyxxxxxxxxwwwwwwvvvvvvuuuuuuutttttttttssssrrrrqqqqqqqqpppponnnnmmmmlllkkkjjjiiiihhggggffffffeedddcccbba", 10), zzzzzzzzzzyzzzzzyyyyyyyyyyxxxxxxxxwwwwwwvvvvvvuuuuuuutttttttttssssrrrrqqqqqqqqpppponnnnmmmmlllkkkjjjiiiihhggggffffffeedddcccbba, 'Test 35');
test(repeatLimitedString("xyzzzzzzzzzzyx", 5), zzzzzyzzzzzyxx, 'Test 36');
test(repeatLimitedString("zzzzzzzzzzzzzzzyyyyyyyyyyyxxxxxxxxwwwwwwvvvvvvuuuuuuutttttttttssssrrrrqqqqqqqqpppponnnnmmmmlllkkkjjjiiiihhggggffffffeedddcccbba", 2), zzyzzyzzyzzyzzyzzyzzyzyyxyyxxwxxwxxwxwwvwvvuvvuvuutuututtsttsttstsrrqrrqqpqqpqqpqponnmnnmmlmllkkjkjjiihiihggfggffeffefddcdccbba, 'Test 37');
test(repeatLimitedString("abcdefghijklmnopqrstuvwxyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 5), zzzzzyzzzzzxzzzzzwzzzzzvzzzzzuzzzzztzzzzzszzzzzrzzqponmlkjihgfedcba, 'Test 38');
test(repeatLimitedString("nnnnnnnnnmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffeeeeeeeeddddddddccccccccbbbaaaaaaaa", 10), nnnnnnnnnmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffeeeeeeeeddddddddccccccccbbbaaaaaaaa, 'Test 39');
test(repeatLimitedString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 5), zzzzz, 'Test 40');
test(repeatLimitedString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 5), zzzzz, 'Test 41');
test(repeatLimitedString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 5), zzzzz, 'Test 42');
test(repeatLimitedString("mnlkjihgfedcba", 1), nmlkjihgfedcba, 'Test 43');
test(repeatLimitedString("aaaaaaaaaaaabbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddd", 5), dddddcdddddcdddddcdddddcdddddcdddddcdddddcdddddcddcccccbcccccbcccccbcccccbbbbbabbbbbabbbbbabaaaaa, 'Test 44');
test(repeatLimitedString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1), z, 'Test 45');
test(repeatLimitedString("pppppqqqqqrrrrrssssstttttuuuuuvvvvvwwwwwxxxxxyyyyyzzzzz", 2), zzyzzyzyyxyxxwxxwwvwwvvuvvuutuuttsttssrssrrqrrqqpqqpp, 'Test 46');
test(repeatLimitedString("aaaaaaaaaaaaaabbbbbbbbbbbbccccccccccccddddddddddddd", 3), dddcdddcdddcdddcdcccbcccbccbbbabbbabbbabaaa, 'Test 47');
test(repeatLimitedString("zzzzzyyyyxxxxwwvvuttrrssqqppoonnmmllkkjjiihhggffeeddccbbaaa", 10), zzzzzyyyyxxxxwwvvuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaaa, 'Test 48');
test(repeatLimitedString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 3), zzz, 'Test 49');
test(repeatLimitedString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 15), zzzzzzzzzzzzzzz, 'Test 50');
test(repeatLimitedString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10), zzzzzzzzzz, 'Test 51');
test(repeatLimitedString("zzzzzyyyyxxwwvvuuuutttssrrqqppoonnmmllkkjjiihhhggffeeddccbbaa", 2), zzyzzyzyyxxwwvvuutuuttssrrqqppoonnmmllkkjjiihhghgffeeddccbbaa, 'Test 52');
test(repeatLimitedString("abacabadabacaba", 2), dccbbabbaa, 'Test 53');
test(repeatLimitedString("ssssssssssssssssssssssssssssssss", 2), ss, 'Test 54');
test(repeatLimitedString("zzzzzzzyyyy", 3), zzzyzzzyzyy, 'Test 55');
test(repeatLimitedString("pppppppppppppppppppppppppppppppp", 3), ppp, 'Test 56');
test(repeatLimitedString("zzzzzyyyyxxxxwwvvuttrrssqqppoonnmmllkkjjiihhggffeeddccbbaaa", 2), zzyzzyzyyxxwxxwvvuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa, 'Test 57');
test(repeatLimitedString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 5), zzzzz, 'Test 58');
test(repeatLimitedString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 4), zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa, 'Test 59');
test(repeatLimitedString("a", 10), a, 'Test 60');
test(repeatLimitedString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10), zzzzzzzzzz, 'Test 61');
test(repeatLimitedString("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", 7), qqqqqqq, 'Test 62');
test(repeatLimitedString("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1), z, 'Test 63');
test(repeatLimitedString("abcdefghijklmnopqrstuvwxyz", 1), zyxwvutsrqponmlkjihgfedcba, 'Test 64');
test(repeatLimitedString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 3), zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa, 'Test 65');
test(repeatLimitedString("zyxwvutsrqponmlkjihgfedcba", 10), zyxwvutsrqponmlkjihgfedcba, 'Test 66');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

