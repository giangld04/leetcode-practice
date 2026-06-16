// Test: 1624. Largest Substring Between Two Equal Characters
// 74 test cases from LeetCodeDataset
// Run: node test.js

const { maxLengthBetweenEqualCharacters } = require("./solution");

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

console.log("\n1624. Largest Substring Between Two Equal Characters\n");

test(maxLengthBetweenEqualCharacters("aabbaa"), 4, 'Test 1');
test(maxLengthBetweenEqualCharacters("xyzx"), 2, 'Test 2');
test(maxLengthBetweenEqualCharacters("a"), -1, 'Test 3');
test(maxLengthBetweenEqualCharacters("aa"), 0, 'Test 4');
test(maxLengthBetweenEqualCharacters("abcda"), 3, 'Test 5');
test(maxLengthBetweenEqualCharacters("abcabc"), 2, 'Test 6');
test(maxLengthBetweenEqualCharacters("abcdabcd"), 3, 'Test 7');
test(maxLengthBetweenEqualCharacters("xyz"), -1, 'Test 8');
test(maxLengthBetweenEqualCharacters("abcabcbb"), 5, 'Test 9');
test(maxLengthBetweenEqualCharacters("leetcode"), 5, 'Test 10');
test(maxLengthBetweenEqualCharacters("mnopqrstuvmnop"), 9, 'Test 11');
test(maxLengthBetweenEqualCharacters("zzzzzzzzzz"), 8, 'Test 12');
test(maxLengthBetweenEqualCharacters("zabz"), 2, 'Test 13');
test(maxLengthBetweenEqualCharacters("cbzxy"), -1, 'Test 14');
test(maxLengthBetweenEqualCharacters("abcdeabcde"), 4, 'Test 15');
test(maxLengthBetweenEqualCharacters("aabbcc"), 0, 'Test 16');
test(maxLengthBetweenEqualCharacters("zabacdz"), 5, 'Test 17');
test(maxLengthBetweenEqualCharacters("mnopqrlomn"), 7, 'Test 18');
test(maxLengthBetweenEqualCharacters("abacaba"), 5, 'Test 19');
test(maxLengthBetweenEqualCharacters("abca"), 2, 'Test 20');
test(maxLengthBetweenEqualCharacters("abcdefg"), -1, 'Test 21');
test(maxLengthBetweenEqualCharacters("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihggffeeddccbbaa"), 102, 'Test 22');
test(maxLengthBetweenEqualCharacters("aaaabbbbccccdddd"), 2, 'Test 23');
test(maxLengthBetweenEqualCharacters("abcabcabcabcabcabcabc"), 17, 'Test 24');
test(maxLengthBetweenEqualCharacters("ababcabcab"), 7, 'Test 25');
test(maxLengthBetweenEqualCharacters("abcdefghijklmnopqrstuvwxyzzxywvutsrqponmlkjihgfedcba"), 50, 'Test 26');
test(maxLengthBetweenEqualCharacters("abcdexyzabcdexyzabcdexyz"), 15, 'Test 27');
test(maxLengthBetweenEqualCharacters("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzza"), 51, 'Test 28');
test(maxLengthBetweenEqualCharacters("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzz"), 8, 'Test 29');
test(maxLengthBetweenEqualCharacters("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 49, 'Test 30');
test(maxLengthBetweenEqualCharacters("deified"), 5, 'Test 31');
test(maxLengthBetweenEqualCharacters("pqrstuvwxyzabcdefghijklmno"), -1, 'Test 32');
test(maxLengthBetweenEqualCharacters("abcdefgahijklmnopqrstuvwxyz"), 6, 'Test 33');
test(maxLengthBetweenEqualCharacters("rotorrotorrotor"), 13, 'Test 34');
test(maxLengthBetweenEqualCharacters("aaaaaaaaaabbbbbbbbbccccccccddddddddeeeeeeeeeffffffffggggggggghhhhhhhhiiiiiiiiiijjjjjjjjjjjjjjjjjkkkkkkkkkkkllllllllllllllllllmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnooooooooooooooooppppppppppppppppppppqqqqqqqqqqqqqqqqqqqqrrrrrrrrrrrrrrrrrrrrsssssssssssssssssssssttttttttttttttttttttuuuuuuuuuuuuuuuuuuuuvvvvvvvvvvvvvvvvvvvvwwwwwwwwwwwwwwwwwwwwxxxyyyyyyyyyyyyyyyyyyyyyzzzzzzzzzzzzzzzzzzzz"), 19, 'Test 35');
test(maxLengthBetweenEqualCharacters("aaaaabbbbbcccccdddddeeeee"), 3, 'Test 36');
test(maxLengthBetweenEqualCharacters("kayak"), 3, 'Test 37');
test(maxLengthBetweenEqualCharacters("abacabadabacaba"), 13, 'Test 38');
test(maxLengthBetweenEqualCharacters("aabbccddeeaabbccddeeffgghheeffgghhii"), 18, 'Test 39');
test(maxLengthBetweenEqualCharacters("abracadabra"), 9, 'Test 40');
test(maxLengthBetweenEqualCharacters("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 54, 'Test 41');
test(maxLengthBetweenEqualCharacters("abcabcabcabc"), 8, 'Test 42');
test(maxLengthBetweenEqualCharacters("abcdaebcdfeghifijkiljklmnopqrstuvswxyzxyzz"), 4, 'Test 43');
test(maxLengthBetweenEqualCharacters("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 51, 'Test 44');
test(maxLengthBetweenEqualCharacters("xyzyxzyzyxzyzyxzyzyx"), 18, 'Test 45');
test(maxLengthBetweenEqualCharacters("ab"), -1, 'Test 46');
test(maxLengthBetweenEqualCharacters("xyzwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyz"), 48, 'Test 47');
test(maxLengthBetweenEqualCharacters("aabcdefghijklmnopqrstuvwxyzabcde"), 26, 'Test 48');
test(maxLengthBetweenEqualCharacters("xyzzxyzzxyzzxyzzxyzz"), 16, 'Test 49');
test(maxLengthBetweenEqualCharacters("abcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcb"), 113, 'Test 50');
test(maxLengthBetweenEqualCharacters("acbabcbabcbabcbabcbabcbabcbabcbabcbabcbabcbabcbabcbabcbabcbabcbabcbabcbabcbabcbabcbabcbabcbabcbabcbabcbabcbabcba"), 110, 'Test 51');
test(maxLengthBetweenEqualCharacters("rotor"), 3, 'Test 52');
test(maxLengthBetweenEqualCharacters("racecar"), 5, 'Test 53');
test(maxLengthBetweenEqualCharacters("aaabbbaaaabbbaaaabbbaaaabbbaaaabbbaaaabbbaaaabbbaaaabbbaaaabbbaaaabbbaaaabbbaaaabbbaaaabbbaaaabbbaaaabbbaaa"), 105, 'Test 54');
test(maxLengthBetweenEqualCharacters("abcdefghijabcdefghij"), 9, 'Test 55');
test(maxLengthBetweenEqualCharacters("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), 50, 'Test 56');
test(maxLengthBetweenEqualCharacters("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), 25, 'Test 57');
test(maxLengthBetweenEqualCharacters("abcdefghijabcdefghijabcdefghij"), 19, 'Test 58');
test(maxLengthBetweenEqualCharacters("noon"), 2, 'Test 59');
test(maxLengthBetweenEqualCharacters("aaabaaaacaaaaadaaaaaeaaaaa"), 24, 'Test 60');
test(maxLengthBetweenEqualCharacters("abcdefgabcdefg"), 6, 'Test 61');
test(maxLengthBetweenEqualCharacters("pneumonoultramicroscopicsilicovolcanoconiosis"), 37, 'Test 62');
test(maxLengthBetweenEqualCharacters("lkjlkjlkjlkjlkjlkj"), 14, 'Test 63');
test(maxLengthBetweenEqualCharacters("abcdeafghijaklmnopqrastuvwxyz"), 19, 'Test 64');
test(maxLengthBetweenEqualCharacters("aabbaaabbbaaa"), 11, 'Test 65');
test(maxLengthBetweenEqualCharacters("abcdaebcdfeghifijkiljklmnopqrstuvswxyzxyzzzyxwvutsrqponmlkjilfedcbazyxwvutsrqponmlkjihgfedcba"), 91, 'Test 66');
test(maxLengthBetweenEqualCharacters("abcdefghijjihegfedcba"), 19, 'Test 67');
test(maxLengthBetweenEqualCharacters("abacaxab"), 5, 'Test 68');
test(maxLengthBetweenEqualCharacters("mississippi"), 8, 'Test 69');
test(maxLengthBetweenEqualCharacters("xyzzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxz"), 124, 'Test 70');
test(maxLengthBetweenEqualCharacters("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 0, 'Test 71');
test(maxLengthBetweenEqualCharacters("level"), 3, 'Test 72');
test(maxLengthBetweenEqualCharacters("abcdefghijzyxwvutsrqponmlkjihgfedcba"), 34, 'Test 73');
test(maxLengthBetweenEqualCharacters("abcdefgxyzgfedcba"), 15, 'Test 74');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

