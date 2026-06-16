// Test: 1915. Number Of Wonderful Substrings
// 78 test cases from LeetCodeDataset
// Run: node test.js

const { wonderfulSubstrings } = require("./solution");

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

console.log("\n1915. Number Of Wonderful Substrings\n");

test(wonderfulSubstrings("aaaaaaaaaa"), 55, 'Test 1');
test(wonderfulSubstrings("aabbccddeeffgghhiijj"), 165, 'Test 2');
test(wonderfulSubstrings("aba"), 4, 'Test 3');
test(wonderfulSubstrings("aaaabbbbcccc"), 66, 'Test 4');
test(wonderfulSubstrings("babcbabcbab"), 32, 'Test 5');
test(wonderfulSubstrings("abcdefghija"), 11, 'Test 6');
test(wonderfulSubstrings("abcdcba"), 10, 'Test 7');
test(wonderfulSubstrings("aaa"), 6, 'Test 8');
test(wonderfulSubstrings("aabb"), 9, 'Test 9');
test(wonderfulSubstrings("aabbccddeeffgg"), 84, 'Test 10');
test(wonderfulSubstrings("abcdefghij"), 10, 'Test 11');
test(wonderfulSubstrings("jihgfedcba"), 10, 'Test 12');
test(wonderfulSubstrings("aabbccddeeff"), 63, 'Test 13');
test(wonderfulSubstrings("abcabc"), 9, 'Test 14');
test(wonderfulSubstrings("abacaba"), 12, 'Test 15');
test(wonderfulSubstrings("jij"), 4, 'Test 16');
test(wonderfulSubstrings("xyz"), 0, 'Test 17');
test(wonderfulSubstrings("abcdefghijabcdefghij"), 23, 'Test 18');
test(wonderfulSubstrings("abcde"), 5, 'Test 19');
test(wonderfulSubstrings("ijji"), 8, 'Test 20');
test(wonderfulSubstrings("jjjjj"), 15, 'Test 21');
test(wonderfulSubstrings("jijijijiji"), 40, 'Test 22');
test(wonderfulSubstrings("aabbaa"), 19, 'Test 23');
test(wonderfulSubstrings("abcabcabc"), 21, 'Test 24');
test(wonderfulSubstrings("he"), 2, 'Test 25');
test(wonderfulSubstrings("a"), 1, 'Test 26');
test(wonderfulSubstrings("abcdefghijabcdefghijabcdefghij"), 63, 'Test 27');
test(wonderfulSubstrings("jijjjijijj"), 41, 'Test 28');
test(wonderfulSubstrings("aaaaaaa"), 28, 'Test 29');
test(wonderfulSubstrings("aaaaa"), 15, 'Test 30');
test(wonderfulSubstrings("abacabadabacaba"), 32, 'Test 31');
test(wonderfulSubstrings("aaaaaaaabbbbbbbbaaaaaaaabbbbbbbb"), 464, 'Test 32');
test(wonderfulSubstrings("jihgfedcbajihgfedcbajihgfedcbajihgfedcbajihgfedcba"), 176, 'Test 33');
test(wonderfulSubstrings("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"), 1038, 'Test 34');
test(wonderfulSubstrings("jijijiijijijiijijijiijijijiijijijiijijijiijijiij"), 879, 'Test 35');
test(wonderfulSubstrings("abcdefghijabcde"), 15, 'Test 36');
test(wonderfulSubstrings("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"), 903, 'Test 37');
test(wonderfulSubstrings("acacacacacacacacacac"), 155, 'Test 38');
test(wonderfulSubstrings("jijijiijjjjijiijijijiijjjjijiijijijiijjjjijiijijijiijjjjijiijijijiijjjjijiijijijiijjjjijiijijijiijjjjijiijijijiijjjjj"), 5171, 'Test 39');
test(wonderfulSubstrings("abcdefghijabcdefghijabcdefghijabcdefghij"), 106, 'Test 40');
test(wonderfulSubstrings("aabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccdd"), 4720, 'Test 41');
test(wonderfulSubstrings("aabbaaabbbaaabbaaa"), 126, 'Test 42');
test(wonderfulSubstrings("jjiijjiijjjiiijjiiijjjijjjiiijjiiijjjijjjjj"), 721, 'Test 43');
test(wonderfulSubstrings("aabbaabbaabbaabb"), 120, 'Test 44');
test(wonderfulSubstrings("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"), 990, 'Test 45');
test(wonderfulSubstrings("aabbaabbaabbaabbccddeeffgghhiijj"), 420, 'Test 46');
test(wonderfulSubstrings("abcabcabcabcabcabcabcabcabcabc"), 225, 'Test 47');
test(wonderfulSubstrings("abcdeedcba"), 23, 'Test 48');
test(wonderfulSubstrings("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjj"), 640, 'Test 49');
test(wonderfulSubstrings("abcdabcdaabbccddeeffgghhiijj"), 222, 'Test 50');
test(wonderfulSubstrings("ababababababababababababababababababababab"), 672, 'Test 51');
test(wonderfulSubstrings("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"), 2485, 'Test 52');
test(wonderfulSubstrings("jijijiijjjijiiiiij"), 132, 'Test 53');
test(wonderfulSubstrings("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"), 176, 'Test 54');
test(wonderfulSubstrings("ababababababababababababab"), 260, 'Test 55');
test(wonderfulSubstrings("aabbaaabbbaaabbaaabbba"), 187, 'Test 56');
test(wonderfulSubstrings("acccabbbdcbaaaccbbaaccbbcdac"), 161, 'Test 57');
test(wonderfulSubstrings("abcdefghijjihgfe_dcbaabcdefghijjihgfe_dcba"), Error: negative shift count, 'Test 58');
test(wonderfulSubstrings("aabbaaabbbaaaabbbaaa"), 159, 'Test 59');
test(wonderfulSubstrings("abcabcabcabcabc"), 57, 'Test 60');
test(wonderfulSubstrings("jjjjjjjjjj"), 55, 'Test 61');
test(wonderfulSubstrings("aaaaaaaaaabbbbbbbbbbccccccccccdddddddddd"), 670, 'Test 62');
test(wonderfulSubstrings("abcdefghijkabcdefghijkabcdefghijk"), 63, 'Test 63');
test(wonderfulSubstrings("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"), 452, 'Test 64');
test(wonderfulSubstrings("aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee"), 1025, 'Test 65');
test(wonderfulSubstrings("abcdefghijabcdeijfgh"), 23, 'Test 66');
test(wonderfulSubstrings("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), 820, 'Test 67');
test(wonderfulSubstrings("aaaaaaaaaabbbbbbbbbbbbccccccccccdddddddddd"), 738, 'Test 68');
test(wonderfulSubstrings("aabbccddeeaabbccddeeaabbccddeedcba"), 403, 'Test 69');
test(wonderfulSubstrings("abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghij"), 715, 'Test 70');
test(wonderfulSubstrings("babababababababababa"), 155, 'Test 71');
test(wonderfulSubstrings("aabbccddeeffgghhiijjijjiihhggeeffddccbbaa"), 501, 'Test 72');
test(wonderfulSubstrings("aabbccddeeffgghhiijjabcdefghijabcdefghijabcdefghijabcdefghij"), 363, 'Test 73');
test(wonderfulSubstrings("abcabccbaabccbaabcabccbaabccba"), 225, 'Test 74');
test(wonderfulSubstrings("abcdefghijjihgfedcba"), 48, 'Test 75');
test(wonderfulSubstrings("abacabadabacabadabacabad"), 90, 'Test 76');
test(wonderfulSubstrings("abababababababababababababababab"), 392, 'Test 77');
test(wonderfulSubstrings("abacabadabacabadabacabadabacabad"), 154, 'Test 78');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

