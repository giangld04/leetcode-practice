// Test: 3330. Find The Original Typed String I
// 54 test cases from LeetCodeDataset
// Run: node test.js

const { possibleStringCount } = require("./solution");

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

console.log("\n3330. Find The Original Typed String I\n");

test(possibleStringCount("aaabbbccc"), 7, 'Test 1');
test(possibleStringCount("abbcccc"), 5, 'Test 2');
test(possibleStringCount("mississippi"), 4, 'Test 3');
test(possibleStringCount("zzzzzzz"), 7, 'Test 4');
test(possibleStringCount("zzzzzzzzzz"), 10, 'Test 5');
test(possibleStringCount("aabbccdd"), 5, 'Test 6');
test(possibleStringCount("aabbbaaccc"), 7, 'Test 7');
test(possibleStringCount("banana"), 1, 'Test 8');
test(possibleStringCount("aabbccddeeff"), 7, 'Test 9');
test(possibleStringCount("zzzzzzzzz"), 9, 'Test 10');
test(possibleStringCount("clumsytyping"), 1, 'Test 11');
test(possibleStringCount("aaaa"), 4, 'Test 12');
test(possibleStringCount("aabbcc"), 4, 'Test 13');
test(possibleStringCount("hello"), 2, 'Test 14');
test(possibleStringCount("abcde"), 1, 'Test 15');
test(possibleStringCount("abcd"), 1, 'Test 16');
test(possibleStringCount("zzzzz"), 5, 'Test 17');
test(possibleStringCount("abcabcabc"), 1, 'Test 18');
test(possibleStringCount("alice"), 1, 'Test 19');
test(possibleStringCount("a"), 1, 'Test 20');
test(possibleStringCount("programming"), 2, 'Test 21');
test(possibleStringCount("ppppppqqqqqqrrrrrr"), 16, 'Test 22');
test(possibleStringCount("xyxxyxyxyx"), 2, 'Test 23');
test(possibleStringCount("aaaaaaaaaabbbbbbbbbb"), 19, 'Test 24');
test(possibleStringCount("aaaaaaaaaabbbbbbbbbbcccccccccc"), 28, 'Test 25');
test(possibleStringCount("aabbccddeeeffffggg"), 12, 'Test 26');
test(possibleStringCount("aabbccddeeefffggg"), 11, 'Test 27');
test(possibleStringCount("aabbbcccccdddddeeeeeeffffffgggggghhhhhiiiiiijjjjjkkkkklllllmmmmmnnnnnooooooopppppqqqqqrrrrrssssstttttuuuuuvvvvvwwwwxxxyyyyzzzz"), 101, 'Test 28');
test(possibleStringCount("aabbccddeeffgg"), 8, 'Test 29');
test(possibleStringCount("aabbccddeeffggzzzz"), 11, 'Test 30');
test(possibleStringCount("aabbbcccdddeeefff"), 12, 'Test 31');
test(possibleStringCount("abaaac"), 3, 'Test 32');
test(possibleStringCount("aaabbbcccdddeeefffggghhhiii"), 19, 'Test 33');
test(possibleStringCount("aaaaabbccddd"), 9, 'Test 34');
test(possibleStringCount("abcdefghijklmnop"), 1, 'Test 35');
test(possibleStringCount("xyzzzzzzzzzzzzzzzzzzyx"), 18, 'Test 36');
test(possibleStringCount("aaaabbbbccccdddd"), 13, 'Test 37');
test(possibleStringCount("ppppqqqqqqrrrrrr"), 14, 'Test 38');
test(possibleStringCount("aabbccddeeffggzzzzzzzzzz"), 17, 'Test 39');
test(possibleStringCount("ababababab"), 1, 'Test 40');
test(possibleStringCount("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 27, 'Test 41');
test(possibleStringCount("abcdefg"), 1, 'Test 42');
test(possibleStringCount("abcabcabcabcabc"), 1, 'Test 43');
test(possibleStringCount("aabbbcccccdddddeeeeeeffffffgggggghhhhhiiiiiijjjjjkkkkklllllmmmmmnnnnnooooooopppppqqqqqrrrrrssssstttttuuuuuvvvvvwwwwxxxyyyyzzzzzz"), 103, 'Test 44');
test(possibleStringCount("abcdefghijjjjjjjjjjjklmnopqrstuuuuuuuuuuuuuuuuuuuvwxyzzzzzzzzzzzz"), 40, 'Test 45');
test(possibleStringCount("aaaaaaaaaabbbbbbbbbccccccccddddddddeeeeeeeeeffffffffgggggggghhhhhhhhiiiiiiiijjjjjjjjkkkkkkkkllllllllmmmmmmmmnnnnnnnnooooooooooppppppppqqqqqqqqrrrrrrrrssssssssttttttttuuuuuuuuvvvvvvvvwwwwwwwwxxxxxxxxxyyyyyyyyzzzzzzzzz"), 191, 'Test 46');
test(possibleStringCount("bookkeeper"), 4, 'Test 47');
test(possibleStringCount("zzzzzzyy"), 7, 'Test 48');
test(possibleStringCount("abcdaabbccddeeff"), 7, 'Test 49');
test(possibleStringCount("aabbaaabbbaaaa"), 10, 'Test 50');
test(possibleStringCount("xxyyzzxxxyyzz"), 8, 'Test 51');
test(possibleStringCount("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), 94, 'Test 52');
test(possibleStringCount("abcabcabcabc"), 1, 'Test 53');
test(possibleStringCount("zzzzyyyy"), 7, 'Test 54');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

