// Test: 809. Expressive Words
// 71 test cases from LeetCodeDataset
// Run: node test.js

const { expressiveWords } = require("./solution");

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

console.log("\n809. Expressive Words\n");

test(expressiveWords("aaabaaa", ["aa", "aaa", "aaaa", "aabaaa"]), 1, 'Test 1');
test(expressiveWords("aaabaaa", ["aaa", "aab", "aaaaa", "aaabaa", "aaaba"]), 2, 'Test 2');
test(expressiveWords("abcd", ["abc", "abcd", "abdc", "aabbccdd"]), 1, 'Test 3');
test(expressiveWords("abcd", ["abc", "abcd", "abcde"]), 1, 'Test 4');
test(expressiveWords("aaabbbcccddd", ["aabbccddd", "aabbbcccddd", "aabbbcccdd"]), 3, 'Test 5');
test(expressiveWords("a", ["a", "aa", "aaa", "aaaa"]), 1, 'Test 6');
test(expressiveWords("aabbcc", ["aabbcc", "aabbc", "aaabc"]), 1, 'Test 7');
test(expressiveWords("abcd", ["aabbccdd", "abccdd", "abbbccdd", "aabbcccddd"]), 0, 'Test 8');
test(expressiveWords("heeellooo", ["hello", "hi", "helo"]), 1, 'Test 9');
test(expressiveWords("aaabaaa", ["aab", "aaab", "aaaab", "aaaba", "aaaaaaab"]), 1, 'Test 10');
test(expressiveWords("abcd", ["abc", "ab", "abcd", "abcde"]), 1, 'Test 11');
test(expressiveWords("aaa", ["a", "aa", "aaa", "aaaa", "aaaaa"]), 3, 'Test 12');
test(expressiveWords("abcd", ["abc", "abcd", "abcde", "ab", "a"]), 1, 'Test 13');
test(expressiveWords("aaabbb", ["aabb", "aabbbb", "aaabbbb"]), 1, 'Test 14');
test(expressiveWords("abcd", ["abc", "ab", "abcd", "abcde", "aabbccdd"]), 1, 'Test 15');
test(expressiveWords("zzzzzyyyyy", ["zzyy", "zy", "zyy"]), 3, 'Test 16');
test(expressiveWords("heeellloooopppp", ["helloppp", "heellooppp", "helooppp", "helllopppp", "heeelllooooooo", "hello"]), 4, 'Test 17');
test(expressiveWords("ttttuuuuuuuuuuuuvvv", ["tuv", "tttuuuuuuuuuuvvv", "ttttuuuuuuuuuuu", "ttttuuuuuuuuuvv", "ttttuuuuuuuuuuuuv"]), 4, 'Test 18');
test(expressiveWords("heeeloooooo", ["hello", "heeellooo", "helllooo", "heellooo", "heeelloo"]), 0, 'Test 19');
test(expressiveWords("aaaabbbbcccc", ["aabbcc", "aaabbbcccc", "aaaabbbbccc", "aaaabbbcccc", "aaaaabbbbcccc"]), 4, 'Test 20');
test(expressiveWords("aaaabbbbccccddddeeee", ["aabcd", "abbbcd", "abccde", "abcde", "aaaaabbbbccccddddeee"]), 2, 'Test 21');
test(expressiveWords("mmmmnnnnnnoooopppppp", ["mnop", "mmnnnnoooppp", "mmmmmnnnnnnnoooooopppppp", "mmnnoopp", "mmnnoooopppp"]), 4, 'Test 22');
test(expressiveWords("xxxxxyyyyyyzzzzzz", ["xyzz", "xxxyyyyzzz", "xxxxxyyyzzzzz", "xxxxxyyyyyyzzzz", "xxxxxyyyyyyzzzzzz"]), 5, 'Test 23');
test(expressiveWords("llllaaaabbbbccccddddeeeee", ["laabcd", "labbbccddeee", "labcde", "laaaabbbbccccddddeee", "lbbbcccddddeeee"]), 3, 'Test 24');
test(expressiveWords("abbbcccddd", ["abc", "abbc", "abbcc", "abbbcccd", "abbbcccddd", "abbbcccdd", "abbbccccd", "abbbccccdd"]), 3, 'Test 25');
test(expressiveWords("mmmmnnnnoooopppp", ["mno", "mmnnnnooooppp", "mmmmnnnnoooop", "mmmmnnnnoooopppp", "mmmmnnnnoooppp"]), 4, 'Test 26');
test(expressiveWords("heeellloooowooorlddd", ["helo", "hello", "helooworld", "heeellooworld", "heeelllooooowooorlddd"]), 2, 'Test 27');
test(expressiveWords("mmmmmmmnnnnnnn", ["mmnn", "mmmnnn", "mmmmnnnn", "mmmmmn", "mmmmnn", "mmmmmnnn", "mmmmmmnnnnn", "mmmmmmnnnn"]), 8, 'Test 28');
test(expressiveWords("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "zzzzz", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "aabbbccddeeefffgghhhiiiijjjkkklllmmmnnnooooppppqqqqrrrrsssss", "aabbccddeeefffgggiiiijjjkkklllmmmnnnoooopppqqqqrrrrrrsssss", "aabbccddeeffgghhiijjkkklllmmmmmnnnnnoooooopppppqqqqqqrrrrrrssssss"]), 1, 'Test 29');
test(expressiveWords("xyzzzzzyyyyyyyy", ["xyz", "xyyz", "xyzz", "xyzzz", "xyzzzz", "xyzzzzzyyyyy", "xyzzzzzyyyyyy", "xyzzzzzyyyyyyyy"]), 3, 'Test 30');
test(expressiveWords("zzzzzzzyyyyyyy", ["zzzyyyy", "zzzzzyyy", "zzzyyyyyyy", "zzzzzzzzyy", "zyyyyyyy"]), 4, 'Test 31');
test(expressiveWords("mississippiiii", ["mississippi", "missisiiippi", "mississippiiiii", "missisipi", "misisipi"]), 1, 'Test 32');
test(expressiveWords("xxyyzzzz", ["xxyyz", "xxyyzz", "xxxyyyzzzz", "xxyyzzz", "xyzzz"]), 3, 'Test 33');
test(expressiveWords("aabbccccddddeeeffggg", ["aabbccddeeffg", "aabbcccddddeffgg", "aabbbccccddddeeeffggg", "aabbbcccddddeeeffgg", "aabbccccdddddeeeffggg"]), 2, 'Test 34');
test(expressiveWords("xxxxxxyyyyyyzzzzzz", ["xyzz", "xyzzz", "xyyz", "xxxyyyyzzz", "xxxxxyyyyyyzzzzzz"]), 5, 'Test 35');
test(expressiveWords("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", ["qq", "qqq", "qqqq", "qqqqqq", "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"]), 4, 'Test 36');
test(expressiveWords("ttttttttttttuuuuuuuuuuuuuuuvvvvvvvvvvvvvvvvvvvvvvvv", ["tuv", "ttuuuvvv", "ttttuuuuuuuvvvvvvv", "tttuuuuuuvvvvvvvvvv", "ttttuuuuuuuuuuuvvvvvvvvvvvvvvvvvv"]), 5, 'Test 37');
test(expressiveWords("ppppqqqqrrrrssss", ["pqrst", "pqrs", "ppqrs", "ppqqrrss", "ppqqqrrrssss", "ppqqqqrrrrsssss"]), 4, 'Test 38');
test(expressiveWords("helloooooworlddddd", ["hellooworld", "hellooworlddd", "hellllooworld", "helloooworldddddd", "hellooooooworlddddd"]), 2, 'Test 39');
test(expressiveWords("mississippiissi", ["mississippissi", "misisipi", "mississippi", "mississsippi", "mississippiii"]), 0, 'Test 40');
test(expressiveWords("aabbccddeee", ["abcde", "aabbcdeee", "aaabbbcccdddeee", "aabbccdde", "aabccdeee"]), 1, 'Test 41');
test(expressiveWords("ppppqqqqrrrssss", ["pqr", "ppqqrrsss", "pppqqqrrrrssss", "ppqqrrsssss", "ppqqrrr"]), 1, 'Test 42');
test(expressiveWords("abcdefghijklllllmnopqrstuvwxyz", ["abcdefghijklmopqrstuvwxyz", "abcdefghijklllmmnopqrstuvwxyz", "abcdefghijkllllmnopqrstuvwxyz", "abcdefghijklllllmnopqrstuvwxy", "abcdefghijklllllmnopqrstuvwxyz"]), 2, 'Test 43');
test(expressiveWords("hhheeelllllooooworrlldd", ["helloworld", "hhhellooooworld", "hheeellllllooooworld", "hellooworld", "hheellooworl"]), 0, 'Test 44');
test(expressiveWords("ssssaaafffff", ["saff", "ssaff", "ssaaaff", "ssaaaafff", "ssaaaaaffff", "ssssaaaafffff"]), 3, 'Test 45');
test(expressiveWords("abcdefghijjjjjjjklmnopqrstuvwxyz", ["abcdefghijklnopqrstuvwxyz", "abcdefghijjjklmnopqrstuvwxyz", "abcdefghijjjjjjklmnopqrstuvwxyz", "abcdefghijjjjjjjklmnopqrstuv", "abcdefghijjjjjjjmnopqrstuvwxyz"]), 2, 'Test 46');
test(expressiveWords("abcdefghiiiiijjjjjjkkkkkkk", ["abcdefghijjk", "abcdefghijk", "abcdefghiiijjjjkk", "abcdefghiiijjjjjjkkkkk", "abcdefghiiijjjjjjkkkkkkk"]), 5, 'Test 47');
test(expressiveWords("abcdefghijklmnopqrstuvwxyz", ["abcdefghijklmnopqrstuvwxyzz", "abcdefghijklmnopqrstuvwxy", "abcdefghijklmnopqrstuvwxyzzz", "abcdefghijklmnopqrstuvwxyzzzz", "abcdefghijklmnopqrstuvwxyzzzzz"]), 0, 'Test 48');
test(expressiveWords("aaaaaaabbbbcccdd", ["aabbbccdd", "aaabbbcccdd", "aaaabbbcccdd", "aaaaabbbcccdd", "aaaaaaabbbcccdd", "aaaaaaabbbcccd", "aaaaaaabbbbccdd", "aaaaaaabbbbcccdd"]), 7, 'Test 49');
test(expressiveWords("qqqqqqqqqqqwwweeeerrrrttttt", ["qqqqqqqwwwreeeeeerttt", "qqqwwwreeert", "qqqqqqqwwwreeerrttt", "qqqqqqqqqqqwwweeeerrrtttt", "qqqqqqqwwweeeerrrtttt"]), 2, 'Test 50');
test(expressiveWords("abcdeeeeef", ["abcdeeef", "abcdeeeef", "abcdeeeeeef", "abcdfeeeef", "abcdef"]), 3, 'Test 51');
test(expressiveWords("abcdefghijjkkklllllmmmmmmmnnnnnnnnnooooooooooopppppppppppppppqqqqqqqqqqqqqqqqqqrrrrrrrrrrrrrrrrrrssssssssssssssssttttttttttttttttttuuuuuuuuuuuuuuuuvvvvvvvvvvvvvvvvvwwwwwwwwwwwwwwwwxxyyyyyyyyyyyyyyyyyzzzzzzzzzzzzzzzz", ["abcdefghijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "abcdefghijjkkkllllmmmmnnnnooooopppqqqqrrrrsssssttttuvvvvwwwwxxyyyyzzzz", "abcdefghijjkkklllllmmmmmmnnnnnnnooooooooooopppppppppppppppqqqqqqqqqqqqqqqqqqrrrrrrrrrrrrrrrrrrssssssssssssssssttttttttttttttttttuuuuuuuuuuuuuuuuvvvvvvvvvvvvvvvvvwwwwwwwwwwwwwwwwxxyyyyyyyyyyyyyyyyyzzzzzzzzzzzzzzzz"]), 3, 'Test 52');
test(expressiveWords("abbbccdddd", ["abcdd", "abbbccdd", "abbbccccdd", "abbbccdddd", "aabbccddd"]), 2, 'Test 53');
test(expressiveWords("ppppqqqqrrr", ["pqr", "pppqqrr", "ppqqqrrr", "pppqqqqrrr", "ppppqqqrrr"]), 5, 'Test 54');
test(expressiveWords("aaaaaabbcccddeeeee", ["aabccddee", "aaabbbcccdddeeee", "aaaabbbcccdddeee", "aaaaabbcccddeeee", "aaaaabbbbccccddeeeeee"]), 1, 'Test 55');
test(expressiveWords("llllllmmmnnnnoo", ["lmno", "lllmmnno", "lllllmmnnnoo", "lllmmmnnnnoo", "llllllmmmnnno"]), 2, 'Test 56');
test(expressiveWords("aabbccddeeefffggg", ["aabbccddeefffggg", "aabbbcccdddeeefffggg", "aabbccddeeeffffgggg", "aabbccddeeeffg", "aabbcddfeeeffggg"]), 2, 'Test 57');
test(expressiveWords("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", ["z", "zz", "zzz", "zzzz", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"]), 4, 'Test 58');
test(expressiveWords("ttrrreeee", ["tree", "ttrree", "ttrreee", "ttreee", "ttrre", "ttre", "trreee", "ttreere"]), 5, 'Test 59');
test(expressiveWords("mmmaaa", ["maa", "maaaa", "mmmaaa", "mmma", "mmmaaaam"]), 3, 'Test 60');
test(expressiveWords("sssssssssssssssssssssssssssss", ["s", "ss", "sss", "sssss", "sssssss", "sssssssssssssssssssssssssssss"]), 6, 'Test 61');
test(expressiveWords("nnnnooouuuuuuuuu", ["no", "noon", "nou", "noou", "noonnouuuu", "nnoooouuuuuuuu", "nnooouuuuuuuuu", "nnnooouuuuuuuuu"]), 4, 'Test 62');
test(expressiveWords("aaabbbccc", ["aabbccc", "aaabccc", "aaabbbcc", "aabbbccc", "aaabbbccccc"]), 4, 'Test 63');
test(expressiveWords("aaabbbcccddd", ["ab", "aabbccddd", "aabbbcccddd", "aaabbbcccdd", "aaabbbcccd"]), 4, 'Test 64');
test(expressiveWords("aaaabbbbccccdddd", ["aabbccdd", "aaabbbcccddd", "aaaabbbbccccdddd", "aabbbbccccdddd", "aaaabbbcccdddd"]), 5, 'Test 65');
test(expressiveWords("qqqqqqqqqqqqqqqqq", ["q", "qq", "qqq", "qqqq", "qqqqq", "qqqqqq", "qqqqqqqq", "qqqqqqqqqqqqqqqqq"]), 8, 'Test 66');
test(expressiveWords("xxxyyyzzz", ["xyzz", "xxyyz", "xxyyzz", "xxxyyyzzz", "xxxyyzzz", "xxxxyyzzz", "xxxyyyyzzz"]), 5, 'Test 67');
test(expressiveWords("abbbbbccccdddd", ["abc", "abcd", "abbc", "abcdd", "abbbbbccccdddd"]), 3, 'Test 68');
test(expressiveWords("aaaaaaaaaabbbbbbbbbbcccccccccc", ["aabbbccc", "aaaaaaaaabbbbbbbbbbcccccccc", "aaaaaaaaabbbbbbbbcccccccccc", "aaaaaaaaaabbbbbbbbbbcccccc", "aaaaaaaaaabbbbbbbbbbccccccccccc"]), 4, 'Test 69');
test(expressiveWords("mississiissippii", ["mississippi", "mississiippii", "mississsippii", "mississssippiii", "mississssiiiiippiii"]), 0, 'Test 70');
test(expressiveWords("xyzzzzzzzzzxyzzzzzzzzzxyzzzzzzzzz", ["xyzyxzy", "xyzzzxyzzzxyzzz", "xyzzzzxyzzzzxyzzzz", "xyzzzzzzzzxyzzzzzzzzxyzzzzzzzz", "xyzzzzzzzzzxyzzzzzzzzxzzzzzzzzzz"]), 3, 'Test 71');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

