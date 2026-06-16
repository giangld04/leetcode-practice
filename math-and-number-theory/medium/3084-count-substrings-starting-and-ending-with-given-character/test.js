// Test: 3084. Count Substrings Starting And Ending With Given Character
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { countSubstrings } = require("./solution");

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

console.log("\n3084. Count Substrings Starting And Ending With Given Character\n");

test(countSubstrings("zzz", "z"), 6, 'Test 1');
test(countSubstrings("abcabcabc", "b"), 6, 'Test 2');
test(countSubstrings("abcdefg", "f"), 1, 'Test 3');
test(countSubstrings("", "a"), 0, 'Test 4');
test(countSubstrings("abcabcabc", "a"), 6, 'Test 5');
test(countSubstrings("hello", "l"), 3, 'Test 6');
test(countSubstrings("xyz", "a"), 0, 'Test 7');
test(countSubstrings("aaaaa", "a"), 15, 'Test 8');
test(countSubstrings("abc", "a"), 1, 'Test 9');
test(countSubstrings("abcabcabc", "c"), 6, 'Test 10');
test(countSubstrings("aaa", "a"), 6, 'Test 11');
test(countSubstrings("abada", "a"), 6, 'Test 12');
test(countSubstrings("mississippi", "i"), 10, 'Test 13');
test(countSubstrings("lalalalalalalala", "l"), 36, 'Test 14');
test(countSubstrings("aabaaacaaadaaae", "e"), 1, 'Test 15');
test(countSubstrings("bcbcbcbcb", "b"), 15, 'Test 16');
test(countSubstrings("aabbccddeeff", "f"), 3, 'Test 17');
test(countSubstrings("lkjkljkljkljklj", "k"), 15, 'Test 18');
test(countSubstrings("repeatedcharactersrepeatedcharacters", "r"), 21, 'Test 19');
test(countSubstrings("abcbcbcbc", "b"), 10, 'Test 20');
test(countSubstrings("acbacbacbacbacbac", "a"), 21, 'Test 21');
test(countSubstrings("racecar", "r"), 3, 'Test 22');
test(countSubstrings("abababababa", "b"), 15, 'Test 23');
test(countSubstrings("xyzzyxzyzxzyz", "z"), 21, 'Test 24');
test(countSubstrings("pppppppppppp", "p"), 78, 'Test 25');
test(countSubstrings("abcdefghijk", "j"), 1, 'Test 26');
test(countSubstrings("pqrsrqpqrsrqpqrs", "r"), 15, 'Test 27');
test(countSubstrings("bookkeeper", "e"), 6, 'Test 28');
test(countSubstrings("aaaabbbcccddd", "b"), 6, 'Test 29');
test(countSubstrings("noonnoonnoon", "n"), 21, 'Test 30');
test(countSubstrings("xyxzyxzyxzyxzyx", "y"), 15, 'Test 31');
test(countSubstrings("aaaaabaaaa", "a"), 45, 'Test 32');
test(countSubstrings("aabbccddeeffgg", "g"), 3, 'Test 33');
test(countSubstrings("banana", "a"), 6, 'Test 34');
test(countSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "z"), 990, 'Test 35');
test(countSubstrings("bbaabbaabbaa", "b"), 21, 'Test 36');
test(countSubstrings("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm", "m"), 3, 'Test 37');
test(countSubstrings("bananabananabanana", "a"), 45, 'Test 38');
test(countSubstrings("aabbccddeeffgg", "b"), 3, 'Test 39');
test(countSubstrings("abacabadabacaba", "a"), 36, 'Test 40');
test(countSubstrings("aaaaabaaa", "a"), 36, 'Test 41');
test(countSubstrings("qwertyuiop", "q"), 1, 'Test 42');
test(countSubstrings("ababababab", "b"), 15, 'Test 43');
test(countSubstrings("xyxzyxzyx", "x"), 10, 'Test 44');
test(countSubstrings("abcdefghij", "a"), 1, 'Test 45');
test(countSubstrings("zzzzzzzzzzzzzzzzz", "z"), 153, 'Test 46');
test(countSubstrings("hellohellohello", "o"), 6, 'Test 47');
test(countSubstrings("hello", "o"), 1, 'Test 48');
test(countSubstrings("abcdefgabcdefgabcdefg", "d"), 6, 'Test 49');
test(countSubstrings("qqwweerrttyyuuiioopp", "q"), 3, 'Test 50');
test(countSubstrings("aabacabaa", "a"), 21, 'Test 51');
test(countSubstrings("lkjlkjlkjlkj", "l"), 10, 'Test 52');
test(countSubstrings("aaabaaaabaaaa", "a"), 66, 'Test 53');
test(countSubstrings("aabbccddeeff", "d"), 3, 'Test 54');
test(countSubstrings("aabbccddeeff", "c"), 3, 'Test 55');
test(countSubstrings("abcdabcde", "d"), 3, 'Test 56');
test(countSubstrings("aaaaabbbbbb", "b"), 21, 'Test 57');
test(countSubstrings("ananananananananana", "n"), 45, 'Test 58');
test(countSubstrings("abcababcabcab", "b"), 15, 'Test 59');
test(countSubstrings("abacaba", "a"), 10, 'Test 60');
test(countSubstrings("xyxzxyxzyzx", "x"), 15, 'Test 61');
test(countSubstrings("aaaaaaaaaaaaaaaaaaaaaaaaaa", "a"), 351, 'Test 62');
test(countSubstrings("hellohellobyehello", "o"), 6, 'Test 63');
test(countSubstrings("zzzzzzzzzzzzz", "z"), 91, 'Test 64');
test(countSubstrings("aninterestingproblem", "n"), 6, 'Test 65');
test(countSubstrings("abcdefghijabcdefghijabcdefghij", "i"), 6, 'Test 66');
test(countSubstrings("llllllllllllllllllllllllll", "l"), 351, 'Test 67');
test(countSubstrings("bcbcbcbcbcb", "b"), 21, 'Test 68');
test(countSubstrings("bababababababa", "b"), 28, 'Test 69');
test(countSubstrings("abcdefghefghijklmnopqrstuvwxyz", "a"), 1, 'Test 70');
test(countSubstrings("abcdefghi", "a"), 1, 'Test 71');
test(countSubstrings("aaaaabaaaaa", "a"), 55, 'Test 72');
test(countSubstrings("qwertyuiopasdfghjklzxcvbnmqwertyuiop", "q"), 3, 'Test 73');
test(countSubstrings("abcdefghij", "j"), 1, 'Test 74');
test(countSubstrings("thisisaverylongstringwithseveralcharacters", "t"), 10, 'Test 75');
test(countSubstrings("abcdefghigklmnopqrstuvwxyz", "a"), 1, 'Test 76');
test(countSubstrings("xyzzzyzxzyzxzyz", "z"), 36, 'Test 77');
test(countSubstrings("zzzzzzzzzz", "z"), 55, 'Test 78');
test(countSubstrings("xyzyxzyzxzyzx", "x"), 10, 'Test 79');
test(countSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "z"), 3, 'Test 80');
test(countSubstrings("xyzxyzxyzxyz", "x"), 10, 'Test 81');
test(countSubstrings("abacabadaba", "a"), 21, 'Test 82');
test(countSubstrings("programming", "m"), 3, 'Test 83');
test(countSubstrings("aaabaaa", "a"), 21, 'Test 84');
test(countSubstrings("anananananan", "a"), 21, 'Test 85');
test(countSubstrings("cccccccccc", "c"), 55, 'Test 86');
test(countSubstrings("cccccccccccccccccc", "c"), 171, 'Test 87');
test(countSubstrings("xyzxyzxyz", "z"), 6, 'Test 88');
test(countSubstrings("zazazazazaz", "z"), 21, 'Test 89');
test(countSubstrings("abcdefghigklmnopqrstuvwxyz", "z"), 1, 'Test 90');
test(countSubstrings("aabaaacaaadaaae", "a"), 66, 'Test 91');
test(countSubstrings("bcbcbcbc", "b"), 10, 'Test 92');
test(countSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", "a"), 0, 'Test 93');
test(countSubstrings("aabbccddeeffaabbccddeeff", "d"), 10, 'Test 94');
test(countSubstrings("abcdefabcdefabcdef", "f"), 6, 'Test 95');
test(countSubstrings("abracadabra", "a"), 15, 'Test 96');
test(countSubstrings("aaaaaaaaaaaaaa", "a"), 105, 'Test 97');
test(countSubstrings("popcornpopcorn", "p"), 10, 'Test 98');
test(countSubstrings("xyxxyxyxy", "x"), 15, 'Test 99');
test(countSubstrings("bbbbbbbbbb", "b"), 55, 'Test 100');
test(countSubstrings("abcdefg", "g"), 1, 'Test 101');
test(countSubstrings("hellohellohellohello", "l"), 36, 'Test 102');
test(countSubstrings("abcdeabcdeabcde", "a"), 6, 'Test 103');
test(countSubstrings("abcdefhijklmnopqrstuvwxyz", "z"), 1, 'Test 104');
test(countSubstrings("aabbccddeeff", "b"), 3, 'Test 105');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

