// Test: 940. Distinct Subsequences Ii
// 53 test cases from LeetCodeDataset
// Run: node test.js

const { distinctSubseqII } = require("./solution");

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

console.log("\n940. Distinct Subsequences Ii\n");

test(distinctSubseqII("abcdefghijklmnopqrstuvwxyz"), 67108863, 'Test 1');
test(distinctSubseqII("abac"), 13, 'Test 2');
test(distinctSubseqII("abababababababababab"), 28655, 'Test 3');
test(distinctSubseqII("a"), 1, 'Test 4');
test(distinctSubseqII("abracadabra"), 1303, 'Test 5');
test(distinctSubseqII("zzzz"), 4, 'Test 6');
test(distinctSubseqII("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 402155530, 'Test 7');
test(distinctSubseqII("abcdabcdabcdabcdabcdabcdabcdabcd"), 552430184, 'Test 8');
test(distinctSubseqII("aaa"), 3, 'Test 9');
test(distinctSubseqII("abcabc"), 51, 'Test 10');
test(distinctSubseqII("aabb"), 8, 'Test 11');
test(distinctSubseqII("zzzzzzzzzz"), 10, 'Test 12');
test(distinctSubseqII("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 398, 'Test 13');
test(distinctSubseqII("abc"), 7, 'Test 14');
test(distinctSubseqII("abcdeabcdeabcdeabcde"), 814295, 'Test 15');
test(distinctSubseqII("abcd"), 15, 'Test 16');
test(distinctSubseqII("aba"), 6, 'Test 17');
test(distinctSubseqII("aaaaaaaabbbbbbbbcccccccc"), 728, 'Test 18');
test(distinctSubseqII("aabbcc"), 26, 'Test 19');
test(distinctSubseqII("mississippi"), 477, 'Test 20');
test(distinctSubseqII("abcdabc"), 115, 'Test 21');
test(distinctSubseqII("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 865810541, 'Test 22');
test(distinctSubseqII("zyxwvutsrqponmlkjihgfedcba"), 67108863, 'Test 23');
test(distinctSubseqII("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzz"), 174638632, 'Test 24');
test(distinctSubseqII("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 100, 'Test 25');
test(distinctSubseqII("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"), 330026179, 'Test 26');
test(distinctSubseqII("abcdbacdbacdabcdbacdbacdabcdbacdbacdabcdbacdbacdabcdbacdbacdabcdbacdbacdabcdbacdbacdabcdbacdbacd"), 411786355, 'Test 27');
test(distinctSubseqII("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), 854978287, 'Test 28');
test(distinctSubseqII("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 254, 'Test 29');
test(distinctSubseqII("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 136, 'Test 30');
test(distinctSubseqII("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 30, 'Test 31');
test(distinctSubseqII("abacabadabacaba"), 9426, 'Test 32');
test(distinctSubseqII("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 90, 'Test 33');
test(distinctSubseqII("thisisalongstringthatwilltestthealgorithmwithvariouscharacters"), 733715667, 'Test 34');
test(distinctSubseqII("abacabadabacabadabacabadabacabad"), 270841387, 'Test 35');
test(distinctSubseqII("thisisaverylongstringwithrepeatedcharactersandlongsubsequences"), 484250120, 'Test 36');
test(distinctSubseqII("longstringthatweneedtogenenatetobemorecomplexandcheckouralgorithmwithaverylongstring"), 45372177, 'Test 37');
test(distinctSubseqII("aaaaaaaaaabbbbbbbbbbccccccccccdddddddddd"), 14640, 'Test 38');
test(distinctSubseqII("racecar"), 106, 'Test 39');
test(distinctSubseqII("aabaaabbbaababaabaaabbbabbaabbabbaababaaabbabaaababbabbaabab"), 330918185, 'Test 40');
test(distinctSubseqII("aabbccaaaabbccaaaabbcc"), 41594, 'Test 41');
test(distinctSubseqII("xyzxyzxyz"), 325, 'Test 42');
test(distinctSubseqII("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 723430077, 'Test 43');
test(distinctSubseqII("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 992025290, 'Test 44');
test(distinctSubseqII("aaaaaaaaaabbbbbbbbccccccccddddddddddeeeeeeeeeffffffffggggggggghhhhhhhhhiiiiiiiiiijjjjjjjjjkkkkkkkkklllllllllmmmmmmmmmnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwxxxxxxxxxyyyyyyyyyyzzzzzzzzzz"), 627058992, 'Test 45');
test(distinctSubseqII("aabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabb"), 580349510, 'Test 46');
test(distinctSubseqII("abababababababababababababababababababababababababababababababababababababababababababababababababab"), 252403354, 'Test 47');
test(distinctSubseqII("abcdxyzabcdxyzabcdxyzabcdxyzabcdxyzabcdxyzabcdxyz"), 843562901, 'Test 48');
test(distinctSubseqII("ababababababababababababababababababababababababababababababab"), 680057394, 'Test 49');
test(distinctSubseqII("repeatedrepeatedrepeatedrepeatedrepeatedrepeatedrepeatedrepeatedrepeatedrepeated"), 462028482, 'Test 50');
test(distinctSubseqII("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 208, 'Test 51');
test(distinctSubseqII("abababababababababababababab"), 1346267, 'Test 52');
test(distinctSubseqII("abcdabcdabcdabcdabcdabcdabcd"), 112454975, 'Test 53');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

