// Test: 763. Partition Labels
// 64 test cases from LeetCodeDataset
// Run: node test.js

const { partitionLabels } = require("./solution");

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

console.log("\n763. Partition Labels\n");

test(partitionLabels("abcdabcde"), [8, 1], 'Test 1');
test(partitionLabels("aaaaaabbbbbccccc"), [6, 5, 5], 'Test 2');
test(partitionLabels("xyzxyzxyz"), [9], 'Test 3');
test(partitionLabels("aaaabbbbbccccc"), [4, 5, 5], 'Test 4');
test(partitionLabels("abcdabcdeabcdabcde"), [18], 'Test 5');
test(partitionLabels("abcdefghijklmnopqrstuvwxyz"), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 6');
test(partitionLabels("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 'Test 7');
test(partitionLabels("zab"), [1, 1, 1], 'Test 8');
test(partitionLabels("a"), [1], 'Test 9');
test(partitionLabels("zabbcdefghijklmnopqrstuvwxyz"), [28], 'Test 10');
test(partitionLabels("aabbccddeee"), [2, 2, 2, 2, 3], 'Test 11');
test(partitionLabels("abcdcba"), [7], 'Test 12');
test(partitionLabels("ababababab"), [10], 'Test 13');
test(partitionLabels("zabzabc"), [6, 1], 'Test 14');
test(partitionLabels("abababab"), [8], 'Test 15');
test(partitionLabels("abcde"), [1, 1, 1, 1, 1], 'Test 16');
test(partitionLabels("ababcbacadefegdehijhklij"), [9, 7, 8], 'Test 17');
test(partitionLabels("eccbbbbdec"), [10], 'Test 18');
test(partitionLabels("abcabcdabcdeabcdefabcdefg"), [24, 1], 'Test 19');
test(partitionLabels("xyzzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyxzyx"), [66], 'Test 20');
test(partitionLabels("aaaaaaaaaabbbbbbbbccccccccddddddddeeeeeeeefffffffffghhhhhhhhiiiiiiiijjjjjjjjkkkkkkkkllllllllmmmmmmmmnnnnnnnnooooooooppppppppqqqqqqqqrrrrrrrrssssssssttttttttuuuuuuuuvvvvvvvvwwwwwwwwxxxxxxxxxyyyyyyyyzzzzzzzz"), [10, 8, 8, 8, 8, 9, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 8, 8], 'Test 21');
test(partitionLabels("abcdabcdeabcde"), [14], 'Test 22');
test(partitionLabels("aaaabbbbccccddddeeeeffffgggg"), [4, 4, 4, 4, 4, 4, 4], 'Test 23');
test(partitionLabels("abcadefeghijklmnopqrstuvwxyzzxywvutsrqponmlkjihgfedcba"), [54], 'Test 24');
test(partitionLabels("xyzzyxzyxzzyxzyxzyxzzyxzyxzyxzzyxzyxzzyxzyxzyxzzyxzyxzyxzzyxzyxzyxzyxzzyxzyxzyxzyx"), [82], 'Test 25');
test(partitionLabels("zzyzxzyzxzyz"), [12], 'Test 26');
test(partitionLabels("abcabcabcabcabcabcabcabcabcabc"), [30], 'Test 27');
test(partitionLabels("abacabadabacabadabacabadabacabad"), [32], 'Test 28');
test(partitionLabels("abcdexyzabcdexyzabcdexyzabcdexyz"), [32], 'Test 29');
test(partitionLabels("abcdefghfedcba"), [14], 'Test 30');
test(partitionLabels("abcdefghihgfedcbaijklmnopqrstuvutsrqponmlkjihgfedcba"), [52], 'Test 31');
test(partitionLabels("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"), [80], 'Test 32');
test(partitionLabels("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzyxwvutsrqponmlkjihgfedcba"), [78], 'Test 33');
test(partitionLabels("mnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), [66], 'Test 34');
test(partitionLabels("ababcbacadeafgafghijghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), [66], 'Test 35');
test(partitionLabels("zzzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbaaazzzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbaaazzzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbaaazzzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbaaa"), [212], 'Test 36');
test(partitionLabels("abcdefgabcdefgabcdefg"), [21], 'Test 37');
test(partitionLabels("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), [70], 'Test 38');
test(partitionLabels("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), [62], 'Test 39');
test(partitionLabels("abcdefghihgfedcba"), [17], 'Test 40');
test(partitionLabels("abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg"), [63], 'Test 41');
test(partitionLabels("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), [66], 'Test 42');
test(partitionLabels("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 36], 'Test 43');
test(partitionLabels("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), [52], 'Test 44');
test(partitionLabels("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyz"), [30], 'Test 45');
test(partitionLabels("mnopqrsmnopqrstuvwpqrstuv"), [25], 'Test 46');
test(partitionLabels("abcabcabcabcabcabc"), [18], 'Test 47');
test(partitionLabels("lkjihgfedcbaedcba"), [1, 1, 1, 1, 1, 1, 1, 10], 'Test 48');
test(partitionLabels("abcdefghijkabcdefghijk"), [22], 'Test 49');
test(partitionLabels("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), [52], 'Test 50');
test(partitionLabels("abcdefedcbafedcba"), [17], 'Test 51');
test(partitionLabels("aaaaabbbbccccdddddeeeeefffffggggghhhhiiiiijjjjkkkkllllmmmmnnnnoooo"), [5, 4, 4, 5, 5, 5, 5, 4, 5, 4, 4, 4, 4, 4, 4], 'Test 52');
test(partitionLabels("mnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), [28, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 53');
test(partitionLabels("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyz"), [78], 'Test 54');
test(partitionLabels("zabacabadefegdehijhklijkmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba"), [63], 'Test 55');
test(partitionLabels("mnopqrstuabcrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), [47], 'Test 56');
test(partitionLabels("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzz"), [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 18], 'Test 57');
test(partitionLabels("xyzxyzxyzxyz"), [12], 'Test 58');
test(partitionLabels("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba"), [51], 'Test 59');
test(partitionLabels("abacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbacbac"), [64], 'Test 60');
test(partitionLabels("aabababababcabcabcabcdabcdabcdabcdeabcdeabcdefabcdef"), [52], 'Test 61');
test(partitionLabels("zababzabz"), [9], 'Test 62');
test(partitionLabels("aabbccddeeffaabbccddeeff"), [24], 'Test 63');
test(partitionLabels("aaaabbbbccccddddeeeeffffgggghhhh"), [4, 4, 4, 4, 4, 4, 4, 4], 'Test 64');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

