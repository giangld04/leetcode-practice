// Test: 830. Positions Of Large Groups
// 54 test cases from LeetCodeDataset
// Run: node test.js

const { largeGroupPositions } = require("./solution");

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

console.log("\n830. Positions Of Large Groups\n");

test(largeGroupPositions("aabbbccccdddd"), [[2, 4], [5, 8], [9, 12]], 'Test 1');
test(largeGroupPositions("aabbbccccddeee"), [[2, 4], [5, 8], [11, 13]], 'Test 2');
test(largeGroupPositions("abcdefghijk"), [], 'Test 3');
test(largeGroupPositions("aabbaa"), [], 'Test 4');
test(largeGroupPositions("aabbccccaaaabbccccaaaabbcccc"), [[4, 7], [8, 11], [14, 17], [18, 21], [24, 27]], 'Test 5');
test(largeGroupPositions("a"), [], 'Test 6');
test(largeGroupPositions("abbxxxxzzy"), [[3, 6]], 'Test 7');
test(largeGroupPositions("zzzzyyyyy"), [[0, 3], [4, 8]], 'Test 8');
test(largeGroupPositions("aa"), [], 'Test 9');
test(largeGroupPositions("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), [[0, 69]], 'Test 10');
test(largeGroupPositions("aaa"), [[0, 2]], 'Test 11');
test(largeGroupPositions("pppppqqqppppppqqqqqqqqq"), [[0, 4], [5, 7], [8, 13], [14, 22]], 'Test 12');
test(largeGroupPositions("zzzzzzzzzz"), [[0, 9]], 'Test 13');
test(largeGroupPositions("aabbccddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooopppqqqrrrsttuuvvvwwwwxxxxyyyyzzzz"), [[8, 11], [12, 15], [16, 19], [20, 23], [24, 27], [28, 31], [32, 35], [36, 39], [40, 43], [44, 47], [48, 50], [51, 53], [54, 56], [57, 59], [65, 67], [68, 71], [72, 75], [76, 79], [80, 83]], 'Test 14');
test(largeGroupPositions("abc"), [], 'Test 15');
test(largeGroupPositions("abcd"), [], 'Test 16');
test(largeGroupPositions("aabbbccddddeeeee"), [[2, 4], [7, 10], [11, 15]], 'Test 17');
test(largeGroupPositions("aaabaaa"), [[0, 2], [4, 6]], 'Test 18');
test(largeGroupPositions("abcdddeeeeaabbbcd"), [[3, 5], [6, 9], [12, 14]], 'Test 19');
test(largeGroupPositions("zzzzz"), [[0, 4]], 'Test 20');
test(largeGroupPositions("aabbccddeee"), [[8, 10]], 'Test 21');
test(largeGroupPositions("aaabbbcccddd"), [[0, 2], [3, 5], [6, 8], [9, 11]], 'Test 22');
test(largeGroupPositions("aaaaabbbbbcccccc"), [[0, 4], [5, 9], [10, 15]], 'Test 23');
test(largeGroupPositions("aabbcccddd"), [[4, 6], [7, 9]], 'Test 24');
test(largeGroupPositions("aabbccddeeffgggghhiijjjkkkllmmnnnooopppqqqqrrrrssss"), [[12, 15], [20, 22], [23, 25], [30, 32], [33, 35], [36, 38], [39, 42], [43, 46], [47, 50]], 'Test 25');
test(largeGroupPositions("zzzzzzyyyyaaaabbcccc"), [[0, 5], [6, 9], [10, 13], [16, 19]], 'Test 26');
test(largeGroupPositions("abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"), [], 'Test 27');
test(largeGroupPositions("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzzzzzzzzz"), [[50, 59]], 'Test 28');
test(largeGroupPositions("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), [[0, 101]], 'Test 29');
test(largeGroupPositions("xyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyzxyz"), [], 'Test 30');
test(largeGroupPositions("aabbccccddeeeffffggggghhhhhiiiiijjjjjjkkkklllllmmmmmnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxyyyyzzzz"), [[4, 7], [10, 12], [13, 16], [17, 21], [22, 26], [27, 31], [32, 37], [38, 41], [42, 46], [47, 51], [54, 57], [58, 61], [62, 65], [66, 69], [70, 73], [74, 77], [78, 81], [82, 85], [86, 89], [90, 92], [93, 96], [97, 100]], 'Test 31');
test(largeGroupPositions("ababababababababababababababababababababababababababababababababababababababababababab"), [], 'Test 32');
test(largeGroupPositions("zzzzzyyyyyxxxxwwwwvvvvuuuuttttsrrrqqqpooooonnnnmmmmmlllllkkkkjjjjjiiiihhhhhgggggfffffeeee"), [[0, 4], [5, 9], [10, 13], [14, 17], [18, 21], [22, 25], [26, 29], [31, 33], [34, 36], [38, 42], [43, 46], [47, 51], [52, 56], [57, 60], [61, 65], [66, 69], [70, 74], [75, 79], [80, 84], [85, 88]], 'Test 33');
test(largeGroupPositions("aabcccccaaaaabbbcccc"), [[3, 7], [8, 12], [13, 15], [16, 19]], 'Test 34');
test(largeGroupPositions("abcdefghijkllllmnopqrstuvwxyz"), [[11, 14]], 'Test 35');
test(largeGroupPositions("abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaaaa"), [[51, 54]], 'Test 36');
test(largeGroupPositions("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"), [[0, 84], [85, 166]], 'Test 37');
test(largeGroupPositions("aaaaaaabbbbbcccccdddddeeeeeeaaaaaaaaabbbbcccccddeeeeefffff"), [[0, 6], [7, 11], [12, 16], [17, 21], [22, 27], [28, 36], [37, 40], [41, 45], [48, 52], [53, 57]], 'Test 38');
test(largeGroupPositions("abccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd"), [[2, 65]], 'Test 39');
test(largeGroupPositions("tttttttttttttttttttttttttttttttttttttt"), [[0, 37]], 'Test 40');
test(largeGroupPositions("aabbccddeeeffffggggghhhhhiiiiijjjjjj"), [[8, 10], [11, 14], [15, 19], [20, 24], [25, 29], [30, 35]], 'Test 41');
test(largeGroupPositions("xyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), [[2, 47]], 'Test 42');
test(largeGroupPositions("aabbccccddeeeffffggggghhhhhiiiiijjjjjjkkkklllllmmmmmnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxyyyyzzzzz"), [[4, 7], [10, 12], [13, 16], [17, 21], [22, 26], [27, 31], [32, 37], [38, 41], [42, 46], [47, 51], [54, 57], [58, 61], [62, 65], [66, 69], [70, 73], [74, 77], [78, 81], [82, 85], [86, 89], [90, 92], [93, 96], [97, 101]], 'Test 43');
test(largeGroupPositions("abcdefghiiiiijkllllmmnopqqqrrr"), [[8, 12], [15, 18], [24, 26], [27, 29]], 'Test 44');
test(largeGroupPositions("abcdefghijklmnopqrstuvwwxyzzaaabbbccc"), [[28, 30], [31, 33], [34, 36]], 'Test 45');
test(largeGroupPositions("kkkkkklllllmmmmmnnnnnoooooopppppqqqqqqrrrrrssssstttttuuuuuvvvvvwwwwwxxyyyyyzzzzz"), [[0, 5], [6, 10], [11, 15], [16, 20], [21, 26], [27, 31], [32, 37], [38, 42], [43, 47], [48, 52], [53, 57], [58, 62], [63, 67], [70, 74], [75, 79]], 'Test 46');
test(largeGroupPositions("aabbccccddddeeeffffffgggghhhiiiiijjjkkllmmnnnooppqqrrssttuuvvwxxxwwvvuuttssrrqponmlkjihgfedcba"), [[4, 7], [8, 11], [12, 14], [15, 20], [21, 24], [25, 27], [28, 32], [33, 35], [42, 44], [62, 64]], 'Test 47');
test(largeGroupPositions("aaaaabbbbccccdddd"), [[0, 4], [5, 8], [9, 12], [13, 16]], 'Test 48');
test(largeGroupPositions("ppppqqqqrrrsssttttuuuuvvvvwxxx"), [[0, 3], [4, 7], [8, 10], [11, 13], [14, 17], [18, 21], [22, 25], [27, 29]], 'Test 49');
test(largeGroupPositions("aaaaaaaaaabbbbbbbbbbbbbbccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffggggggggggggggggg"), [[0, 9], [10, 23], [24, 47], [48, 84], [85, 116], [117, 131], [132, 148]], 'Test 50');
test(largeGroupPositions("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnmmmm"), [[0, 47], [48, 51]], 'Test 51');
test(largeGroupPositions("xyzzyxwwwwwzzzzzz"), [[6, 10], [11, 16]], 'Test 52');
test(largeGroupPositions("aabbccddeeffggccddeeffggccddeeffggccddeeffggccddeeffgg"), [], 'Test 53');
test(largeGroupPositions("aaabbbcccddddeeefff ggghhhhiiiiijjjjkkkkllllmmmmnnnnooopppqqqqrrrrssttttuuuuvvvvwwwwxxxxxyyyyyzzzzz"), [[0, 2], [3, 5], [6, 8], [9, 12], [13, 15], [16, 18], [20, 22], [23, 26], [27, 31], [32, 35], [36, 39], [40, 43], [44, 47], [48, 51], [52, 54], [55, 57], [58, 61], [62, 65], [68, 71], [72, 75], [76, 79], [80, 83], [84, 88], [89, 93], [94, 98]], 'Test 54');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

