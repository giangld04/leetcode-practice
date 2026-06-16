// Test: 1163. Last Substring In Lexicographical Order
// 80 test cases from LeetCodeDataset
// Run: node test.js

const { lastSubstring } = require("./solution");

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

console.log("\n1163. Last Substring In Lexicographical Order\n");

test(lastSubstring("abab"), bab, 'Test 1');
test(lastSubstring("mississippi"), ssissippi, 'Test 2');
test(lastSubstring("abcdabcdabcd"), dabcdabcd, 'Test 3');
test(lastSubstring("banana"), nana, 'Test 4');
test(lastSubstring("zyxzy"), zyxzy, 'Test 5');
test(lastSubstring("zyxzyxzyx"), zyxzyxzyx, 'Test 6');
test(lastSubstring("a"), a, 'Test 7');
test(lastSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 8');
test(lastSubstring("aaa"), aaa, 'Test 9');
test(lastSubstring("abcd"), d, 'Test 10');
test(lastSubstring("akjflaweproqwoijrpprpwlekfawpqwlekfqpwoqpwlekjqwlkfqpwlkerpqwlkfjqwlekflpqwlekfqpwlkerpqwlekfqwlekjfqpwekfqpwlkjqwlekjfqpwlkerpqwlekfpwoqwjfwqppqwjflawejqawlkjqwlkfjqwlkfjqwlkfjqwlkfjqwlekjqwlekjqwlekjqwlekjqwlekjqwlekjqwlkjqwlekjqwlekjqwlekjqwlekjqwlekjqwlkjqwlekjqwlekjqwlekjqwlekjqwlekjqwlkjqwlekjqwlekjqwlekjqwlekjqwlekjqwlkj"), wqppqwjflawejqawlkjqwlkfjqwlkfjqwlkfjqwlkfjqwlekjqwlekjqwlekjqwlekjqwlekjqwlekjqwlkjqwlekjqwlekjqwlekjqwlekjqwlekjqwlkjqwlekjqwlekjqwlekjqwlekjqwlekjqwlkjqwlekjqwlekjqwlekjqwlekjqwlekjqwlkj, 'Test 11');
test(lastSubstring("leetcode"), tcode, 'Test 12');
test(lastSubstring("aaaa"), aaaa, 'Test 13');
test(lastSubstring("aabbccddeeff"), ff, 'Test 14');
test(lastSubstring("abcdabceabcdabcdabcdabceabcdabcdabcd"), eabcdabcdabcdabceabcdabcdabcd, 'Test 15');
test(lastSubstring("aaaabbbbccccdddd"), dddd, 'Test 16');
test(lastSubstring("leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode"), tcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode, 'Test 17');
test(lastSubstring("aaabaaaabaaaaabaaaaaaabaaaaaaaabaaaaaaaaaabaaaaaaaaaaabaaaaaaaaaaa"), baaaabaaaaabaaaaaaabaaaaaaaabaaaaaaaaaabaaaaaaaaaaabaaaaaaaaaaa, 'Test 18');
test(lastSubstring("aaaabaaaabaaaaaa"), baaaabaaaaaa, 'Test 19');
test(lastSubstring("abcdefghijklmnopqrstuvwxyz"), z, 'Test 20');
test(lastSubstring("ababababababababababab"), babababababababababab, 'Test 21');
test(lastSubstring("ananananananananananananananan"), nanananananananananananananan, 'Test 22');
test(lastSubstring("aaaabbaaaabbaaa"), bbaaaabbaaa, 'Test 23');
test(lastSubstring("aabbaabbaabbaabbaabb"), bbaabbaabbaabbaabb, 'Test 24');
test(lastSubstring("zzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzz, 'Test 25');
test(lastSubstring("thisisaverylongstringwithseveralrepeatedsubstringsrepeated"), ylongstringwithseveralrepeatedsubstringsrepeated, 'Test 26');
test(lastSubstring("leetcodeloveleetcode"), veleetcode, 'Test 27');
test(lastSubstring("abababababababababab"), bababababababababab, 'Test 28');
test(lastSubstring("bcbcbcbcbcbcbcbc"), cbcbcbcbcbcbcbc, 'Test 29');
test(lastSubstring("anananananananan"), nananananananan, 'Test 30');
test(lastSubstring("abcdabcdabcdabcdabcdabcdabcdabcdabcdabcd"), dabcdabcdabcdabcdabcdabcdabcdabcdabcd, 'Test 31');
test(lastSubstring("xyxxyxyxxyxyxxyxyxyxxyxyx"), yxyxyxxyxyx, 'Test 32');
test(lastSubstring("abababababababa"), bababababababa, 'Test 33');
test(lastSubstring("abracadabra"), racadabra, 'Test 34');
test(lastSubstring("aaaaaabaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaab"), baaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaab, 'Test 35');
test(lastSubstring("abcdbacdcbac"), dcbac, 'Test 36');
test(lastSubstring("zzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzz, 'Test 37');
test(lastSubstring("bbaaabbaaabbaaa"), bbaaabbaaabbaaa, 'Test 38');
test(lastSubstring("aaaaaaaaaaaaaaaaaaab"), b, 'Test 39');
test(lastSubstring("aaaabbbbccccddddeeeeffff"), ffff, 'Test 40');
test(lastSubstring("abracadabraabracadabraabracadabraabracadabraabracadabra"), racadabraabracadabraabracadabraabracadabraabracadabra, 'Test 41');
test(lastSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 42');
test(lastSubstring("acbbccddeeefffggghhhh"), hhhh, 'Test 43');
test(lastSubstring("racecar"), racecar, 'Test 44');
test(lastSubstring("aaaaaaaaaaab"), b, 'Test 45');
test(lastSubstring("abcabcabcabcabcabcabcabcabc"), cabcabcabcabcabcabcabcabc, 'Test 46');
test(lastSubstring("abcdexyzxyzxyzxyzxyzxyzxyzxyzxyz"), zxyzxyzxyzxyzxyzxyzxyzxyz, 'Test 47');
test(lastSubstring("rollingstonesrollingstonesrollingstones"), tonesrollingstonesrollingstones, 'Test 48');
test(lastSubstring("abcdedcbaedcba"), edcbaedcba, 'Test 49');
test(lastSubstring("aquickbrownfoxjumpsoverthelazydogaquickbrownfoxjumpsoverthelazydog"), zydogaquickbrownfoxjumpsoverthelazydog, 'Test 50');
test(lastSubstring("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), zzyxwvutsrqponmlkjihgfedcba, 'Test 51');
test(lastSubstring("ababababababab"), babababababab, 'Test 52');
test(lastSubstring("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), zabcdefghijklmnopqrstuvwxyz, 'Test 53');
test(lastSubstring("racecar racecar racecar"), racecar racecar racecar, 'Test 54');
test(lastSubstring("bananaananabananaananabananaananaba"), nanabananaananabananaananaba, 'Test 55');
test(lastSubstring("bbaaaaaaaaaaaaaaaaaaab"), bbaaaaaaaaaaaaaaaaaaab, 'Test 56');
test(lastSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 57');
test(lastSubstring("aazzzzzaazzzzz"), zzzzzaazzzzz, 'Test 58');
test(lastSubstring("mmmmmmmllllllllkkkkkkkkjjjjjjjjiiiiiiiioooooooonnnnnnnmmm"), oooooooonnnnnnnmmm, 'Test 59');
test(lastSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 60');
test(lastSubstring("aaaaaaaaaabaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaab"), baaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaab, 'Test 61');
test(lastSubstring("aabbccddeeffgg"), gg, 'Test 62');
test(lastSubstring("leetcodeisacodeleetcode"), tcodeisacodeleetcode, 'Test 63');
test(lastSubstring("aabbaabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), zz, 'Test 64');
test(lastSubstring("zzzzzyzzzzzzzzzzzzzz"), zzzzzzzzzzzzzz, 'Test 65');
test(lastSubstring("xyzyxzyxyzyxzyxyzyxzyxyzyxzyxyzyxzyxyzyxzyxyzyxzyxyzyxzyx"), zyxzyxyzyxzyxyzyxzyxyzyxzyxyzyxzyxyzyxzyxyzyxzyxyzyxzyx, 'Test 66');
test(lastSubstring("bananaananabananananaba"), nanananaba, 'Test 67');
test(lastSubstring("zzzzzzzzzzzzzz"), zzzzzzzzzzzzzz, 'Test 68');
test(lastSubstring("aaaaaaaaaaabbbbbbbbbbbbbbbbccccccccccccccdddddddddddddddddddd"), dddddddddddddddddddd, 'Test 69');
test(lastSubstring("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 70');
test(lastSubstring("racecarbananaappleorangeorangeapplebananaorangeorangeapplebananaorange"), rbananaappleorangeorangeapplebananaorangeorangeapplebananaorange, 'Test 71');
test(lastSubstring("abcdefgzyxwvutsrqpomnlkjihgfedcba"), zyxwvutsrqpomnlkjihgfedcba, 'Test 72');
test(lastSubstring("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), zz, 'Test 73');
test(lastSubstring("abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba"), zyxwvutsrqponmlkjihgfedcba, 'Test 74');
test(lastSubstring("aaaaaaaaaaaaaaaaaaabb"), bb, 'Test 75');
test(lastSubstring("abcdzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 76');
test(lastSubstring("aaaaaaabbbbbbbccccccdddddeeeeeeffffffff"), ffffffff, 'Test 77');
test(lastSubstring("bbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabb"), bbaabbaabbaabbaabbaabbaabbaabbaabbaabbaabb, 'Test 78');
test(lastSubstring("aaaaaaaaaabaaaaaaaaaabaaaaaaaaaab"), baaaaaaaaaabaaaaaaaaaab, 'Test 79');
test(lastSubstring("abcdedcbaabcdedcbaabcdedcbaabcdedcbaabcdedcbaabcdedcba"), edcbaabcdedcbaabcdedcbaabcdedcbaabcdedcbaabcdedcba, 'Test 80');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

